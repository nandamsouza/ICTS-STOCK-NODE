const Sequelize = require('sequelize')

const db = require('../../server/db.config')

const Policy = db.define('Policies', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    data: { 
        type: Sequelize.DATE,
        allowNull: false
    },
    otimo: { 
        type: Sequelize.INTEGER,
        allowNull: false
    },
    critico: { 
        type: Sequelize.INTEGER,
        allowNull: false
    },     
})

module.exports = Policy