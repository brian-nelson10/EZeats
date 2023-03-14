import React from "react";
import { motion } from "framer-motion";
import HeroCarousel from "../HeroCarousel";
import "./hero.css";
const Hero = ({text}) => {
    const letters = Array.from(text);
const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: .08, delayChildren: 1.1 * i },
    }),
  };
  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 1.8,
      },
    },
    hidden: {
      opacity: 0,
      x: 0,
      y: -50,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 2,
        timing: [2, 1, 1, 1]
      },
    },
  };
    return (
      <>
        <section>
            <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="z-20 absolute inset-0 flex my-2 text-center items-center justify-center mx-[3rem]">
            {letters.map((letter, index) => (
              <motion.span className="font-mari text-[14rem] tracking-wide text-[#D8C29D] hover:cursor-pointer " variants={child} key={index} >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
            </motion.div>
    <HeroCarousel/>
    </section>
    </>

    );
};
export default Hero;