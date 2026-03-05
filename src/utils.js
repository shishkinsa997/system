function el(tag, options = {}) {
  const e = document.createElement(tag);
  if (options.className) e.className = options.className;
  if (options.id) e.id = options.id;
  if (options.text) e.textContent = options.text;
  if (options.html) e.innerHTML = options.html;
  if (options.i18n) e.setAttribute("data-i18n", options.i18n);
  if (options.attrs) {
    for (const k in options.attrs) e.setAttribute(k, options.attrs[k]);
  }
  return e;
}

function createIcon(pathData, options = {}) {
  const {
    width = 6,
    height = 6,
    viewBox = "0 0 24 24",
    fill = "none",
    stroke = "currentColor",
    strokeWidth = 2,
    strokeLinecap = "round",
    strokeLinejoin = "round",
    className = "",
  } = options;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  svg.setAttribute(
    "class",
    className ||
      `w-${width} h-${height} ${fill === "currentColor" ? "fill-current" : "stroke-current"}`,
  );

  if (!className) {
    svg.setAttribute("width", width * 4);
    svg.setAttribute("height", height * 4);
  }

  svg.setAttribute("viewBox", viewBox);
  svg.setAttribute("fill", fill);
  svg.setAttribute("stroke", stroke);
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", pathData);

  if (stroke !== "none") {
    path.setAttribute("stroke-width", strokeWidth);
    path.setAttribute("stroke-linecap", strokeLinecap);
    path.setAttribute("stroke-linejoin", strokeLinejoin);
  }

  svg.appendChild(path);
  return svg;
}

const images = import.meta.glob("./assets/img/*", { eager: true, as: "url" });

export { el, createIcon, images };
