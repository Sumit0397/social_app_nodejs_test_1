const path = require('path');
const Blog = require("../models/blog");
const Comment = require("../models/commentModel");

exports.getBlogPage = (req,res,next) => {
    res.sendFile(path.join(__dirname , ".." , "public" , "views" , "index.html"));
}

exports.getBlogs = (req,res,next) => {
    Blog.findAll({
        include : [
            {
                model : Comment,
                as : 'comment'
            }
        ]
    })
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        console.error(err);
    })
}

exports.addBlogs = (req,res,next) => {
    const title = req.body.title;
    const description = req.body.description;

    Blog.create({
        title : title,
        description : description
    }).then((data) => {
        console.log("blog added!!");
        res.redirect("/");
    }).catch((err) => {
        console.error(err);
    })
}

exports.getSingleBlog = (req,res,next) => {
    let id = req.params.id;

    Blog.findOne({
        include : [
            {
                model : Comment,
                as : 'comment'
            }
        ] ,
        where : {id : id}
    })
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        console.error(err);
    })
}

exports.updateBlog = (req,res,next) => {
    let id = req.params.id;

    Blog.update(req.body , {where : {id:id}})
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        console.error(err);
    })
}

exports.deleteBlog = (req,res,next) => {
    let id = req.params.id;

    Blog.destroy({where: {id:id}})
    .then(() => {
        res.status(200).send('Blog Deleted!')
    })
    .catch((err) => {
        console.error(err);
    })
}

exports.getBlogComments = (req,res,next) => {
    const id = req.params.id;

    Blog.findOne({
        include : [
            {
                model : Comment,
                as : 'comment'
            }
        ],
        where : {id : id}
    }).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        console.log(err);
    })

}