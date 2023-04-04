import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "../Image";
import webImg from "../../assets/web/beans2.webp";
import img from "../../assets/images/beans2.png";

const Beans = () => {
    // const x = useMotionValue(0);
    // const { scrollYProgress } = useScroll();
    // const rotate = useSpring(scrollYProgress, {
    //     rotate: 180,
    //     stiffness: 100,
    //     damping: 40,
    //     restDelta: 0.001
    // });
    const [rotate, setRotate] = useState(false);

    useEffect(() => {  
    const startRotate = () => {
        if (window.scrollY >= 600) {
            setRotate(true)
        } else {
            setRotate(false)
        }
    }
    window.addEventListener('scroll', startRotate);
    return () => window.removeEventListener('scroll', startRotate);
}, []);

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
            animate={rotate ? "animate" : "reanimate"}
            className="beanImg z-30 absolute w-[30%] h-[30%]" >
            <Image
                srcSet={webImg}
                fallback={img}
                className="-rotate-[30deg]"
            />
        </motion.div>
    )
}
export default Beans;