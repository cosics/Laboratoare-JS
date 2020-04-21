/* const numbers = [1, 2, 3];
function doubleit(number) {
    return number*2;
}
const doubledNumbers = numbers.map(doubleit);
console.log(doubledNumbers); */
//1. Într-un mod imuabil adăugati o proprietate denumită calories, setati-o la 200 si
// afisati obiectul la consolă
const meal = {
    description: 'Dinner'
};

const updatedMeal = {
    ...meal,
    calories: 200
}
console.log(updatedMeal);


//2. Într-un mod imuabil incrementati calories cu 100. Afisati rezultatul.
updatedMeal.calories += 100;
console.log(updatedMeal.calories);



//3. Într-un mod imuabil stergeti calories. Afisati rezultatul.

const {calories, ...mealWithoutCals} = updatedMeal;
console.log(mealWithoutCals);

//4.Creati un obiect dailymeal care sa contina trei alte obiecte: micul dejun, pranz si cina. Creati o functie care sa calculeze suma totala a caloriilor dintr o zi.

function Meal(which, calories){
    this.which = which;
    this.calories = calories;
}
 const breakfast = new Meal("mic dejun", 300);
 const lunch = new Meal("pranz", 400);
 const dinner = new Meal("cina", 400);

let dailyMeal = {
    breakfast,
    lunch,
    dinner
}

var calorii = 0;
Object.values(dailyMeal).forEach(item => {
    calorii += item.calories;
});

//console.log(dailyMeal);
Object.values(dailyMeal).forEach(item => {
    console.log(item.which + " - " + item.calories);
});
console.log("Calorii totale: "+calorii);





