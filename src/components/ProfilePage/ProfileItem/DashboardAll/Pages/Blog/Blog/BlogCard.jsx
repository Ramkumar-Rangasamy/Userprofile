import React, { useState } from "react";
import DetailedBlog from "./DetailedBlog";
import BlogDetails from "./BlogDetails";
import PostComment from "./PostComment";

const BlogCard = () => {
let [showBlogDetails, setShowBlogDetails] = useState(false)

  return (
    <>
    <div className="blog-card-cnt" onClick={(e)=>{
      e.preventDefault();
      if(showBlogDetails){
        setShowBlogDetails(false)
      }
      else{
        setShowBlogDetails(true)
      }
    }} >
      <img
        src="https://s3-alpha-sig.figma.com/img/a090/4ed3/75794b707ee77d9722968ddc31d203bd?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HaCdcKMKsgQv0ZniCZsvbt-RwhCXFrc8Qqso-TrXkVHSFKEMEsLraw5GGUMEfJsQozkI42YWBwd2b8iGnlO6jcBUNpQmF6lDbT2oSB~yXKdCpWqEB2nZeJtFp6yPYX~WjK5h37-8XdkCvnIS5CVGEsugC~Zbx-pzMnQHwAC730HhwBGVwZlAT1YRLuRmBeOKGT--oYhSVrjhbAHE699GYFHd2a-pCLimIThoI~8y17D3hV5pAPGF1qyydGn3mBCyE0ZOSb5Wj261KsXk9oArb7FzdnXCzgVbkfIJpkkS14yFO64D~iqtpUB1mOf8r92gJr~PMCWhsquWTlM9lIQZhg__"
        alt="image"
        className="blog-card-img"
      />
      <div className="blog-card-profileInfo-cnt">
        <div className="profileInfo-cnt">
          <img
            src="https://s3-alpha-sig.figma.com/img/f517/b4ae/8bc01705db24818a0614f477daff407d?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AGjOunBXymvwD9LGXX~VS8mRU6V5cCTMJfW9N1-3wHxJK3HeZDrMuPN6D4xVBMbhlFsl4gYNVJQ3R3yKqUIQLty3j~mUumaS4Jjt0fSPJ~2IR2tDl3csTaKj706WXol0v4~BLqZzQI2kRI1uRgKs03As8IK17TVozC9ARH~fXUxrfCj6grOC1qQiZrcFGVxVDo7B9nvGCNw4F9EEKPjn7~SL7YSZBXItPL2Ngidg7oDUgiFnGI4qHWZncBO4w25XfjBoTew0co7~sSF26GQM31RATdVnLLMPmRGW8v0Z8wzodreWJlBCY~XCjPeeeLkEaxX9teW-Y4yhf-Z9ln6lIw__"
            alt="profile-img"
            className="blog-card-profile-img"
          />
          <div className="profileInfo">
            <h4>Lorem Ipsum</h4>
            <p>M.B.B.S ,Diabetologist</p>
          </div>
        </div>
        <div className="date-info-cnt">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 4H3C1.89543 4 1 4.89543 1 6V17C1 18.1046 1.89543 19 3 19H17C18.1046 19 19 18.1046 19 17V6C19 4.89543 18.1046 4 17 4Z"
              stroke="#333448"
              stroke-opacity="0.5"
            />
            <path
              d="M1 8C1 6.114 1 5.172 1.586 4.586C2.172 4 3.114 4 5 4H15C16.886 4 17.828 4 18.414 4.586C19 5.172 19 6.114 19 8H1Z"
              fill="#333448"
              fill-opacity="0.5"
            />
            <path
              d="M5 1V4M15 1V4"
              stroke="#333448"
              stroke-opacity="0.5"
              stroke-linecap="round"
            />
          </svg>
          <p className="blue-text">05 Sep 2022</p>
        </div>
      </div>
      <div className="blog-content-preview-cnt">
        <h4>Simple Changes That Lowered My Mom's Blood Pressure</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
      </div>
      <div className="readMore-cnt">
        <h4>Read more in 8 Minutes</h4>
        <svg
          width="16"
          height="8"
          viewBox="0 0 16 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z"
            fill="#0167FF"
          />
        </svg>
      </div>
    </div>
    <div className="blogdetailstransition" style={{ display: showBlogDetails? 'block': 'none',}}>
    <BlogDetails></BlogDetails>
    <PostComment></PostComment>
    </div>
    </>
  );
};

export default BlogCard;
