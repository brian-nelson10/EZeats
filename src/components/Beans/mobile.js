import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "../Image";
import webImg from "../../assets/web/beans2.webp";
import img from "../../assets/images/beans2.png";

const BeansMobile = () => {
    // const x = useMotionValue(0);
    const { scrollYProgress } = useScroll();
    const fallY = useTransform(scrollYProgress, [0, 1], [50, 10]);
   

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
                stiffness: 90,
                damping: 100,
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
    
    return (
        <motion.div
            variants={rotater}
            initial="initial"
            animate="animate"
            className="beanImg absolute w-[80%] h-[80%] -ml-[6rem] lg:ml-0 md:w-[40%] md:h-[40%] z-10 " 
            style={{y: fallY}}>
            <Image
                srcSet={webImg}
                fallback={img}
                className="-rotate-[30deg] overflow-hidden"
            />
        </motion.div>
    )
}
export default BeansMobile;