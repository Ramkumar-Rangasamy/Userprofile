
import React from 'react'
import "./blogs.css";

import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

import AddIcon from "./assets/plus.png";

import BlogCard from './Blog/BlogCard';
import RelatedPost from './widgets/RelatedPost';
import Tags from './widgets/Tags';
import MostReads from './widgets/MostReads';
import Categories from './widgets/Categories';

const Blog = () => {
  return (
      <div className="dashboard-blogs-container">
        <h2 className="blogs-title">Blogs</h2>
        <div className='review-scroll'>
          <div className="blogs-cnt">
            <div className="bloglist-cover">
              <div className="thoughts-cnt">
                <input
                  type="text"
                  className="thoughts-input"
                  placeholder="Share your thoughts.."
                />
                <div className="add-btn">
                  <img src={AddIcon} alt="icon" className="add-icon" />
                </div>
              </div>
              <div className="blog-list-cnt">
                <BlogCard/>
              </div>
            </div>
            <div className="widget-cnt">
              <RelatedPost />
              <Tags/>
              <MostReads />
              <Categories/>   
            </div>
          </div>
        </div>  
      </div>
  )
}

export default Blog
