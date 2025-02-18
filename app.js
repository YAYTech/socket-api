const app = require('express')()
const cors = require('cors')
const http = require('http').Server(app)
require('dotenv').config()
const io = require('socket.io')(http, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

app.use(cors({
    origin: '*', // İzin verilen domain
    methods: ['GET', 'POST'], // İzin verilen HTTP metodları
}));

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

const PORT = process.env.PORT || 3000

http.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})
