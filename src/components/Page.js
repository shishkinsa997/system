import { el } from "../utils.js";

export function initPage() {
  const page = el("main", {
    id: "main",
    className:
      "flex flex-col h-full w-full  transition-all duration-300 p-2 pl-16",
  });

  const mainWrapper = el("div", {
    className:
      "flex flex-col flex-1 items-center bg-[#171721] h-full min-h-[calc(100dvh-16px)] p-2 rounded-lg overflow-y-auto border border-[var(--color-border)]",
  });

  const content = el("div", {
    id: "page-content",
    className: "flex flex-1 w-full h-full max-w-225",
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
