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
const images = /* @__PURE__ */ Object.assign({ "./assets/img/1c.png": __vite_glob_0_0$1, "./assets/img/accountant.png": __vite_glob_0_1$1, "./assets/img/business.png": __vite_glob_0_2, "./assets/img/c++.png": __vite_glob_0_3, "./assets/img/cyber.png": __vite_glob_0_4, "./assets/img/data_an.png": __vite_glob_0_5, "./assets/img/design_ai.png": __vite_glob_0_6, "./assets/img/design_face.png": __vite_glob_0_7, "./assets/img/design_item.png": __vite_glob_0_8, "./assets/img/dev_ai.png": __vite_glob_0_9, "./assets/img/economic.png": __vite_glob_0_10, "./assets/img/fashion.png": __vite_glob_0_11, "./assets/img/finance.png": __vite_glob_0_12, "./assets/img/graph.png": __vite_glob_0_13, "./assets/img/hr.png": __vite_glob_0_14, "./assets/img/html.png": __vite_glob_0_15, "./assets/img/interior.png": __vite_glob_0_16, "./assets/img/java.png": __vite_glob_0_17, "./assets/img/js.png": __vite_glob_0_18, "./assets/img/landscape.png": __vite_glob_0_19, "./assets/img/linux.png": __vite_glob_0_20, "./assets/img/pepe-mini.jpg": __vite_glob_0_21, "./assets/img/product.png": __vite_glob_0_22, "./assets/img/project.png": __vite_glob_0_23, "./assets/img/py.png": __vite_glob_0_24, "./assets/img/sys_admin.png": __vite_glob_0_25 });
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
    attrs: { src: images["./assets/img/pepe-mini.jpg"] }
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
const __vite_glob_0_0 = "data:application/json;base64,ew0KICAic2lkZS50aXRsZSI6ICJHYWNoaSBQcmFjdGljdW0iLA0KICAic2lkZS5zdWJ0aXRsZSI6ICJQcmVtaXVtIExlYXJuaW5nIiwNCiAgInNpZGUuZGFzaGJvYXJkIjogIkRhc2hib2FyZCIsDQogICJzaWRlLmNvdXJzZXMiOiAiQ291cnNlcyIsDQogICJzaWRlLmFydGljbGVzIjogIkFydGljbGVzIiwNCiAgInNpZGUuc3VwcG9ydCI6ICJTdXBwb3J0IiwNCiAgInNpZGUuc2V0dGluZ3MiOiAiU2V0dGluZ3MiLA0KICAic2lkZS5yb2xlIjogIkFkbWluIiwNCg0KICAiZGFzaGJvYXJkLnRpdGxlIjogIkRhc2hib2FyZCIsDQogICJkYXNoYm9hcmQuZGVzY3JpcHRpb24iOiAiSGVyZSB3aWxsIGJlIHRoZSBkYXNoYm9hcmQgY29udGVudC4iLA0KDQogICJjb3Vyc2VzLnRpdGxlIjogIkFsbCBjb3Vyc2VzIiwNCiAgImNvdXJzZXMucHJvZ3JhbW1pbmciOiAiUHJvZ3JhbW1pbmciLA0KICAiY291cnNlcy5kZXNpZ24iOiAiRGVzaWduIiwNCiAgImNvdXJzZXMubWFuYWdlbWVudCI6ICJNYW5hZ2VtZW50IiwNCg0KICAiYXJ0aWNsZXMudGl0bGUiOiAiQXJ0aWNsZXMgYmFzZSIsDQogICJhcnRpY2xlcy5maWx0ZXJCeSI6ICJGaWx0ZXIgYnk6IiwNCiAgImFydGljbGVzLnZlcmlmaWVkIjogIlZlcmlmaWVkIiwNCiAgImFydGljbGVzLm1vc3RSZWNlbnQiOiAiTW9zdCBSZWNlbnQiLA0KICAiYXJ0aWNsZXMuaGlnaGVzdFJhdGVkIjogIkhpZ2hlc3QgUmF0ZWQiLA0KICAiYXJ0aWNsZXMud2l0aFBob3RvcyI6ICJXaXRoIFBob3RvIg0KfQ==";
const __vite_glob_0_1 = "data:application/json;base64,ew0KICAic2lkZS50aXRsZSI6ICLQk9Cw0YfQuCDQn9GA0LDQutGC0LjQutGD0LwiLA0KICAic2lkZS5zdWJ0aXRsZSI6ICLQn9GA0LXQvNC40LDQu9GM0L3QvtC1INC+0LHRg9GH0LXQvdC40LUiLA0KICAic2lkZS5kYXNoYm9hcmQiOiAi0JzQvtGPINC00L7RgdC60LAiLA0KICAic2lkZS5jb3Vyc2VzIjogItCa0YPRgNGB0YsiLA0KICAic2lkZS5hcnRpY2xlcyI6ICLQodGC0LDRgtGM0LgiLA0KICAic2lkZS5zdXBwb3J0IjogItCf0L7QtNC00LXRgNC20LrQsCIsDQogICJzaWRlLnNldHRpbmdzIjogItCd0LDRgdGC0YDQvtC50LrQuCIsDQogICJzaWRlLnJvbGUiOiAi0JDQtNC80LjQvSIsDQoNCiAgImRhc2hib2FyZC50aXRsZSI6ICLQnNC+0Y8g0LTQvtGB0LrQsCIsDQogICJkYXNoYm9hcmQuZGVzY3JpcHRpb24iOiAi0JfQtNC10YHRjCDQsdGD0LTQtdGCINC60L7QvdGC0LXQvdGCLiIsDQoNCiAgImNvdXJzZXMudGl0bGUiOiAi0JLRgdC1INC60YPRgNGB0YsiLA0KICAiY291cnNlcy5wcm9ncmFtbWluZyI6ICLQn9GA0L7Qs9GA0LDQvNC80LjRgNC+0LLQsNC90LjQtSIsDQogICJjb3Vyc2VzLmRlc2lnbiI6ICLQlNC40LfQsNC50L0iLA0KICAiY291cnNlcy5tYW5hZ2VtZW50IjogItCc0LXQvdC10LTQttC80LXQvdGCIiwNCg0KICAiYXJ0aWNsZXMudGl0bGUiOiAi0KHRgtCw0YLRjNC4IiwNCiAgImFydGljbGVzLmZpbHRlckJ5IjogItCk0LjQu9GM0YLRgDoiLA0KICAiYXJ0aWNsZXMudmVyaWZpZWQiOiAi0J7RhNC40YbQuNCw0LvRjNC90YvQtSIsDQogICJhcnRpY2xlcy5tb3N0UmVjZW50IjogItCd0LXQtNCw0LLQvdC40LUiLA0KICAiYXJ0aWNsZXMuaGlnaGVzdFJhdGVkIjogItCf0L4g0YDQtdC4zIbRgtC40L3Qs9GDIiwNCiAgImFydGljbGVzLndpdGhQaG90b3MiOiAi0KEg0YTQvtGC0L4iDQoNCn0=";
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
    const route = this.routes.find((r) => r.path === currentPath) || this.routes.find((r) => r.path === "*");
    if (!route) return;
    const element = route.component();
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
  const header = el("div", {
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
    text: "Here will be the dashboard content.",
    i18n: "dashboard.description",
    className: "text-sm text-gray-400"
  });
  pageContent.append(pageTitle, description);
  page.append(pageContent);
  dashboard.append(header, page);
  return dashboard;
}
class Card {
  constructor({ title, img, desc, href = "#" }) {
    this.card = el("article", {
      className: "relative overflow-hidden aspect-square min-w-72 rounded-[16px] border border-[var(--color-border)] group"
    });
    const imageWrapper = el("picture", {
      className: "absolute inset-0"
    });
    const image = el("img", {
      className: "transition-transform duration-500 hover:scale-110 w-full h-full object-cover transition-transform duration-500 hover:scale-110",
      attrs: { src: images[`./assets/img/${img}`], alt: title, loading: "lazy" }
    });
    const gradientOverlay = el("div", {
      className: "pointer-events-none absolute inset-x-0 top-0 h-full rounded-[16px]",
      attrs: {
        style: "backdrop-filter: blur(30px); background: rgba(225, 225, 225, 0.05); -webkit-mask-image: linear-gradient(rgb(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0) 70%); "
      }
    });
    const contentWrapper = el("a", {
      className: "relative z-[1] grid grid-rows-[1fr_auto] h-full w-full p-4 items-end cursor-pointer focus:outline-none",
      attrs: { href }
    });
    const textBlock = el("div", {
      className: "space-y-1"
    });
    const titleEl = el("h3", {
      className: "text-sm font-medium text-white",
      text: title
    });
    const descEl = el("p", {
      className: "text-xs font-normal text-zinc-200 whitespace-wrap",
      text: desc
    });
    textBlock.append(titleEl, descEl);
    contentWrapper.append(textBlock);
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
function initGridCards() {
  const py = new Card({
    title: "Python-developer + AI",
    img: "py.png",
    desc: "First I was afraid, I was petrified"
  });
  const js = new Card({
    title: "Fullstack JavaScript developer",
    img: "js.png",
    desc: "Then I spent so many nights thinking how you did me wrong"
  });
  const cpp = new Card({
    title: "C++ developer",
    img: "c++.png",
    desc: "But I grew strong, and I learned how to get along"
  });
  const java = new Card({
    title: "Java developer",
    img: "java.png",
    desc: "How I met you, I don't know"
  });
  const linux = new Card({
    title: "Linux developer",
    img: "linux.png",
    desc: "I just walked in to find you here with that sad look upon your face"
  });
  const oneC = new Card({
    title: "1C developer",
    img: "1c.png",
    desc: "And now you're back from outer space"
  });
  const devAI = new Card({
    title: "AI Developer",
    img: "dev_ai.png",
    desc: "My heart, it breaks, my soul it aches"
  });
  const html = new Card({
    title: "HTML/CSS Developer",
    img: "html.png",
    desc: "Please don't tell me you're too busy, I need your love, I need your love"
  });
  const cyber = new Card({
    title: "Cyber Security + AI",
    img: "cyber.png",
    desc: "Bringing back the love I had for you"
  });
  const sysAdmin = new Card({
    title: "System Administrator",
    img: "sys_admin.png",
    desc: "So now I'm back, from outer space"
  });
  const dataAn = new Card({
    title: "Data Analyst",
    img: "data_an.png",
    desc: "I should have changed that stupid lock, I should have made you leave your key"
  });
  const designAI = new Card({
    title: "AI Creator",
    img: "design_ai.png",
    desc: "Who I am today"
  });
  const designFace = new Card({
    title: "Makeup Artist",
    img: "design_face.png",
    desc: "Shine bright like a diamond"
  });
  const photoItem = new Card({
    title: "Item Photographer",
    img: "design_item.png",
    desc: "Come on, come on, come on"
  });
  const fashion = new Card({
    title: "Fashion Designer",
    img: "fashion.png",
    desc: "Kiss me, kiss me, kiss me"
  });
  const graph = new Card({
    title: "Graphic Designer",
    img: "graph.png",
    desc: "I'm gonna dress you up in my love and make you just feel my love"
  });
  const interior = new Card({
    title: "Interior Designer",
    img: "interior.png",
    desc: "Got no reason, got no shame, I know I left a lie somewhere in my brain"
  });
  const landscape = new Card({
    title: "Landscape Designer",
    img: "landscape.png",
    desc: "Oh, now I'm back, from outer space"
  });
  const finance = new Card({
    title: "Finance Analyst",
    img: "finance.png",
    desc: "You better shape up, cause I need a shape up"
  });
  const economic = new Card({
    title: "Economic Financier",
    img: "economic.png",
    desc: "I'm not a broken heart, I'm just a broken heart"
  });
  const business = new Card({
    title: "Business Analyst",
    img: "business.png",
    desc: "Thoughts of loving you just drive me crazy"
  });
  const accountant = new Card({
    title: "Accountant",
    img: "accountant.png",
    desc: "Keeping me up, night after night"
  });
  const hr = new Card({
    title: "Human Resources Manager",
    img: "hr.png",
    desc: "Now I'm saving all my loving for you, yeah, I'm saving all my loving for you"
  });
  const product = new Card({
    title: "Product Manager",
    img: "product.png",
    desc: "Please don't tell me you're too busy, I need your love, I need your love"
  });
  const project = new Card({
    title: "Project Manager",
    img: "project.png",
    desc: "Please don't tell me you're too busy, I need your love, I need your love"
  });
  const gridCards = el("div", {
    className: "flex flex-col scroll-smooth no-scrollbar h-full w-full gap-8 mt-4"
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
  const programmingRow = new Row(
    "Programming",
    py,
    js,
    cpp,
    java,
    linux,
    sysAdmin,
    oneC,
    cyber,
    dataAn,
    devAI,
    html
  );
  const designRow = new Row(
    "Design",
    designAI,
    designFace,
    photoItem,
    fashion,
    graph,
    interior,
    landscape,
    devAI
  );
  const menegmentRow = new Row(
    "Management",
    finance,
    hr,
    product,
    project,
    business,
    accountant,
    economic
  );
  gridCards.append(programmingRow.row, designRow.row, menegmentRow.row);
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
    className: "flex flex-1 flex-col items-start justify-start gap-2"
  });
  const pageTitle = el("h1", {
    text: "Articles",
    i18n: "articles.title",
    className: "text-4xl font-bold text-zinc-950 dark:text-white"
  });
  pageContent.append(pageTitle, filterBar);
  page.append(pageContent);
  articles.append(header, page);
  return articles;
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
