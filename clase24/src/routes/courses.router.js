import { Router } from 'express'
import CoursesManager from '../Dao/coursesManagerMongo.js'

const router = Router()
const coursesManager = new CoursesManager()

router.get('/', async (req, res) => {
  const courses = await coursesManager.getAll()
  if (courses.length === 0) {
    res.json({ message: 'No courses' })
  } else {
    res.json({ message: 'Courses', courses })
  }
})

router.get('/:idCourse', async (req, res) => {
  const { idCourse } = req.params
  const course = await coursesManager.getOneById(idCourse)
  res.json({ message: 'Course', course })
})

router.post('/', async (req, res) => {
  const courseObj = req.body
  const newCourse = await coursesManager.createOne(courseObj)
  res.json({ message: 'New course', course: newCourse })
})

export default router
