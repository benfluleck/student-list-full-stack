export default (sequelize, Sequelize) => {
  const Student = sequelize.define('Student', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
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
  }, {
    freezeTableName: true,
    paranoid: true
  }
  )
  Student.associate = (models) => {
    Student.belongsToMany(models.Hobbies, {
      as: 'student',
      through: models.StudentHobbies,
      foreignKey: 'studentId'
    })

    Student.hasMany(models.Hobbies, {
      as: 'hobby',
      foreignKey: 'hobbies'
    })
  }

  return Student
}
