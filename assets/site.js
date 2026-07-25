const pages = [
  ["Home", "/"],
  ["Projects", "/projects/"],
  ["Lab notes", "/lab/"],
  ["Lumode", "https://github.com/rebehzat/lumode"],
  ["DevPit", "https://github.com/rebehzat/DevPit"],
  ["S310 CBD replacement", "https://github.com/rebehzat/samsung-s310-cbd-replacement"],
  ["cicd-labs", "https://github.com/rebehzat/cicd-labs"],
  ["WiFiGotchi", "https://github.com/rebehzat/wifigotchi"]
];

const root = document.documentElement;
const storedTheme = localStorage.getItem("theme");
if (storedTheme) root.dataset.theme = storedTheme;
document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", root.dataset.theme);
});

const palette = document.querySelector("[data-palette]");
const paletteInput = document.querySelector("[data-palette-input]");
const paletteResults = document.querySelector("[data-palette-results]");
function renderResults(query = "") {
  const matches = pages.filter(([name]) => name.toLowerCase().includes(query.toLowerCase()));
  paletteResults.innerHTML = matches.map(([name, href]) =>
    `<a href="${href}"><span>${name}</span><span>↗</span></a>`).join("");
}
function openPalette() {
  renderResults();
  palette.showModal();
  requestAnimationFrame(() => paletteInput.focus());
}
document.querySelector("[data-command-open]")?.addEventListener("click", openPalette);
paletteInput?.addEventListener("input", event => renderResults(event.target.value));
document.addEventListener("keydown", event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openPalette();
  }
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    openPalette();
  }
});

const terminal = document.querySelector("[data-terminal]");
const terminalInput = document.querySelector("[data-terminal-input]");
const terminalConsole = document.querySelector("[data-terminal-console]");
const commands = {
  help: "Commands: about, projects, github, clear, exit",
  about: "Recai Mete BIÇAKCI — DevSecOps developer from Türkiye. Linux-first, backend-first, local-first.",
  projects: "lumode · DevPit · samsung-s310-cbd-replacement · cicd-labs · wifigotchi",
  github: "Opening github.com/rebehzat …",
  exit: ""
};
function openTerminal() {
  terminal.showModal();
  requestAnimationFrame(() => terminalInput.focus());
}
document.querySelectorAll("[data-terminal-open]").forEach(button => button.addEventListener("click", openTerminal));
document.querySelector("[data-terminal-close]")?.addEventListener("click", () => terminal.close());
document.querySelector("[data-terminal-form]")?.addEventListener("submit", event => {
  event.preventDefault();
  const command = terminalInput.value.trim().toLowerCase();
  terminalConsole.insertAdjacentHTML("beforeend", `<p><strong>$</strong> ${command}</p>`);
  if (command === "clear") terminalConsole.innerHTML = "";
  else if (command === "exit") terminal.close();
  else if (command === "github") {
    terminalConsole.insertAdjacentHTML("beforeend", `<p>${commands.github}</p>`);
    window.open("https://github.com/rebehzat", "_blank", "noopener");
  } else terminalConsole.insertAdjacentHTML("beforeend", `<p>${commands[command] || `command not found: ${command}`}</p>`);
  terminalInput.value = "";
  terminalConsole.scrollTop = terminalConsole.scrollHeight;
});
