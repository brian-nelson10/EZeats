import React from "react";
import "./section.css";
import { motion } from "framer-motion";
// import Image from "../Image";
// import webImg from "../../assets/web/pepper2.webp";
// import img from "../../assets/images/pepper2.png";
const pack2 = {
    initial: {
        opacity: 0, 
        y: 300,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 40,
                damping: 40,
                restDelta: 0.01,
                duration: 1,
}
}
}
export default function Section1Mobile() {
    return (
        <div className="gradient h-[55rem] w-screen z-50 -mt-[16rem] -mb-[14rem] lg:-mt-[15rem]">
            <motion.div className="container flex-row lg:flex-wrap">
                <motion.div variants={pack2} initial="initial" animate="animate" className="aboutHero grid grid-rows-2 lg:grid-cols-2 gap-8 w-screen items-center justify-center">
                    <div className="mt-[18rem] mx-[2rem] lg:mt-[9rem] lg:ml-[17rem] text-center lg:text-start font-rah text-[1.5rem] tracking-wide text-[#D8C29D]">
                    <p>"Welcome to our flavorful and authentic culinary experience.</p>
                    <p> Using traditional spices and local ingredients...  </p>
                    <p>Our food reflects the vibrant culture and hospitality of Morocco."</p>
                    <p className="text-end">-Chef YaYa</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}