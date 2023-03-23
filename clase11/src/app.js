import express from 'express'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'
import viewsRouter from './routes/views.router.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//archivo estaticos
app.use(express.static(__dirname + '/public'))

// handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

// routes
app.use('/views', viewsRouter)

const PORT = 3000

const httpServer = app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})

// websocket
const infoMensajes = []

const socketServer = new Server(httpServer)

socketServer.on('connection', (socket) => {
  console.log(`Usuario conectado: ${socket.id}`)

  socket.on('disconnect', () => {
    console.log(`Usuario desconectado: ${socket.id}`)
  })

  socket.on('mensaje', (info) => {
    infoMensajes.push(info)
    //console.log(infoMensajes);
    socketServer.emit('chat', infoMensajes)
  })

  socket.on('usuarioNuevo', (usuario) => {
    socket.broadcast.emit('broadcast', usuario)
  })
})
