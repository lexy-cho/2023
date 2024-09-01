import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, EffectCoverflow, Thumbs, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default ({ items, customButton, navigation, setSwiper, perview, space, breakpoints, autoplay, pagination, paginationRef, onChangeActiveIndex, onPauseOnMouseEnter }) => {
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
      pagination={{
        clickable: true,
        ...(paginationRef ? { el: `.${paginationRef.current.className}` } : {}),
      }}
    >
      {items?.map((el, idx) => (
        <SwiperSlide key={idx}>{el}</SwiperSlide>
      ))}
    </Swiper>
  );

  if (onPauseOnMouseEnter) {
    return (
      <div className="addDiv" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {swiper}
      </div>
    );
  }
  return swiper;
};
