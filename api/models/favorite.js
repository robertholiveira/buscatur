'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('favorite', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    tripId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'trips',
        key: 'id'
      }
    },
  }, {});
  Favorite.associate = function(models) {
    // associations can be defined here
  };
  return Favorite;
};