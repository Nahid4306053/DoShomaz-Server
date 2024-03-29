const { default: mongoose } = require('mongoose');
const Comments = require('../../../models/CommentModel');
const createError = require('http-errors');


const PostComment = async (req, res, next) => {
  try {
   const {blog_id} = req.body;  
   if(blog_id){ 
    const savedata = await Comments(req.body).save();
    res.send(savedata);
   }
   else{
    next(createError(400, "Please provide all required data")) }
  } catch (err) {
    console.log(err)                
    next(createError(500, "There is Server side Error"))
  }
}



module.exports = PostComment;
