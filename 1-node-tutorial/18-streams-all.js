const http = require('http')
const { readFileSync, writeFileSync, createReadStream } = require('fs')

// for (let i = 0; i < 100000; i++) {
//   writeFileSync('./content/big.txt', `Hello World! ${i}\n`, { flag: 'a' })
// }
// console.log('End of the file')

// const stream = createReadStream('./content/big.txt', {
//   highWaterMark: 90000,
//   encoding: 'utf8',
// })

// stream.on('data', (result) => {
//   console.log(result)
// })
// stream.on('error', (err) => console.log(err))

http
	.createServer((req, res) => {
		// const text = readFileSync('./content/big.txt', 'utf8')
		// res.end(text)
		const fileStream = createReadStream('./content/big.txt', 'utf8')
		fileStream.on('open', () => {
			fileStream.pipe(res)
		})
		fileStream.on('error', (err) => {
			res.end(err)
		})
	})
	.listen(5000)
