var _ = require("underscore");
/*
//tic tac toe matrix

const getMatrix = (len) =>
  [...Array(len)].map((x) =>
    [...Array(len)].map((b) => Math.round(Math.random()))
  );

let res = getMatrix(5);
console.log(res); 


const getMatrix = (l, w) =>
  [...Array(l)].map((x) => [...Array(w)].map((b) => Math.round(Math.random())));

let res = getMatrix(2, 3);
console.log(res); */

//factorial

var factorial = function (nr) {
  if (nr <= 0) {
    return 1;
  } else {
    return nr * factorial(nr - 1);
  }
};

console.log(factorial(4));

result = _.first(
  [4].map(function (n) {
    return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
  })
);
console.log(result);

const fact = (x) => (x === 0 ? 1 : x * fact(x - 1));
console.log(fact(4));
