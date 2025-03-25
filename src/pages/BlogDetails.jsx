import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const BlogDetails = ({ blogs, setBlogs }) => {
  const { id } = useParams();
  
  // Ensure `blogs` is not empty before trying to find the blog
  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-red-500">Loading...</h2>
        <Link
          to="/"
          className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Go Back
        </Link>
      </div>
    );
  }

  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-red-500">Blog Not Found</h2>
        <Link
          to="/"
          className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Go Back
        </Link>
      </div>
    );
  }

  const navigate = useNavigate()
  const handleDelete = () => {
    const updatedBlogs = blogs.filter((b) => b.id !== blog.id);
    setBlogs(updatedBlogs);
    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-gray-800">{blog.title}</h1>
      <p className="text-gray-500 mt-2">
        By <span className="font-semibold">{blog.author}</span> | {blog.date}
      </p>
      <div className="border-b my-4"></div>
      <p className="text-lg text-gray-700 leading-relaxed">{blog.content}</p>

      <Link
        to="/"
        className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
      >
        Back to Home
      </Link>
      <button onClick={handleDelete} className="bg-red-500 text-white cursor-pointer ml-2.5 px-6 py-3 rounded-lg hover:bg-red-600">
          Delete Blog
        </button>
    </div>
  );
};

export default BlogDetails;

