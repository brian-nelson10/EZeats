import React from "react";
import "../Section1/section.css";
import { motion } from "framer-motion";
// import Image from "../Image";
// import webImg from "../../assets/web/pepper2.webp";
// import img from "../../assets/images/pepper2.png";

export default function Section2() {
    return (
        <div className="gradient2 h-[50rem] w-screen z-50 -mt-[13rem]">
            <motion.div className="container flex-wrap">
                <motion.div className="aboutHero grid w-screen items-center justify-center">
                    <div className="mt-[6rem] text-center font-mari tracking-widest text-[10rem] text-[#D8C29D]">
                    <motion.h1>♦️ MENU ♦️</motion.h1>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}