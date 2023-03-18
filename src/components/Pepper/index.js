import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "../Image";
import webImg from "../../assets/web/pepper2.webp";
import img from "../../assets/images/pepper2.png";

export default function Pepper() {
    const [rotate, setRotate] = useState(false);
    const startRotate = () => {
        if (window.scrollY >= 1600) {
            setRotate(true)
        } else {
            setRotate(false)
        }
    };
    const rotater = {
        initial: {
            x: 0,
            y: 0
        },
        animate: {
            rotate: 5,
            x: [3, 6, 9],
            y: [15, 20, 35, 40],
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 40,
                restDelta: 0.001,
                duration: 2,
                delay: .1
            }
        },
        reanimate: {
            rotate: -4,
            delay: .1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 40,
                restDelta: 0.001
                
            }
        },
    }
    window.addEventListener('scroll', startRotate)
    return (
        <motion.div 
        variants={rotater}
        initial="initial"
        animate={rotate ? "animate" : "reanimate"}
            className="beanImg z-30 absolute w-[30%] h-[30%] mt-[28rem] -right-20">
        <Image
            srcSet={webImg}
            fallback={img}
            className="rotate-[10deg]"
        />
        </motion.div>
    )
}