import React from "react";
import { motion } from "framer-motion";

const wordVariants = {
    hovered: {
      y: [0, -2, 0, 2, 0],
      transition: { duration: .5, ease: 'easeInOut' }
    }
  }
  const entry = {
    hovered: {
        y: [0, -2, 0, 2, 0],
        transition: { duration: .5, ease: 'easeInOut' }
      },
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

export default function MenuButton(props) { 
    const handleClick = () => {
        props.setMenuState(!true);
    };
    return (
        <>
        <motion.div
            variants={entry}
            initial="initial"
            animate="animate"
            whileHover="hovered"
            className="absolute top-[65%] z-30 hover:cursor-pointer justify-center items-center left-[42%] text-center ">
                <motion.button
            variants={wordVariants}
            className="text-[4.2rem] font-rah font-bold tracking-widest text-[#D8C29D] flex flex-row gap-6 hover:cursor-pointer"
            onClick={handleClick}
            >
                <svg className="mt-1" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="50.000000pt" height="50.000000pt" viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="#D8C29D" stroke="none">
<path d="M199 483 c-62 -82 -113 -155 -113 -163 0 -16 222 -310 234 -310 12 0
234 294 234 310 0 16 -222 310 -234 310 -4 0 -59 -66 -121 -147z"/>
</g>
</svg>
               MENU <svg className="mt-1 -ml-3" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="50.000000pt" height="50.000000pt" viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="#D8C29D" stroke="none">
<path d="M199 483 c-62 -82 -113 -155 -113 -163 0 -16 222 -310 234 -310 12 0
234 294 234 310 0 16 -222 310 -234 310 -4 0 -59 -66 -121 -147z"/>
</g>
</svg>
            </motion.button>
            </motion.div>
            </>
    );
};