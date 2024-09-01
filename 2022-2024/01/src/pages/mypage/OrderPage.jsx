import React, { useRef, useState, useEffect } from 'react';
import { Pagenation, BaseButton } from '@components/common';
import MyPageSnb from './MyPageSnb';
import MyPageTabNav from './MyPageTabNav';
import { Link } from 'react-router-dom';
import ExchangeModal from '../../components/ui/modal/ExchangeModal';
import CancelModal from '../../components/ui/modal/CancelModal';
import RefundModal from '../../components/ui/modal/RefundModal';
import {ModalPresent} from '@components/common';

const OrderPage = ({onLayoutTitleChange}) => {
  const [isModal, setIsModal] = useState(false);
  const [isModal2, setIsModal2] = useState(false);
  const [isModal3, setIsModal3] = useState(false);
  useEffect(() => {
      onLayoutTitleChange('주문/배송 내역');
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
                    <h3>주문/배송 내역</h3>
                    <div className='sorting'>
                      <span>
                        <input type='radio' id='sorting1' name='sorting1' defaultChecked />
                        <label htmlFor='sorting1'>전체</label>
                      </span>
                      <span>
                        <input type='radio' id='sorting2' name='sorting1' />
                        <label htmlFor='sorting2'>결제완료</label>
                      </span>
                      <span>
                        <input type='radio' id='sorting3' name='sorting1' />
                        <label htmlFor='sorting3'>배송준비</label>
                      </span>
                      <span>
                        <input type='radio' id='sorting4' name='sorting1' />
                        <label htmlFor='sorting4'>배송중</label>
                      </span>
                      <span>
                        <input type='radio' id='sorting5' name='sorting1' />
                        <label htmlFor='sorting5'>배송완료</label>
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
                          <Link className='bMR' to='/orderDetail'>자세히 보기</Link>
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
                        <dd className='btn'>
                          <BaseButton type="button" className="btnWL" label={'결제 취소하기'}  onClick={() => setIsModal2(true)} />
                        </dd>
                      </dl>
                      {/* end Loop */}
                      <dl>
                        <dt>
                          <strong>2024.04.20 (19시 10분)</strong>
                          <Link className='bMR' to='/orderDetail'>자세히 보기</Link>
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
                        <dd className='btn'>
                          <BaseButton type="button" className="btnWL" label={'교환하기'}  onClick={() => setIsModal(true)} />
                          <BaseButton type="button" className="btnWL" label={'환불하기'}  onClick={() => setIsModal3(true)} />
                        </dd>
                      </dl>
                  </div>
                  <Pagenation />
                </article>
              </div>
          </div>
        </div>
      </section>
      {isModal && 
        <ModalPresent >
          <ExchangeModal onClose={() => {setIsModal(false)}}/>
        </ModalPresent>
      }
      {isModal2 && 
        <ModalPresent >
          <CancelModal onClose={() => {setIsModal2(false)}}/>
        </ModalPresent>
      }
      {isModal3 && 
        <ModalPresent >
          <RefundModal onClose={() => {setIsModal3(false)}}/>
        </ModalPresent>
      }
    </>
  );
};

export default OrderPage;
