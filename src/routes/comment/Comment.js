const GetComment = require("../../controllers/v1/Comments/GetComment");
const PostComment = require("../../controllers/v1/Comments/PostComment");

const review = require("express").Router()

review.post("/" , PostComment)
review.get("/:id" ,  GetComment)


module.exports = review; 