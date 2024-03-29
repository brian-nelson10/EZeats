import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroCarousel from "../HeroCarousel";
import "./hero.css";
const Hero = ({ text }) => {
    const letters = Array.from(text);
    const [scroll, setScroll] = useState(false);
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: .08, delayChildren: 1.1 * i },
        }),
        exit: {opacity: 0}
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
        exit: {
            opacity: 0,
            x: 0,
            y: -250,
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
        <>
            <AnimatePresence mode="wait">
                <section>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate={scroll ? "exit" : "visible"}
                        className="z-20 absolute inset-0 flex mb-2 -mt-[10rem] xl:mx-2 text-center items-center justify-center mx-[3rem]">
                        {letters.map((letter, index) => (
                            <motion.span className="font-mari text-[5.5rem] lg:text-[14rem] tracking-wide text-[#D8C29D] hover:cursor-pointer " variants={child} key={index} >
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                    </motion.div>
                    <HeroCarousel />
                </section>
            </AnimatePresence>
        </>

    );
};
export default Hero;