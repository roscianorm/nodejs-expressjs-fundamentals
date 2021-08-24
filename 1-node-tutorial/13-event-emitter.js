// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

// Creamos el event listener
customEmitter.on('response', () => {
	console.log(`Data received`)
})

// Capturamos los parametros y hacemos algo con ellos
customEmitter.on('response', (name, id) => {
	console.log(`Data received, name: ${name} / id: ${id}`)
})

customEmitter.on('response', () => {
	console.log(`Some other logic here`)
})

// Generamos el evento
customEmitter.emit('response', 'john', 13)
