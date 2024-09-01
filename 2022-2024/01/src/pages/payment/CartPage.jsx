import React, { useEffect, useRef } from 'react';
import { BaseButton, BaseInput, BaseSelect } from '@components/common';
import WidthLookList from '../product/components/WidthLookList';
import sample01 from '@assets/images/sample/sample2.png';

const CartPage = ({onLayoutTitleChange}) => {
  useEffect(() => {
      onLayoutTitleChange('장바구니');
  });
  return (
    <>
      <section>
        <div className='cartWrap'>
          <BaseButton className="btnClose" label={'이전'} />
          <div className='listTit'>
              <h3>장바구니</h3>
          </div>
          <div className='grid'>
            <div className='detail'>
              <article>
                <div className='cartList'>
                  <div className='cartTotal'>
                    <span className='checkSet'>
                      <input type='checkbox' id='checkbox51' className='rCheck' />
                      <label htmlFor='checkbox51'>전체선택(1/4)</label>
                    </span>
                    <em><BaseButton type="button" label={'선택삭제'} /></em>
                  </div>
                  <ul>
                    <li>
                      <input type='checkbox' className='rCheck' />
                      <div className='thumPrduct'>
                        <span className='thPImg'><img src={sample01} /></span>
                        <div>
                          <strong>[브랜드] 명품 펫푸드 알모네이쳐 자연주의 명품 펫푸드 알모네이쳐</strong>
                          <p>옵션옵션옵션옵션</p>
                        </div>
                      </div>
                      <div className='pnn'>
                        <span className='price'>
                          <strong>29,000원</strong>
                          <del>38,000원</del>
                        </span>
                        <span className="numSet">
                          <button>-</button>
                          <strong>0</strong>
                          <button>+</button>
                        </span>
                      </div>
                      <BaseButton type="button" className='bCD' label={'삭제'} />
                    </li>
                    <li className='noList cart' style={{display: 'none'}}>
                      장바구니에 담긴 상품이 없습니다
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            <div className='aside payPriceSet'>
              <aside>
                <div className='back'>
                  <h4>결제 금액</h4>
                  <div>
                    <dl>
                      <dt>상품 금액</dt>
                      <dd>29,000원</dd>
                    </dl>
                    <dl>
                      <dt>상품 할인 금액</dt>
                      <dd>-9,000원</dd>
                    </dl>
                    <dl>
                      <dt>배송비</dt>
                      <dd>+10,000원</dd>
                    </dl>
                    <dl>
                      <dt>포인트</dt>
                      <dd>0원</dd>
                    </dl>
                    <dl className='total'>
                      <dt>최종 결제 금액</dt>
                      <dd>30,000원</dd>
                    </dl>
                  </div>
                  <span className='checkSet'>
                    <input type='checkbox' id='checkbox51'/>
                    <label htmlFor='checkbox51'>주문 내용을 확인하였으며, 정보 제공 등에 동의합니다. </label>
                  </span>
                </div>
                <BaseButton type="submit" className="btnM" label={'30,000원 결제하기'} />
              </aside>
            </div>
          </div>
        </div>
        <WidthLookList />
      </section>
    </>
  );
};

export default CartPage;
