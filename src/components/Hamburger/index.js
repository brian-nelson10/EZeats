import React, {useState} from "react";
// import "./hamburger.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    function handleHome() {
        navigate('/home')
      };
    const child1 = {
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            delay: 2.5,
            duration: 2,
          },
        },
        hidden: {
          opacity: 0,
          x: -60,
          y: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            duration: 2,
            timing: [2, 1, 1, 1]
          },
        },
      };
      const child2 = {
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            delay: 2.75,
            duration: 2,
          },
        },
        hidden: {
          opacity: 0,
          x: -60,
          y: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            duration: 2,
            timing: [2, 1, 1, 1]
          },
        },
      };
      const child3 = {
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            delay: 3,
            duration: 2,
          },
        },
        hidden: {
          opacity: 0,
          x: -60,
          y: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            duration: 2,
            timing: [2, 1, 1, 1]
          },
        },
      };
      const menuVariants = {
        opened: {
          top: 0,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.5,
            type: "spring",
            damping: 12,
            stiffness: 100,
            
          },
        },
        closed: {
          top: "-190vh",
        },
      };
      const linkVariants = {
        opened: {
          opacity: 1,
          y: 1,
        },
        closed: {
          opacity: 0,
          y: 0,
        },
      };
      const lineTop = {
        opened: {
          rotate: 405,
          translateY: 10
        },
        closed: {
          rotate: 0,
          translateY: 0
        },
      }
      const lineMiddle = {
        opened: {
          opacity: 0
        },
        closed: {
          opacity: 1
        },
      }
      const lineBottom = {
        opened: {
          rotate: -405,
          translateY: -8,
          backgroundColor: "white"
        },
        closed: {
          rotate: 0,
          translateY: 0
        },
      }
    return (
        <>
        <nav className="z-50 fixed ml-[8rem]">
        <motion.div
            layout
            className="xl:container-fluid xl:pr-6 hover:cursor-pointer"
            animate={isOpen ? "opened" : "closed"}
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsOpen(!isOpen)}
        >
            <motion.svg
                className="w-14 h-15 sm:w-20 h-20"
                viewBox="0 0 90 90" id="emoji" xmlns="http://www.w3.org/2000/svg">
                <g id="color" />
                <g id="hair" />
                <g id="skin" />
                <g id="skin-shadow" />
                <motion.g
                    animate={isOpen ? "opened" : "closed"}
                    initial={false}
                    id="line">
                    <motion.g
                        variants={child3}
                        initial="hidden"
                        animate="visible">
                        <motion.line className="line top" animate={isOpen ? "opened" : "closed"}
                            initial={false} variants={lineTop} transition={{ type: "spring", stiffness: 260, damping: 20 }} x1="16" x2="75" y1="26" y2="26" fill="none" stroke="#D8C29D" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="5" />
                    </motion.g>
                    <motion.g
                        variants={child2}
                        initial="hidden"
                        animate="visible">
                        <motion.line className="line middle" animate={isOpen ? "opened" : "closed"}
                            initial={false} variants={lineMiddle} transition={{ type: "spring", stiffness: 260, damping: 20 }} x1="16" x2="75" y1="36" y2="36" fill="none" stroke="#D8C29D" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4" />
                    </motion.g>
                    <motion.g
                        variants={child1}
                        initial="hidden"
                        animate="visible">
                        <motion.line className="line bottom" animate={isOpen ? "opened" : "closed"}
                            initial={false} variants={lineBottom} transition={{ type: "spring", stiffness: 260, damping: 20 }} x1="16" x2="75" y1="46" y2="46" fill="none" stroke="#D8C29D " strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="5" />
                    </motion.g>
                </motion.g>
            </motion.svg>
        </motion.div>
        </nav>
        <motion.nav
            className="h-screen w-screen fixed flex flex-col items-center justify-center align-center bg-[#023047] z-10"
            initial={false}
            variants={menuVariants}
            animate={isOpen ? "opened" : "closed"}
        >

                <motion.li onClick={handleHome} className="text-[#D8C29D] font-mari mb-2 mt-[4rem] text-[2.8rem] list-none" variants={linkVariants}>Home</motion.li>
                {/* <motion.li onClick={handleNavigate} className="text-white font-larissa mb-2 text-[2.8rem] list-none" variants={linkVariants}>Book Online</motion.li>
                <motion.li onClick={handlePackage} className="text-white font-larissa mb-2 text-[2.8rem] list-none" variants={linkVariants}>date</motion.li>
                <motion.li onClick={handlePackageTwo} className="text-white font-larissa mb-2 text-[2.8rem] list-none" variants={linkVariants}>event</motion.li>
                <motion.li onClick={handlePackageThree} className="text-white font-larissa mb-2 text-[2.8rem] list-none" variants={linkVariants}>i do</motion.li>
                <motion.li onClick={handlePackageFour} className="text-white font-larissa mb-2 text-[2.8rem] list-none" variants={linkVariants}>celebrate</motion.li>
                <motion.li onClick={handleAddOns} className="text-white font-larissa mb-2 text-[2.8rem] list-none" variants={linkVariants}>Add On's</motion.li> */}
            </motion.nav>
            
            </>
    );
};