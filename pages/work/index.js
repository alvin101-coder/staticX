// components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import Socials from "../../components/Socials"; // 👈 import socials

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary py-20 md:py-28 xl:py-36 flex flex-col items-center">
      <Circles />

      {/* socials placed between logo & work */}
      <div className="container mx-auto flex justify-center mb-10">
        {/* <Socials className="flex gap-x-6 text-xl sm:text-2xl" /> */}
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-x-8 items-center xl:items-start">
          {/* text */}
          <div className="text-center xl:w-[30vw] flex flex-col lg:text-left mb-8 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-4"
            >
              My Work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-sm sm:text-base leading-relaxed mb-6 max-w-[500px] mx-auto lg:mx-0"
            >
              I build solutions that merge functionality with intuitive design.
              Whether it's crafting dynamic UI components, troubleshooting
              complex layouts, or optimizing code for efficiency, every project
              is an opportunity to refine and innovate. My work isn't just about
              writing code, it's about creating seamless, engaging digital
              experiences that solve real-world problems. Through clean styling,
              logical structuring, and interactive elements, I bring precision
              and creativity to modern web development.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.9)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
