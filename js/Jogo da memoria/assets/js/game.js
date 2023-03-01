const grid = document.querySelector(".grid");
const spanPlayer = document.querySelector(".player");
const timer = document.querySelector(".timer");
const main = document.querySelector("main");

const characters = [
  "model_1",
  "model_2",
  "model_3",
  "model_4",
  "model_5",
  "model_6",
  "model_7",
  "model_8",
  "model_9",
  "model_10",
];
let theme = localStorage.getItem("theme");

let card1 = "";
let card2 = "";

const Theme = () => {
  main.style.backgroundImage = `url("../images/theme${theme}/bg.jpg")`;
  nameTheme(theme);
  buttonTheme.addEventListener("click", change);
};

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

const checkEndGame = () => {
  const disableCards = document.querySelectorAll(".disable_card");
  if (disableCards.length === 20) {
    clearInterval(this.loop);
    localStorage.setItem("temp", +timer.innerHTML);
    window.location = "../pages/agradecimento.html";
    //alert(`parabéns ${spanPlayer.innerHTML}, seu tempo foi: ${timer.innerHTML} ` );
  }
};

const checkCards = () => {
  const character1 = card1.getAttribute("data-character");
  const character2 = card2.getAttribute("data-character");
  if (character1 === character2) {
    card1.firstChild.classList.add("disable_card");
    card2.firstChild.classList.add("disable_card");

    card1 = "";
    card2 = "";

    checkEndGame();
  } else {
    setTimeout(() => {
      card1.classList.remove("reveal_card");
      card2.classList.remove("reveal_card");

      card1 = "";
      card2 = "";
    }, 700);
  }
};

const revealCard = ({ target }) => {
  if (target.parentNode.className.includes("reveal_card")) {
    return;
  }

  if (card1 === "") {
    target.parentNode.classList.add("reveal_card");
    card1 = target.parentNode;
  } else if (card2 === "") {
    target.parentNode.classList.add("reveal_card");
    card2 = target.parentNode;
    checkCards();
  }
};

const createCard = (character) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  back.style.backgroundImage = `url(../images/theme${theme}/back.png)`;
  front.style.backgroundImage = `url('../images/theme${theme}/${character}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revealCard);
  card.setAttribute("data-character", character);

  return card;
};

const loadGame = () => {
  const duplicateCharacters = [...characters, ...characters].sort(
    () => Math.random() - 0.5
  );
  duplicateCharacters.forEach((character) => {
    const card = createCard(character);

    grid.appendChild(card);
  });
};

const startTimer = () => {
  this.loop = setInterval(() => {
    const currentTimer = +timer.innerHTML;
    timer.innerHTML = currentTimer + 1;
  }, 1000);
};

window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem("player");
  Theme();
  startTimer();
  loadGame();
};
