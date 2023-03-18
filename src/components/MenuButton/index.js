import React from "react";
import { motion } from "framer-motion";
const wordVariants = {
    hovered: {
      y: [0, -2, 0, 2, 0],
      transition: { duration: .5, ease: 'easeInOut' }
    }
  }
  const entry = {
      initial: {
          y: 200,
          opacity: 0
      },
      animate: {
          y: 0,
          opacity: [0, 0, 0, .1, .2, .4, .6, .8, 1],
          transition: {
              type: "spring",
              bounce: .3,
              duration: 2,
              delay: .6
          }
      }
  }
export default function MenuButton() {
    return (
        <>
        <motion.div
            variants={entry}
            initial="initial"
            animate="animate"
            className="absolute top-[65%] z-30 hover:cursor-pointer justify-center items-center left-[42%] text-center ">
                <motion.div
            variants={wordVariants}
            className="text-[4rem] font-rah tracking-widest text-[#D8C29D]"
            >
              ♦️ MENU ♦️
            </motion.div>
            </motion.div>
            </>
    );
};