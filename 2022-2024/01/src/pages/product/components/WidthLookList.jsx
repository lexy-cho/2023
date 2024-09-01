import React from 'react';
import { Link } from 'react-router-dom';
import { SwiperImage } from '@components/common/Swiper';
import sample01 from '@assets/images/sample/sample2.png';

const WidthLookList = () => {
    const img_file_list = [
        { file_path: sample01},
        { file_path: sample01},
        { file_path: sample01},
        { file_path: sample01},
        { file_path: sample01},
        { file_path: sample01},
    ]
    const breakpoints = {
        320: {
        spaceBetween: 10,
        },
        768: {
        spaceBetween: 40,
        },
    };
  return (
    <>
      <article className='widthLookBack'>
          <div className='listTit'>
            <h3>함께 보면 좋은 상품</h3>
            <Link className='bMR ss'>더보기</Link>
          </div>
            <div className='wLPSwiper'>
                <SwiperImage
                    items={img_file_list.map((el, idx) => {
                    return (
                        <span className='pSet'>
                            <span className="pImg"><img key={`${idx}pimgSet`} src={el.file_path} /></span>
                            <strong>오에르 카밍 릴리프 에멀전</strong>
                            <em className='brand'>오에르</em>
                            <span className='price'>
                                <span>19,900원</span>
                                <em>~20%</em>
                            </span>
                        </span>
                    );
                    })}
                    perview={'auto'}
                    space='40'
                    navigation={true}
                    breakpoints={breakpoints}
                />
            </div>
      </article>
    </>
  );
};

export default WidthLookList;
