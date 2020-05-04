/*function add(x, y) {
  return x + y;
}

const add3 = partial(add, [3]);

console.log(add3(2)); */


function greet(greeting) {
    return function (name) {
      return `${greeting}, ${name}`;
    };
  }
  console.log(greet("salut")("coaie"));

const greet = R.curry(greeting, name) => `${greeting}, ${name}`;
