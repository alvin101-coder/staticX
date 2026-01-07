// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// import required modules
import { FreeMode, Pagination } from 'swiper';

// data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Crafting unique brand identities that capture attention and build lasting recognition.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Designing sleek, user‑focused interfaces that balance creativity with usability.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Building fast, scalable, and responsive websites that turn ideas into digital reality.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Writing clear, compelling content that connects with audiences and drives action.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Optimizing websites for visibility and growth, helping your brand rank and reach more people.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper 
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & description */}
              <div className='mb-8'> 
                <div className='mb-2 text-lg font-semibold'>{item.title}</div>
                <p className='max-w-[350px] leading-normal text-white/70'>
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
