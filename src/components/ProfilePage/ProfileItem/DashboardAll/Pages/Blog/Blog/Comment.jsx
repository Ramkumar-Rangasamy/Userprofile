import React from "react";

const Comment = () => {
  return (
    <div className="comment-cnt">
      <img
        src="https://s3-alpha-sig.figma.com/img/ea4c/73d0/19e43707a3c8797a72b8069971487eae?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NKHKQm6CsXhKGcEvUNJtyikwlMylz0n~wvWTWJG6YE7TaX-a783TkCXvxPNSq8s47WzKxfqItBELg~rkYMB7hz6sE6l~GYxE2TZwvh8tP01x1X61lDqV3qkin051bMGvAgoryfIVAixL3hid7MxIsxjSW89HqK76y-tIt4G1FwmbV5M8qJDiiudM8CIEjW2vXuAGHfjy9wV5t~EfiXU~HcZKyUjMWLEvdquXhESgB~1iihhdtv5To0PUIEa7KrQKQyfkXmirMYbG1S9TIFC51gnH2ynVjMhavKl-fSgv6Rc3YXEaSCiIpZ6atvsquEwH8k672V4nRrxn4N6qadXoQA__"
        alt="profile-icon"
        className="profile-img"
      />
      <div className="comment">
        <p className="comments-title">Diana bailey</p>
        <p className="comment-time-txt">2 weeks ago</p>
        <p className="comment-txt">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem aperiam incidunt a id voluptas nemo. Facere fugit
          deserunt consequatur maiores adipisci ullam commodi! Expedita
          pariatur, eos natus nobis eum quidem?
        </p>
      </div>
      <div className="replay-btn">
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.1875 4.45312L5.3125 0.890625C5.66406 0.585938 6.25 0.84375 6.25 1.33594V3.21094C10 3.23438 13 4.00781 13 7.57031C13 9 12.0625 10.4297 11.0312 11.1797C10.7266 11.4141 10.2578 11.1094 10.375 10.7344C11.4297 7.33594 9.88281 6.44531 6.25 6.39844V8.4375C6.25 8.92969 5.66406 9.1875 5.3125 8.88281L1.1875 5.32031C0.929688 5.08594 0.929688 4.6875 1.1875 4.45312Z"
            fill="#0167FF"
          />
        </svg>
        <p className="blue-text">Replay</p>
      </div>
    </div>
  );
};

export default Comment;
