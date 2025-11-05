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
    <div className="bg-primary/60 h-full">
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
            Code Meets <span className="text-accent">Creativity</span>: <br />
            Bringing <span className="text-accent">Visions</span> to{" "}
            <span className="text-accent">Life</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-sm sm:text-base md:text-lg max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6 xl:mb-16 leading-relaxed"
          >
            I merge technical expertise with artistic vision to craft seamless
            digital experiences. Whether designing sleek interfaces or solving
            complex coding challenges, my goal is to turn innovation ideas into
            functional and visually captivating realities.
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
