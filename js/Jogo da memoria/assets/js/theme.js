const buttonTheme = document.querySelector(".changeTheme");
const temas = ["rick and morty", "hello kitty"];

const change = () => {
  let theme = localStorage.getItem("theme");
  console.log("primeiro tema: " + theme);
  let change;
  if (theme == 1) {
    change = 2;
    nameTheme(change);
  } else {
    change = 1;
    nameTheme(change);
  }

  localStorage.setItem("theme", change);

  window.location.reload();
};

const nameTheme = (tema) => {
  buttonTheme.innerHTML = `tema: ${temas[tema - 1]}`;
};
