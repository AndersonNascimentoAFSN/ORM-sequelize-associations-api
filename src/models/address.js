'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Address.belongsTo(models.Employee,
        { foreignKey: 'employee_id', as: 'employees' });
    };
  };
  Address.init({
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    employeeId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Address',
    underscored: true,
    tableName: 'Addresses',
  });
  return Address;
};