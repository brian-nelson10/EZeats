import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "../Image";
import webImg from "../../assets/web/onion.webp";
import img from "../../assets/images/onion.png";

export default function Onion() {
    const [rotate, setRotate] = useState(false);
    const startRotate = () => {
        if (window.scrollY >= 950) {
            setRotate(true)
        } else {
            setRotate(false)
        }
    };
    const rotater = {
        initial: {
            x: -1050,
            rotate: -480
        },
        animate: {
            rotate: -.4,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 40,
                restDelta: 0.001,
            }
        },
        reanimate: {
            rotate: -180,
            x: -1090,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 40,
                restDelta: 0.001,
                duration: 1
            }
        },
    }
    window.addEventListener('scroll', startRotate)
    return (
        <motion.div
            variants={rotater}
            initial="initial"
            animate={rotate ? "animate" : "reanimate"}
            className="z-30 absolute w-[13%] h-[13%] ml-[12rem] -bottom-[46rem]" >
            <Image
                srcSet={webImg}
                fallback={img}
                className="-rotate-[110deg] opacity-[.9]"
            />
        </motion.div>
    )
}