import React, { useState } from "react";
import BlogInput from "../AddBlog/BlogInput";

const PostComment = () => {
  const [iscurrentFocus, setIscurrentFocus] = useState(null);
  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    comment: "",
    save: false,
  });

  return (
    <div className="post-comment-cnt">
      <h4 className="comments-title">Leave a Comment</h4>
      <div className="comment-top-input-flex">
        <BlogInput
          currentFocus={iscurrentFocus}
          setcurrentFocus={(label) => setIscurrentFocus(label)}
          updateValue={(value) => setNewComment({ ...newComment, name: value })}
          value={newComment.name}
          label="name"
          placeholder={"Name"}
        />

        <BlogInput
          currentFocus={iscurrentFocus}
          setcurrentFocus={(label) => setIscurrentFocus(label)}
          updateValue={(value) =>
            setNewComment({ ...newComment, email: value })
          }
          value={newComment.email}
          label="email"
          placeholder={"Email"}
        />
      </div>
      <div className="blog-long-input-cnt comment-input">
        <textarea
          type="text"
          value={newComment.comment}
          className="blog-short-input"
          onFocus={() => setIscurrentFocus("comment")}
          onChange={(e) =>
            setNewComment({ ...newComment, comment: e.target.value })
          }
        />
        <p
          className="input-placeholder"
          style={{
            top:
              newComment.comment || iscurrentFocus === "comment"
                ? "-0.8rem"
                : null,
          }}
        >
          Comment
          <span style={{ color: "red" }}> *</span>
        </p>
      </div>
      <div className="comment-term-conformation-cnt">
        <input
          type="checkbox"
          checked={newComment.save}
          onChange={() =>
            setNewComment({ ...newComment, save: !newComment.save })
          }
          className="comment-checkbox"
        />
        <p className="comment-txt" style={{ color: "#272848" }}>
          Save my name, email, and website in this browser for the next time I
          comment.
        </p>
      </div>
    </div>
  );
};

export default PostComment;
