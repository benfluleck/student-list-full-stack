import Joi from 'joi'

import { validateStudentFields, validateId } from '../../validationSchemas'

const studentMiddleware = {
  Query: {
    getStudent: async (resolve, parent, { id }) => {
      await Joi.validate({ id }, validateId, { abortEarly: false })
      const result = await resolve(id)
      return result
    }
  },
  Mutation: {
    addStudent: async (resolve, parent, args) => {
      await Joi.validate(args, validateStudentFields, { abortEarly: false })
      const result = await resolve(args)

      return result
    },
    editStudent: async (resolve, parent, { id }) => {
      await Joi.validate({ id }, validateId, { abortEarly: false })
      const result = await resolve(id)

      return result
    },
    deleteStudent: async (resolve, parent, { id }) => {
      await Joi.validate({ id }, validateId, { abortEarly: false })
      const result = await resolve(id)

      return result
    }
  }
}

export default studentMiddleware
