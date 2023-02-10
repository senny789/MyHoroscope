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
export const Signcard = ({ sign }) => {
  const images = [
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
  const img = images.filter((img) => {
    return img.includes(sign);
  });
  return (
    <div className={`${sign} grid-item`}>
      <img src={img} alt={`${sign}`} className={`${sign} sign`} />
      <h1 className={`${sign}`}>{sign}</h1>
    </div>
  );
};
