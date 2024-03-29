const router = require('express').Router();
const createError = require('http-errors');
const Blogs = require('../../../models/BlogModel');
const CommentsColletion = require('../../../models/CommentModel');
const { cloneDeep, merge } = require('lodash');
const getSingelBlogs = async (req,res,next)=>{
 try{
  const result = await  Blogs.findOne({_id:req.params.id}).populate({path:'author',select:'_id displayName uid photoURL'})
  const comments = await CommentsColletion.countDocuments({blog_id:req.params.id})
  const finalResult = merge({}, result.toObject(), { comments });
  res.json(finalResult);

 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
} 

module.exports = getSingelBlogs;

