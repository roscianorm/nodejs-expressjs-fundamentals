const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emmiter API
const server = http.createServer()
// emits request event
// subscribe to it / listen for it / respond to it
server.on('request', (req, res) => {
	if (req.url === '/') {
		res.end('Welcome')
	} else if (req.url === '/about') {
		res.end('About')
	} else {
		res.end('404 :/')
	}
})

server.listen(5000)
