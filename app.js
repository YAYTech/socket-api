const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})
app.get("/", (req, res) => {  
    console.log("Hello World")
})

io.on('connection', (socket) => {
    console.log("a user connected")
    socket.on('hello', (msg) => {
        console.log("message: " + msg)
        io.emit('hello',msg)
    })
})

http.listen(3000, () => {
    console.log("server listening on 3000")
})
