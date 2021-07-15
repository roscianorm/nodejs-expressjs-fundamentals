const express = require('express')
const morgan = require('morgan')
// const logger = require('./logger')
// const authorize = require('./authorize')
const logger = require('../logger')
const authorize = require('../authorize')

const app = express()

// req => middleware => res

// Esto aplica el logger para todas las rutas que esten debajo de el, si queremos que alguna ruta no use el middleware la ponemos encima del app.use()
// app.use(logger)
// Esta de abajo aplica el logger para todas las rutas que esten dentro de /api
// app.use('/api',logger)

// Para aplicar varios middlewares en el app.use
app.use([logger, authorize])

// app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('API Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`)
})
