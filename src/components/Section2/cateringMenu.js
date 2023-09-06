import React from "react";
import "../Section1/section.css";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router";

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
    const navigate = useNavigate();
    function handleCaterOrder() {
        navigate("/caterorder")
    };
    return (
        <AnimatePresence>
            <div className="gradient3 w-screen justify-center xl:px-28 px-10 z-50 -mt-[17rem] xl:pb-[16rem]" id="menuComponent" >
                <motion.div className="container justify-center flex-wrap">
                    <motion.div className="aboutHero grid w-screen items-center justify-center">
                        <div className="xl:mt-[5rem] mt-10 xl:-mb-[1.5rem] text-center font-mari tracking-widest text-[3rem] xl:text-[8rem] text-black -ml-[3rem] lg:ml-0">
                            <motion.div
                                className="flex flex-row gap-6 justify-center text-center xl:-ml-[16rem] mb-10"
                                variants={pack}
                                initial="initial"
                                whileInView="animate">
                                <svg className="mt-12 invisible xl:visible xl:mr-0" version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
                                    preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                                        fill="black" stroke="none">
                                        <path d="M199 483 c-62 -82 -113 -155 -113 -163 0 -16 222 -310 234 -310 12 0
234 294 234 310 0 16 -222 310 -234 310 -4 0 -59 -66 -121 -147z"/>
                                    </g>
                                </svg> CATERING MENU <svg className="mt-12 xl:mr-0 invisible xl:visible" version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
                                    preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                                        fill="black" stroke="none">
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
                            className="block xl:mx-[15rem] bg-[#adb5bd] mt-[3rem] py-[2rem] mb-[2rem] border-seperate border-2 border-[#000000] rounded-lg shadow-lg">
                            <motion.div
                                            variants={pack}
                                            initial="initial"
                                            animate="animate"
                                            className="font-mari tracking-wide text-[2.5rem] mt-[.5rem] text-center text-[#000000]">
                                                Moroccan Family Style Catering Menu
                                            </motion.div>
                                            <motion.ul variants={menuVariant} initial="initial" whileInView="animate" viewport={{ once: true }} className="">
                                            <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Package One
                                                    </div>
                                                    <div className="text-start font-rah text-[.9rem] tracking-widest font-bold text-[#000000]">
                                                    1 Appetizer / 1 Entree / 1 Side
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    18$ Per Person
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Package Two
                                                    </div>
                                                    <div className="text-start font-rah text-[.9rem] tracking-widest font-bold text-[#000000]">
                                                    2 Appetizers / 2 Entree's / 2 Sides
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    25$ Per Person
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] px-8 mt-8">
                                                <div className="grid-rows-2">
                                                    <div className="flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Package Three
                                                    </div>
                                                    <div className="text-start font-rah text-[.9rem] tracking-widest font-bold text-[#000000]">
                                                    4 Appetizers / 4 Entree's / 2 Sides
                                                    </div>
                                                    </div>
                                                    <div className="text-end font-mari text-[1.3rem] tracking-widest font-bold text-[#000000]">
                                                    45$ Per Person
                                                    </div>
                                                </motion.li>
                                                </motion.ul>
                        </motion.div>
                      
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
                                                    
                                                </motion.li>
                                                </motion.ul>
                        </motion.div>
                        <div className="h-auto">
                            <div className="px-1 mb-6 lg:mb-0 xl:mx-[8rem] py-[2rem]">
                               
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
                                                ENTREEZ
                                            </motion.div>
                                            <motion.ul variants={menuVariant} initial="initial" whileInView="animate" viewport={{ once: true }} className="mx-[2rem] my-[2rem]">
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="grid grid-cols-2 mb-[2rem] gap-2">
                                                    <div className="lg:px-10 grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Grilled Kabob Plate (Choice of Beef Kefta or Marinated Chicken) 
                                                    </div>
                                                    
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#000000]">
                                                    Comes with your choice of white rice, saffron rice or fries. Served with grilled tomato and onion and comes with your choice of sauce.    
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="gap-2 grid grid-cols-2 mb-[2rem]">
                                                <div className="lg:px-10 grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                Grilled Marinated Chicken Wings
                                                    </div>
                                                   
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#000000]">
                                                    Seven marinated Moroccan flavored wings served with your choice of white rice, saffron rice or fries. Comes with grilled tomato and onion and served with a dipping sauce of your choice. 
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{ opacity: 0 }} className="gap-2 grid grid-cols-2 mb-[2rem]">
                                                <div className="lg:px-10 grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                Shawarma Rice Bowl (Choice of Beef and Lamb, or Chicken)
                                                    </div>
                                                    
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#000000]">
                                                    Marinated meat served with your choice of white rice or saffron rice. Comes with tomato cucumber salad and your choice of sauce.  
                                                    </div>
                                                </motion.li>
                                                
                                                <motion.li variants={menuItem} initial={{opacity: 0}} className="gap-2 grid grid-cols-2 mb-[2rem]">
                                                <div className="lg:px-10 grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                Beef Tajine
                                                    </div>
                                                   
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#000000]">
                                                    Slow cooked beef chunks simmered in a delicious sauce and served with carrots, peas, and olives. Comes with your choice of pita or rice.
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}} className="gap-2 grid grid-cols-2 mb-[2rem]">
                                                <div className="lg:px-10 grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                Chicken Tajine
                                                    </div>
                                                   
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#000000]">
                                                   Chicken served with saffron and a preserved lemon sauce with olives and topped with fries. Comes with Pita or Rice.
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}} className="gap-2 grid grid-cols-2 mb-[2rem]">
                                                <div className="lg:px-10 flex flex-row gap-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    <div>Couscous with Tfaya</div>
                                                    </div>
                                                    
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#000000]">
                                                    Sweet chicken topped with glazed onions, raisins, and chickpeas. Served over couscous. 
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}} className="gap-2 grid grid-cols-2 mb-[2rem]">
                                                <div className="lg:px-10 grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                Shrimp Masharmal
                                                    </div>
                                                    
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#000000]">
                                                    Sauteed shrimp infused with a garlic tomato sauce served with fries and zaalouk. 
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}} className="gap-2 grid grid-cols-2 mb-[2rem]">
                                                <div className="lg:px-10 grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                Shwa
                                                    </div>
                                                    
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#000000]">
                                                    Rotisserie cooked lamb shoulder served with a cumin rub.
                                                    </div>
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}} className="gap-2 grid grid-cols-2 mb-[2rem]">
                                                <div className="lg:px-10 grid-rows-2 text-start font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                Lamb Shank Tanjia
                                                    </div>
                                                    
                                                    <div className="text-start font-rah text-[1rem] tracking-widest font-bold text-[#000000]">
                                                    Slow cooked lamb shank infused with saffron and preserved lemon sauce. Served with Pita.     
                                                    </div>
                                                </motion.li>
                                                
                                            </motion.ul>

                                </motion.div>
                            </div>

                            <div className="lg:px-20 lg:mx-[2rem] mb-6 lg:mb-0 ">
                                <motion.div 
                                    variants={pack2}
                                    initial="initial"
                                    whileInView="animate" 
                                    className="block xl:w-[100%] w-screen lg:ml-1 sm:px-4 border-solid border-[#000000] border-seperate border-2 rounded-lg shadow-lg py-[2rem] xl:my-[3rem] xl:h-auto bg-[#adb5bd]">
                                        <motion.div
                                            variants={pack}
                                            className="font-mari tracking-wide text-[2.5rem] mt-[.5rem] text-center text-[#000000]">
                                                SIDEZ
                                            </motion.div>
                                            <motion.ul variants={menuVariant} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center">
                                            <motion.li variants={menuItem} initial={{opacity: 0}}  className="text-center mb-[2rem] mt-8">
                                                <div className="text-center">
                                                    <div className="text-center font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Pita
                                                    </div>
                                                    </div>
                                                    
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="mb-[2rem] mt-8">
                                                <div className="">
                                                    <div className="text-center font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    White Rice
                                                    </div>
                                                    </div>
                                                   
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="mb-[2rem] mt-8">
                                                <div className="">
                                                    <div className="text-center font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Saffron Rice
                                                    </div>
                                                    </div>
                                                    
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="mb-[2rem] mt-8">
                                                <div className="">
                                                    <div className="text-center font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Fries
                                                    </div>
                                                    </div>
                                                    
                                                </motion.li>
                                                <motion.li variants={menuItem} initial={{opacity: 0}}  className="mb-[2rem] mt-8">
                                                <div className="">
                                                    <div className="text-center font-rah text-[1.5rem] tracking-widest font-bold text-[#000000]">
                                                    Couscous
                                                    </div>
                                                    </div>
                                                </motion.li>
                                                </motion.ul>

                                </motion.div>
                               
                            </div>

                        </div>
                       
                    </div>
                    <motion.div
                                variants={wordVariants}
                                whileHover="hovered"
                                >
                            <motion.div
                                onClick={handleCaterOrder}
                                viewport={{ once: true }}
                                variants={pack2}
                                initial="initial"
                                whileInView="animate"
                                className="flex flex-row text-center justify-center xl:mx-[18rem] bg-[#000000] mt-[7rem] py-[2rem] mb-[2rem] border-2 border-[#adb5bd] rounded-lg shadow-lg hover:cursor-pointer ">
                                <div className="submit-btn_dec left w-embed mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 28.08 27.348">
  <g id="Group_73" data-name="Group 73" transform="translate(-504.919 -8455.826)">
    <path id="Path_185" data-name="Path 185" d="M26.888,67.463l9.1-1.9-5.829-7.244L21.14,60.25Zm.092-.253,8.392-1.871-8.341,1.724L21.755,60.47Z" transform="translate(476.109 8420.173) rotate(-20)" fill="#adb5bd"></path>
    <path id="Path_186" data-name="Path 186" d="M26.888,67.463l9.1-1.9-5.829-7.244L21.14,60.25Zm.092-.253,8.392-1.871-8.341,1.724L21.755,60.47Z" transform="translate(465.109 8427.01) rotate(-20)" fill="#adb5bd"></path>
    <path id="Path_187" data-name="Path 187" d="M26.888,67.463l9.1-1.9-5.829-7.244L21.14,60.25Zm.092-.253,8.392-1.871-8.341,1.724L21.755,60.47Z" transform="translate(465.109 8413.336) rotate(-20)" fill="#adb5bd"></path>
  </g>
</svg>
</div>
                                <h1 className="font-mari text-[2.5rem] mt-[.5rem] text-center text-[#adb5bd]">CATERING ORDER FORM</h1>
                                <div className="submit-btn_dec right w-embed ml-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 28.08 27.348">
                                        <g id="Group_74" data-name="Group 74" transform="translate(0 0)">
                                            <path id="Path_185" data-name="Path 185" d="M5.748,0l9.1,1.9L9.018,9.148,0,7.213ZM5.84.253l8.392,1.871L5.891.4.615,6.993Z" transform="translate(13.952 20.511) rotate(-160)" fill="#adb5bd"></path>
                                            <path id="Path_186" data-name="Path 186" d="M5.748,0l9.1,1.9L9.018,9.148,0,7.213ZM5.84.253l8.392,1.871L5.891.4.615,6.993Z" transform="translate(24.952 27.348) rotate(-160)" fill="#adb5bd"></path>
                                            <path id="Path_187" data-name="Path 187" d="M5.748,0l9.1,1.9L9.018,9.148,0,7.213ZM5.84.253l8.392,1.871L5.891.4.615,6.993Z" transform="translate(24.952 13.674) rotate(-160)" fill="#adb5bd"></path>
                                        </g>
                                    </svg>
                                </div>
                            </motion.div>
                            </motion.div>
                </section>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}