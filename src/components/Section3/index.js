import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import img from "../../assets/images/filtertruck.png";
import truck from "../../assets/images/truck.png";
import plus from "../../assets/images/plus.png";
import "../Section1/section.css";

const divVariants = {
    hidden: { opacity: 0, y: -500 },
    visible: { 
        opacity: 1, 
        
         }
}
const containerVar = {
    visible: { transition: { staggerChildren: .2 }}
};
const Section3 = () => {
  const [scrollY, setScrollY] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY - 3000);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scale = .5;
  const scale2 = .6
  return (
    <motion.section 
        variants={containerVar}
        initial="hidden"
        whileInView="visible"
        className="bg-transparent grid grid-cols-3 px-[5rem] gap-[2rem] h-[25rem] pt-[5rem] z-20"
        ref={myRef} id="myId" >
      
        <motion.div 
            variants={divVariants}
            className="bottom-0" 
            style={{y: -scrollY * scale2 }}>
              
          <img className="h-[47rem] w-[45rem] rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] z-10" src={img} alt="" />
          <img className="h-auto w-[75%] ml-[4.5rem] -mt-[35rem] rounded-lg z-20 truck" src={truck} alt=""/>
          <img className="h-auto w-[18%] ml-[14rem] -mt-[15rem] rounded-lg z-20" src={plus} alt=""/>
        </motion.div>
        <motion.div variants={divVariants} className="" style={{ y: -scrollY * scale }}>
          <img className="h-[47rem] w-[45rem] rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,1)]" src={img} alt="" />
          <img className="h-auto w-[75%] ml-[4.5rem] -mt-[35rem] rounded-lg z-20 truck" src={truck} alt=""/>
          <img className="h-auto w-[18%] ml-[14rem] -mt-[15rem] rounded-lg z-20" src={plus} alt=""/>
        </motion.div>
        <motion.div variants={divVariants} className="" style={{ y: -scrollY * scale2}}>
          <img className="h-[47rem] w-[45rem] rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,1)]" src={img} alt="" />
          <img className="h-auto w-[75%] ml-[4.5rem] -mt-[35rem] rounded-lg z-20 truck" src={truck} alt=""/>
          <img className="h-auto w-[18%] ml-[14rem] -mt-[15rem] rounded-lg z-20" src={plus} alt=""/>
        </motion.div>
    </motion.section>
  );
};

export default Section3;