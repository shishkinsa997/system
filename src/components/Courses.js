import { el } from "../utils.js";
import { initHeader } from "./Header.js";
import { initGridCards } from "./GridCards.js";
export function initCourses() {
  const header = initHeader();
  const gridCards = initGridCards();

  const courses = el("div", {
    className: "flex flex-col flex-1 items-center h-full w-full",
  });

  const page = el("div", {
    className: "flex flex-1 items-start justify-center p-2 w-full",
  });

  const pageContent = el("div", {
    className: "flex flex-1 flex-col items-start justify-start w-full gap-2",
  });

  const pageTitle = el("h1", {
    text: "All courses",
    i18n: "courses.title",
    className: "text-4xl font-bold text-zinc-950 dark:text-white",
  });

  pageContent.append(pageTitle, gridCards);
  page.append(pageContent);
  courses.append(header, page);

  return courses;
}
