const express = require('express')
// const logger = require('./logger')
const logger = require('../logger')

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

app.get('/', logger, (req, res) => {
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})
app.get('/api/products', logger, (req, res) => {
  res.send('API Products')
})
app.get('/api/items', logger, (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`)
})
