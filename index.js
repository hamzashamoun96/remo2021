require('dotenv').config();
const port = process.env.PORT || 3000;
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const { v4: uuidV4 } = require('uuid')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect(`/aa`)
})

app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room })
})

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {

    socket.join('44')
    socket.nsp.to('44').emit('user-connected', userId)

    socket.on('disconnect', () => {
      socket.broadcast.emit('user-disconnected', userId)
    })
  })
})

server.listen(port, ()=>{
  console.log("GGGGGGGGGG");
})
