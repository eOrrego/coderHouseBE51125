import { Router } from 'express'
//import StudentsManager from '../Dao/studentsManagerFS.js'
import StudentsManager from '../Dao/studentsManagerMongo.js'
import { hashData } from '../utils.js'
import passport from 'passport'

const studentsManager = new StudentsManager()

const router = Router()

router.get('/', async (req, res) => {
  const students = await studentsManager.getAllStudents()
  res.json({ message: 'Students', students })
})

router.get('/:idStudent', async (req, res) => {
  const { idStudent } = req.params
  const student = await studentsManager.getOneById(idStudent)
  res.json({ message: 'Student', student })
})

router.post('/', async (req, res) => {
  const { password } = req.body
  const hashPassword = await hashData(password)
  const newObj = { ...req.body, password: hashPassword }
  const newStudent = await studentsManager.createOne(newObj)
  res.json({ message: 'Student created', student: newStudent })
})

router.post('/localSignup', passport.authenticate('signup'), (req, res) => {
  res.json({ message: 'User created', user: req.user })
})

// GOOGEL SIGNUP

router.get('/google',passport.authenticate('googleSignup', { scope: ['profile'] }))


router.get('/googleCallback',passport.authenticate('googleSignup'),(req,res)=>{
  res.send('Logged with google')
})

export default router
