'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Event, Entry }) {
      // define association here
      this.belongsToMany(Event, { through: Entry, foreignKey: 'user_id', otherKey: 'event_id' });
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    drink: {
      type: DataTypes.BOOLEAN,
    },
    one_night: {
      type: DataTypes.BOOLEAN,
    },
    relationship: {
      type: DataTypes.BOOLEAN,
    },
    find_friends: {
      type: DataTypes.BOOLEAN,
    },
    social_networks: {
      type: DataTypes.BOOLEAN,
    },
    communication: {
      type: DataTypes.BOOLEAN,
    },
    smoking: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
