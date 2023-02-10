import React from "react";
import { motion } from "framer-motion";
export const Loading = () => {
  return (
    <motion.div
      initial={{
        y: "120%",
      }}
      transition={{
        duration: 1,
      }}
      animate={{
        y: "0%",
      }}
    >
      <h1
        style={{
          fontSize: "5rem",
          alignItems: "center",
          color: "white",
        }}
      >
        Loading...
      </h1>
    </motion.div>
  );
};
