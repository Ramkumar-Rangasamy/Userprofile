import Quill from "quill";
import React, { useRef, useState } from "react";
import BlogInput from "./BlogInput";
import Editor from "./Editor";

const AddNewBlog = () => {
  const [iscurrentFocus, setIscurrentFocus] = useState(null);
  const [newBlogdata, setNewBlogdata] = useState({
    title: "",
    author: "",
    category: "",
    subCategory: "",
    tags: "",
    status: "",
    description: "",
    image: null,
  });

  console.log(iscurrentFocus, newBlogdata);

  const Delta = Quill.import("delta");
  
  const quillRef = useRef();
  const fileInputRef = useRef(null);

  return (
    <div className="create-blog-cnt">
      <div className="blog-details-cnt">
        <BlogInput
          currentFocus={iscurrentFocus}
          setcurrentFocus={(label) => setIscurrentFocus(label)}
          updateValue={(value) =>
            setNewBlogdata({ ...newBlogdata, title: value })
          }
          value={newBlogdata.title}
          label="title"
          placeholder={"Blog Title"}
        />

        <BlogInput
          currentFocus={iscurrentFocus}
          setcurrentFocus={(label) => setIscurrentFocus(label)}
          updateValue={(value) =>
            setNewBlogdata({ ...newBlogdata, author: value })
          }
          value={newBlogdata.author}
          label="author"
          placeholder={"Author Name"}
        />

        <BlogInput
          currentFocus={iscurrentFocus}
          setcurrentFocus={(label) => setIscurrentFocus(label)}
          updateValue={(value) =>
            setNewBlogdata({ ...newBlogdata, category: value })
          }
          value={newBlogdata.category}
          label="category"
          placeholder={"Blog Category"}
        />

        <BlogInput
          currentFocus={iscurrentFocus}
          setcurrentFocus={(label) => setIscurrentFocus(label)}
          updateValue={(value) =>
            setNewBlogdata({ ...newBlogdata, subCategory: value })
          }
          value={newBlogdata.subCategory}
          label="subCategory"
          placeholder={"Blog Sub Category"}
        />

        <BlogInput
          currentFocus={iscurrentFocus}
          setcurrentFocus={(label) => setIscurrentFocus(label)}
          updateValue={(value) =>
            setNewBlogdata({ ...newBlogdata, tags: value })
          }
          value={newBlogdata.tags}
          label="tags"
          placeholder={"Tags (separated with a comma)"}
        />
        <div className="status-input-cnt">
          <p
            className="input-placeholder"
            style={{ position: "relative", paddingLeft: 0 }}
          >
            Blog status <span style={{ color: "red" }}> *</span>
          </p>

          <div className="select-option-cnt">
            <label htmlFor="check" className="checkbox-cnt">
              <input
                type="checkbox"
                id="check"
                className="checkbox"
                checked={newBlogdata.status === "active"}
                onChange={() =>
                  setNewBlogdata({ ...newBlogdata, status: "active" })
                }
              />
              <p>Active</p>
            </label>
            <label htmlFor="check" className="checkbox-cnt">
              <input
                type="checkbox"
                id="check"
                className="checkbox"
                checked={newBlogdata.status === "notActive"}
                onChange={() =>
                  setNewBlogdata({ ...newBlogdata, status: "notActive" })
                }
              />
              <p>In Active</p>
            </label>
          </div>
        </div>
      </div>
      <div className="text-editor-cnt">
        <Editor
          ref={quillRef}
          onTextChange={(value) =>
            setNewBlogdata({ ...newBlogdata, description: value })
          }
        />
      </div>
      <div className="blog-long-input-cnt">
        <input
          type="file"
          ref={fileInputRef}
          // value={value}
          className="file-input"
          onChange={(e) =>
            setNewBlogdata({ ...newBlogdata, image: e.target.files[0] })
          }
        />
        <p className="absolute-file-name">{newBlogdata?.image?.name}</p>
        <div
          className="choose-file-label"
          onClick={() => fileInputRef.current.click()}
        >
          <p>Choose File</p>
        </div>
        <p
          className="input-placeholder"
          style={{
            top: newBlogdata.image ? "-0.8rem" : null,
          }}
        >
          Image
          <span style={{ color: "red" }}> *</span>
        </p>
      </div>
      <div className="btns-cnt">
        <div className="action-btn">
          <p>Publish Blog</p>
        </div>
        <div
          className="action-btn"
          style={{ background: "#3334480D", color: "black" }}
        >
          <p>Cancel</p>
        </div>
      </div>
    </div>
  );
};

export default AddNewBlog;
