import React from "react";
import "../Section1/section.css";
import { AnimatePresence, motion } from "framer-motion";

const pack = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 2,
            ease: "easeIn"
        }
    }
}
const pack2 = {
    initial: {
        opacity: 0, 
        y: 400,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 40,
                restDelta: 0.01,
                duration: 1,
}
}
}
const menuVariant = {
    animate: {
        transition: {
            
            staggerChildren: 0.5,
            type: "spring",
            damping: 12,
            stiffness: 100, 
        }
    },
}
const menuItem = {
    animate: {
   opacity: 1,
   transition: { duration: 1, ease: "easeInOut"}
    }
}
export default function Section2() {
    
    return (
        <AnimatePresence>
        <div className="gradient2 w-screen h-auto z-50 -mt-[18rem] xl:-mt-[13rem] xl:pb-[16rem]" id="menuComponent" >
            <motion.div className="container flex-wrap">
                <motion.div className="aboutHero grid w-screen items-center justify-center">
                    <div className="mt-[5rem] mb-[2rem] xl:-mb-[1.5rem] text-center font-mari tracking-widest text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] text-[#D8C29D]">
                        <motion.div
                            className="flex flex-row gap-6"
                            variants={pack}
                            initial="initial"
                            whileInView="animate">
                                <svg className="mt-8 xl:mt-12 h-[34pt] w-[34pt] xl:h-[64pt] xl:w-[64pt]" version="1.0" xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="#D8C29D" stroke="none">
<path d="M199 483 c-62 -82 -113 -155 -113 -163 0 -16 222 -310 234 -310 12 0
234 294 234 310 0 16 -222 310 -234 310 -4 0 -59 -66 -121 -147z"/>
</g>
</svg> MENU <svg className="mt-8 xl:mt-12 h-[34pt] w-[34pt] xl:h-[64pt] xl:w-[64pt]" version="1.0" xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="#D8C29D" stroke="none">
<path d="M199 483 c-62 -82 -113 -155 -113 -163 0 -16 222 -310 234 -310 12 0
234 294 234 310 0 16 -222 310 -234 310 -4 0 -59 -66 -121 -147z"/>
</g>
</svg></motion.div>
                    </div>
                </motion.div>
                <section className="container py-[1rem] xl:w-5/6 bg-[#D8C29D] shadow-[1px_35px_35px_2px_rgba(0,0,0,0.5)] -mt-[2rem] md:mt-[3rem] md:mx-auto items-center justify-center text-center h-auto xl:h-[117rem] md:h-[100rem] md:ml-[15rem] rounded-xl z-50 bg-fixed bg-deco">
                    <div className="container my-20 px-6 mx-auto text-xl">
                        <motion.div
                            variants={pack2}
                            initial="initial"
                            whileInView="animate" 
                            className="block xl:mx-[18rem] bg-[#D8C29D] py-[2rem] mb-[2rem] border-seperate border-2 border-[#023047] rounded-lg shadow-lg">
                            <h1 className="font-mari text-[2rem] mt-[.5rem] text-center text-[#023047]">Moroccan Whole Chicken</h1>
                            <p className="font-rah text-[1rem] tracking-widest font-bold text-center text-[#023047] mt-8">Marinated moroccan style whole rotisserie chicken</p> 
                            <p className="font-rah text-[1rem] tracking-widest font-bold text-center text-[#023047] mt-4">with sauce, rolls, and two family style sides.</p> 
                            <p className="font-mari text-[2rem] tracking-wide font-bold text-center text-[#023047] mt-4 mb-1">$ 30</p> 
                        </motion.div>
                        <div className="grid gap-6 lg:gap-x-12">
                            <div className="grid gap-4 xl:grid-cols-3 mb-6 lg:mb-0 ">
                                <motion.div 
                                    variants={pack2}
                                    initial="initial"
                                    whileInView="animate" 
                                    className="block w-[160%] xl:w-[100%] ml-1 border-solid border-[#023047] border-seperate border-2 rounded-lg shadow-lg py-[1rem] xl:my-[3rem] xl:h-[30rem] bg-[#D8C29D]">
                                        <motion.div
                                            variants={pack}
                                            className="font-mari tracking-wide text-[2rem] mt-[.5rem] text-center text-[#023047]">
                                                Small Plates
                                            </motion.div>
                                            <motion.ul variants={menuVariant} initial="initial" whileInView="animate" className="">
                                            <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                    <div className="text-start font-rah text-[1.1rem] tracking-widest font-bold text-[#023047]">
                                                    Signature Hummus
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#023047]">
                                                    8$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8">
                                                    <div className="text-start font-rah text-[1.1rem] tracking-widest font-bold text-[#023047]">
                                                    Roasted Red Pepper Hummus
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#023047]">
                                                    8$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8">
                                                    <div className="text-start font-rah text-[1.1rem] tracking-widest font-bold text-[#023047]">
                                                    Tabouleh
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#023047]">
                                                    8$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8">
                                                    <div className="text-start font-rah text-[1.1rem] tracking-widest font-bold text-[#023047]">
                                                    Grilled Haloumi
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#023047]">
                                                    8$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8">
                                                    <div className="text-start font-rah text-[1.1rem] tracking-widest font-bold text-[#023047]">
                                                    Babaganoush
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#023047]">
                                                    8$
                                                    </div>
                                                </motion.li>
                                                </motion.ul>

                                </motion.div>
                                <motion.div 
                                    variants={pack2}
                                    initial="initial"
                                    whileInView="animate" 
                                    className="block col-span-2 border-spacing-[3rem] bg-[#D8C29D] border-seperate border-2 border-solid border-[#023047] rounded-lg shadow-lg py-[2rem] sl:h-[50rem]">
                                    {/* <div className="p-6 border-black border-gray-300 bordertext-center">

                                    </div> */}
                                     <motion.div
                                            variants={pack}
                                            className="font-mari tracking-wide text-[3rem] mt-[.5rem] text-center text-[#023047]">
                                                Mains
                                            </motion.div>
                                            <motion.ul variants={menuVariant} initial="initial" whileInView="animate" className="mx-[2rem] my-[2rem]">
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem]">
                                                    <div className="grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#023047]">
                                                    Steak Kabobs 
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#023047]">
                                                        20$
                                                    </div>
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#023047]">
                                                        Saffron rice, Hummus, Pickled Cucumbers
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem]">
                                                <div className="grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#023047]">
                                                    Chicken Kabobs 
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#023047]">
                                                        20$
                                                    </div>
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#023047]">
                                                        Saffron rice, Hummus, Pickled Cucumbers
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{ opacity: 0 }} className="grid grid-cols-2 mb-[2rem]">
                                                <div className="grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#023047]">
                                                    Grilled Salmon
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#023047]">
                                                        20$
                                                    </div>
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#023047]">
                                                        Saffron rice, Hummus, Pickled Cucumbers
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}} className="grid grid-cols-2 mb-[2rem]">
                                                <div className="grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#023047]">
                                                    Broiled Seabass
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#023047]">
                                                        20$
                                                    </div>
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#023047]">
                                                        Saffron rice, Hummus, Pickled Cucumbers
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}} className="grid grid-cols-2 mb-[2rem]">
                                                <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#023047]">
                                                    <div>Grilled Tempeh</div><div> <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fill="#023047" fillRule="evenodd" clipRule="evenodd" width="20px" height="20px" viewBox="0 0 512 512"><g fillRule="nonzero"><path d="M255.998 0c70.69 0 134.694 28.658 181.017 74.982C483.342 121.308 512 185.312 512 256.002c0 70.689-28.658 134.69-74.985 181.016C390.692 483.342 326.688 512 255.998 512c-70.689 0-134.687-28.658-181.017-74.982C28.657 390.689 0 326.691 0 256.002c0-70.69 28.657-134.694 74.981-181.017C121.308 28.658 185.309 0 255.998 0z"/><path fill="#fff" d="M283.004 162.24h63.307l-46.503 187.523h-87.61L165.691 162.24h63.307l25.505 119.116h2.7z"/></g></svg>
                                                    </div>
                                                    </div>
                                                    
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#023047]">
                                                        20$
                                                    </div>
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#023047]">
                                                        Saffron rice, Hummus, Pickled Cucumbers
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}} className="grid grid-cols-2 mb-[2rem]">
                                                <div className="grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#023047]">
                                                    Steak Kabobs 
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#023047]">
                                                        20$
                                                    </div>
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#023047]">
                                                        Saffron rice, Hummus, Pickled Cucumbers
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}} className="grid grid-cols-2 mb-[2rem]">
                                                <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#023047]">
                                                    <div>Plant Based Protein Balls</div><div> <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fill="#023047" fillRule="evenodd" clipRule="evenodd" width="20px" height="20px" viewBox="0 0 512 512"><g fillRule="nonzero"><path d="M255.998 0c70.69 0 134.694 28.658 181.017 74.982C483.342 121.308 512 185.312 512 256.002c0 70.689-28.658 134.69-74.985 181.016C390.692 483.342 326.688 512 255.998 512c-70.689 0-134.687-28.658-181.017-74.982C28.657 390.689 0 326.691 0 256.002c0-70.69 28.657-134.694 74.981-181.017C121.308 28.658 185.309 0 255.998 0z"/><path fill="#fff" d="M283.004 162.24h63.307l-46.503 187.523h-87.61L165.691 162.24h63.307l25.505 119.116h2.7z"/></g></svg>
                                                    </div>
                                                    </div>
                                                    
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#023047]">
                                                        20$
                                                    </div>
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#023047]">
                                                        Saffron rice, Hummus, Pickled Cucumbers
                                                    </div>
                                                </motion.li>
                                            </motion.ul>

                                </motion.div>
                            </div>

                        </div>
                        <motion.div
                            variants={pack2}
                            initial="initial"
                            whileInView="animate" 
                            className="block xl:mx-[15rem] bg-[#D8C29D] mt-[3rem] py-[2rem] mb-[2rem] border-seperate border-2 border-[#023047] rounded-lg shadow-lg">
                            <h1 className="font-mari text-[2rem] mt-[.5rem] text-center text-[#023047]">Moroccan Bread Pudding</h1>
                            <p className="font-rah text-[1rem] tracking-widest font-bold text-center text-[#023047] mt-8">Moroccan Bread, Raisins, Streussel Topping</p> 
                            <p className="font-rah text-[1rem] tracking-widest font-bold text-center text-[#023047] mt-4">with Saffron Ice Cream</p> 
                            <p className="font-mari text-[2rem] tracking-wide font-bold text-center text-[#023047] mt-4 mb-1">$ 10</p> 
                        </motion.div>
                    </div>
                </section>
            </motion.div>
        </div>
        </AnimatePresence>
    )
}