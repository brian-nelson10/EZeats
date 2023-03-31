import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import img from "../../assets/images/6.JPG";
import "../Section1/section.css";

export const Truck = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const bottomShadowValue = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const imageValue = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const topShadowValue = useTransform(scrollYProgress, [0, 1], ["100%", "-25%"]);

  return (
    <section className="scroll-container flex mx-auto gap-[2rem]" ref={containerRef}>
      
      <div className="img-container flex relative w-[75%]">
        <motion.div className="img-inner" style={{ translateX: imageValue }}>
          <motion.div
            className="bottom-shadow h-[100%] w-[100%] absolute left-0 top-0"
            style={{ translateX: bottomShadowValue }}
          />
          <img className="img4 h-auto w-[100%] ml-[46rem] relative" src={img} alt="" />
          <motion.div
            className="top-shadow h-[100%] w-[1%] absolute left-0 top-0"
            style={{ translateX: topShadowValue }}
          />
        </motion.div>
      </div>
      <div className="copy flex items-center justify-center w-[50%] text-[3rem] text-end font-rah font-bold tracking-widest">
        <h2 className="head text-[#D8C29D]">Private Events & Catering</h2>
      </div>
    </section>
  );
};
