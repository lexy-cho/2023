import React, { useEffect, useRef, useState } from 'react';
import { Pagenation, BaseButton } from '@components/common';
import MyPageSnb from './MyPageSnb';
import MyPageTabNav from './MyPageTabNav';
import { Link } from 'react-scroll';

const PointPage = ({onLayoutTitleChange}) => {
  useEffect(() => {
      onLayoutTitleChange('포인트 내역');
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
                  <div className='listTit mUse'>
                    <h3>포인트 내역</h3>
                    <div className='sorting cCase'>
                      <span>
                        <input type='radio' id='sorting1' name='sorting1' defaultChecked />
                        <label htmlFor='sorting1'>전체</label>
                      </span>
                      <span>
                        <input type='radio' id='sorting2' name='sorting1' />
                        <label htmlFor='sorting2'>적립</label>
                      </span>
                      <span>
                        <input type='radio' id='sorting3' name='sorting1' />
                        <label htmlFor='sorting3'>사용</label>
                      </span>
                      <span>
                        <input type='radio' id='sorting4' name='sorting1' />
                        <label htmlFor='sorting4'>소멸</label>
                      </span>
                    </div> 
                  </div>
                  <div className='pointSummery'>
                    <dl>
                        <dt>총 누적 포인트</dt>
                        <dd>15,000P</dd>
                    </dl>
                    <dl>
                        <dt>사용 가능한 포인트</dt>
                        <dd>5,000P</dd>
                    </dl>
                    <dl>
                        <dt>사용한 포인트</dt>
                        <dd>10,000P</dd>
                    </dl>
                  </div>
                  <div className='pointList'>
                    {/* Loop */}
                    <dl>
                        <dt>2024.04.21</dt>
                        <dd>
                            <ul>
                                <li>
                                    <span>리뷰 적립</span>
                                    <div>
                                        <em>&#91;야다&#93; 자연주의 명품 펫푸드 알모네이쳐</em>
                                        <strong>+200P</strong>
                                    </div>
                                </li>
                                <li>
                                    <span>리뷰 적립</span>
                                    <div>
                                        <em>&#91;야다&#93; 자연주의 명품 펫푸드 알모네이쳐</em>
                                        <strong>+200P</strong>
                                    </div>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                    {/* end Loop */}
                    <dl>
                        <dt>2024.04.21</dt>
                        <dd>
                            <ul>
                                <li>
                                    <span>주문 사용</span>
                                    <div>
                                        <em>&#91;야다&#93; 자연주의 명품 펫푸드 알모네이쳐</em>
                                        <strong className='minus'>-1,000P</strong>
                                    </div>
                                </li>
                                <li>
                                    <span>주문 사용</span>
                                    <div>
                                        <em>&#91;야다&#93; 자연주의 명품 펫푸드 알모네이쳐 자연주의 명품 펫푸드 알모네이쳐 자연주의</em>
                                        <strong className='minus'>-1,000P</strong>
                                    </div>
                                </li>
                            </ul>
                        </dd>
                    </dl>
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

export default PointPage;
