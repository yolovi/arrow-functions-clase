// 1. Funciones flecha
//[OK] // Convierte la siguiente función en una función flecha:
// function saludar() {
//   return "Hola";
// }

const saludar = () => "Hola";
console.log(saludar);

//[OK] // Convierte la siguiente función en una función flecha en línea:
// function division(a,b) {
//   return a / b;
// }

const division = (a, b) => a / b;
console.log(division(4, 2));

//[OK] // Convierte la siguiente función en una función flecha:
// function miNombre(nombre) {
//   return `Mi nombre es ${nombre}`;
// }

const miNombre = (nombre) => `Mi nombre es ${nombre}`;
console.log(miNombre("Yol"));

//[OK] // Convierte las siguientes funciones en funciones flecha:
// function test2() {
//   console.log("Función test 2 ejecutada.");
// }
// function test1(callback) {
//   callback();
// }

// test2()
// test1(test2)

const testDos = () => console.log("Función test 2 ejecutada.");
testDos();

const testUno = (callback) => callback();
testUno(testDos);