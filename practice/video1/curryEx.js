const studentGrades = [
  { name: "Joe", grade: 88 },
  { name: "Jen", grade: 94 },
  { name: "Steph", grade: 77 },
  { name: "Allen", grade: 60 },
  { name: "Gina", grade: 54 },
];

const note = {
  a: "Excellent job",
  b: "Nice job",
  c: "Well done",
  d: "What happened",
  e: "Not good",
};

function noteFin(nota) {
  return nota >= 90
    ? "a"
    : nota >= 80
    ? "b"
    : nota >= 70
    ? "c"
    : nota >= 60
    ? "d"
    : "e";
}

function feedBack(item) {
  return function (persoana) {
    const nota = noteFin(persoana.grade);
    //const mesaj = item[nota];
    return `${item[nota]} ${persoana.name}, you got an ${persoana.grade}.`;
  };
}

const studentFeedback = studentGrades.map(feedBack(note));

console.log(studentFeedback);
