import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
import GingerMobile from "../components/Ginger/mobile";
import BeansMobile from "../components/Beans/mobile";
import PepperMobile from "../components/Pepper/mobile";
import OnionMobile from "../components/Onion/mobile";
import Section1Mobile from "../components/Section1/mobile";
import Section4Mobile from "../components/Section4/mobile";

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
    const myRef = useRef(null);
    const [menuState, setMenuState] = useState(false);
    const handleStateChange = () => {
        setMenuState((prevState) => !prevState);
        console.log(menuState);
    }
    
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1250;
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
   // Return a function from the effect that removes the event listener
         return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
        useEffect(() => {
            if (menuState) {
                myRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }, [menuState]);
        React.useState(() => {
            typeof windows !== "undefined" && window.scrollTo(0, 0);
        }, []);

        return (
            <AnimatePresence mode="wait" >
                <motion.section
                    layout
                    className="square"
                    variants={main}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <section className="grid grid-cols-3 w-screen z-50 fixed overflow-hidden">
                        <div className="grid items-center justify-end z-40">
                            <Hamburger />
                        </div>
                        <div>
                            <NavTitle text="EZ EATZ" />
                        </div>
                        <div className="grid items-center justify-end lg:mr-4 mt-6 z-50">
                            <OrderButton />
                        </div>
                    </section>
                    <section className="z-10 relative">
                        <Hero text="EZ EATZ" />
                    </section>
                    <section>
                        <LazyLoadComponent>
                        {width < breakpoint ? "" : <Social/>}
                        </LazyLoadComponent>
                    </section>
                    <section>
                        <MenuButton setMenuState={handleStateChange} />
                    </section>
                    <section
                        className="ingredients z-40 relative">
                        <LazyLoadComponent>
                        {width < breakpoint ? <GingerMobile/> : <Ginger/>}
                        {width < breakpoint ? <BeansMobile/> : <Beans/>}
                        </LazyLoadComponent>
                        <LazyLoadComponent>
                        {width < breakpoint ? <OnionMobile/> : <Onion />}
                        </LazyLoadComponent>
                    </section>
                    <section className="section-about pt-[200px] pb-[200px] z-30 relative">
                        <LazyLoadComponent>
                        {width < breakpoint ? <PepperMobile/> : <Pepper/>}
                        </LazyLoadComponent>
                        <LazyLoadComponent>
                        {width < breakpoint ? <Section1Mobile/> : <Section1/>}
                        </LazyLoadComponent>
                    </section>
                    <section className="z-20 relative" ref={myRef}>
                        <LazyLoadComponent>
                            <Section2 />
                        </LazyLoadComponent>
                    </section>
                    <section className="z-30 relative">
                        <LazyLoadComponent>
                        {width < breakpoint ? "" : <Section3 />}
                            
                        </LazyLoadComponent>
                    </section>
                    <section className="z-10 relative">
                        <LazyLoadComponent>
                        {width < breakpoint ? <Section4Mobile/> : <Section4 />}
                        </LazyLoadComponent>
                    </section>
                    <section className="z-10 relative">
                        <LazyLoadComponent>
                            <Section5 />
                        </LazyLoadComponent>
                    </section>
                    <section className="">
                        <LazyLoadComponent>
                            <Footer />
                        </LazyLoadComponent>
                    </section>
                </motion.section>
            </AnimatePresence>
        );
    };
    export default Home;