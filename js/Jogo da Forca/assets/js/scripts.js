const tema1 = ["java", "python", "javascript", "node", "react"];
const tema2 = ["Vitor", "Andressa", "Miguel", "Marcelo", "Beatriz"];

const lstLetrasUsadas = [];
const lstLetrasErradas = [];
const lstLetrasCertas = [];

const SortPalavra = (lstTema) => {
  const palavra = lstTema[Math.floor(Math.random() * lstTema.length)];
  return palavra;
};

let palavra = SortPalavra(tema2).toLowerCase();

const letraRepetida = () => {
  const aviso = document.querySelector(".aviso-palavra-repetida");
  aviso.classList.add("show");
  setTimeout(() => {
    aviso.classList.remove("show");
  }, 2000);
};

const checarLetras = (tecla) => {
  if (tecla.keyCode >= 65 && tecla.keyCode <= 90) {
    let letra = tecla.key; //? 65 a 90 São as teclas que são letras no teclado
    letra = letra.toLowerCase();
    console.log(letra);
    if (!lstLetrasUsadas.includes(letra)) {
      lstLetrasUsadas.push(letra);
      if (palavra.includes(letra)) {
        lstLetrasCertas.push(letra);
      } else {
        lstLetrasErradas.push(letra);
      }
    } else {
      letraRepetida();
    }
  }
};

const mostrarLetrasUsadas = () => {
  const div = document.querySelector(".letras-erradas-container");
  div.innerHTML = "<h3>Letras Usadas</h3>";
  lstLetrasUsadas.forEach((letra) => {
    div.innerHTML += `<span>${letra},</span>`;
  });
};

const mostrarLetrasCertas = () => {
  const div = document.querySelector(".palavra-secreta-container");
  div.innerHTML = "";
  palavra.split("").forEach((l) => {
    if (lstLetrasCertas.includes(l)) {
      div.innerHTML += `<span>${l}</span>`;
    } else {
      div.innerHTML += `<span>_</span>`;
    }
  });
};

const desenharForca = () => {
  const partesCorpo = document.querySelectorAll(".forca-parte");
  for (let i = 0; i < lstLetrasErradas.length; i++) {
    partesCorpo[i].style.display = "block";
  }
};

const checarJogo = () => {
  const partesCorpo = document.querySelectorAll(".forca-parte");
  const div = document.querySelector(".palavra-secreta-container");
  let msg = "";
  if (lstLetrasErradas.length === partesCorpo.length) {
    msg = `Fim de Jogo, Você perdeu \n A palavra era ${palavra}`;
  }

  if (palavra === div.innerText) {
    msg = `Fim de Jogo, Você venceu \n A palavra era ${palavra}`;
  }

  if (msg) {
    document.querySelector("#mensagem").innerHTML = msg;
    document.querySelector(".popup-container").style.display = "flex";
  }
};

const atualizarJogo = () => {
  mostrarLetrasUsadas();
  mostrarLetrasCertas();
  desenharForca();
  checarJogo();
};

const reiniciarJogo = () => {
  window.location.reload();
};

document.addEventListener("keydown", (e) => {
  checarLetras(e);
  atualizarJogo();
});
