import { gql } from 'apollo-server-express'

const hobbies =
  gql`
  type Hobbies {
    id: ID!
    name: String!
  }
  extend type Query {
    getHobby(id: ID!): Hobbies!
    getAllHobbies: [Hobbies!]!
  }
  extend type Mutation {
    addHobby(name: String!): Hobbies!
    editHobby(id: ID!,  name: String!): Hobbies!
    deleteHobby(id: ID!): ID!
  }
`

export default hobbies
