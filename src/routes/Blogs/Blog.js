const AddBlog = require('../../controllers/v1/Blogs/AddBlog');
const MyBlogs = require('../../controllers/v1/Blogs/MyBlogs');
const getBlogs = require('../../controllers/v1/Blogs/getBlogs');
const MyFavoriteBlog = require('../../controllers/v1/Blogs/MyFavoriteBlog');
const getSingelBlog = require('../../controllers/v1/Blogs/getSingelBlogs');
const getPrevnext = require('../../controllers/v1/Blogs/Prevnext');
const UpdateBlog = require('../../controllers/v1/Blogs/UpdateBlog');
const Peoples = require('../../models/PeopleModel');
const DeleteBlog = require('../../controllers/v1/Blogs/DeleteBlog');


const Blog = require('express').Router();

Blog.post('/' ,   AddBlog);


Blog.get('/all' , getBlogs);

Blog.get('/singel/:id' , getSingelBlog );

Blog.get('/prevnext/:id' ,  getPrevnext);

Blog.get('/my-blogs' ,    MyBlogs );

Blog.put('/update/:id' ,    UpdateBlog );

Blog.post('/favorite' , MyFavoriteBlog );

Blog.delete('/:id' ,  DeleteBlog);

Blog.get('/user',async (req,res)=>{
     const user = await Peoples.find(); 
     res.send(user) 
})
 







  
module.exports = Blog;  