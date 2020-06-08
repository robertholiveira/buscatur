'use strict';
module.exports = (sequelize, DataTypes) => {
  const Organizer = sequelize.define('organizer', {
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
    phone: DataTypes.STRING,
    instagram: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    timestamps: false
  });
  Organizer.associate = function(models) {
    Organizer.hasMany(models.trip, { as: 'trips' });
  };
  return Organizer;
};