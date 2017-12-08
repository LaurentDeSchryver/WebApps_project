var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  comments: [{type: mongoose.Schema.Types.Mixed, ref: 'Post'}],
  photoUrl:String,
  posterId:String,
  likes: Number
});	
mongoose.model('Post', PostSchema);