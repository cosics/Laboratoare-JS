var _ = require("underscore");

//Recursiv - suma elementelor unui sir

const suma = (arr) => (arr.length === 0 ? 0 : arr[0] + suma(arr.slice(1)));
console.log(suma([1, 2, 3, 4, 5]));
console.log(suma(_.range(10)));

//Recursiv - maximul elementelor unui sir simplu

function max1(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return Math.max(arr.shift(), max1(arr));
  }
}
console.log(max1([1, 2, 9, 4, 5, 6, 7]));

//Recursiv - maximul elementelor unui sir  - array in array

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

//Recursiv - media elementelor din sir

function medie(arr, memo, total) {
  memo || (memo = 0);
  total || (total = arr.length);
  if (arr.length === 0) {
    return memo / total;
  }
  return medie(arr.slice(1, arr.length), memo + arr[0], total);
}
console.log(medie([1, 2, 3, 4, 5, 6, 7]));
