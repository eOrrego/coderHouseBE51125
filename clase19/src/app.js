import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
import usersRouter from './routes/users.router.js'
import jwtRouter from './routes/jwt.router.js'
// db
import './db/configDB.js'
// passport
import './passport/passportStrategies.js'
import passport from 'passport'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

// cookie
app.use(cookieParser())

//session
import FileStore from 'session-file-store'
import mongoStore from 'connect-mongo'
const fileStore = FileStore(session)

// FILESTORE
// app.use(
//   session({
//     store: new fileStore({
//       path: __dirname + '/sessions',
//     }),
//     secret: 'SessionKey',
//     cookie: {
//       maxAge: 120000,
//     },
//   })
// )

//MONGO
app.use(
  session({
    store: new mongoStore({
      mongoUrl:
        'mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/sessionMongo51125?retryWrites=true&w=majority',
    }),
    secret: 'SessionKey',
    cookie: {
      maxAge: 120000,
    },
  })
)

// config passport
app.use(passport.initialize())
app.use(passport.session())

// routes
app.use('/views', viewsRouter)
app.use('/users', usersRouter)
app.use('/jwt',jwtRouter)

app.listen(8080, () => {
  console.log('Escuchando al puerto 8080')
})
