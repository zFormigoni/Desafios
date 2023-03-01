const pokemon_name = document.querySelector(".pokemon_name");
const pokemon_number = document.querySelector(".pokemon_number");
const pokemon_image = document.querySelector(".pokemon_image");
const form = document.querySelector(".form");
const search = document.querySelector(".input_search");
const btn_prev = document.querySelector(".btn_prev");
const btn_next = document.querySelector(".btn_next");
let init_pokemon = 1;

const fetch_pokemon = async (pokemon) => {
  const API_res = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon);

  if (API_res.status === 200) {
    const data = await API_res.json();
    return data;
  }
};

const render_pokemon = async (pokemon) => {
  pokemon_name.innerHTML = "Loading...";

  const data = await fetch_pokemon(pokemon);
  if (data) {
    pokemon_image.style.display = "block";
    pokemon_name.innerHTML = data.name;
    pokemon_number.innerHTML = data.id;
    pokemon_image.src =
      data.sprites.versions["generation-v"]["black-white"].animated[
        "front_default"
      ];
    init_pokemon = data.id;
    search.value = "";
  } else {
    pokemon_image.style.display = "none";
    pokemon_name.innerHTML = "Not Found";
    pokemon_number.innerHTML = "";
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  render_pokemon(search.value.toLowerCase());
});

btn_next.addEventListener("click", () => {
  init_pokemon += 1;
  render_pokemon(init_pokemon);
});

btn_prev.addEventListener("click", () => {
  init_pokemon -= 1;
  if (init_pokemon < 1) {
    init_pokemon = 1;
  }
  render_pokemon(init_pokemon);
});

render_pokemon(init_pokemon);
