// next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="min-h-screen bg-primary py-32 text-center xl:text-left overflow-y-auto">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center pt-24 md:pt-32 xl:pt-40 xl:text-left h-full container mx-auto px-4">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-4"
          >
            Where <span className="text-accent">Code</span> Meets{" "}
            <span className="text-accent">Creativity</span> <br />
            Turning <span className="text-accent">Ideas</span> into{" "}
            <span className="text-accent">Impact</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-sm sm:text-base md:text-lg max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6 xl:mb-4 leading-relaxed"
          >
            I craft digital experiences that blend design elegance with technical precision. 
            From sleek interfaces to complex problem‑solving, my work transforms bold concepts 
            into interactive realities that inspire and engage.
          </motion.p>

          {/* short subline */}
          <motion.p
            variants={fadeIn("down", 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-xs sm:text-sm md:text-base text-accent font-medium tracking-wide mt-2 mb-10 xl:mb-16"
          >
            Building the future, one pixel and line of code at a time.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative mb-10">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* image */}
      <div className="w-full xl:w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[737px] max-h-[678px] absolute -bottom-20 sm:-bottom-28 md:-bottom-32 lg:bottom-0 lg:right-[8%] mx-auto"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
