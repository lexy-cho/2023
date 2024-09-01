import React, { useRef, useState, useEffect } from 'react';
import { Pagenation, BaseButton } from '@components/common';
import MyPageSnb from './MyPageSnb';
import MyPageTabNav from './MyPageTabNav';
import { Link } from 'react-scroll';

const CancelPage = ({onLayoutTitleChange}) => {
  useEffect(() => {
      onLayoutTitleChange('취소/환불 내역');
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
                    <h3>취소/환불 내역</h3>
                    <div className='sorting cCase'>
                      <span>
                        <input type='radio' id='sorting1' name='sorting1' defaultChecked />
                        <label htmlFor='sorting1'>전체</label>
                      </span>
                      <span>
                        <input type='radio' id='sorting2' name='sorting1' />
                        <label htmlFor='sorting2'>주문취소</label>
                      </span>
                      <span>
                        <input type='radio' id='sorting3' name='sorting1' />
                        <label htmlFor='sorting3'>상품환불</label>
                      </span>
                    </div> 
                  </div>
                  <div className='sorting box'>
                    <span>
                      <input type='radio' id='sorting21' name='sorting2' defaultChecked />
                      <label htmlFor='sorting21'>3개월</label>
                    </span>
                    <span>
                      <input type='radio' id='sorting22' name='sorting2' />
                      <label htmlFor='sorting22'>6개월</label>
                    </span>
                    <span>
                      <input type='radio' id='sorting23' name='sorting2' />
                      <label htmlFor='sorting23'>1년</label>
                    </span>
                    <span>
                      <input type='radio' id='sorting24' name='sorting2' />
                      <label htmlFor='sorting24'>3년</label>
                    </span>
                  </div> 
                  <div className='myOrderList'>
                    {/* Loop */}
                      <dl>
                        <dt>
                          <strong>2024.04.20 (19시 10분)</strong>
                          <Link className='bMR' to=''>자세히 보기</Link>
                        </dt>
                        <dd>
                          <ul>
                            <li><span>상품명</span><em>[야다] 자연주의 명품 펫푸드 알모네이쳐 자연주의 명품 펫푸드 알모네이쳐</em></li>
                            <li><span>주문번호</span><em>123456789</em></li>
                            <li><span>결제방법</span><em>계좌이체</em></li>
                            <li><span>결제금액</span><em>39,000원</em></li>
                            <li><span>주문상태</span><em>상품수거중</em></li>
                          </ul>
                        </dd>
                        <dd className='doneTxt'>주문 취소 완료</dd>
                      </dl>
                      {/* end Loop */}
                      <dl>
                        <dt>
                          <strong>2024.04.20 (19시 10분)</strong>
                          <Link className='bMR' to=''>자세히 보기</Link>
                        </dt>
                        <dd>
                          <ul>
                            <li><span>상품명</span><em>[야다] 자연주의 명품 펫푸드 알모네이쳐 자연주의 명품 펫푸드 알모네이쳐</em></li>
                            <li><span>주문번호</span><em>123456789</em></li>
                            <li><span>결제방법</span><em>계좌이체</em></li>
                            <li><span>결제금액</span><em>39,000원</em></li>
                            <li><span>주문상태</span><em>환불 완료</em></li>
                          </ul>
                        </dd>
                        <dd className='doneTxt'>환불 완료</dd>
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

export default CancelPage;
