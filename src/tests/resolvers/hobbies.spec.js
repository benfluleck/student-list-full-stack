import db from '../../models'
import { graphqlTestCall } from '../utils/graphqlTestCall'

const addHobbyMutation = `
  mutation AddHobbyMutation($name: String!){
    addHobby(name: $name){
      id
      name
    }
}`

const deleteHobbyMutation = `
  mutation DeleteHobbyMutation($id: ID!){
    deleteHobby(id: $id)
}`

const editedHobbyMutation = `
  mutation DeleteHobbyMutation($id: ID!, $name: String!){
    editHobby(id: $id, name: $name){
      id
      name
    }
}`

beforeAll(async () => {
  await db.sequelize.sync({ force: true })
}, 9000)

let currentHobbyId

describe('Hobby Resolver', () => {
  describe('Add Hobby Mutation', () => {
    const testHobby = { name: 'TestHobby' }

    it('should succesfully return an added Hobby', async () => {
      const addHobbyResponse = await graphqlTestCall(addHobbyMutation, {
        name: testHobby.name
      })

      currentHobbyId = addHobbyResponse.data.addHobby.id
      expect(addHobbyResponse.data.addHobby.name).toEqual('TestHobby')
    })

    it('should return an error when adding the same hobby', async () => {
      const secondHobbyResponse = await graphqlTestCall(addHobbyMutation, {
        name: testHobby.name
      })

      expect(secondHobbyResponse.errors[0].message).toEqual('This hobby is already present')
    })
  })

  describe('Edit Hobby Mutation', () => {
    it('should succesfully return an added Hobby', async () => {
      const editedHobbyResponse = await graphqlTestCall(editedHobbyMutation, {
        id: currentHobbyId,
        name: 'Oshe Hobby'
      })

      expect(editedHobbyResponse.data.editHobby.name).toEqual('Oshe Hobby')
      expect(editedHobbyResponse.data.editHobby.id).toEqual(currentHobbyId)
    })

    it('should return an error for a hobby not id the database', async () => {
      const editedHobbyResponse = await graphqlTestCall(editedHobbyMutation, {
        id: 'c4a9c69b-326f-4ea3-bba3-858e91f13098',
        name: 'Oshe Hobby'
      })
      expect(editedHobbyResponse.errors[0].message).toEqual('This hobby was not found')
    })

    it('should return an error for an invalid id', async () => {
      const editedHobbyResponse = await graphqlTestCall(editedHobbyMutation, {
        id: 'dfdfddf',
        name: 'Oshe Hobby'
      })
      expect(editedHobbyResponse.errors[0].message).toEqual('invalid input syntax for type uuid: "dfdfddf"')
    })
  })

  describe('Delete Hobby Mutation', () => {
    it('should sucessfully delete a hobby', async () => {
      const deleteHobbyResponse = await graphqlTestCall(deleteHobbyMutation, {
        id: currentHobbyId
      })
      expect(deleteHobbyResponse.data.deleteHobby).toEqual(currentHobbyId)
    })

    it('should return an error for an already hobby', async () => {
      const deleteHobbyResponse = await graphqlTestCall(deleteHobbyMutation, {
        id: currentHobbyId
      })
      expect(deleteHobbyResponse.errors[0].message).toEqual('This hobby was not found')
    })

    it('should return an error for an invalid id', async () => {
      const deleteHobbyResponse = await graphqlTestCall(deleteHobbyMutation, {
        id: 'eerere'
      })
      expect(deleteHobbyResponse.errors[0].message).toEqual('invalid input syntax for type uuid: "eerere"')
    })
  })
})
