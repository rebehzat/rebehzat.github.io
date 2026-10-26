"""Dependency-free checks for the static site's public contract."""
from html.parser import HTMLParser
from pathlib import Path
import unittest
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.ids, self.links, self.images, self.resources = [], [], [], []
        self.feed(text)

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        if tag == 'a':
            self.links.append(attrs.get('href', ''))
        if tag == 'img':
            self.images.append(attrs)
        if tag in ('img', 'link', 'script'):
            self.resources.append(attrs.get('src', attrs.get('href', '')))

class SiteTests(unittest.TestCase):
    def test_homepage_anchors_are_unique_and_resolve(self):
        page = Page((ROOT / 'index.html').read_text())
        self.assertEqual(len(page.ids), len(set(page.ids)))
        for link in page.links:
            if link.startswith('#'):
                self.assertIn(link[1:], page.ids)
        for anchor in ['top', 'content', 'work', 'about', 'achievements', 'osint', 'contact']:
            self.assertIn(anchor, page.ids)

    def test_local_resources_exist_and_character_art_is_removed(self):
        for filename in ['index.html', '404.html']:
            page = Page((ROOT / filename).read_text())
            for resource in page.resources:
                if resource.startswith('/'):
                    self.assertTrue((ROOT / resource.split('?')[0].lstrip('/')).is_file(), resource)
        images = Page((ROOT / 'index.html').read_text()).images
        screenshots = [image for image in images if image['src'].endswith('.webp')]
        self.assertEqual(len(screenshots), 5)
        for image in screenshots:
            self.assertTrue(image['alt'])
        self.assertFalse((ROOT / 'assets' / 'banner.webp').exists())
        self.assertNotIn('banner.webp', (ROOT / 'index.html').read_text())

    def test_public_routes_and_metadata(self):
        self.assertEqual((ROOT / 'CNAME').read_text().strip(), 'behzat.org')
        page = Page((ROOT / '404.html').read_text())
        self.assertIn('/', page.links)
        for file in ['index.html', 'meta.json', 'win.bin', 'wout.bin', 'reservoir.bin']:
            self.assertTrue((ROOT / 'flyllm' / file).is_file())
        tree = ET.parse(ROOT / 'sitemap.xml')
        urls = [node.text for node in tree.iter() if node.tag.endswith('}loc')]
        self.assertIn('https://behzat.org/', urls)
        html = (ROOT / 'index.html').read_text()
        self.assertIn('https://behzat.org/assets/social.png', html)
        self.assertIn('mailto:hello@behzat.org', html)
        self.assertNotIn('—', html)

if __name__ == '__main__':
    unittest.main()
