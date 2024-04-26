"use client"
import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    is2xl: false,
  });

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 640
        ? setScreenSize((prevState) => ({ ...prevState, isSm: true }))
        : window.innerWidth < 768
        ? setScreenSize((prevState) => ({ ...prevState, isMd: true }))
        : window.innerWidth < 1024
        ? setScreenSize((prevState) => ({ ...prevState, isLg: true }))
        : window.innerWidth < 1280
        ? setScreenSize((prevState) => ({ ...prevState, isXl: true }))
        : setScreenSize((prevState) => ({ ...prevState, is2xl: true }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return screenSize;
};

export default useScreenSize