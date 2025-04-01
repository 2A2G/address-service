const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Address = sequelize.define('Address', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        validate:{
            notNull: {
                msg: "El usario id no puede ser nulo"
            },
        }
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull: {
                msg: "La calle no puede ser nula"
            },
        }

    },
    number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull: {
                msg: "El nombre no puede ser nulo"
            },
        }
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull: {
                msg: "La ciudad no puede ser nula"
            },
        }
    },
    neighborhood: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull: {
                msg: "El barrio no puede ser nulo"
            },
        }
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull: {
                msg: "El país no puede ser nulo"
            },
        }
    },
    }, {
    tableName: 'addresses',
    timestamps: true,
});


module.exports = { Address };