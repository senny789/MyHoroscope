import React from "react";
import { useState } from "react";

import ShowSigns from "./ShowSigns";
export const Home = (props) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div
      className="Home"
      onClick={(e) => {
        if (toggle) {
          document.getElementById("main").style.opacity = "0.98";
          setTimeout(() => {
            document.getElementById("main").style.opacity = "1";
          }, 50);
          setToggle(false);
        }
      }}
    >
      {toggle ? (
        <>
          <h1>Hello!</h1>
          <h2>Click to check your horoscope.</h2>
        </>
      ) : (
        <ShowSigns
          showSigns={props.showSigns}
          setShowSigns={props.setShowSigns}
        />
      )}
    </div>
  );
};
