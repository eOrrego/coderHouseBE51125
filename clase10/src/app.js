import express from 'express'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
import { Server } from 'socket.io'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extender: true }))
app.use(express.static(__dirname + '/public'))

// HANDLEBARS

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

//routes
app.use('/views', viewsRouter)

const PORT = 8080

const httpServer = app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})

// SOCKET

const messages = []

const socketServer = new Server(httpServer)

socketServer.on('connection', (socket) => {
  //console.log(`Cliente conectado: ${socket.id}`)

  socket.on('disconnect', () => {
    //console.log(`Usuario desconectado: ${socket.id}`)
  })

  socket.emit(
    'bienvenida',
    `Bienvenido a WEBSOCKET cliente con id: ${socket.id}`
  )
  socket.on('respuestaBienvenida', (response) => {
    //console.log(response)
  })

  socket.on('message', (message) => {
    messages.push({ clientId: socket.id, message })
    socketServer.emit('allMessages', messages)
  })
})
