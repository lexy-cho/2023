import React from "react";
import { Pagenation }  from '@components/common';

const FCLWriteSet = () => {
    
    return (
        <div className="contentBack">
            <div className="content">
                <article className="fcc_Summery">
                    <dl>
                        <dt>일일 판매 금액</dt><dd><strong>3,109,000</strong> ￦</dd>
                    </dl>
                    <dl>
                        <dt>일일 판매 수량</dt><dd><strong>25</strong> 건</dd>
                    </dl>
                    <dl>
                        <dt>주간 판매 금액</dt><dd><strong>24,000,000</strong> ￦</dd>
                    </dl>
                    <dl>
                        <dt>주간 판매 수량</dt><dd><strong>156</strong> 건</dd>
                    </dl>
                    <dl>
                        <dt>총 정산 금액</dt><dd><strong>4,000,000</strong> ￦</dd>
                    </dl>
                </article>
                <article className="lbox">
                    <div className="boxTit">
                        <h3>판매 내역</h3>
                        <span className="right">
                            <button className="btnW ss" disabled>선택삭제</button>
                        </span>
                    </div>
                    <div className="boxDt fccSalesList">
                        <div className="tls scroll">
                            <table>
                                <colgroup>
                                    <col width="72" />
                                    <col width="114" />
                                    <col width="200" />
                                    <col width="200" />
                                    <col width="100" />
                                    <col width="200" />
                                    <col width="150" />
                                    <col width="150" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>정산 상태</th>
                                        <th>예약번호</th>
                                        <th>상품 및 채널</th>
                                        <th>룸 타입</th>
                                        <th>투숙 날짜</th>
                                        <th>판매 금액</th>
                                        <th>정산 금액</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>4</td>
                                        <td className="active">정산 완료</td>
                                        <td>1564654</td>
                                        <td>ROOM ONLY + CMS</td>
                                        <td>TST</td>
                                        <td>23.03.21 - 23.05.31</td>
                                        <td>323,000</td>
                                        <td>234,000</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td className="before">정산 전</td>
                                        <td>1564654</td>
                                        <td>ROOM ONLY + CMS</td>
                                        <td>TST</td>
                                        <td>23.03.21 - 23.05.31</td>
                                        <td>323,000</td>
                                        <td>234,000</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td className="before">정산 전</td>
                                        <td>1564654</td>
                                        <td>ROOM ONLY + CMS</td>
                                        <td>TST</td>
                                        <td>23.03.21 - 23.05.31</td>
                                        <td>323,000</td>
                                        <td>234,000</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td className="before">정산 전</td>
                                        <td>1564654</td>
                                        <td>ROOM ONLY + CMS</td>
                                        <td>TST</td>
                                        <td>23.03.21 - 23.05.31</td>
                                        <td>323,000</td>
                                        <td>234,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Pagenation />
                    </div>
                </article>
            </div>
            <div className="bArea">
                <button className="btnL">취소하기</button>
                <button className="btnB">저장하기</button>
            </div>
        </div>
    )
}

export default FCLWriteSet;