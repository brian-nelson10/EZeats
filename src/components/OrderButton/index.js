import React from "react";
import "./order.css";
// import { motion } from "framer-motion";
import Image from "../Image";
import orderWeb from "../../assets/web/order.webp";
import order from "../../assets/images/order.png";

export default function OrderButton() {
    return (
        // <motion.div
        // animate={{ rotate: 360 }}
        // transition={{ ease: "linear", duration: 9, repeat: Infinity }}
        // className="">
        <Image
            srcSet={orderWeb}
            fallback={order}
            className="w-[70%] h-[70%] order"/>
            //  </motion.div>
    );
};