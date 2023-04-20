import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import ChevronLeftIcon from "../../assets/images/plus.png";
import ChevronRightIcon from "../../assets/images/plus.png";
import img1 from "../../assets/carousel/1.JPG";
import img2 from "../../assets/carousel/2.JPG";
import img3 from "../../assets/carousel/3.JPG";
import img4 from "../../assets/carousel/4.JPG";
import img5 from "../../assets/carousel/5.JPG";
import img6 from "../../assets/carousel/6.JPG";
import img7 from "../../assets/carousel/7.JPG";
import img8 from "../../assets/carousel/8.JPG";
let images = [
    {
        photo: img1
    },
    {
        photo: img2
    },
    {
        photo: img3
    },
    {
        photo: img4
    },
    {
        photo: img5
    },
    {
        photo: img6
    },
    {
        photo: img7
    },
    {
        photo: img8
    },
];

export default function CarouselPage() {
  let [index, setIndex] = useState(0);

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className="h-auto mb-[20rem] gradient3">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
          <div className="relative overflow-hidden">
            <motion.div animate={{ x: `-${index * 100}%` }} className="flex h-[25rem] w-[25rem]">
              {images.map((image) => (
                <img
                  key={image}
                  src={image.photo}
                  className=" object-cover"
                  alt="ez eats food images"
                />
              ))}
            </motion.div>
            <AnimatePresence initial={false}>
              {index > 0 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                  onClick={() => setIndex(index - 1)}
                >
                  <img src={ChevronLeftIcon} className="h-6 w-6 hover:cursor-pointer" alt="arrow"/>
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {index + 1 < images.length && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                  onClick={() => setIndex(index + 1)}
                >
                  <img src={ChevronRightIcon} className="h-6 w-6 hover:cursor-pointer" alt="arrow"/>
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}