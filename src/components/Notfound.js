import { el } from "../utils.js"

export function initNotFound() {
  const page = el("div", {
    className: "grid h-full w-full place-content-center px-4",
  })
  const title = el("h1", {
    className: "uppercase tracking-widest text-gray-50",
    text: "404 | Not Found"
  })
  page.append(title)

  return page;
}