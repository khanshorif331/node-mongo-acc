// core modules
// const http = require('http')

// thire party modules -> underscore
const _ = require('underscore')
// const server = http.createServer((req, res) => {
// 	console.log('Server is running')
// })
// server.listen(5000)
// /
var stooges = [
	{ name: 'moe', age: 40 },
	{ name: 'larry', age: 50 },
	{ name: 'curly', age: 60 },
]
const res = _.pluck(stooges, 'age')
console.log(res)

// node js module types
// 1.core modoules
// 2.local modules
// 3.thired party modules

// core moodules
// http
// url
// querystring
// path
// fs
// util
console.log('hello world')

const http = require('http')
const port = 5000

const requestHandler = (request, response) => {
	console.log(request.url)
	response.end('Hello Node.js Server!')
	console.log('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, err => {
	if (err) {
		return console.log('something bad happened', err)
	}

	console.log(`server is listening on ${port}`)
})
