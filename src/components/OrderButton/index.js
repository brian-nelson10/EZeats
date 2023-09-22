import React from "react";
import "./order.css";
import { motion } from "framer-motion";
import Image from "../Image";
import orderWeb from "../../assets/web/order.webp";
import order from "../../assets/images/order.png";
const wordVariants = {
    hovered: {
      y: [0, -5, 0, 5, 0],
      transition: { duration: .5, ease: 'easeInOut' }
    }
  }
  let url = "https://www.ezeatzjax.com/order"
export default function OrderButton() {
    return (
        <motion.div
        variants={wordVariants}
        whileHover="hovered"
        className=""
        onClick={() => {window.location.href = url;}}>
        <Image
            srcSet={orderWeb}
            fallback={order}
            className="ml-10 md:ml-8 lg:ml-1 w-[70%] h-[70%] order hover:cursor-pointer"/>
              </motion.div>
    );
};