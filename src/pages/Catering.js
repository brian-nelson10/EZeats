import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import OrderButton from "../components/OrderButton";
import Hamburger from "../components/Hamburger";
import Section5 from "../components/Section5";
import Footer from "../components/Footer";
import ContactTitle from "../components/NavTitle/contactTitle";

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
// const header1 = {
//     initial: {
//         opacity: 0
//     },
//     animate: {
//         opacity: 1,
//         transition: {
//                 duration: 1.8,
//                 delay: .75
//         }
//     }
// }

const Catering = () => {
    React.useState(() => {
        typeof windows !== "undefined" && window.scrollTo(0, 0);
      }, []);

      return (
        <AnimatePresence mode="wait">
            <motion.section
                className="square"
                variants={main}
                initial="initial"
                animate="animate"
                exit="exit">
                    <section className="grid grid-cols-3 w-screen z-50 h-[2rem] fixed">
                    <div className="items-center justify-end mt-[3rem]">
                        <Hamburger/>
                    </div>
                    <div>
                        <ContactTitle text="EZ EATZ"/>
                    </div>
                    <div className="grid items-center justify-end mr-4 mt-6">
                        <OrderButton />
                    </div>
                </section>
                <section className="h-[50rem] gradient3">
                <div className="px-[9rem] py-[10rem]">
                        <div
                            className="grid mt-[2rem]">
                            <motion.h1 
                                variants={header}
                                className="tracking-wide text-[5rem] font-mari text-[#D8C29D]">Catering</motion.h1>
                        </div>
                </div>
                </section>
                <LazyLoadComponent>
                <section>
                    <Section5/>
                </section>
                </LazyLoadComponent>
                <LazyLoadComponent>
                <section>
                    <Footer/>
                </section>
                </LazyLoadComponent>
                </motion.section>
        </AnimatePresence>

      )
};

export default Catering;