/*function greet(greeting, name) {
  return `${greeting} ${name}`;
}

console.log(greet("salut", "coaie")); */

function greet(greeting) {
  return function (name) {
    return `${greeting}, ${name}`;
  };
}
console.log(greet("salut")("coaie"));

const friends = ["1", "2", "3"];

const friendGreet = friends.map(greet("salut"));
console.log(friendGreet);
