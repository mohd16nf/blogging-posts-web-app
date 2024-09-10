import { fetchPosts, updateComments, updateLikes } from "@/serverActions/noteActions";
import Image from "next/image";
import { FaHeart, FaComment } from "react-icons/fa";

export default async function ShowAllPosts() {
  const posts = await fetchPosts();

  return (
    <div className="relative top-20 xl:left-20 left-0 xl:w-[1000px] w-full mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-orange-900">All the Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 xl:gap-10 gap-4">
        {posts.map((post) => (
          <div key={post._id} className="p-5 border border-gray-200 rounded-lg shadow-lg bg-white flex flex-col items-center xl:w-[400px] w-[360px] ">
            {post.postImg && (
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={post.postImg}
                  alt="Error loading Image"
                  className={`transform transition-transform duration-300 ease-in-out hover:scale-105 
                              w-[350px] h-[350px] xl:w-[400px] xl:h-[400px] object-cover`}
                  width={400}
                  height={400}
                />
              </div>
            )}
            <div className="flex justify-between w-full mt-4 mb-4">
              <h4 className="text-lg font-semibold text-green-800">{post.username}</h4>
              <span className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>

            {/* Likes and Comments */}
            <div className="flex justify-between items-center w-full">
              <form action={updateLikes} className="flex items-center">
                <input type="hidden" name="postId" value={post.id} />
                <button
                  type="submit"
                  className="flex items-center text-green-800 hover:text-red-500 transition-colors duration-300"
                >
                  <FaHeart className="mr-1" />
                  {post.likes}
                </button>
              </form>
              <form action={updateComments} className="flex items-start">
                <input type="hidden" name="postId" value={post.id.toString()} />
                <div className="flex items-start">
                  <input
                    type="text"
                    placeholder="Comment..."
                    name="comments"
                    className="border-b border-gray-500 text-green-800 focus:outline-none focus:border-orange-500 transition-all duration-300 mr-2"
                  />
                  <button type="submit" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                    Send
                  </button>
                </div>
              </form>
            </div>

            {/* Comments Section */}
            <div className="mt-4 w-full">
              {post.comments && post.comments.length > 0 ? (
                post.comments.map((commentObj, index) => (
                  <div key={index} className="bg-gray-100 p-2 rounded-lg mb-2">
                    <p className="text-sm text-green-800">
                      {commentObj.comment} -{" "}
                      <span className="text-xs text-gray-500">
                        {new Date(commentObj.createdAt).toLocaleString()}
                      </span>
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No comments yet.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
