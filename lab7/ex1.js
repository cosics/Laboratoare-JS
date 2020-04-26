const users = [
  { name: "Radu", age: 30 },
  { name: "Andrei", age: 15 },
  { name: "Cezara", age: 20 },
];

//1.Metoda compose trebuie apelata diferit pentru reduce si reduceRight,
//astfel : functiile din callback trebuie asezate invers:

//reduceRight
const myfilter = (f) => (arr) => arr.filter(f);
const mymap = (f) => (arr) => arr.map(f);

const compose1 = (...functions) => (args) =>
  functions.reduceRight((arg, fn) => fn(arg), args);

compose1(
  mymap((u) => console.log(u.name)),
  myfilter((u) => u.age >= 18)
)(users);

//reduce

const compose2 = (...functions) => (args) =>
  functions.reduce((arg, fn) => fn(arg), args);

compose2(
  myfilter((u) => u.age >= 18),
  mymap((u) => console.log(u.name))
)(users);

//Suma primelor n numere pare

// a. Generare primele n numere pare si impare prin array-uri separate, functie separata

let pare = [];
let impare = [];
function divNumar(n) {
  return (m) => {
    for (let i = 1; i <= m; i++)
      if (i % n === 0) {
        pare.push(i);
      } else {
        impare.push(i);
      }
  };
}

divNumar(2)(49); // n = 49
console.log(pare, impare);

const myreduce = (f) => (arr) => arr.reduce(f);

const suma = (...functions) => (args) =>
  functions.reduce((arg, fn) => fn(arg), args);

let sumaPare = suma(myreduce((a, b) => a + b))(pare);
let sumaImpare = suma(myreduce((a, b) => a + b))(impare);
console.log(`${sumaPare}
${sumaImpare}`);

// b. Generare array primele n numere naturale prin functie separata

let numbers = [];
function numereNaturale(n) {
  for (let j = 1; j <= n; j++) {
    numbers.push(j);
  }
  console.log(numbers);
}

numereNaturale(49);

//const myreduce = (f) => (arr) => arr.reduce(f);
//const myfilter = (f) => (arr) => arr.filter(f);   -> initializate mai sus

//const suma = (...functions) => (args) => functions.reduce((arg, fn) => fn(arg), args); -> mai sus

let sumaPare2 = suma(
  myfilter((item) => item % 2 === 0),
  myreduce((a, b) => a + b)
)(numbers);
let sumaImpare2 = suma(
  myfilter((item) => item % 2 !== 0),
  myreduce((a, b) => a + b)
)(numbers);

console.log(`${sumaPare2}
${sumaImpare2}`);
