'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Period extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Period.init({
    teacher_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    course_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    first_period: DataTypes.BOOLEAN,
    second_period: DataTypes.BOOLEAN,
    third_period: DataTypes.BOOLEAN,
    fourth_period: DataTypes.BOOLEAN,
    fifth_period: DataTypes.BOOLEAN,
    sixth_period: DataTypes.BOOLEAN,
    seventh_period: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Period',
    timestamps: false,
    tableName: 'teacher_courses'
  });
  return Period;
};