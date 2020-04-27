/*const getMatrix = (len) =>
  [...Array(len)].map((x) =>
    [...Array(len)].map((b) => Math.round(Math.random()))
  );

let res = getMatrix(5);
console.log(res); 


const getMatrix = (l, w) =>
  [...Array(l)].map((x) => [...Array(w)].map((b) => Math.round(Math.random())));

let res = getMatrix(2, 3);
console.log(res); */

const array = ["X", 0];

const getMatrix = (len) =>
  [...Array(len)].map((x) =>
    [...Array(len)].map((b) => array[Math.floor(Math.random() * array.length)])
  );

const getMatrix2 = (l, w) =>
  [...Array(l)].map((x) =>
    [...Array(w)].map((b) => array[Math.floor(Math.random() * array.length)])
  );

console.log(getMatrix(5));
console.log(getMatrix2(3, 4));
