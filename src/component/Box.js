import React from "react";

const Box = ({ index, removeBox }) => {
  return (
    <div className="box">
      <span className="box-index">Box {index}</span>
      <button className="remove-button" onClick={() => removeBox(index)}>
        X
      </button>
    </div>
  );
};

export default Box;
