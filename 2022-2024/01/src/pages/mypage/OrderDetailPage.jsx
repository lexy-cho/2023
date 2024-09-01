import React, { useRef, useState, useEffect } from 'react';
import { BaseButton } from '@components/common';
import { Link } from 'react-scroll';
import sample01 from '@assets/images/sample/sample2.png';
import MyPageSnb from './MyPageSnb';
import MyPageTabNav from './MyPageTabNav';

const OrderDetailPage = ({onLayoutTitleChange}) => {
  useEffect(() => {
      onLayoutTitleChange('주문/배송 상세 내역');
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
                      <h3>주문/배송 상세 내역</h3>
                    </div>
                    <div className='orderSts'>
                      <p>
                        2024.04.20(토) 결제완료 되었습니다.
                        <em>배송 예정일 : 2024.04.21(일)</em>
                      </p>
                      <div>
                        <BaseButton type="button" className="btnWL" label={'결제 취소하기'} />
                      </div>
                      <div style={{display: 'none'}}>
                        <BaseButton type="button" className="btnWL" label={'교환하기'} />
                        <BaseButton type="button" className="btnWL" label={'환불하기'} />
                      </div>
                    </div>
                  </article>
                  <article className='myBox'>
                    <div className='canReviewList orderCase'>
                      <ul>
                        {/* Loop */}
                        <li>
                          <div className='thumPrduct rCase'>
                            <span className='thPImg'><img src={sample01} /></span>
                            <div>
                              <em>2024.04.18 배송완료</em>
                              <strong>[야다] 자연주의 명품 알모네이쳐</strong>
                              <p>옵션옵션옵션옵션</p>
                            </div>
                          </div>
                          <button className='btnP'>리뷰쓰기</button>
                        </li>
                        {/* end Loop */}
                        <li>
                          <div className='thumPrduct rCase'>
                            <span className='thPImg'><img src={sample01} /></span>
                            <div>
                              <em>2024.04.18 배송완료</em>
                              <strong>[야다] 자연주의 명품 펫푸드 알모네이쳐 자연주의 [야다] 자연주의 명품 펫푸드 알모네이쳐 자연주의</strong>
                              <p>옵션옵션옵션옵션</p>
                            </div>
                          </div>
                          <button className='btnP'>리뷰쓰기</button>
                        </li>
                      </ul>
                    </div>
                    <BaseButton type="button" className="btnWL" label={'전체 상품 다시 담기'} />
                  </article>
                  <article className='myBox orderInfo'>
                    <h4>배송 정보</h4>
                    <div>
                      <dl><dt>받는 사람</dt><dd>장금이</dd></dl>
                      <dl><dt>연락처</dt><dd>010-1234-5678</dd></dl>
                      <dl><dt>주소</dt><dd>(12345) 서울특별시 영등포구 선유로 3길 9</dd></dl>
                      <dl><dt>배송메모</dt><dd>문앞에 놓아주세요.</dd></dl>
                    </div>
                  </article>
                  <article className='myBox orderInfo'>
                    <h4>배송 정보</h4>
                    <div>
                      <dl><dt>주문자</dt><dd>홍길동</dd></dl>
                      <dl><dt>연락처</dt><dd>010-1234-5678</dd></dl>
                      <dl><dt>이메일</dt><dd>kd.hong@gmail.com</dd></dl>
                    </div>
                  </article>
                  <article className='myBox orderInfo'>
                    <h4>결제 정보</h4>
                    <div className='price'>
                      <dl><dt>결제일시</dt><dd>2024.04.21 12:34:56</dd></dl>
                      <dl><dt>상품금액</dt><dd>34,000원</dd></dl>
                      <dl><dt>배송비</dt><dd>+10,000원</dd></dl>
                      <dl><dt>포인트</dt><dd>0원</dd></dl>
                      <dl><dt>결제금액</dt><dd><strong>44,000원</strong></dd></dl>
                      <dl><dt>결제방법</dt><dd>일반결제</dd></dl>
                    </div>
                  </article>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default OrderDetailPage;
