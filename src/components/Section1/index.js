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
export default function Section1() {
    return (
        <div className="gradient h-[55rem] w-screen z-50 xl:-mb-[13rem] -mt-[16rem] lg:-mt-[15rem]">
            <motion.div className="container flex-row lg:flex-wrap">
                <motion.div className="aboutHero grid grid-rows-2 lg:grid-cols-2 gap-8 w-screen items-center justify-center">
                    <div className="-mt-[1rem] mx-[2rem] lg:mt-[9rem] lg:ml-[17rem] text-center font-rah text-[1.4rem] tracking-wide text-[#D8C29D]">
                    <p>"EZ Eatz is a locally owned restaurant that specializes in Moroccan cuisine.</p>
                    <p> Located on St. John’s Bluff in Jacksonville, FL, our restaurant offers a quick and convenient dining experience without compromising on quality or flavor.</p><br/>
                    <p>Our menu features a range of traditional Moroccan dishes, such as couscous, tagine, tangia, and loubia soup, as well as a variety of wraps, salads, and more that are perfect for a satisfying meal that you can dine in and enjoy, or take on the go.</p><br/>
                    <p>We use only the freshest and highest quality ingredients to create dishes that are both healthy and delicious. Our cozy and inviting atmosphere makes it the perfect place to enjoy a meal with family, friends, or solo!</p><br/>
                    <p>Whether you're looking for a quick lunch break or a tasty, laid back dinner, EZ Eatz has got you covered.</p>
                    <p>Visit us today and experience the authentic flavors of Morocco!"</p>
                    <p className="text-end">-Chef YaYa</p>
                    </div>
                    <motion.div 
                        variants={pack2}
                        initial="initial"
                        whileInView="animate" 
                        className="w-3/4 rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] h-[49rem] lg:mt-[8rem] section1-img" alt=""/>
                </motion.div>
            </motion.div>
        </div>
    )
}