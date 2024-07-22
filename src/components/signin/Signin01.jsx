import { React, useState, useEffect } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import {imageData} from "./imageData";

// 회원가입 튜토리얼 스와이프 (선택했을 때 움직임, 무한 반복)

const renderSlides = imageData.map((image, index) => (
    <img key={index} src={image.img} alt={image.alt} />
  ));

const Signin01 = () => {

 const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <div className="flex justify-center items-center py-5 px-3">
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          selectedItem={imageData[currentIndex]}
          onChange={handleChange}
          className="w-[400px] lg:hidden">
          {renderSlides}
        </Carousel>
    </div>
  );
};

export default Signin01;

