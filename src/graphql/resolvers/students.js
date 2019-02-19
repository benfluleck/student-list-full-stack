import { UserInputError } from 'apollo-server-core'
import Joi from 'joi'

import models from '../../models'
import { validateStudentFields, validateId } from '../../validationSchemas'

const { Student, Hobbies } = models

const students = {
  Query: {
    getAllStudents: () => Student.findAll({}),
    getStudent: async (root, { id }) => {
      try {
        await Joi.validate(id, validateId, { abortEarly: false })
        return Student.findByPk(id)
      } catch (error) {
        throw new UserInputError('This student is not present')
      }
    }
  },
  Mutation: {
    addStudent: async (root, args) => {
      await Joi.validate(args, validateStudentFields, { abortEarly: false })
      const { firstname, lastname, birthdate, photoUrl, hobbies } = args

      const foundHobbies = await Hobbies.count({ where: { id: { $in: hobbies } } })

      if (foundHobbies !== hobbies.length) {
        throw new UserInputError('One or more of the hobbies specified are invalid')
      }

      const foundStudent = await Student.findOne({ where: { firstname, lastname, birthdate } })
      if (foundStudent) {
        throw new UserInputError('This student is already present')
      }
      const newStudent = {
        firstname,
        lastname,
        birthdate,
        photoUrl,
        hobbies
      }
      const createdStudent = await Student.create({ ...newStudent })
      return createdStudent
    },
    editStudent: async (root, { id, firstname, lastname, birthdate, photoUrl, hobbies }) => {
      try {
        await Joi.validate({ id }, validateId, { abortEarly: false })
        const student = await Student.findByPk(id)
        const foundStudent = {
          firstname: student.firstname,
          lastname: student.lastname,
          birthdate: student.birthdate,
          photoUrl: student.photoUrl,
          hobbies: student.hobbies
        }

        const singleStudent = {
          firstname,
          lastname,
          birthdate,
          photoUrl,
          hobbies
        }

        student.updateAttributes({ ...singleStudent }, { fields: Object.keys(foundStudent) })
        return student
      } catch (error) {
        throw new UserInputError('This student is not present')
      }
    },
    deleteStudent: async (root, { id }) => {
      await Student.destroy({ where: { id } })
      return id
    }
  },
  Student: {
    hobbies: async (student, args, context, info) => {
      const hobbies = await student.hobbies.map(hobby => Hobbies.findByPk(hobby))
      return hobbies
    }
  }
}

export default students
