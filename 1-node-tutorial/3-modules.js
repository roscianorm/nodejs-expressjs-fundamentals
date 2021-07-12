// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// Cada vez que importemos nuestros propios modulos debemos utilizar el ./ porque siempre habran modulos globales y otros que haran uso de las rutas relativas
const names = require('./4-names')
// console.log(names)

const sayHi = require('./5-utils')

const data = require('./6-alternative-flavor')
console.log(data)

require('./7-mind-grenade')

// Desconstruimos el objeto names para extraer las variables que hay dentro de el ES6 sintax
let { john, peter } = names

sayHi('susan')
sayHi(john)
sayHi(peter)
