import UsersManager from '../DAL/usersManager.js'
import { hashData } from '../utils.js'

const usersManager = new UsersManager()

export const findAll = async () => {
  try {
    const users = await usersManager.findAll()
    return users
  } catch (error) {
    return error
  }
}

export const findById = async (id) => {
  try {
    const user = await usersManager.findById(id)
    return user
  } catch (error) {
    return error
  }
}

export const createOne = async (obj) => {
  const { password } = obj
  try {
    const hashPassword = await hashData(password)
    const newObj = { ...obj, password: hashPassword }
    const newUser = await usersManager.createOne(newObj)
    return newUser
  } catch (error) {
    return error
  }
}
