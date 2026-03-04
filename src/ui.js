import { el } from "./utils.js";
import { initSidebar } from "./components/Sidebar.js";
import { initPage } from "./components/Page.js"

function buildUI(root) {
  const app = el("div", {
    id: "app",
    className: "fixed overflow-hidden left-0 top-0 min-w-screen h-dvh bg-[#10101a] text-gray-400",
  });
  const aside = initSidebar();
  const { page, content } = initPage();
  app.append(aside, page);
  root.appendChild(app);
  return { main: content };
}

export { buildUI };