import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = ({ setBlogs }) => {
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    category: "",
    excerpt: "",
    content: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Congrats, your blog is published!🚀 Keep writing and inspiring others!")

    const blogWithId = { 
        ...newBlog, 
        id: Date.now(), // Unique ID based on timestamp
        date: new Date().toDateString()
      };
      

    setBlogs((prevBlogs) => {
      const updatedBlogs = [...prevBlogs, blogWithId];

      // ✅ Update localStorage with new blogs
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

      return updatedBlogs;
    });

    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Create a New Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={newBlog.title}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={newBlog.author}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <select
          name="category"
          value={newBlog.category}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="">Select Category</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Programming">Programming</option>
          <option value="Health">Health</option>
          <option value="Travel">Travel</option>
          <option value="Fashion">Fashion</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <input
          type="text"
          name="excerpt"
          placeholder="You can write excerpt here..."
          value={newBlog.excerpt}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="content"
          rows="6"
          placeholder="Write your blog content here..."
          value={newBlog.content}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;

