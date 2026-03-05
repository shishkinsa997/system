import { el } from "../utils.js";
import { initHeader } from "./Header.js";

export function initDashboard() {
  const header = initHeader();

  const dashboard = el("div", {
    className: "flex flex-col flex-1 items-center h-full w-full",
  });

  const page = el("div", {
    className: "flex flex-1 items-start justify-center p-2 w-full",
  });

  const pageContent = el("div", {
    className:
      "flex flex-1 flex-col items-start justify-start w-full gap-2",
  });

  const pageTitle = el("h1", {
    text: "Dashboard",
    className: "text-4xl font-bold text-zinc-950 dark:text-white",
  });

  const description = el("p", {
    text: "Here will be the dashboard content.",

    className: "text-sm text-gray-400",
  });

  pageContent.append(pageTitle, description);
  page.append(pageContent);
  dashboard.append(header, page);

  return dashboard;
}
