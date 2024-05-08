const Comment = require("../models/commentModel");

exports.addComment = (req,res,next) => {

    const id= req.params.id;

    const commnetData = {
        blog_id : id,
        comment : req.body.comment
    }

    Comment.create(commnetData)
    .then(() => {
        console.log("comment added!!");
        // res.redirect("/");
        res.status(200);
    })
    .catch((err) => {
        console.error(err);
    })
}

exports.getAllComments = (req,res,next) => {
    Comment.findAll()
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        console.error(err);
    })
}