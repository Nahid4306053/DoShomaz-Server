const express  = require('express');
const Blog = require('../../routes/Blogs/Blog');
const Comment = require('../../routes/comment/Comment');
const router = express.Router()
 
router.get("/",(req,res)=>{
      res.send("listennig api version 01...")              
})



 
//--- /api/v1/Blog
router.use("/blog" , Blog);

//--- /api/v1/comment
router.use("/comment" , Comment);









module.exports = router