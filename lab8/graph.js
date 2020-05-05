var _ = require("underscore");

var influences = [
  ["Lisp", "Smalltalk"],
  ["Lisp", "Scheme"],
  ["Smalltalk", "Self"],
  ["Scheme", "JavaScript"],
  ["Scheme", "Lua"],
  ["Self", "Lua"],
  ["Self", "JavaScript"],
];

function stringReverse(s) {
  return !_.isString(s) ? undefined : s.split("").reverse().join("");
}

// CE NODURI SUNT CONECTATE LA UN NOD DAT

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

function nexts(graph, node) {
  if (_.isEmpty(graph)) {
    return [];
  }
  var pair = _.first(graph);
  var from = _.first(pair);
  var to = _.rest(pair);
  var more = _.rest(graph);
  if (_.isEqual(node, from)) {
    return construct(to, nexts(more, node));
  } else {
    return nexts(more, node);
  }
}
res = nexts(influences, "Lisp");
console.log(res);

// PARCURGEREA IN ADANCIME - STACK - LIFO
// PARCURGEREA IN LATIME - QUEUE - FIFO

function DFS(graph, noduri, vizitat) {
  if (_.isEmpty(noduri)) {
    return stringReverse(vizitat);
  }

  var node = _.first(noduri);
  var more = _.rest(noduri);
  if (_.contains(vizitat, node)) {
    return DFS(graph, more, vizitat);
  } else {
    return DFS(graph, cat(nexts(graph, node), more), construct(node, vizitat));
  }
}

console.log(DFS(influences, ["Lisp", "JavaScript"], []));
