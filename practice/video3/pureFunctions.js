//pure
// reusable, composable, easy to test, easy to cache

function add(x, y) {
  return x + y;
}

const add = (x, y) => x + y;

//impure

let counter = 0;

function increment() {
  counter++;
}
