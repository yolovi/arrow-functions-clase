//EXTRAS

// Map
//[OK] // Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:

const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

const staffRoleHobbies = staff.map((persona) => {
  return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]} y ${persona.hobbies[1]}`;
});

console.log(staffRoleHobbies);

// Resultado esperado
/*
      [
        'Pepe es TheBoss y le gusta leer y ver pelis',
        'Ana es becaria y le gusta nadar y bailar',
        'Luis es programador y le gusta dormir y comprar',
        'Ana es becaria y le gusta nadar y bailar',
        'Carlos es secretario y le gusta fútbol y queso'
      ]
   */

//TODO: REVISAR ESTE EJERCICIO ------------------------

// // Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:

const foodList_ = ["Pizza", "Ramen", "Paella", "Entrecot"];

const ciudades = ['Italia', 'Japón', 'Valencia', ""]

const cityListSentences = ciudades.map(ciudad => {
  return `Como soy de ${ciudad} amo comer ` 
})

const foodSentence = cityListSentences.map((city, i) => {
  if (i === foodList_.length - 1) {
    return `Aunque no como carne, el ${foodList_[i]} es sabroso`;
  }
  return city + foodList_[i];
});
  
console.log(foodSentence);



// //Resultado esperado
// /* [
//     'Como soy de Italia, amo comer Pizza',
//     'Como soy de Japón, amo comer Ramen',
//     'Como soy de Valencia, amo comer Paella',
//     'Aunque no como carne, el Entrecot es sabroso'
//    ]
// */


//OTRA VERSION seria con un SWITCH, asignando en el switch el indice y como coincide en cada posicion con las comidas:


const foodList2 = ["Pizza", "Ramen", "Paella", "Entrecot"];
const ciudades2 = ["Italia", "Japón", "Valencia"];


const foodSentence2 = foodList_.map((food, i) => {
  switch(food) {
    case "Pizza":
      return `Como soy de ${ciudades[i]}, amo comer ${food}`;

    case "Ramen":
      return `Como soy de ${ciudades[i]}, amo comer ${food}` ;

    case "Paella":
      return `Como soy de ${ciudades[i]}, amo comer ${food}` ;

    default: 
      return `Aunque no como carne, el ${food} es sabroso`
  }
})

console.log(foodSentence2)


//OTRA VERSION con un SWITCH, indicarle en ciudades la posicion del array:


const foodList3 = ["Pizza", "Ramen", "Paella", "Entrecot"];
const ciudades3 = ["Italia", "Japón", "Valencia"];


const foodSentence3 = foodList_.map((food) => {
  switch(food) {
    case "Pizza":
      return `Como soy de ${ciudades[0]}, amo comer ${food}`;

    case "Ramen":
      return `Como soy de ${ciudades[1]}, amo comer ${food}` ;

    case "Paella":
      return `Como soy de ${ciudades[2]}, amo comer ${food}` ;

    default: 
      return `Aunque no como carne, el ${food} es sabroso`
  }
})

console.log(foodSentence3)


//-------------------------------------------------------

//[OK] // Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros

const inventory = [
  {
    name: "Mobile phone",
    price: 199,
  },
  {
    name: "TV Samsung",
    price: 459,
  },
  {
    name: "Viaje a cancún",
    price: 600,
  },
  {
    name: "Mascarilla",
    price: 1,
  },
];

/*
    [
      'TV Samsung,',
      'Viaje a Cancún'
    ]
  */

let inventoryMasDe300 = inventory.filter((product) => product.price > 300);

inventoryMasDe300 = inventoryMasDe300.map((product) => product.name);
console.log(inventoryMasDe300);

// Reduce
// Concatena todos los elementos del array con reduce para que devuelva una sola frase

const miNombreEs = "Yol";

const sentenceElements = [
    'Me',
    'llamo',
    miNombreEs,
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
    ];
   
// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'


const concatenaFrase = sentenceElements.reduce((a , b,) => {
 return `${a} ${b} ` 
})

console.log(concatenaFrase)
