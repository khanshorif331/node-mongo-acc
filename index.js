// core modules
const http = require('http')
const port = 5000

// thire party modules -> underscore
const _ = require('underscore')

var stooges = [
	{ name: 'moe', age: 40 },
	{ name: 'larry', age: 50 },
	{ name: 'curly', age: 60 },
]
const res = _.pluck(stooges, 'age')
console.log(res)

const requestHandler = (request, response) => {
	console.log(request.url)
	response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, err => {
	if (err) {
		return console.log('something bad happened', err)
	}

	console.log(`server is listening on ${port}`)
})
