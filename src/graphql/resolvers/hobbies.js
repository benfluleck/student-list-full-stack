import Joi from 'joi'
import { UserInputError } from 'apollo-server-core'

import models from '../../models'
import {
  validateHobby,
  validateName,
  validateId
} from '../../validationSchemas'

const { Hobbies } = models

const hobbies = {
  Query: {
    getAllHobbies: () => Hobbies.findAll({}),
    getHobby: async (root, { id }) => {
      await Joi.validate(id, validateId, { abortEarly: false })
      try {
        return Hobbies.findBgsyPk(id)
      } catch (error) {
        throw new UserInputError('This hobby is not present')
      }
    }
  },
  Mutation: {
    addHobby: async (root, { name }) => {
      await Joi.validate({ name }, validateName, { abortEarly: false })
      const foundHobby = await Hobbies.findOne({ where: { name } })
      if (foundHobby) {
        throw new UserInputError('This hobby is already present')
      }
      const createdHobby = await Hobbies.create({ name })
      return createdHobby
    },
    deleteHobby: async (root, { id }) => {
      await Joi.validate({ id }, validateId, { abortEarly: false })
      const foundHobby = await Hobbies.findByPk(id)
      if (!foundHobby) {
        throw new UserInputError('This hobby was not found')
      }
      await Hobbies.destroy({ where: { id } })
      return id
    },
    editHobby: async (root, { id, name }) => {
      await Joi.validate({ id, name }, validateHobby, { abortEarly: false })
      const foundHobby = await Hobbies.findByPk(id)
      if (!foundHobby) {
        throw new UserInputError('This hobby was not found')
      }
      const hobby = await Hobbies.findByPk(id)
      const updatedHobby = await hobby.updateAttributes({ name })
      return updatedHobby
    }
  }
}

export default hobbies
