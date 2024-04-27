import { useUserState } from "UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import styled from "styled-components";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

function ActivityView() {
    const navigate = useNavigate();
    SwiperCore.use([Navigation, Pagination]);
    const swiperArr: any = [{ id: 1, image: `${process.env.PUBLIC_URL}/assets/images/main_banner.png` }, { id: 2, image: `${process.env.PUBLIC_URL}/assets/images/main_banner.png` }]

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
                    <div className="viewArea">
                        <div className="infoArea">
                            <strong className="applyPrice">5,000원</strong>
                            <h2>제공자로 신청하기</h2>
                            <dl><dt>이름</dt><dd>최우주</dd></dl>
                            <dl><dt>전화번호</dt><dd>010-9999-9999</dd></dl>
                            <dl><dt>장애유형</dt><dd>시각</dd></dl>
                            <dl><dt>장애정도</dt><dd>심함</dd></dl>
                            <dl className="line">
                                <dt>요청사항</dt>
                                <dd><textarea placeholder="요청사항을 입력하세요."></textarea></dd>
                            </dl>
                            <div className="applyAgree">
                                <div className="agreeArea">
                                    약관내용
                                </div>
                                <span className="checkSet">
                                    <input type="checkbox" />
                                    <label htmlFor="">이용약관에 동의</label>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="viewBtn">
                        <a href="" className="btnM">제공자로 신청하기</a>

                        <button className="btnM">신청하기</button>
                        <button className="btnG">취소하기</button>
                        <span>
                            <a href="" className="btnM">제공자로 신청하기</a>
                            <a href="" className="btnM">이용자로 신청하기</a>
                        </span>
                        <span>
                            <button className="btnM">신청하기(바우처)</button>
                            <button className="btnM">신청하기(결제)</button>
                        </span>
                        <button className="btnM">바우처 사용하기</button>
                        <button className="btnM">결제하기</button>
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

const StyleSwiper = styled(Swiper)`
  box-sizing: border-box;
  width: 100%;
  .slide-img {
    width: 100%;
    height: auto
  }
  .swiper-button-prev {
    --swiper-navigation-color: #FFFFFF;
    --swiper-navigation-size: 15px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #E24B97;
    padding: 2px 2px 0 0;
    top: 48%
  }

  .swiper-button-next {
    --swiper-navigation-color: #FFFFFF;
    --swiper-navigation-size: 15px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #E24B97;
    padding: 2px 0 0 2px;
    top: 48%
  }
`

export default ActivityView;
