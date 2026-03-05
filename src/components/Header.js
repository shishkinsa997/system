import { el } from "../utils.js";
import { initSearch } from "./Search.js";
// import { initButton } from "./Button.js";

export function initHeader() {
  const header = el("div", {
    className:
      "flex items-center flex-shrink-0 justify-center p-2 mb-4 w-full",
  });
  const headerContent = el("nav", {
    className: "flex items-center justify-between w-full  gap-2",
  });
  const search = initSearch();
  const notificationsWrapper = el("div", {
    className: "rounded-full size-10",
  });
  const notifications = el("button", {
    className:
      "relative rounded-full w-10! size-10 max-size-10 min-size-10 text-[var(--color-primary)] transition-colors border border-[var(--color-border)] hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800",
    attrs: { type: "button" },
  });
  const notificationsIcon = el("span", {
    className:
      "flex items-center justify-center p-1 material-symbols-outlined text-xl! size-full text-center",
    text: "notifications",
  });
  const badge = el("span", {
    className:
      "absolute top-1 right-1 inline-flex items-center justify-center w-2 h-2 text-sm font-bold text-white bg-red-500 rounded-full transform translate-x-1/4 -translate-y-1/4",
  });
  // const button = initButton({ text: "Log in", onClick: () => {} });
  notifications.append(notificationsIcon, badge);
  notificationsWrapper.append(notifications);
  headerContent.append(search, notificationsWrapper);
  header.append(headerContent);

  return header;
}
