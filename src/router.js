import { applyTranslations } from "./services/i18n.js";

const BASE_URL = import.meta.env.BASE_URL;

export const router = {
  routes: [],
  container: null,

  getFullPath(path) {
    return BASE_URL + path.replace(/^\//, "");
  },

  getRoutePath(fullPath) {
    if (fullPath === BASE_URL.replace(/\/$/, "")) return "/";
    if (!fullPath.startsWith(BASE_URL)) return null;
    const relativePath = fullPath.slice(BASE_URL.length);
    return "/" + relativePath.replace(/^\/?/, "");
  },

  init(routes, container) {
    this.routes = routes;
    this.container = container;

    document.addEventListener("click", (e) => {
      const link = e.target.closest("[data-link]");
      if (link) {
        e.preventDefault();
        const href = link.getAttribute("href");
        this.navigate(href);
      }
    });

    window.addEventListener("popstate", () => this.render());
    this.render();
  },

  navigate(path) {
    const fullPath = this.getFullPath(path);
    window.history.pushState({}, "", fullPath);
    this.render();
  },

  render() {
    const currentPath = this.getRoutePath(window.location.pathname);
    const route =
      this.routes.find((r) => r.path === currentPath) ||
      this.routes.find((r) => r.path === "*");

    if (!route) return;

    const element = route.component();
    if (!element) return;

    this.container.replaceChildren(element);

    applyTranslations();
  },
};
