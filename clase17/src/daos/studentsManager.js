import { studentsModel } from '../db/models/students.model.js'

export default class StudentsManager {
  async addStudents(students) {
    try {
      await studentsModel.create(students)
      return 'Students added'
    } catch (error) {
      console.log(error)
    }
  }

  async aggregationFun() {
    try {
      const response = await studentsModel.aggregate([
        { $match: { calificacion: { $gt: 5 } } },
        {
          $group: {
            _id: '$gender',
            gender_count: { $count: {} },
            promedio_calificacion: { $avg: '$calificacion' },
          },
        },
        { $sort: { gender_count: -1 } },
        { $match: {gender_count:{$gte:4}}},
      ])
      return response
    } catch (error) {
      console.log(error)
    }
  }
}
