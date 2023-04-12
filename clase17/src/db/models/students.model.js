import mongoose from 'mongoose'

const studentsSchema = new mongoose.Schema({
  first_name: {
    type: String,
    index:true
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  gender: {
    type: String,
  },
  calificacion: {
    type: Number
  }
})

export const studentsModel = mongoose.model('Students', studentsSchema)
