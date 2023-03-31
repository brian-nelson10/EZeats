import React, { useState } from "react";
import "../Section1/section.css";
import { motion } from "framer-motion";
import Image from "../Image";
import webImg from "../../assets/web/cilantro.webp";
import img from "../../assets/images/cilantro.png";

export default function Pepper() {
    const [rotate, setRotate] = useState(false);
    const startRotate = () => {
        if (window.scrollY >= 875) {
            setRotate(true)
        } else {
            setRotate(false)
        }
    };
    const rotater = {
        initial: {
            x: -200,
            y: 0,
            rotate: 90
        },
        animate: {
            rotate: -.5,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 90,
                damping: 90,
                restDelta: 0.01,
                duration: 2.5,
                delay: .1
            }
        },
        reanimate: {
            
            
            
            opacity: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 40,
                restDelta: 0.001,
                duration: .1,
            }
        },
    }
    window.addEventListener('scroll', startRotate)
    return (
        <motion.div 
        variants={rotater}
        initial="initial"
        animate={rotate ? "animate" : "reanimate"}
            className="cilImg z-30 absolute w-[25%] h-[20%] mt-[15rem] -left-9">
        <Image
            srcSet={webImg}
            fallback={img}
            className="-rotate-[22deg]"
        />
        </motion.div>
    )
}