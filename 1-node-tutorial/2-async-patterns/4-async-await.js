const { readFile } = require('fs')

const getText = (path) => {
	return new Promise((resolve, reject) => {
		readFile(path, 'utf8', (err, res) => {
			try {
				resolve(res)
			} catch {
				reject(err)
			}
		})
	})
}

const start = async () => {
	try {
		const first = await getText('./content/first.txt')
		const second = await getText('./content/second.txt')
		console.log(`Here is the result: ${first} ${second}`)
	} catch {
		console.log(err)
	}
}

start()
