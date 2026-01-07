// components
import TestimonialSlider from "../../components/TestimonialSlider";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-primary py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* headline */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-4 xl:mb-0"
        >
          What <span className="text-accent">Clients Say</span> About My Work
        </motion.h2>

        {/* subline */}
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-sm sm:text-base text-white/70 max-w-[500px] mx-auto mb-8"
        >
          Honest feedback from collaborators and clients who’ve experienced my design and development solutions.
        </motion.p>

        {/* slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
