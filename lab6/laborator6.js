var _ = require("underscore");

function getbest(fun, arr) {
  return arr.reduce(function (x, y) {
    return fun(x, y) ? x : y;
  });
}

var people = [
  {
    name: "Andrei",
    age: 21,
    health: 3,
  },
  {
    name: "Radu",
    age: 32,
    health: 5,
  },
  {
    name: "Ioana",
    age: 12,
    health: 4,
  },
];

//1.Cum putem selecta persoana cu varsta cea mai mica, folosind getbest?
var result = getbest((x, y) => x.age < y.age, people);
console.log(`The youngest person is ${result.name}.`);

// Cum putem selecta persoana cu sanatatea cea mai mica, folosind getbest?
var result = getbest((x, y) => x.health < y.health, people);
console.log(`The person with the lowest health is ${result.name}.`);

//O metoda ce selecteaza mai intai sanatatea si apoi varsta, getbest.
const final = ((item) => {
  const rez1 = getbest((x, y) => x.health < y.health, people);
  const rez2 = getbest((x, y) => x.age < y.age, people);
  return `The person with the lowest health is ${rez1.name} and is ${rez1.age} years old and the youngest one is ${rez2.name}.`;
})(people);

console.log(final);

//2.Generati toate numerele de la 1 la 1000 divizibile cu 10.

//var arr = [];
function x(cond, then) {
  if (cond) then();
}
function div(max, action) {
  for (var i = 1; i <= max; i++) {
    action(i);
  }
}

div(1000, (n) => {
  x(n % 10 === 0, () => {
    //arr.push(n);
    console.log(n);
  });
});
//console.log(arr)

//SAU

function divNumar(n) {
  return (m) => {
    for (let i = 1; i <= m; i++)
      if (i % n === 0) {
        console.log(i);
      }
  };
}
const divNumar10 = divNumar(10);
divNumar10(1000);

//3.

function agregator(col, f) {
  return col.reduce(f);
}

sum = (a, b) => a + b;
min = (a, b) => (a < b ? a : b);
max = (a, b) => (a > b ? a : b);

console.log("Suma: " + agregator([1, 2, 3, 4], sum));
console.log("Minimul: " + agregator([1, 2, 3, 4], min));
console.log("Maximul: " + agregator([1, 2, 3, 4], max));

let ageArray = [];
let { length } = people;
for (let i = 0; i < length; i++) {
  let { age } = people[i];
  ageArray.push(age);
}

console.log("Varstele sunt: " + JSON.stringify(ageArray));
console.log("Suma varstelor: " + agregator(ageArray, sum));

//folosind direct reduce, suma varstelor?
var totalAge = people.reduce((sum, item) => sum + item.age, 0);
console.log(totalAge);
