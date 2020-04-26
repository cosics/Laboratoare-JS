const users = [
  { name: "Radu", age: 30 },
  { name: "Andrei", age: 19 },
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
