import React from "react";

const ReserveCancel = ({onClose}) => {

    return (
        <div className="fullPop reserveCancelPop" id="reserveCancelPop" style={{display:'block'}}>
            <button className="btnPClose" onClick={() => onClose()}>닫기</button>
            <h1 className="pt">예약 상세</h1>
            <div className="pBack">
                <article className="lbox">
                    <div className="boxTit"><h3>취소 상세</h3></div>
                    <div className="boxDt">
                        <dl>
                            <dt>취소 유형 <sup>*</sup></dt>
                            <dd>
                                <span className="radioSet">
                                    <input type="radio" name="radio1"/>
                                    <label htmlFor="">금액 취소</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" name="radio1"/>
                                    <label htmlFor="">예약 취소</label>
                                </span>
                            </dd>
                        </dl>
                        <dl className="mt24">
                            <dt>취소 금액</dt>
                            <dd><input type="text" defaultValue="" placeholder="취소 금액 입력(최대 234,000￦)" /></dd>
                        </dl>
                        <div className="mt24 tR">
                            <button className="btnB sm">취소</button>
                        </div>
                    </div>
                </article>
                {/**/}
                <article className="lbox listCase">
                    <div className="boxTit"><h3>취소 내역</h3></div>
                    <div className="boxDt">
                        <div className="tls">
                            <table>
                                <colgroup>
                                    <col width="22%" />
                                    <col width="18%" />
                                    <col width="21%" />
                                    <col width="21%" />
                                    <col width="18%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>일시</th>
                                        <th>취소 타입</th>
                                        <th>취소 유형</th>
                                        <th>취소 금액</th>
                                        <th>취소자</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>24.01.02 13:00</td>
                                        <td>직원 취소</td>
                                        <td>금액 취소</td>
                                        <td>234,000 ￦</td>
                                        <td>이길동</td>
                                    </tr>    
                                    <tr>
                                        <td>24.01.02 13:00</td>
                                        <td>고객 취소</td>
                                        <td>예약 취소</td>
                                        <td>234,000 ￦</td>
                                        <td>이길동</td>
                                    </tr>    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </article>
            </div>
            <div className="pBtn">
                <span className="fr">
                    <button className="btnL sm">닫기</button>
                </span>
            </div>
        </div>
    )
}

export default ReserveCancel;