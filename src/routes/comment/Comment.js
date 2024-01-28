const GetComment = require("../../controllers/v1/Comments/GetComment");
const PostComment = require("../../controllers/v1/Comments/PostComment");
const UpdateComment = require("../../controllers/v1/Comments/UpdateComment");
const Peoples = require('../../models/PeopleModel')
const Comment = require("express").Router()
Comment.get('/user', async (req, res) => {
  const user = await Peoples.find();
  res.send('go it')
  console.log(user)
})
Comment.get("/:id", GetComment)
Comment.patch("/:id", UpdateComment)
Comment.delete("/:id", UpdateComment)
Comment.post("/", PostComment)


module.exports = Comment;
 