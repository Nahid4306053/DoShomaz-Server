const router = require('express').Router();
const createError = require('http-errors');
const Blogs = require('../../../models/BlogModel');
const MyFavoriteBlog = async (req,res,next)=>{
 try{
  const page = req.query.page || 1;
  const limit = req.query.limit || 8  ; 
  console.log(req.body.ids);
  const totalData = await Blogs.countDocuments({_id:{$in:req.body.ids}});
 
  const result = await  Blogs.find({_id:{$in:req.body.ids}}).sort({createdAt: -1}).skip((page-1) * limit).limit(limit)
  res.json({totalData:totalData , Blogs : result});

 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 } 
}

module.exports = MyFavoriteBlog;

