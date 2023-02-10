import React from "react";
import { useEffect } from "react";
import { useState, useRef, useCallback } from "react";
import { Signcard } from "./Signcard";

import { AnimatePresence, motion } from "framer-motion";
import Sign from "./Sign";
const ShowSigns = () => {
  const [data, setData] = useState("");
  const signs = [
    "aquarius",
    "virgo",
    "scorpio",
    "sagittarius",
    "taurus",
    "pisces",
    "aries",
    "cancer",
    "libra",
    "leo",
    "gemini",
    "capricorn",
  ];
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

    setSign(e.target?.classList.value.split(" ")[0]);
  };
  const renderSigns = signs.map((sign) => {
    return <Signcard sign={sign} />;
  });
  return (
    <>
      <AnimatePresence>
        {!data ? (
          selected === false ? (
            <motion.div
              key="selectSign"
              initial={{
                x: "-100%",
                opacity: "0.5",
                scale: "0.5",
              }}
              animate={{
                x: "0%",
                opacity: "1",
                scale: "1",
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              exit={{
                x: "-100%",

                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
              className="showSigns"
              onClick={handleClick}
              ref={Clicked}
            >
              {renderSigns}
            </motion.div>
          ) : null
        ) : (
          <motion.div
            key="sign"
            initial={{
              x: "100%",
              opacity: "0.5",
              scale: "0.5",
            }}
            animate={{
              x: "0%",
              opacity: "1",
              scale: "1",
            }}
            transition={{
              duration: 0.5,
            }}
            className="sign-card"
          >
            <Sign
              data={data}
              sign={sign}
              setData={setData}
              setSelected={setSelected}
              setSign={setSign}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ShowSigns;
