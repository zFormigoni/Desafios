const player = document.querySelector(".player");
const endTime = document.querySelector(".timer");
const restart = document.querySelector(".restart");
const menu = document.querySelector(".menu");

const showStats = () => {
  player.innerHTML = `Jogador: ${localStorage.getItem("player")}`;
  endTime.innerHTML = `Tempo:  ${localStorage.getItem("temp")}`;
};

window.onload = () => {
  showStats();
};

restart.addEventListener("click", () => {
  window.location = "../pages/game.html";
});
menu.addEventListener("click", () => {
  window.location = "../../index.html";
});
