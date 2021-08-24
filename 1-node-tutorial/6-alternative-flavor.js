// const items = ['item1', 'item2']
module.exports.items = ['item1', 'item2'] // Exportar directamente

const person = {
	name: 'bob',
}

// Como el module es un objeto podemos asignarle una propiedad singlePerson con valor de person a la propiedad exports del module y asi exportarla
module.exports.singlePerson = person
