import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../assets/images/slide1.jpeg";
import slider2 from "../../assets/images/slide2.jpg";
import './slike.css'
const Slick = () => {
    const slider = [slider1, slider2];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="px-8   ">
    <Slider {...settings}>
   {
    slider.map((item,index)=>
    (
      <img key={index} className="aspect--w-16 aspect-h-9 text-black" src={item} alt="" />
    ))
   }
   
  </Slider>
  </div>
  )
}

export default Slick
