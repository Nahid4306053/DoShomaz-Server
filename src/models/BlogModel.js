const mongoose = require('mongoose');

const BlogModel = new mongoose.Schema({
  banner: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: 'people',
    required: true,
  },
  views: []
}, {
  timestamps: true,
});

const Blogs = new mongoose.model('blogs', BlogModel);

module.exports = Blogs;
