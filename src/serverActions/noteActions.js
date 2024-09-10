'use server'
import { revalidatePath, redirect } from "next/cache";
import { connectToDB } from "@/libs/connections"

import NoteTaker from "@/libs/models";
import  Posts  from "@/libs/postsModel";


// jokes page server actions 

export async function createNote(formData) {
    const { title,username, note, addImg} = Object.fromEntries(formData);
    try{
        connectToDB()

        const newNote = new NoteTaker({
            title,
            note,
            username,
            addImg
        })
       
        await newNote.save()
        revalidatePath("/addnote");
        console.log('Note saved to db')
    }
    catch(err){
        console.log('error adding this note', err)
        return console.log('error adding this note', err)
    }
}


export async function fetchNotes() {
  
    try{
        connectToDB()
        const notes = await NoteTaker.find({});
        return notes;
    }
    catch(err){
        
        return console.log('error finding notes')
    }
}

export const fetchNote = async(id)=>{
    try{
        connectToDB()
        const note = await NoteTaker.findById(id);
        return note;
    }catch(err){
        console.log(err)
        throw new Error("Failed to fetch users!")
    }
}

// export const deleteNote = async (formData) => {
//     const { id } = Object.fromEntries(formData);

//     try {
//         connectToDB();
//         await NoteTaker.findByIdAndDelete(id);
//     } catch (err) {
//         return console.log("Failed to delete");
        
//     }

//     revalidatePath("/addnote");
// }


export const fetchNoteById = async (id) => {
    try {
      const response = await fetch(`/addnote/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching note:', error);
      throw error;
    }
  };


// export const editNote = async (formData) => {
//     const { id, title, note , addImg} = Object.fromEntries(formData);

//     try {
//         connectToDB();

//         const updateFields = {
//             title,
//             note,
//             addImg
//         };

//         Object.keys(updateFields).forEach(
//             (key) =>
//                 (updateFields[key] === "" || updateFields[key] === undefined) && delete updateFields[key]
//         );

//         await NoteTaker.findByIdAndUpdate(id, updateFields);
//         revalidatePath("/addnote");
//     } catch (err) {
//         console.log(err);
//         throw new Error("Failed to update user!");
//     }

//     revalidatePath("/editnote");
// }

// jokes pages server actions till here 


// Browse Posts page server actions code here 

export async function addPost(formData) {
    const {username, postTitle, postBody, postImg} = Object.fromEntries(formData);
    console.log(username)
    try{
        connectToDB()

        const newPost = new Posts({
            username,
            postTitle,
            postImg,
            postBody
        })
       
        await newPost.save()
        revalidatePath("/browse-posts");
        console.log('Post saved to db', newPost)
    }
    catch(err){
        return console.log('error adding this Post', err)
    }
}

export async function fetchPosts() {
  
    try{
        connectToDB()
        const posts = await Posts.find({});
        return posts;
    }
    catch(err){
        
        return console.log('error finding posts')
    }
}


export const updateComments = async (formData) => {
    const { postId, comments } = Object.fromEntries(formData);
    console.log(postId, comments);
    try {
        await connectToDB();

        // Create the new comment object with a timestamp
        const newComment = {
            comment: comments,
            createdAt: new Date()
        };

        // Add the new comment to the existing comments array
        await Posts.findByIdAndUpdate(postId, { 
            $push: { comments: newComment } 
        });

        console.log('Comment added successfully to the post');
        revalidatePath('/browse-posts')
    } catch (err) {
        console.error(err);
        throw new Error("Failed to update comments!");
    }
};


// update likes

export async function updateLikes(formData) {
    const { postId } = Object.fromEntries(formData);
  
    try {
      await connectToDB();
      
      const updatedPost = await Posts.findByIdAndUpdate(
        postId,
        { $inc: { likes: 1 } },
        { new: true }
      ).lean(); // Use `.lean()` to return a plain JavaScript object
  
      if (!updatedPost) {
        throw new Error('Post not found');
      }
  
      revalidatePath('/browse-posts');
      return updatedPost; // Make sure this is a plain object
    } catch (error) {
      console.error('Failed to update likes!', error);
      throw error;
    }
  }
  