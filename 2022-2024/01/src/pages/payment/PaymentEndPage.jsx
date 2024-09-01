import React, { useEffect, useRef, useState } from 'react';
import { BaseButton, BaseInput, BaseSelect } from '@components/common';
import sample01 from '@assets/images/sample/sample2.png';
import { Link } from 'react-router-dom';

const PaymentEndPage = ({onLayoutTitleChange}) => {
    useEffect(() => {
        onLayoutTitleChange('주문/결제');
    });
  return (
    <>
      <section>
        <div className='paymentEndWrap'>
            <div className='resultTit'>
                <h3>주문이 완료되었습니다</h3>
                <p>주문번호는 <strong>123456789</strong> 입니다.</p>
            </div>
            {/* <div className='resultTit fail'>
                <h3>주문이 실패되었습니다</h3>
                <p>사유 : 결제실패</p>
            </div> */}
            <article>
                <dl>
                    <dt>주문 정보</dt>
                    <dd>
                        <ul>
                            <li>
                                <span>주문자</span>
                                <em>홍길동</em>
                            </li>
                            <li>
                                <span>연락처</span>
                                <em>010-1234-5678</em>
                            </li>
                            <li>
                                <span>이메일</span>
                                <em>kd.hong@gmail.com</em>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <dl>
                    <dt>배송 정보</dt>
                    <dd>
                        <ul>
                            <li>
                                <span>받는 사람</span>
                                <em>장금이</em>
                            </li>
                            <li>
                                <span>연락처</span>
                                <em>010-1234-5678</em>
                            </li>
                            <li>
                                <span>주소</span>
                                <em>(12345) 서울특별시 영등포구 선유로 3길 9 </em>
                            </li>
                        </ul>                
                    </dd>
                </dl>
                <dl className='orderList'>
                    <dt>주문 상품</dt>
                    <dd>
                        <div className='thumPrduct'>
                            <span className='thPImg'><img src={sample01} /></span>
                            <div>
                                <strong>자연주의 명품 펫푸드 알모네이쳐</strong>
                                <p>옵션옵션옵션옵션</p>
                                <span>29,000원<em>1개</em></span>
                            </div>
                        </div>
                        <div className='thumPrduct'>
                            <span className='thPImg'><img src={sample01} /></span>
                            <div>
                                <strong>자연주의 명품 펫푸드 알모네이쳐</strong>
                                <p>옵션옵션옵션옵션</p>
                                <span>29,000원<em>1개</em></span>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <span>배송비</span>
                                <em>10,000원(일반택배)</em>
                            </li>
                            <li>
                                <span>판매자</span>
                                <em>트리밍버드</em>
                            </li>
                        </ul>   
                    </dd>
                    <dd>
                        <div className='thumPrduct'>
                            <span className='thPImg'><img src={sample01} /></span>
                            <div>
                                <strong>자연주의 명품 펫푸드 알모네이쳐 자연주의 명품 펫푸드 알모네이쳐</strong>
                                <p>옵션옵션옵션옵션</p>
                                <span>29,000원<em>1개</em></span>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <span>배송비</span>
                                <em>10,000원(일반택배)</em>
                            </li>
                            <li>
                                <span>판매자</span>
                                <em>트리밍버드</em>
                            </li>
                        </ul>   
                    </dd>
                </dl>
                <dl>
                    <dt>결제 정보</dt>
                    <dd className='paySet'>
                        <div>
                            <ul>
                                <li className='tt'>
                                    <span>주문금액</span>
                                    <strong>39,000원</strong>
                                </li>
                                <li>
                                    <span>상품금액</span>
                                    <em>29,000원</em>
                                </li>
                                <li>
                                    <span>배송비</span>
                                    <em>10,000원</em>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='tt'>
                                    <span>할인금액</span>
                                    <strong>9,000원</strong>
                                </li>
                                <li>
                                    <span>상품할인금액</span>
                                    <em>9,000원</em>
                                </li>
                                <li>
                                    <span>포인트</span>
                                    <em>0원</em>
                                </li>
                            </ul>
                        </div>
                        <div className='total'>
                            <ul>
                                <li className='tt'>
                                    <span>총 결제 금액</span>
                                    <strong>30,000원</strong>
                                </li>
                                <li>
                                    <span>결제방법</span>
                                    <em>COD 결제</em>
                                </li>
                                <li>
                                    <span>결제일시</span>
                                    <em>2024.04.23 14:00</em>
                                </li>
                            </ul>
                        </div>
                    </dd>
                    <dd>
                        <ul className='codCase'>
                            <li>
                                <span>Name</span>
                                장금이
                            </li>
                            <li>
                                <span>Address Line</span>
                                010-1234-5678
                            </li>
                            <li>
                                <span>Phone Number</span>
                                (12345) 서울특별시 영등포구 선유로 3길 9
                            </li>
                            <li>
                                <span>E-mail</span>
                                kd.hong@gmail.com
                            </li>
                        </ul>  
                    </dd>
                </dl>
                <div className='btnArea'>
                    <Link className='btnB' to='/'>메인으로 이동</Link>
                </div>
            </article>
        </div>
      </section>
    </>
  );
};

export default PaymentEndPage;
