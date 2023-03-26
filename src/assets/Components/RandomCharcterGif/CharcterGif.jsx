import React, { useState, useEffect } from "react";
import Charcters from "./Charcters.json";
export const CharcterGif = () => {
  const [randomCharcter, setRandomCharcter] = useState({});
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * Charcters.length);
    setRandomCharcter(Charcters[randomIndex]);
  }, []);
  return (
    <img
      style={{ width: "250px" }}
      src={randomCharcter.Charcter}
      alt="batman"
    />
  );
};
