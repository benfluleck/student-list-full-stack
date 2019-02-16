export default {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'Hobbies',
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        }
      },
      { freezeTable: true }
    )
  },
  down (queryInterface, Sequelize) {
    return queryInterface.DropTable('Hobbies')
  }
}
