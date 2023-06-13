

// 2. Foreach
// Utiliza la siguiente array para resolver los próximos ejercicios:

let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];

//OK // Crea un array con la gente mayor de 25 años y muéstralo por consola.

const mayor25 = [];

gente.forEach((persona) => {
  if (persona.edad > 25) {
    mayor25.push(persona);
  }
});

console.log(mayor25);

//OK // Crea un array con la gente que empieza por J.

const genteJ = [];

gente.forEach((persona) => {
  if (persona.nombre.charAt(0) === "J") {
    genteJ.push(persona.nombre);
  }
});


console.log(genteJ);