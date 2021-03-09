require('dotenv').config()

const app = require("express")();
const cors = require('cors')

const routes = require('./routes')

app.use(cors())
app.use('/', routes)

const httpServer = require("http").createServer(app);

const io = require("socket.io")(httpServer, {
    cors: {
        origin: 'http://localhost:3000'
    }
});

io.on("connection", socket => {
    socket.on('message', ({ message, thread_id }) => {
        const data = {
            "id": "200",
            thread_id,
            message,
            "created": "1613260625",
            "uid": "75"
        }
        
        io.emit('message', data)
    })
});

httpServer.listen(process.env.SERVER_PORT, () => {
    console.log(`Server started at port ${process.env.SERVER_PORT}`)
});