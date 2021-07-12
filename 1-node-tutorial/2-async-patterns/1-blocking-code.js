const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello World!')
  } else if (req.url === '/about') {
    // BLOCKING CODE !!!!
    console.time()
    for (let i = 0; i < 300; i++) {
      for (let j = 0; j < 300; j++) {
        console.log(`${i} ${j}`)
      }
    }
    console.timeEnd()
    res.end('About Us page')
  } else {
    res.end(':/')
  }
})

const port = 5000
server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
