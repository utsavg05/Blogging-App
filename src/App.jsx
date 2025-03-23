import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import BlogDetails from "./pages/BlogDetails"
import blogsData from "./data/Blogs"
import { useState, useEffect } from "react"
import CreateBlog from "./pages/CreateBlog"

function App() {
  const [blogs, setBlogs] = useState([]); // Start with empty state

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs"));

    if (storedBlogs && storedBlogs.length > 0) {
      setBlogs(storedBlogs); // Use stored blogs if available
    } else {
      setBlogs(blogsData); // Otherwise, use initial blogs
      localStorage.setItem("blogs", JSON.stringify(blogsData)); // Save initial blogs
    }
  }, []);

  // ✅ Save blogs to local storage whenever they change
  useEffect(() => {
    if (blogs.length > 0) {
      localStorage.setItem("blogs", JSON.stringify(blogs));
    }
  }, [blogs]);



  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home blogs={blogs} />} />
        <Route path="/blog/:id" element={<BlogDetails blogs={blogs} />} />
        <Route path="/create" element={<CreateBlog setBlogs={setBlogs} />} />
      </Routes>
    </>

  )
}

export default App
