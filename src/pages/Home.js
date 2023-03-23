import React from "react";
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
    return (
        <AnimatePresence mode="wait" >
            <motion.section
                className="square"
                variants={main}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <section className="grid grid-cols-3 w-screen z-40 fixed">
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
                <section className="">
                    <LazyLoadComponent>
                        <Ginger/>
                    <Beans/>
                    </LazyLoadComponent>
                    <LazyLoadComponent>
                    <Onion/>
                    </LazyLoadComponent>
                </section>
                <section className="section-about pt-[200px] pb-[200px]">
                <LazyLoadComponent>
                    <Pepper/>
                    </LazyLoadComponent>
                    <LazyLoadComponent>
                    <Section1/>
                    </LazyLoadComponent>
                </section>
                <section>
                    <LazyLoadComponent>
                    <Section2/>
                    </LazyLoadComponent>
                </section>
                <section>
                    <LazyLoadComponent>
                        <Section3/>
                    </LazyLoadComponent>
                </section>
            </motion.section>
        </AnimatePresence>
    );
};
export default Home;