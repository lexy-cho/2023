import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ItemTag, PostsMore, BaseButton } from '@components/common';

const DesignerInquirePage  = () => {
    const infoItems = [{ name: '의뢰서 a'}];
  return (
    <>
        <section>
            <h2>의뢰서 수령</h2>
            <div className='viewBox'>
                <div className='tvs'>
                    <article>
                        <h3 className='pt60'>내 의뢰서 정보</h3>
                        <div className='detail reQMinInfo'>
                            <div className='left'>
                                <ItemTag items={infoItems} />
                                <strong>크라운 3 인레이 5 / 하악 프레임 크라운 3 인레이 5/ 하악 프레임 크라</strong>
                                <p>크라운 15 / 어비트먼트 10</p>
                            </div>
                            <div className='right'>
                                <strong className='time'>2024. 06. 30 <strong>18:30</strong></strong>
                                <Link className='bMR' to='/requestView'>더 자세히보기</Link>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </>
  );
};

export default DesignerInquirePage ;
