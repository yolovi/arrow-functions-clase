// 3. Map
//OK // Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.
// Utiliza la siguiente array para resolver los próximos ejercicios:

// let gente = [
//     {
//       nombre: "Jamiro",
//       edad: 45,
//     },
//     {
//       nombre: "Juan",
//       edad: 35,
//     },
//     {
//       nombre: "Paco",
//       edad: 34,
//     },
//     {
//       nombre: "Pepe",
//       edad: 14,
//     },
//     {
//       nombre: "Pilar",
//       edad: 24,
//     },
//     {
//       nombre: "Laura",
//       edad: 24,
//     },
//     {
//       nombre: "Jenny",
//       edad: 10,
//     },
//   ];

const mayor25map = gente.map((persona) => {
    if (persona.edad > 25) {
      return persona;
    }
  });
  
  console.log(mayor25map);
  
  //OK // Crea un array con la gente que empieza por J.
  
  const genteJmap = gente.map((persona) => {
    if (persona.nombre.charAt(0).toUpperCase() === "J") {
      return persona;
    }
  });
  
  console.log(genteJmap);
  
  //OK // Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
  const numbers = [4, 5, 6, 7, 8, 9, 10];
  // Resultado esperado
  // [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]
  
  const numeroElevado = numbers.map((value) => {
    return value ** value;
  });
  
  console.log(numeroElevado);
  