export default {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'StudentHobbies',
      {
        studentId: {
          type: Sequelize.UUID,
          allowNull: false
        },
        hobbyId: {
          type: Sequelize.UUID,
          allowNull: false
        }
      }
    )
  },
  down (queryInterface, Sequelize) {
    return queryInterface.DropTable('StudentHobbies')
  }
}
