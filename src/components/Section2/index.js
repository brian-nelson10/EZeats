import React from "react";
import "../Section1/section.css";

import { AnimatePresence, motion } from "framer-motion";
// import Image from "../Image";
// import webImg from "../../assets/web/pepper2.webp";
// import img from "../../assets/images/pepper2.png";
const pack = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 2,
            ease: "easeIn"
        }
    }
}
const pack2 = {
    initial: {
        opacity: 0, 
        y: 400,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 40,
                restDelta: 0.001,
                duration: 1,
}
}
}
export default function Section2() {
    return (
        <AnimatePresence>
        <div className="gradient2 w-screen z-50 -mt-[13rem]">
            <motion.div className="container flex-wrap">
                <motion.div className="aboutHero grid w-screen items-center justify-center">
                    <div className="mt-[5rem] text-center font-mari tracking-widest text-[8rem] text-[#D8C29D]">
                        <motion.h1
                            variants={pack}
                            initial="initial"
                            whileInView="animate">♦️ MENU ♦️</motion.h1>
                    </div>
                </motion.div>
                <section className="container w-5/6 bg-[#D8C29D] shadow-[1px_35px_35px_2px_rgba(0,0,0,0.5)] -mb-[10rem] -mt-[2rem] md:mt-[3rem] md:mx-auto items-center justify-center text-center h-[200rem] md:h-[100rem] md:ml-[15rem] rounded-xl z-50 bg-fixed bg-deco">
                    <motion.div
                        variants={pack}
                        initial="initial"
                        whileInView="animate"
                        className="p-2 md:p-5 font-rah text-[3rem] md:text-[5rem] text-[#D8C29D] tracking-wide">
                        Lunch ♦️ Dinner
                    </motion.div>

                    <div className="container my-20 px-6 mx-auto text-xl">
                        <motion.div
                            variants={pack2}
                            initial="initial"
                            whileInView="animate" 
                            className="block mx-[18rem] bg-[#D8C29D] py-[2rem] mb-[2rem] border-seperate border-2 border-[#023047] rounded-lg shadow-lg">
                            <h1 className="font-mari text-[2rem] mt-[.5rem] text-center text-[#023047]">Moroccan Whole Chicken</h1>
                            <p className="font-rah text-[1rem] tracking-widest font-bold text-center text-[#023047] mt-8">Marinated moroccan style whole rotisserie chicken</p> 
                            <p className="font-rah text-[1rem] tracking-widest font-bold text-center text-[#023047] mt-4">with sauce, rolls, and two family style sides.</p> 
                            <p className="font-mari text-[2rem] tracking-wide font-bold text-center text-[#023047] mt-4 mb-1">$ 30</p> 
                        </motion.div>
                        <div className="grid gap-6 lg:gap-x-12">
                            <div className="grid gap-4 grid-cols-3 mb-6 lg:mb-0">
                                <motion.div 
                                    variants={pack2}
                                    initial="initial"
                                    whileInView="animate" 
                                    className="block border-solid border-[#023047] border-seperate border-2 rounded-lg shadow-lg my-[3rem] h-[30rem] bg-[#D8C29D]">

                                </motion.div>
                                <motion.div 
                                    variants={pack2}
                                    initial="initial"
                                    whileInView="animate" 
                                    className="block col-span-2 border-spacing-[3rem] bg-[#D8C29D] border-seperate border-2 border-solid border-[#023047] rounded-lg shadow-lg h-[40rem]">
                                    {/* <div className="p-6 border-black border-gray-300 bordertext-center">

                                    </div> */}

                                </motion.div>
                            </div>

                        </div>
                        <motion.div
                            variants={pack2}
                            initial="initial"
                            whileInView="animate" 
                            className="block mx-[15rem] bg-[#D8C29D] mt-[3rem] py-[2rem] mb-[2rem] border-seperate border-2 border-[#023047] rounded-lg shadow-lg">
                            <h1 className="font-mari text-[2rem] mt-[.5rem] text-center text-[#023047]">Moroccan Whole Chicken</h1>
                            <p className="font-rah text-[.9rem] tracking-widest font-bold text-center text-[#023047] mt-8">Marinated moroccan style whole rotisserie chicken</p> 
                            <p className="font-rah text-[.9rem] tracking-widest font-bold text-center text-[#023047] mt-4">with sauce, rolls, and two family style sides.</p> 
                            <p className="font-mari text-[2rem] tracking-wide font-bold text-center text-[#023047] mt-4 mb-1">$ 30</p> 
                        </motion.div>
                    </div>
                </section>
            </motion.div>
        </div>
        </AnimatePresence>
    )
}