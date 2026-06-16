const views = Array.from(document.querySelectorAll("[data-view]"));
const viewLinks = Array.from(document.querySelectorAll("[data-view-link]"));
const defaultView = "home";

function showView(name) {
  const nextView = views.some((view) => view.dataset.view === name) ? name : defaultView;

  views.forEach((view) => {
    view.classList.toggle("is-active", view.dataset.view === nextView);
  });

  viewLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.viewLink === nextView);
  });

  window.scrollTo(0, 0);
}

function syncViewFromHash() {
  showView(window.location.hash.replace("#", "") || defaultView);
}

viewLinks.forEach((link) => {
  link.addEventListener("click", () => {
    showView(link.dataset.viewLink);
  });
});

window.addEventListener("hashchange", syncViewFromHash);
syncViewFromHash();
