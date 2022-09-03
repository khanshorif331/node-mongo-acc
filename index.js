// local modules
const other = require('./other.js')
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
// console.log(res)

const requestHandler = (req, res) => {
	console.log(req.url)
	// res.end('Hello Node.js Server!')
	if (req.url == '/') {
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.write(JSON.stringify({ course: 'ACC' }))
		res.end()
	} else if (req.url == '/contact') {
		res.writeHead(200, { 'Content-Type': 'text/html' })
		res.write('<p>This is contact page</p>')
		res.end()
	} else if (req.url == '/about-us') {
		res.writeHead(200, { 'Content-Type': 'text/html' })
		res.write('<p>This is about us page</p>')
		res.end()
	}
}

const server = http.createServer(requestHandler)

server.listen(port, err => {
	if (err) {
		return console.log('something bad happened', err)
	}

	console.log(`server is listening on ${port}`)
})
