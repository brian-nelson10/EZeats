import React from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import OrderButton from "../components/OrderButton";
import Hamburger from "../components/Hamburger";
import Section5 from "../components/Section5";
import Footer from "../components/Footer";
import ContactTitle from "../components/NavTitle/contactTitle";
import img from "../assets/carousel/3.JPG";
import img2 from "../assets/carousel/1.JPG";
import img3 from "../assets/carousel/2.JPG";
import CateringMenu from "../components/Section2/cateringMenu";
import CarouselPage from "../components/Carousel";
import { useNavigate } from "react-router";

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
    hidden: { opacity: 0, y: -500 },
    visible: {
        opacity: 1,


    }
}
const containerVar = {
    visible: { transition: { staggerChildren: .2 } }
};

const Catering = () => {
    React.useState(() => {
        typeof windows !== "undefined" && window.scrollTo(0, 0);
    }, []);
    const { scrollYProgress } = useScroll();
    const fallY = useTransform(scrollYProgress, [0, 1], [-100, 300]);
    const navigate = useNavigate();

    function handleContact() {
        navigate("/contact")
    };
    return (
        <AnimatePresence mode="wait">
            <motion.section
                className="square gradient3 overflow-hidden"
                variants={main}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <section className="grid grid-cols-3 w-screen z-50 h-[2rem] fixed">
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
                <section className="h-[50rem] gradient3  overflow-hidden" >
                    <div className="px-[9rem] py-[10rem]">
                        <div
                            className="grid mt-[2rem]">
                            <motion.h1
                                variants={header}
                                className="tracking-wide text-[5rem] font-mari text-[#D8C29D]">Catering</motion.h1>
                        </div>
                    </div>
                </section>
                <motion.section
                    variants={containerVar}
                    initial="hidden"
                    animate="visible"
                    className="bg-transparent overflow-hiden px-[5rem] -mt-[22rem] mb-[28rem] z-20 h-auto overflow-hidden">
                        <motion.div 
                            className="px-10"
                            initial="initial"
                            whileInView="animate" 
                            variants={header1}>
                            <p className="tracking-wide text-[3.5rem] font-rah text-[#D8C29D] text-center">Let our catering team create an elegant and customized package for you, offering a range of traditional dishes and flavors to suit any event or occasion.</p>
                        </motion.div>
                </motion.section>

                <hr className="border-6 border-[#D8C29D]"/>
                <LazyLoadComponent>
                <motion.section
                    variants={containerVar}
                    initial="hidden"
                    animate="visible"
                    className="bg-transparent grid grid-cols-3 mt-[8rem] px-[5rem] gap-[2rem] pt-[5rem] z-20" style={{ y: fallY }}>
                    <motion.div
                        variants={divVariants}
                        className="bottom-0"
                        >
                        <img className="h-[35rem] w-[45rem] rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] z-10" src={img} alt="" />
                    </motion.div>
                    <motion.div variants={divVariants} className="">
                        <img className="h-[35rem] w-[45rem] rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,1)]" src={img2} alt="" />
                    </motion.div>
                    <motion.div variants={divVariants} className="">
                        <img className="h-[35rem] w-[45rem] rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,1)]" src={img3} alt="" />
                    </motion.div>
                </motion.section>
                </LazyLoadComponent>
                <LazyLoadComponent>
                    <section className="-mt-[20rem]">
                        <CateringMenu/>
                    </section>
                </LazyLoadComponent>
                <section className="grid px-[10rem] py-[5rem] -mt-[10rem]  text-center justify-center items-center">
                    <div className="text-center justify-center flex-row flex">
                        <p className="font-rah text-[6rem] text-[#D8C29D]">Questions?</p>
                        <p 
                            className="font-mari text-[6rem] text-[#D8C29D] hover:cursor-pointer hover:opacity-[.5]"
                            onClick={handleContact}>CONTACT US</p>
                    </div>
                </section>
                <LazyLoadComponent>
                    <section>
                    <CarouselPage/>
                    </section>
                </LazyLoadComponent>
                <LazyLoadComponent>
                    <section>
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

export default Catering;