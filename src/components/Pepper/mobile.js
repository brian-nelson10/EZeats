import React from "react";
import "../Section1/section.css";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "../Image";
import webImg from "../../assets/web/cilantro.webp";
import img from "../../assets/images/cilantro.png";

export default function PepperMobile() {
    const { scrollYProgress } = useScroll();
    const rotateY = useTransform(scrollYProgress, [0.5, 1],  [-200, 220]);
    const fallY = useTransform(scrollYProgress, [0, .75], [-70, -150]);
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
                stiffness: 100,
                damping: 150,
                restDelta: 0.01,
                duration: 1,
            }
        },
    }
    return (
        <motion.div 
        style={{y: fallY}}
        variants={rotater}
        initial="initial"
        animate="animate"
            className="cilImg z-30 absolute w-[50%] h-[45%] mt-[35rem] -left-14">
        <Image
            srcSet={webImg}
            fallback={img}
            className="-rotate-[22deg]"
            style={{rotate: rotateY}}
        />
        </motion.div>
    )
}