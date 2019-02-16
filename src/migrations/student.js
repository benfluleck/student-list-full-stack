export default {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'Student',
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4
        },
        firstname: {
          type: Sequelize.STRING,
          allowNull: false
        },
        lastname: {
          type: Sequelize.STRING,
          allowNull: false
        },
        birthdate: {
          type: Sequelize.DATE,
          allowNull: false
        },
        photoUrl: {
          type: Sequelize.STRING,
          allowNull: false
        },
        hobbies: {
          type: Sequelize.ARRAY(Sequelize.UUID),
          allowNull: false
        }
      },
      { freezeTable: true }
    )
  },
  down (queryInterface, Sequelize) {
    return queryInterface.DropTable('Student')
  }
}
