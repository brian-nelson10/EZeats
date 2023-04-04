import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import "./social.css";


const log = {
    initial: { x: -100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 1.9,
        duration: 2.5,
        ease: [0.6, -0.05, 0.01, 1.5],
      },
    },
  };
const Social = () => {
    const [color, setColor] = useState(false)
    
    useEffect(() => {
      const changeColor = () => {
        if (window.scrollY >= 3200) {
          setColor(true)
        } else {
          setColor(false)
        }
      }
      window.addEventListener("scroll", changeColor);
      return () => window.removeEventListener("scroll", changeColor);
    }, []);
    
    return (
<motion.div 
    layout
    variants={log} 
    initial="initial"
    animate="animate"
    className= {color ? " invisible" : "social text-[#D8C29D] flex flex-col gap-8 fixed z-50"}>
            <div className="socialText inline-block tracking-5px mb-[2rem] -translate-x-[1px] ">
              <ul>
              <li>
                  <a
                    href="http://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className='text-[1.8rem] tracking-[.5rem] rotate-90 -translate-y-[90px] -translate-x-[65px] font-rah mb-[9rem] socialText'>Instagram</p>
                  </a>
                </li>
                <li>
                  
                    <p className='text-[1.8rem] rotate-90 -translate-y-[80px] -translate-x-[70px] font-rah socialText'>♦️</p>
                </li>
                 <li>
                  <a
                    href="http://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className='text-[1.8rem] tracking-[.5rem] rotate-90 -translate-y-[80px] -translate-x-[65px] font-rah socialText'>Facebook</p>
                    {/* <svg xmlns="http://www.w3.org/2000/svg"  className='mb-[2rem]' viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"/></svg> */}
                    {/* <FaFacebook className='mb-[2rem]'/> */}
                  </a>
                </li>
               
              </ul>
            </div>
          </motion.div>
)};
export default Social;