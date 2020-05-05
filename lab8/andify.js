// Metoda va returna valoarea de adevăr AND logic între metoda dată ca parametrul 2,
// isEven în acest caz, si pe rând, a tuturor parametrilor evaluati în ordine inversă.

var _ = require("underscore");

function isEven(n) {
  return n % 2 === 0;
}
function andify(/* preds */) {
  var preds = _.toArray(arguments);
  return function (/* args */) {
    var args = _.toArray(arguments);
    var everything = function (ps, truth) {
      if (_.isEmpty(ps)) return truth;
      else return _.every(args, _.first(ps)) && everything(_.rest(ps), truth);
    };

    return everything(preds, true);
  };
}
var evenNums = andify(_.isNumber, isEven);
console.log(evenNums(2, 4, 6, 8));
console.log(evenNums(1, 4, 6, 8));

// Ce se intampla cu rezultatul daca in loc de AND vom pune ||?
// Valoarea de adevar nu se mai modifica, astfel ca rezultatul
// este true pentru ambele apeluri

function isEven(n) {
  return n % 2 === 0;
}
function andify(/* preds */) {
  var preds = _.toArray(arguments);
  return function (/* args */) {
    var args = _.toArray(arguments);
    var everything = function (ps, truth) {
      if (_.isEmpty(ps)) return truth;
      else return _.every(args, _.first(ps)) || everything(_.rest(ps), truth);
    };

    return everything(preds, true);
  };
}
var evenNums = andify(_.isNumber, isEven);
console.log(evenNums(2, 4, 6, 8));
console.log(evenNums(1, 4, 6, 8));

// Aplicati metoda cu alti parametri decat "isNumber"
// sau "isEven". De exemplu, intr-un dictionar,
// verificati daca toate cheile sunt string-uri.

const exemplu = {
  luni: 1,
  marti: 2,
  miercuri: 3,
  joi: 4,
  vineri: 5,
};

function isString(n) {
  return typeof n === "string" || n instanceof String;
}
function andify() {
  var preds = _.toArray(arguments);
  return function () {
    var args = _.toArray(arguments);
    var everything = function (ps, truth) {
      if (_.isEmpty(ps)) {
        return truth;
      } else {
        return _.every(args, _.first(ps)) && everything(_.rest(ps), truth);
      }
    };

    return everything(preds, true);
  };
}
var evenNums = andify(isString);
//console.log(evenNums("hei", "alo", "b", "C")); // --> true
//console.log(evenNums(1, "alo", "b", "C")); // -> false

console.log(evenNums(JSON.stringify(Object.keys(exemplu))));
