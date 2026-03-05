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
    className: "flex flex-1 flex-col items-start justify-start w-full gap-2",
  });

  const pageTitle = el("h1", {
    text: "Dashboard",
    i18n: "dashboard.title",
    className: "text-4xl font-bold text-zinc-950 dark:text-white",
  });

  const description = el("p", {
    text: "Welcome back, Pepe! Here's your progress for today.",
    i18n: "dashboard.description",
    className: "text-sm text-gray-400",
  });

  const progress = el("div", {
    className: "flex overflow-x-auto no-scrollbar lg:grid lg:grid-cols-4 gap-4 w-full mt-6 ",
  });

  const courses = createProgressItem(
    "Courses in progress",
    "3",
    "play_circle",
    "bg-blue-500/10 text-blue-500",
  );
  const tests = createProgressItem(
    "Tests completed",
    "12",
    "task_alt",
    "bg-purple-500/10 text-purple-500",
  );
  const streak = createProgressItem(
    "Days Streak",
    "27",
    "local_fire_department",
    "bg-amber-500/10 text-amber-500",
  );
  const exp = createProgressItem(
    "XP earned",
    "2,450",
    "bolt",
    "bg-green-500/10 text-green-500",
  );
  progress.append(courses, tests, streak, exp);

  pageContent.append(pageTitle, description, progress);
  page.append(pageContent);
  dashboard.append(header, page);

  function createProgressItem(
    title = "progress",
    count = "0",
    icon = "play",
    color = "bg-blue-500/10 text-blue-500",
  ) {
    const item = el("div", {
      className:
        "flex-1 w-full min-w-[209px] bg-white dark:bg-gray-800 px-3 py-4 rounded-2xl border border-[var(--color-border)] flex items-center gap-3",
    });
    const iconWrapper = el("div", {
      className:
        `size-12 rounded-xl flex items-center justify-center ` +
        color,
    });
    const iconSymbol = el("span", {
      className: "material-symbols-outlined text-3xl!",
      text: icon,
    });
    const content = el("div", {
      className: "flex flex-col justify-between items-between",
    });
    const titleEl = el("h2", {
      className: "text-[14px] font-medium leading-3 cursor-text",
      text: title,
    });
    const countEl = el("h3", {
      className: "text-3xl font-bold cursor-text",
      text: count,
    });

    content.append(titleEl, countEl);
    iconWrapper.append(iconSymbol);
    item.append(iconWrapper, content);

    return item;
  }

  return dashboard;
}
