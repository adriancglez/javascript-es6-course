// Asignación por Destructuring
var objeto = {
    name: "Adrián",
    apellidos: "González",
    edad: 30,
    pais: "México"
}

console.log(objeto);
console.log(objeto.name);

// Si deseamos obtener el valor de una propiedad de un objeto, podriamos llamar al objeto seguido del nombre de la propiedad y asignar su valor en una variable
console.log("-----------Sin destructuring-----------");
var myName = objeto.name;
var myLastName = objeto.apellidos;
var myAge = objeto.edad;

console.log(myName);
console.log(myLastName);
console.log(myAge);

// Una forma mas elegante, sin tener que crear cada variable por cada propiedad
// Una forma de obtener el resto de los valores de las propiedades sin tener que declarar los nombres
console.log("-----------Con destructuring-----------");
const {name, apellidos, ...rest} = objeto;

console.log(name);
console.log(apellidos);
console.log(rest);
