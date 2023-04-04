import React from "react";
import { circOut, motion, useMotionValue, useScroll, useTransform } from "framer-motion";
// import Image from "../Image";
// import imgWeb from "../../assets/web/1.webp";
// import img from "../../assets/carousel/1.JPG";
import garlic from "../../assets/images/garlic.png";
import arugula from "../../assets/images/arugula.png";
import cardamom from "../../assets/images/cardamom.png";
import seeds from "../../assets/images/seed.png";
import pcorn from "../../assets/images/peppercorn.png";
import "../Section1/section.css";
const Section4 = () => {
  const { scrollYProgress } = useScroll();
  const x = useMotionValue(10)
  const rotateY = useTransform(scrollYProgress, [0, 1],  [-200, 200]);
  const rotateYcard = useTransform(scrollYProgress, [0.75, 1], [-200, 200]);
  const rotateYarug = useTransform(scrollYProgress, [0.5, 1], [-100, -200]);
  const rotateYgar = useTransform(scrollYProgress, [0.5, 1], [100, -300])
  const leftX = useTransform(scrollYProgress, [0, 1], [-1400, 0]);
  const rightX = useTransform(scrollYProgress, [0.5, 1], [200, 0]);
  const fallY = useTransform(scrollYProgress, [0, 1], [-2500, 100]);
 
  return (
    <>
    <section className="-mt-[25rem] h-[80rem] px-[2rem] gradient3 pt-[6rem] -mb-[7rem]">
        <div className="container mt-[25rem] mx-[2rem] ml-[4rem] items-center justify-center text-center bg-contact bg-fixed z-20 relative">
           
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
        className="z-50 contactText text-end"
      >
        <h1 className="font-mari text-[10rem] tracking-wide text-[#D8C29D] overflow-hidden contactText">Order Online</h1>
      </motion.div>
      
      </div>
   
      </section>
      <div className="gradient3 -mt-[45rem] z-10"> 
      <motion.div className="-mt-[15rem] " style={{y: fallY}}> 
               <motion.img style={{rotate: rotateYcard}} src={cardamom} className="w-[15%] h-[15%] items-center jusitfy-center ml-[75rem] -mt-[10rem]"
                />
                </motion.div>
                <motion.div className="-mt-[10rem]" style={{y: fallY}}> 
               <motion.img style={{rotate: rotateY}} src={pcorn} className="w-[15%] h-[15%] items-center jusitfy-center ml-[21.5rem] -mt-[10rem]"
                />
                </motion.div>
                <motion.div className="mt-[15rem] " style={{y: fallY}}> 
               <motion.img style={{rotate: rotateY}} src={seeds} className="w-[20%] h-[20%] items-center jusitfy-center ml-[70rem] -mt-[10rem]"
                />
                </motion.div>
      <motion.div className="-mt-[15rem] " style={{y: fallY}}> 
               <motion.img style={{rotate: rotateYgar}} src={garlic} className="w-[20%] h-[20%] items-center jusitfy-center ml-[8rem] -mt-[9rem]"
                />
                </motion.div>
                <motion.div className="mt-[35rem] top-0 right-0" style={{y: fallY}}> 
               <motion.img style={{rotate: rotateYarug}} src={arugula} className=" w-[20%] h-[20%] items-center jusitfy-center ml-[85rem] -mt-[40rem]"
                />
                </motion.div>
                </div> 
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