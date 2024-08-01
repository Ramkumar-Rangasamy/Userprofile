import React from "react";
import WidgetCard from "./WidgetCard";

const MostReads = () => {
  return (
    <div className="related-post-cnt">
      <div className="profileInfo related-post-head">
        <h4>Most Reads</h4>
        <p style={{ color: "#0167ff", cursor: "pointer" }}>Show All</p>
      </div>
      <div className="suggestion-List">
        <WidgetCard />
        <WidgetCard />
        <WidgetCard />
      </div>
    </div>
  );
};

export default MostReads;
