const pluck = require('./05.js')

var productos = [
  { name: 'TV LCD', price: 100, amount: 4 },
  { name: 'Computadora', price: 500, amount: 9 },
  { name: 'Notebook', price: 1500, amount: 2 },
]

productos.push({ name: 'Mouse', price: 3, amount: 29 })

console.log(pluck(productos, 'name'))
console.log(pluck(productos, 'price'))
console.log(pluck(productos, 'amount'))

