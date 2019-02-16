import { gql } from 'apollo-server-express'

const student =
  gql`

  scalar Date

  type Student {
    id: ID!
    firstname: String!
    lastname: String!
    birthdate: Date!
    photoUrl: String!
    hobbies: [Hobbies!]!
  }
  extend type Query {
    getStudent(id: ID!): Student!
    getAllStudents: [Student!]!
  }
  extend type Mutation {
    addStudent(firstName: String!, lastName: String!, birthDate: Date!, photoUrl: String!, hobbies: [ID!]!): Student!
  }
`

export default student
