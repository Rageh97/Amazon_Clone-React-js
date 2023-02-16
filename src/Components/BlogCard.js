import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <>
   
        <div className="blog-card">
            <div className="card-img">
                <img className='img-fluid w-100' src="images/blog-1.jpg" alt="" />
            </div>
            <div className="blog-content">
                <p className='date'> 23 Jan, 2023 </p>
                <h5 className='title'>A beautiful sunday morning renaissance</h5>
                <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Ullam amet ea pariatur odio, qui dolore.</p>
                <Link to="/blogs/:id" className="button ">Read more</Link>
            </div>
        </div>
    
    </>
  )
}

export default BlogCard