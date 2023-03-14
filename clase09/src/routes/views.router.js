import { Router } from 'express'
import { UserManager } from '../UsersManager.js'
import { __dirname } from '../utils.js'
const router = Router()
const userManager = new UserManager(__dirname+'/Users.json')

// const users = [
//   {
//     nombre: 'Pablo',
//     apellido: 'Militello',
//     edad: 40,
//     correo: 'pmilitello@mail.com',
//     telefono: 3456789,
//   },
//   {
//     nombre: 'Leandro',
//     apellido: 'Lucci',
//     edad: 35,
//     correo: 'llucci@mail.com',
//     telefono: 12345,
//   },
//   {
//     nombre: 'Carlos',
//     apellido: 'Hermida',
//     edad: 25,
//     correo: 'chermida@mail.com',
//     telefono: 135790,
//   },
//   {
//     nombre: 'Caro',
//     apellido: 'Dominguez',
//     edad: 45,
//     correo: 'cdominguez@mail.com',
//     telefono: 3567878,
//   },
//   {
//     nombre: 'Edgar',
//     apellido: 'Aranda',
//     edad: 40,
//     correo: 'earanda@mail.com',
//     telefono: 1234566,
//   },
// ]

router.get('/', (req, res) => {
  const indice = Math.floor(Math.random() * 4)
  const usuario = users[indice]
  res.render('actividad1', { ...usuario })
})

router.get('/lista', (req, res) => {
  res.render('lista', { users })
})

router.get('/registro',(req,res)=>{
    res.render('registro')
})

router.get('/listaRegistro',async(req,res)=>{
  const users = await userManager.findUsers()
  res.render('listaRegistro',{users})
})

export default router
