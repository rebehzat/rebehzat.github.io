(() => {
  const projects = [...document.querySelectorAll('[data-project]')];
  const frame = document.querySelector('.preview-frame');
  const caption = document.getElementById('preview-caption');
  const source = document.getElementById('preview-source');
  if (projects.length && frame && caption && source) {
    frame.replaceChildren();
    const previews = new Map();
    projects.forEach((project) => {
      const copy = project.querySelector('.project-image').cloneNode();
      copy.removeAttribute('class');
      copy.removeAttribute('id');
      copy.loading = 'eager';
      copy.setAttribute('aria-hidden', 'true');
      frame.append(copy);
      previews.set(project.dataset.project, copy);
    });
    let selected = '';
    const select = (project) => {
      const id = project.dataset.project;
      if (selected === id) return;
      selected = id;
      const link = project.querySelector('h3 a');
      caption.textContent = `${link.textContent} documentation`;
      source.href = `${link.href}#readme`;
      projects.forEach((item) => {
        const active = item === project;
        item.querySelector('button').setAttribute('aria-pressed', String(active));
        const preview = previews.get(item.dataset.project);
        preview.classList.toggle('is-active', active);
        preview.setAttribute('aria-hidden', String(!active));
      });
    };
    projects.forEach((project) => {
      project.addEventListener('pointerenter', () => select(project));
      project.addEventListener('focusin', () => select(project));
      project.querySelector('button').addEventListener('click', () => select(project));
    });
    select(projects[0]);
    document.documentElement.classList.add('enhanced');
  }

  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      if (!motion.matches) entry.target.classList.add('is-in');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));
  motion.addEventListener('change', () => {
    if (motion.matches) observer.disconnect();
  });
})();
