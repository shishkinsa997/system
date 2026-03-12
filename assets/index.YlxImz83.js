(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const __vite_glob_0_0$1 = "/system/assets/1c.qNPM4d83.png";
const __vite_glob_0_1$1 = "/system/assets/accountant.DpCDMNoF.png";
const __vite_glob_0_2 = "/system/assets/business.16gnDF2l.png";
const __vite_glob_0_3 = "/system/assets/c__.Bgtmkdyr.png";
const __vite_glob_0_4 = "/system/assets/cyber.C7uPl0lx.png";
const __vite_glob_0_5 = "/system/assets/data_an.Bz5TYpqJ.png";
const __vite_glob_0_6 = "/system/assets/design_ai.C90AsTOO.png";
const __vite_glob_0_7 = "/system/assets/design_face.Dbfl6SFI.png";
const __vite_glob_0_8 = "/system/assets/design_item.oyCF8Q7_.png";
const __vite_glob_0_9 = "/system/assets/dev_ai.BqzyUwY-.png";
const __vite_glob_0_10 = "/system/assets/economic.DiiFP6MY.png";
const __vite_glob_0_11 = "/system/assets/fashion.DwpuZaUY.png";
const __vite_glob_0_12 = "/system/assets/finance.D6CoGN2R.png";
const __vite_glob_0_13 = "/system/assets/graph.DH95juJp.png";
const __vite_glob_0_14 = "/system/assets/hr.BvBrfyW4.png";
const __vite_glob_0_15 = "/system/assets/html.BMwUNedB.png";
const __vite_glob_0_16 = "/system/assets/interior.CQEJ7EuC.png";
const __vite_glob_0_17 = "/system/assets/java.CuO6y1gp.png";
const __vite_glob_0_18 = "/system/assets/js.bwI8X06P.png";
const __vite_glob_0_19 = "/system/assets/landscape.DJX24JRG.png";
const __vite_glob_0_20 = "/system/assets/linux.Co2yX9Mr.png";
const __vite_glob_0_21 = "/system/assets/pepe-mini.DzoANEG7.jpg";
const __vite_glob_0_22 = "/system/assets/product.G6OMbplu.png";
const __vite_glob_0_23 = "/system/assets/project.Dpk0Fpbh.png";
const __vite_glob_0_24 = "/system/assets/py.6CzbFQ9I.png";
const __vite_glob_0_25 = "/system/assets/sys_admin.BPyRUumj.png";
function el(tag, options = {}) {
  const e = document.createElement(tag);
  if (options.className) e.className = options.className;
  if (options.id) e.id = options.id;
  if (options.text) e.textContent = options.text;
  if (options.html) e.innerHTML = options.html;
  if (options.i18n) e.setAttribute("data-i18n", options.i18n);
  if (options.attrs) {
    for (const k in options.attrs) e.setAttribute(k, options.attrs[k]);
  }
  return e;
}
function createIcon(pathData, options = {}) {
  const {
    width = 6,
    height = 6,
    viewBox = "0 0 24 24",
    fill = "none",
    stroke = "currentColor",
    strokeWidth = 2,
    strokeLinecap = "round",
    strokeLinejoin = "round",
    className = ""
  } = options;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute(
    "class",
    className || `w-${width} h-${height} ${fill === "currentColor" ? "fill-current" : "stroke-current"}`
  );
  if (!className) {
    svg.setAttribute("width", width * 4);
    svg.setAttribute("height", height * 4);
  }
  svg.setAttribute("viewBox", viewBox);
  svg.setAttribute("fill", fill);
  svg.setAttribute("stroke", stroke);
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", pathData);
  if (stroke !== "none") {
    path.setAttribute("stroke-width", strokeWidth);
    path.setAttribute("stroke-linecap", strokeLinecap);
    path.setAttribute("stroke-linejoin", strokeLinejoin);
  }
  svg.appendChild(path);
  return svg;
}
const rawImages = /* @__PURE__ */ Object.assign({ "./assets/img/1c.png": __vite_glob_0_0$1, "./assets/img/accountant.png": __vite_glob_0_1$1, "./assets/img/business.png": __vite_glob_0_2, "./assets/img/c++.png": __vite_glob_0_3, "./assets/img/cyber.png": __vite_glob_0_4, "./assets/img/data_an.png": __vite_glob_0_5, "./assets/img/design_ai.png": __vite_glob_0_6, "./assets/img/design_face.png": __vite_glob_0_7, "./assets/img/design_item.png": __vite_glob_0_8, "./assets/img/dev_ai.png": __vite_glob_0_9, "./assets/img/economic.png": __vite_glob_0_10, "./assets/img/fashion.png": __vite_glob_0_11, "./assets/img/finance.png": __vite_glob_0_12, "./assets/img/graph.png": __vite_glob_0_13, "./assets/img/hr.png": __vite_glob_0_14, "./assets/img/html.png": __vite_glob_0_15, "./assets/img/interior.png": __vite_glob_0_16, "./assets/img/java.png": __vite_glob_0_17, "./assets/img/js.png": __vite_glob_0_18, "./assets/img/landscape.png": __vite_glob_0_19, "./assets/img/linux.png": __vite_glob_0_20, "./assets/img/pepe-mini.jpg": __vite_glob_0_21, "./assets/img/product.png": __vite_glob_0_22, "./assets/img/project.png": __vite_glob_0_23, "./assets/img/py.png": __vite_glob_0_24, "./assets/img/sys_admin.png": __vite_glob_0_25 });
const images = Object.fromEntries(
  Object.entries(rawImages).map(([path, url]) => {
    const fileName = path.replace("./assets/img/", "");
    return [fileName, url];
  })
);
function initSidebar() {
  const sidebar = el("aside", {
    id: "sidebar",
    className: "fixed flex flex-col h-full overflow-hidden w-16 top-0 bg-[#10101a] transition-all duration-300"
  });
  const gachiMain = el("a", {
    id: "logo",
    className: "flex items-center my-2 gap-2 py-2 px-4 overflow-hidden dark:text-white",
    attrs: { href: "/", "data-link": "true" }
  });
  const gachiTitle = el("span", {
    className: "ml-2 text-l leading-6 flex flex-col font-bold whitespace-nowrap text-zinc-950 dark:text-white",
    text: "Gachi PractiCum",
    i18n: "side.title"
  });
  const gachiSubtitle = el("span", {
    className: "text-[10px] leading-2 whitespace-nowrap text-zinc-500 dark:text-zinc-400",
    text: "Premium Learning",
    i18n: "side.subtitle"
  });
  const gachiLogo = el("span", {
    className: "material-symbols-outlined text-[32px]! w-8 h-8 dark:text-white",
    text: "sports_kabaddi"
  });
  gachiTitle.append(gachiSubtitle);
  gachiMain.append(gachiLogo, gachiTitle);
  const navigation = el("header", {
    className: "flex flex-col items-center p-2 justify-between h-full overflow-hidden border-t border-[var(--color-border)]"
  });
  const headerNav = el("nav", {
    className: "flex flex-col gap-2 items-center w-full overflow-hidden"
  });
  const footerNav = el("nav", {
    className: "flex flex-col gap-2 items-center w-full overflow-hidden"
  });
  const dashLogo = el("span", {
    className: "material-symbols-outlined text-2xl!",
    text: "home"
  });
  const coursesLogo = el("span", {
    className: "material-symbols-outlined text-2xl!",
    text: "school"
  });
  const articlesLogo = el("span", {
    className: "material-symbols-outlined text-2xl!",
    text: "article"
  });
  const testsLogo = el("span", {
    className: "material-symbols-outlined text-2xl!",
    text: "quiz"
  });
  const libraryLogo = el("span", {
    className: "material-symbols-outlined text-2xl!",
    text: "bookmarks"
  });
  const supportLogo = el("span", {
    className: "material-symbols-outlined text-2xl!",
    text: "help"
  });
  const settingsLogo = el("span", {
    className: "material-symbols-outlined text-2xl!",
    text: "settings"
  });
  const dashboard = createSidebarElement(
    "Dashboard",
    "dashboard",
    dashLogo,
    "/dashboard"
  );
  const courses = createSidebarElement(
    "Courses",
    "courses",
    coursesLogo,
    "/courses"
  );
  const articles = createSidebarElement(
    "Articles",
    "articles",
    articlesLogo,
    "/articles"
  );
  const tests = createSidebarElement("Tests", "tests", testsLogo, "/tests");
  const library = createSidebarElement(
    "My library",
    "library",
    libraryLogo,
    "/library"
  );
  const support = createSidebarElement(
    "Support",
    "support",
    supportLogo,
    "/support"
  );
  const settings = createSidebarElement(
    "Settings",
    "settings",
    settingsLogo,
    "/settings"
  );
  headerNav.append(dashboard, courses, articles, tests, library);
  footerNav.append(support, settings);
  navigation.append(headerNav, footerNav);
  const profile = el("footer", {
    className: "px-2 mt-auto mb-2 overflow-hidden border-t border-[var(--color-border)]"
  });
  const profileWrapper = el("a", {
    id: "avatar",
    className: "flex items-center gap-3 mt-4 mb-8 overflow-hidden rounded-lg hover:text-gray-300 transition-all duration-300",
    attrs: { href: "/login", "data-link": "true" }
  });
  const avatarText = el("span", {
    className: "min-w-0"
  });
  const avatarName = el("span", {
    text: "Pepe Frog",
    className: "block truncate text-l font-medium text-zinc-950 dark:text-white mb-1"
  });
  const avatarRole = el("span", {
    text: "Admin",
    i18n: "side.role",
    className: "block truncate text-m font-normal text-zinc-500 dark:text-zinc-400"
  });
  avatarText.append(avatarName, avatarRole);
  const avatar = el("img", {
    className: "rounded-full size-10 ml-1 inline-grid shrink-0 align-middle",
    attrs: { src: images["pepe-mini.jpg"] }
  });
  profileWrapper.append(avatar, avatarText);
  profile.append(profileWrapper);
  sidebar.append(gachiMain, navigation, profile);
  sidebar.addEventListener("mouseenter", () => {
    window.dispatchEvent(new CustomEvent("sidebar:open"));
    sidebar.classList.remove("w-16");
    sidebar.classList.add("w-64");
  });
  sidebar.addEventListener("mouseleave", () => {
    window.dispatchEvent(new CustomEvent("sidebar:close"));
    sidebar.classList.remove("w-64");
    sidebar.classList.add("w-16");
  });
  courses.classList.add("bg-[var(--color-primary)]");
  document.addEventListener("click", (e) => {
    const sliderElements = document.querySelectorAll("#sidebar nav a");
    const link = e.target.closest("a");
    if (!link) return;
    e.preventDefault();
    history.pushState(null, "", link.href);
    const linkPath = window.location.pathname;
    const sliderElement = document.getElementById(`${linkPath.slice(1)}`) || 0;
    sliderElements.forEach((el2) => {
      el2.classList.remove("bg-[var(--color-primary)]");
    });
    if (sliderElement) {
      sliderElement.classList.add("bg-[var(--color-primary)]");
    } else if (linkPath === "/") {
      sliderElements[1].classList.add("bg-[var(--color-primary)]");
    }
  });
  function createSidebarElement(tag, id, icon, link = "#") {
    const container = el("a", {
      id: `${id}`,
      className: "flex items-center w-full overflow-hidden h-12 px-3 rounded hover:bg-[var(--color-primary)] hover:text-gray-300 transition-all duration-300",
      attrs: { href: link, "data-link": "true" }
    });
    const text = el("span", {
      className: "ml-4 text-m font-medium whitespace-nowrap",
      text: `${tag}`,
      i18n: `side.${id}`
    });
    container.append(icon, text);
    return container;
  }
  return sidebar;
}
function initPage() {
  const page = el("main", {
    id: "main",
    className: "flex flex-col h-full w-full  transition-all duration-300 p-2 pl-16"
  });
  const mainWrapper = el("div", {
    className: "flex flex-col flex-1 items-center bg-[#171721] h-full min-h-[calc(100dvh-16px)] p-2 rounded-lg overflow-y-auto border border-[var(--color-border)]"
  });
  const content = el("div", {
    id: "page-content",
    className: "flex flex-1 w-full h-full max-w-225"
  });
  mainWrapper.append(content);
  page.append(mainWrapper);
  window.addEventListener("sidebar:open", () => {
    page.classList.remove("pl-16");
    page.classList.add("pl-64");
  });
  window.addEventListener("sidebar:close", () => {
    page.classList.remove("pl-64");
    page.classList.add("pl-16");
  });
  return { page, content };
}
function buildUI(root) {
  const app = el("div", {
    id: "app",
    className: "fixed overflow-hidden left-0 top-0 w-screen h-dvh bg-[#10101a] text-gray-400"
  });
  const aside = initSidebar();
  const { page, content } = initPage();
  app.append(aside, page);
  root.appendChild(app);
  return { main: content };
}
const __vite_glob_0_0 = "data:application/json;base64,ew0KICAic2lkZS50aXRsZSI6ICJHYWNoaSBQcmFjdGljdW0iLA0KICAic2lkZS5zdWJ0aXRsZSI6ICJQcmVtaXVtIExlYXJuaW5nIiwNCiAgInNpZGUuZGFzaGJvYXJkIjogIkRhc2hib2FyZCIsDQogICJzaWRlLmNvdXJzZXMiOiAiQ291cnNlcyIsDQogICJzaWRlLmFydGljbGVzIjogIkFydGljbGVzIiwNCiAgInNpZGUuc3VwcG9ydCI6ICJTdXBwb3J0IiwNCiAgInNpZGUuc2V0dGluZ3MiOiAiU2V0dGluZ3MiLA0KICAic2lkZS5yb2xlIjogIkFkbWluIiwNCg0KICAiZGFzaGJvYXJkLnRpdGxlIjogIkRhc2hib2FyZCIsDQogICJkYXNoYm9hcmQuZGVzY3JpcHRpb24iOiAiV2VsY29tZSBiYWNrLCBQZXBlISBIZXJlJ3MgeW91ciBwcm9ncmVzcyBmb3IgdG9kYXkuIiwNCg0KICAiY291cnNlcy50aXRsZSI6ICJBbGwgY291cnNlcyIsDQogICJjb3Vyc2VzLnByb2dyYW1taW5nIjogIlByb2dyYW1taW5nIiwNCiAgImNvdXJzZXMuZGVzaWduIjogIkRlc2lnbiIsDQogICJjb3Vyc2VzLm1hbmFnZW1lbnQiOiAiTWFuYWdlbWVudCIsDQoNCiAgImFydGljbGVzLnRpdGxlIjogIkFydGljbGVzIGJhc2UiLA0KICAiYXJ0aWNsZXMuZmlsdGVyQnkiOiAiRmlsdGVyIGJ5OiIsDQogICJhcnRpY2xlcy52ZXJpZmllZCI6ICJWZXJpZmllZCIsDQogICJhcnRpY2xlcy5tb3N0UmVjZW50IjogIk1vc3QgUmVjZW50IiwNCiAgImFydGljbGVzLmhpZ2hlc3RSYXRlZCI6ICJIaWdoZXN0IFJhdGVkIiwNCiAgImFydGljbGVzLndpdGhQaG90b3MiOiAiV2l0aCBQaG90byINCn0=";
const __vite_glob_0_1 = "data:application/json;base64,ew0KICAic2lkZS50aXRsZSI6ICLQk9Cw0YfQuCDQn9GA0LDQutGC0LjQutGD0LwiLA0KICAic2lkZS5zdWJ0aXRsZSI6ICLQn9GA0LXQvNC40LDQu9GM0L3QvtC1INC+0LHRg9GH0LXQvdC40LUiLA0KICAic2lkZS5kYXNoYm9hcmQiOiAi0JzQvtGPINC00L7RgdC60LAiLA0KICAic2lkZS5jb3Vyc2VzIjogItCa0YPRgNGB0YsiLA0KICAic2lkZS5hcnRpY2xlcyI6ICLQodGC0LDRgtGM0LgiLA0KICAic2lkZS5zdXBwb3J0IjogItCf0L7QtNC00LXRgNC20LrQsCIsDQogICJzaWRlLnNldHRpbmdzIjogItCd0LDRgdGC0YDQvtC50LrQuCIsDQogICJzaWRlLnJvbGUiOiAi0JDQtNC80LjQvSIsDQoNCiAgImRhc2hib2FyZC50aXRsZSI6ICLQnNC+0Y8g0LTQvtGB0LrQsCIsDQogICJkYXNoYm9hcmQuZGVzY3JpcHRpb24iOiAi0KEg0LLQvtC30LLRgNCw0YnQtdC90LjQtdC8IFBlcGUhINCS0L7RgiDQstCw0Ygg0L/RgNC+0LPRgNC10YHRgSDQt9CwINGB0LXQs9C+0LTQvdGPLiIsDQoNCiAgImNvdXJzZXMudGl0bGUiOiAi0JLRgdC1INC60YPRgNGB0YsiLA0KICAiY291cnNlcy5wcm9ncmFtbWluZyI6ICLQn9GA0L7Qs9GA0LDQvNC80LjRgNC+0LLQsNC90LjQtSIsDQogICJjb3Vyc2VzLmRlc2lnbiI6ICLQlNC40LfQsNC50L0iLA0KICAiY291cnNlcy5tYW5hZ2VtZW50IjogItCc0LXQvdC10LTQttC80LXQvdGCIiwNCg0KICAiYXJ0aWNsZXMudGl0bGUiOiAi0KHRgtCw0YLRjNC4IiwNCiAgImFydGljbGVzLmZpbHRlckJ5IjogItCk0LjQu9GM0YLRgDoiLA0KICAiYXJ0aWNsZXMudmVyaWZpZWQiOiAi0J7RhNC40YbQuNCw0LvRjNC90YvQtSIsDQogICJhcnRpY2xlcy5tb3N0UmVjZW50IjogItCd0LXQtNCw0LLQvdC40LUiLA0KICAiYXJ0aWNsZXMuaGlnaGVzdFJhdGVkIjogItCf0L4g0YDQtdC4zIbRgtC40L3Qs9GDIiwNCiAgImFydGljbGVzLndpdGhQaG90b3MiOiAi0KEg0YTQvtGC0L4iDQoNCn0=";
const DEFAULT_LANG = "en";
let currentDict = {};
async function loadLanguage(lang) {
  const code = lang || localStorage.getItem("lang") || DEFAULT_LANG;
  const url = new URL((/* @__PURE__ */ Object.assign({ "../locales/en.json": __vite_glob_0_0, "../locales/ru.json": __vite_glob_0_1 }))[`../locales/${code}.json`], import.meta.url);
  const res = await fetch(url);
  if (!res.ok) throw new Error("Cannot load locale " + code);
  currentDict = await res.json();
  localStorage.setItem("lang", code);
  document.documentElement.setAttribute("lang", code);
  applyTranslations();
  return code;
}
function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el2) => {
    const key = el2.getAttribute("data-i18n");
    const text = currentDict[key];
    if (text) el2.textContent = text;
  });
}
const BASE_URL = "/system/";
const router = {
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
    let route = this.routes.find((r) => r.path === currentPath);
    let params = {};
    if (!route) {
      route = this.routes.find((r) => r.path.includes(":"));
      if (route) {
        const paramNames = route.path.match(/:(\w+)/g) || [];
        const pattern = route.path.replace(/:\w+/g, "([^/]+)");
        const re = new RegExp("^" + pattern + "/?$");
        const m = currentPath.match(re);
        if (m) {
          paramNames.forEach((p, i) => {
            params[p.slice(1)] = m[i + 1];
          });
        } else {
          route = null;
        }
      }
    }
    if (!route) {
      route = this.routes.find((r) => r.path === "*");
    }
    if (!route) return;
    const element = route.component(params);
    if (!element) return;
    this.container.replaceChildren(element);
    applyTranslations();
  }
};
function initSearch() {
  const search = el("div", {
    className: "relative flex items-center mr-auto h-10 w-full min-w-30 max-w-120 rounded-lg bg-[#171721]"
  });
  const searchInput = el("input", {
    className: "flex-1 h-10 px-3 min-w-30 rounded-lg bg-[#171721] border border-[var(--color-border)] text-sm text-zinc-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-border)]",
    attrs: { type: "text", placeholder: "Search..." }
  });
  const searchIcon = el("span", {
    className: "absolute inset-y-0 right-2 grid w-8 place-content-center"
  });
  const searchButton = el("button", {
    className: "rounded-full p-1.5 text-[var(--color-primary)] transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800",
    attrs: { type: "button" }
  });
  const searchSVG = createIcon(
    "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
    {
      width: 8,
      height: 8,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      className: "size-4"
    }
  );
  searchIcon.append(searchButton);
  searchButton.append(searchSVG);
  search.append(searchInput, searchIcon);
  return search;
}
function initDropdownLang() {
  const languages = el("div", {
    className: "relative flex justify-self-end justify-between items-center h-10 min-w-30 rounded-lg space-x-1 relative inline-block text-left"
  });
  const button = el("button", {
    id: "dropdown-button",
    className: "inline-flex gap-2 justify-between items-center w-60 rounded-lg border border-[var(--color-border)] shadow-sm px-4 h-full w-full bg-[var(--color-primary)] text-sm hover:bg-gray-600",
    attrs: { type: "button" }
  });
  const selected = el("span", {
    id: "dropdown-selected",
    className: "w-full text-left overflow-hidden flex-1",
    text: "English"
  });
  const caret = createIcon("M6 9l6 6 6-6", {
    width: 4,
    height: 4,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  });
  button.setAttribute("aria-haspopup", "true");
  button.setAttribute("aria-expanded", "false");
  caret.setAttribute("id", "caret");
  caret.style.transform = "rotate(0deg)";
  caret.style.transition = " transform 0.15s ease-in-out";
  button.append(selected, caret);
  const menu = el("div", {
    id: "dropdown-menu",
    className: "origin-top-right absolute hidden w-full left-0 mt-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-gray-300",
    attrs: {
      role: "menu",
      "aria-orientation": "vertical",
      "aria-labelledby": "dropdown-button",
      tabindex: "-1"
    }
  });
  const menuOptions = el("div", {
    className: "py-1 text-white",
    attrs: { role: "none" }
  });
  const LANGS = {
    en: { label: "English" },
    ru: { label: "Русский" },
    de: { label: "Deutsch" }
  };
  const createOption = (code) => {
    const option = el("a", {
      id: `lang-${code}`,
      className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
      attrs: { role: "lang-option", href: "#", "data-lang": code }
    });
    option.textContent = LANGS[code].label;
    return option;
  };
  const english = createOption("en");
  const russian = createOption("ru");
  const german = createOption("de");
  menu.append(menuOptions);
  menuOptions.append(english, russian, german);
  languages.append(button, menu);
  function toggleCaret() {
    caret.style.transform == "rotate(0deg)" ? caret.style.transform = "rotate(180deg)" : caret.style.transform = "rotate(0deg)";
  }
  button.addEventListener("mouseenter", function(event) {
    event.stopPropagation();
    if (caret.style.transform == "rotate(180deg)") return;
    toggleCaret();
    menu.classList.toggle("hidden");
    button.setAttribute(
      "aria-expanded",
      menu.classList.contains("hidden") ? "false" : "true"
    );
  });
  button.addEventListener("mouseleave", function(event) {
    if (menu.matches(":hover")) {
      return;
    }
    setTimeout(() => {
      if (!button.matches(":hover") && !menu.matches(":hover")) {
        toggleCaret();
        menu.classList.add("hidden");
        button.setAttribute("aria-expanded", "false");
      }
    }, 3e3);
  });
  menu.addEventListener("mouseleave", function(event) {
    event.stopPropagation();
    setTimeout(() => {
      if (!button.matches(":hover") && !menu.matches(":hover")) {
        toggleCaret();
        menu.classList.add("hidden");
        button.setAttribute("aria-expanded", "false");
      }
    }, 3e3);
  });
  const dropdownItems = menu.querySelectorAll("[role='lang-option']");
  dropdownItems.forEach(function(item) {
    item.addEventListener("click", async function(event) {
      event.preventDefault();
      const lang = item.getAttribute("data-lang");
      if (!lang) return;
      selected.textContent = LANGS[lang]?.label || item.textContent;
      await loadLanguage(lang);
      menu.classList.add("hidden");
      button.setAttribute("aria-expanded", "false");
      toggleCaret();
    });
  });
  document.addEventListener("click", function(event) {
    if (!menu.contains(event.target)) {
      menu.classList.add("hidden");
      button.setAttribute("aria-expanded", "false");
      caret.style.transform = "rotate(0deg)";
    }
  });
  const savedLang = localStorage.getItem("lang") || "en";
  if (LANGS[savedLang]) {
    selected.textContent = LANGS[savedLang].label;
  }
  return languages;
}
function initHeader() {
  const header = el("header", {
    className: "flex items-center flex-shrink-0 justify-center p-2 mb-4 w-full"
  });
  const headerContent = el("nav", {
    className: "flex items-center justify-end w-full  gap-2"
  });
  const search = initSearch();
  const languages = initDropdownLang();
  const notificationsWrapper = el("div", {
    className: "rounded-full size-10"
  });
  const notifications = el("button", {
    className: "relative rounded-full w-10! size-10 max-size-10 min-size-10 text-[var(--color-primary)] transition-colors border border-[var(--color-border)] hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800",
    attrs: { type: "button" }
  });
  const notificationsIcon = el("span", {
    className: "flex items-center justify-center p-1 material-symbols-outlined text-xl! size-full text-center",
    text: "notifications"
  });
  const badge = el("span", {
    className: "absolute top-1 right-1 inline-flex items-center justify-center w-2 h-2 text-sm font-bold text-white bg-red-500 rounded-full transform translate-x-1/4 -translate-y-1/4"
  });
  notifications.append(notificationsIcon, badge);
  notificationsWrapper.append(notifications);
  headerContent.append(search, languages, notificationsWrapper);
  header.append(headerContent);
  return header;
}
function initDashboard() {
  const header = initHeader();
  const dashboard = el("div", {
    className: "flex flex-col flex-1 items-center h-full w-full"
  });
  const page = el("div", {
    className: "flex flex-1 items-start justify-center p-2 w-full"
  });
  const pageContent = el("div", {
    className: "flex flex-1 flex-col items-start justify-start w-full gap-2"
  });
  const pageTitle = el("h1", {
    text: "Dashboard",
    i18n: "dashboard.title",
    className: "text-4xl font-bold text-zinc-950 dark:text-white"
  });
  const description = el("p", {
    text: "Welcome back, Pepe! Here's your progress for today.",
    i18n: "dashboard.description",
    className: "text-sm text-gray-400"
  });
  const progress = el("section", {
    className: "flex overflow-x-auto no-scrollbar lg:grid lg:grid-cols-4 gap-4 w-full mt-6 "
  });
  const courses = createProgressItem(
    "Courses in progress",
    "3",
    "play_circle",
    "bg-blue-500/10 text-blue-500"
  );
  const tests = createProgressItem(
    "Tests completed",
    "12",
    "task_alt",
    "bg-purple-500/10 text-purple-500"
  );
  const streak = createProgressItem(
    "Days Streak",
    "27",
    "local_fire_department",
    "bg-amber-500/10 text-amber-500"
  );
  const exp = createProgressItem(
    "XP earned",
    "2,450",
    "bolt",
    "bg-green-500/10 text-green-500"
  );
  progress.append(courses, tests, streak, exp);
  const learningBlock = el("section", {
    className: "mt-6 w-full"
  });
  const learningHeader = el("div", {
    className: "flex items-center justify-between mb-4"
  });
  const learningTitle = el("h2", {
    text: "Continue learning",
    i18n: "dashboard.learning.title",
    className: "text-xl font-bold cursor-text"
  });
  const learningViewAll = el("a", {
    className: "text-blue-500 text-sm font-semibold hover:underline cursor-pointer",
    text: "View all courses",
    i18n: "dashboard.learning.viewAll",
    attrs: { href: "/courses", "data-link": "true" }
  });
  const learningWrapper = el("div", {
    className: "relative overflow-hidden rounded-2xl bg-gray-700 text-white shadow-2xl group"
  });
  const learningFade = el("div", {
    className: "absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-800/80 to-transparent z-10"
  });
  const learningBackground = el("div", {
    className: "absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center opacity-60",
    attrs: { style: `background-image: url(${images["js.png"]})` }
  });
  const learningContent = el("div", {
    className: "relative z-20 p-8 md:p-12 flex flex-col justify-center max-w-2xl"
  });
  const learningChip = el("span", {
    className: "px-3 py-1 bg-blue-500 text-[10px] font-bold uppercase tracking-widest rounded-full w-fit mb-4 cursor-text",
    text: "current module",
    i18n: "dashboard.learning.chip"
  });
  const learningContentTitle = el("h4", {
    text: "JavaScript Fundamentals",
    i18n: "dashboard.learning.content.title",
    className: "text-3xl md:text-4xl font-bold mb-4 cursor-text"
  });
  const learningContentDesc = el("p", {
    text: "In this course, you'll learn the fundamentals of JavaScript, including variables, functions, and control flow.",
    i18n: "dashboard.learning.content.description",
    className: "text-slate-300 text-lg mb-8 cursor-text"
  });
  const learningFooter = el("div", {
    className: "flex flex-col sm:flex-row items-start sm:items-center gap-6"
  });
  const learningProgress = el("div", {
    className: "flex-1 w-full sm:w-auto"
  });
  const learningProgressHeader = el("div", {
    className: "flex justify-between text-sm mb-2"
  });
  const learningProgressTitle = el("span", {
    className: "text-slate-400 cursor-text",
    text: "Progress",
    i18n: "dashboard.learning.progress.title"
  });
  const learningProgressValue = el("span", {
    className: "text-white font-bold cursor-text",
    text: "70%"
  });
  const learningProgressBar = el("div", {
    className: "h-2 bg-slate-700 rounded-full overflow-hidden"
  });
  const learningProgressBarFill = el("div", {
    className: "h-full bg-blue-500 w-3/4 rounded-full"
  });
  const learningButton = el("button", {
    className: "flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all cursor-text",
    text: "Continue learning",
    i18n: "dashboard.learning.button"
  });
  learningFooter.append(learningProgress, learningButton);
  learningProgressBar.append(learningProgressBarFill);
  learningProgressHeader.append(learningProgressTitle, learningProgressValue);
  learningProgress.append(learningProgressHeader, learningProgressBar);
  learningHeader.append(learningTitle, learningViewAll);
  learningWrapper.append(learningFade, learningBackground, learningContent);
  learningContent.append(learningChip, learningContentTitle, learningContentDesc, learningFooter);
  learningBlock.append(learningHeader, learningWrapper);
  pageContent.append(pageTitle, description, progress, learningBlock);
  page.append(pageContent);
  dashboard.append(header, page);
  function createProgressItem(title = "progress", count = "0", icon = "play", color = "bg-blue-500/10 text-blue-500") {
    const item = el("div", {
      className: "flex-1 w-full min-w-[209px] bg-white dark:bg-gray-800 px-3 py-4 rounded-2xl border border-[var(--color-border)] flex items-center gap-3"
    });
    const iconWrapper = el("div", {
      className: `size-12 rounded-xl flex items-center justify-center ` + color
    });
    const iconSymbol = el("span", {
      className: "material-symbols-outlined text-3xl!",
      text: icon
    });
    const content = el("div", {
      className: "flex flex-col justify-between items-between"
    });
    const titleEl = el("h2", {
      className: "text-[14px] font-medium leading-3 cursor-text",
      text: title
    });
    const countEl = el("h3", {
      className: "text-3xl font-bold cursor-text",
      text: count
    });
    content.append(titleEl, countEl);
    iconWrapper.append(iconSymbol);
    item.append(iconWrapper, content);
    return item;
  }
  return dashboard;
}
class Card {
  constructor({ title, type = "profession", major, img, desc, href = "#" }) {
    this.card = el("article", {
      className: "relative overflow-hidden aspect-square min-w-72 rounded-[16px] border border-[var(--color-border)] group",
      attrs: {
        "data-major": major
      }
    });
    const imageWrapper = el("picture", {
      className: "absolute inset-0"
    });
    const image = el("img", {
      className: "transition-transform duration-500 hover:scale-110 w-full h-full object-cover transition-transform duration-500 hover:scale-110",
      attrs: {
        src: images[img],
        alt: title,
        loading: "lazy"
      }
    });
    const gradientOverlay = el("div", {
      className: "pointer-events-none absolute inset-x-0 top-0 h-full rounded-[16px]",
      attrs: {
        style: "backdrop-filter: blur(30px); background: rgba(225, 225, 225, 0.05);-webkit-mask-image: linear-gradient(  rgba(0, 0, 0, 0) 50%,  rgba(0, 0, 0, 0.8) 60%,  rgba(0, 0, 0, 1) 70%);"
      }
    });
    const contentWrapper = el("a", {
      className: "relative z-[1] grid grid-rows-[1fr_auto] h-full w-full p-4 items-end cursor-pointer focus:outline-none",
      attrs: { href }
    });
    const chip = el("span", {
      className: "px-3 py-1 mb-auto bg-gray-700/50 text-[10px] text-white font-bold uppercase tracking-widest rounded-full w-fit mb-4 cursor-text",
      text: type,
      i18n: "courses.card.chip.profession"
    });
    const textBlock = el("div", {
      className: "space-y-1"
    });
    const titleEl = el("h3", {
      className: "text-xl font-bold cursor-text text-white",
      text: title
    });
    const descEl = el("p", {
      className: "text-xs font-normal text-zinc-200 line-clamp-1 whitespace-wrap",
      text: desc
    });
    textBlock.append(titleEl, descEl);
    contentWrapper.append(chip, textBlock);
    imageWrapper.append(image);
    this.card.append(imageWrapper, gradientOverlay, contentWrapper);
    this.card.tabIndex = 0;
    this.card.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.card.click();
    });
  }
  render() {
    return this.card;
  }
}
async function mainData() {
  const localUrl = "./db.json";
  const response = await fetch(localUrl);
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
}
mainData().then((data) => {
  renderCards(data);
}).catch((error) => {
  console.error(error);
});
async function renderCards(data) {
  setTimeout(() => {
    const gridCards = document.getElementById("grid-cards");
    console.log(gridCards);
    gridCards.innerHTML = "";
    const allCards = [];
    data.courses.forEach((course) => {
      const card = new Card({
        title: course.title,
        img: course.image,
        desc: course.desc,
        type: course.type,
        major: course.major
      });
      allCards.push(card);
    });
    class Row {
      constructor(title, ...cards) {
        this.row = el("div", {
          className: "flex flex-col h-full w-full gap-2"
        });
        this.rowCards = el("div", {
          className: "flex overflow-x-auto scroll-smooth no-scrollbar h-full w-full gap-4 mt-4"
        });
        this.rowTitle = el("h2", {
          text: title,
          i18n: `courses.${title.toLowerCase()}`,
          className: "text-lg font-bold text-zinc-950 dark:text-white"
        });
        const elements = [];
        cards.forEach((item) => {
          elements.push(item);
        });
        this.rowCards.append(
          ...elements.map((item) => {
            const node = item.render();
            return node.parentNode ? node.cloneNode(true) : node;
          })
        );
        this.row.append(this.rowTitle, this.rowCards);
      }
      add(...cards) {
        const elements = [];
        cards.forEach((item) => {
          elements.push(item);
        });
        this.row.append(
          ...elements.map((item) => {
            const node = item.render();
            return node.parentNode ? node.cloneNode(true) : node;
          })
        );
      }
    }
    const fileredRow = (m) => {
      return allCards.filter((c) => c.card.dataset.major === m);
    };
    const programmingRow = new Row("Programming", ...fileredRow("programming"));
    const designRow = new Row("Design", ...fileredRow("design"));
    const managementRow = new Row("Management", ...fileredRow("management"));
    gridCards.append(programmingRow.row, designRow.row, managementRow.row);
    return gridCards;
  }, 10);
}
function initGridCards() {
  const gridCards = el("div", {
    id: "grid-cards",
    className: "flex flex-col scroll-smooth no-scrollbar h-full w-full gap-8 mt-4"
  });
  return gridCards;
}
function initCourses() {
  const header = initHeader();
  const gridCards = initGridCards();
  const courses = el("div", {
    className: "flex flex-col flex-1 items-center h-full w-full"
  });
  const page = el("div", {
    className: "flex flex-1 items-start justify-center p-2 w-full"
  });
  const pageContent = el("div", {
    className: "flex flex-1 flex-col items-start justify-start w-full gap-2"
  });
  const pageTitle = el("h1", {
    text: "All courses",
    i18n: "courses.title",
    className: "text-4xl font-bold text-zinc-950 dark:text-white"
  });
  pageContent.append(pageTitle, gridCards);
  page.append(pageContent);
  courses.append(header, page);
  return courses;
}
function initFilterBar() {
  const filterBar = el("div", {
    className: "flex flex-nowrap w-full gap-3 items-center pb-4 pt-6 border-b"
  });
  const filter = el("div", {
    className: "flex items-center text-white gap-2 mr-4"
  });
  const tuneIcon = el("span", {
    className: "material-symbols-outlined text-sm text-white",
    text: "tune"
  });
  const filterText = el("span", {
    className: "font-medium",
    text: "Filter by:",
    i18n: "articles.filterBy"
  });
  const mostRecentButton = el("button", {
    className: "group cursor-pointer flex min-h-10 items-center justify-center gap-x-2 rounded-lg bg-[var(--color-primary)] pl-4 pr-3 py-2 transition-all"
  });
  const mostRecentText = el("span", {
    className: "text-sm font-medium text-white opacity-70",
    text: "Most Recent",
    i18n: "articles.mostRecent"
  });
  const expandMoreIcon = el("span", {
    className: "material-symbols-outlined text-sm text-white opacity-70",
    text: "expand_more"
  });
  const highestRatedButton = el("button", {
    className: "group cursor-pointer flex min-h-10 items-center justify-center gap-x-2 rounded-lg bg-card hover:bg-[var(--color-primary)] pl-4 pr-3 py-2 transition-all"
  });
  const highestRatedText = el("span", {
    className: "text-sm font-medium text-white opacity-70",
    text: "Highest Rated",
    i18n: "articles.highestRated"
  });
  const verifiedButton = el("button", {
    className: "group cursor-pointer flex min-h-10 items-center justify-center gap-x-2 rounded-lg bg-card hover:bg-[var(--color-primary)] focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 active:bg-[var(--color-primary)] pl-4 pr-3 py-2 transition-all"
  });
  const verifiedText = el("span", {
    className: "text-sm font-medium text-white opacity-70",
    text: "Verified",
    i18n: "articles.verified"
  });
  const checkCircleIcon = el("span", {
    className: "material-symbols-outlined text-sm text-white opacity-70",
    text: "check_circle"
  });
  const withPhotosButton = el("button", {
    className: "group cursor-pointer flex min-h-10 items-center justify-center gap-x-2 rounded-lg bg-card hover:bg-[var(--color-primary)] focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 active:bg-[var(--color-primary)] pl-4 pr-3 py-2 transition-all"
  });
  const withPhotosText = el("span", {
    className: "text-sm font-medium text-white opacity-70",
    text: "With Photos",
    i18n: "articles.withPhotos"
  });
  const imageIcon = el("span", {
    className: "material-symbols-outlined text-sm text-white opacity-70",
    text: "image"
  });
  withPhotosButton.append(withPhotosText, imageIcon);
  verifiedButton.append(
    verifiedText,
    checkCircleIcon,
    expandMoreIcon
  );
  mostRecentButton.append(mostRecentText, expandMoreIcon);
  highestRatedButton.append(highestRatedText, expandMoreIcon);
  filter.append(tuneIcon, filterText);
  filterBar.append(
    filter,
    mostRecentButton,
    highestRatedButton,
    verifiedButton,
    withPhotosButton
  );
  return filterBar;
}
function initArticles() {
  const header = initHeader();
  const filterBar = initFilterBar();
  const articles = el("div", {
    className: "flex flex-col flex-1 items-center h-full w-full"
  });
  const page = el("div", {
    className: "flex flex-1 items-start justify-center p-2 w-full"
  });
  const pageContent = el("div", {
    className: "flex flex-1 flex-col items-start justify-start gap-2 w-full max-w-4xl"
  });
  const pageTitle = el("h1", {
    text: "Articles",
    i18n: "articles.title",
    className: "text-4xl font-bold text-zinc-950 dark:text-white"
  });
  const listContainer = el("div", {
    id: "articles-container",
    className: "flex flex-col gap-3 w-full mt-4"
  });
  pageContent.append(pageTitle, filterBar, listContainer);
  page.append(pageContent);
  articles.append(header, page);
  return articles;
}
const PROXY_RAW = "https://api.allorigins.win/raw?url=";
const PROXY_GET = "https://api.allorigins.win/get?url=";
const ARTICLE_BODY_SELECTORS = [
  ".tm-article-body",
  ".tm-article-presenter__body",
  ".tm-post-presenter__body",
  ".tm-post__body",
  ".article-formatted-body",
  ".tm-article-presenter article",
  "[class*='article-formatted']",
  "article"
];
async function fetchHtmlViaProxy(url) {
  const encoded = encodeURIComponent(url);
  const resGet = await fetch(PROXY_GET + encoded);
  if (resGet.ok) {
    const data = await resGet.json();
    if (data.contents && typeof data.contents === "string") return data.contents;
  }
  const resRaw = await fetch(PROXY_RAW + encoded);
  if (!resRaw.ok) throw new Error("Прокси: " + resRaw.status);
  return resRaw.text();
}
async function fetchArticleContent(articleUrl) {
  if (!articleUrl) return null;
  let html = null;
  try {
    html = await fetchHtmlViaProxy(articleUrl);
  } catch (e) {
    console.error("Ошибка загрузки страницы статьи:", e);
    return null;
  }
  if (!html || html.length < 500) return null;
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const titleEl = doc.querySelector("h1.tm-title, .tm-article-title, article h1, h1");
    const title = titleEl?.textContent?.trim() || "Без названия";
    let contentEl = null;
    for (const sel of ARTICLE_BODY_SELECTORS) {
      const el2 = doc.querySelector(sel);
      if (el2 && el2.textContent.trim().length > 100) {
        contentEl = el2;
        break;
      }
    }
    if (!contentEl) {
      return {
        title,
        contentHtml: "<p>Контент статьи не найден на странице (возможно, изменилась вёрстка Хабра).</p>",
        meta: {}
      };
    }
    contentEl.querySelectorAll("a[href^='/']").forEach((a) => {
      const href = a.getAttribute("href");
      if (href) a.setAttribute("href", "https://habr.com" + href);
    });
    const contentHtml = sanitizeArticleHtml(contentEl.innerHTML);
    const meta = {};
    const authorEl = doc.querySelector(".tm-user-info__username, .tm-article-snippet__author a, [class*='author'] a");
    if (authorEl) meta.author = authorEl.textContent?.trim();
    const dateEl = doc.querySelector("time[datetime]");
    if (dateEl) meta.date = dateEl.getAttribute("datetime") || dateEl.textContent?.trim();
    return { title, contentHtml, meta };
  } catch (error) {
    console.error("Ошибка разбора страницы статьи:", error);
    return null;
  }
}
function sanitizeArticleHtml(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const allowTags = /* @__PURE__ */ new Set([
    "p",
    "div",
    "span",
    "br",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "a",
    "strong",
    "b",
    "em",
    "i",
    "u",
    "s",
    "code",
    "pre",
    "blockquote",
    "ul",
    "ol",
    "li",
    "img",
    "figure",
    "figcaption",
    "hr",
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td"
  ]);
  const allowAttrs = /* @__PURE__ */ new Set(["href", "src", "alt", "title", "class"]);
  function sanitizeNode(node) {
    if (node.nodeType === Node.TEXT_NODE) return node.cloneNode(true);
    if (node.nodeType !== Node.ELEMENT_NODE) return null;
    const tag = node.tagName.toLowerCase();
    if (!allowTags.has(tag)) return null;
    const out = document.createElement(tag);
    for (const attr of node.attributes || []) {
      const name = attr.name.toLowerCase();
      if (name === "style" || name.startsWith("on")) continue;
      if (allowAttrs.has(name)) out.setAttribute(name, attr.value);
    }
    for (const child of node.childNodes) {
      const c = sanitizeNode(child);
      if (c) out.appendChild(c);
    }
    return out;
  }
  const body = doc.body;
  const fragment = document.createDocumentFragment();
  for (const child of body.childNodes) {
    const c = sanitizeNode(child);
    if (c) fragment.appendChild(c);
  }
  const wrap = document.createElement("div");
  wrap.appendChild(fragment);
  return wrap.innerHTML;
}
const HABR_ARTICLE_URL = (id) => `https://habr.com/ru/articles/${id}/`;
function initArticleView(params = {}) {
  const id = params.id;
  const header = initHeader();
  const wrap = el("div", {
    className: "flex flex-col flex-1 items-center h-full w-full"
  });
  const page = el("div", {
    className: "flex flex-1 items-start justify-center p-2 w-full overflow-auto"
  });
  const content = el("div", {
    className: "flex flex-col items-start w-full max-w-3xl mx-auto"
  });
  if (!id) {
    content.innerHTML = "<p class='text-zinc-500'>Не указан ID статьи.</p>";
    page.append(content);
    wrap.append(header, page);
    return wrap;
  }
  const loading = el("p", {
    text: "Загрузка статьи…",
    className: "text-zinc-500 dark:text-zinc-400"
  });
  content.append(loading);
  page.append(content);
  wrap.append(header, page);
  fetchArticleContent(HABR_ARTICLE_URL(id)).then((data) => {
    content.removeChild(loading);
    if (!data) {
      const url = HABR_ARTICLE_URL(id);
      content.innerHTML = "<p class='text-zinc-500 dark:text-zinc-400'>Не удалось загрузить статью (сеть или прокси).</p><a href='" + url + "' target='_blank' rel='noopener' class='text-blue-500 hover:underline mt-2 inline-block'>Открыть на Хабре</a>";
      return;
    }
    const titleEl = el("h1", {
      text: data.title,
      className: "text-2xl md:text-3xl font-bold text-zinc-950 dark:text-white mb-2"
    });
    const meta = el("div", {
      className: "text-sm text-zinc-500 dark:text-zinc-400 mb-6"
    });
    if (data.meta.author) meta.append(document.createTextNode(data.meta.author + " · "));
    if (data.meta.date) {
      const d = new Date(data.meta.date);
      meta.append(document.createTextNode(d.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })));
    }
    const body = el("div", {
      className: "article-body max-w-none text-zinc-700 dark:text-zinc-300 [&_h1]:text-2xl [&_h2]:text-xl [&_h3]:text-lg [&_h1,h2,h3]:font-bold [&_h1,h2,h3]:text-zinc-950 [&_h1,h2,h3]:dark:text-white [&_a]:text-blue-500 [&_a]:no-underline hover:[&_a]:underline [&_img]:rounded-lg [&_pre]:bg-zinc-800 [&_pre]:p-3 [&_pre]:rounded [&_code]:bg-zinc-800 [&_code]:px-1 [&_code]:rounded [&_p]:mb-2"
    });
    body.innerHTML = data.contentHtml;
    content.append(titleEl, meta, body);
  });
  return wrap;
}
function initNotFound() {
  const page = el("div", {
    className: "grid h-full w-full place-content-center px-4"
  });
  const title = el("h1", {
    className: "uppercase tracking-widest text-gray-50",
    text: "404 | Not Found"
  });
  page.append(title);
  return page;
}
function initSignIn() {
  const page = el("div", {
    className: "h-full w-full flex justify-center items-center"
  });
  const modal = el("div", {
    className: "py-12 px-12 rounded-2xl shadow-xl z-20 border border-gray-200"
  });
  const textWrapper = el("div");
  const textTitle = el("h1", {
    className: "text-3xl font-bold text-center mb-4",
    text: "Create An Account"
  });
  const textDesc = el("p", {
    className: "w-80 text-center text-sm mb-8 font-semibold text-[var(--color-primary)] tracking-wide",
    text: "Create an account to enjoy all the services without any ads for free!"
  });
  const inputWrapper = el("div", {
    className: "flex flex-col gap-4 space-y-4"
  });
  const inputEmail = el("input", {
    className: "block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500",
    attrs: {
      type: "text",
      placeholder: "Email Addres"
    }
  });
  const inputPassword = el("input", {
    className: "block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500",
    attrs: {
      type: "text",
      placeholder: "Password"
    }
  });
  const buttonWrapper = el("div", {
    className: "text-center mt-6"
  });
  const button = el("button", {
    className: "w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg",
    text: "Sign In"
  });
  const linkWrapper = el("p", {
    className: "mt-4 text-sm"
  });
  const linkSpan = el("span", {
    className: "underline cursor-pointer",
    text: "Sign In"
  });
  page.append(modal);
  modal.append(textWrapper, inputWrapper, buttonWrapper);
  textWrapper.append(textTitle, textDesc);
  inputWrapper.append(inputEmail, inputPassword);
  buttonWrapper.append(button, linkWrapper);
  linkWrapper.append("Already Have An Account? ", linkSpan);
  return page;
}
document.addEventListener("DOMContentLoaded", async () => {
  await loadLanguage();
  const { main } = buildUI(document.body);
  router.init(
    [
      {
        path: "/",
        component: () => initCourses()
      },
      {
        path: "/dashboard",
        component: () => initDashboard()
      },
      {
        path: "/courses",
        component: () => initCourses()
      },
      {
        path: "/articles",
        component: () => initArticles()
      },
      {
        path: "/article/:id",
        component: (params) => initArticleView(params)
      },
      {
        path: "*",
        component: () => initNotFound()
      },
      {
        path: "/login",
        component: () => initSignIn()
      }
    ],
    main
  );
});
