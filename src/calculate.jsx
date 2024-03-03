import React, { useState } from "react";
import "./multiplication_table.css";

function Calculate() {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [state, setState] = useState(" ");

  const result = number.map((z) => (
    <div key={z}>
      {state} x {z} = {state * z}
    </div>
  ));

  return (
    <div>
      <select
        className="select"
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      >
        {number.map((item) => (
          <option>{item}</option>
        ))}
      </select>
      <div>{result}</div>
    </div>
  );
}

export default Calculate;
