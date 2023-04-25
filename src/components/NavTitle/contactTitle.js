import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ContactTitle = ({ text }) => {
    const navigate = useNavigate();
    const letters = Array.from(text);
    const [scroll, setScroll] = useState(false);
    function handleHome() {
        navigate("/");
      }
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: .08 },
        }),
        exit: { opacity: 0 }
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
            y: -150,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                duration: 2,
                timing: [2, 1, 1, 1]
            },
        },
        exit: {
            opacity: 0,
            x: 0,
            y: 250,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                duration: 3,
                timing: [2, 2, 1, 1]
            },
        },
    };
    useEffect(() => {
        const isScroll = () => {
            if (window.scrollY >= 100) {
                setScroll(true)
            }
            if (window.scrollY <= 90) {
                setScroll(false)
            }
        }
    
        window.addEventListener('scroll', isScroll);
        return () => window.removeEventListener("scroll", isScroll);
    }, []);

    return (
        <section>
            <motion.div
                variants={container}
                initial="visible"
                animate={scroll ? "hidden" : "visible"}
                className="z-20 absolute inset-0 flex mt-[6rem] text-center items-center justify-center mx-[1rem]">
                {letters.map((letter, index) => (
                    <motion.span 
                        onClick={handleHome}
                        className="font-mari font-bold text-[2rem] lg:text-[4rem] tracking-wide text-[#D8C29D] hover:cursor-pointer " variants={child} key={index} >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </motion.div>
        </section>
    );
};
export default ContactTitle;