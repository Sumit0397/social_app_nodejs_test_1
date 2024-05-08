const Sequelize = require('sequelize');
const sequelize = require("../utils/db");

const Comment = sequelize.define("comment" , {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        allowNull : false
    },

    comment : {
        type : Sequelize.STRING,
    },

})

module.exports = Comment;
