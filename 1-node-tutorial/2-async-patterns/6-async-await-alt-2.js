const { readFile, writeFile } = require('fs').promises

const start = async () => {
	try {
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
