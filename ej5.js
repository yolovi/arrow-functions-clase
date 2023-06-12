 // 5. Reduce
// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numeros = [39, 2, 4, 25, 62];
// Salida--> 483600

const multiplicaNumeros = numeros.reduce((a, b) => a * b)
console.log(multiplicaNumeros)

