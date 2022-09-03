// local modules
const other = require('./other.js')
// core modules
const http = require('http')
const url = require('url')
const fs = require('fs')
const port = 5000

// console.log(url)

// thire party modules -> underscore
// const _ = require('underscore')

// var stooges = [
// 	{ name: 'moe', age: 40 },
// 	{ name: 'larry', age: 50 },
// 	{ name: 'curly', age: 60 },
// ]
// const res = _.pluck(stooges, 'age')
// console.log(res)

const requestHandler = (req, res) => {
	if (req.url == '/') {
		// synchronus way
		// const data = fs.readFileSync('./data.txt')
		// res.write(data)
		// res.end()

		// asynchronous way
		// fs.readFile('data.txt', (err, data) => {
		// 	if (err) {
		// 		res.write('Failed to Read Data')
		// 		res.end()
		// 	} else {
		// 		res.write(data)
		// 		res.end()
		// 	}
		// })
		fs.writeFile('data.txt', 'Hello node js', err => {
			if (err) {
				res.write('Data failed to write')
				res.end()
			} else {
				res.write('Data write successfully')
				res.end()
			}
		})
	}
}

// api handling
// const requestHandler = (req, res) => {
// 	const address_url = 'http://localhost:5000/?name=shorif&country=bangladesh'
// 	const parsed_url = url.parse(address_url, true)
// 	const queryObject = parsed_url.query
// 	console.log(queryObject, 'query')
// 	// res.end('Hello Node.js Server!')
// 	if (req.url == '/') {
// 		res.writeHead(200, { 'Content-Type': 'application/json' })
// 		res.write(JSON.stringify({ course: 'ACC' }))
// 		res.end()
// 	} else if (req.url == '/contact') {
// 		res.writeHead(200, { 'Content-Type': 'text/html' })
// 		res.write('<p>This is contact page</p>')
// 		res.end()
// 	} else if (req.url == '/about-us') {
// 		res.writeHead(200, { 'Content-Type': 'text/html' })
// 		res.write('<p>This is about us page</p>')
// 		res.end()
// 	}
// }

const server = http.createServer(requestHandler)

server.listen(port, err => {
	if (err) {
		return console.log('something bad happened', err)
	}

	console.log(`server is listening on ${port}`)
})
