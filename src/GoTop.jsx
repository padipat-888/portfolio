import React from 'react'
import { useState, useEffect } from "react";
import { ImArrowUp2 } from "react-icons/im";

const GoTop = () => {

  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const goToTop = () => {
    // document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  // const goTop = () => {
  //   window.scrollTo(0,0)
  // };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button onClick={goToTop} 
          className={` ${
          showButton ? `inline-block` : `hidden`
          } fixed bottom-[40px] right-[40px] p-3 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out`}>
          <ImArrowUp2 />
        </button> 
      )}
    </>
  )
}

export default GoTop