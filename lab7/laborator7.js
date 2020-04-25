//2. Generati toate numerele divizibile cu 10 de la 1 la 1000 folosind compunerea functiilor. Comparati timpii de executie cu cei de la lab anterior

//3.

let instances = [];
class Proiecte {
  constructor(name, createdAt, lastUpdate, isActive, details) {
    this.name = name;
    this.createdAt = createdAt;
    this.lastUpdate = new Date(lastUpdate);
    this.isActive = isActive;
    this.details = details;
    Proiecte.addInstance(this);
  }
  static addInstance(item) {
    instances.push(item);
  }
  static getInstances() {
    return instances;
  }
  static clearInstances() {
    instances.length = 0;
  }
}

const Proiect1 = new Proiecte(
  "JS",
  "2 Martie 2020",
  "2 05 2019",
  true,
  "proiect javascript"
);
const Proiect2 = new Proiecte(
  "Python",
  "2 Martie 2020",
  "3 01 2018",
  true,
  "proiect python"
);
const Proiect3 = new Proiecte(
  "C++",
  "2 Martie 2020",
  "3 03 2020",
  false,
  "proiect c++"
);
console.log(instances);

//Varianta clasica, fara compunere de functii

instances
  .filter((item) => item.isActive)
  .sort(function (a, b) {
    return new Date(a.lastUpdate) - new Date(b.lastUpdate);
  })
  .forEach((item) => {
    const { createdAt, lastUpdate, isActive, ...rest } = item;
    console.log(rest);
    //const { name, details } = item;
    //console.log(name + " -> " + details);
  });
