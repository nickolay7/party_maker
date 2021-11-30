'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Messages_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Messages_history.init({
    user_name: {
      type: DataTypes.STRING
    },
    room: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'Messages_history',
  });
  return Messages_history;
};
