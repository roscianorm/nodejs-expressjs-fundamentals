const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
	try {
		// const first = await readFilePromise('./content/first.txt')
		// const second = await readFilePromise('./content/second.txt')
		const first = await readFile('./content/first.txt')
		const second = await readFile('./content/second.txt')
		await writeFile(
			'./content/result-mind-grenade',
			`THIS IS AWESOME : ${first} ${second}`
		)
		console.log(`Here is the result: ${first} ${second}`)
	} catch {
		console.log(err)
	}
}

start()

// ---------------------------------------------------------
// Promise and Async Await
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, res) => {
//       try {
//         resolve(res)
//       } catch {
//         reject(err)
//       }
//     })
//   })
// }

// ---------------------------------------------------------
// Async Await
// const start = async () => {
//   try {
//     const first = await getText('./content/first.txt')
//     const second = await getText('./content/second.txt')
//     console.log(`Here is the result: ${first} ${second}`)
//   } catch {
//     console.log(err)
//   }
// }

// ---------------------------------------------------------
// Promise
// getText('./content/first.txt')
//   .then((res) => {
//     console.log('Result: ', res)
//   })
//   .catch((err) => {
//     console.log('Error:', err)
//   })

// ---------------------------------------------------------
// Callback
// readFile('./content/first.txt', 'utf8', (err, res) => {
//   try {
//     console.log(res)
//   } catch {
//     console.log(err)
//   }
// })
