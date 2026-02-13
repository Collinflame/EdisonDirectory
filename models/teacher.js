'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Teacher.belongsToMany(models.Course, {
        through: 'teacher_courses',
        as: 'courses',
        foreignKey: 'teacher_id',
        otherKey: 'course_id',
        timestamps: false
      })
      Teacher.hasOne(models.Period,{
        as: 'periods',
        foreignKey: 'teacher_id',
      })
    }
  }
  Teacher.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    room: DataTypes.STRING,
    email: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Teacher',
    timestamps:false,
    tableName: 'teachers'
  });
  return Teacher;
};