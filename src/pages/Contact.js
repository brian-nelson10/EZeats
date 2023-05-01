import React from "react";
import "./styles.css";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import OrderButton from "../components/OrderButton";
import Hamburger from "../components/Hamburger";
import Section5 from "../components/Section5";
import Footer from "../components/Footer";
import ContactTitle from "../components/NavTitle/contactTitle";
import garlic from "../assets/images/garlic.png";
import arugula from "../assets/images/arugula.png";
import cardamom from "../assets/images/cardamom.png";
import seeds from "../assets/images/seed.png";
import pcorn from "../assets/images/peppercorn.png";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Section5Mobile from "../components/Section5/mobile";

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
const Contact = () => {
    React.useState(() => {
        typeof windows !== "undefined" && window.scrollTo(0, 0);
    }, []);
    const { scrollYProgress } = useScroll();
    const rotateY = useTransform(scrollYProgress, [0.2, 1], [-200, -190]);
    const rotateYcard = useTransform(scrollYProgress, [0.2, 1], [-200, -150]);
    const rotateYarug = useTransform(scrollYProgress, [0, 1], [-100, -140]);
    const rotateYgar = useTransform(scrollYProgress, [0, 1], [20, 32])
    const fallY = useTransform(scrollYProgress, [0, 1], [-400, -580]);
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1250;
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return (
        <AnimatePresence mode="wait">
            <motion.section
                className="square gradient3"
                variants={main}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <section className="grid grid-cols-3 w-screen z-50 fixed">
                    <div className="grid items-center justify-end">
                        {/* <Hamburger /> */}
                    </div>
                    <div>
                        <ContactTitle text="EZ EATZ" />
                    </div>
                    <div className="grid items-center justify-end lg:mr-4 z-50">
                        <OrderButton />
                    </div>
                </section>
                <LazyLoadComponent>
                <section className="xl:h-[110rem] h-[107rem] gradient3 overflow-hidden -mb-[12rem]">
                    <div className="px-[4rem] xl:px-[9rem] py-[10rem]">
                        <div
                            className="grid mt-[2rem]">
                            <motion.h1
                                variants={header}
                                className="tracking-wide text-[3rem] xl:text-[5rem] font-mari text-[#D8C29D]">Contact Us</motion.h1>
                        </div>
                        <div className="mt-[8rem] text-center">
                            <motion.h1 variants={header1} className="tracking-wide text-[3rem] xl:text-[4rem] font-rah text-[#D8C29D] mb-[2rem]">Looking for a catered event?</motion.h1>
                            <motion.hr variants={header} className="xl:w-[60%] xl:ml-[18rem] justify-center items-center text-center" />
                            <motion.h3 variants={header1} className="tracking-wide text-[1.25rem] font-rah text-[#D8C29D] mt-[3rem] -mb-[4rem]">Fill out form and we will reach out within 3 business days.</motion.h3>

                        </div>
                    </div>
                    <motion.div variants={header1} className="flex flex-col justify-center items-center text-center -mt-[1rem] -ml-10 lg:ml-0">
                        <div className="contactForm py-8 px-[15rem] relative grid grid-cols-2 gap-[7rem] z-20">
                            <div className="relative">
                                <input autocomplete="off" id="firstName" name="first name" type="text" className="peer placeholder-transparent h-[4rem] bg-transparent w-full border-b-2 text-[#D8C29D] focus:outline-none focus:border-rose-600" placeholder="First Name" />
                                <label for="first name" className="left-0 text-[#D8C29D] peer-placeholder-shown:text-[2rem] font-rah tracking-wide peer-placeholder-shown:text-[#D8C29D] peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-[#D8C29D]">First Name</label>
                            </div>
                            <div className="relative ">
                                <input autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-[4rem] bg-transparent w-full border-b-2 text-[#D8C29D] focus:outline-none focus:border-rose-600" placeholder="Email address" />
                                <label for="email" className=" left-0 text-[#D8C29D] peer-placeholder-shown:text-[2rem] font-rah tracking-wide peer-placeholder-shown:text-[#D8C29D] peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-[#D8C29D]">Last Name</label>
                            </div>
                        </div>
                    </motion.div>
                    <div className="relative grid grid-rows-2 gap-[2rem] mt-[6rem] justify-center z-20">
                        <motion.div variants={header} whileInView="animate" className="relative w-[48rem] justify-center text-center">
                            <input autocomplete="off" id="firstName" name="first name" type="text" className="peer placeholder-transparent h-[4rem] bg-transparent w-full border-b-2 text-[#D8C29D] focus:outline-none focus:border-rose-600" placeholder="First Name" />
                            <label for="first name" className="text-center text-[#D8C29D] peer-placeholder-shown:text-[2rem] font-rah tracking-wide peer-placeholder-shown:text-[#D8C29D] peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-[#D8C29D]">Email Address</label>
                        </motion.div>
                        <motion.div variants={header1} whileInView="animate" className="relative w-[48rem] justify-center text-center">
                            <input autocomplete="off" id="firstName" name="first name" type="text" className="peer placeholder-transparent h-[4rem] bg-transparent w-full border-b-2 text-[#D8C29D] focus:outline-none focus:border-rose-600" placeholder="First Name" />
                            <label for="first name" className="text-center text-[#D8C29D] peer-placeholder-shown:text-[2rem] font-rah tracking-wide peer-placeholder-shown:text-[#D8C29D] peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-[#D8C29D]">Let us know what you need!</label>
                        </motion.div>
                    </div>

                    <div className="relative flex justify-center mt-[5rem] z-20">
                        <div className="submit-btn_dec left w-embed mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 28.08 27.348">
                                <g id="Group_73" data-name="Group 73" transform="translate(-504.919 -8455.826)">
                                    <path id="Path_185" data-name="Path 185" d="M26.888,67.463l9.1-1.9-5.829-7.244L21.14,60.25Zm.092-.253,8.392-1.871-8.341,1.724L21.755,60.47Z" transform="translate(476.109 8420.173) rotate(-20)" fill="#D8C29D"></path>
                                    <path id="Path_186" data-name="Path 186" d="M26.888,67.463l9.1-1.9-5.829-7.244L21.14,60.25Zm.092-.253,8.392-1.871-8.341,1.724L21.755,60.47Z" transform="translate(465.109 8427.01) rotate(-20)" fill="#D8C29D"></path>
                                    <path id="Path_187" data-name="Path 187" d="M26.888,67.463l9.1-1.9-5.829-7.244L21.14,60.25Zm.092-.253,8.392-1.871-8.341,1.724L21.755,60.47Z" transform="translate(465.109 8413.336) rotate(-20)" fill="#D8C29D"></path>
                                </g>
                            </svg>
                        </div>
                        <a type="submit" value="SUBMIT" data-back="SENT" data-front="SUBMIT" data-wait="Please wait..." className="btn-flip text-[#D8C29D] font-mari tracking-widest text-[3rem] border-[#D8C29D] hover:cursor-pointer " />
                        <div className="submit-btn_dec right w-embed ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 28.08 27.348">
                                <g id="Group_74" data-name="Group 74" transform="translate(0 0)">
                                    <path id="Path_185" data-name="Path 185" d="M5.748,0l9.1,1.9L9.018,9.148,0,7.213ZM5.84.253l8.392,1.871L5.891.4.615,6.993Z" transform="translate(13.952 20.511) rotate(-160)" fill="#D8C29D"></path>
                                    <path id="Path_186" data-name="Path 186" d="M5.748,0l9.1,1.9L9.018,9.148,0,7.213ZM5.84.253l8.392,1.871L5.891.4.615,6.993Z" transform="translate(24.952 27.348) rotate(-160)" fill="#D8C29D"></path>
                                    <path id="Path_187" data-name="Path 187" d="M5.748,0l9.1,1.9L9.018,9.148,0,7.213ZM5.84.253l8.392,1.871L5.891.4.615,6.993Z" transform="translate(24.952 13.674) rotate(-160)" fill="#D8C29D"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="gradient3 xl:-mt-[45rem] z-10">
                            <motion.div className="xl:-mt-[20rem] ml-2" style={{ y: fallY }}>
                                <motion.img style={{ rotate: rotateYcard }} src={cardamom} className="xl:w-[15%] xl:h-[15%] w-[50%] h-[50%] items-center jusitfy-center xl:ml-[75rem] -ml-[3rem] -mt-[10rem]"
                                />
                            </motion.div>
                            <motion.div className="-mt-[30rem] overflow-hidden" style={{ y: fallY }}>
                                <motion.img style={{ rotate: rotateY }} src={pcorn} className="xl:w-[15%] xl:h-[15%] w-[50%] h-[50%] items-center jusitfy-center xl:ml-[21.5rem] ml-[19rem]"
                                />
                            </motion.div>
                            <motion.div className="mt-[29rem] ml-[12rem]" style={{ y: fallY }}>
                                <motion.img style={{ rotate: rotateY }} src={seeds} className="xl:w-[20%] xl:h-[20%] w-[80%] h-[80%] items-center jusitfy-center xl:ml-[70rem] ml-[5rem] -mt-[10rem]"
                                />
                            </motion.div>
                            <motion.div className="mt-[11rem] " style={{ y: fallY }}>
                                <motion.img style={{ rotate: rotateYgar }} src={garlic} className="xl:w-[20%] xl:h-[20%] w-[50%] h-[50%] items-center jusitfy-center ml-[13rem] xl:ml-[8rem] -mt-[9rem]"
                                />
                            </motion.div>
                            <motion.div className="mt-[60rem] top-0 right-0" style={{ y: fallY }}>
                                <motion.img style={{ rotate: rotateYarug }} src={arugula} className=" xl:w-[20%] xl:h-[20%] w-[50%] h-[50%] items-center jusitfy-center xl:ml-[85rem] -ml-[2rem] -mt-[49rem] xl:-mt-[40rem]"
                                />
                            </motion.div>
                    </div>
                </section>
                    <section>
                    {width < breakpoint ? <Section5Mobile/> : <Section5/>}
                    </section>
                    <section className="-mt-[12rem]">
                        <Footer />
                    </section>
                </LazyLoadComponent>
            </motion.section>
        </AnimatePresence>
    )
};
export default Contact;