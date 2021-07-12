const { readFile, writeFile } = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFilePromise('./content/first.txt')
    const second = await readFilePromise('./content/second.txt')
    await writeFilePromise(
      './content/result-mind-grenade',
      `THIS IS AWESOME : ${first} ${second}`
    )
    console.log(`Here is the result: ${first} ${second}`)
  } catch {
    console.log(err)
  }
}

start()
