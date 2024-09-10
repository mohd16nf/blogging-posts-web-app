import mongoose from "mongoose";


const CommentSchema = mongoose.Schema({
    comment: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now, 
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    }
  });
  
