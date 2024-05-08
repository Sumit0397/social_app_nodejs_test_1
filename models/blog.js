const Sequelize = require('sequelize');
const sequelize = require("../utils/db");

const Blog = sequelize.define("blog" , {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        allowNull : false
    },

    title : {
        type : Sequelize.STRING,
    },

    description : {
        type : Sequelize.STRING
    }
})

module.exports = Blog;