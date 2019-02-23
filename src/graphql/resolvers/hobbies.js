import { UserInputError } from 'apollo-server-core'

import models from '../../models'

const { Hobbies } = models

const hobbies = {
  Query: {
    getAllHobbies: () => Hobbies.findAll({}),
    getHobby: async (root, { id }) => {
      try {
        return Hobbies.findBgsyPk(id)
      } catch (error) {
        throw new UserInputError('This hobby is not present')
      }
    }
  },

  Mutation: {
    addHobby: async (root, { name }) => {
      const foundHobby = await Hobbies.findOne({ where: { name } })
      if (foundHobby) {
        throw new UserInputError('This hobby is already present')
      }
      const createdHobby = await Hobbies.create({ name })
      return createdHobby
    },

    deleteHobby: async (root, { id }) => {
      const foundHobby = await Hobbies.findByPk(id)
      if (!foundHobby) {
        throw new UserInputError('This hobby was not found')
      }
      await Hobbies.destroy({ where: { id } })
      return id
    },

    editHobby: async (root, { id, name }) => {
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
