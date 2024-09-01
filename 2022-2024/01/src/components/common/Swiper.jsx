import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,  Autoplay, Thumbs, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

//swiper module css
// import styles from './swiper.module.css';
// import SwiperBtnWrapper from './SwiperBtnWrapper';

const SwiperBase = ({ items, navigation, setSwiper, perview, space, breakpoints, autoplay, pagination, onChangeActiveIndex, onPauseOnMouseEnter }) => {
  const swiperRef = useRef(null);
  const handleMouseEnter = () => {
    swiperRef?.current?.swiper?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRef?.current?.swiper?.autoplay?.start();
  };
  const swiper = (
    <Swiper
      ref={swiperRef}
      modules={[...(navigation ? [Navigation] : []), ...(pagination ? [Pagination] : []), ...(autoplay ? [Autoplay] : [])]}
      navigation={true}
      spaceBetween={space || 0}
      slidesPerView={perview || 1}
      breakpoints={breakpoints}
      autoplay={{ ...autoplay }}
      onSlideChange={onChangeActiveIndex && onChangeActiveIndex}
      onSwiper={(e) => {
        if (setSwiper) setSwiper(e);
      }}
      pagination={true}
      // pagination={{
      //   clickable: true,
      //   ...(paginationRef ? { el: `.${paginationRef.current.className}` } : {}),
      // }}
    >
      {items?.map((el, idx) => (
        <SwiperSlide key={idx}>{el}</SwiperSlide>
      ))}
    </Swiper>
  );

  if (onPauseOnMouseEnter) {
    return (
      <div className='addDiv' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {swiper}
      </div>
    );
  }
  return swiper;
};

const SwiperImage = ({ items, space, perview, breakpoints}) => {
  return (
    <Swiper
      spaceBetween={space || 0}
      slidesPerView={perview || 1}
      breakpoints={breakpoints}
      pagination={false}
      navigation={true}
      modules={[FreeMode, Pagination, Navigation]}
    >
      {items?.map((el, idx) => (
        <SwiperSlide key={`${idx}SwiperImage`}>
          {el}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export { SwiperBase as default, SwiperImage };