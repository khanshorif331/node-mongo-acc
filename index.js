// core modules
const http = require('http')

// thire party modules -> underscore
const _ = require('underscore')
// const server = http.createServer((req, res) => {
// 	console.log('Server is running')
// })
// server.listen(5000)
http.createServer(function createServer(req, res) {
	console.log('heelo')
})
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
