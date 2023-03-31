import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import img from "../../assets/images/6.JPG";
import "../Section1/section.css";

export const Cater = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const bottomShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  );
  const imageValue = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const topShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-25%", "100%"]
  );

  return (
    <section className="scroll-container flex mx-auto gap-[2rem]" ref={containerRef}>
      <div className="copy flex items-center justify-center w-[50%] text-[3rem] text-start ml-[5%] font-rah font-bold tracking-widest">
        <h2 className="head text-[#D8C29D]">Private Events & Catering</h2>
      </div>
      <div className="img-container flex items-center relative w-[75%]">
        <motion.div className="img-inner" style={{ translateX: imageValue }}>
          <motion.div
            className="bottom-shadow h-[100%] w-[100%] absolute left-0 top-0"
            style={{ translateX: bottomShadowValue }}
          />
          <img className="img4 h-auto w-[100%] relative" src={img} alt="" />
          <motion.div
            className="top-shadow h-[100%] w-[140%] absolute left-0 top-0"
            style={{ translateX: topShadowValue }}
          />
        </motion.div>
      </div>
    </section>
  );
};
