import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition relative">
      <h2 className="text-2xl font-bold text-gray-800">{blog.title}</h2>
      <p className="text-sm text-gray-500 mt-1">
        By {blog.author} | {blog.date}
      </p>
      <p className="text-gray-600 mt-3">{blog.excerpt}</p>
      <Link
        to={`/blog/${blog.id}`}
        className="inline-block mt-4 text-blue-500 hover:underline absolute bottom-2.5 right-4"
      >
        Read More →
      </Link>
    </div>
  );
};

export default BlogCard;
