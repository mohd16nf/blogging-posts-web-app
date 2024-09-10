import mongoose from "mongoose";

// Note Schema
const noteSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Must provide a title']
  },
  note: {
    type: String,
    required: [true, 'Must provide something to note']
  },
  addImg: {
    type: String,
    required: [true, 'Must provide Image Link']
  },
  username:{
    type: String,
    required: [true, 'Must provide Image Link']
  },
  pinned: {
    type: Boolean,
    default: false
  },
});

  
 const NoteTaker = mongoose.models.NoteTaker || mongoose.model('NoteTaker', noteSchema);

 export default NoteTaker;


