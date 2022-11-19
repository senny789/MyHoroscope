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
const Sign = ({ setData, data, sign, setSelected }) => {
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
  console.log(data);
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
        }}
      >
        Go Back
      </h3>
      <h1 id="sign-head">
        {sign} ({data.date_range})
      </h1>
      <img src={img} alt={sign}></img>
      <h2> Todays message: {data.current_date}</h2>
      <h3> {data.description}</h3>

      <h2>
        <span>Mood :</span>
        {data.mood}
      </h2>
      <h2>
        <span>Compatibility :</span>
        {data.compatibility}
      </h2>
      <h2>
        <span>Color :</span>
        {data.color}
      </h2>
      <h2>
        <span>Lucky Number :</span>
        {data.lucky_number}
      </h2>
      <h2>
        <span>Lucky Time :</span>
        {data.lucky_time}
      </h2>
    </div>
  );
};
export default Sign;
