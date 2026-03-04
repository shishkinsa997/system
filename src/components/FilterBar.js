import { el } from "../utils.js";

export function initFilterBar() {
  const filterBar = el("div", {
    className: "flex flex-nowrap w-full gap-3 items-center pb-4 pt-6 border-b",
  });

  const filter = el("div", {
    className: "flex items-center text-white gap-2 mr-4",
  });
  const tuneIcon = el("span", {
    className: "material-symbols-outlined text-sm text-white",
    text: "tune",
  });
  const filterText = el("span", {
    className: "font-medium",
    text: "Filter by:",
  });

  const mostRecentButton = el("button", {
    className:
      "group cursor-pointer flex min-h-10 items-center justify-center gap-x-2 rounded-lg bg-[var(--color-primary)] pl-4 pr-3 py-2 transition-all",
  });
  const mostRecentText = el("span", {
    className: "text-sm font-medium text-white opacity-70",
    text: "Most Recent",
  });
  const expandMoreIcon = el("span", {
    className: "material-symbols-outlined text-sm text-white opacity-70",
    text: "expand_more",
  });

  const highestRatedButton = el("button", {
    className:
      "group cursor-pointer flex min-h-10 items-center justify-center gap-x-2 rounded-lg bg-card hover:bg-[var(--color-primary)] pl-4 pr-3 py-2 transition-all",
  });
  const highestRatedText = el("span", {
    className: "text-sm font-medium text-white opacity-70",
    text: "Highest Rated",
  });

  const verifiedTradersButton = el("button", {
    className:
      "group cursor-pointer flex min-h-10 items-center justify-center gap-x-2 rounded-lg bg-card hover:bg-[var(--color-primary)] focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 active:bg-[var(--color-primary)] pl-4 pr-3 py-2 transition-all",
  });
  const verifiedTradersText = el("span", {
    className: "text-sm font-medium text-white opacity-70",
    text: "Verified Traders",
  });
  const checkCircleIcon = el("span", {
    className: "material-symbols-outlined text-sm text-white opacity-70",
    text: "check_circle",
  });

  const withPhotosButton = el("button", {
    className:
      "group cursor-pointer flex min-h-10 items-center justify-center gap-x-2 rounded-lg bg-card hover:bg-[var(--color-primary)] focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 active:bg-[var(--color-primary)] pl-4 pr-3 py-2 transition-all",
  });
  const withPhotosText = el("span", {
    className: "text-sm font-medium text-white opacity-70",
    text: "With Photos",
  });
  const imageIcon = el("span", {
    className: "material-symbols-outlined text-sm text-white opacity-70",
    text: "image",
  });
  withPhotosButton.append(withPhotosText, imageIcon);
  verifiedTradersButton.append(
    verifiedTradersText,
    checkCircleIcon,
    expandMoreIcon,
  );
  mostRecentButton.append(mostRecentText, expandMoreIcon);
  highestRatedButton.append(highestRatedText, expandMoreIcon);
  filter.append(tuneIcon, filterText);
  filterBar.append(
    filter,
    mostRecentButton,
    highestRatedButton,
    verifiedTradersButton,
    withPhotosButton,
  );
  return filterBar;
}
