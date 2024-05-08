const Sequelize = require('sequelize');

const sequelize = new Sequelize("api_test" , "root" , "Sumit@1997" , {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;