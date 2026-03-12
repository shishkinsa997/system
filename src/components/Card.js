import { el, images } from "../utils.js";

export class Card {
  constructor({ title, type = "profession", major, img, desc, href = "#" }) {
    this.card = el("article", {
      className:
        "relative overflow-hidden aspect-square min-w-72 rounded-[16px] border border-[var(--color-border)] group",
      attrs: {
        "data-major": major
      }
    });

    const imageWrapper = el("picture", {
      className: "absolute inset-0",
    });

    const image = el("img", {
      className:
        "transition-transform duration-500 hover:scale-110 w-full h-full object-cover transition-transform duration-500 hover:scale-110",
      attrs: {
        src: images[img],
        alt: title,
        loading: "lazy",
      },
    });

    const gradientOverlay = el("div", {
      className:
        "pointer-events-none absolute inset-x-0 top-0 h-full rounded-[16px]",
      attrs: {
        style:
          "backdrop-filter: blur(30px); background: rgba(225, 225, 225, 0.05);" +
          "-webkit-mask-image: linear-gradient(" +
          "  rgba(0, 0, 0, 0) 50%," +
          "  rgba(0, 0, 0, 0.8) 60%," +
          "  rgba(0, 0, 0, 1) 70%);",
      },
    });

    const contentWrapper = el("a", {
      className:
        "relative z-[1] grid grid-rows-[1fr_auto] h-full w-full p-4 " +
        "items-end cursor-pointer focus:outline-none",
      attrs: { href },
    });

    const chip = el("span", {
      className:
        "px-3 py-1 mb-auto bg-gray-700/50 text-[10px] text-white font-bold uppercase tracking-widest rounded-full w-fit mb-4 cursor-text",
      text: type,
      i18n: "courses.card.chip.profession",
    });

    const textBlock = el("div", {
      className: "space-y-1",
    });

    const titleEl = el("h3", {
      className: "text-xl font-bold cursor-text text-white",
      text: title,
    });

    const descEl = el("p", {
      className:
        "text-xs font-normal text-zinc-200 line-clamp-1 whitespace-wrap",
      text: desc,
    });

    textBlock.append(titleEl, descEl);
    contentWrapper.append(chip, textBlock);
    imageWrapper.append(image);

    this.card.append(imageWrapper, gradientOverlay, contentWrapper);

    this.card.tabIndex = 0;
    this.card.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.card.click();
    });
  }

  render() {
    return this.card;
  }
}
