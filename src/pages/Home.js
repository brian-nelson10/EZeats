import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "../components/Hero";
import OrderButton from "../components/OrderButton";
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
                <section className="grid grid-cols-3 w-screen z-50 fixed">
                    <div>Menu</div>
                    <div>Ez Eatz</div>
                    <div className="grid items-center justify-end mr-4 mt-6">
                        <OrderButton />
                    </div>
                </section>
                <section className="z-10 relative">
                <Hero text="EZ EATZ" />
                </section>
            </motion.section>
        </AnimatePresence>
    );
};
export default Home;