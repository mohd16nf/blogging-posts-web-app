import React from 'react';
import { createNote} from '@/serverActions/noteActions';
import ShowAllNotes from '@/app/components/ShowAllJokes';

async function CreateNote() {
   
  return (
    <>
 
    <div className="flex flex-col lg:flex-row h-screen">
      <div className=" xl:fixed xl:top-24 relative top-16 rounded p-8 bg-white text-green-800 shadow-md w-full lg:w-1/4 h-auto lg:overflow-auto xl:z-10 z-9" id='addnote-form'>
        <h1 className="text-2xl font-bold text-center text-orange-900 mb-6">Post a Joke!</h1>
        <form action={createNote}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-green-800 font-medium mb-2">Title</label>
            <input 
              type="text" 
              name="title" 
              id="title" 
              placeholder="Enter a title" 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-green-800 font-medium mb-2">Username</label>
            <input 
              type="text" 
              name="username" 
              id="username" 
              placeholder="Enter your uername" 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="note" className="block text-green-800 font-medium mb-2">Joke Body</label>
            <textarea 
              name="note" 
              id="note" 
              rows={4} 
              placeholder="Enter note content" 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="addImg" className="block text-green-800 font-medium mb-2">Add a Image URL</label>
            <input 
              type="text" 
              name="addImg" 
              id="addImg" 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-green-800 text-white py-2 rounded-lg hover:bg-orange-900 transition duration-300 mb-4"
          >
            Add this note
          </button>
        </form>
      </div>
  
      <div className="lg:ml-1/4 p-8 flex-1 lg:relative lg:left-0 lg:w-full">
        <ShowAllNotes/>
      </div>
    </div>
    </>
  );
}

export default CreateNote;
