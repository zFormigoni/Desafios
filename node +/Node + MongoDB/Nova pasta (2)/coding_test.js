/*

Antes de iniciar, reforçar o uso de es6 ao máximo.
Além de que o código escrito deve prezar legibilidade e performance

Esta provinha necessita da biblioteca "mongoose" para rodar, antes de rodar este arquivo, instale o mongoose.

*/

/*
?1) Tenho acesso à lista de usuários declarada abaixo.
Gostaria de imprimir na tela o nome dos usuários ativos.
Como posso fazer isso?

*/

const users = [
  { name: "Ross", active: true },
  { name: "Rachel", active: false },
  { name: "Joey", active: true },
];
for (let currentUser of users) {
  if (currentUser.active == true) {
    console.log(currentUser.name);
  }
}

/*

2) A função abaixo retorna a nota média de estudantes.
É possível simplificar a função. Como isso poderia ser feito

*/

const getStudentsGradesAverage = () => {
  const students = [
    { name: "Michael", grade: 10 },
    { name: "Kai", grade: 7 },
    { name: "Markus", grade: 9 },
  ];

  let gradesSum = 0;

  for (let currentStudent of students) {
    gradesSum += currentStudent.grade;
  }

  const average = gradesSum / students.length;

  return console.log(average);
};
console.log("ex02: " + getStudentsGradesAverage());

/*

?3) O js possui o método pow, da classe Math.
Tal método retorna como resultado a base (primeiro parâmetro),
elevado a um expoente (segundo parâmetro).
Como poderíamos escrever tal função do zero?

*/

const pow = (base, exponent) => {
  resultado = base;
  for (var i = 0; i < exponent - 1; i++) {
    resultado = resultado * base;
  }

  return console.log("ex03: resultado: " + resultado);
};

pow(2, 0);

/*

4) A função abaixo retorna uma senha, gerada aleatoriamente, apenas com caracteres minúsculos do alfabeto.
O parâmetro "passwordLength" dita o número de caracteres que a senha deve ter.
Como tal função pode ser implementada?

*/

const generatePassword = (passwordLength) => {};

/*

!5) A seguinte lista contém números duplicados.
Como os elementos duplicados podem ser removidos
PS: O uso da classe Set não é permitido ;)

*/

const filterDuplicateNumbers = () => {
  const numbers = [1, 4, 5, 3, 2, 4, 3, 9, 2];

  //code
  let unicos = [];
  for (let n of numbers) {
    //    if (!unicos.find(n)) {
    //      unicos = n;

    if (!n in unicos) {
      unicos = n;
    }
  }
  return;
};
console.log("ex05: " + filterDuplicateNumbers());

/*

?6) Sua empresa utiliza um banco de dados mongoDB 
e seu colega escreveu uma função que busca uma 
música a partir de seu nome.
Você é responsável pela revisão do código.
O que você diria a ele?

*/

const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;

const SongSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  length: { type: Number },
  artist: { type: String },
  album: { type: String },
  genere: { type: String },
});

const Song = mongoose.model("Song", SongSchema);

const findSongByName = async (songName) => {
  let songs;
  try {
    songs = await Song.find(); //! buscar direto o nome da musica por aqui
  } catch (e) {
    throw new Error("error gettings songs");
  }

  for (let currentSong of songs) {
    if (currentSong.name == songName) {
      return currentSong;
    }
  }
};

//? acretido que funcione, esta pegando a lista de musicas e buscando pelo nome
//? acho que seria mais facil buscar direto a musica ao inves de puxar toda a lista

/*

7) A função "compressFile" abaixo comprime arquivos em diferentes extensões.
A medida que a quantidade de extensões cresce, a repetição de if/else também.
Como poderíamos deixar o código mais limpo?

*/

const compressFile = (fileType, file) => {
  if (fileType == "rar") {
    compressFileToRar(file);
  } else if (fileType == "zip") {
    compressFileToZip(file);
  } else if (fileType == "tar") {
    compressFileToTar(file);
  }
};

function compressFileToRar(file) {
  console.log("compressFileToRar!");
  // code
}

function compressFileToZip(file) {
  console.log("compressFileToZip!");
  // code
}

function compressFileToTar(file) {
  console.log("compressFileToTar!");
  // code
}
