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

getText('./content/first.txt')
	.then((res) => {
		console.log('Result: ', res)
	})
	.catch((err) => {
		console.log('Error:', err)
	})
