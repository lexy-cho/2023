import { useQuery } from "@tanstack/react-query";
import { useUserState } from "UserContext";
import DefaultFooter from "containers/DefaultFooter";
import DefaultHeader from "containers/DefaultHeader";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { mainApi } from "utils/api";

import { convActStat } from "utils/conversion";
import { formatDate } from "utils/format";
import { getUserInfo } from "utils/store";


function Main() {
    SwiperCore.use([Navigation, Pagination]);
    const navigate = useNavigate();
    const { user } = useUserState();
    const userInfo = getUserInfo()

    const getBanner = async (): Promise<any> => {
        try {
            const response: any = await mainApi.getBanner()
            if (response.statusCode === 200) {
                return response.data;
            }
        } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch data");
        }
    };

    const getMyActList = async (): Promise<any> => {
        const params = { memUid: user?.memUid };
        try {
            const response: any = await mainApi.getMyActList(params);
            if (response.statusCode === 200) {
                return { list: response.data.list };
            }
        } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch data");
        }
    };

    const { data: bannerArr } = useQuery<any>(["getBanner"], getBanner, { enabled: !false, cacheTime: 0 });
    const { data: act, isLoading, isError, refetch } = useQuery<{ list: any }>(["getMyActList"], getMyActList, { enabled: !!user?.memUid, cacheTime: 0 });

    // console.log(act);
    const ingList = act?.list.filter((el: any) => el.actStat === 'B');
    const endList = act?.list.filter((el: any) => el.actStat === 'C');

    return (
        <>
            <DefaultHeader headType={'main'} tailType={'all'} />
            <div id="container">
                <section>
                    <div className="mainContents">
                        <div className="banner">
                            <StyleSwiper
                                slidesPerView={1}
                                cssMode={false}
                                navigation={true}
                                modules={[Navigation]}
                                preventInteractionOnTransition={true}
                            >
                                {bannerArr?.map((el: any, idx: number) => (
                                    <SwiperSlide key={el.banUid || idx}>
                                        <img className="slide-img" src={`${process.env.REACT_APP_FILE_URL}${el.fileUrl}`} onClick={() => window.open(el.banUrl)} />
                                    </SwiperSlide>
                                ))}
                            </StyleSwiper>
                        </div>

                        {userInfo ?
                            <div className="loginAfter">
                                <h2>활동내역</h2>
                                {ingList?.length > 0 && (
                                    <>
                                        <strong className="stat">진행중</strong>
                                        <ul className="list">
                                            {ingList.map((el: any, idx: number) => (
                                                <li key={el.actUid || idx} onClick={() => navigate(`/activity/${el.actUid}`)}>
                                                    <span className="img"><span><img src={`${process.env.REACT_APP_FILE_URL}${el.mfileUrl}`} alt={el.mfileDesc} /></span></span>
                                                    <div>
                                                        <strong>{el.actName}</strong>
                                                        <span className="date">
                                                            {formatDate(el.actStartDate, 'YYYY년 MM월 DD일 HH시')}부터<br />{formatDate(el.actEndDate, 'YYYY년 MM월 DD일 HH시')}까지<br />({el.actTime}시간)
                                                        </span>
                                                        <span className="writer">등록자 : {el.memName}</span>
                                                    </div>
                                                    <em className="icS">{convActStat(el.actStat)}</em>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                                {endList?.length > 0 && (
                                    <>
                                        <strong className="stat">마감</strong>
                                        <ul className="list">
                                            {endList.map((el: any, idx: number) => (
                                                <li key={el.actUid || idx} onClick={() => navigate(`/activity/${el.actUid}`)}>
                                                    <span className="img"><span><img src={`${process.env.REACT_APP_FILE_URL}${el.mfileUrl}`} alt={el.mfileDesc} /></span></span>
                                                    <div>
                                                        <strong>{el.actName}</strong>
                                                        <span className="date">
                                                            {formatDate(el.actStartDate, 'YYYY년 MM월 DD일 HH시')}부터<br />{formatDate(el.actEndDate, 'YYYY년 MM월 DD일 HH시')}까지<br />({el.actTime}시간)
                                                        </span>
                                                        <span className="writer">등록자 : {el.memName}</span>
                                                    </div>
                                                    <em className="icS close">{convActStat(el.actStat)}</em>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                                
                                {(ingList?.length === 0 && endList?.length === 0) && (
                                    <ul >
                                        <li >
                                            활동 내역이 없습니다.
                                        </li>
                                    </ul>
                                )}
                                <span className="addArea">
                                    <Link to={'/activityWrite1'} className="goRecord">활동등록 하러가기</Link>
                                </span>
                            </div>
                            :
                            <>
                                <div className="loginBefore">
                                    <h1>서로플랫폼</h1>
                                    <h4>장애인과 비장애인을 연결하는 플랫폼입니다.</h4>
                                </div>
                                <div className="loginBefore-btnWrap">
                                    <Link to={'/login'} className="btnM main">로그인해주세요!</Link>
                                    <Link to={'/join'} className="btnM main">회원가입이 필요합니다.</Link>
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
            <DefaultFooter />
        </>
    );
}

const StyleSwiper = styled(Swiper)`
  box-sizing: border-box;
  width: 100%;
  .slide-img {
    width: 100%;
    height: 280px
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
