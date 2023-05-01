import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "../Image";
import webImg from "../../assets/web/ginger.webp";
import img from "../../assets/images/ginger.png";

export default function GingerMobile() {
    const { scrollYProgress } = useScroll();
  
    const fallY = useTransform(scrollYProgress, [0, 1], [-50, -150]);
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
    }

    return (
        <motion.div
            style={{y: fallY}}
            variants={rotater}
            initial="initial"
            whileInView="animate"
            className="z-30 absolute w-[50%] h-[50%] -left-[6rem] -top-[12rem] " >
            <Image
                srcSet={webImg}
                fallback={img}
                className=""
            />
        </motion.div>
    )
};