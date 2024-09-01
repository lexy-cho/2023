import React, { useState, useRef, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';
import { Link } from 'react-router-dom';
import { BaseButton } from '@components/common';
import sample01 from '@assets/images/sample/sample2.png';
import MyPageSnb from './MyPageSnb';
import MyPageTabNav from './MyPageTabNav';
import ReviewModal from '../../components/ui/modal/ReviewModal';
import {ModalPresent} from '@components/common';

const MyMainPage = ({onLayoutTitleChange}) => {
  const [isModal, setIsModal] = useState(false);
  const [tab , setTab] = useState(1);
  const handleTab = (tab) => {
      setTab(tab);
  }
  const tabRef = useRef();
  useEffect(() => {
      onLayoutTitleChange('마이페이지');
  });

  return (
    <>
      <section>
        <div className='mypageWrap'>
            <MyPageTabNav />
            <div className='grid'>
                <div className='aside'>
                  <MyPageSnb />
                </div>
                <div className='detail'>
                  <article className='myBox mySummery'>
                    <div className='listTit mmUse'>
                      <h3>주문/배송 조회</h3>
                    </div>
                    <div className='dt'>
                      <div className='first'>
                        <span>결제완료 <em>0</em></span>
                        <span>배송준비중 <em>0</em></span>
                        <span>배송중<em>0</em></span>
                        <span>배송완료<strong>1</strong></span>
                      </div>
                      <div className='last'>
                        <span>취소<strong>1</strong></span>
                        <span>교환<em>0</em></span>
                        <span>반품<strong>1</strong></span>
                      </div>
                    </div>
                  </article>
                  <article className='myBox'>
                    <div className='listTit mmUse'>
                      <h3>주문/배송 내역</h3>
                      <Link className='bAV' to=''>전체 보기</Link>
                    </div>
                    <div className='myOrderList mmCase'>
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
                              <li><span>주문상태</span><em>배송완료</em></li>
                            </ul>
                          </dd>
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
                              <li><span>주문상태</span><em>배송완료</em></li>
                            </ul>
                          </dd>
                       </dl>
                    </div>
                  </article>
                  <article className='myBox'>
                    <div className='listTit mmUse'>
                      <h3>구매 리뷰</h3>
                      <Link className='bAV' to=''>전체 보기</Link>
                    </div>
                    <div className='tabNav myCase' ref={tabRef} >
                        <nav>
                            <ul>
                                <li className={`${tab === 1 ? 'on' : ''}`}><button onClick={() => handleTab(1)}>작성 가능한 리뷰</button></li>
                                <li className={`${tab === 2 ? 'on' : ''}`}><button onClick={() => handleTab(2)}>작성한 리뷰</button></li>
                            </ul>
                        </nav>
                    </div>
                    {tab === 1 &&
                    <div className='canReviewList'>
                      <ul>
                        {/* Loop */}
                        <li>
                          <div className='thumPrduct rCase'>
                            <span className='thPImg'><img src={sample01} /></span>
                            <div>
                              <em>2024.04.18 배송완료</em>
                              <strong>[야다] 자연주의 명품 펫푸드 알모네이쳐 자연주의</strong>
                              <p>옵션옵션옵션옵션</p>
                            </div>
                          </div>
                          <button className='btnP' onClick={() => setIsModal(true)}>리뷰쓰기</button>
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
                          <button className='btnP' onClick={() => setIsModal(true)}>리뷰쓰기</button>
                        </li>
                      </ul>
                    </div>
                    }
                    {tab === 2 &&
                    <div className='myReviewList'>
                      <ul>
                        {/* Loop */}
                        <li>
                          <div className='thumPrduct rCase'>
                            <span className='thPImg'><img src={sample01} /><i>3</i></span>
                            <div>
                              <em>2024.04.18 배송완료 <em>200P 적립 완료</em></em>
                              <strong>[브랜드] 명품 펫푸드 알모네이쳐 자연주의 명품 펫푸드 알모네이쳐</strong>
                              <p>옵션옵션옵션옵션</p>
                            </div>
                          </div>
                          <span className="ratingArea">
                            <Rating  
                              allowFraction
                              initialValue={4}
                              size={20}
                              fillColor='#520774'
                              emptyColor='#DDDDDD'
                              readonly />
                          </span>
                          <div className='txt'>
                            밀림과 다크닝 없이 지속력이 매우 우수한 제품이라 마음에 쏙 듭니다! 배송도 빠르게 와서 완전 만족해요. 밀림과 다크닝 없이 지속력이 매우 우수한 제품이라 마음에 쏙 듭니다! 배송도 빠르게 와서 완전 만족해요.
                          </div>
                          <div className='btn'>
                            <BaseButton type="button" className="btnBL" label={'삭제하기'} />
                            <BaseButton type="button" className="btnL" label={'수정하기'} />
                          </div>
                        </li>
                        {/* end Loop */}
                        <li>
                          <div className='thumPrduct rCase'>
                            <div>
                              <em>2024.04.18 배송완료 <em>200P 적립 완료</em></em>
                              <strong>[브랜드] 명품 펫푸드 알모네이쳐 자연주의 명품 펫푸드 알모네이쳐</strong>
                              <p>옵션옵션옵션옵션</p>
                            </div>
                          </div>
                          <span className="ratingArea">
                            <Rating  
                              allowFraction
                              initialValue={4}
                              size={24}
                              fillColor='#520774'
                              emptyColor='#DDDDDD'
                              readonly />
                          </span>
                          <div className='txt'>
                            밀림과 다크닝 없이 지속력이 매우 우수한 제품이라 마음에 쏙 듭니다! 배송도 빠르게 와서 완전 만족해요. 밀림과 다크닝 없이 지속력이 매우 우수한 제품이라 마음에 쏙 듭니다! 배송도 빠르게 와서 완전 만족해요.
                          </div>
                          <div className='btn'>
                            <BaseButton type="button" className="btnBL" label={'삭제하기'} />
                            <BaseButton type="button" className="btnL" label={'수정하기'} />
                          </div>
                        </li>
                      </ul>
                    </div>
                    }
                  </article>
                </div>
            </div>
        </div>
      </section>
      {isModal && 
        <ModalPresent >
          <ReviewModal onClose={() => {setIsModal(false)}}/>
        </ModalPresent>
      }
    </>
  );
};

export default MyMainPage;
