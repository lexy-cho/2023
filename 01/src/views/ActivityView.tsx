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
                    <div className="activityPic">
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
                    <div className="aBasic">
                        <div className="back">
                            <strong>55,000원</strong>
                            <div>
                                <span>
                                    {/* <img src="" alt="프로필이미지" /> */}
                                </span>
                                <em>박이용 ★4.5</em>
                            </div>
                            <button className="mAccuse">신고하기</button>
                        </div>
                        <p>
                            &#91;시각/심하지않음&#93;<br/>
                            저는 안내견을 동반하고 있습니다.
                        </p>
                    </div>
                    <div className="aBasic">
                        <div className="back">
                            <strong>55,000원</strong>
                            <div>
                                <span>
                                    {/* <img src="" alt="프로필이미지" /> */}
                                </span>
                                <em>유니마인드랩</em>
                            </div>
                            <button className="mAccuse">신고하기</button>
                        </div>
                    </div>
                    <div className="viewArea">
                        <div className="infoArea icCase">
                            <dl className="ic1"><dt>활동번호</dt><dd>A122</dd></dl>
                            <dl className="ic2"><dt>시작일시</dt><dd>2023년 8월 23일 13시</dd></dl>
                            <dl className="ic3"><dt>시작지점</dt><dd>뚝섬역 8번출구</dd></dl>
                            <dl className="ic2"><dt>종료일시</dt><dd>2023년 8월 23일 13시</dd></dl>
                            <dl className="ic3"><dt>종료지점</dt><dd>뚝섬역 8번출구</dd></dl>
                            <dl className="ic4 line">
                                <dt>상세정보</dt>
                                <dd>뚝섬역 8번출구역에서 만납니다. 서울 앵무새카페를 방문한 후 서울숲으로 이동합니다.</dd>
                            </dl>
                            <dl className="ic5 line">
                                <dt>유의사항</dt>
                                <dd>이번 활동에는 각자 발을 닦을 수 있는 수건을 준비해주시기 바랍니다.</dd>
                            </dl>
                        </div>
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
                        <div className="infoArea">
                            <h2>활동을 신청한 제공자 <span>(총 0건)</span></h2>
                            <h2 className="applyPerson">신청정보</h2>
                            <h2 className="payInfo">결제정보</h2>
                            <h2 className="voucherInfo">바우처정보</h2>
                            <dl><dt>활동번호</dt><dd>A122</dd></dl>
                            <dl><dt>시작일시</dt><dd>2023년 8월 23일 13시</dd></dl>
                            <dl><dt>시작지점</dt><dd>뚝섬역 8번출구</dd></dl>
                            <dl><dt>종료일시</dt><dd>2023년 8월 23일 13시</dd></dl>
                            <dl><dt>종료지점</dt><dd>뚝섬역 8번출구</dd></dl>
                            <dl className="line">
                                <dt>상세정보</dt>
                                <dd>뚝섬역 8번출구역에서 만납니다. 서울 앵무새카페를 방문한 후 서울숲으로 이동합니다.</dd>
                            </dl>
                            <dl className="line">
                                <dt>요청사항</dt>
                                <dd>이번 활동에는 각자 발을 닦을 수 있는 수건을 준비해주시기 바랍니다.</dd>
                            </dl>
                            <dl className="line">
                                <dt>바우처정보</dt>
                                <dd className="voucherChoice">
                                    <ul>
                                        <li>
                                            <input type="radio" />
                                            <label>
                                                <strong>성동구지원사업</strong><br/>
                                                지원금액 : <em>100,000원</em><br/>
                                                사용/잔여금액 : <em>50,000원 / 50,000원</em><br/>
                                                <i>2023년 10월 10일 9시 12분 21초</i>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" />
                                            <label>
                                                <strong>광진구지원사업</strong><br/>
                                                지원금액 : <em>100,000원</em><br/>
                                                사용/잔여금액 : <em>50,000원 / 50,000원</em><br/>
                                                <i>2023년 10월 10일 9시 12분 21초</i>
                                            </label>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div className="payKind">
                            <span className="radioSet">
                                <input type="radio" name="radio2"/>
                                <label htmlFor="">카드</label>
                            </span>
                            <span className="radioSet">
                                <input type="radio" name="radio2"/>
                                <label htmlFor="">계좌이체</label>
                            </span>
                        </div>
                        <div className="applyOk">
                            <p>
                                신청이 <br/>완료되었습니다.
                            </p>
                        </div>
                    </div>
                    <div className="viewBtn">
                        <a href="" className="btnM">제공자로 신청하기</a>
                        <button className="btnG">활동 신고하기</button>

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
