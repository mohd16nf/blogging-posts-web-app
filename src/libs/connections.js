import mongoose from 'mongoose';

export const connectToDB = async () =>{
  if(mongoose.connections[0].readyState){
    return true;
  }

  try{
    await mongoose.connect("mongodb+srv://mdasif16nf:mareo16nf@cluster0.d2jyq.mongodb.net/random-blog-app");
    console.log('mongo connected succesfully')
    return true;
  }
  catch(err){
      console.log(err)
  }
};
