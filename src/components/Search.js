import { el, createIcon } from "../utils.js";

export function initSearch() {
  const search = el("div", {
    className: "relative flex items-center h-10 w-full min-w-30 max-w-120 rounded-lg bg-[#171721]",
  });
  const searchInput = el("input", {
    className:
      "flex-1 h-10 px-3 min-w-30 rounded-lg bg-[#171721] border border-[var(--color-border)] text-sm text-zinc-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-border)]",
    attrs: { type: "text", placeholder: "Search..." },
  });
  const searchIcon = el("span", {
    className: "absolute inset-y-0 right-2 grid w-8 place-content-center",
  });
  const searchButton = el("button", {
    className:
      "rounded-full p-1.5 text-[var(--color-primary)] transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800",
    attrs: { type: "button" },
  });
  const searchSVG = createIcon(
    "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
    {
      width: 8,
      height: 8,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      className: "size-4",
    },
  );
  searchIcon.append(searchButton);
  searchButton.append(searchSVG);
  search.append(searchInput, searchIcon);

  return search;
}
