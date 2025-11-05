// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Portfolio Website',
          path: '/thumb1.jpg',
          url: 'https://jirani-rides.vercel.app/',
        },
        {
          title: 'Jirani Rides',
          path: '/thumb2.jpg',
          url: 'https://jirani-rides.vercel.app/',
        },
        {
          title: 'Blog Platform',
          path: '/thumb3.jpg',
          url: 'https://jirani-rides.vercel.app/',
        },
        {
          title: 'Dashboard App',
          path: '/thumb4.jpg',
          url: 'https://jirani-rides.vercel.app/',
        },
      ],
    },
    {
      images: [
        {
          title: 'Dashboard App',
          path: '/thumb4.jpg',
          url: 'https://jirani-rides.vercel.app/',
        },
        {
          title: 'Portfolio Website',
          path: '/thumb1.jpg',
          url: 'https://jirani-rides.vercel.app/',
        },
        {
          title: 'E-commerce Store',
          path: '/thumb2.jpg',
          url: 'https://jirani-rides.vercel.app/',
        },
        {
          title: 'Blog Platform',
          path: '/thumb3.jpg',
          url: 'https://jirani-rides.vercel.app/',
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

//next image   
import Image from 'next/image';
import Link from 'next/link';

// import data
// import { workSlides } from './workSlides'; // adjust path if needed

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
                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] text-white">
                            <div className="delay-100">{image.title}</div>
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              LIVE
                            </div>
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
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
