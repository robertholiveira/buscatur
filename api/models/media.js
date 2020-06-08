'use strict';
module.exports = (sequelize, DataTypes) => {
  const Media = sequelize.define('media', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tripId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'trips',
        key: 'id'
      }
    },
    name: DataTypes.STRING,
    size: DataTypes.INTEGER,
    key: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  Media.associate = function(models) {
    Media.belongsTo(models.trip, {
      onDelete: "CASCADE",
      foreignKey: 'tripId',
      targetKey: 'id'
    });
  };
  return Media;
};