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
export default function OrderButton() {
    return (
        <motion.div
        variants={wordVariants}
        whileHover="hovered"
        className="">
        <Image
            srcSet={orderWeb}
            fallback={order}
            className="w-[70%] h-[70%] order hover:cursor-pointer"/>
              </motion.div>
    );
};