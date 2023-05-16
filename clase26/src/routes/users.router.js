import { Router } from 'express'
import {
  findAllUsers,
  findOneUser,
  createOneUser,
} from '../controllers/users.controller.js'

const router = Router()

router.get('/', findAllUsers)
router.get('/:id', findOneUser)
router.post('/', createOneUser)

export default router
