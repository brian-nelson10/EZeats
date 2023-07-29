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
            duration: .9,
            delay: .9,
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
                duration: .9,
}
}
}
const menuVariant = {
    animate: {
        transition: {
            staggerChildren: 0.4,
            type: "spring",
            damping: 12,
            stiffness: 100, 
        }
    },
}
const menuItem = {
    animate: {
   opacity: 1,
   transition: { duration: .9, ease: "easeInOut"}
    }
}
export default function Section2() {
    return (
        <AnimatePresence>
        <div className="gradient2 justify-center w-screen px-10 h-auto z-50 xl:pb-[16rem]" id="menuComponent" >
            <motion.div className="justify-center flex-wrap ">
                <motion.div className="aboutHero grid w-screen items-center justify-center">
                    <div className="mt-[5rem] mb-[2rem] xl:-mb-[1.5rem] text-center font-mari tracking-widest text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] text-[#000000]">
                        <motion.div
                            className="flex flex-row gap-6 justify-center text-center -ml-16 xl:ml-0"
                            variants={pack}
                            initial="initial"
                            whileInView="animate">
                                <svg className="mt-8 xl:mt-12 h-[34pt] w-[34pt] xl:h-[64pt] xl:w-[64pt]" version="1.0" xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M199 483 c-62 -82 -113 -155 -113 -163 0 -16 222 -310 234 -310 12 0
234 294 234 310 0 16 -222 310 -234 310 -4 0 -59 -66 -121 -147z"/>
</g>
</svg> MENU <svg className="mt-8 xl:mt-12 h-[34pt] w-[34pt] xl:h-[64pt] xl:w-[64pt]" version="1.0" xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M199 483 c-62 -82 -113 -155 -113 -163 0 -16 222 -310 234 -310 12 0
234 294 234 310 0 16 -222 310 -234 310 -4 0 -59 -66 -121 -147z"/>
</g>
</svg></motion.div>
                    </div>
                </motion.div>
                <section className="py-[1rem] xl:w-[100%] bg-[#32cd32] shadow-[1px_35px_35px_2px_rgba(0,0,0,0.5)] -mt-[2rem] md:mt-[3rem] md:mx-auto items-center justify-center text-center h-auto w-screen -ml-10 rounded-xl z-50 bg-fixed bg-deco">
                    <div className=" my-20 xl:-px-3 xl:mx-auto text-xl">
                        <motion.div
                            variants={pack2}
                            initial="initial"
                            whileInView="animate" 
                            className="block xl:mx-[18rem] bg-[#adb5bd] py-[2rem] mb-[2rem] border-seperate border-2 border-[#000000] rounded-lg shadow-lg">
                        <motion.div
                                            variants={pack}
                                            initial="initial"
                                            animate="animate"
                                            className="font-mari tracking-wide text-[2.5rem] mt-[.5rem] text-center text-[#000000]">
                                                EZ BITEZ
                                            </motion.div>
                                            <motion.ul variants={menuVariant} initial="initial" whileInView="animate" viewport={{ once: true }} className="">
                                            <motion.li variants={menuItem} initial={{opacity: 0}}  viewport={{ once: true }} className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Hummus<div> <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fill="#000000" fillRule="evenodd" clipRule="evenodd" width="20px" height="20px" viewBox="0 0 512 512"><g fillRule="nonzero"><path d="M255.998 0c70.69 0 134.694 28.658 181.017 74.982C483.342 121.308 512 185.312 512 256.002c0 70.689-28.658 134.69-74.985 181.016C390.692 483.342 326.688 512 255.998 512c-70.689 0-134.687-28.658-181.017-74.982C28.657 390.689 0 326.691 0 256.002c0-70.69 28.657-134.694 74.981-181.017C121.308 28.658 185.309 0 255.998 0z"/><path fill="#fff" d="M283.004 162.24h63.307l-46.503 187.523h-87.61L165.691 162.24h63.307l25.505 119.116h2.7z"/></g></svg>
                                                    </div>
                                                    </div>
                                                    <div className="text-start font-rah text-[.9rem] tracking-widest font-bold text-[#000000]">
                                                        Choice of Classic, Spicy, or Sun-Dried Tomato. Served with Pita.
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    7$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Zaalouk<div> <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fill="#000000" fillRule="evenodd" clipRule="evenodd" width="20px" height="20px" viewBox="0 0 512 512"><g fillRule="nonzero"><path d="M255.998 0c70.69 0 134.694 28.658 181.017 74.982C483.342 121.308 512 185.312 512 256.002c0 70.689-28.658 134.69-74.985 181.016C390.692 483.342 326.688 512 255.998 512c-70.689 0-134.687-28.658-181.017-74.982C28.657 390.689 0 326.691 0 256.002c0-70.69 28.657-134.694 74.981-181.017C121.308 28.658 185.309 0 255.998 0z"/><path fill="#fff" d="M283.004 162.24h63.307l-46.503 187.523h-87.61L165.691 162.24h63.307l25.505 119.116h2.7z"/></g></svg>
                                                    </div>
                                                    </div>
                                                    <div className="text-start font-rah text-[.9rem] tracking-widest font-bold text-[#000000]">
                                                    Eggplant dip infused with garlic tomato sauce. Served with pita.
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    7$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Shakshuka<div> <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fill="#000000" fillRule="evenodd" clipRule="evenodd" width="20px" height="20px" viewBox="0 0 512 512"><g fillRule="nonzero"><path d="M255.998 0c70.69 0 134.694 28.658 181.017 74.982C483.342 121.308 512 185.312 512 256.002c0 70.689-28.658 134.69-74.985 181.016C390.692 483.342 326.688 512 255.998 512c-70.689 0-134.687-28.658-181.017-74.982C28.657 390.689 0 326.691 0 256.002c0-70.69 28.657-134.694 74.981-181.017C121.308 28.658 185.309 0 255.998 0z"/><path fill="#fff" d="M283.004 162.24h63.307l-46.503 187.523h-87.61L165.691 162.24h63.307l25.505 119.116h2.7z"/></g></svg>
                                                    </div>
                                                    </div>
                                                    <div className="text-start font-rah text-[.9rem] tracking-widest font-bold text-[#000000]">
                                                    Sautéed bell pepper mix, seasoned with garlic tomato sauce and other Moroccan flavors. Served with pita.
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    7$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Olive Msharmal<div> <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fill="#000000" fillRule="evenodd" clipRule="evenodd" width="20px" height="20px" viewBox="0 0 512 512"><g fillRule="nonzero"><path d="M255.998 0c70.69 0 134.694 28.658 181.017 74.982C483.342 121.308 512 185.312 512 256.002c0 70.689-28.658 134.69-74.985 181.016C390.692 483.342 326.688 512 255.998 512c-70.689 0-134.687-28.658-181.017-74.982C28.657 390.689 0 326.691 0 256.002c0-70.69 28.657-134.694 74.981-181.017C121.308 28.658 185.309 0 255.998 0z"/><path fill="#fff" d="M283.004 162.24h63.307l-46.503 187.523h-87.61L165.691 162.24h63.307l25.505 119.116h2.7z"/></g></svg>
                                                    </div>
                                                    </div>
                                                    <div className="text-start font-rah text-[.9rem] tracking-widest font-bold text-[#000000]">
                                                    Olives infused with garlic and cilantro and served with pita. Choice of Mild or Spicy.
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    6$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Lentil Soup<div> <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fill="#000000" fillRule="evenodd" clipRule="evenodd" width="20px" height="20px" viewBox="0 0 512 512"><g fillRule="nonzero"><path d="M255.998 0c70.69 0 134.694 28.658 181.017 74.982C483.342 121.308 512 185.312 512 256.002c0 70.689-28.658 134.69-74.985 181.016C390.692 483.342 326.688 512 255.998 512c-70.689 0-134.687-28.658-181.017-74.982C28.657 390.689 0 326.691 0 256.002c0-70.69 28.657-134.694 74.981-181.017C121.308 28.658 185.309 0 255.998 0z"/><path fill="#fff" d="M283.004 162.24h63.307l-46.503 187.523h-87.61L165.691 162.24h63.307l25.505 119.116h2.7z"/></g></svg>
                                                    </div>
                                                    </div>
                                                    <div className="text-start font-rah text-[.9rem] tracking-widest font-bold text-[#000000]">
                                                    Lentils slow cooked with garlic, tomatoes, and carrots. Served with pita.
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    6$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Briwat
                                                    </div>
                                                    <div className="text-start font-rah text-[.9rem] tracking-widest font-bold text-[#000000]">
                                                    Crispy Moroccan dough filled with your choice of protein and served with Honey Harissa sauce. Choice of Kefta or Seafood.
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    9$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Loubia Soup<div> <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fill="#000000" fillRule="evenodd" clipRule="evenodd" width="20px" height="20px" viewBox="0 0 512 512"><g fillRule="nonzero"><path d="M255.998 0c70.69 0 134.694 28.658 181.017 74.982C483.342 121.308 512 185.312 512 256.002c0 70.689-28.658 134.69-74.985 181.016C390.692 483.342 326.688 512 255.998 512c-70.689 0-134.687-28.658-181.017-74.982C28.657 390.689 0 326.691 0 256.002c0-70.69 28.657-134.694 74.981-181.017C121.308 28.658 185.309 0 255.998 0z"/><path fill="#fff" d="M283.004 162.24h63.307l-46.503 187.523h-87.61L165.691 162.24h63.307l25.505 119.116h2.7z"/></g></svg>
                                                    </div>
                                                    </div>
                                                    <div className="text-start font-rah text-[.9rem] tracking-widest font-bold text-[#000000]">
                                                   Traditional Moroccan stew slow cooked with white beans and infused with garlic tomato sauce. Served with pita.
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    7$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    The EZ Salad<div> <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fill="#000000" fillRule="evenodd" clipRule="evenodd" width="20px" height="20px" viewBox="0 0 512 512"><g fillRule="nonzero"><path d="M255.998 0c70.69 0 134.694 28.658 181.017 74.982C483.342 121.308 512 185.312 512 256.002c0 70.689-28.658 134.69-74.985 181.016C390.692 483.342 326.688 512 255.998 512c-70.689 0-134.687-28.658-181.017-74.982C28.657 390.689 0 326.691 0 256.002c0-70.69 28.657-134.694 74.981-181.017C121.308 28.658 185.309 0 255.998 0z"/><path fill="#fff" d="M283.004 162.24h63.307l-46.503 187.523h-87.61L165.691 162.24h63.307l25.505 119.116h2.7z"/></g></svg>
                                                    </div>
                                                    </div>
                                                    <div className="text-start font-rah text-[.9rem] tracking-widest font-bold text-[#000000]">
                                                    Lettuce, Tomatoes, Cucumbers, and Red Onions served with a Moroccan Vinaigrette.
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    7$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Carrot Msharmal<div> <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fill="#000000" fillRule="evenodd" clipRule="evenodd" width="20px" height="20px" viewBox="0 0 512 512"><g fillRule="nonzero"><path d="M255.998 0c70.69 0 134.694 28.658 181.017 74.982C483.342 121.308 512 185.312 512 256.002c0 70.689-28.658 134.69-74.985 181.016C390.692 483.342 326.688 512 255.998 512c-70.689 0-134.687-28.658-181.017-74.982C28.657 390.689 0 326.691 0 256.002c0-70.69 28.657-134.694 74.981-181.017C121.308 28.658 185.309 0 255.998 0z"/><path fill="#fff" d="M283.004 162.24h63.307l-46.503 187.523h-87.61L165.691 162.24h63.307l25.505 119.116h2.7z"/></g></svg>
                                                    </div>
                                                    </div>
                                                    <div className="text-start font-rah text-[.9rem] tracking-widest font-bold text-[#000000]">
                                                    Carrots cooked in a flavor packed garlic cilantr sauce. Served with pita.
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    7$
                                                    </div>
                                                </motion.li>
                                                </motion.ul>
                        </motion.div>
                        <div className="grid gap-6 lg:gap-x-12">
                            <div className="grid gap-4 xl:grid-cols-5 mb-6 lg:mb-0 ">
                                <motion.div 
                                    variants={pack2}
                                    initial="initial"
                                    whileInView="animate" 
                                    viewport={{ once: true }}
                                    className="block col-span-2 w-[160%] xl:w-[100%] w-screen ml-1 border-solid border-[#000000] border-seperate border-2 rounded-lg shadow-lg py-[2rem] xl:my-[3rem]  xl:h-auto bg-[#adb5bd]">
                                        <motion.div
                                            variants={pack}
                                            className="font-mari tracking-wide text-[2.5rem] mt-[.5rem] text-center text-[#000000]">
                                                HAND HELDZ
                                            </motion.div>
                                            <motion.ul variants={menuVariant} initial="initial" whileInView="animate" viewport={{ once: true }} className="">
                                            <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    EZ Burger
                                                    </div>
                                                    <div className="text-start font-rah text-[.9rem] tracking-widest font-bold text-[#000000]">
                                                    Kefta burger served with cheese, lettuce, tomatoes, sautéed onions, and garlic aioli. 
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    10$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Falafel Wrap<div> <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fill="#000000" fillRule="evenodd" clipRule="evenodd" width="20px" height="20px" viewBox="0 0 512 512"><g fillRule="nonzero"><path d="M255.998 0c70.69 0 134.694 28.658 181.017 74.982C483.342 121.308 512 185.312 512 256.002c0 70.689-28.658 134.69-74.985 181.016C390.692 483.342 326.688 512 255.998 512c-70.689 0-134.687-28.658-181.017-74.982C28.657 390.689 0 326.691 0 256.002c0-70.69 28.657-134.694 74.981-181.017C121.308 28.658 185.309 0 255.998 0z"/><path fill="#fff" d="M283.004 162.24h63.307l-46.503 187.523h-87.61L165.691 162.24h63.307l25.505 119.116h2.7z"/></g></svg>
                                                    </div>
                                                    </div>
                                                    <div className="text-start font-rah text-[.9rem] tracking-widest font-bold text-[#000000]">
                                                    Falafel, hummus, lettuce, tomato, cucumber, onions, and tahini sauce.
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    10$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Beef and Lamb Shawarma Wrap
                                                    </div>
                                                    <div className="text-start font-rah text-[.9rem] tracking-widest font-bold text-[#000000]">
                                                    Pita wrap filled with marinated beef and lamb, pickles, tomatoes, onions, parsley, garlic sauce, and tahini sauce.
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    10$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Chicken Shawarma Wrap
                                                    </div>
                                                    <div className="text-start font-rah text-[.9rem] tracking-widest font-bold text-[#000000]">
                                                    Pita wrap filled with marinated chicken, pickles, tomatoes, onions, parsley, fries (the fries come inside the wrap), garlic sauce and yogurt sauce. 
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    10$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Kefta Wrap
                                                    </div>
                                                    <div className="text-start font-rah text-[.9rem] tracking-widest font-bold text-[#000000]">
                                                    Seasoned ground beef served with sautéed tomatoes and onions, lettuce pickles, parsley, fries (the fries come inside the sandwich) and harissa aioli. 
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    10$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Margaz Sandwich
                                                    </div>
                                                    <div className="text-start font-rah text-[.9rem] tracking-widest font-bold text-[#000000]">
                                                    Moroccan beef sausage served with onions, tomatoes, olives, parsley garlic tomato sauce and harissa. 
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    11$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                   Kefta Sandwich
                                                    </div>
                                                    <div className="text-start font-rah text-[.9rem] tracking-widest font-bold text-[#000000]">
                                                    Seasoned ground beef topped with olives, parsley, tomatoes, onions, fries (the fries come inside the sandwich) harissa aioli and garlic tomato sauce. 
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    10$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Bocadillos Tuna Sandwich
                                                    </div>
                                                    <div className="text-start font-rah text-[.9rem] tracking-widest font-bold text-[#000000]">
                                                    Tuna with shaved carrots, tomatoes, lettuce, onions, cucumbers, boiled eggs, olives, mayo and fries (the fries are inside the sandwich).    
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    10$
                                                    </div>
                                                </motion.li>
                                               
                                                </motion.ul>

                                </motion.div>
                                <motion.div 
                                    variants={pack2}
                                    initial="initial"
                                    whileInView="animate" 
                                    className="block col-span-3 border-spacing-[3rem] bg-[#adb5bd] border-seperate border-2 border-solid border-[#000000] rounded-lg shadow-lg py-[2rem] sl:h-[50rem]">
                                    {/* <div className="p-6 border-black border-gray-300 bordertext-center">

                                    </div> */}
                                     <motion.div
                                            variants={pack}
                                            className="font-mari tracking-wide text-[2rem] xl:text-[3rem] mt-[.5rem] text-center text-[#000000]">
                                                PLATEZ AND TAJINEZ
                                            </motion.div>
                                            <motion.ul variants={menuVariant} initial="initial" whileInView="animate" viewport={{ once: true }} className="mx-[2rem] my-[2rem]">
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem]">
                                                    <div className="grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Grilled Kabob Plate (Choice of Beef Kefta or Marinated Chicken) 
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                        17$
                                                    </div>
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#000000]">
                                                    Comes with your choice of white rice, saffron rice or fries. Served with grilled tomato and onion and comes with your choice of sauce.    
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem]">
                                                <div className="grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                Grilled Marinated Chicken Wings
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                        15$
                                                    </div>
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#000000]">
                                                    Seven marinated Moroccan flavored wings served with your choice of white rice, saffron rice or fries. Comes with grilled tomato and onion and served with a dipping sauce of your choice. 
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{ opacity: 0 }} className="grid grid-cols-2 mb-[2rem]">
                                                <div className="grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                Shawarma Rice Bowl (Choice of Beef and Lamb, or Chicken)
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    17$
                                                    </div>
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#000000]">
                                                    Marinated meat served with your choice of white rice or saffron rice. Comes with tomato cucumber salad and your choice of sauce.  
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}} className="grid grid-cols-2 mb-[2rem]">
                                                <div className="grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                Shawarma Fries 
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                        15$
                                                    </div>
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#000000]">
                                                    Loaded fries served with your choice of chicken shawarma or beef and lamb shawarma. Toppings include cheese, garlic sauce and yogurt sauce.
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}} className="grid grid-cols-2 mb-[2rem]">
                                                <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    <div>Falafel Plate </div><div> <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fill="#000000" fillRule="evenodd" clipRule="evenodd" width="20px" height="20px" viewBox="0 0 512 512"><g fillRule="nonzero"><path d="M255.998 0c70.69 0 134.694 28.658 181.017 74.982C483.342 121.308 512 185.312 512 256.002c0 70.689-28.658 134.69-74.985 181.016C390.692 483.342 326.688 512 255.998 512c-70.689 0-134.687-28.658-181.017-74.982C28.657 390.689 0 326.691 0 256.002c0-70.69 28.657-134.694 74.981-181.017C121.308 28.658 185.309 0 255.998 0z"/><path fill="#fff" d="M283.004 162.24h63.307l-46.503 187.523h-87.61L165.691 162.24h63.307l25.505 119.116h2.7z"/></g></svg>
                                                    </div>
                                                    </div>
                                                    
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                        16$
                                                    </div>
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#000000]">
                                                    Falafel, Hummus (your choice of flavor), EZ Salad, pita, and tahini sauce.
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}} className="grid grid-cols-2 mb-[2rem]">
                                                <div className="grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                Beef Tajine
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                        22$
                                                    </div>
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#000000]">
                                                    Slow cooked beef chunks simmered in a delicious sauce and served with carrots, peas, and olives. Comes with your choice of pita or rice.
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}} className="grid grid-cols-2 mb-[2rem]">
                                                <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    <div>Couscous with Tfaya</div>
                                                    </div>
                                                    
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                        19$
                                                    </div>
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#000000]">
                                                    Sweet chicken topped with glazed onions, raisins, and chickpeas. Served over couscous. 
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}} className="grid grid-cols-2 mb-[2rem]">
                                                <div className="grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                Shwa
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                        22$
                                                    </div>
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#000000]">
                                                    1/2 pound rotisserie cooked lamb shoulder served with a cumin rub. Comes with pita and your choice of one EZ Bite sample.
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}} className="grid grid-cols-2 mb-[2rem]">
                                                <div className="grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                Shwa
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                        38$
                                                    </div>
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#000000]">
                                                    One pound rotisserie cooked lamb shoulder served with a cumin rub. Comes with pita and your choice of two EZ Bitez samples. 
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}} className="grid grid-cols-2 mb-[2rem]">
                                                <div className="grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                Mixed Grill Family Style
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                        65$
                                                    </div>
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#000000]">
                                                    Comes with two chicken kabobs, two kefta kabobs, four wings, six margaz beef sausages, three ounces of chicken shawarma, three ounces of beef and lamb shawarma, rice, hummus, EZ Salad, grilled tomatoes and onions, and pita.     
                                                    </div>
                                                </motion.li>
                                                
                                            </motion.ul>

                                </motion.div>
                            </div>

                            <div className="grid gap-4 xl:grid-cols-2 mb-6 lg:mb-0 ">
                                <motion.div 
                                    variants={pack2}
                                    initial="initial"
                                    whileInView="animate" 
                                    className="block w-[160%] xl:w-[100%] w-screen ml-1 border-solid border-[#000000] border-seperate border-2 rounded-lg shadow-lg py-[2rem] xl:my-[3rem] xl:h-auto bg-[#adb5bd]">
                                        <motion.div
                                            variants={pack}
                                            className="font-mari tracking-wide text-[2.5rem] mt-[.5rem] text-center text-[#000000]">
                                                SIDEZ
                                            </motion.div>
                                            <motion.ul variants={menuVariant} initial="initial" whileInView="animate" viewport={{ once: true }} className="">
                                            <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Pita
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    2$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    White Rice
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    3$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Saffron Rice
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    3.5$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Fries
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    3.5$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Couscous
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    3$
                                                    </div>
                                                </motion.li>
                                                </motion.ul>

                                </motion.div>
                                <motion.div 
                                    variants={pack2}
                                    initial="initial"
                                    whileInView="animate" 
                                    className="block border-spacing-[3rem] bg-[#adb5bd] border-seperate border-2 border-solid border-[#000000] rounded-lg shadow-lg py-[2rem] sl:h-[50rem]">
                                    {/* <div className="p-6 border-black border-gray-300 bordertext-center">

                                    </div> */}
                                     <motion.div
                                            variants={pack}
                                            className="font-mari tracking-wide text-[2.5rem] xl:text-[3rem] mt-[.5rem] text-center text-[#000000]">
                                                Kidz (Ages 10 and Under Only!)
                                            </motion.div>
                                            <motion.ul variants={menuVariant} initial="initial" whileInView="animate" viewport={{ once: true }} className="mx-[2rem] my-[2rem]">
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem]">
                                                    <div className="grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Mini Rice Bowl
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                        7.50$
                                                    </div>
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#000000]">
                                                    Comes with white rice, choice of chicken or beef
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem]">
                                                <div className="grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                Mini Burger with Fries
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                        7.50$
                                                    </div>
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#000000]">
                                                   Choice of fries or rice.
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
                            className="block xl:mx-[15rem] bg-[#adb5bd] mt-[3rem] py-[2rem] mb-[2rem] border-seperate border-2 border-[#000000] rounded-lg shadow-lg">
                            <motion.div
                                            variants={pack}
                                            initial="initial"
                                            animate="animate"
                                            className="font-mari tracking-wide text-[2.5rem] mt-[.5rem] text-center text-[#000000]">
                                                DESSERTZ
                                            </motion.div>
                                            <motion.ul variants={menuVariant} initial="initial" whileInView="animate" viewport={{ once: true }} className="">
                                            <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Sweet Briwat
                                                    </div>
                                                    <div className="text-start font-rah text-[.9rem] tracking-widest font-bold text-[#000000]">
                                                    Crispy thin Moroccan dough filled with almonds and dipped in honey orange blossom.
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    9$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Baklava
                                                    </div>
                                                    <div className="text-start font-rah text-[.9rem] tracking-widest font-bold text-[#000000]">
                                                    Phyllo dough stuffed with honey and nuts.
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    9$
                                                    </div>
                                                </motion.li>
                                                </motion.ul>
                        </motion.div>
                        <motion.div
                            variants={pack2}
                            initial="initial"
                            whileInView="animate" 
                            className="block xl:mx-[15rem] bg-[#adb5bd] mt-[3rem] py-[2rem] mb-[2rem] border-seperate border-2 border-[#000000] rounded-lg shadow-lg">
                            <motion.div
                                            variants={pack}
                                            initial="initial"
                                            animate="animate"
                                            className="font-mari tracking-wide text-[2.5rem] mt-[.5rem] text-center text-[#000000]">
                                                DRINKZ
                                            </motion.div>
                                            <motion.ul variants={menuVariant} initial="initial" whileInView="animate" viewport={{ once: true }} className="">
                                            <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Soda
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    2.95$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Moroccan Coffee (Nas Nas)
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    6.5$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Mini Hot Tea Pot
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    8$
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Bottled Water
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    2.50$
                                                    </div>
                                                </motion.li>
                                                </motion.ul>
                        </motion.div>
                    </div>
                </section>
            </motion.div>
        </div>
        </AnimatePresence>
    )
}