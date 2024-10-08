import { addPost } from "@/serverActions/noteActions";
import ShowAllPosts from "@/app/components/ShowAllPosts";

export default async function PostsPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row mb-10">
        {/* Form Section */}
        <div className="xl:fixed left-0 xl:top-40 relative lg:top-40 top-16 p-6 rounded bg-white text-green-800 shadow-md w-auto lg:w-1/4 h-auto lx:h-auto lg:overflow-auto xl:z-10 z-5" id="addnote-form">
          <h1 className="text-2xl font-bold text-center text-orange-900 mb-6">Create a Post</h1>
          <form action={addPost}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-green-800 font-medium mb-2">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                className="w-full px-3 py-2 border rounded-lg focus:outline-dotted focus:ring-2 focus:ring-green-800"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="postTitle" className="block text-green-800 font-medium mb-2">Title</label>
              <input
                type="text"
                name="postTitle"
                id="postTitle"
                placeholder="Enter a title"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="postImg" className="block text-green-800 font-medium mb-2">Add an Image URL</label>
              <input
                type="text"
                name="postImg"
                id="postImg"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-2 rounded-lg hover:bg-orange-900 transition duration-300"
            >
              Add this post
            </button>
          </form>
        </div>

        {/* Posts Section */}
        <div className="xl:ml-[25%]">
          <ShowAllPosts />
        </div>
      </div>
    </>
  );
}
