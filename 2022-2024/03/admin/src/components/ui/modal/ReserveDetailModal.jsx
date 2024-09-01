import React, {useState} from 'react';
import ReserveCancelModal from './ReserveCancelModal';
import {ModalFullPresent} from '@components/common';

const ReserveDetail = ({onClose}) => {
    const [isModal3, setIsModal3] = useState(false);

    return (
        <>
        <div className="fullPop reserveDetailPop" id="reserveDetailPop" style={{display:'block'}}>
            <button className="btnPClose" onClick={() => onClose()}>닫기</button>
            <h1 className="pt">예약 상세</h1>
            <div className="pBack">
                <fieldset>
                    <label>예약번호</label>
                    <span className="ipSearch">
                        <input type="text" defaultValue={32342234} placeholder="예약/취소 번호 검색" />
                        <button>검색</button>
                    </span>
                    <label>고객 이름</label>
                    <span className="ipSearch">
                        <input type="text" defaultValue="홍길동" placeholder="이름 검색" />
                        <button>검색</button>
                    </span>
                    <label>상품 및 채널</label>
                    <div className="multiSSet">
                        <em className="mValue on">멍카스 패키지 + CMS</em>
                        <div className="selectArea">
                            <div className="item">
                                <span className="checkSet">
                                    <input type="checkbox" id="one"/>
                                    <label htmlFor="one">First checkbox</label>
                                </span>
                                <span className="checkSet">
                                    <input type="checkbox" id="two"/>
                                    <label htmlFor="two">Second checkbox</label>
                                </span>
                                <span className="checkSet">
                                    <input type="checkbox" id="three"/>
                                    <label htmlFor="three">Third checkbox</label>
                                </span>
                            </div>
                            <div className="bLine">
                                <button className="btnL">취소</button>
                                <button className="btnB">적용</button>
                            </div>
                        </div>
                    </div>
                    <button className="btnW sm">재검색</button>
                </fieldset>
                {/* -- */}
                <div className="mTab">
                    <span>
                        <button className="on">투숙정보</button>
                        <button>정산</button>
                        <button>히스토리</button>
                    </span>
                    <button className="bRC" onClick={() => setIsModal3(true)}>예약 취소</button>
                </div>
                {/* 투숙정보 Tab */}
                <div>
                    <div className="noResult" style={{display: 'none'}}><div>해당 검색어로 된 검색 결과가 없습니다.</div></div>
                    <div className="stayInfo scroll">
                        <div className="grid">
                            <div className="left">
                                <article className="lbox">
                                    <div className="boxTit"><h3>기본 정보</h3></div>
                                    <div className="boxDt">
                                        <div className="grid">
                                            <dl>
                                                <dt>고객이름 <sup>*</sup></dt>
                                                <dd><input type="text" defaultValue="홍길동" placeholder="0" disabled /></dd>
                                            </dl>
                                            <dl>
                                                <dt>휴대폰 번호 <sup>*</sup></dt>
                                                <dd><input type="text" defaultValue="010-8666-5444" placeholder="0" /></dd>
                                            </dl>
                                        </div>
                                        <div className="grid mt24">
                                            <dl>
                                                <dt>성별</dt>
                                                <dd>
                                                    <div className="multiSSet">
                                                        <em className="mValue on">남자</em>
                                                        <div className="selectArea">
                                                            <div className="item">
                                                                <span className="radioSet">
                                                                    <input type="radio" id=""/>
                                                                    <label htmlFor="">First checkbox</label>
                                                                </span>
                                                                <span className="radioSet">
                                                                    <input type="radio" id=""/>
                                                                    <label htmlFor="">First checkbox</label>
                                                                </span>
                                                            </div>
                                                            <div className="bLine">
                                                                <button className="btnL">취소</button>
                                                                <button className="btnB">적용</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>이메일</dt>
                                                <dd><input type="text" defaultValue="-" placeholder="0" /></dd>
                                            </dl>
                                        </div>
                                        <div className="grid mt24">
                                            <dl>
                                                <dt>회원번호 <sup>*</sup></dt>
                                                <dd><input type="text" defaultValue="5465448" placeholder="0" /></dd>
                                            </dl>
                                            <dl>
                                                <dt>회원 등급</dt>
                                                <dd>
                                                    <div className="multiSSet">
                                                        <em className="mValue on">GREEN</em>
                                                        <div className="selectArea">
                                                            <div className="item">
                                                                <span className="radioSet">
                                                                    <input type="radio" id=""/>
                                                                    <label htmlFor="">First checkbox</label>
                                                                </span>
                                                                <span className="radioSet">
                                                                    <input type="radio" id=""/>
                                                                    <label htmlFor="">First checkbox</label>
                                                                </span>
                                                                <span className="radioSet">
                                                                    <input type="radio" id=""/>
                                                                    <label htmlFor="">First checkbox</label>
                                                                </span>
                                                            </div>
                                                            <div className="bLine">
                                                                <button className="btnL">취소</button>
                                                                <button className="btnB">적용</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </article>
                                {/**/}
                                <article className="lbox">
                                    <div className="boxTit"><h3>업셀링</h3></div>
                                    <div className="boxDt">
                                        <div className="grid">
                                            <dl>
                                                <dt>아이템</dt>
                                                <dd>
                                                    <div className="multiSSet">
                                                        <em className="mValue on">조식 대인(2), 조식 소인(1)</em>
                                                        <div className="selectArea">
                                                            <div className="item">
                                                                <span className="radioSet">
                                                                    <input type="radio" id=""/>
                                                                    <label htmlFor="">First checkbox</label>
                                                                </span>
                                                            </div>
                                                            <div className="bLine">
                                                                <button className="btnL">취소</button>
                                                                <button className="btnB">적용</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>옵션</dt>
                                                <dd>
                                                    <div className="multiSSet">
                                                        <em className="mValue">고층</em>
                                                        <div className="selectArea">
                                                            <div className="item">
                                                                <span className="radioSet">
                                                                    <input type="radio" id=""/>
                                                                    <label htmlFor="">First checkbox</label>
                                                                </span>
                                                            </div>
                                                            <div className="bLine">
                                                                <button className="btnL">취소</button>
                                                                <button className="btnB">적용</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="grid mt24 couponSet">
                                            <dl>
                                                <dt>쿠폰</dt>
                                                <dd>
                                                    <div className="multiSSet">
                                                        <em className="mValue disabled">보유 쿠폰 없음</em>
                                                        {/* <div className="selectArea">
                                                            <div className="item">
                                                                <span className="radioSet">
                                                                    <input type="radio" id=""/>
                                                                    <label htmlFor="">First checkbox</label>
                                                                </span>
                                                            </div>
                                                            <div className="bLine">
                                                                <button className="btnL">취소</button>
                                                                <button className="btnB">적용</button>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </dd>
                                                <dd className="mt8"><input type="text" defaultValue="-" disabled /></dd>
                                            </dl>
                                            <div></div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div>
                                <article className="lbox">
                                    <div className="boxTit">
                                        <h3>예약 상세</h3>
                                        <span className="rstsSet">
                                            <label>상태</label>
                                            <em className="rstsNon">NON</em>
                                            {/* <em className="rstsCheck">CHECKED IN</em>
                                            <em className="rstsEnd">Noshow</em>
                                            <em className="rstsEnd">Cancel</em>
                                            <em className="rstsCheck">6PM</em>
                                            <em className="rstsCheck">WALKIN</em>
                                            <em className="rstsEnd">CHECK OUT</em> */}
                                        </span>
                                    </div>
                                    <div className="boxDt">
                                        <div className="grid case3">
                                            <dl>
                                                <dt>도착 <sup>*</sup></dt>
                                                <dd>
                                                    <input type="text" className="cal" placeholder="2024.01.01" id="" />
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>출발 <sup>*</sup></dt>
                                                <dd>
                                                    <input type="text" className="cal" placeholder="2024.01.01" id="" />
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>박</dt>
                                                <dd><input type="text" placeholder="0" disabled /></dd>
                                            </dl>
                                        </div>
                                        <div className="grid case3 mt24">
                                            <dl>
                                                <dt>어른 <sup>*</sup></dt>
                                                <dd><input type="text" placeholder="0" /></dd>
                                            </dl>
                                            <dl>
                                                <dt>어린이</dt>
                                                <dd><input type="text" placeholder="0" /></dd>
                                            </dl>
                                            <div></div>
                                        </div>
                                        <div className="grid mt24">
                                            <dl>
                                                <dt>상품 및 경로</dt>
                                                <dd>
                                                    <div className="multiSSet">
                                                        <em className="mValue on">선택완료</em>
                                                        <div className="selectArea">
                                                            <div className="item">
                                                                <span className="radioSet">
                                                                    <input type="radio" id=""/>
                                                                    <label htmlFor="">First checkbox</label>
                                                                </span>
                                                            </div>
                                                            <div className="bLine">
                                                                <button className="btnL">취소</button>
                                                                <button className="btnB">적용</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>룸타입</dt>
                                                <dd>
                                                    <div className="multiSSet">
                                                        <em className="mValue on">ATE</em>
                                                        <div className="selectArea">
                                                            <div className="item">
                                                                <span className="radioSet">
                                                                    <input type="radio" id=""/>
                                                                    <label htmlFor="">First checkbox</label>
                                                                </span>
                                                            </div>
                                                            <div className="bLine">
                                                                <button className="btnL">취소</button>
                                                                <button className="btnB">적용</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="grid case3 mt24">
                                            <dl>
                                                <dt>뷰타입</dt>
                                                <dd>
                                                    <div className="multiSSet">
                                                        <em className="mValue on">OCEAN VIEW</em>
                                                        <div className="selectArea">
                                                            <div className="item">
                                                                <span className="radioSet">
                                                                    <input type="radio" id=""/>
                                                                    <label htmlFor="">First checkbox</label>
                                                                </span>
                                                            </div>
                                                            <div className="bLine">
                                                                <button className="btnL">취소</button>
                                                                <button className="btnB">적용</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>베드타입</dt>
                                                <dd>
                                                    <div className="multiSSet">
                                                        <em className="mValue on">TWIN</em>
                                                        <div className="selectArea">
                                                            <div className="item">
                                                                <span className="radioSet">
                                                                    <input type="radio" id=""/>
                                                                    <label htmlFor="">First checkbox</label>
                                                                </span>
                                                            </div>
                                                            <div className="bLine">
                                                                <button className="btnL">취소</button>
                                                                <button className="btnB">적용</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>마켓코드</dt>
                                                <dd>
                                                    <div className="multiSSet">
                                                        <em className="mValue">선택해주세요</em>
                                                        <div className="selectArea">
                                                            <div className="item">
                                                                <span className="radioSet">
                                                                    <input type="radio" id=""/>
                                                                    <label htmlFor="">First checkbox</label>
                                                                </span>
                                                            </div>
                                                            <div className="bLine">
                                                                <button className="btnL">취소</button>
                                                                <button className="btnB">적용</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="grid case3 mt24">
                                            <dl>
                                                <dt>레이트 코드</dt>
                                                <dd>
                                                    <div className="multiSSet">
                                                        <em className="mValue on">EIRWW</em>
                                                        <div className="selectArea">
                                                            <div className="item">
                                                                <span className="radioSet">
                                                                    <input type="radio" id=""/>
                                                                    <label htmlFor="">First checkbox</label>
                                                                </span>
                                                            </div>
                                                            <div className="bLine">
                                                                <button className="btnL">취소</button>
                                                                <button className="btnB">적용</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>레이트 요금</dt>
                                                <dd><input type="text" defaultValue="343,000" /></dd>
                                            </dl>
                                            <dl>
                                                <dt>소스 코드</dt>
                                                <dd>
                                                    <div className="multiSSet">
                                                        <em className="mValue">선택해주세요</em>
                                                        <div className="selectArea">
                                                            <div className="item">
                                                                <span className="radioSet">
                                                                    <input type="radio" id=""/>
                                                                    <label htmlFor="">First checkbox</label>
                                                                </span>
                                                            </div>
                                                            <div className="bLine">
                                                                <button className="btnL">취소</button>
                                                                <button className="btnB">적용</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <dl className="mt24">
                                            <dt>선수금</dt>
                                            <dd><input type="text" placeholder="Deposit에 따른 금액 입력"/></dd>
                                        </dl>
                                        <dl className="mt24">
                                            <dt>메모</dt>
                                            <dd><input type="text" defaultValue="고객은 왕입니다. 이분은 특별히 더 왕처럼 대해주세요." placeholder="" /></dd>
                                        </dl>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end 투숙정보 */}
                {/* 정산 Tab */}
                <div style={{display: 'none'}}>
                    <article className="lbox listCase">
                        <div className="boxTit"><h3>청구 내역</h3></div>
                        <div className="boxDt">
                            <div className="tls">
                                <table>
                                    <colgroup>
                                        <col width="20%" />
                                        <col width="20%" />
                                        <col width="20%" />
                                        <col width="20%" />
                                        <col width="20%" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>날짜</th>
                                            <th>구분</th>
                                            <th>Net</th>
                                            <th>Vat</th>
                                            <th>합계</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>24.01.12</td>
                                            <td>룸</td>
                                            <td>234,000 ￦</td>
                                            <td>234,000 ￦</td>
                                            <td>234,000 ￦</td>
                                        </tr>    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </article>
                </div>
                {/* end 정산 */}
                {/* 히스토리 Tab */}
                <div style={{display: 'none'}}>
                    <article className="lbox listCase">
                        <div className="boxTit"><h3>히스토리</h3></div>
                        <div className="boxDt">
                            <div className="tls">
                                <table>
                                    <colgroup>
                                        <col width="26%" />
                                        <col width="18%" />
                                        <col width="38%" />
                                        <col width="18%" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>상태</th>
                                            <th>담당자</th>
                                            <th>변경 내용</th>
                                            <th>날짜</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>생성</td>
                                            <td>룸, 홍길동</td>
                                            <td>예약 생성</td>
                                            <td>24.01.13 14:00</td>
                                        </tr> 
                                        <tr>
                                            <td>금액 취소</td>
                                            <td>룸, 홍길동</td>
                                            <td>금액 취소 456,000￦</td>
                                            <td>24.01.13 14:00</td>
                                        </tr>    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </article>
                </div>
                {/* end 히스토리 */}
            </div>
            <div className="pBtn">
                <span className="fr">
                    <button className="btnL sm">취소</button>
                    <button className="btnB sm">저장 후 닫기</button>
                </span>
            </div>
        </div>
        {isModal3 && 
            <ModalFullPresent >
                <ReserveCancelModal onClose={() => {setIsModal3(false)}}/>
            </ModalFullPresent>
        }
        </>
    )
}

export default ReserveDetail;