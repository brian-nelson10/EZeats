import React from 'react';
import { motion } from 'framer-motion';
import "./styles.css";
const columns = [
  {
    header: 'Food Truck',
    image: 'menu',
    link: 'https://foodtruck.pub/order/menu.aspx?busid=5143',
  },
  {
    header: 'Restaurant',
    image: 'menu1',
    link: 'https://www.clover.com/online-ordering/ez-eatz-by-yaya-llc-jacksonville',
  },
];

const Order = () => {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      {columns.map((column, index) => (
        <motion.div
          key={index}
          className={`flex-1 h-full border-l-2 border-r-2 border-black ${
            index < columns.length - 1 ? 'border-solid' : ''
          }`}
          style={{
            backgroundImage: `url(${column.image})`,
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
          }}
          initial={{ opacity: 0, x: -20, scale: 1 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -20 }}
          whileHover={{ scale: 1.05 }} // Zoom in effect on hover
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className={`h-full flex flex-col justify-center items-center font-mari text-[2rem] md:text-[5rem] tracking-wide text-[#32cd32] overflow-hidden ${column.image}`}>
            <h2 className="mb-2 bg-black rounded-lg p-2 border-2 border-[#32cd32]">{column.header}</h2>
            <a
              href={column.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D8C29D] font-bold py-2 px-4 rounded font-rah  bg-black rounded-lg p-2 border-2 border-[#32cd32] hover:cursor-pointer"
            >
              Order Now
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Order;
