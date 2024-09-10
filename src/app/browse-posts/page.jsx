import { addPost} from '@/serverActions/noteActions';
import ShowAllPosts from '@/app/components/ShowAllPosts';

async function PostsPage() {
   
  return (
    <>
 
    <div className="flex flex-col lg:flex-row  mb-10">
      <div className="xl:fixed left-0 top-20 relative top-16 p-6 rounded bg-white text-green-800 shadow-md w-full lg:w-1/4 h-full mb-10 lg:overflow-auto z-9" id='addnote-form'>
        <h1 className="text-2xl font-bold text-center text-orange-900 mb-6">Create a posts</h1>
        <form action={addPost}>
        <div className="mb-4">
            <label htmlFor="username" className="block text-green-800 font-medium mb-2">Username</label>
            <input 
              type="text" 
              name="username" 
              id="username" 
              placeholder="Enter a your username" 
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
          <div className="mb-4">
            <label htmlFor="postBody" className="block text-green-800 font-medium mb-2">Say something about the post!</label>
            <textarea 
              name="postBody" 
              id="postBody" 
              rows={4} 
              placeholder="Enter post content" 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-green-800 py-2 text-white rounded-lg hover:bg-orange-900 transition duration-300 mb-4"
          >
            Post !t
          </button>
        </form>
      </div>
      <div className=" flex-1 lg:relative lg:left-0 lg:w-full">
        <ShowAllPosts/>
      </div>
    </div>
    </>
  );
}

export default PostsPage;
