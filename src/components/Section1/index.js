import React from "react";
import "./section.css";
import { motion } from "framer-motion";
// import Image from "../Image";
// import webImg from "../../assets/web/pepper2.webp";
// import img from "../../assets/images/pepper2.png";

export default function Section1() {
    return (
        <div className="gradient h-[50rem] w-screen z-50 -mt-[13rem]">
            <motion.div className="container flex-wrap">
                <motion.div className="aboutHero grid w-screen items-center justify-center">
                    <div className="mt-[18rem] -ml-[30rem] text-start font-rah text-[3rem] text-[#D8C29D]">
                    <p>Better ingredients, better pizza.</p>
                    <p>better bitches, better cars.</p>
                    <p>better linecooks, better chefs.</p>
                    <p className="text-end">-Chef YaYa</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}