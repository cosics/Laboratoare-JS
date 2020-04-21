//var _ = require('underscore');

//1.Array patratele numerelor mai mici ca x

function patrate(x){
    var arr = [];
    for (var i = 0; i < x; i++){
        arr.push(i);
    }
    return arr.map(e => {
        return [e, '->', e*e].join(' ');
    });
};

console.log(patrate(10));

//2.Insumarea tuturor parametrilor transmisi

function adder() {
    var s = 0;
    function sum() {
        for (var i = 0; i < arguments.length; i++) {
            s += arguments[i];
        }
        console.log(s);
    }
    return sum;
}
var suma = adder();
suma(1,2);  // --> 3
suma(1,2,7); // --> 13
suma(1); //--> 14

//3. Factorial transmis ca param in fct externa

function fact(x) {
    if (x < 0) throw Error("Cannot calculate factorial of a negative number");
    function iter(i, fact) {
        return i === 0 ? fact : iter(i-1, i*fact);
    }
    return iter(x, 1);
}

console.log("Factorial: " + fact(5)); //--->120
console.log("Factorial: " + fact(6)); //--->720

//4.Nr Fibo dupa index transmis ca parametru - closure

function fibo(n){
    function fibonacci(n) {
        return n < 1 ? 0
            : n <= 2 ? 1
                : fibonacci(n - 1) + fibonacci(n - 2);
    }

return fibonacci;
}

var num = fibo();
console.log(num(2));













