import React from 'react'
// import Sidebar from '../../Sidebar'
import Blog from './Blog'
import PostComment from './PostComment'

const DetailedBlog = () => {
  return (
    <div className="reviews-page" style={{height:'fit-content'}}>
    {/* <Sidebar /> */}
    <div className="reviews-cnt">
      <div className="demo-top-component"></div>
      <div className="reviews">
        <h2 className="reviews-title">Blogs</h2>
        {/* <AddNewBlog /> */}
        {/* <BlogList /> */}
        <Blog/>
        <PostComment/>
      </div>
    </div>
  </div>
  )
}

export default DetailedBlog