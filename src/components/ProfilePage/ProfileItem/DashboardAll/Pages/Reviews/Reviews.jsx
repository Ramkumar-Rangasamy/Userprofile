import React from 'react'
import "./reviews.css";
import ReviewElement from "./ReviewElement";

const Reviews = () => {
    return (
        <div className="reviews-page">
           <div className="reviews-cnt">
            <div className="demo-top-component"></div>
            <div className="original-reviews"> 
              <h2 className="reviews-title">Reviews</h2>
              <div className="reviews-list-cnt">
                <ReviewElement />
                <ReviewElement />
              </div>
            </div>
          </div>
         </div>
      );
    };
export default Reviews