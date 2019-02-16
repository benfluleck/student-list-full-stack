import uniqid from 'uniqid'
import db from '../../models'

const students = {
  Query: {
    getAllStudents: () => db.students,
    getStudent: (root, { id }) => db.students.find(student => student.id === id)
  },
  Mutation: {
    addStudent: (root, { firstname, lastname, photorUrl, hobbies }) => {
      const student = {
        id: uniqid(),
        firstname,
        lastname,
        photorUrl,
        hobbies
      }

      db.students.push(student)

      return student
    }
  },
  Student: {
    hobbies: student => db.hobbies.filter(hobby => student.hobbyIds.includes(hobby.id))
  }
}

export default students
