import db from '../../models'
import { graphqlTestCall } from '../utils/graphqlTestCall'
import studentData from '../fixtures/studentData'

const addHobbyMutation = `
  mutation AddHobbyMutation($name: String!){
    addHobby(name: $name){
      id
      name
    }
}`

const addStudentMutation = `
  mutation AddStudentMutation($firstname: String!, $lastname: String!, $birthdate: Date!, $photoUrl: String!, $hobbies: [ID!]! ){
    addStudent(firstname: $firstname, lastname: $lastname, birthdate: $birthdate, photoUrl: $photoUrl, hobbies: $hobbies){
      id
      firstname
      lastname
      birthdate
      photoUrl
    }
  }`

const editStudentMutation = `
  mutation EditStudentMutation($id: ID!, $firstname: String, $lastname: String, $birthdate: Date, $photoUrl: String, $hobbies: [ID!] ){
    editStudent(id: $id, firstname: $firstname, lastname: $lastname, birthdate: $birthdate, photoUrl: $photoUrl, hobbies: $hobbies){
      id
      firstname
      lastname
      birthdate
      photoUrl
    }
}`

const deleteStudentMutation = `
  mutation DeleteStudentMutation($id: ID!){
    deleteStudent(id: $id)
}`

beforeAll(async () => {
  await db.sequelize.sync({ force: true })
}, 20000)

afterAll(async () => {
  await db.sequelize.close()
})

let currentHobbyId
let currentStudentId
let currentStudent

describe('Student Resolver', () => {
  describe('Add Student Mutation', () => {
    it('should succesfully return an added student', async () => {
      const addHobbyResponse = await graphqlTestCall(addHobbyMutation, {
        name: 'Swimming'
      })
      currentHobbyId = addHobbyResponse.data.addHobby.id

      currentStudent = {
        ...studentData,
        hobbies: [currentHobbyId]
      }

      const addStudentResponse = await graphqlTestCall(addStudentMutation, {
        ...currentStudent
      })

      currentStudentId = addStudentResponse.data.addStudent.id
      expect(addStudentResponse.data.addStudent.id).toEqual(currentStudentId)
    })

    it('should return an error if the same student is added again', async () => {
      const secondStudentResponse = await graphqlTestCall(addStudentMutation, {
        ...currentStudent
      })
      expect(secondStudentResponse.errors[0].message).toEqual('This student is already present')
    })

    it('should return an error if the same student is added again', async () => {
      const secondStudentResponse = await graphqlTestCall(addStudentMutation, {
        ...currentStudent
      })
      expect(secondStudentResponse.errors[0].message).toEqual('This student is already present')
    })
  })

  describe('Edit Mutation', () => {
    it('should successfully edit a student details', async () => {
      const editedStudentResponse = await graphqlTestCall(editStudentMutation, {
        id: currentStudentId,
        firstname: 'Mesaic',
        lastname: 'Germany'
      })
      expect(editedStudentResponse.data.editStudent.firstname).toEqual('Mesaic')
      expect(editedStudentResponse.data.editStudent.lastname).toEqual('Germany')
    })

    it('should return an error for non-existent student details', async () => {
      const editedStudentResponse = await graphqlTestCall(editStudentMutation, {
        id: currentHobbyId,
        firstname: 'Mesaic',
        lastname: 'Germany'
      })
      expect(editedStudentResponse.errors[0].message).toEqual('This student is not present')
    })
  })

  describe('Delete Mutation', async () => {
    it('should delete a current student', async () => {
      const deletedStudentResponse = await graphqlTestCall(deleteStudentMutation, {
        id: currentStudentId
      })
      expect(deletedStudentResponse.data.deleteStudent).toEqual(currentStudentId)
    })
  })
})
