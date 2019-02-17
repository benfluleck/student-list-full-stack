import db from '../../models'
import { graphqlTestCall } from '../utils/graphqlTestCall'

const addHobbyMutation = `
  mutation AddHobbyMutation($name: String!){
    addHobby(name: $name){
      id
      name
    }
}`

beforeAll(async () => {
  await db.sequelize.authenticate()
  await db.sequelize.sync({ force: true })
})

afterAll(async () => {
  await db.sequelize.close()
})

describe('Resolvers', () => {
  it('Add Hobby', async () => {
    const testHobby = { name: 'TestHobby' }

    const addHobbyResponse = await graphqlTestCall(addHobbyMutation, {
      name: testHobby.name
    })

    console.log(process.env.NODE_ENV, '>>enc', addHobbyResponse, '>>>>> response')
  })
})
