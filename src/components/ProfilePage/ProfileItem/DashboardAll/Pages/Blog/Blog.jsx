import React from 'react'
import "./blogs.css";
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

import AddNewBlog from "./AddBlog/AddNewBlog";
import BlogList from "./BlogList";
const Blog = () => {
  return (
    <div className="reviews-page" style={{height:'fit-content'}}>
    <div className="reviews-cnt">
      <div className="demo-top-component"></div>
      <div className="blogs-page">
        <h2 className="reviews-title">Blogs</h2>
        <AddNewBlog />
        <BlogList />
      </div>
    </div>
  </div>
  )
}

export default Blog