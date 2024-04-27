import { useUserState } from "UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import styled from "styled-components";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

function Main() {
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
                <div className="mainContents">
                    <div className="banner">
                        <StyleSwiper
                            slidesPerView={1}
                            cssMode={false}
                            navigation={true}
                            modules={[Navigation]}
                        >
                            {swiperArr.map((el: any) => (
                                <SwiperSlide key={el.id}>
                                    <img className="slide-img" src={el.image} alt="배너이름" />
                                </SwiperSlide>
                            ))}
                        </StyleSwiper>
                    </div>

                    {/* {isLogin ? */}
                    {user ?
                        <>
                            <div className="loginAfter">
                                <h2>활동내역</h2>
                                <strong className="stat">진행중</strong>
                                <ul className="list">
                                    <li>
                                        <span className="img"><span><img src={`${process.env.PUBLIC_URL}/assets/images/ic_logo_pink.svg`}  alt="활동이미지명" /></span></span>
                                        <div>
                                            <strong>8월 서울숲 피크닉</strong>
                                            <span className="date">
                                                2023년 8월 20일 13시부터<br/>2023년 8월 20일 15시까지<br/>(2시간)
                                            </span>
                                            <span className="writer">등록자 : 유니마인드랩</span>
                                        </div>
                                        <em className="icS">진행중</em>
                                    </li>
                                </ul>
                                <strong className="stat">마감</strong>
                                <ul className="list">
                                    <li>
                                        <span className="img"><span><img src={`${process.env.PUBLIC_URL}/assets/images/ic_logo_pink.svg`}  alt="활동이미지명" /></span></span>
                                        <div>
                                            <strong>원데이성악클래스</strong>
                                            <span className="date">
                                                2023년 8월 20일 13시부터<br/>2023년 8월 20일 15시까지<br/>(2시간)
                                            </span>
                                            <span className="writer">등록자 : 유니마인드랩</span>
                                        </div>
                                        <em className="icS close">마감</em>
                                    </li>
                                </ul>
                                <span className="addArea"><a href="" className="goRecord">활동등록 하러가기</a></span>
                            </div>
                        </>
                        :
                        <>
                            <div className="loginBefore">
                                <h1>서로플랫폼</h1>
                                <h4>장애인과 비장애인을 연결하는 플랫폼입니다.</h4>
                            </div>
                            <div className="loginBefore-btnWrap">
                                <button className="btnM main" onClick={() => navigate(`/login`)}>로그인해주세요!</button>
                                <button className="btnM main" onClick={() => navigate(`/join`)}>회원가입이 필요합니다.</button>
                            </div>
                        </>
                    }
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

export default Main;
