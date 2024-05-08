const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const sequelize = require("./utils/db");
const route = require("./routes/blogRoute");
const Blog = require("./models/blog");
const Comment = require("./models/commentModel");

const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(cors());

app.use("/" , route);

app.use("/post" , route);

Blog.hasMany(Comment , {
    foreignKey : 'blog_id',
    as : 'comment'
})

Comment.belongsTo(Blog , {
    foreignKey : 'blog_id',
    as : 'blog'
})

sequelize.sync()
.then(() => {
    app.listen(3000 , () => {
        console.log("server run in 3000 port");
    })
})
.catch((err) => {
    console.log(err);
})

