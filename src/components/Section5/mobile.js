import React from "react";
// import { motion,  useAnimation } from "framer-motion";
  
export default function Section5Mobile() {
//     const x = useAnimation();

//   useEffect(() => {
//     const animation = async () => {
//       while (true) {
//         await x.start({
//           x: 40,
//           transition: {
//             type: "spring",
//             stiffness: 600,
//             damping: 70,
//             restDelta: 0.01,
//             duration: 1,
            
//           },
//         });
//         await x.start({
//           x: -40,
//           transition: {
//             type: "spring",
//             stiffness: 500,
//             damping: 80,
//             restDelta: 0.01,
//             duration: 1.5,
            
//           },
//         });
//       }
//     };
//     animation();
//   }, [x]);
  
  
    return (
        
        <section className="-mb-[.5rem] py-[10rem] bg-transparent">
            <div className="">
        <div className="grid grid-cols-3 ">
            <div className="">
                <div className="-rotate-90 absolute items-center ml-[3rem] mt-20 tracking-widest">
                <span className="text-[#D8C29D] font-rah text-[2rem]">Find Us</span>
                </div>
            </div>
            <div className="grid grid-rows-2">
                <div className="text-[#D8C29D] font-rah text-[3rem] -mb-[2rem] hover:text-[#e3dac6] hover:cursor-pointer">800 Address</div>
                <div className="text-[#D8C29D] font-rah text-[3rem] hover:text-[#e3dac6] hover:cursor-pointer">Jacksonville, Fl</div>
            </div>
            {/* <motion.div 
                  animate={x}
                  drag="x"
                  dragConstraints={{ left: -50, right: 40 }}
                  whileTap={{ cursor: "grabbing" }}
                  whileHover={{ cursor: "grab" }}
                  
                className="text-end -ml-[7rem] w-[90%]">
        <motion.svg xmlns="http://www.w3.org/2000/svg" width="30%" viewBox="0 0 70.744 90.043" className="rotate-[270deg] ">
  <g transform="translate(-5919.641 -1363.532)">
    <path id="Path_87" data-name="Path 87" d="M5869.476,1080.805s1.941-16.7,11.31-26.108,25.953-11.233,25.953-11.233" transform="translate(87.537 372.654)" fill="none" stroke="#e3dac6" stroke-width="2"></path>
    <path id="Path_88" data-name="Path 88" d="M5906.738,1080.805s-1.941-16.7-11.31-26.108-25.953-11.233-25.953-11.233" transform="translate(50.275 372.654)" fill="none" stroke="#e3dac6" stroke-width="2"></path>
    <line id="Line_10" data-name="Line 10" y2="89.928" transform="translate(5957.013 1363.532)" fill="none" stroke="#e3dac6" stroke-width="2"></line>
  </g>
</motion.svg>
</motion.div> */}
</div>
</div>
</section>

    );
};