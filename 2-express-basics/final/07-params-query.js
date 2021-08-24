const express = require('express')
const { products, people } = require('./data')

const app = express()

app.get('/', (req, res) => {
	res.status(200).send(`
  <h1>Hello world!</h1>
  <a href="/api/products">Products</a>
  <a href="/api/people">People</a>
  `)
})

app.get('/api/products', (req, res) => {
	// res.status(200).json(products)

	const newProducts = products.map((product) => {
		const { id, name, image } = product
		return { id, name, image }
	})

	res.status(200).json(newProducts)
})

app.get('/api/products/:productId', (req, res) => {
	// console.log(req)
	// console.log(req.params)
	const { productId } = req.params
	const singleProduct = products.find(
		(product) => product.id === Number(productId)
	)
	if (!singleProduct) {
		return res.status(404).send('Product does not exist')
	}
	res.status(200).json(singleProduct)
})

app.get('/api/products/:productId/reviews/', (req, res) => {
	// console.log(req.params)
	const { productId } = req.params
	const singleProduct = products.find(
		(product) => product.id === Number(productId)
	)
	if (!singleProduct) {
		return res.status(404).send('Product does not exist')
	}
	res.status(200).json(singleProduct.reviews)
})

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
	// console.log(req.params)

	const { productId, reviewId } = req.params

	// cuando no ponemos el contenido del arrow function entre llaves {} es como si el return se sobreentendiera, nota la diferencia con la constante singleReview
	const singleProduct = products.find(
		(product) => product?.id === Number(productId)
	)

	const singleReview = singleProduct.reviews.find((review) => {
		return review?.id === Number(reviewId)
	})

	if (!singleReview) {
		return res.status(404).send('Review does not exist')
	}

	res.status(200).json(singleReview)
})

app.get('/api/people', (req, res) => {
	res.status(200).json(people)
})

app.get('/api/v1/products/query', (req, res) => {
	console.log(req.query)

	const { search, limit } = req.query

	let sortedProducts = [...products]
	// let sortedProducts2 = products
	// let sortedProducts3 = [products]

	// console.log('1', sortedProducts)
	// console.log('2', sortedProducts2)
	// console.log('3', sortedProducts3)

	if (search) {
		sortedProducts = sortedProducts.filter((product) => {
			return product.name.startsWith(search)
		})
	}
	if (limit) {
		sortedProducts = sortedProducts.slice(0, Number(limit))
	}
	if (sortedProducts.length < 1) {
		// res.status(200).send('No products marched your search')
		return res.status(200).send({ success: 'true', data: [] })
	}
	res.status(200).json(sortedProducts)
	// res.send('<h1>Ho Hey</h1>')
})

app.listen(5000, () => {
	console.log(`Server is listening on port 5000...`)
})
