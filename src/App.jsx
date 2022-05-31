import React, { useState } from "react";

import "./App.css";

export function replaceCamelWithSpace(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [clicked, setClicked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };

  const tickHandler = () => {
    setDisabled(!disabled);
  };

  return (
    <div className="App">
      <label>
        <input type="checkbox" onClick={() => tickHandler()} />
        Disable
      </label>
      <br />
      <button
        disabled={disabled}
        className="button"
        style={
          disabled
            ? { backgroundColor: "lightGrey" }
            : clicked
            ? { color: "cornflowerblue", borderColor: "cornflowerblue" }
            : { color: "tomato", borderColor: "tomato" }
        }
        onClick={() => clickHandler()}
      >
        {clicked ? "Change to red" : "Change to blue"}
      </button>
    </div>
  );
}

export default App;
