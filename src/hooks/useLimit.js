import { useState, useEffect } from "react";

const useLimit = () => {
  const [limit, setLimit] = useState(12);
  const [countOfAdd, setCountOfAdd] = useState(3);
  const [width, setWhidth] = useState(window.innerWidth);

  useEffect(() => {
    if (width > 1000) {// значения для 1280px
      setLimit(12);
      setCountOfAdd(3);
    } else if (width > 640) {//значения для 768px
      setLimit(10);
      setCountOfAdd(2);
    } else if (width > 320) {//значения для 320-480
      setLimit(5);
      setCountOfAdd(2);
    }

    const handleResize = () => {
      setTimeout(() => {
        setWhidth(window.innerWidth);
      }, 1000);
    };

    window.addEventListener("resize", handleResize);
    
  }, [width]);

  return {
    limit,
    setLimit,
    countOfAdd,
  };
};

export default useLimit;
