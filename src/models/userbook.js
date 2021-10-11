'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Book.belongsToMany(models.User, {
        as: 'users',
        through: UserBook,
        foreignKey: 'book_id',
        otherKey: 'user_id',
      });

      models.User.belongsToMany(models.Book, {
        as: 'books',
        through: UserBook,
        foreignKey: 'user_id',
        otherKey: 'book_id',
      });
    }
  };
  UserBook.init({}, {
    sequelize,
    modelName: 'UserBook',
    underscored: true,
    tableName: 'UserBooks',
  });
  return UserBook;
};