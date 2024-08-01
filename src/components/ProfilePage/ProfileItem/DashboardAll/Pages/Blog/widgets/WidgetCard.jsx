import React from "react";

const WidgetCard = () => {
  return (
    <div className="widget-card">
      <img
        src="https://s3-alpha-sig.figma.com/img/4575/18c4/caea4d9e6da616048af279345be73770?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c22YIQhWQlE04yv~t1rg3VvGxr1hr9bJSswcZwQrfnaKwhCYdpHjKYt0x83FqARjBMzj8sETxD3U6ha39cgMRJsfyvI5Ew4a9o5vKH6hiljGyevGuG7Mu~u6QYloz3JR~hwOGzjJBGRrpug7XKTtA~sDbNTRut~ggKV8DLGd0I7SdEFg2EaqYWtBoLfZ926FSJf88Uoy~GooZjNI3-JlCpJavC4x4eo6THQLCKKGzqLk~o554K4B3o4pYSkUqj~uHa8smmiejwP1kdvGtfNWSWPrAExwLL8Zm8c~hiPlMgB5OgrUSMS40u96d3mu10lAPvMXvLQi6fy9Qrq3xXiGww__"
        alt="post-img"
        className="widget-img-preview"
      />
      <div className="post-details-cnt">
        <div className="card-tag-time">
          <p className="post-preview-tag">Health</p>
          <p className="post-preview-date">15 Jun 2023</p>
        </div>
        <h4>Lorem ipsum dolor sit amet, consectetur </h4>
        <div className="widget-card-readMore-cnt">
          <h4 style={{ color: "#0167ff" }}>Read more in 8 Minutes</h4>
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
    </div>
  );
};

export default WidgetCard;
