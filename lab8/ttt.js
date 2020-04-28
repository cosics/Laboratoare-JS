// Tic Tac Toe matrix, populata cu valori random X si 0

const array = ["X", 0];

//Matrice patratica marime n

const getMatrix = (len) =>
  [...Array(len)].map((x) =>
    [...Array(len)].map((b) => array[Math.floor(Math.random() * array.length)])
  );

  //Matrice marime n x m 

const getMatrix2 = (l, w) =>
  [...Array(l)].map((x) =>
    [...Array(w)].map((b) => array[Math.floor(Math.random() * array.length)])
  );

console.log(getMatrix(5));
console.log(getMatrix2(3, 4));
