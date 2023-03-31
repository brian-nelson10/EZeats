import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "../Image";
// import imgWeb from "../../assets/web/1.webp";
// import img from "../../assets/carousel/1.JPG";
import "../Section1/section.css";
const Section4 = () => {
  const { scrollYProgress } = useScroll();

  const leftX = useTransform(scrollYProgress, [0, 1], [-1400, 0]);
  const rightX = useTransform(scrollYProgress, [0.5, 1], [900, 0]);

  return (
    <>
    <section className="h-[60rem] px-[2rem] gradient3 z-30">
        <div className="container mx-[2rem] ml-[4rem] items-center justify-center text-center bg-contact bg-fixed">
           
      <motion.div
        style={{ x: leftX }}
        initial={{opacity: 0}}
        whileInView={{opacity: [.1,.3,.5,.7,.9,1] , transition: {duration: 1, delay: 1}}}
        className="contactText"
      >
        <div className="font-mari text-[10rem] tracking-wide text-[#D8C29D] contactText">Contact Us</div>
      </motion.div>

      <motion.div
        style={{ x: rightX }}
        initial={{opacity: 0}}
        whileInView={{opacity: [.1,.3,.5,.7,.9,1] , transition: {duration: 1, delay: 1}}}
        className="z-50 contactText"
      >
        <h1 className="font-mari text-[10rem] tracking-wide text-[#D8C29D] contactText">Order Online</h1>
      </motion.div>
      {/* <motion.div className="contactImg2 -mt-[20rem] " style={{y: rightX}}> */}
      {/* <Image
                srcSet={imgWeb}
                fallback={img}
                className="w-[60%] h-[30%] items-center jusitfy-center ml-[20rem] -mt-[20rem] contactImg2"
                />
                </motion.div> */}
      </div>
      </section>
      {/* <motion.div className="contactImg2 -mt-[20rem]" style={{y: rightX}}> 
            <Image
                srcSet={imgWeb}
                fallback={img}
                className="w-[60%] h-[30%] items-center jusitfy-center ml-[20rem] -mt-[90rem] contactImg2"
                />
                </motion.div> */}
    </>
  );
};
export default Section4;