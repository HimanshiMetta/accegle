import React, { useState } from "react";
import pic from "./accegle.jpg";
import { nameSet } from "./names.js";

const App = () => {
  const [options, setOptions] = useState([]);

  const updateFilter = (e) => {
    let searchValue = e.target.value;
    setOptions(
      nameSet.filter((name) => {
        return name.toLowerCase().startsWith(searchValue.toLowerCase());
      })
    );
  };

  return (
    <>
      <img
        src={pic}
        alt="accegle"
        style={{
          paddingLeft: "31%",
          paddingTop: "150px",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          paddingTop: "30px",
        }}
      >
        <input
          style={{
            width: "500px",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "20px",
            outline: "none",
          }}
          type="text"
          id="dropdown"
          onChange={(e) => updateFilter(e)}
          list="options"
        />
        <datalist id="options">
          {options.map((option, index) => (
            <option key={index} value={option} />
          ))}
        </datalist>
      </div>
    </>
  );
};

export default App;
