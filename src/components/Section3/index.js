import React, { useEffect } from "react"
import { motion } from "framer-motion";
import SuccessTxt from "../SuccessTxt";
import cateringWeb from "../../assets/web/12.webp";
import catering from "../../assets/images/12.JPG";
// import { useNavigate } from "react-router-dom";
import Image from "../Image";

const section = {
    initial: {
        y: 800,
        opacity: 0
    },
    animate: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            type: 'spring',
            mass: 0.4,
            damping: 8,
            duration: .8,
        }
    },
    exit: {
        opacity: 1,
        y: 800,
        transition: {
            ease: 'easeInOut',
            duration: .3
        }
    }
};
const Section3 = () => {
    // const navigate = useNavigate();
    // Scroll user to top to avoid showing the footer
    React.useState(() => {
        typeof windows !== "undefined" && window.scrollTo(0, 0);
      }, []);
      
    return (
        <motion.section 
            layout
            variants={section}
            initial="initial"
            animate="animate"
            exit="exit"
            className="mx-[2rem] mt-[7rem]">
            <div className="container mx-auto py-9 lg:py-12 lg:py-24">
                <div className="flex flex-col lg:flex-row justify-center items-strech mx-4">
                    <div className="lg:w-4/12 flex justify-center items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 w-7/12"><SuccessTxt text="Private Events"/></h1>
                            <p className="lg:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 font-roboto font-bold tracking-wide leading-normal text-[#283845]">We can cater your event. Custom menu's available. Hit button below for details. Thank you for supporting our small, local business.</p>
                            <motion.p 
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1, transition: {delay: .5, duration: 1.4}}}
                                
                                className="lg:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 font-tomatoes text-[2rem] font-bold leading-normal text-[#283845]">- Yaya</motion.p>
                        </div>
                    </div>
                    <div className="lg:w-8/12 mt-6 lg:mt-8 lg:mt-0">
                        <div className="relative w-full h-full">
                            <Image
                                srcset={cateringWeb}
                                fallback={catering}
                                alt="cateringagne img"/>
                        </div>
                    </div>
                </div>
            </div>
            </motion.section>
    );
};
export default Section3;

