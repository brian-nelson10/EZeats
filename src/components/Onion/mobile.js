import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "../Image";
import webImg from "../../assets/web/onion.webp";
import img from "../../assets/images/onion.png";

export default function OnionMobile() {
    const {scrollYProgress} = useScroll();
    const fallY = useTransform(scrollYProgress, [0, 1], [-50, 200]);
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
    }
    return (
        <motion.div
            variants={rotater}
            initial="initial"
            animate="animate"
            className="z-30 absolute w-[53%] h-[53%] ml-[12rem] -bottom-[53rem]"
            style={{y: fallY}} >
            <Image
                srcSet={webImg}
                fallback={img}
                className="-rotate-[110deg] opacity-[.9]"
            />
        </motion.div>
    );
};