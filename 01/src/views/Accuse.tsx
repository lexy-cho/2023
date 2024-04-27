import { useUserState } from "UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import styled from "styled-components";

function Accuse() {
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
                    <div className="accuseArea">
                        <div className="basicPop">
                            <div className="pBack">
                                <strong className="pTit">신고처리된 계정이에요.</strong>
                                <p>
                                    현재 신고처리 되어 관리자에 의해 신고처리된 계정이에요. 60일 후 자동으로 삭제처리 될 예정이오니 아래 메일로 연락주세요.
                                    <strong>uni@unimindlab.com</strong>
                                </p>
                            </div>
                            <div className="pBtn">
                                <button className="btnG">확인</button>
                            </div>
                        </div>
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

export default Accuse;
