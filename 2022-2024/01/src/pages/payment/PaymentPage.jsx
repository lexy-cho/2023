import React, { useEffect, useRef, useState } from 'react';
import { BaseButton, BaseInput, BaseSelect } from '@components/common';
import sample01 from '@assets/images/sample/sample2.png';

const PaymentPage = ({onLayoutTitleChange}) => {
    const emailItems = [{ name: 'gmail.com', value: 0 }, { name: 'naver.com', value: 1 }];
    const phoneItems = [{ name: '010', value: 0 }, { name: '011', value: 1 }];
    const [pKindvalue, setPKindvalue] = useState(false);
    useEffect(() => {
        onLayoutTitleChange('주문/결제');
    });
  return (
    <>
      <section>
        <div className='paymentWrap'>
          <div className='listTit'>
              <h3>주문/결제</h3>
          </div>
          <form className='grid'>
            <div className='detail'>
              <article>
                <h4>주문 정보</h4>
                <div className='tws'>
                  <dl>
                    <dt>이름</dt>
                    <dd><BaseInput type="text" placeholder="User name" value='홍길동' /></dd>
                  </dl>
                  <dl>
                    <dt>이메일</dt>
                    <dd className='emailSet'>
                      <BaseInput type="text" placeholder="User name" value='kd.hong' />
                      <em>@</em>
                      <BaseSelect items={emailItems} placeholder={'gmail.com'} onChange={(e) => console.log(e)} />
                    </dd>
                  </dl>
                  <dl>
                    <dt>연락처</dt>
                    <dd className='phoneSet'>
                      <BaseSelect items={phoneItems} placeholder={'010'} onChange={(e) => console.log(e)} />
                      <BaseInput type="text" placeholder="" value='1234-5678' />
                    </dd>
                  </dl>
                </div>
                <h4 className='betwin'>
                  배송 정보
                  <BaseButton type="button" label={'위와 동일하게 채우기'} />
                </h4>
                <div className='tws'>
                  <dl>
                    <dt>배송지명</dt>
                    <dd><BaseInput type="text" placeholder="배송지명을 입력해 주세요." /></dd>
                  </dl>
                  <dl>
                    <dt>받는 사람</dt>
                    <dd><BaseInput type="text" placeholder="이름을 입력해 주세요." /></dd>
                  </dl>
                  <dl>
                    <dt>연락처</dt>
                    <dd className='phoneSet'>
                      <BaseSelect items={phoneItems} placeholder={'010'} onChange={(e) => console.log(e)} />
                      <BaseInput type="text" placeholder="" value='1234-5678' />
                    </dd>
                  </dl>
                  <dl>
                    <dt>주소</dt>
                    <dd className='addressSet'>
                      <span className='zip'>
                        <button type='button' className='bIW'>주소찾기</button>
                        <input type='text' disabled />
                      </span>
                      <p></p>
                      <input type='text' placeholder='상세 주소를 입력해 주세요.' />
                    </dd>
                  </dl>
                </div>
                <h4>주문 상품 <em>1건</em></h4>
                <div className='orderProduct'>
                  <dl>
                    <dt>
                      트리밍버드
                      <em>무료배송</em>
                    </dt>
                    <dd className='thumPrduct'>
                      <span className='thPImg'><img src={sample01} /></span>
                      <div>
                        <strong>자연주의 명품 펫푸드 알모네이쳐 자연주의 명품 펫푸드 알모네이쳐</strong>
                        <p>옵션옵션옵션옵션</p>
                        <span>29,000원<em>1개</em></span>
                      </div>
                    </dd>
                    <dd className='thumPrduct'>
                      <span className='thPImg'><img src={sample01} /></span>
                      <div>
                        <strong>자연주의 명품 펫푸드 알모네이쳐 자연주의 명품 펫푸드 알모네이쳐</strong>
                        <p>옵션옵션옵션옵션</p>
                        <span>29,000원<em>1개</em></span>
                      </div>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      트리밍버드
                      <em>무료배송</em>
                    </dt>
                    <dd className='thumPrduct'>
                      <span className='thPImg'><img src={sample01} /></span>
                      <div>
                        <strong>자연주의 명품 펫푸드 알모네이쳐 자연주의 명품 펫푸드 알모네이쳐</strong>
                        <p>옵션옵션옵션옵션</p>
                        <span>29,000원<em>1개</em></span>
                      </div>
                    </dd>
                  </dl>
                </div>
                <h4>포인트</h4>
                <div className='point'>
                  <input type='text' placeholder='0' disabled />
                  <BaseButton type="button" className='bIW' label={'전액사용'} disabled />
                  <p>사용 가능 포인트 0P</p>
                </div>
                <h4>결제 수단</h4>
                <div className='payKind'>
                  <span className='radioSet'>
                      <input type='radio' name='radio00' id='radio007' defaultChecked onChange={() => setPKindvalue(!pKindvalue)} />
                      <label htmlFor='radio007'>직접입력</label>
                  </span>
                  <div style={{ display: `${pKindvalue ? 'none' : 'block'}` }}>
                    <BaseButton type="button" className="btnL" label={'일반 카드'} />
                  </div>
                  <span className='radioSet'>
                      <input type='radio' name='radio00' id='radio008' onChange={() => setPKindvalue(!pKindvalue)} />
                      <label htmlFor='radio008'>COD 결제</label>
                  </span>
                  <div className='tws codCase' style={{ display: `${pKindvalue ? 'flex' : 'none'}` }}>
                    <dl>
                      <dt>Name</dt>
                      <dd><BaseInput type="text" placeholder="User name" value='홍길동' /></dd>
                    </dl>
                    <dl>
                      <dt>Address Line</dt>
                      <dd><BaseInput type="text" placeholder="User Address" value='서울특별시 영등포구 선유로3길 7-3 (문래동5가, 유니온빌딩별관)' /></dd>
                    </dl>
                    <dl>
                      <dt>Phone Number</dt>
                      <dd className='phoneSet'>
                        <BaseSelect items={phoneItems} placeholder={'010'} onChange={(e) => console.log(e)} />
                        <BaseInput type="text" placeholder="" value='1234-5678' />
                      </dd>
                    </dl>
                    <dl>
                      <dt>E-mail</dt>
                      <dd className='emailSet'>
                        <BaseInput type="text" placeholder="User name" value='kd.hong' />
                        <em>@</em>
                        <BaseSelect items={emailItems} placeholder={'gmail.com'} onChange={(e) => console.log(e)} />
                      </dd>
                    </dl>
                  </div>
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
          </form>
        </div>
      </section>
    </>
  );
};

export default PaymentPage;
