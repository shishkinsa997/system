const DEFAULT_LANG = "en";
let currentDict = {};

export async function loadLanguage(lang) {
  const code = lang || localStorage.getItem("lang") || DEFAULT_LANG;

  const url = new URL(`../locales/${code}.json`, import.meta.url);
  const res = await fetch(url);
  if (!res.ok) throw new Error("Cannot load locale " + code);

  currentDict = await res.json();
  localStorage.setItem("lang", code);
  document.documentElement.setAttribute("lang", code);

  applyTranslations();
  return code;
}

export function t(key) {
  return currentDict[key] || key;
}

export function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = currentDict[key];
    if (text) el.textContent = text;
  });
}
