
// components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motiom
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Services = () => {
  return (
  <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        {/* text */}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2
           variants={fadeIn('up', 0.3)}
           initial="hidden"
           animate="show"
           exit="hidden"
           className='h2 xl:mt-8'
           >
            My services <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p 
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='mb-4 max-w-[400px] mx-auto lg:mx-0'
            >
              I build solutions that merge functionality with intuitive design. Whether it's crafting dynamic UI components,troubleshooting complex layouts,or otimizing code for efficiency,every project is an opportunity to refine and innovate.My work isn't just about wriring code,it's about creating seamless, engaging digital experiences that solve real-world problems.Through clean syling,logical structuring, and interactive elements,I bring precision and creativity to modern web development.
            </motion.p>
        </div>
        <motion.div
        variants={fadeIn('down', 0.9)}
        initial="hidden"
        animate="show"
        exit="hidden" 
        className='w-full xl:max-w-[65%]'
        >
          {/* slider */}
        <ServiceSlider />
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>
  );
};

export default Services;
