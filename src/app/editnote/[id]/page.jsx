import {editNote, fetchNote } from "@/serverActions/noteActions";

async function EditNote({params}) {
 
  const { id } = params;
  const notes = await fetchNote(id);

  return (
    <div className="container w-full flex flex-col justify-center items-center">
      <div className="p-8 bg-white shadow-md rounded-lg xl:w-1/2 w-full" >
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Edit your note</h1>
        <form action={editNote}>
        <input type='hidden' name='id' value={notes.id}/>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
            <input 
              type="text" 
              name="title" 
              id="title" 
              defaultValue={notes.title}
              placeholder={notes.title} 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="note" className="block text-gray-700 font-medium mb-2">Add a note</label>
            <textarea 
              name="note" 
              id="note" 
              rows={4} 
              defaultValue={notes.note}
              placeholder={notes.note} 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="addImg" className="block text-gray-700 font-medium mb-2">Add a URL</label>
            <input 
              type="text" 
              name="addImg" 
              id="addImg" 
              defaultValue={notes.addImg}
              placeholder={notes.addImg} 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Update This Note
          </button>
        </form>
      </div>
      </div>
  );
}

export default EditNote;
