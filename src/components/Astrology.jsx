import React from "react";
import { useState } from "react";
import Form from "./Form";

import Sign from "./Sign";
export const Astrology = (props) => {
  const [data, setData] = useState("");
  const [sign, setSign] = useState("");

  return (
    <div className="astro">
      {data ? (
        <div id="sign-card">
          <Sign data={data} sign={sign} setData={setData} />
        </div>
      ) : (
        <div id="main-card">
          <Form
            setData={setData}
            setSign={setSign}
            showSigns={props.showSigns}
            setShowSigns={props.setShowSigns}
          />
        </div>
      )}
    </div>
  );
};
