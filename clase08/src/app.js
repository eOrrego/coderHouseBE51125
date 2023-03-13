import express from 'express'
import usersRouter from './routes/users.router.js'
import productsRouter from './routes/products.router.js'
import { __dirname } from './utils.js'


console.log('__dirname',__dirname+'/public')


const app = express()

//
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// public
app.use('/static',express.static(__dirname+'/public'))
// routes
app.use('/api/users',usersRouter)   // /users
app.use('/api/products',productsRouter) // /products













app.listen(8080,()=>{
    console.log('Escuchando al puerto 8080')
})


