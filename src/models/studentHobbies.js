export default (sequelize, Sequelize) => {
  const StudentHobbies = sequelize.define('StudentHobbies', {
    studentId: {
      type: Sequelize.UUID,
      allowNull: false
    },
    hobbyId: {
      type: Sequelize.UUID,
      allowNull: false
    }
  })
  StudentHobbies.associate = (models) => {
    StudentHobbies.belongsTo(models.Student, {
      foreignKey: 'studentId',
      as: 'Students'
    })
    StudentHobbies.belongsTo(models.Hobbies, {
      foreignKey: 'hobbyId',
      as: 'hobbies'
    })
  }

  return StudentHobbies
}
