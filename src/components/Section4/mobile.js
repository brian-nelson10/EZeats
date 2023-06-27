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
  const rotateYgar = useTransform(scrollYProgress, [0.5, 1], [10, 50]);
  const leftX = useTransform(scrollYProgress, [0, 1], [-350, 100]);
  const rightX = useTransform(scrollYProgress, [0, 1], [2000, -200]);
  const fallY = useTransform(scrollYProgress, [0, 1], [-500, 200]);
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
        <div className="container mt-[15rem] items-center justify-center text-center bg-contactMobile bg-fixed z-20 relative">
      <motion.div
        style={{ x: leftX }}
        initial={{opacity: 0}}
        whileInView={{opacity: [.1,.3,.5,.7,.9,1] , transition: {duration: .9, delay: .6}}}
        className="contactText mb-10"
      >
        <div onClick={handleContact} className="font-mari text-[3.2rem] tracking-wide text-[#000000] hover:cursor-pointer contactText">Contact Us</div>
      </motion.div>
      <motion.div
        style={{ x: rightX }}
        initial={{opacity: 0}}
        whileInView={{opacity: [.1,.3,.5,.7,.9,1] , transition: {duration: .9, delay: .6}}}
        className="z-50 contactText text-end overflow-hidden"
      >
        <h1 onClick={handleOrder} className="font-mari text-[3rem] tracking-wide text-[#000000] overflow-hidden contactText hover:cursor-pointer">Order Online</h1>
      </motion.div>
      
      </div>
   
      </section>
      <div className="bg-[#32cd32] -mt-[35rem] z-10"> 
      <motion.div className="-mt-[35rem]"  style={{y: fallY}}> 
               <motion.img style={{rotate: rotateY}} src={cardamom}  className="w-[50%] h-[50%] items-center jusitfy-center ml-[15rem] -mt-[20rem]"
                />
                </motion.div>
                <motion.div className="-mt-[15rem]" style={{y: fallY}}> 
               <motion.img src={pcorn} className="w-[50%] h-[50%] items-center jusitfy-center -ml-[4.5rem] -mt-[45rem]"
                />
                </motion.div>
                <motion.div className="mt-[15rem] " style={{y: fallY}}> 
               <motion.img src={seeds} className="w-[50%] h-[50%] items-center jusitfy-center ml-[13rem] -mt-[20rem]"
                />
                </motion.div>
      <motion.div className="-mt-[5rem] " style={{y: fallY}}> 
               <motion.img style={{rotate: rotateYgar}} src={garlic} className="w-[50%] h-[50%] items-center jusitfy-center -ml-[1rem] mt-[12rem]"
                />
                </motion.div>
                <motion.div className="mt-[35rem] top-0 right-0" style={{y: fallY}}> 
               <motion.img style={{rotate: rotateY}} src={arugula} className=" w-[40%] h-[40%] items-center jusitfy-center ml-[85rem] -mt-[40rem]"
                />
                </motion.div>
                </div> 
    </>
  );
};
export default Section4Mobile;