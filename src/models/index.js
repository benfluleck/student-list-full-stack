const db = {
  students: [
    { id: '1', firstname: 'Alex', lastname: 'Jones', birthdate: Date.now(), photorUrl: 'https://gravatar.com/...', hobbyIds: ['1', '2'] },
    { id: '2', firstname: 'Benny', lastname: 'Jones', birthdate: Date.now(), photorUrl: 'https://gravatar.com/...', hobbyIds: ['1', '3'] },
    { id: '3', firstname: 'Sam', lastname: 'Jones', birthdate: Date.now(), photorUrl: 'https://gravatar.com/...', hobbyIds: ['3', '4'] },
    { id: '4', firstname: 'Kabert', lastname: 'Jones', birthdate: Date.now(), photorUrl: 'https://gravatar.com/...', hobbyIds: ['3', '1'] }
  ],
  hobbies: [
    { id: '1', hobby: 'Basketball' },
    { id: '2', hobby: 'Football' },
    { id: '3', hobby: 'Netball' },
    { id: '4', hobby: 'Swimming' }
  ]
}

export default db
