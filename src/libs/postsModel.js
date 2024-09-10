import mongoose from "mongoose";

// Post Schema with embedded CommentSchema
const postSchema = new mongoose.Schema({
  postTitle: {
    type: String,
    required: true
  },
  postImg: {
    type: String,
    required: [true, 'Please add an Image']
  },
  postBody: {
    type: String,
    required: [true, 'Must provide something to note']
  },
  username:{
    type: String,
    required: true,
    unique: true
  },
  likes: {
    type: Number,
    default: 0
  },
  postCreatedAt: {
    type: Date,
    default: Date.now
  },
  comments: [{
    comment: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
}, { timestamps: true });

const Posts = mongoose.models.Posts || mongoose.model('Posts', postSchema);

export default Posts;
