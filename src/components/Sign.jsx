import React from "react";

import {
  aquarius,
  virgo,
  scorpio,
  sagittarius,
  taurus,
  pisces,
  aries,
  cancer,
  libra,
  leo,
  gemini,
  capricorn,
} from "./Images";
const Sign = ({ setData, data, sign, setSelected, setSign }) => {
  const Signs = [
    aquarius,
    virgo,
    scorpio,
    sagittarius,
    taurus,
    pisces,
    aries,
    cancer,
    libra,
    leo,
    gemini,
    capricorn,
  ];
  const img = Signs.filter((sgn) => {
    return sgn.includes(sign);
  });
  return (
    <div className="sign-details">
      <h3
        id="back"
        onClick={() => {
          setSelected(false);
          setData("");
          setSign("");
        }}
      >
        Go Back
      </h3>
      <h1 id="sign-head">
        {sign} ({data.date_range})
      </h1>
      <img src={img} alt={sign}></img>
      <h2> Todays message :{" " + data.current_date}</h2>
      <h4> {data.description}</h4>
      <h3>
        <span>Mood :</span>
        {data.mood}
      </h3>
      <h3>
        <span>Compatibility :</span>
        {data.compatibility}
      </h3>
      <h3>
        <span>Color :</span>
        {data.color}
      </h3>
      <h3>
        <span>Lucky Number :</span>
        {data.lucky_number}
      </h3>
      <h3>
        <span>Lucky Time :</span>
        {data.lucky_time}
      </h3>
    </div>
  );
};
export default Sign;
