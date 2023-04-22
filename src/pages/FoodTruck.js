import React, { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import OrderButton from "../components/OrderButton";
import Hamburger from "../components/Hamburger";
import Section5 from "../components/Section5";
import Footer from "../components/Footer";
import ContactTitle from "../components/NavTitle/contactTitle";
import Image from "../components/Image";
import SuccessTxt from "../components/SuccessTxt";
import "./styles.css";
 import img from "../assets/images/eztruck.png"
 import imgWeb from "../assets/images/eztruck.png"
const main = {
    initial: {
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
        transition: { duration: .4 }
    },
    animate: {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        transition: { duration: .4, staggerChildren: .1 }
    },
    exit: {
        clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
        transition: { duration: .4 }
    }
};
const header = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1.8,
            delay: .5
        }
    }
}
const header1 = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1.8,
            delay: .75
        }
    }
}
const divVariants = {
    hidden: { opacity: 0 },
    visible: {opacity: 1},
    }

const containerVar1 = {
    hidden: { opacity: 0, x: -100 },
    visible: { transition: { delay: 1, staggerChildren: .2, type: "spring", bounce: .002, restDelta: .01 }, opacity: 1, x: 0 }
};
const wordVariants = {
    hovered: {
      y: [0, -2, 0, 2, 0],
      transition: { duration: .5, ease: 'easeInOut' }
    }
  }
const FoodTruck = () => {
    React.useState(() => {
        typeof windows !== "undefined" && window.scrollTo(0, 0);
    }, []);
    const { scrollYProgress } = useScroll();
    const fallY = useTransform(scrollYProgress, [0, 1], [20, -160]);
    const [isHover, setIsHover] = useState(false);
    const [isHoverReq, setIsHoverReq] = useState(false);
    const navigate = useNavigate();
    const handleHover = () => {
        setIsHover(true);
    };
    const handleHoverLeave = () => {
        setIsHover(false);
    };
    const handleHoverReq = () => {
        setIsHoverReq(true);
    };
    const handleHoverLeaveReq = () => {
        setIsHoverReq(false);
    };
    function handleContact() {
        navigate("/contact")
    };
    return (
        <AnimatePresence mode="wait">
            <motion.section
                className="square gradient3"
                variants={main}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <section className="grid grid-cols-3 w-screen z-50 h-[2rem] fixed ">
                    <div className="items-center justify-end mt-[3rem]">
                        <Hamburger />
                    </div>
                    <div>
                        <ContactTitle text="EZ EATZ" />
                    </div>
                    <div className="grid items-center justify-end mr-4 mt-6">
                        <OrderButton />
                    </div>
                </section>
                <section className=" gradient3" >
                    <div className="px-[9rem] py-[10rem]">
                        <div
                            className="grid mt-[2rem] -mb-[4rem]">
                            <motion.h1
                                variants={header}
                                className="tracking-wide text-[5rem] font-mari text-[#D8C29D]">Food Truck</motion.h1>
                        </div>
                    </div>
                </section>
                <motion.section
                    variants={containerVar1}
                    initial="hidden"
                    whileInView="visible"
                    className="bg-transparent overflow-hidden px-[5rem] gap-[2rem] z-20"
                    style={{y: fallY}}>
            <div className="container mx-[8rem]">
                <div className="flex flex-col lg:flex-row justify-center items-strech mx-4">
                    <div className="lg:w-4/12 flex justify-center items-center">
                        <div>
                            <h1 className="lg:text-5xl xl:text-6xl tracking-wide font-mari text-[#D8C29D] w-7/12"><SuccessTxt text="Find Us."/></h1>
                            <p className="lg:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 font-rah font-bold tracking-wide leading-normal text-[2rem] tracking-wide text-[#D8C29D]">We humbly thank you for supporting us from the beginning. </p>
                            <motion.p 
                                initial={{opacity: 0}}
                                animate={{opacity: 1, transition: {delay: 2, duration: 1.4}}}
                                className="lg:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 font-mari text-[2rem] font-bold tracking-wide text-[#D8C29D]">- YaYa</motion.p>
                        </div>
                    </div>
                    <div className="lg:w-8/12 mt-6 lg:mt-8 lg:mt-0">
                        <div className="relative w-full h-full">
                            <Image
                                srcset={imgWeb}
                                fallback={img}
                                alt="food truck"
                                className={isHover ? "z-10 opacity-25" : "z-10"}/>
                                <motion.button
                                    className="absolute z-20 top-1/2 right-1/2 font-mari text-[3rem] font-bold tracking-wide text-[#D8C29D] border-2 border-[#D8C29D] px-6 py-2 rounded-lg bg-[#07252d]"
                                    variants={header1}
                                    initial="initial"
                                    animate="animate"
                                    onMouseEnter={handleHover}
                                    onMouseLeave={handleHoverLeave}>
                                        <motion.p
                                            variants={wordVariants}
                                            whileHover="hovered">Find Us.</motion.p>
                                </motion.button>
                        </div>
                    </div>
                </div>
            </div>
                </motion.section>
                <motion.section
                    variants={containerVar1}
                    initial="hidden"
                    whileInView="visible"
                    className="bg-transparent overflow-hiden px-[5rem] gap-[2rem] z-20"
                    style={{y: fallY}}>
            <div className="container mx-[8rem]">
                <div className="flex flex-col lg:flex-row justify-center items-strech mx-4">
                    <div className="lg:w-8/12 mt-6 lg:mt-8 lg:mt-0">
                    <Image
                                srcset={imgWeb}
                                fallback={img}
                                alt="food truck alternate"
                                className={isHoverReq ? "z-10 opacity-25" : "z-10"}/>
                                 <motion.button
                                    className="absolute z-20 top-[50%] right-[56%] font-mari text-[3rem] font-bold tracking-wide text-[#D8C29D] border-2 border-[#D8C29D] px-6 py-2 rounded-lg bg-[#07252d]"
                                    variants={header1}
                                    initial="initial"
                                    animate="animate"
                                    onMouseEnter={handleHoverReq}
                                    onMouseLeave={handleHoverLeaveReq}
                                    onClick={handleContact}>
                                        <motion.p
                                            variants={wordVariants}
                                            whileHover="hovered">Request Us.</motion.p>
                                </motion.button>
                    </div>
                    <div className=" lg:w-4/12 flex justify-center items-center mt-[10rem]">
                        <div className="relative w-full h-full">
                        <motion.div
                        variants={divVariants} initial="hidden" whileInView="visible" >
                            <h1 className="lg:text-5xl xl:text-6xl tracking-wide font-mari text-[#D8C29D] w-7/12"><SuccessTxt text="Request Us."/></h1>
                            <p className="lg:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 font-rah font-bold tracking-wide leading-normal text-[2rem] tracking-wide text-[#D8C29D]">Send us a location request or private event! </p>
                            <motion.p 
                                initial={{opacity: 0}}
                                animate={{opacity: 1, transition: {delay: 2, duration: 1.4}}}
                                className="lg:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 font-mari text-[2rem] font-bold tracking-wide text-[#D8C29D]">- YaYa</motion.p>
                        </motion.div>
                        </div>
                    </div>
                </div>
            </div>
                </motion.section>
                <LazyLoadComponent>
                    <section className="mt-[2rem]">
                        <Section5 />
                    </section>
                </LazyLoadComponent>
                <LazyLoadComponent>
                    <section>
                        <Footer />
                    </section>
                </LazyLoadComponent>
            </motion.section>
        </AnimatePresence>

    )
};

export default FoodTruck;