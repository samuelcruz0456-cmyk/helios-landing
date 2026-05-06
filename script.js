const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const floatingCta = document.querySelector("[data-floating-cta]");
const industryTabs = document.querySelectorAll("[data-industry]");
const industryPanels = document.querySelectorAll("[data-industry-panel]");

function updateHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
  floatingCta?.classList.toggle("is-visible", window.scrollY > 520);
}

function closeMenu() {
  header?.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
}

window.addEventListener("scroll", updateHeaderState, { passive: true });
updateHeaderState();

menuButton?.addEventListener("click", () => {
  const isOpen = header?.classList.toggle("is-open") ?? false;
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

industryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.getAttribute("data-industry");

    industryTabs.forEach((button) => {
      const isActive = button === tab;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    industryPanels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.getAttribute("data-industry-panel") === target);
    });
  });
});

if (window.lucide) {
  window.lucide.createIcons();
}
