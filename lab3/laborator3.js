//1. Data in diferite tipuri de formatari

var today = new Date();
var dd = JSON.stringify(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

const data1 = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let dd = JSON.stringify(today.getDate());
    return dd + " " + monthNames[today.getMonth()] + " " + yyyy;
}

const data2 = () => {
    return yyyy + "-" + mm + "-" + dd;
}

const data3 = () => yyyy + "/" + mm + "/" + dd;

const data4 = () => dd + "/" + mm + "/" + yyyy;

const data5 = () => mm + "/" + dd + "/" + yyyy;



console.log("The current date is: " );
const arrayOfDates = [data1, data2, data3, data4, data5];
arrayOfDates.forEach(item => console.log(item()));

//2. Afiseaza doar id si descriere pt obiecte.

const meal = {
    id:1,
    description: 'Breakfast'
};

const updatedMeal = {
    ...meal,
    description: 'Brunch',
    calories: 600
};

const functionAsObjectProperty = {
    print: arr => arr.forEach(item => console.log(item.id, item.description))
}

functionAsObjectProperty.print([meal, updatedMeal]);