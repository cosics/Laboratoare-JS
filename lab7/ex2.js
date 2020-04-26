//2. Generati toate numerele divizibile cu 10 de la 1 la 1000
//folosind compunerea functiilor.
//Comparati timpii de executie cu cei de la lab anterior.

//ex lab anterior

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

//compunere functii

function divNumar(n) {
  return (m) => {
    for (let i = 1; i <= m; i++)
      if (i % n === 0) {
        console.log(i);
      }
  };
}
//const divNumar10 = divNumar(10);
divNumar(10)(1000);
