import React, { useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import { DatePicker } from '@components/common'

const ResereNotpay = () => {
  const {dpMin, dpMax} = DatePicker();

  return (
    <>
        <section className="pagingCase">
            <div className="subTit">
                <div><em>예약</em><span>예약</span><span>미수금 내역</span></div>
                <h2>미수금 내역</h2>
            </div>
            {/* -- */}
            <fieldset className="topForm">
                <div className="left">
                    <span className="ipSearch">
                        <input type="text" placeholder="고객명, 예약번호, 회원번호 검색" />
                        <button>검색</button>
                    </span>
                    <span className="short">
                        <input type="text" className="calA" placeholder="체크아웃 날짜" id="datepicker2" onClick={()=>dpMax.show()} />
                    </span>
                    <button className="btnW sm">필터 초기화</button>
                </div>
                <button className="bExc">엑셀 다운로드</button>
            </fieldset>
            {/* -- */}
            <div className="content">
                <article className="lbox listCase">
                    <div className="boxTit">
                        <h3>예약 목록</h3>
                        <span className="right">
                            <button className="btnW ss" disabled>선택삭제</button>
                            <button className="bAdd">추가</button>
                        </span>
                    </div>
                    <div className="boxDt">
                        <div className="tls">
                            <table>
                                <colgroup>
                                    <col width="7%" />
                                    <col width="8%" />
                                    <col width="4%" />
                                    <col width="10%" />
                                    <col width="10%" />
                                    <col width="6%" />
                                    <col width="8%" />
                                    <col width="7%" />
                                    <col width="8%" />
                                    <col width="8%" />
                                    <col width="8%" />
                                    <col width="9%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>상태</th>
                                        <th>상태 변경</th>
                                        <th>구분</th>
                                        <th>고객명</th>
                                        <th>예약번호</th>
                                        <th>회원번호</th>
                                        <th>룸번호</th>
                                        <th>체크아웃 날짜</th>
                                        <th>후불 금액</th>
                                        <th>미수금 금액</th>
                                        <th>미정산 금액</th>
                                        <th>미수금 결제 날짜</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="active">결제 완료</td>
                                        <td><button className="btnW ss" disabled>결제 완료</button></td>
                                        <td>룸</td>
                                        <td>홍길동</td>
                                        <td>2132133</td>
                                        <td>-</td>
                                        <td>1233</td>
                                        <td>24.01.02</td>
                                        <td>343,000 ￦</td>
                                        <td>343,000 ￦</td>
                                        <td>343,000 ￦</td>
                                        <td>24.01.02</td>
                                    </tr>               
                                    <tr>
                                        <td className="before">결제 전</td>
                                        <td><button className="btnW ss">결제 완료</button></td>
                                        <td>룸</td>
                                        <td>홍길동</td>
                                        <td>2132133</td>
                                        <td>-</td>
                                        <td>1233</td>
                                        <td>24.01.02</td>
                                        <td>343,000 ￦</td>
                                        <td>343,000 ￦</td>
                                        <td>343,000 ￦</td>
                                        <td>-</td>
                                    </tr>   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </article>
            </div>
            {/* -- */}
            <Pagenation />
            {/* -- */}
        </section>
    </>
    
	
  );
};

export default ResereNotpay;