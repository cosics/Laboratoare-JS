//3.

let instances = [];
class Proiecte {
  constructor(name, createdAt, lastUpdate, isActive, details) {
    this.name = name;
    this.createdAt = new Date(createdAt);
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
  "Proiect Javascript"
);
const Proiect2 = new Proiecte(
  "Python",
  "2 Martie 2020",
  "3 01 2018",
  true,
  "Proiect Python"
);
const Proiect3 = new Proiecte(
  "C++",
  "2 Martie 2020",
  "3 03 2020",
  false,
  "Proiect C++"
);
const Proiect4 = new Proiecte(
  "Java",
  "2 Martie 2020",
  "3 01 2017",
  true,
  "Proiect Java"
);
console.log(instances);

//Varianta clasica, fara compunere de functii, FOREACH

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

//Varianta clasica, fara compunere de functii, MAP

instances
  .filter((item) => item.isActive)
  .sort(function (a, b) {
    return new Date(a.lastUpdate) - new Date(b.lastUpdate);
  })
  .map((item) => {
    const { name, details } = item;
    console.log(name + " -> " + details);
  });

//Compunere functii

const myfilter = (f) => (arr) => arr.filter(f);
const mymap = (f) => (arr) => arr.map(f);
const mysort = (f) => (arr) => arr.sort(f);

const compose = (...functions) => (args) =>
  functions.reduceRight((arg, fn) => fn(arg), args);

compose(
  mymap((item) => {
    const { createdAt, lastUpdate, isActive, ...rest } = item;
    console.log(rest);
  }),
  mysort(function (a, b) {
    return new Date(a.lastUpdate) - new Date(b.lastUpdate);
  }),
  myfilter((item) => item.isActive)
)(instances);
