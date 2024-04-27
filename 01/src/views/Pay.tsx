import { useUserState } from "UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import styled from "styled-components";

function Pay() {
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
                    <fieldset className="listSorting">
                        <legend>날짜검색 <button>검색없이 목록 바로가기</button></legend>
                        <div className="dateArea">
                            <input type="text" />
                            <input type="text" />
                        </div>
                        <div className="dateButton">
                            <span className="radioSet">
                                <input type="radio" name="radio3"/>
                                <label htmlFor="">오늘</label>
                            </span>
                            <span className="radioSet">
                                <input type="radio" name="radio3"/>
                                <label htmlFor="">어제</label>
                            </span>
                            <span className="radioSet">
                                <input type="radio" name="radio3"/>
                                <label htmlFor="">1주</label>
                            </span>
                            <span className="radioSet">
                                <input type="radio" name="radio3"/>
                                <label htmlFor="">2주</label>
                            </span>
                            <span className="radioSet">
                                <input type="radio" name="radio3"/>
                                <label htmlFor="">이번달</label>
                            </span>
                            <span className="radioSet">
                                <input type="radio" name="radio3"/>
                                <label htmlFor="">1달</label>
                            </span>
                            <span className="radioSet">
                                <input type="radio" name="radio3"/>
                                <label htmlFor="">3달</label>
                            </span>
                            <span className="radioSet">
                                <input type="radio" name="radio3"/>
                                <label htmlFor="">6달</label>
                            </span>
                            <span className="radioSet">
                                <input type="radio" name="radio3"/>
                                <label htmlFor="">1년</label>
                            </span>
                        </div>
                    </fieldset>
                    <div className="payList">
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

export default Pay;
