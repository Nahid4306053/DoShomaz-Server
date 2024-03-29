const router = require('express').Router();
const createError = require('http-errors');
const Blogs = require('../../../models/BlogModel');
const getBlogs = async (req,res,next)=>{
 try{
  const page = req.query.page || 1;
  const limit = req.query.limit || 8  ; 
  const query = {};
  const sort = {};
  let skip;
  const totalDocsCount = await Blogs.countDocuments();

  if(req.query.categorey){
   query.categorey = req.query.categorey;
  }  

  const totalData = await Blogs.countDocuments(query);
  const result = await  Blogs.find(query).skip((page-1) * limit).sort({"createdAt": -1}).limit(limit).populate({path:"author",select:"_id displayName photoURL"});
  res.json({totalData:totalData , Blogs : result});
 
 }
 catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
}

module.exports = getBlogs;

