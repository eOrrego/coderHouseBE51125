import express from 'express'
import cookieParser from 'cookie-parser'
import loginRouter from './routes/login.router.js'
import viewsRouter from './routes/views.router.js'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'
import session from 'express-session'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// cookies
app.use(cookieParser('SecretCookie'))

// handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

// configurar session
app.use(session({
    secret:'secretSession',
    cookie:{maxAge:5000}
}))

app.use('/views', viewsRouter)
app.use('/login', loginRouter)




app.get('/crearCookie', (req, res) => {
  res
    .cookie('cookie3', 'Tercera cookie', { maxAge: 5000 })
    .send('Respuesta guardado cookie')
})

app.get('/leerCookie', (req, res) => {
  console.log(req)
  const { cookies, signedCookies } = req
  res.json({ message: 'Cookies', cookies, signedCookies })
})

app.get('/eliminarCookie', (req, res) => {
  res.clearCookie('cookie1').send('Cookie eliminada')
})

app.get('/crearCookieFirmada', (req, res) => {
  res
    .cookie('CookieFirmada1', 'Primera cookie firmada', { signed: true })
    .send('Cookie firmada')
})

app.listen(3000, () => {
  console.log('Escuchando al puerto 3000')
})
