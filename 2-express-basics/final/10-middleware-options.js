const express = require('express')
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')

const app = express()

// req => middleware => res

// // Express automaticamente le pasa los parametros al middleware
// const logger = (req, res, next) => {
//   const method = req.method
//   const url = req.url
//   // const time = new Date().getFullYear()
//   const time = new Date()
//   console.log(method, url, time)
//   // res.send('Testing')
//   next()
// }

// Esto aplica el logger para todas las rutas que esten debajo de el, si queremos que alguna ruta no use el middleware la ponemos encima del app.use()
// app.use(logger)
// Esta de abajo aplica el logger para todas las rutas que esten dentro de /api
// app.use('/api',logger)

// Para aplicar varios middlewares en el app.use
// app.use([logger, authorize])

// app.use(express.static('./public'))

// why is returning a 304 https://stackoverflow.com/questions/44789233/sometimes-get-returns-304-instead-of-200
app.use(morgan('tiny'))

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
