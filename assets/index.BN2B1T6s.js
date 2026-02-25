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
    className: "flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300 transition-all duration-300",
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
    className: "fixed h-full w-16 top-0 px-2 bg-[#10101a] transition-all duration-300"
  });
  const header = el("div", {
    className: "flex flex-col items-center w-full border-t border-gray-700 overflow-hidden"
  });
  const main = el("a", {
    id: "logo",
    className: "flex items-center my-2 py-2 px-2 overflow-hidden",
    attrs: { href: "#" }
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
    "#"
  );
  const search = createSidebarElement("Search", "search", searchLogo, "#");
  const insights = createSidebarElement(
    "Insights",
    "insights",
    insightsLogo,
    "#"
  );
  const docs = createSidebarElement("Docs", "docs", docsLogo, "#");
  const products = createSidebarElement(
    "Products",
    "products",
    productsLogo,
    "#"
  );
  header.append(dashboard, search, insights, docs, products);
  sidebar.append(main, header);
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
function initDashboard() {
  const main = el("div", {
    id: "main",
    className: "w-screen h-screen bg-[#171721] border border-[#b4b7c81f] flex transition-all duration-300 ml-16 mt-2 p-2 rounded-lg",
    text: "Dashboard"
  });
  window.addEventListener("sidebar:open", () => {
    main.classList.remove("ml-16");
    main.classList.add("ml-64");
  });
  window.addEventListener("sidebar:close", () => {
    main.classList.remove("ml-64");
    main.classList.add("ml-16");
  });
  return main;
}
function buildUI(root) {
  const app = el("div", {
    id: "app",
    className: "fixed left-0 top-0 w-full h-full bg-[#10101a] text-gray-400"
  });
  const side = initSidebar();
  const main = initDashboard();
  app.append(side, main);
  root.appendChild(app);
}
document.addEventListener("DOMContentLoaded", () => {
  buildUI(document.body);
});
