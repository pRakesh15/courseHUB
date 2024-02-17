import React, { useEffect, useState } from "react";
import slider1 from "../../assets/images/slide1.jpeg";
import slider2 from "../../assets/images/slide2.jpg";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
let count = 0;
const Slider = () => {
  const slider = [slider1, slider2];
  const [index, setIndex] = useState(0);

  //logic for auto slide
  useEffect(() => {
    startSlider();
  }, []);

  const startSlider = () => {
    setInterval(() => {
    //   handelNext();
    }, 3000);
  };


  
//logic for click Slide
  const handelNext = () => {
    count = (count + 1) % slider.length;
    setIndex(count);
  };
  const handelPrev = () => {
    const slideLength=slider.length;
    count=(index+slideLength-1)%slideLength;
    setIndex(count)
  };


  return (
    <div className="w-full select-none flex justify-center">
      <div className="aspect--w-16 aspect-h-9">
        <img src={slider[index]} alt="" />
      </div>
      <div className="absolute w-full top-1/3 transform -translate-y-1/2 px-10 flex justify-between items-center">
        <button onClick={handelNext} className="text-2xl">
          <FaChevronCircleLeft />
        </button>
        <button onClick={handelPrev} className="text-2xl">
          <FaChevronCircleRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
