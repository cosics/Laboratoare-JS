const sentence =
  "PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).";

const numereSIr = sentence.split("").map(parseInt).filter(Number.isInteger)
  .length;

console.log(numereSir);
