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
        transition: { duration: 1, ease: "easeInOut" }
    }
}

const wordVariants = {
    hovered: {
      y: [0, -2, 0, 2, 0],
      transition: { duration: .5, ease: 'easeInOut' }
    }
  }
export default function CateringMenu() {

    return (
        <AnimatePresence>
            <div className="gradient3 w-screen z-50 -mt-[17rem] pb-[16rem]" id="menuComponent" >
                <motion.div className="container flex-wrap">
                    <motion.div className="aboutHero grid w-screen items-center justify-center">
                        <div className="mt-[5rem] -mb-[1.5rem] text-center font-mari tracking-widest text-[8rem] text-[#D8C29D]">
                            <motion.div
                                className="flex flex-row gap-6"
                                variants={pack}
                                initial="initial"
                                whileInView="animate">
                                <svg className="mt-12" version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
                                    preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                                        fill="#D8C29D" stroke="none">
                                        <path d="M199 483 c-62 -82 -113 -155 -113 -163 0 -16 222 -310 234 -310 12 0
234 294 234 310 0 16 -222 310 -234 310 -4 0 -59 -66 -121 -147z"/>
                                    </g>
                                </svg> CATERING MENU <svg className="mt-12" version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
                                    preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                                        fill="#D8C29D" stroke="none">
                                        <path d="M199 483 c-62 -82 -113 -155 -113 -163 0 -16 222 -310 234 -310 12 0
234 294 234 310 0 16 -222 310 -234 310 -4 0 -59 -66 -121 -147z"/>
                                    </g>
                                </svg></motion.div>
                        </div>
                    </motion.div>
                    <section className="container py-[1rem] w-5/6 bg-[#D8C29D] shadow-[1px_35px_35px_2px_rgba(0,0,0,0.5)] mt-[2rem] md:mt-[3rem] md:mx-auto items-center justify-center text-center h-[117rem] md:h-[117rem] md:ml-[15rem] rounded-xl z-50 bg-fixed bg-deco2">
                        <div className="container my-20 px-6 mx-auto text-xl">
                            <motion.div
                                variants={pack2}
                                initial="initial"
                                whileInView="animate"
                                className="block mx-[18rem] bg-[#D8C29D] py-[2rem] mb-[2rem] border-seperate border-2 border-[#07252d] rounded-lg shadow-lg">
                                <h1 className="font-mari text-[2rem] mt-[.5rem] text-center text-[#07252d]">Moroccan Family Style Chicken</h1>
                                <h1 className="font-mari text-[1rem] mt-[.5rem] text-center text-[#07252d]">2 Whole Chickens Per Platter</h1>
                                <h1 className="font-mari text-[.7rem] mt-[.5rem] text-center text-[#07252d]">Price Per Platter</h1>
                                {/* <p className="font-rah text-[1rem] tracking-widest font-bold text-center text-[#07252d] mt-8">Marinated moroccan style whole rotisserie chicken</p> 
                            <p className="font-rah text-[1rem] tracking-widest font-bold text-center text-[#07252d] mt-4">with sauce, 8 rolls, and  family style sides.</p>  */}
                                <p className="font-mari text-[2rem] tracking-wide font-bold text-center text-[#07252d] mt-4 mb-1">$ 20</p>
                            </motion.div>
                            <div className="grid gap-6 lg:gap-x-12">
                                <div className="grid gap-4 grid-rows-2 mb-6 lg:mb-0">

                                    <motion.div
                                        variants={pack2}
                                        initial="initial"
                                        whileInView="animate"
                                        className="block col-span-2 border-spacing-[3rem] bg-[#D8C29D] border-seperate border-2 border-solid border-[#07252d] rounded-lg shadow-lg py-[2rem] h-[50rem]">
                                        {/* <div className="p-6 border-black border-gray-300 bordertext-center">

                                    </div> */}
                                        <motion.div
                                            variants={pack}
                                            className="font-mari tracking-wide text-[3rem] mt-[.5rem] text-center text-[#07252d]">
                                            Mains
                                        </motion.div>
                                        <motion.ul variants={menuVariant} initial="initial" whileInView="animate" className="mx-[2rem] my-[2rem]">
                                            <motion.li variants={menuItem} initial={{ opacity: 0 }} className="grid grid-cols-2 mb-[2rem]">
                                                <div className="grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#07252d]">
                                                    Steak Kabobs
                                                </div>
                                                <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#07252d]">
                                                    20$
                                                </div>
                                                <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#07252d]">
                                                    Saffron rice, Hummus, Pickled Cucumbers
                                                </div>
                                            </motion.li>
                                            <motion.li variants={menuItem} initial={{ opacity: 0 }} className="grid grid-cols-2 mb-[2rem]">
                                                <div className="grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#07252d]">
                                                    Chicken Kabobs
                                                </div>
                                                <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#07252d]">
                                                    20$
                                                </div>
                                                <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#07252d]">
                                                    Saffron rice, Hummus, Pickled Cucumbers
                                                </div>
                                            </motion.li>
                                            <motion.li variants={menuItem} initial={{ opacity: 0 }} className="grid grid-cols-2 mb-[2rem]">
                                                <div className="grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#07252d]">
                                                    Grilled Salmon
                                                </div>
                                                <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#07252d]">
                                                    20$
                                                </div>
                                                <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#07252d]">
                                                    Saffron rice, Hummus, Pickled Cucumbers
                                                </div>
                                            </motion.li>
                                            <motion.li variants={menuItem} initial={{ opacity: 0 }} className="grid grid-cols-2 mb-[2rem]">
                                                <div className="grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#07252d]">
                                                    Broiled Seabass
                                                </div>
                                                <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#07252d]">
                                                    20$
                                                </div>
                                                <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#07252d]">
                                                    Saffron rice, Hummus, Pickled Cucumbers
                                                </div>
                                            </motion.li>
                                            <motion.li variants={menuItem} initial={{ opacity: 0 }} className="grid grid-cols-2 mb-[2rem]">
                                                <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#07252d]">
                                                    <div>Grilled Tempeh</div><div> <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill="#07252d" fill-rule="evenodd" clip-rule="evenodd" width="20px" height="20px" viewBox="0 0 512 512"><g fill-rule="nonzero"><path d="M255.998 0c70.69 0 134.694 28.658 181.017 74.982C483.342 121.308 512 185.312 512 256.002c0 70.689-28.658 134.69-74.985 181.016C390.692 483.342 326.688 512 255.998 512c-70.689 0-134.687-28.658-181.017-74.982C28.657 390.689 0 326.691 0 256.002c0-70.69 28.657-134.694 74.981-181.017C121.308 28.658 185.309 0 255.998 0z" /><path fill="#fff" d="M283.004 162.24h63.307l-46.503 187.523h-87.61L165.691 162.24h63.307l25.505 119.116h2.7z" /></g></svg>
                                                    </div>
                                                </div>

                                                <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#07252d]">
                                                    20$
                                                </div>
                                                <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#07252d]">
                                                    Saffron rice, Hummus, Pickled Cucumbers
                                                </div>
                                            </motion.li>
                                            <motion.li variants={menuItem} initial={{ opacity: 0 }} className="grid grid-cols-2 mb-[2rem]">
                                                <div className="grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#07252d]">
                                                    Steak Kabobs
                                                </div>
                                                <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#07252d]">
                                                    20$
                                                </div>
                                                <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#07252d]">
                                                    Saffron rice, Hummus, Pickled Cucumbers
                                                </div>
                                            </motion.li>
                                            <motion.li variants={menuItem} initial={{ opacity: 0 }} className="grid grid-cols-2 mb-[2rem]">
                                                <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#07252d]">
                                                    <div>Plant Based Protein Balls</div><div> <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill="#07252d" fill-rule="evenodd" clip-rule="evenodd" width="20px" height="20px" viewBox="0 0 512 512"><g fill-rule="nonzero"><path d="M255.998 0c70.69 0 134.694 28.658 181.017 74.982C483.342 121.308 512 185.312 512 256.002c0 70.689-28.658 134.69-74.985 181.016C390.692 483.342 326.688 512 255.998 512c-70.689 0-134.687-28.658-181.017-74.982C28.657 390.689 0 326.691 0 256.002c0-70.69 28.657-134.694 74.981-181.017C121.308 28.658 185.309 0 255.998 0z" /><path fill="#fff" d="M283.004 162.24h63.307l-46.503 187.523h-87.61L165.691 162.24h63.307l25.505 119.116h2.7z" /></g></svg>
                                                    </div>
                                                </div>

                                                <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#07252d]">
                                                    20$
                                                </div>
                                                <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#07252d]">
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
                                className="block mx-[1rem] bg-[#D8C29D] -mt-[45rem] py-[2rem] mb-[2rem] border-seperate border-2 border-[#07252d] rounded-lg shadow-lg">
                                <h1 className="font-mari text-[2rem] mt-[.5rem] text-center text-[#07252d]">Sides</h1>
                                <p className="font-rah text-[1rem] tracking-widest font-bold text-center text-[#07252d] mt-8">Moroccan Bread, Raisins, Streussel Topping</p>
                                <p className="font-rah text-[1rem] tracking-widest font-bold text-center text-[#07252d] mt-4">with Saffron Ice Cream</p>
                                <p className="font-mari text-[2rem] tracking-wide font-bold text-center text-[#07252d] mt-4 mb-1">$ 10</p>
                            </motion.div>
                            <motion.div
                                variants={wordVariants}
                                whileHover="hovered">
                            <motion.div
                                variants={pack2}
                                initial="initial"
                                whileInView="animate"
                                className="flex flex-row text-center justify-center mx-[18rem] bg-[#07252d] mt-[7rem] py-[2rem] mb-[2rem] border-seperate border-2 border-[#D8C29D] rounded-lg shadow-lg hover:cursor-pointer ">
                                <div className="submit-btn_dec left w-embed mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 28.08 27.348">
  <g id="Group_73" data-name="Group 73" transform="translate(-504.919 -8455.826)">
    <path id="Path_185" data-name="Path 185" d="M26.888,67.463l9.1-1.9-5.829-7.244L21.14,60.25Zm.092-.253,8.392-1.871-8.341,1.724L21.755,60.47Z" transform="translate(476.109 8420.173) rotate(-20)" fill="#D8C29D"></path>
    <path id="Path_186" data-name="Path 186" d="M26.888,67.463l9.1-1.9-5.829-7.244L21.14,60.25Zm.092-.253,8.392-1.871-8.341,1.724L21.755,60.47Z" transform="translate(465.109 8427.01) rotate(-20)" fill="#D8C29D"></path>
    <path id="Path_187" data-name="Path 187" d="M26.888,67.463l9.1-1.9-5.829-7.244L21.14,60.25Zm.092-.253,8.392-1.871-8.341,1.724L21.755,60.47Z" transform="translate(465.109 8413.336) rotate(-20)" fill="#D8C29D"></path>
  </g>
</svg>
</div>
                                <h1 className="font-mari text-[2.5rem] mt-[.5rem] text-center text-[#D8C29D]">CATERING ORDER FORM</h1>
                                <div className="submit-btn_dec right w-embed ml-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 28.08 27.348">
                                        <g id="Group_74" data-name="Group 74" transform="translate(0 0)">
                                            <path id="Path_185" data-name="Path 185" d="M5.748,0l9.1,1.9L9.018,9.148,0,7.213ZM5.84.253l8.392,1.871L5.891.4.615,6.993Z" transform="translate(13.952 20.511) rotate(-160)" fill="#D8C29D"></path>
                                            <path id="Path_186" data-name="Path 186" d="M5.748,0l9.1,1.9L9.018,9.148,0,7.213ZM5.84.253l8.392,1.871L5.891.4.615,6.993Z" transform="translate(24.952 27.348) rotate(-160)" fill="#D8C29D"></path>
                                            <path id="Path_187" data-name="Path 187" d="M5.748,0l9.1,1.9L9.018,9.148,0,7.213ZM5.84.253l8.392,1.871L5.891.4.615,6.993Z" transform="translate(24.952 13.674) rotate(-160)" fill="#D8C29D"></path>
                                        </g>
                                    </svg>
                                </div>
                            </motion.div>
                            </motion.div>
                        </div>
                    </section>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}