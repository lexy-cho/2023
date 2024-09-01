import React, { useRef, useState, useEffect } from 'react';
import { Pagenation, BaseButton } from '@components/common';
import { Rating } from 'react-simple-star-rating';
import { Link } from 'react-scroll';
import sample01 from '@assets/images/sample/sample2.png';
import sample02 from '@assets/images/sample/sample3.png';
import MyPageTabNav from './MyPageTabNav';
import ReviewModal from '../../components/ui/modal/ReviewModal';
import {ModalPresent} from '@components/common';

const ReviewPage = ({onLayoutTitleChange}) => {
  const [isModal, setIsModal] = useState(false);
  const [tab , setTab] = useState(1);
  const handleTab = (tab) => {
      setTab(tab);
  }
  const tabRef = useRef();
  useEffect(() => {
    onLayoutTitleChange('리뷰 관리')
  })

  return (
    <>
      <section>
        <MyPageTabNav />
        <div className='reviewWrap'>
          <h2>리뷰 관리</h2>
          <div className='tabNav' ref={tabRef} >
              <nav>
                  <ul>
                      <li className={`${tab === 1 ? 'on' : ''}`}><button onClick={() => handleTab(1)}>작성 가능한 리뷰(6)</button></li>
                      <li className={`${tab === 2 ? 'on' : ''}`}><button onClick={() => handleTab(2)}>작성한 리뷰(6)</button></li>
                  </ul>
              </nav>
          </div>
          {/* -- */}
          {tab === 1 && 
            <article>
              <div className='ordertime'>2024.04.19(금) <span>주문번호 123456789</span></div>
              <div className='canReviewList'>
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
                    <button className='btnL' onClick={() => setIsModal(true)} >리뷰쓰기</button>
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
                    <button className='btnL' onClick={() => setIsModal(true)} >리뷰쓰기</button>
                  </li>
                </ul>
              </div>
              <Pagenation />
            </article>
          }
          {tab === 2 && 
            <article>
              <div className='ordertime'>2024.04.19(금) <span>주문번호 123456789</span></div>
              <div className='myReviewList'>
                <ul>
                  {/* Loop */}
                  <li>
                    <div className='thumPrduct rCase pInfo'>
                      <span className='thPImg'><img src={sample01} /></span>
                      <div>
                        <strong>[브랜드] 명품 펫푸드 알모네이쳐 자연주의 명품 펫푸드 알모네이쳐</strong>
                        <p>옵션옵션옵션옵션</p>
                      </div>
                    </div>
                    <div className='thumPrduct rCase'>
                      <span className='thPImg'><img src={sample02} /><i>3</i></span>
                      <div>
                        <span className="ratingArea">
                          <Rating  
                            allowFraction
                            initialValue={4}
                            size={20}
                            fillColor='#520774'
                            emptyColor='#DDDDDD'
                            readOnly />
                        </span>
                        <em>2024.04.18 배송완료 <em>200P 적립 완료</em></em>
                        <div className='txt'>
                          밀림과 다크닝 없이 지속력이 매우 우수한 제품이라 마음에 쏙 듭니다! 배송도 빠르게 와서 완전 만족해요. 밀림과 다크닝 없이 지속력이 매우 우수한 제품이라 마음에 쏙 듭니다! 배송도 빠르게 와서 완전 만족해요.
                        </div>
                      </div>
                    </div>
                    <div className='btn'>
                      <BaseButton type="button" className="btnBL" label={'삭제하기'} />
                      <BaseButton type="button" className="btnL" label={'수정하기'} />
                    </div>
                  </li>
                  {/* end Loop */}
                  <li>
                    <div className='thumPrduct rCase pInfo'>
                      <span className='thPImg'><img src={sample01} /></span>
                      <div>
                        <strong>[브랜드] 명품 펫푸드 알모네이쳐 자연주의 명품 펫푸드 알모네이쳐</strong>
                        <p>옵션옵션옵션옵션</p>
                      </div>
                    </div>
                    <div className='thumPrduct rCase'>
                      <div>
                        <span className="ratingArea">
                          <Rating  
                            allowFraction
                            initialValue={4}
                            size={24}
                            fillColor='#520774'
                            emptyColor='#DDDDDD'
                            readOnly />
                        </span>
                        <em>2024.04.18 배송완료 <em>200P 적립 완료</em></em>
                        <div className='txt'>
                          밀림과 다크닝 없이 지속력이 매우 우수한 제품이라 마음에 쏙 듭니다! 배송도 빠르게 와서 완전 만족해요. 밀림과 다크닝 없이 지속력이 매우 우수한 제품이라 마음에 쏙 듭니다! 배송도 빠르게 와서 완전 만족해요.
                        </div>
                      </div>
                    </div>
                    <div className='btn'>
                      <BaseButton type="button" className="btnBL" label={'삭제하기'} />
                      <BaseButton type="button" className="btnL" label={'수정하기'} />
                    </div>
                  </li>
                </ul>
              </div>
              <Pagenation />
            </article>
          }
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

export default ReviewPage;
