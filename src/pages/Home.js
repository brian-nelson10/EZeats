import React, { useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Hero from "../components/Hero";
import OrderButton from "../components/OrderButton";
import Hamburger from "../components/Hamburger";
import NavTitle from "../components/NavTitle";
import MenuButton from "../components/MenuButton";
import Social from "../components/Social";
import Section1 from "../components/Section1";
import Beans from "../components/Beans";
import Pepper from "../components/Pepper";
import Section2 from "../components/Section2";
import Onion from "../components/Onion/Index";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Ginger from "../components/Ginger";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Footer from "../components/Footer";
import Section5 from "../components/Section5";

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
const Home = () => {
    React.useState(() => {
        typeof windows !== "undefined" && window.scrollTo(0, 0);
      }, []);
    return (
        <AnimatePresence mode="wait" >
            <motion.section
                className="square"
                variants={main}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <section className="grid grid-cols-3 w-screen z-50 fixed">
                    <div className="grid items-center justify-end">
                        <Hamburger/>
                    </div>
                    <div>
                        <NavTitle text="EZ EATZ"/>
                    </div>
                    <div className="grid items-center justify-end mr-4 mt-6">
                        <OrderButton />
                    </div>
                </section>
                <section className="z-10 relative">
                <Hero text="EZ EATZ" />
                </section>
                <section>
                    <LazyLoadComponent>
                    <Social/>
                    </LazyLoadComponent>
                </section>
                <section>
                <MenuButton/>
                </section>
                <section 
                    className="ingredients z-50 relative">
                    <LazyLoadComponent>
                        <Ginger/>
                    <Beans/>
                    </LazyLoadComponent>
                    <LazyLoadComponent>
                    <Onion/>
                    </LazyLoadComponent>
                </section>
                <section className="section-about pt-[200px] pb-[200px] z-40 relative">
                <LazyLoadComponent>
                    <Pepper/>
                    </LazyLoadComponent>
                    <LazyLoadComponent>
                    <Section1/>
                    </LazyLoadComponent>
                </section>
                <section className="z-30 relative">
                    <LazyLoadComponent>
                    <Section2/>
                    </LazyLoadComponent>
                </section>
                <section className="z-30 relative">
                    <LazyLoadComponent>
                        <Section3/>
                    </LazyLoadComponent>
                </section>
                <section className="z-20 relative">
                    <LazyLoadComponent>
                        <Section4/>
                    </LazyLoadComponent>
                </section>
                <section className="z-20 relative">
                    <LazyLoadComponent>
                        <Section5/>
                    </LazyLoadComponent>
                </section>
                {/* <section className="">
                    <LazyLoadComponent>
                        <Section6/>
                    </LazyLoadComponent>
                </section> */}
                <section className="">
                    <LazyLoadComponent>
                        <Footer/>
                    </LazyLoadComponent>
                </section>
            </motion.section>
        </AnimatePresence>
    );
};
export default Home;