const AddBlog = require('../../controllers/v1/Blogs/AddBlog');
const MyBlogs = require('../../controllers/v1/Blogs/MyBlogs');
const getBlogs = require('../../controllers/v1/Blogs/getBlogs');
const getSingelBlog = require('../../controllers/v1/Blogs/getSingelBlogs');
const getPrevnext = require('../../controllers/v1/Blogs/Prevnext');
const UpdateBlog = require('../../controllers/v1/Blogs/UpdateBlog');
const Peoples = require('../../models/PeopleModel');


const Blog = require('express').Router();

Blog.post('/' ,   AddBlog);

Blog.get('/all' , getBlogs);

Blog.get('/singel/:id' , getSingelBlog );

Blog.get('/prevnext/:id' ,  getPrevnext);

Blog.get('/my-blogs' ,    MyBlogs );

Blog.put('/update/:id' ,    UpdateBlog );


 







  
module.exports = Blog;  