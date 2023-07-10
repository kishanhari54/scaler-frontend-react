import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(function () {
    function handleResize(event) {
      setWindowSize({
        width: event.target.innerWidth,
        height: event.target.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    return () => {
      //UnMounting Phase Function
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowSize;
}
