const jwt = require('jsonwebtoken');
const mongooose = require('mongoose');
const bcrypt = require('bcryptjs');

const postSchema = new mongooose.Schema({
    post: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        default:Date.now
    },
 
    
    
    
  
   
    
})



// collection creation 
const Post = mongooose.model('POST', postSchema);

module.exports = Post;

