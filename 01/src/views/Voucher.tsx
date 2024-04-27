import { useUserState } from "UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import styled from "styled-components";

function Voucher() {
    const navigate = useNavigate();

    /**
     * TODO: 로그인 user정보
     * context or session or Redux(Recoil)
     */
    const { user } = useUserState();
    // console.log("context User : ", user);

    //임시
    let isLogin = true
    return (
        <div id="container">
            <section>
                <div className="contents">
                    <nav>
                        <div className="voucherlistKind">
                            <a href="" className="on">바우처 정보 <em>현재 목록</em></a>  {/* 선택된 페이지 일 경우 em 추가 */}
                            <a href="voucherHistory">바우처 사용내역</a> 
                        </div>
                    </nav>
                    <div className="voucherList">
                        <h2>바우처 정보</h2>
                        <span className="listNum">총 2건</span>
                        <ul className="myInfoList">
                            <li>
                                <strong>성동구지원사업</strong>
                                <i>지원금액 : </i>100,000원 <br/><i>사용/잔여금액 : </i>50,000원 / 50,000원
                                <em>2023년 10월 10일 9시 12분 21초</em>
                            </li>
                            <li>
                                <strong>성동구지원사업</strong>
                                <i>지원금액 : </i>100,000원 <br/><i>사용/잔여금액 : </i>50,000원 / 50,000원
                                <em>2023년 10월 10일 9시 12분 21초</em>
                            </li>
                        </ul>
                    </div>
                    <div className="voucherList">
                        <h2>바우처 사용내역</h2>
                        <span className="listNum">총 2건</span>
                        <ul className="myInfoList">
                            <li>
                                <strong>&#91;동행&#93; 성악원데이클래스</strong>
                                <i>사용금액 : </i>22,000원 | 온앤오프라인뮤직 <br/><i>바우처명 : </i>성동구지원사업
                                <em>2023년 10월 10일 9시 12분 21초</em>
                            </li>
                            <li>
                                <strong>&#91;동행&#93; 원데이필라테스</strong>
                                <i>사용금액 : </i>22,000원 | 온앤오프라인뮤직 <br/><i>바우처명 : </i>성동구지원사업
                                <em>2023년 10월 10일 9시 12분 21초</em>
                            </li>
                        </ul>
                    </div>
                    <button className="btnM listMore">더보기</button>
                </div>
                <div className="copy">
                    <span>유니마인드랩 주식회사 · 대표이사 : 최우주 · 사업자등록번호 : 461-81-02935</span>
                    <span>주소 : 서울시 성동구 광나루로 286 8층 (소셜캠퍼스온 서울1)</span>
                    <span>전화 : 070-7014-0304 · 이메일 : uni@unimindlab.com</span>
                    <span>ⓒ 2022 UNIMIND LAB Inc.</span>
                </div>
            </section>
        </div>
    );
}

export default Voucher;
