import merge from 'lodash.merge'
import students from './students'
import dateMap from './date'
import hobbies from './hobbies'

const resolvers = merge({},
  dateMap,
  students,
  hobbies
)

export default resolvers
