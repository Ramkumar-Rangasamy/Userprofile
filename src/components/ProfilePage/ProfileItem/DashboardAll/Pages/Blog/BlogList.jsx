import React from "react";
import BlogCard from "./Blog/BlogCard";
import AddIcon from "./assets/plus.png";
import RelatedPost from "./widgets/RelatedPost";
import MostReads from "./widgets/MostReads";
import Tags from "./widgets/Tags";
import Categories from "./widgets/Categories";

const BlogList = () => {
  return (
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
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
      <div className="widget-cnt">
        <RelatedPost />
        <Tags/>
        <MostReads />
        <Categories/>   
      </div>
    </div>
  );
};

export default BlogList;
