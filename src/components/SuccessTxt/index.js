import React from "react";
import { motion } from "framer-motion";

// Variants for Container
const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {  staggerChildren: .1, delayChildren: .5 * i },
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
        duration: 2,
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
  
export default function SuccessTxt({text}) {
    const letters = Array.from(text);
    return (
        <>
    <motion.div
    className="text-[2rem] justify-start text-start items-center pt-5 md:text-[5rem]"
     variants={container}
     initial="hidden"
     animate="visible"
   >
     {letters.map((letter, index) => (
       <motion.span className="font-larissa text-black hover:text-[#d6d6d6]" variants={child} key={index} >
         {letter === " " ? "\u00A0" : letter}
       </motion.span>
     ))}
   </motion.div> 
   </>
    )
}