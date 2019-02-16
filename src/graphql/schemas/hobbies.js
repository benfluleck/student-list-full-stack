import { gql } from 'apollo-server-express'

const hobbies =
  gql`
  type Hobbies {
    id: ID!
    hobby: String!
  }
  extend type Query {
    getHobby(id: ID!): Hobbies!
    getAllHobbies: [Hobbies!]!
  }
  extend type Mutation {
    addHobby(hobby: String!): Hobbies!
  }
`

export default hobbies
