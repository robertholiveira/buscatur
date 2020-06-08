'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    timestamps: false
  });
  User.associate = function(models) {
    User.belongsToMany(models.trip, {
      through: 'favorite',
      as: 'favoriteTrips',
      foreignKey: 'userId',
    });
  };
  return User;
};