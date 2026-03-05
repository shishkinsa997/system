import { el } from "../utils.js";
import { initHeader } from "./Header.js";
import { initFilterBar } from "./FilterBar.js";

export function initArticles() {
  const header = initHeader();
  const filterBar = initFilterBar();

  const articles = el("div", {
    className: "flex flex-col flex-1 items-center h-full w-full",
  });

  const page = el("div", {
    className: "flex flex-1 items-start justify-center p-2 w-full",
  });

  const pageContent = el("div", {
    className:
      "flex flex-1 flex-col items-start justify-start gap-2",
  });

  const pageTitle = el("h1", {
    text: "Articles base",
    className: "text-4xl font-bold text-zinc-950 dark:text-white",
  });

  pageContent.append(pageTitle, filterBar);
  page.append(pageContent);
  articles.append(header, page);

  return articles;
}
