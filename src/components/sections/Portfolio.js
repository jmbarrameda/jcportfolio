import React from 'react';
// import Swiper from 'swiper/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
// import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
SwiperCore.use([Pagination, Navigation]);

const projectList = [
  {
    title: 'Modern Website',
    desc: 'Website adaptable to all devices, with ui components and animated interactions. Website adaptable to all devices, with ui components and animated interactions',
    link: 'https://google.com',
  },
  { title: 'title 2', desc: 'short description 2', link: 'https://google.com' },
  { title: 'title 3', desc: 'short description 3', link: 'https://google.com' },
];

const slideImg = projectList.map((project, i) => (
  <SwiperSlide key={`${i}`} className='flex flex-col bg-transparent md:px-24'>
    <img
      className='cover h-full w-full rounded-lg'
      src={`https://picsum.photos/id/${i}/500/300`}
      alt='slide 1'
    />
    <div className='py-4 px-6 mb-6 self-start text-left'>
      <div className='text-xl font-bold mb-2'>{project.title}</div>
      <p className='text-sm mb-4 '>{project.desc}</p>
      <button className='text-sm bg-darkBrown text-lightBeach px-4 py-3 font-semibold rounded'>
        Demo <i class='ml-1 fas fa-arrow-right'></i>
      </button>
    </div>
  </SwiperSlide>
));

const Portfolio = () => {
  return (
    <>
      <div className='container mx-auto h-full'>
        <div className='h-full py-10 lg:mb-20'>
          <div className='p-9 font-bold text-3xl md:text-4xl opacity-90 text-darkBrown text-center'>
            Portfolio
          </div>
          <div className='min-h-fit px-4 md:px-9'>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={true}
              navigation={true}
              className='mySwiper max-h-fit md:max-w-3xl lg:max-w-4xl rounded-lg'
            >
              {slideImg}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
