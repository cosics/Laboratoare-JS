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

function myLen(arr) {
  if (_.isEmpty(arr)) {
    return 0;
  } else {
    return 1 + myLen(_.rest(arr));
  }
}
console.log(myLen(_.range(10)));
console.log(myLen([1, 2, 3]));

//Recursiv - suma elementelor unui sir

const suma = (arr) => (arr.length === 0 ? 0 : arr[0] + suma(arr.slice(1)));
console.log(suma([1, 2, 3, 4, 5]));
console.log(suma(_.range(10)));

//Recursiv - maximul elementelor unui sir 1

function max1(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return Math.max(arr.shift(), max1(arr));
  }
}
console.log(max1([1, 2, 9, 4, 5, 6, 7]));

//Recursiv - maximul elementelor unui sir 2 - array in array

const max2 = (arr) => {
  var max = -Infinity;

  for (var i = 0; i < arr.length; i++) {
    var el = arr[i];

    if (Array.isArray(el)) {
      el = max2(el);
    }
    if (el > max) {
      max = el;
    }
  }
  return max;
};

console.log(max2([1, 2, 9, 4, 5, [12, 4, [100, 99], 5], 7]));
