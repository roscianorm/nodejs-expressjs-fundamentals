// Express automaticamente le pasa los parametros al middleware
const logger = (req, res, next) => {
	const method = req.method
	const url = req.url
	// const time = new Date().getFullYear()
	const time = new Date()
	console.log(method, url, time)
	// res.send('Testing')
	next()
}

module.exports = logger
