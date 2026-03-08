import { el } from "../utils.js";
import { Card } from "./Card.js";

export function initGridCards() {
  const py = new Card({
    title: "Python-developer + AI",
    img: "py.png",
    desc: "First I was afraid, I was petrified",
  });
  const js = new Card({
    title: "Fullstack JavaScript developer",
    img: "js.png",
    desc: "Then I spent so many nights thinking how you did me wrong",
  });
  const cpp = new Card({
    title: "C++ developer",
    img: "c++.png",
    desc: "But I grew strong, and I learned how to get along",
  });
  const java = new Card({
    title: "Java developer",
    img: "java.png",
    desc: "How I met you, I don't know",
  });
  const linux = new Card({
    title: "Linux developer",
    img: "linux.png",
    desc: "I just walked in to find you here with that sad look upon your face",
  });
  const oneC = new Card({
    title: "1C developer",
    img: "1c.png",
    desc: "And now you're back from outer space",
  });
  const devAI = new Card({
    title: "AI Developer",
    type: "course",
    img: "dev_ai.png",
    desc: "My heart, it breaks, my soul it aches",
  });
  const html = new Card({
    title: "HTML/CSS Developer",
    type: "course",
    img: "html.png",
    desc: "Please don't tell me you're too busy, I need your love, I need your love",
  });
  const cyber = new Card({
    title: "Cyber Security + AI",
    img: "cyber.png",
    desc: "Bringing back the love I had for you",
  });
  const sysAdmin = new Card({
    title: "System Administrator",
    img: "sys_admin.png",
    desc: "So now I'm back, from outer space",
  });
  const dataAn = new Card({
    title: "Data Analyst",
    img: "data_an.png",
    desc: "I should have changed that stupid lock, I should have made you leave your key",
  });

  const designAI = new Card({
    title: "AI Creator",
    img: "design_ai.png",
    desc: "Who I am today",
  });
  const designFace = new Card({
    title: "Makeup Artist",
    img: "design_face.png",
    desc: "Shine bright like a diamond",
  });
  const photoItem = new Card({
    title: "Item Photographer",
    img: "design_item.png",
    desc: "Come on, come on, come on",
  });
  const fashion = new Card({
    title: "Fashion Designer",
    img: "fashion.png",
    desc: "Kiss me, kiss me, kiss me",
  });
  const graph = new Card({
    title: "Graphic Designer",
    img: "graph.png",
    desc: "I'm gonna dress you up in my love and make you just feel my love",
  });
  const interior = new Card({
    title: "Interior Designer",
    img: "interior.png",
    desc: "Got no reason, got no shame, I know I left a lie somewhere in my brain",
  });
  const landscape = new Card({
    title: "Landscape Designer",
    img: "landscape.png",
    desc: "Oh, now I'm back, from outer space",
  });

  const finance = new Card({
    title: "Finance Analyst",
    img: "finance.png",
    desc: "You better shape up, cause I need a shape up",
  });
  const economic = new Card({
    title: "Economic Financier",
    img: "economic.png",
    desc: "I'm not a broken heart, I'm just a broken heart",
  });
  const business = new Card({
    title: "Business Analyst",
    img: "business.png",
    desc: "Thoughts of loving you just drive me crazy",
  });
  const accountant = new Card({
    title: "Accountant",
    img: "accountant.png",
    desc: "Keeping me up, night after night",
  });
  const hr = new Card({
    title: "Human Resources Manager",
    img: "hr.png",
    desc: "Now I'm saving all my loving for you, yeah, I'm saving all my loving for you",
  });
  const product = new Card({
    title: "Product Manager",
    img: "product.png",
    desc: "Please don't tell me you're too busy, I need your love, I need your love",
  });
  const project = new Card({
    title: "Project Manager",
    img: "project.png",
    desc: "Please don't tell me you're too busy, I need your love, I need your love",
  });

  const gridCards = el("div", {
    className:
      "flex flex-col scroll-smooth no-scrollbar h-full w-full gap-8 mt-4",
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
  const programmingRow = new Row(
    "Programming",
    py,
    js,
    cpp,
    java,
    linux,
    sysAdmin,
    oneC,
    cyber,
    dataAn,
    devAI,
    html,
  );
  const designRow = new Row(
    "Design",
    designAI,
    designFace,
    photoItem,
    fashion,
    graph,
    interior,
    landscape,
    devAI,
  );
  const menegmentRow = new Row(
    "Management",
    finance,
    hr,
    product,
    project,
    business,
    accountant,
    economic,
  );

  // designRow.add(devAI);
  // menegmentRow.add(devAI);

  gridCards.append(programmingRow.row, designRow.row, menegmentRow.row);
  return gridCards;
}
