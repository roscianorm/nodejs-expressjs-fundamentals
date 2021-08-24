const express = require('express')
const app = express()

// Home
app.get('/', (req, res) => {
	res.status(200).send('Welcome to the home page!')
})
// About
app.get('/about', (req, res) => {
	res.status(200).send('Welcome to the about page!')
})
// 404
// Este va a ser como el default, todos los request que no esten configurados caeran aca
app.all('*', (req, res) => {
	res.status(404).send('<h1>Welcome to the 404 page!</h1>')
})

app.listen(5000, () => {
	console.log(`Server is listening on port 5000...`)
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

// app.get - Recibe como parametro la ruta a la que va a tratar y la funcion callback de que le indica loq ue debe hacer

// app.post

// app.put

// app.delete

// app.all - Este va a ser como el default, todos los request que no esten configurados caeran aca

// app.use

// app.listen - Recibe como parametro el puerto por el que el servidor va a escuchar
