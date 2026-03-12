import { el } from "../utils.js";
import { Card } from "./Card.js";
import { mainData } from "../mainData.js";
mainData()
  .then((data) => {
    renderCards(data);
  })
  .catch((error) => {
    console.error(error);
  });

async function renderCards(data) {
  setTimeout(() => {
    const gridCards = document.getElementById("grid-cards");
    console.log(gridCards);
    gridCards.innerHTML = "";
    const allCards = [];
    data.courses.forEach((course) => {
      const card = new Card({
        title: course.title,
        img: course.image,
        desc: course.desc,
        type: course.type,
        major: course.major,
      });
      allCards.push(card);
    });

    class Row {
      constructor(title, ...cards) {
        this.row = el("div", {
          className: "flex flex-col h-full w-full gap-2",
        });

        this.rowCards = el("div", {
          className:
            "flex overflow-x-auto scroll-smooth no-scrollbar h-full w-full gap-4 mt-4",
        });
        this.rowTitle = el("h2", {
          text: title,
          i18n: `courses.${title.toLowerCase()}`,
          className: "text-lg font-bold text-zinc-950 dark:text-white",
        });

        const elements = [];
        cards.forEach((item) => {
          elements.push(item);
        });
        this.rowCards.append(
          ...elements.map((item) => {
            const node = item.render();
            return node.parentNode ? node.cloneNode(true) : node;
          }),
        );
        this.row.append(this.rowTitle, this.rowCards);
      }
      add(...cards) {
        const elements = [];
        cards.forEach((item) => {
          elements.push(item);
        });
        this.row.append(
          ...elements.map((item) => {
            const node = item.render();
            return node.parentNode ? node.cloneNode(true) : node;
          }),
        );
      }
    }

    const fileredRow = (m) => {
      return allCards.filter((c) => c.card.dataset.major === m);
    };
    const programmingRow = new Row("Programming", ...fileredRow("programming"));
    const designRow = new Row("Design", ...fileredRow("design"));
    const managementRow = new Row("Management", ...fileredRow("management"));

    gridCards.append(programmingRow.row, designRow.row, managementRow.row);
    return gridCards;
  }, 10);
}

function initGridCards() {
  const gridCards = el("div", {
    id: "grid-cards",
    className:
      "flex flex-col scroll-smooth no-scrollbar h-full w-full gap-8 mt-4",
  });

  return gridCards;
}

export { initGridCards };
