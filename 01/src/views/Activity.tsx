import { useUserState } from "UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import styled from "styled-components";

function Activity() {
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
                        <legend>활동 목록을 정렬하는 영역으로 기본 선택은 동행 활동 전체 입니다. 검색 선택 없이 목록으로 바로 이동하시려면 다음버튼을 눌러주세요. <button>목록으로 바로가기</button></legend>
                        <div className="line1">
                            <span className="radioSet">
                                <input type="radio" name="radio2"/>
                                <label htmlFor="">동행</label>
                            </span>
                            <span className="radioSet">
                                <input type="radio" name="radio2"/>
                                <label htmlFor="">교육</label>
                            </span>
                        </div>
                        <div className="line2">
                            <span className="radioSet">
                                <input type="radio" name="radio3"/>
                                <label htmlFor="">전체</label>
                            </span>
                            <span className="radioSet">
                                <input type="radio" name="radio3"/>
                                <label htmlFor="">진행중</label>
                            </span>
                            <span className="radioSet">
                                <input type="radio" name="radio3"/>
                                <label htmlFor="">모집마감</label>
                            </span>
                            <span className="radioSet">
                                <input type="radio" name="radio3"/>
                                <label htmlFor="">마감</label>
                            </span>
                        </div>
                        {/* 이용자 장애정도 정보 있는 경우 */}
                        <button className="userKindMore">시각/심함 (수정하기)</button>
                        {/* 이용자 장애정도 정보 없거나, 수정일 경우 */}
                        <div className="sortingDetail">
                            <dl>
                                <dt>장애여부</dt>
                                <dd className="col6">
                                    <span className="radioSet">
                                        <input type="radio" name="radio2"/>
                                        <label htmlFor="">시각</label>
                                    </span>
                                    <span className="radioSet">
                                        <input type="radio" name="radio2"/>
                                        <label htmlFor="">청각</label>
                                    </span>
                                    <span className="radioSet">
                                        <input type="radio" name="radio2"/>
                                        <label htmlFor="">지체</label>
                                    </span>
                                    <span className="radioSet">
                                        <input type="radio" name="radio2"/>
                                        <label htmlFor="">감각</label>
                                    </span>
                                    <span className="radioSet">
                                        <input type="radio" name="radio2"/>
                                        <label htmlFor="">정신</label>
                                    </span>
                                    <span className="radioSet">
                                        <input type="radio" name="radio2"/>
                                        <label htmlFor="">복합</label>
                                    </span>
                                </dd>
                            </dl>
                            <dl>
                                <dt>장애정도</dt>
                                <dd>
                                    <span className="radioSet">
                                        <input type="radio" name="radio3"/>
                                        <label htmlFor="">심함</label>
                                    </span>
                                    <span className="radioSet">
                                        <input type="radio" name="radio3"/>
                                        <label htmlFor="">심하지 않음</label>
                                    </span>
                                </dd>
                            </dl>
                            <button className="sortingEtc"> {/* className='sortingEtc open' 열기로 되어 있는 경우 */}
                                접기 {/* --> text 교체 : 열기 */}
                            </button>
                        </div>
                        {/* end 이용자 장애정도 정보 없거나, 수정일 경우 */}
                    </fieldset>
                    <ul className="list">
                        {/* Loop */}
                        <li title="8월 서울숲 피크닉 활동상세 화면으로 이동">
                            <span className="img"><span><img src={`${process.env.PUBLIC_URL}/assets/images/ic_logo_pink.svg`}  alt="활동이미지명" /></span></span>
                            <div>
                                <strong>8월 서울숲 피크닉</strong>
                                <span className="date">
                                    2023년 8월 20일 13시부터<br/>2023년 8월 20일 15시까지<br/>(2시간)
                                </span>
                                <span className="price">55,000원</span>
                            </div>
                            <em className="icS">진행중</em>
                        </li>
                        {/* end Loop */}
                        <li title="원데이성악클래스 활동상세 화면으로 이동">
                            <span className="img"><span><img src={`${process.env.PUBLIC_URL}/assets/images/ic_logo_pink.svg`}  alt="활동이미지명" /></span></span>
                            <div>
                                <strong>원데이성악클래스</strong>
                                <span className="date">
                                    2023년 8월 20일 13시부터<br/>2023년 8월 20일 15시까지<br/>(2시간)
                                </span>
                                <span className="price">무료</span>
                            </div>
                            <em className="icS close">마감</em>
                        </li>
                    </ul>
                     <span className="addArea">
                        <span className="userKind">
                            <span className="radioSet">
                                <input type="radio" name="radio1"/>
                                <label htmlFor="">이용자</label>
                            </span>
                            <span className="radioSet">
                                <input type="radio" name="radio1"/>
                                <label htmlFor="">제공자</label>
                            </span>
                        </span>
                        <a href="" className="goRecord">활동등록 하러가기</a>
                    </span>
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

export default Activity;
