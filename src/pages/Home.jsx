import React from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'

const Home = ({ blogs }) => {
    return (
        <div className='w-full min-h-screen'>
            <div className='w-full h-[90vh] md:h-screen bg-[#252F9C] text-center flex flex-col py-15 md:py-18'>
                <h1 className='text-white text-4xl md:text-6xl font-normal tracking-tighter'>
                    Welcome to <span className='text-[#B1D0FD] text-6xl md:text-7xl font-bold tracking-tighter'><b>BeBlogger</b></span>
                </h1>
                <h1 className='mt-9 md:mt-15 text-white text-3xl md:text-7xl tracking-tight md:leading-21 font-bold'>
                    Unleash Your Thoughts, <br />One Blog at a Time
                </h1>
                <p className='mt-4 text-gray-300 tracking-normal leading-5.5 text-md md:text-xl md:leading-7 mx-auto w-[89%] md:w-[60%]'>
                    Write, explore, and connect with a community of storytellers. Share your thoughts, discover new perspectives, and let your words make an impact.
                </p>
                <Link to='/create'>
                    <div className='mt-14'>
                        <button className='text-center cursor-pointer bg-white text-[#1A1F26] text-xl font-semibold p-4 rounded-lg hover:bg-[#dfe3e7] hover:text-black'>
                            Create Your Blog ✍️
                        </button>
                    </div>
                </Link>
            </div>

            {/* Introduction Section */}
            <div className="text-center mb-12 py-10 bg-gray-100">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
                    Explore, Write, and Inspire
                </h1>
                <p className="text-lg text-gray-600 mt-3 px-4 md:px-20">
                    Discover insightful blogs from various categories, or start writing your own!
                    Join a growing community of bloggers and share your thoughts with the world.
                </p>

                {/* Blog Listing */}
                <div className='px-7 mt-10 w-full min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        blogs.length > 0 ? (
                            blogs.map((blog) => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))
                        ) : (
                            <p className="text-center text-gray-500 text-xl col-span-3">No blogs available. Start writing your first blog!</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Home

