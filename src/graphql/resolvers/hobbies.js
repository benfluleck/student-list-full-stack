import uniqid from 'uniqid'
import db from '../../models'

const hobbies = {
  Query: {
    getAllHobbies: () => db.hobbies,
    getHobby: (root, { id }) => db.hobbies.find(hobby => hobby.id === id)
  },
  Mutation: {
    addHobby: (root, { hobby }) => {
      const singleHobby = {
        id: uniqid(),
        hobby
      }

      db.hobbies.push(singleHobby)

      return singleHobby
    }
  }
}

export default hobbies
