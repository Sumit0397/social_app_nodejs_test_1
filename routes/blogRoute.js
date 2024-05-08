const express = require('express');
const blogController = require("../controllers/blogController");
const commentController = require("../controllers/commentController");

const router = express.Router();

router.use(express.static("public"));

router.get("/" , blogController.getBlogPage);

router.get("/getblogs" , blogController.getBlogs);

router.post("/addblog" , blogController.addBlogs);

router.put("/updateblog/:id" , blogController.updateBlog);

router.get("/getsingleblog/:id",  blogController.getSingleBlog);

router.delete("/deleteblog/:id" , blogController.deleteBlog);

router.get("/getblogcomments/:id", blogController.getBlogComments);

router.get("/allcomments" , commentController.getAllComments);

router.post("/addcomment/:id" , commentController.addComment);

module.exports = router;