const { readFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, res) => {
	try {
		console.log(res)
	} catch {
		console.log(err)
	}
})
