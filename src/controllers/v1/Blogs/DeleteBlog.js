const router = require('express').Router();
const createError = require('http-errors');
const Blogs = require('../../../models/BlogModel');
const comments = require('../../../models/CommentModel');
const DeleteBlog = async (req, res, next) => {
  try {
      const result = await Blogs.findOneAndDelete({ _id: req.params.id });
      await comments.findOneAndDelete({ blog_id: req.params.id });
      res.json(result);
  } catch (err) {
    console.log(err);
    next(createError(500, 'There is a server side errro'));
  }
}

module.exports = DeleteBlog;
