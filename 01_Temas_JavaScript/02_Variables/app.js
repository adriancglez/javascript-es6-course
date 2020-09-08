// String, Number, Float, Boolean, Array, Object, Function...

var name = "Adrián";
console.log(name);
console.log(`La variable ${name} es de tipo: ${typeof name}`);

name = 55;
console.log(name);
console.log(`La variable ${name} es de tipo: ${typeof name}`);

name = 109.7;
console.log(name);
console.log(`La variable ${name} es de tipo: ${typeof name}`);

name = {};
console.log(name);
console.log(`La variable ${name} es de tipo: ${typeof name}`);

// Declaración de variables
var name = 'Adrián';
let lastname = 'González';
const edad = 30;

var marcaCoche = 'Seat';
let precioCoche = 16.000;

console.log(marcaCoche);
console.log(precioCoche);

function miFunction() {
    var marcaCoche = 'BMW';
    
    if (marcaCoche == 'BMW') {
        var precio = 90.000;
        let size = 1000;
    }

    console.log(size);
    console.log(precio);
    console.log(marcaCoche);
}

miFunction();