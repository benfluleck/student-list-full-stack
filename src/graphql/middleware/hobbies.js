import Joi from 'joi'

import {
  validateHobby,
  validateName,
  validateId
} from '../../validationSchemas'

const hobbiesMiddleware = {
  Query: {
    getHobby: async (resolve, parent, { id }) => {
      await Joi.validate({ id }, validateId, { abortEarly: false })
      const result = await resolve(id)
      return result
    }
  },
  Mutation: {
    addHobby: async (resolve, parent, { name }) => {
      await Joi.validate({ name }, validateName, { abortEarly: false })
      const result = await resolve(name)

      return result
    },
    editHobby: async (resolve, parent, { id, name }) => {
      await Joi.validate({ id, name }, validateHobby, { abortEarly: false })
      const result = await resolve({ id, name })

      return result
    },
    deleteHobby: async (resolve, parent, { id }) => {
      await Joi.validate({ id }, validateId, { abortEarly: false })
      const result = await resolve(id)

      return result
    }
  }
}

export default hobbiesMiddleware
