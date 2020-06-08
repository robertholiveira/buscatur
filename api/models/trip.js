'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define('trip', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    organizerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'organizers',
        key: 'id'
      }
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    location_details: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    date_departure: DataTypes.DATE,
    date_back: DataTypes.DATE,
    destination: DataTypes.STRING,
    origin: DataTypes.STRING,
    have_tours: DataTypes.BOOLEAN,
    have_wifi: DataTypes.BOOLEAN,
    have_pool: DataTypes.BOOLEAN,
    have_air: DataTypes.BOOLEAN,
    have_guide: DataTypes.BOOLEAN,
    have_lunch: DataTypes.BOOLEAN,
    have_dinner: DataTypes.BOOLEAN,
    have_breakfast: DataTypes.BOOLEAN
  }, {});
  Trip.associate = function(models) {
    Trip.belongsTo(models.organizer, {
      onDelete: "CASCADE",
      foreignKey: 'organizerId',
      targetKey: 'id'
    });

    Trip.belongsToMany(models.user, {
      through: 'favorite',
      as: 'users',
      foreignKey: 'tripId',
    });

    Trip.hasMany(models.media, { as: 'gallery' });

  };
  return Trip;
};