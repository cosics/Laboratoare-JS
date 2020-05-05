// Modificati functia constructPair,
// redenumita constructPairs, apelata recursiv a.i.
// sa obtinem un sir de perechi, conditia de
// oprire data.

var _ = require("underscore");

function existy(x) {
  return x != null;
}

function cat() {
  var head = _.first(arguments);
  if (existy(head)) {
    return head.concat.apply(head, _.rest(arguments));
  } else {
    return [];
  }
}

function construct(head, tail) {
  return cat([head], _.toArray(tail));
}

/*function constructPair(pair, rests) {
    return [
      construct(_.first(pair), _.first(rests)),
      construct(_.first(_.rest(pair)), _.first(_.rest(rests))),
    ];
  } */

// functia modificata, apelata recursiv, cu conditia de oprire:

function constructPairs(pair, rests) {
  return _.isEmpty(pair) || _.isEmpty(rests)
    ? [construct([,])]
    : [
        construct(_.first(pair), _.first(rests)),
        ...constructPairs(_.rest(pair), _.rest(rests)),
      ];
}

res = constructPairs(["a", 1, 6, 8, 10], [[2], [3], [4], [5], [6]]);
console.log(res);
