const express = require('express')
const { products, people } = require('./data')

const app = express()

app.get('/', (req, res) => {
  // res.status(200).json([
  //   { name: 'john', age: 21 },
  //   { name: 'fred', age: 19 },
  // ])
  res.status(200).json(products)
})

app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`)
})
