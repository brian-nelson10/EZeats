import React, { useState } from "react";
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
            x: -1000,
            y: 0,
            rotate: -360
        },
        animate: {
            rotate: -.5,
            x: 0,
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
            rotate: -360,
            x: -1000,
            delay: 2,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 40,
                restDelta: 0.001,
                duration: 2,
            }
        },
    }
    window.addEventListener('scroll', startRotate)
    return (
        <motion.div 
        variants={rotater}
        initial="initial"
        animate={rotate ? "animate" : "reanimate"}
            className="beanImg z-30 absolute w-[25%] h-[25%] mt-[14rem] -left-9">
        <Image
            srcSet={webImg}
            fallback={img}
            className="-rotate-[22deg]"
        />
        </motion.div>
    )
}