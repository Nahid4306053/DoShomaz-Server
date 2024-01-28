const { Schema, default: mongoose, model } = require("mongoose");


const commentModel = new Schema({
    commenter:{
     type: mongoose.Types.ObjectId ,
     required: true,
     ref: 'peoples'              
    },    
    blog_id:{
     type: mongoose.Types.ObjectId ,
     required: true,
     ref: 'blogs'              
    },
    comment:{
     type: String,
     required: true,            
    },            
},
{
  timestamps: true
})

const reviews = new model('comments',commentModel)

module.exports = reviews;