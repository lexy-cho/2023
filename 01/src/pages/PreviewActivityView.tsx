import { useMutation, useQuery } from "@tanstack/react-query";
import { useUserDispatch, useUserState } from "UserContext";
import DefaultFooter from "containers/DefaultFooter";
import DefaultHeader from "containers/DefaultHeader";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import activityApi from "utils/api/activityApi";
import { convAbleStat, convAbleType, convGender } from "utils/conversion";
import { formatDate, withCommas } from "utils/format";

import Loading from "component/Loading";
import parse from "html-react-parser";
import { mainApi } from "utils/api";

function PreviewActivityView() {
    const navigate = useNavigate();
    const location = useLocation();
    SwiperCore.use([Navigation, Pagination]);
    const [popUpVisible, setPopUpVisivle] = useState<boolean>(false)
    const [reportDesc, setReportDesc] = useState<string>("")
    const [reportType, setReportType] = useState<string>("")
    const { id: actUid } = useParams(); //활동UID
    //const type = location.state?.type; //이용자로 신청하기 위한 파라미터

    const dispatch = useUserDispatch();
    const [actOwner, setActOwner] = useState<any>();
    const [swiperArr, setSwiperArr] = useState<any>([]);


    const { user } = useUserState();

    // console.log("활동UID ======>", actUid, "사용자 신청 타입=====>", user?.userType);
    // console.log("context User : ", user);

    const getActivity = async (): Promise<any> => {
        const params = { actUid };
        try {
            const response: any = await mainApi.getActivity(params);
            if (response.statusCode === 200) {
                return response.data;
            }
        } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch data");
        }
    };

    const { data, isLoading, isError, refetch } = useQuery<any>(["getActivity"], getActivity, { enabled: !!actUid, cacheTime: 0 });
    // console.log(data);


    //제공자 혹은 이용자로 신청한 내역이 있는지
    // const isAble = data?.userList?.find((e: any) => e.memUid === user.memUid) === undefined && data?.offerList?.find((e: any) => e.memUid === user.memUid) === undefined

    const getMemAble = () => {
        let memberAbleType = actOwner?.memberNormalVO.memAbleType === "B" ? "시각" : actOwner?.memberNormalVO.memAbleType === "C" ? "청각" : actOwner?.memberNormalVO.memAbleType === "D" ? "지체" : actOwner?.memberNormalVO.memAbleType === "E" ? "감각/정신" : actOwner?.memberNormalVO.memAbleType === "F" ? "복합" : ""
        let memberAbleStat = actOwner?.memberNormalVO.memAbleStat === "B" ? "심함" : actOwner?.memberNormalVO.memAbleStat === "A" ? "심하지 않음" : ''

        let memAbleInfo: string;
        if (memberAbleStat !== "" && memberAbleType !== "") {
            memAbleInfo = memberAbleType + "/" + memberAbleStat
        } else {
            memAbleInfo = memberAbleType + memberAbleStat
        }
        return memAbleInfo
    }

    useEffect(() => {
        const actOwner = data?.userInfo;
        const swiperArr = data?.fileList;
        setActOwner(actOwner);
        setSwiperArr(swiperArr);
    }, [data]);

    const [swiperLoaded, setSwiperLoaded] = useState(false);

    const handleSwiperLoad = () => {
        setSwiperLoaded(true);
    }

    return (
        <>
            <DefaultHeader act={data} />
            <Loading isLoading={isLoading && !swiperLoaded} />
            <div id="container">
                <section>
                    <div className="contents">
                        <div className="activityPic">
                            {
                                swiperArr &&
                                <StyleSwiper
                                    preventInteractionOnTransition={true}
                                    slidesPerView={1}
                                    cssMode={false}
                                    navigation={true}
                                    modules={[Navigation]}
                                    onSwiper={handleSwiperLoad}
                                >
                                    {swiperArr?.map((el: any, idx: number) => (
                                        <SwiperSlide key={el.fileUid || idx}>

                                            {/* <img className="slide-img" src={el.image} alt="배너이름" /> */}
                                            <img className="slide-img" src={`${process.env.REACT_APP_FILE_URL}${el.fileUrl}`} alt={el?.fileDesc} />
                                        </SwiperSlide>
                                    ))}
                                </StyleSwiper>
                            }

                        </div>

                        {
                            ['A', 'S'].includes(actOwner?.memType) ?
                                <div className="aBasic">
                                    <div className="back">
                                        <strong>{withCommas(data?.actPrice || 0)}</strong>
                                        <div>
                                            <span>
                                                <img src={`${process.env.PUBLIC_URL + '/assets/images/icon.png'}`} alt={'프로필 이미지'} />
                                            </span>
                                            <em>{actOwner?.memName}</em>
                                        </div>
                                        <Link className="mAccuse" to={"#"} style={{visibility:'hidden'}}>신고하기</Link>
                                    </div>
                                </div>
                                :
                                actOwner?.memUseType === 'U' ?
                                    <div className="aBasic">
                                        <div className="back">
                                            <strong>{withCommas(data?.actPrice || 0)}</strong>
                                            <div>
                                                <span>
                                                    <img src={`${actOwner?.profileImage?.fileUrl ? process.env.REACT_APP_FILE_URL + actOwner?.profileImage?.fileUrl : process.env.PUBLIC_URL + '/assets/images/ic_active_user.svg'}`} alt={'프로필 이미지'} />
                                                </span>
                                                <em>{Number(actOwner?.memGrade) === 0 ? `${actOwner?.memName}` : `${actOwner?.memName} ★${actOwner?.memGrade}`}</em>
                                            </div>
                                            <Link className="mAccuse" to={"#"} style={{visibility:'hidden'}}>신고하기</Link>
                                        </div>
                                        <p>
                                            &#91;{getMemAble()}&#93;<br />
                                            {actOwner.memberNormalVO && actOwner.memberNormalVO.memAdInformation}
                                        </p>
                                    </div>
                                    :
                                    <div className="aBasic">
                                        <div className="back">
                                            <strong>{withCommas(data?.actPrice || 0)}</strong>
                                            <div>
                                                <span>
                                                    <img src={`${actOwner?.profileImage?.fileUrl ? process.env.REACT_APP_FILE_URL + actOwner?.profileImage?.fileUrl : process.env.PUBLIC_URL + '/assets/images/ic_active_user.svg'}`} alt={'프로필 이미지'} />
                                                </span>
                                                <em>{Number(actOwner?.memGrade) === 0 ? `${actOwner?.memberEducatorVO?.businessName}` : `${actOwner?.memberEducatorVO?.businessName} ★${actOwner?.memGrade}`}</em>
                                            </div>
                                            <Link className="mAccuse" to={"#"} style={{visibility:'hidden'}}>신고하기</Link>
                                        </div>
                                    </div>
                        }
                        <div className="viewArea">
                            <div className="infoArea icCase">
                                <dl className="ic1"><dt>활동번호</dt><dd>{`A${data?.actUid}`}</dd></dl>
                                <dl className="ic2"><dt>시작일시</dt><dd>{formatDate(data?.actStartDate, 'YYYY년 MM월 DD일 HH시')}</dd></dl>
                                <dl className="ic3"><dt>시작지점</dt><dd>{data?.actStartPoint}</dd></dl>
                                <dl className="ic2"><dt>종료일시</dt><dd>{formatDate(data?.actEndDate, 'YYYY년 MM월 DD일 HH시')}</dd></dl>
                                <dl className="ic3"><dt>종료지점</dt><dd>{data?.actEndPoint}</dd></dl>
                                <dl className="ic4 line">
                                    <dt>상세정보</dt>
                                    {/* <dd>{data?.actDec}</dd> */}
                                    <dd style={{ whiteSpace: 'pre-wrap' }}>{parse(`${data?.actDec}`)}</dd>
                                </dl>
                                <dl className="ic5 line">
                                    <dt>유의사항</dt>
                                    {/* <dd>{data?.actGuide}</dd> */}
                                    <dd style={{ whiteSpace: 'pre-wrap' }}>{parse(`${data?.actGuide}`)}</dd>
                                </dl>
                            </div>
                        </div>
                        <div className="viewBtn">
                            <Link to={'/login'} className="btnM main">로그인해주세요!</Link>
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
            <DefaultFooter />
        </>

    );
}

const StyleSwiper = styled(Swiper)`
  box-sizing: border-box;
  width: 100%;
  .slide-img {
    width: 100%;
    height: 370px;
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

export default PreviewActivityView;
