import { el, images } from "../utils.js";

export function initSidebar() {
  const sidebar = el("aside", {
    id: "sidebar",
    className:
      "fixed flex flex-col h-full overflow-hidden w-16 top-0 bg-[#10101a] transition-all duration-300",
  });

  const gachiMain = el("a", {
    id: "logo",
    className:
      "flex items-center my-2 gap-2 py-2 px-4 overflow-hidden dark:text-white",
    attrs: { href: "/", "data-link": "true" },
  });
  const gachiTitle = el("span", {
    className:
      "ml-2 text-l leading-6 flex flex-col font-bold whitespace-nowrap text-zinc-950 dark:text-white",
    text: "Gachi PractiCum",
    i18n: "side.title",
  });
  const gachiSubtitle = el("span", {
    className:
      "text-[10px] leading-2 whitespace-nowrap text-zinc-500 dark:text-zinc-400",
    text: "Premium Learning",
    i18n: "side.subtitle",
  });
  const gachiLogo = el("span", {
    className: "material-symbols-outlined text-[32px]! w-8 h-8 dark:text-white",
    text: "sports_kabaddi",
  });
  gachiTitle.append(gachiSubtitle);
  gachiMain.append(gachiLogo, gachiTitle);

  const navigation = el("header", {
    className:
      "flex flex-col items-center p-2 justify-between h-full overflow-hidden border-t border-[var(--color-border)]",
  });
  const headerNav = el("nav", {
    className: "flex flex-col gap-2 items-center w-full overflow-hidden",
  });
  const footerNav = el("nav", {
    className: "flex flex-col gap-2 items-center w-full overflow-hidden",
  });

  const dashLogo = el("span", {
    className: "material-symbols-outlined text-2xl!",
    text: "home",
  });
  const coursesLogo = el("span", {
    className: "material-symbols-outlined text-2xl!",
    text: "school",
  });
  const articlesLogo = el("span", {
    className: "material-symbols-outlined text-2xl!",
    text: "article",
  });
  const testsLogo = el("span", {
    className: "material-symbols-outlined text-2xl!",
    text: "quiz",
  });
  const libraryLogo = el("span", {
    className: "material-symbols-outlined text-2xl!",
    text: "bookmarks",
  });
  const supportLogo = el("span", {
    className: "material-symbols-outlined text-2xl!",
    text: "help",
  });
  const settingsLogo = el("span", {
    className: "material-symbols-outlined text-2xl!",
    text: "settings",
  });

  const dashboard = createSidebarElement(
    "Dashboard",
    "dashboard",
    dashLogo,
    "/dashboard",
  );
  const courses = createSidebarElement(
    "Courses",
    "courses",
    coursesLogo,
    "/courses",
  );
  const articles = createSidebarElement(
    "Articles",
    "articles",
    articlesLogo,
    "/articles",
  );
  const tests = createSidebarElement("Tests", "tests", testsLogo, "/tests");
  const library = createSidebarElement(
    "My library",
    "library",
    libraryLogo,
    "/library",
  );
  const support = createSidebarElement(
    "Support",
    "support",
    supportLogo,
    "/support",
  );
  const settings = createSidebarElement(
    "Settings",
    "settings",
    settingsLogo,
    "/settings",
  );

  headerNav.append(dashboard, courses, articles, tests, library);
  footerNav.append(support, settings);
  navigation.append(headerNav, footerNav);

  const profile = el("footer", {
    className:
      "px-2 mt-auto mb-2 overflow-hidden border-t border-[var(--color-border)]",
  });
  const profileWrapper = el("a", {
    id: "avatar",
    className:
      "flex items-center gap-3 mt-4 mb-8 overflow-hidden rounded-lg hover:text-gray-300 transition-all duration-300",
    attrs: { href: "/login", "data-link": "true" },
  });
  const avatarText = el("span", {
    className: "min-w-0",
  });
  const avatarName = el("span", {
    text: "Pepe Frog",
    className:
      "block truncate text-l font-medium text-zinc-950 dark:text-white mb-1",
  });
  const avatarRole = el("span", {
    text: "Admin",
    i18n: "side.role",
    className:
      "block truncate text-m font-normal text-zinc-500 dark:text-zinc-400",
  });
  avatarText.append(avatarName, avatarRole);
  const avatar = el("img", {
    className: "rounded-full size-10 ml-1 inline-grid shrink-0 align-middle",
    attrs: { src: images["./assets/img/pepe-mini.jpg"] },
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

  courses.classList.add("bg-[var(--color-primary)]");

  document.addEventListener("click", (e) => {
    const sliderElements = document.querySelectorAll("#sidebar nav a");
    const link = e.target.closest("a");
    if (!link) return;
    e.preventDefault();
    history.pushState(null, "", link.href);
    const linkPath = window.location.pathname;
    const sliderElement = document.getElementById(`${linkPath.slice(1)}`) || 0;

    sliderElements.forEach((el) => {
      el.classList.remove("bg-[var(--color-primary)]");
    });
    if (sliderElement) {
      sliderElement.classList.add("bg-[var(--color-primary)]");
    } else if (linkPath === "/") {
      sliderElements[1].classList.add("bg-[var(--color-primary)]");
    }
  });

  function createSidebarElement(tag, id, icon, link = "#") {
    const container = el("a", {
      id: `${id}`,
      className:
        "flex items-center w-full overflow-hidden h-12 px-3 rounded hover:bg-[var(--color-primary)] hover:text-gray-300 transition-all duration-300",
      attrs: { href: link, "data-link": "true" },
    });
    const text = el("span", {
      className: "ml-4 text-m font-medium whitespace-nowrap",
      text: `${tag}`,
      i18n: `side.${id}`,
    });
    container.append(icon, text);

    return container;
  }

  return sidebar;
}
