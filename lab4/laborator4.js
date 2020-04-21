//const _ = require('underscore');

//1.Functie minim si maxim
var arr = [1, 2, 3, 5, 101];

const findMaxMin = (arr) => {
    let max = arr[0];
    let min = arr[0];

    for(let i = 0; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return {
        "max": max,
        "min": min
    }
}

console.log(findMaxMin(arr));

//2.Sortare gen/titlu
const _ = require('underscore');
var albums = [{title: "Black Monday", genre: "Metal"},
    {title: "Scientist", genre: "Dub"},
    {title: "Fireworks", genre: "Pop"},
    {title: "Fade", genre: "Pop"},
    {title: "Undertow", genre: "Metal"}];
const sortGen = _.groupBy(albums, function(item){
    return item.genre;
});
const sortTitle = _.groupBy( albums,function(item){
    return item.title;
});
console.log("Sortare dupa gen: " + sortGen);
console.log("Sortare dupa titlu: " + sortTitle);


//3.
var arr1 = [];
var arr2 = [];
Object.keys(sortGen).forEach(item => {
    arr1.push(item);
})
    Object.values(sortGen).forEach(ittem => {
         arr2.push(ittem.length)
    });
var result =  arr2.reduce(function(result, field, index) {
    result[arr1[index]] = field;
    return result;
}, {})

console.log(result);

//4. Metoda doubleit functie anonima

const doubleit = (function(){
    function doubleNum(value) {
        var value = value * 2;
    }
    console.log(value);
})();

//5.
const printName = name => console.log(name);
printName("John");








