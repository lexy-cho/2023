import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SwiperImage, SwiperImageThumbs } from '@components/common';

const ImageThumbs = ({ items, imgName = 'file_path' }) => {
  const [swiper, setSwiper] = useState();

  return (
    <div className="portfolioImg">
      <div className="pfMainSwiper">
        {items.length > 0 && (
          <SwiperImage
            items={items.map((el, idx) => {
              return <img key={`${idx}pimgSet`} src={el[imgName]} />;
            })}
            thumbsSwiper={swiper}
            pagination={true}
          />
        )}
        {items.length === 0 && <p className="noList image">등록한 이미지가 없습니다.</p>}
      </div>

      {items.length > 0 && (
        <div className="pfThumbsSwiper">
          <SwiperImageThumbs
            space={10}
            items={items.map((el, idx) => {
              return (
                <span key={`${idx}SwiperImageThumbs`}>
                  <img src={el[imgName]} />
                </span>
              );
            })}
            perview={'auto'}
            setThumbsSwiper={setSwiper}
          />
        </div>
      )}
    </div>
  );
};

export default ImageThumbs;
