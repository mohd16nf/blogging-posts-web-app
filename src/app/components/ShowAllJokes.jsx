// src/app/notes/page.tsx
import { fetchNotes } from "@/serverActions/noteActions";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaComment, FaEdit, FaTrashAlt } from "react-icons/fa";

export default async function ShowAllNotes() {
  const notes = await fetchNotes();

  return (
    <div className="relative top-20 xl:left-48 left-0 xl:w-[1000px] w-full mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-orange-900 ">All the Jokes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8">
        {notes.map((note) => (
          <div key={note._id} className="p-5 border border-gray-200 rounded-lg shadow-lg bg-white flex flex-col items-center">
            {/* Joke Title */}
            <h2 className="text-xl font-semibold text-center mb-2 text-green-800">{note.title}</h2>
            
            {/* Joke Content */}
            <p className="text-center text-gray-700 mb-4">{note.note}</p>

            {/* Joke Image */}
            {note.addImg && (
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={note.addImg}
                  alt="Error loading Image"
                  className="transform transition-transform duration-300 ease-in-out hover:scale-105 rounded-full"
                  width={350}
                  height={350}
                />
              </div>
            )}

            {/* User Information */}
            <p className="text-sm text-gray-500 mb-10">
              Posted by: <span className="font-semibold">{note.username || "Anonymous"}</span>
            </p>

            {/* Buttons for Likes, Comments, Delete, Edit */}
            <div className="flex flex-col justify-between w-full px-4 mb-4">
              {/* Likes */}
              <div className="flex justify-between w-full ">
                <button className="flex items-center text-green-800 hover:text-red-500 transition-colors duration-300 text-[16px]">
                  <FaHeart className="mr-1" />
                  {note.likes || 0}
                </button>

              {/* Comments */}
                <button className="flex items-center text-blue-400 text-[25px] hover:text-blue-500 transition-colors duration-300 text-[16px]">
                  <FaComment className="mr-1" />
                  
                </button>

              </div>
              <div className="flex justify-between w-full">
                      {/* Delete Button */}
                <form className="flex items-center">
                  <input type="hidden" name="id" value={note.id} />
                  <button
                    type="submit"
                    className="flex items-center text-[25px] text-orange-900 hover:text-red-600 transition-colors duration-300 text-[16px]"
                  >
                    <FaTrashAlt className="mr-1" />
                  
                  </button>
                </form>

                {/* Edit Button */}
                <Link href='addnote' className="flex text-[25px] items-center text-orange-900 hover:text-orange-900 transition-colors duration-300 text-[16px]">
                  <FaEdit className="mr-1" />
                
                </Link>
                </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
