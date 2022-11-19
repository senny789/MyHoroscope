import React from "react";
import { useEffect } from "react";
import { useState, useRef, useCallback } from "react";

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
import { Loading } from "./Loading";
import Sign from "./Sign";
const ShowSigns = () => {
  const [data, setData] = useState("");
  const [sign, setSign] = useState("");
  const [selected, setSelected] = useState(false);
  const Clicked = useRef();
  const formHandle = useCallback(async () => {
    if (sign !== "") {
      fetch(
        `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=today`,
        {
          method: "POST",
          headers: {
            "X-RapidAPI-Key":
              "674b3f6717msh776275b8591a43cp18e933jsn5e2f667d57c9",
            "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
          },
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((dat) => {
          setData(dat);
        });
    }
  }, [sign]);
  useEffect(() => {
    if (sign !== "") {
      formHandle();
    }
  }, [sign, formHandle]);
  const handleClick = async (e) => {
    setSelected(true);
    setSign(e.target.classList.value);
  };
  return (
    <>
      {!data ? (
        selected === false ? (
          <div className="showSigns" onClick={handleClick} ref={Clicked}>
            <div className="grid-item">
              <img src={aries} alt="aries" className="aries" />
              <h1 className="aries">Aries</h1>
            </div>
            <div className="grid-item">
              <img src={taurus} alt="taurus" className="taurus" />
              <h1 className="taurus">Taurus</h1>
            </div>
            <div className="grid-item">
              <img src={gemini} alt="gemini" className="gemini" />
              <h1 className="gemini">Gemini</h1>
            </div>
            <div className="grid-item">
              <img src={cancer} alt="cancer" className="cancer" />
              <h1 className="cancer">Cancer</h1>
            </div>
            <div className="grid-item">
              <img src={leo} alt="leo" className="leo" />
              <h1 className="leo">Leo</h1>
            </div>
            <div className="grid-item">
              <img src={virgo} alt="virgo" className="virgo" />

              <h1 className="virgo">Virgo</h1>
            </div>
            <div className="grid-item">
              <img src={libra} alt="libra" className="libra" />
              <h1 className="libra">Libra</h1>
            </div>
            <div className="grid-item">
              <img src={scorpio} alt="scorpio" className="scorpio" />

              <h1 className="scorpio">Scorpio</h1>
            </div>
            <div className="grid-item">
              <img
                src={sagittarius}
                alt="sagittarius"
                className="sagittarius"
              />

              <h1 className="sagittarius">Sagittarius</h1>
            </div>
            <div className="grid-item">
              <img src={capricorn} alt="capricorn" className="capricorn" />
              <h1 className="capricorn">Capricorn</h1>
            </div>
            <div className="grid-item">
              <img src={aquarius} alt="aquarius" className="aquarius" />
              <h1 className="aquarius"> Aquarius</h1>
            </div>
            <div className="grid-item">
              <img src={pisces} alt="pisces" className="pisces" />
              <h1 className="pisces">Pisces</h1>
            </div>
          </div>
        ) : (
          <div className="sign-card">
            <Loading />
          </div>
        )
      ) : (
        <div className="sign-card">
          <Sign
            data={data}
            sign={sign}
            setData={setData}
            setSelected={setSelected}
            setSign={setSign}
          />
        </div>
      )}
    </>
  );
};

export default ShowSigns;
