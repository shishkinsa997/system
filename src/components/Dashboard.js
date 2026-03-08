import { el, images } from "../utils.js";
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

  const progress = el("section", {
    className:
      "flex overflow-x-auto no-scrollbar lg:grid lg:grid-cols-4 gap-4 w-full mt-6 ",
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


  const learningBlock = el("section", {
    className: "mt-6 w-full",
  });
  const learningHeader = el("div", {
    className: "flex items-center justify-between mb-4",
  });
  const learningTitle = el("h2", {
    text: "Continue learning",
    i18n: "dashboard.learning.title",
    className: "text-xl font-bold cursor-text",
  });
  const learningViewAll = el("a", {
    className:
      "text-blue-500 text-sm font-semibold hover:underline cursor-pointer",
    text: "View all courses",
    i18n: "dashboard.learning.viewAll",
    attrs: { href: "/courses", "data-link": "true" },
  });
  const learningWrapper = el("div", {
    className:
      "relative overflow-hidden rounded-2xl bg-gray-700 text-white shadow-2xl group",
  });
  const learningFade = el("div", {
    className:
      "absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-800/80 to-transparent z-10",
  });
  const learningBackground = el("div", {
    className:
      "absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center opacity-60",
    attrs: { style: `background-image: url(${images["./assets/img/js.png"]})` },
  });
  const learningContent = el("div", {
    className: "relative z-20 p-8 md:p-12 flex flex-col justify-center max-w-2xl",
  });
  const learningChip = el("span", {
    className: "px-3 py-1 bg-blue-500 text-[10px] font-bold uppercase tracking-widest rounded-full w-fit mb-4 cursor-text",
    text: "current module",
    i18n: "dashboard.learning.chip",
  })
  const learningContentTitle = el("h4", {
    text: "JavaScript Fundamentals",
    i18n: "dashboard.learning.content.title",
    className: "text-3xl md:text-4xl font-bold mb-4 cursor-text",
  });
  const learningContentDesc = el("p", {
    text: "In this course, you'll learn the fundamentals of JavaScript, including variables, functions, and control flow.",
    i18n: "dashboard.learning.content.description",
    className: "text-slate-300 text-lg mb-8 cursor-text",
  });
  const learningFooter = el("div", {
    className: "flex flex-col sm:flex-row items-start sm:items-center gap-6"
  })
  const learningProgress = el("div", {
    className: "flex-1 w-full sm:w-auto"
  })
  const learningProgressHeader = el("div", {
    className: "flex justify-between text-sm mb-2",
  })
  const learningProgressTitle = el("span", {
    className: "text-slate-400 cursor-text",
    text: "Progress",
    i18n: "dashboard.learning.progress.title",
  })
  const learningProgressValue = el("span", {
    className: "text-white font-bold cursor-text",
    text: "70%",
  })
  const learningProgressBar = el("div", {
    className: "h-2 bg-slate-700 rounded-full overflow-hidden"
  })
  const learningProgressBarFill = el("div", {
    className: "h-full bg-blue-500 w-3/4 rounded-full"
  })
  const learningButton = el("button", {
    className: "flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all cursor-text",
    text: "Continue learning",
    i18n: "dashboard.learning.button",
  })
  learningFooter.append(learningProgress, learningButton)
  learningProgressBar.append(learningProgressBarFill)
  learningProgressHeader.append(learningProgressTitle, learningProgressValue);
  learningProgress.append(learningProgressHeader, learningProgressBar);
  learningHeader.append(learningTitle, learningViewAll);
  learningWrapper.append(learningFade, learningBackground, learningContent);
  learningContent.append(learningChip, learningContentTitle, learningContentDesc, learningFooter);
  learningBlock.append(learningHeader, learningWrapper);


  pageContent.append(pageTitle, description, progress, learningBlock);
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
      className: `size-12 rounded-xl flex items-center justify-center ` + color,
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
