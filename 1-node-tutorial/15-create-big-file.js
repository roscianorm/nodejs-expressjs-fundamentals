const { writeFileSync, createReadStream } = require('fs')
for (let i = 0; i < 10000; i++) {
	writeFileSync('./content/big.txt', `Hello World! ${i}\n`, { flag: 'a' })
}
console.log('End of the file')

// const stream = createReadStream('./content/big.txt')

// reads data in chunks of 64kb
// stream.on('data', (result) => {
//   console.log(result)
// })

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

const stream = createReadStream('./content/big.txt', {
	highWaterMark: 90000,
	encoding: 'utf8',
})

stream.on('data', (result) => {
	console.log(result)
})
stream.on('error', (err) => console.log(err))
