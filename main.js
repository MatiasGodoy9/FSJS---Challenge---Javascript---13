// -Realizar un programa que simule una calculadora, donde realice las operaciones básicas (suma, resta, multiplicación, división),
// el usuario debe primero ingresar dos valores, y especificar con un carácter la operación a realizar,
// para el uso del ejercicio debe usar la sentencia switch.

let num1 = parseInt(prompt("Ingrese primer valor: "));
let num2 = parseInt(prompt("Ingrese segundo valor: "));
let resp = prompt("Ingrese la operación a realizar: \n1-Suma\n2-Resta\n3-Multiplicación\n4-División");

switch (resp) {
    case '1':
        let suma = num1 + num2
        console.log("El resultado es: " + suma)
        break;
    case '2':
        let resta = num1 - num2
        console.log("El resultado es: " + resta)
        break;
    case '3':
        let mult = num1 * num2
        console.log("El resultado es: " + mult)
        break;
    case '4':
        let div = num1 / num2
        console.log("El resultado es: " + div)
        break;

    default:
        break;
}

// -Realizar un programa que permita ingresar por teclado 10 números en un array debe:

// Mostrar el número mayor
// Mostrar el número menor
// Mostrar los números pares
// Mostrar los números impares
// Ordenarlos de manera Ascendente
// Ordenarlos de manera Descendente

let numeros = [];
let par = [];
let impar = [];
let element;

for (let i = 0; i < 10; i++) {
    element = prompt("Ingrese numero al arreglo: ");
    numeros[i] = element;
}

console.log(numeros);

let maxArr = Math.max(...numeros)
let minArr = Math.min(...numeros)

console.log('El mayor numero del arreglo es: ' + maxArr);
console.log('El menor numero del arreglo es: ' + minArr);

for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];
    if (num % 2 === 0) {
        console.log("El numero " + num + " es par.")
    } else {
        console.log("El numero " + num + " es impar.")
    }
}

numeros.sort((a, b) => {
    return a - b;
});
console.log(numeros);

numeros.sort((a, b) => {
    return b - a;
});
console.log(numeros);

// -Crear un programa que sume los elementos de una lista de enteros recursivamente.

function sumaRecursiva(numeros) {
    if (numeros.length === 1) {
        return numeros[0];
    } else {
        return numeros.pop(0) + sumaRecursiva(numeros);
    }
}

console.log('La suma recursiva es: ' + sumaRecursiva([1, 2, 3, 4, 5]));

// - Crea una clase llamada Cuenta que tendrá los siguientes atributos: 
// titular (que es una persona) y cantidad (puede tener decimales). 
// El titular será obligatorio y la cantidad es opcional.

class Cuenta {
    constructor(titular, cantidad) {
        this.titular = titular;
        this.cantidad = cantidad;
    }

    mostrar(titular, cantidad) {
        console.log(titular, cantidad);
    }

    setIngresarCantidad(cantidad) {
        if (cantidad > 0) {
            this.cantidad = cantidad;
        }
    }

    setRetirarCantidad(cantidad) {
        this.cantidad = this.cantidad - cantidad;
    }
}