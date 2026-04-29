const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");

function updateHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
}

window.addEventListener("scroll", updateHeaderState, { passive: true });
updateHeaderState();

menuButton?.addEventListener("click", () => {
  header?.classList.toggle("is-open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => header?.classList.remove("is-open"));
});

if (window.lucide) {
  window.lucide.createIcons();
}
