var personas = [
  {
    nombre: 'Emi',
    edad: 21,
    hobbies: ['correr', 'dormir', 'nadar'],
    amigos: [
      {
        nombre: 'Martin',
      }, {
        nombre: 'Leo',
      }
    ],
  }, {
    nombre: 'Franco',
    edad: 22,
    hobbies: ['futbol', 'golf'],
    amigos: [
      {
        nombre: 'Emi',
      }, {
        nombre: 'Jimmy',
      }, {
        nombre: 'Matias',
      }
    ],
  },
  {
    nombre: 'Martin',
    edad: 35,
    hobbies: ['Cancha', 'emprender'],
    amigos: [
      {
        nombre: 'Toni',
      }, {
        nombre: 'Leo',
      }, {
        nombre: 'Manu',
      }
    ],
  },
];

function filtrar(funcion) {
  let result = []
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if (funcion(element)) {
      result.push(element);
    }
  }
  //this.map(x => {
  //  if (funcion(x)) {
  //    result.push(x)
  //  }
  //})
  return result
}

Array.prototype.filtrar = filtrar

//let result = personas.filter(p => p.edad <= 22).length
let result = personas.filtrar(p => p.edad <= 22).length

console.log(result)
