import React from "react";
import "./App.css";
import { useState } from "react";

import { Home } from "./components/Home";

const App = () => {
  const [showSigns, setShowSigns] = useState(false);

  return (
    <div
      id="main"
      onClick={(e) => {
        console.log(e.target.id);
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
