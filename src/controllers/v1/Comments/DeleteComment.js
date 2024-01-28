const { default: mongoose } = require('mongoose');
const comments = require('../../../models/CommentModel');
const createError = require('http-errors');


const DeleteComment = async (req, res, next) => {
  try {
   if(req.params.id){  
    const result = await comments.findOneAndDelete({_id:req.params.id});
    res.send(result);
   }
   else{
    next(createError(400, "Please provide all required data")) }
  } catch (err) {
    console.log(err)                
    next(createError(500, "There is Server side Error"))
  }
}

 
module.exports = DeleteComment;
