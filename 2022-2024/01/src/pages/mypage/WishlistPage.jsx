import React, { useEffect, useRef, useState } from 'react';
import { Pagenation, BaseButton } from '@components/common';
import { Link } from 'react-scroll';
import MyPageSnb from './MyPageSnb';
import MyPageTabNav from './MyPageTabNav';
import sample01 from '@assets/images/sample/sample2.png';

const WishlistPage = ({onLayoutTitleChange}) => {
  useEffect(() => {
      onLayoutTitleChange('찜한 상품');
  });
  return (
    <>
      <section>
        <div className='mypageWrap'>
          <MyPageTabNav />
          <div className='grid subCase'>
              <div className='aside'>
                <MyPageSnb />
              </div>
              <div className='detail'>
                <article className='myBox'>
                  <div className='listTit'>
                    <h3>찜한 상품</h3>
                  </div>
                  <div className='wishlist'>
                    <ul>
                        {/* Loop */}
                        <li>
                            <div className='thumPrduct'>
                                <span className='thPImg'><img src={sample01} /></span>
                                <div>
                                    <strong>&#91;야다&#93; 자연주의 명품 펫푸드 알모네이쳐 자연주의 명품</strong>
                                    <p>옵션옵션옵션옵션</p>
                                    <span>50% <span>50,000원</span><del>100,000원</del></span>
                                </div>
                            </div>
                            <div className='btn'>
                                <BaseButton type="button" className='btnBL' label={'삭제하기'} />
                                <BaseButton type="button" className='btnL' label={'장바구니 담기'} />
                            </div>
                        </li>
                        {/* end Loop */}
                        <li>
                            <div className='thumPrduct'>
                                <span className='thPImg'><img src={sample01} /></span>
                                <div>
                                    <strong>&#91;야다&#93; 자연주의 명품 펫푸드 알모네이쳐 자연주의 명품</strong>
                                    <p>옵션옵션옵션옵션</p>
                                    <span>50% <span>50,000원</span><del>100,000원</del></span>
                                </div>
                            </div>
                            <div className='btn'>
                                <BaseButton type="button" className='btnBL' label={'삭제하기'} />
                                <BaseButton type="button" className='btnL' label={'장바구니 담기'} />
                            </div>
                        </li>
                    </ul>
                  </div>
                  <Pagenation />
                </article>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WishlistPage;
