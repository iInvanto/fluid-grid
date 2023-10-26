import React, { useState } from "react";
import Box from "./component/Box";

const DEFAULT_COLUMNS = 3;
const COLUMN_OPTIONS = [3, 4, 5, 6];

const Grid = () => {
  const [columns, setColumns] = useState(DEFAULT_COLUMNS);
  const [boxData, setBoxData] = useState({
    boxes: [],
    nextIndex: 1,
  });

  const handleColumnChange = (e) => {
    const newColumns = parseInt(e.target.value, 10);
    setColumns(newColumns);
    setBoxData({ boxes: [], nextIndex: 1 });
  };

  const addBox = () => {
    setBoxData((prevData) => ({
      boxes: [...prevData.boxes, prevData.nextIndex],
      nextIndex: prevData.nextIndex + 1,
    }));
  };

  const removeBox = (index) => {
    setBoxData((prevData) => ({
      boxes: prevData.boxes.filter((boxIndex) => boxIndex !== index),
      nextIndex: prevData.nextIndex,
    }));
  };

  const resetGrid = () => {
    setColumns(DEFAULT_COLUMNS);
    setBoxData({ boxes: [], nextIndex: 1 });
  };

  return (
    <div className="grid-container">
      <div className="controls">
        <div className="form-group">
          <label htmlFor="columnsSelect">Select Number of Columns:</label>
          <select
            id="columnsSelect"
            onChange={handleColumnChange}
            value={columns}
          >
            {COLUMN_OPTIONS.map((num) => (
              <option value={num}>{num} Columns</option>
            ))}
          </select>
        </div>
        <div className="gap" />
        <div className="button-group">
          <button className="add-box" onClick={addBox}>
            Add Box
          </button>
          <button className="reset" onClick={resetGrid}>
            Reset
          </button>
        </div>
      </div>
      <div className="gap" />
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {boxData.boxes.map((index) => (
          <Box key={index} index={index} removeBox={removeBox} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
