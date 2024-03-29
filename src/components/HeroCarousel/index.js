import * as React from "react";
import Carousel from "framer-motion-carousel";
import Img from "../../assets/carousel/1.JPG";
import Img2 from "../../assets/carousel/2.JPG";
import Img3 from "../../assets/carousel/3.JPG";
// import Img4 from "../../assets/carousel/4.JPG";
// import Img5 from "../../assets/carousel/5.JPG";

const HeroCarousel = () => (
    <div className="h-[50rem] w-screen lg:w-screen lg:h-screen z-10">
    <Carousel 
        
        interval="6000"
        className="z-10"
        >
      <img
          draggable="false"
          className="object-cover h-[50rem] lg:h-auto z-10"
          src={Img}
          alt=""
        />
        <img
          draggable="false"
          className="object-cover h-[50rem] lg:h-auto"
          src={Img2}
          alt=""
        />
        <img
          draggable="false"
          className="object-cover h-[50rem] lg:h-auto"
          src={Img3}
          alt=""
        />
        {/* <img
          draggable="false"
          className="object-fill"
          src={Img4}
          alt=""
        /> */}
        {/* <img
          draggable="false"
          className="object-cover"
          src={Img5}
          alt=""
        /> */}
    </Carousel>
  </div>
);
export default HeroCarousel;