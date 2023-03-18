import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "../Image";
import webImg from "../../assets/web/onion.webp";
import img from "../../assets/images/onion.png";

export default function Onion() {
    const [rotate, setRotate] = useState(false);
    const startRotate = () => {
        if (window.scrollY >= 1100) {
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
            rotate: -4,
            y: [10, 20, 30],
            x: [-10, -20],
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 40,
                restDelta: 0.001,
                duration: 2
            }
        },
        reanimate: {
            y: [25, 20, 25],
            x: [-15, 10, 0],
            rotate: 4,
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
            className="z-30 absolute w-[20%] h-[20%] ml-[10rem] -bottom-[45rem]" >
            <Image
                srcSet={webImg}
                fallback={img}
                className="rotate-[1000deg]"
            />
        </motion.div>
    )
}