import React from "react";
import assets from "./assets/assets";

const ReviewElement = () => {
  return (
    <div className="review-card">
      <div className="profile-info-cnt">
        <img
          src={assets.Images.Auth_Marquee_1}
          alt="profile-img"
          className="profile-img"
        />
        <div className="profile-infos">
          <h2 className="profile-name">Alexa Laris</h2>
          <div>
            <p className="day">Monday</p>
            <p className="time-info">10:30 Am , 32 Jun 2023</p>
          </div>
          <div className="other-info">
            <img src={assets.Images.Lock} alt="icon" className="icon-image" />
            <p className="day">Diabetes</p>
          </div>
        </div>
      </div>
      <div className="review-cnt">
        <p className="review-text day">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          corrupti natus voluptates, illo dolorem enim repellendus, omnis animi
          sapiente ex deleniti aut aliquam vel tempore. Assumenda fugit omnis
          nostrum placeat.
        </p>
      </div>
      <div className="profile-info-cnt rating-cnt">
        <div className="rating-start-cnt">
          <svg
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.996 23.7842L21.9126 27.9676C23.1793 28.7342 24.7293 27.6009 24.396 26.1676L22.5626 18.3009L28.6793 13.0009C29.796 12.0342 29.196 10.2009 27.7293 10.0842L19.6793 9.40091L16.5293 1.96758C15.9626 0.617578 14.0293 0.617578 13.4626 1.96758L10.3126 9.38424L2.26264 10.0676C0.795971 10.1842 0.195971 12.0176 1.31264 12.9842L7.4293 18.2842L5.59597 26.1509C5.26264 27.5842 6.81264 28.7176 8.0793 27.9509L14.996 23.7842Z"
              fill="#FAC115"
            />
          </svg>
          <svg
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.996 23.7842L21.9126 27.9676C23.1793 28.7342 24.7293 27.6009 24.396 26.1676L22.5626 18.3009L28.6793 13.0009C29.796 12.0342 29.196 10.2009 27.7293 10.0842L19.6793 9.40091L16.5293 1.96758C15.9626 0.617578 14.0293 0.617578 13.4626 1.96758L10.3126 9.38424L2.26264 10.0676C0.795971 10.1842 0.195971 12.0176 1.31264 12.9842L7.4293 18.2842L5.59597 26.1509C5.26264 27.5842 6.81264 28.7176 8.0793 27.9509L14.996 23.7842Z"
              fill="#FAC115"
            />
          </svg>
          <svg
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.996 23.7842L21.9126 27.9676C23.1793 28.7342 24.7293 27.6009 24.396 26.1676L22.5626 18.3009L28.6793 13.0009C29.796 12.0342 29.196 10.2009 27.7293 10.0842L19.6793 9.40091L16.5293 1.96758C15.9626 0.617578 14.0293 0.617578 13.4626 1.96758L10.3126 9.38424L2.26264 10.0676C0.795971 10.1842 0.195971 12.0176 1.31264 12.9842L7.4293 18.2842L5.59597 26.1509C5.26264 27.5842 6.81264 28.7176 8.0793 27.9509L14.996 23.7842Z"
              fill="#FAC115"
            />
          </svg>
          <svg
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.996 23.7842L21.9126 27.9676C23.1793 28.7342 24.7293 27.6009 24.396 26.1676L22.5626 18.3009L28.6793 13.0009C29.796 12.0342 29.196 10.2009 27.7293 10.0842L19.6793 9.40091L16.5293 1.96758C15.9626 0.617578 14.0293 0.617578 13.4626 1.96758L10.3126 9.38424L2.26264 10.0676C0.795971 10.1842 0.195971 12.0176 1.31264 12.9842L7.4293 18.2842L5.59597 26.1509C5.26264 27.5842 6.81264 28.7176 8.0793 27.9509L14.996 23.7842Z"
              fill="#FAC115"
            />
          </svg>
          <svg
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.996 23.7842L21.9126 27.9676C23.1793 28.7342 24.7293 27.6009 24.396 26.1676L22.5626 18.3009L28.6793 13.0009C29.796 12.0342 29.196 10.2009 27.7293 10.0842L19.6793 9.40091L16.5293 1.96758C15.9626 0.617578 14.0293 0.617578 13.4626 1.96758L10.3126 9.38424L2.26264 10.0676C0.795971 10.1842 0.195971 12.0176 1.31264 12.9842L7.4293 18.2842L5.59597 26.1509C5.26264 27.5842 6.81264 28.7176 8.0793 27.9509L14.996 23.7842Z"
              fill="#FAC115"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ReviewElement;
