import express from 'express'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'
import passport from 'passport'
import session from 'express-session'
import mongoStore from 'connect-mongo'
import cookieParser from 'cookie-parser'
import studentsRouter from './routes/students.router.js'
import coursesRouter from './routes/courses.router.js'
import './db/dbConfig.js'
import './passport/passportStrategies.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// configuracion archivos estaticos
app.use(express.static(__dirname + '/public'))

// configurar session
app.use(
  session({
    store: new mongoStore({
      mongoUrl:
        'mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/school51125DB?retryWrites=true&w=majority',
    }),
    secret: 'sessionMongoKey',
  })
)

//configurar passport
app.use(passport.initialize())
app.use(passport.session())

// configuracion motor de plantilla
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

// routes
app.use('/students', studentsRouter)
app.use('/courses', coursesRouter)

app.listen(8080, () => {
  console.log('Escuchando al puerto 8080')
})
