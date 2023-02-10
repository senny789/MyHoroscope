import React from "react";
import "./style.css";
import { useState } from "react";

import { Home } from "./components/Home";

const App = () => {
  const [showSigns, setShowSigns] = useState(false);

  return (
    <div
      id="main"
      onClick={(e) => {
        if (e.target.id !== "starsign") {
          setShowSigns(false);
        }
      }}
    >
      <Home showSigns={showSigns} setShowSigns={setShowSigns} />
    </div>
  );
};
export default App;
