import { gql } from 'apollo-server-express'

import student from './student'
import hobbies from './hobbies'

const base = gql`
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`

const typeDefs = [
  base,
  student,
  hobbies
]

export default typeDefs
