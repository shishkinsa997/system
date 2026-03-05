import { el, createIcon } from "../utils.js";
import { loadLanguage } from "../services/i18n.js";

export function initDropdownLang() {
  const languages = el("div", {
    className:
      "relative flex justify-self-end justify-between items-center h-10 min-w-30 rounded-lg space-x-1 relative inline-block text-left",
  });

  const button = el("button", {
    id: "dropdown-button",
    className:
      "inline-flex gap-2 justify-between items-center w-60 rounded-lg border border-[var(--color-border)] shadow-sm px-4 h-full w-full bg-[var(--color-primary)] text-sm hover:bg-gray-600",
    attrs: { type: "button" },
  });
  const selected = el("span", {
    id: "dropdown-selected",
    className: "w-full text-left overflow-hidden flex-1",
    text: "English",
  });
  const caret = createIcon("M6 9l6 6 6-6", {
    width: 4,
    height: 4,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  });
  button.setAttribute("aria-haspopup", "true");
  button.setAttribute("aria-expanded", "false");
  caret.setAttribute("id", "caret");
  caret.style.transform = "rotate(0deg)";
  caret.style.transition = " transform 0.15s ease-in-out";
  button.append(selected, caret);

  const menu = el("div", {
    id: "dropdown-menu",
    className:
      "origin-top-right absolute hidden w-full left-0 mt-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-gray-300",
    attrs: {
      role: "menu",
      "aria-orientation": "vertical",
      "aria-labelledby": "dropdown-button",
      tabindex: "-1",
    },
  });
  const menuOptions = el("div", {
    className: "py-1 text-white",
    attrs: { role: "none" },
  });

  const LANGS = {
    en: { label: "English" },
    ru: { label: "Русский" },
    de: { label: "Deutsch" },
  };

  const createOption = (code) => {
    const option = el("a", {
      id: `lang-${code}`,
      className:
        "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
      attrs: { role: "lang-option", href: "#", "data-lang": code },
    });
    option.textContent = LANGS[code].label;
    return option;
  };

  const english = createOption("en");
  const russian = createOption("ru");
  const german = createOption("de");
  menu.append(menuOptions);
  menuOptions.append(english, russian, german);
  languages.append(button, menu);

  function toggleCaret() {
    caret.style.transform == "rotate(0deg)"
      ? (caret.style.transform = "rotate(180deg)")
      : (caret.style.transform = "rotate(0deg)");
  }

  button.addEventListener("click", function (event) {
    event.stopPropagation();

    toggleCaret();
    menu.classList.toggle("hidden");
    button.setAttribute(
      "aria-expanded",
      menu.classList.contains("hidden") ? "false" : "true",
    );
  });

  const dropdownItems = menu.querySelectorAll("[role='lang-option']");
  dropdownItems.forEach(function (item) {
    item.addEventListener("click", async function (event) {
      event.preventDefault();
      const lang = item.getAttribute("data-lang");
      if (!lang) return;

      selected.textContent = LANGS[lang]?.label || item.textContent;
      await loadLanguage(lang);

      menu.classList.add("hidden");
      button.setAttribute("aria-expanded", "false");
      toggleCaret();
    });
  });

  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target)) {
      menu.classList.add("hidden");
      button.setAttribute("aria-expanded", "false");
      caret.style.transform = "rotate(0deg)";
    }
  });

  const savedLang = localStorage.getItem("lang") || "en";
  if (LANGS[savedLang]) {
    selected.textContent = LANGS[savedLang].label;
  }

  return languages;
}
