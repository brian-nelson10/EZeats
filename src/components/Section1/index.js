import React from "react";
import "./section.css";
import { motion } from "framer-motion";
// import Image from "../Image";
// import webImg from "../../assets/web/pepper2.webp";
// import img from "../../assets/images/pepper2.png";
const pack2 = {
    initial: {
        opacity: 0, 
        y: 300,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 40,
                restDelta: 0.001,
                duration: 1,
}
}
}
export default function Section1() {
    return (
        <div className="gradient h-[55rem] w-screen z-50 -mt-[15rem]">
            <motion.div className="container flex-wrap">
                <motion.div className="aboutHero grid grid-cols-2 gap-8 w-screen items-center justify-center">
                    <div className="mt-[10rem] ml-[20rem] text-start font-rah text-[2.4rem] text-[#D8C29D]">
                    <p>Better ingredients, better pizza.</p>
                    <p>better bitches, better cars.</p>
                    <p>better linecooks, better chefs.</p>
                    <p className="text-end">-Chef YaYa</p>
                    </div>
                    <motion.div 
                        variants={pack2}
                        initial="initial"
                        whileInView="animate" 
                        className="w-3/4 rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] h-[49rem] mt-[8rem] section1-img" alt=""/>
                </motion.div>
            </motion.div>
        </div>
    )
}