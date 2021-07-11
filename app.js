const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, res) => {
  try {
    const first = res
    readFile('./content/second.txt', 'utf8', (err, res) => {
      try {
        const second = res
        writeFile(
          './content/result-async.txt',
          `Here is the result: ${first}, ${second}`,
          (err, res) => {
            try {
              console.log(result)
            } catch {
              console.log(err)
            }
          }
        )
      } catch {
        console.log(err)
      }
    })
  } catch {
    console.log(err)
  }
})
