import { Router } from 'express'
import { usersModel } from '../persistencia/models/users.model.js'

const router = Router()

router.get('/:username', (req, res) => {
  const { username } = req.params
  res.send(`El username es ${username}`)
})

//path: '/:username
// functions: [middleware1,middleware2,middleware3,cb]


router.put('/:username', (req, res) => {
  const { username } = req.params
  res.send(`El username es ${username}`)
})
router.delete('/:username', (req, res) => {
  const { username } = req.params
  res.send(`El username es ${username}`)
})

router.param('username', (req, res, next, username) => {
  const regex = /^[a-zA-Z]+$/
  const paramIsValid = regex.test(username)
  if (paramIsValid) {
    return next()
  }
  res.json({ error: 'Username is not valid' })
})

router.post('/', async (req, res) => {
  const user = req.body
  try {
    const newUser = await usersModel.create(user)
    res.json({ message: 'User created', user: newUser })
  } catch (error) {
    res.json({ message: 'Error', error })
  }
})

export default router
