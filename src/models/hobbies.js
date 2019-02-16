export default (sequelize, Sequelize) => {
  const Hobbies = sequelize.define('Hobbies', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      unique: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true
  })

  Hobbies.associate = (models) => {
    Hobbies.belongsToMany(models.Student, {
      as: 'hobbies',
      through: models.StudentHobbies,
      foreignKey: 'hobbyId'
    })
  }

  return Hobbies
}
