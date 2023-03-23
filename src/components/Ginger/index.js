import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "../Image";
import webImg from "../../assets/web/ginger.webp";
import img from "../../assets/images/ginger.png";

export default function Ginger() {
    const [rotate, setRotate] = useState(false);
    const startRotate = () => {
        if (window.scrollY >= 450) {
            setRotate(true)
        } else {
            setRotate(false)
        }
    };
    const rotater = {
        initial: {
            x: -1000,
            y: 0,
        },
        animate: {
            rotate: -360,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 40,
                restDelta: 0.001,
                duration: .5
            }
        },
        reanimate: {
            rotate: -.5,
            x: -1000,
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
            className="z-30 absolute w-[20%] h-[20%] -left-[7rem] top-[38rem]" >
            <Image
                srcSet={webImg}
                fallback={img}
                className=""
            />
        </motion.div>
    )
}