import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import garlic from "../../assets/images/garlic.png";
import arugula from "../../assets/images/arugula.png";
import cardamom from "../../assets/images/cardamom.png";
import seeds from "../../assets/images/seed.png";
import pcorn from "../../assets/images/peppercorn.png";
import "../Section1/section.css";
const Section4Mobile = () => {
  const { scrollYProgress } = useScroll();
  const rotateY = useTransform(scrollYProgress, [0.75, 1],  [-200, -140]);
  const rotateYcard = useTransform(scrollYProgress, [0.75, 1], [-200, -150]);
  const rotateYarug = useTransform(scrollYProgress, [0.5, 1], [-100, -180]);
  const rotateYgar = useTransform(scrollYProgress, [0.5, 1], [10, 50]);
  const leftX = useTransform(scrollYProgress, [0, 1], [-150, 100]);
  const rightX = useTransform(scrollYProgress, [0, 1], [300, -300]);
  const fallY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const navigate = useNavigate();
  function handleContact() {
      navigate("/contact");
  }
  function handleOrder() {
    navigate("/order");
  }
  return (
    
    <>
    <section className="-mt-[8rem] h-[80rem] px-[2rem] gradient3 pt-[6rem] -mb-[7rem] overflow-hidden">
        <div className="container mt-[15rem] mx-[2rem] ml-[1rem] items-center justify-center text-center bg-contactMobile bg-fixed z-20 relative">
      <motion.div
        style={{ x: leftX }}
        initial={{opacity: 0}}
        whileInView={{opacity: [.1,.3,.5,.7,.9,1] , transition: {duration: .9, delay: .6}}}
        className="contactText"
      >
        <div onClick={handleContact} className="font-mari text-[3rem] tracking-wide text-[#D8C29D] hover:cursor-pointer contactText">Contact Us</div>
      </motion.div>
      <motion.div
        style={{ x: rightX }}
        initial={{opacity: 0}}
        whileInView={{opacity: [.1,.3,.5,.7,.9,1] , transition: {duration: .9, delay: .6}}}
        className="z-50 contactText text-end overflow-hidden"
      >
        <h1 onClick={handleOrder} className="font-mari text-[3rem] tracking-wide text-[#D8C29D] overflow-hidden contactText hover:cursor-pointer">Order Online</h1>
      </motion.div>
      
      </div>
   
      </section>
      <div className="gradient3 -mt-[35rem] z-10"> 
      <motion.div className="-mt-[35rem]"  style={{y: fallY}}> 
               <motion.img style={{rotate: rotateYcard}} src={cardamom}  className="w-[50%] h-[50%] items-center jusitfy-center ml-[15rem] -mt-[20rem]"
                />
                </motion.div>
                <motion.div className="-mt-[15rem]" style={{y: fallY}}> 
               <motion.img style={{rotate: rotateY}} src={pcorn} className="w-[50%] h-[50%] items-center jusitfy-center -ml-[4.5rem] -mt-[45rem]"
                />
                </motion.div>
                <motion.div className="mt-[15rem] " style={{y: fallY}}> 
               <motion.img style={{rotate: rotateY}} src={seeds} className="w-[50%] h-[50%] items-center jusitfy-center ml-[13rem] -mt-[20rem]"
                />
                </motion.div>
      <motion.div className="-mt-[5rem] " style={{y: fallY}}> 
               <motion.img style={{rotate: rotateYgar}} src={garlic} className="w-[50%] h-[50%] items-center jusitfy-center -ml-[1rem] mt-[12rem]"
                />
                </motion.div>
                <motion.div className="mt-[35rem] top-0 right-0" style={{y: fallY}}> 
               <motion.img style={{rotate: rotateYarug}} src={arugula} className=" w-[40%] h-[40%] items-center jusitfy-center ml-[85rem] -mt-[40rem]"
                />
                </motion.div>
                </div> 
    </>
  );
};
export default Section4Mobile;