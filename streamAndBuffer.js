const events = require('events')
const fs = require('fs')
// const data = require('./data.txt')

const readstream = fs.createReadStream('./data.txt')

readstream.on('data', chunk => {
	console.log('...............')
	console.log(chunk)
})

readstream.on('open', () => {
	console.log('stream is open')
})

setTimeout(() => {
	readstream.pause()
	console.log('streaming is pause noow')
}, 15)

setTimeout(() => {
	readstream.resume()
	console.log('straming is resumed now')
}, 8000)

// readstream.pause()

// const eventEmitter = new events.EventEmitter()

// // creating an event
// const chitkarDibo = () => {
// 	console.log('oi beta koi tui?,ami darai achi,jooldi ay')
// }

// // assinging the handler to an event

// eventEmitter.on('scream', chitkarDibo)

// // fire the event
// eventEmitter.emit('scream')
