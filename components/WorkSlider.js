// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Personal Portfolio',
          path: '/thumb1.jpg',
          url: 'https://yourportfolio.vercel.app/',
          description: 'A modern portfolio showcasing design and development skills with interactive UI elements.',
        },
        {
          title: 'Jirani Rides Platform',
          path: '/thumb2.jpg',
          url: 'https://jirani-rides.vercel.app/',
          description: 'Ride‑sharing web app built with Next.js, offering seamless booking and real‑time tracking.',
        },
        {
          title: 'Blog & Content Hub',
          path: '/thumb3.jpg',
          url: 'https://yourblog.vercel.app/',
          description: 'A scalable blogging platform with clean layouts, optimized for readability and SEO.',
        },
        {
          title: 'Analytics Dashboard',
          path: '/thumb4.jpg',
          url: 'https://yourdashboard.vercel.app/',
          description: 'Interactive dashboard for data visualization, designed for clarity and actionable insights.',
        },
      ],
    },
    {
      images: [
        {
          title: 'E‑Commerce Store',
          path: '/thumb2.jpg',
          url: 'https://yourecommerce.vercel.app/',
          description: 'Full‑stack online store with secure checkout, product filtering, and responsive design.',
        },
        {
          title: 'Portfolio Website',
          path: '/thumb1.jpg',
          url: 'https://yourportfolio.vercel.app/',
          description: 'Personal showcase site highlighting creative projects and technical expertise.',
        },
        {
          title: 'Dashboard App',
          path: '/thumb4.jpg',
          url: 'https://yourdashboard.vercel.app/',
          description: 'Custom dashboard application for managing workflows and tracking KPIs.',
        },
        {
          title: 'Blog Platform',
          path: '/thumb3.jpg',
          url: 'https://yourblog.vercel.app/',
          description: 'Content management system with intuitive editor and responsive layouts.',
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';

// next image   
import Image from 'next/image';
import Link from 'next/link';

const WorkSlider = () => {
  return (
    <Swiper 
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <Link href={image.url} target="_blank" key={index}>
                    <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        {/* image */}
                        <Image src={image.path} width={500} height={300} alt={image.title} />
                        {/* overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#00C4B4] to-[#007f77] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        {/* title & description */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 px-4">
                          <div className="flex flex-col gap-y-2 text-[13px] tracking-[0.1em] text-white">
                            <div className="delay-100 font-semibold">{image.title}</div>
                            <div className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                              {image.description}
                            </div>
                            <div className="flex items-center gap-x-2 mt-1">
                              <span className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                LIVE
                              </span>
                              <span className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-300">
                                <BsArrowRight />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
