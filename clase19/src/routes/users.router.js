import { Router } from 'express'
import { usersModel } from '../db/models/users.model.js'
import { hashData, compareData } from '../utils.js'
import passport from 'passport'

const router = Router()

const users = [
  {
    username: 'juan1',
    password: '12345',
  },
  { username: 'carla1', password: 'abcde' },
]

//FILESTORE
// router.post('/', (req, res) => {
//   const { username, password } = req.body
//   const user = users.find(
//     (u) => u.username === username && u.password === password
//   )
//   if (!user) {
//     return res.json({ message: 'User not found' })
//   }
//   req.session['username'] = username
//   req.session['password'] = password
//   req.session['logged'] = true
//   res.json({ meesage: 'User found' })
// })

// MONGOSTORE
// router.post('/', async (req, res) => {
//   console.log(req);
//   const { email, password } = req.body
//   const user = await usersModel.findOne({ email })
//   if (!user) {
//     return res.json({ message: 'User not found' })
//   }
//   const isPassword = await compareData(password, user.password)
//   console.log('password',isPassword);
//   if (!isPassword) {
//     return res.json({ message: 'User not found password' })
//   }
//   req.session['email'] = email
//   req.session['password'] = password
//   if (email === 'admin@coder' && password === 'admin12345') {
//     req.session['isAdmin'] = true
//   } else {
//     req.session['isAdmin'] = false
//   }

//   res.json({ meesage: 'User found' })
// })

// router.post('/signup', async (req, res) => {
//   const user = req.body
//   const hashPassword = await hashData(user.password)
//   const newUser = { ...user, password: hashPassword }
//   await usersModel.create(newUser)
//   res.send('User created')
// })

router.get('/prueba', (req, res) => {
  console.log('session', req.session)
  if (req.session?.email) {
    res.send(`Bienvenido ${req.session.email}`)
    return
  }
  res.redirect('/views')
})

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/views')
  })
})

// PASSPORT

router.post(
  '/',
  passport.authenticate('login', {
    failureRedirect: '/views/errorLogin',
    successRedirect: '/views/perfil',
  })
  // (req,res)=>{
  //   console.log(req);
  //   res.send(`User found with email ${req.user.email}`)
  // }
)

router.post(
  '/signup',
  passport.authenticate('signup', { successRedirect: '/views/signupSuc' })
  // ,
  // (req,res)=>{
  //   console.log(req.user);
  //   res.send('User created')
  // }
)

router.get('/signUpGithub', passport.authenticate('github', { scope: [ 'user:email' ] }))
router.get('/github', passport.authenticate('github'),(req,res)=>{
  res.send('User by github')
})

export default router
