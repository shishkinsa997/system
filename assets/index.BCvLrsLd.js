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
function createSidebarElement(tag, id, icon, link = "#") {
  const container = el("a", {
    id: `${id}`,
    className: "flex items-center w-full overflow-hidden h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300 transition-all duration-300",
    attrs: { href: link }
  });
  const text = el("span", {
    className: "ml-4 text-sm font-medium",
    text: `${tag}`
  });
  container.append(icon, text);
  return container;
}
function initSidebar() {
  const sidebar = el("aside", {
    id: "sidebar",
    className: "fixed flex flex-col h-full overflow-hidden w-16 top-0 bg-[#10101a] transition-all duration-300"
  });
  const header = el("header", {
    className: "px-2 overflow-hidden border-t border-[#b4b7c81f]"
  });
  const headerNav = el("nav", {
    className: "flex flex-col items-center w-full   overflow-hidden"
  });
  const main = el("a", {
    id: "logo",
    className: "flex items-center my-2 gap-2 py-2 px-4 overflow-hidden",
    attrs: { href: "/system/" }
  });
  const mainTitle = el("span", {
    className: "ml-2 text-l font-bold",
    text: "System"
  });
  const mainLogo = createIcon(
    "M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z",
    {
      width: 8,
      height: 8,
      viewBox: "0 0 20 20",
      fill: "currentColor",
      stroke: "none",
      className: "w-8 h-8 min-w-8 fill-current"
    }
  );
  main.append(mainLogo, mainTitle);
  const dashLogo = createIcon(
    "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    {
      width: 6,
      height: 6,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      className: "w-6 h-6 min-w-6 min-h-6 stroke-current"
    }
  );
  const searchLogo = createIcon("M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", {
    width: 6,
    height: 6,
    viewBox: "0 0 24 24",
    className: "w-6 h-6 min-w-6 min-h-6 stroke-current"
  });
  const insightsLogo = createIcon(
    "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    {
      width: 6,
      height: 6,
      viewBox: "0 0 24 24",
      className: "w-6 h-6 min-w-6 min-h-6 stroke-current"
    }
  );
  const docsLogo = createIcon(
    "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2",
    {
      width: 6,
      height: 6,
      viewBox: "0 0 24 24",
      className: "w-6 h-6 min-w-6 min-h-6 stroke-current"
    }
  );
  const productsLogo = createIcon(
    "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
    {
      width: 6,
      height: 6,
      viewBox: "0 0 24 24",
      className: "w-6 h-6 min-w-6 min-h-6 stroke-current"
    }
  );
  const dashboard = createSidebarElement(
    "Dashboard",
    "dashboard",
    dashLogo,
    "/system/"
  );
  const search = createSidebarElement("Search", "search", searchLogo, "/system/products");
  const insights = createSidebarElement(
    "Insights",
    "insights",
    insightsLogo,
    "/system/products"
  );
  const docs = createSidebarElement("Docs", "docs", docsLogo, "/system/products");
  const products = createSidebarElement(
    "Products",
    "products",
    productsLogo,
    "/system/products"
  );
  headerNav.append(dashboard, search, insights, docs, products);
  header.append(headerNav);
  const footer = el("footer", {
    className: "px-2 mt-auto mb-2 overflow-hidden border-t border-[#b4b7c81f]"
  });
  const footerContainer = el("a", {
    id: "avatar",
    className: "flex items-center gap-3 my-3 overflow-hidden rounded-lg hover:text-gray-300 transition-all duration-300",
    attrs: { href: "#" }
  });
  const avatarText = el("span", {
    className: "min-w-0"
  });
  const avatarName = el("span", { text: "Pepe Frog", className: "block truncate text-l font-medium text-zinc-950 dark:text-white mb-1" });
  const avatarRole = el("span", { text: "Admin", className: "block truncate text-m font-normal text-zinc-500 dark:text-zinc-400" });
  avatarText.append(avatarName, avatarRole);
  const avatar = el("img", {
    className: "rounded-full size-10 ml-1 inline-grid shrink-0 align-middle",
    attrs: { src: "pepe-mini.jpg" }
  });
  footerContainer.append(avatar, avatarText);
  footer.append(footerContainer);
  sidebar.append(main, header, footer);
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
  return sidebar;
}
function initPage() {
  const page = el("main", {
    id: "main",
    className: "flex flex-col h-full w-full transition-all duration-300 p-2 pl-16"
  });
  const mainWrapper = el("div", {
    className: "flex flex-col flex-1 items-center bg-[#171721] h-full min-h-[calc(100dvh-16px)] p-2 rounded-lg overflow-y-auto border border-[#b4b7c81f]"
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
const router = {
  routes: [],
  container: null,
  init(routes, container) {
    this.routes = routes;
    this.container = container;
    document.addEventListener("click", (e) => {
      const link = e.target.closest("[data-link]");
      if (link) {
        e.preventDefault();
        this.navigate(link.getAttribute("href"));
      }
    });
    window.addEventListener("popstate", () => this.render());
    this.render();
  },
  navigate(path) {
    window.history.pushState({}, "", path);
    this.render();
  },
  render() {
    const path = window.location.pathname;
    const route = this.routes.find((r) => r.path === path) || this.routes.find((r) => r.path === "*");
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
    className: "flex-1 h-10 px-3 rounded-lg bg-[#171721] border border-[#b4b7c81f] text-sm text-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#b4b7c81f]",
    attrs: { type: "text", placeholder: "Search..." }
  });
  const searchIcon = el("span", {
    className: "absolute inset-y-0 right-2 grid w-8 place-content-center"
  });
  const searchButton = el("button", {
    className: "rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800",
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
    className: "flex items-center justify-center min-h-12 py-2 w-full"
  });
  const headerContent = el("nav", {
    className: "flex items-center justify-between w-full mx-3 max-w-225 gap-2"
  });
  const search = initSearch();
  headerContent.append(search);
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
    className: "group cursor-pointer flex min-h-10 items-center justify-center gap-x-2 rounded-lg bg-gray-700 pl-4 pr-3 py-2 transition-all"
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
    className: "group cursor-pointer flex min-h-10 items-center justify-center gap-x-2 rounded-lg bg-card hover:bg-gray-700 pl-4 pr-3 py-2 transition-all"
  });
  const highestRatedText = el("span", {
    className: "text-sm font-medium text-white opacity-70",
    text: "Highest Rated"
  });
  const verifiedTradersButton = el("button", {
    className: "group cursor-pointer flex min-h-10 items-center justify-center gap-x-2 rounded-lg bg-card hover:bg-gray-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 active:bg-gray-700 pl-4 pr-3 py-2 transition-all"
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
    className: "group cursor-pointer flex min-h-10 items-center justify-center gap-x-2 rounded-lg bg-card hover:bg-gray-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 active:bg-gray-700 pl-4 pr-3 py-2 transition-all"
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
  verifiedTradersButton.append(verifiedTradersText, checkCircleIcon, expandMoreIcon);
  mostRecentButton.append(mostRecentText, expandMoreIcon);
  highestRatedButton.append(highestRatedText, expandMoreIcon);
  filter.append(tuneIcon, filterText);
  filterBar.append(filter, mostRecentButton, highestRatedButton, verifiedTradersButton, withPhotosButton);
  return filterBar;
}
function initCard(title = "Card Title", link = "card.png", desc = "Card Description") {
  const card = el("a", {
    className: "flex flex-col gap-2 focus:outline-none xl:mb-0 mb-8 rounded-[16px] border border-[#b4b7c81f] p-2 pb-4",
    attrs: { href: "#" }
  });
  const cardImage = el("img", {
    className: "focus:outline-none w-full h-56 object-cover rounded-[12px] border border-[#b4b7c81f]",
    attrs: { src: link, alt: "person capturing an image", tabindex: "0" }
  });
  const cardContent = el("div", {
    className: "flex flex-col gap-1 focus:outline-none pt-2"
  });
  const cardTitle = el("h3", {
    className: "focus:outline-none text-sm font-medium text-zinc-950 dark:text-white",
    text: title
  });
  const cardDescription = el("p", {
    className: "focus:outline-none text-xs font-normal text-zinc-500 dark:text-zinc-400",
    text: desc
  });
  cardContent.append(cardTitle, cardDescription);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      card.click();
    }
  });
  card.append(cardImage, cardContent);
  return card;
}
function initGridCards() {
  const card1 = initCard("Coding", "3.jpg", "Work hard, Play hard");
  const card2 = initCard("Sing", "8.jpg", "I kissed a man and I like it");
  const card3 = initCard("Rest", "7.jpg", "Work is not wolf, wolf is walk");
  const card4 = initCard("Love yourself", "5.jpg");
  const card5 = initCard("Training", "6.jpg");
  const card6 = initCard("Be cool", "1.jpg", "Who I am today");
  const card7 = initCard("Shine", "2.jpg", "Shine bright like a diamond");
  const gridCards = el("div", {
    className: "grid grid-cols-1 h-full w-full md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
  });
  gridCards.append(card1, card2, card3, card4, card5, card6, card7);
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
    text: "Welcome to the Dashboard",
    className: "text-2xl font-bold text-zinc-950 dark:text-white"
  });
  pageContent.append(pageTitle, filterBar, gridCards);
  page.append(pageContent);
  dashboard.append(header, page);
  return dashboard;
}
function initProducts() {
  const header = initHeader();
  const products = el("div", {
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
  products.append(header, page);
  return products;
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
document.addEventListener("DOMContentLoaded", () => {
  const { main } = buildUI(document.body);
  router.init(
    [
      {
        path: "/system/",
        component: () => initDashboard()
      },
      {
        path: "/system/products",
        component: () => initProducts()
      },
      {
        path: "*",
        component: () => initNotFound()
      }
    ],
    main
  );
});
