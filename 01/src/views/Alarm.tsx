import { useUserState } from "UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import styled from "styled-components";

function Alarm() {
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
                    <div className="alarmList">
                        <ul>
                            <li style={{display:'none'}}>
                                <strong>새로운 요청이 등록되었어요.</strong>
                                &#91;박이용&#93;님의 “야구장 같이 갑시다” <br/>5/18 오후7시 요청이 등록되었어요.
                                <em>2023년 10월 10일 9시 12분 21초</em>
                            </li>
                            <li style={{display:'none'}}>
                                <strong>승인이 완료되었어요.</strong>
                                &#91;박이용&#93;님의 “야구장 같이 갑시다” <br/>5/18 오후7시 요청이 등록되었어요.
                                <em>2023년 10월 10일 9시 12분 21초</em>
                            </li>
                            <li className="noneList">
                                <span>받은 알람이 없습니다.</span>
                            </li>
                        </ul>
                    </div>
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

export default Alarm;
