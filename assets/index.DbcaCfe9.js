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
function el(tag, options = {}) {
  const e = document.createElement(tag);
  if (options.className) e.className = options.className;
  if (options.id) e.id = options.id;
  if (options.text) e.textContent = options.text;
  if (options.html) e.innerHTML = options.html;
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
  svg.setAttribute("class", className || `w-${width} h-${height} ${fill === "currentColor" ? "fill-current" : "stroke-current"}`);
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
    className: "ml-2 text-l font-bold whitespace-nowrap text-zinc-950 dark:text-white",
    text: "Gachi PractiCum"
  });
  const gachiLogo = el("span", {
    className: "material-symbols-outlined text-[32px]! w-8 h-8 dark:text-white",
    text: "sports_kabaddi"
  });
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
    "/"
  );
  const course = createSidebarElement(
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
  headerNav.append(dashboard, course, articles, tests, library);
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
    className: "block truncate text-m font-normal text-zinc-500 dark:text-zinc-400"
  });
  avatarText.append(avatarName, avatarRole);
  const avatar = el("img", {
    className: "rounded-full size-10 ml-1 inline-grid shrink-0 align-middle",
    attrs: { src: "pepe-mini.jpg" }
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
  function createSidebarElement(tag, id, icon, link = "#") {
    const container = el("a", {
      id: `${id}`,
      className: "flex items-center w-full overflow-hidden h-12 px-3 rounded hover:bg-[var(--color-primary)] hover:text-gray-300 transition-all duration-300",
      attrs: { href: link, "data-link": "true" }
    });
    const text = el("span", {
      className: "ml-4 text-m font-medium whitespace-nowrap",
      text: `${tag}`
    });
    container.append(icon, text);
    return container;
  }
  return sidebar;
}
function initPage() {
  const page = el("main", {
    id: "main",
    className: "flex flex-col h-full w-full transition-all duration-300 p-2 pl-16"
  });
  const mainWrapper = el("div", {
    className: "flex flex-col flex-1 items-center bg-[#171721] h-full min-h-[calc(100dvh-16px)] p-2 rounded-lg overflow-y-auto border border-[var(--color-border)]"
  });
  const content = el("div", {
    id: "page-content",
    className: "flex flex-1 w-full h-full"
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
    className: "fixed overflow-hidden left-0 top-0 min-w-screen h-dvh bg-[#10101a] text-gray-400"
  });
  const aside = initSidebar();
  const { page, content } = initPage();
  app.append(aside, page);
  root.appendChild(app);
  return { main: content };
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
  }
};
function initSearch() {
  const search = el("div", {
    className: "relative flex items-center h-10 w-full rounded-lg bg-[#171721]"
  });
  const searchInput = el("input", {
    className: "flex-1 h-10 px-3 rounded-lg bg-[#171721] border border-[var(--color-border)] text-sm text-zinc-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-border)]",
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
function initHeader() {
  const header = el("div", {
    className: "flex items-center justify-center min-h-12 h-12 py-2 mb-4 w-full"
  });
  const headerContent = el("nav", {
    className: "flex items-center justify-between w-full mx-3 max-w-225 gap-2"
  });
  const search = initSearch();
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
  headerContent.append(search, notificationsWrapper);
  header.append(headerContent);
  return header;
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
    text: "Filter by:"
  });
  const mostRecentButton = el("button", {
    className: "group cursor-pointer flex min-h-10 items-center justify-center gap-x-2 rounded-lg bg-[var(--color-primary)] pl-4 pr-3 py-2 transition-all"
  });
  const mostRecentText = el("span", {
    className: "text-sm font-medium text-white opacity-70",
    text: "Most Recent"
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
    text: "Highest Rated"
  });
  const verifiedTradersButton = el("button", {
    className: "group cursor-pointer flex min-h-10 items-center justify-center gap-x-2 rounded-lg bg-card hover:bg-[var(--color-primary)] focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 active:bg-[var(--color-primary)] pl-4 pr-3 py-2 transition-all"
  });
  const verifiedTradersText = el("span", {
    className: "text-sm font-medium text-white opacity-70",
    text: "Verified Traders"
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
    text: "With Photos"
  });
  const imageIcon = el("span", {
    className: "material-symbols-outlined text-sm text-white opacity-70",
    text: "image"
  });
  withPhotosButton.append(withPhotosText, imageIcon);
  verifiedTradersButton.append(
    verifiedTradersText,
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
    verifiedTradersButton,
    withPhotosButton
  );
  return filterBar;
}
class Card {
  constructor({ title, img, desc, href = "#" }) {
    this.card = el("article", {
      className: "relative overflow-hidden aspect-1/1 min-h-50 flex-shrink-0 rounded-[16px] border border-[var(--color-border)] group"
    });
    const imageWrapper = el("picture", {
      className: " absolute inset-0 transition-transform duration-500 hover:scale-110"
    });
    const image = el("img", {
      className: "w-full h-full object-cover transition-transform duration-500 hover:scale-110",
      attrs: { src: img, alt: title, loading: "lazy" }
    });
    const gradientOverlay = el("div", {
      className: "pointer-events-none absolute inset-x-0 top-0 h-full rounded-[16px]",
      attrs: { "style": "backdrop-filter: blur(30px); background: rgba(225, 225, 225, 0.05); -webkit-mask-image: linear-gradient(rgb(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0) 70%); " }
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
      className: "text-xs font-normal text-zinc-200",
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
  const py = new Card({ title: "Python-developer + AI", img: "py.png", desc: "Work hard, Play hard" });
  const js = new Card({ title: "Fullstack JavaScript developer", img: "js.png", desc: "I kissed a man and I like it" });
  const cpp = new Card({ title: "C++ developer", img: "c++.png", desc: "Work is not wolf, wolf is walk" });
  const oneC = new Card({ title: "1C developer", img: "1c.png" });
  const cyber = new Card({ title: "Cyber Security + AI", img: "cyber.png" });
  const dataAn = new Card({ title: "Data Analyst", img: "data_an.png" });
  const designAI = new Card({ title: "AI Creator", img: "design_ai.png", desc: "Who I am today" });
  const designFace = new Card({ title: "Makeup Artist", img: "design_face.png", desc: "Shine bright like a diamond" });
  const photoItem = new Card({ title: "Item Photographer", img: "design_item.png", desc: "Shine bright like a diamond" });
  const devAI = new Card({ title: "AI Developer", img: "dev_ai.png", desc: "Shine bright like a diamond" });
  const fashion = new Card({ title: "Fashion Designer", img: "fashion.png", desc: "Shine bright like a diamond" });
  const graph = new Card({ title: "Graphic Designer", img: "graph.png", desc: "Shine bright like a diamond" });
  const gridCards = el("div", {
    className: "flex overflow-x-auto scroll-smooth no-scrollbar h-full w-full gap-4 mt-4"
  });
  gridCards.append(py.render(), js.render(), cpp.render(), oneC.render(), cyber.render(), dataAn.render(), designAI.render(), designFace.render(), photoItem.render(), devAI.render(), fashion.render(), graph.render());
  return gridCards;
}
function initDashboard() {
  const header = initHeader();
  const filterBar = initFilterBar();
  const gridCards = initGridCards();
  const dashboard = el("div", {
    className: "flex flex-col flex-1 items-center h-full w-full"
  });
  const page = el("div", {
    className: "flex flex-1 items-start justify-center py-2 w-full"
  });
  const pageContent = el("div", {
    className: "flex flex-1 flex-col items-start justify-start mx-3 max-w-225 gap-2"
  });
  const pageTitle = el("h1", {
    text: "All courses",
    className: "text-2xl font-bold text-zinc-950 dark:text-white"
  });
  pageContent.append(pageTitle, filterBar, gridCards);
  page.append(pageContent);
  dashboard.append(header, page);
  return dashboard;
}
function initCourses() {
  const header = initHeader();
  const courses = el("div", {
    className: "flex flex-col flex-1 items-center h-full w-full"
  });
  const page = el("div", {
    className: "flex flex-1 items-start justify-center py-2 w-full"
  });
  const pageContent = el("div", {
    className: "flex flex-1 flex-col items-start justify-start mx-3 max-w-225 gap-2"
  });
  const pageTitle = el("h1", {
    text: "Products",
    className: "text-2xl font-bold text-zinc-950 dark:text-white"
  });
  const description = el("p", {
    text: "Here will be the products list.",
    className: "text-sm text-gray-400"
  });
  pageContent.append(pageTitle, description);
  page.append(pageContent);
  courses.append(header, page);
  return courses;
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
  el("div", {
    className: "h-full w-full flex justify-center items-center",
    html: `
  <div class="py-12 px-12 border border-gray-200 rounded-2xl shadow-xl z-20">
    <div>
      <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Create An Account</h1>
      <p class="w-80 text-center text-sm mb-8 font-semibold text-[var(--color-primary)] tracking-wide cursor-pointer">Create an account to enjoy all the services without any ads for free!</p>
    </div>
    <div class="space-y-4">
      <input type="text" placeholder="Email Addres" class="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500" />
      <input type="text" placeholder="Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500" />
    </div>
    <div class="text-center mt-6">
      <button class="w-full py-2 text-xl text-white bg-purple-400 rounded-lg hover:bg-purple-500 transition-all">Create Account</button>
      <p class="mt-4 text-sm">Already Have An Account? <span class="underline  cursor-pointer"> Sign In</span></p>
    </div>
  </div>

`
  });
  page.append(modal);
  modal.append(textWrapper, inputWrapper, buttonWrapper);
  textWrapper.append(textTitle, textDesc);
  inputWrapper.append(inputEmail, inputPassword);
  buttonWrapper.append(button, linkWrapper);
  linkWrapper.append("Already Have An Account? ", linkSpan);
  return page;
}
document.addEventListener("DOMContentLoaded", () => {
  const { main } = buildUI(document.body);
  router.init(
    [
      {
        path: "/",
        component: () => initDashboard()
      },
      {
        path: "/courses",
        component: () => initCourses()
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
