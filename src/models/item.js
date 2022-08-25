const Sequelize = require('sequelize')

const db = require('../../server/db.config')

const Item = db.define('Items', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Date: { 
        type: Sequelize.STRING,
        allowNull: false
    },
    Open: {
        type: Sequelize.STRING,
        allowNull: true        
    },
    High: {
        type: Sequelize.STRING,
        allowNull: true        
    },
    Low: {
        type: Sequelize.STRING,
        allowNull: true        
    },
    Close: {
        type: Sequelize.STRING,
        allowNull: true        
    },    
    Volume: { 
        type: Sequelize.STRING,
        allowNull: false
    }, 
})

module.exports = Item