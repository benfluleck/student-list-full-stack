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
    addStudent(firstname: String!, lastname: String!, birthdate: Date!, photoUrl: String!, hobbies: [ID!]!): Student!
    editStudent(id: ID!, firstname: String, lastname: String, birthdate: Date, photoUrl: String, hobbies: [ID!]): Student!
    deleteStudent(id: ID!): ID!
  }
`

export default student
