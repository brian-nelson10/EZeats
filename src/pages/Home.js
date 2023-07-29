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
// import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Footer from "../components/Footer";
import Section5 from "../components/Section5";
import GingerMobile from "../components/Ginger/mobile";
import BeansMobile from "../components/Beans/mobile";
import PepperMobile from "../components/Pepper/mobile";
import OnionMobile from "../components/Onion/mobile";
import Section1Mobile from "../components/Section1/mobile";
import Section4Mobile from "../components/Section4/mobile";
import Section5Mobile from "../components/Section5/mobile";
import useWindowSize from '../hooks/useWindowSize';
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
  //Hook to grab window size
  const size = useWindowSize();
  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };

  // Run scrollrender once page is loaded.
//   useEffect(() => {
//     requestAnimationFrame(() => skewScrolling());
//   }, []);

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;
    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * .5;
    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;
    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };
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
                    <section className="grid grid-cols-3 w-screen z-50 fixed">
                        <div className="grid items-center justify-end z-40">
                            <Hamburger />
                        </div>
                        <div>
                            <NavTitle text="EZ EATZ" />
                        </div>
                        <div className="grid items-center justify-end lg:mr-4 z-50">
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
                        {width < breakpoint ? <GingerMobile/> : <Ginger/>}
                        {width < breakpoint ? <BeansMobile/> : <Beans/>}
                        {width < breakpoint ? <OnionMobile/> : <Onion />}
                    </section>
                    <section className="section-about pt-[200px] pb-[200px] z-30 relative">
                        {width < breakpoint ? <PepperMobile/> : <Pepper/>}
                        {width < breakpoint ? <Section1Mobile/> : <Section1/>}
                    </section>
                    <div ref={app} className="h-[100%] w-[100%] overflow-hidden bg-[#32cd32]">
      <div ref={scrollContainer} className="scroll h-[100%] w-[100%] overflow-hidden bg-[#32cd32]"> 
                    <section className="z-20 relative" ref={myRef}>
                        
                            <Section2 />
                        
                    </section>
                    {/* <section className="z-30 relative">
                        
                        {width < breakpoint ? "" : <Section3 />}
                            
                        
                    </section> */}
                    <section className="z-10 relative">
                        
                        {width < breakpoint ? <Section4Mobile/> : <Section4 />}
                       
                    </section>
                    
                    <section className="z-10 relative">
                        
                        {width < breakpoint ? <Section5Mobile/> : <Section5 />}
                        
                    </section>
                    <section className="z-50">
                        
                            <Footer />
                       
                    </section>
                    </div></div>
                    
                </motion.section>
            </AnimatePresence>
           
        );
    };
    export default Home;