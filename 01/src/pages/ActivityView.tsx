import { useMutation, useQuery } from "@tanstack/react-query";
import { useUserDispatch, useUserState } from "UserContext";
import DefaultFooter from "containers/DefaultFooter";
import DefaultHeader from "containers/DefaultHeader";
import { useEffect, useState } from "react";
import { Link, redirect, useLocation, useNavigate, useParams } from "react-router-dom";
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

function ActivityView() {
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

    /**
     * TODO: 
     * 사용자는 하나의 활동에 대해 제공자/이용자 중 하나만 신청할수 있다.
     * 목록 화면 하단에서 이용자/제공자 타입(location.state?.type)에 따라 이용자, 제공자 신청한다.
     * fileList: 활동 사진
     * userInfo: 생성자(제공자, 이용자) 정보-> 프로필 사진정보도 포함
     * offerList: 로그인한 회원이 제공자로 신청했을경우 제공자정보에 포함되어있음, 이용자로 신청하지 못하게 판단가능
     * userList: 로그인한 회원이 이용자로 신청했을경우 이용자정보에 포함되어있음, 제공자로 신청하지 못하게 판단가능
     * 신고 선택시 : 신고 모달팝업에서 신고사유 선택후 신고 api 요청(활동, 사용자)
     * 
     * 활동 목록에서 이용자(제공자)로 진입시 이용자(제공자)로만 신청가능 하며 기존 신청한 이용자(제공자)는 이용자(제공자) 신청 버튼이 표기되지 않는다.
     */

    const { user } = useUserState();

    // console.log("활동UID ======>", actUid, "사용자 신청 타입=====>", user?.userType);
    // console.log("context User : ", user);

    const getActivity = async (): Promise<any> => {
        const params = { actUid, memUid: user?.memUid };
        try {
            const response: any = await activityApi.getActivity(params);
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
    const isAble = data?.userList?.find((e: any) => e.memUid === user.memUid) === undefined && data?.offerList?.find((e: any) => e.memUid === user.memUid) === undefined

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

    const getCodeList = async (): Promise<any> => {
        try {
            const response: any = await activityApi.getCodeList('12');
            if (response.statusCode === 200) {
                return response.data;
            }
        } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch data");
        }
    };

    const { data: codeData, refetch: getRepDec } = useQuery<any>(['getCode'], getCodeList, { enabled: false, refetchOnWindowFocus: false, retry: 0, });

    const { mutate: report } = useMutation(activityApi.report, {
        onError: (error, variable, context) => {
            console.log("error", error, variable, context);
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {
            alert('신고처리가 완료되었습니다.')
            setPopUpVisivle(false);
            console.log(statusCode, data);
        },
    });

    const { mutate: postLike } = useMutation(activityApi.actLike, {
        onError: (error, variable, context) => {
            console.log("error", error, variable, context);
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {
            //alert('신고완료!')
            //setPopUpVisivle(false);
            refetch();
            console.log(statusCode, data);
        },
    });

    const postReport = async () => {
        if (reportDesc === '') {
            alert('신고 사유를 선택해주세요.')
            return
        }
        let repSubjectUid: string = "";
        let memUid = user.memUid
        let repDec: string = "";
        if (reportType === "A") { //유저 신고
            repSubjectUid = actOwner.memUid
        } else if (reportType === "B") { //활동 신고
            repSubjectUid = data.actUid
        }
        let param = {
            repStat: "A",
            memUid,
            repType: reportType,
            repSubjectUid,
            repDec: reportDesc,
            regId: ""
        }
        report(param);
    }

    const handleReport = (v: string) => {
        getRepDec();
        setPopUpVisivle(true);
        setReportType(v);
    }

    const handleActUser = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        navigate(`/activity/${actUid}/user`, { state: { actPrice: data.actPrice } });
    }

    const handleLikeBtn = () => {
        const param = { actUid: actUid, memUid: user.memUid, delFlag: !data.isLike ? 'N' : 'Y' };
        postLike(param);
    }

    const handleModify = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        //navigate(`/activityModify/${actUid}`, {state: { type:type}});
        navigate(`modify`, { relative: 'path' })
    }

    const { mutate: postUserCancel } = useMutation(activityApi.userCancelReq, {
        onError: (error, variable, context) => {
            alert('활동신청 취소가 실패되었습니다. 잠시후 다시시도해주세요.');
            console.log("error", error, variable, context);
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {
            alert('활동신청 취소가 완료되었습니다.');
            //setPopUpVisivle(false);
            refetch();
            console.log(statusCode, data);
        },
    });

    const { mutate: postOfferCancel } = useMutation(activityApi.offerCancelReq, {
        onError: (error, variable, context) => {
            alert('활동신청 취소가 실패되었습니다. 잠시후 다시시도해주세요.');
            console.log("error", error, variable, context);
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {
            alert('활동신청 취소가 완료되었습니다.');
            //alert('신고완료!')
            //setPopUpVisivle(false);
            refetch();
            console.log(statusCode, data);
        },
    });

    const { mutate: payCancel } = useMutation(activityApi.payCancel, {
        onError: (error, variable, context) => {
            alert('활동신청 취소가 실패되었습니다. 잠시후 다시시도해주세요.');
            console.log("error", error, variable, context);
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {
            alert('활동신청 취소가 완료되었습니다.');
            //setPopUpVisivle(false);
            refetch();
            console.log(statusCode, data);
        },
    });


    const handleRequestCancel = () => {
        if (window.confirm('신청을 취소하시겠습니까?')) {
            if (data?.isUser) {
                /* 토스페이먼츠 결제 */
                if (data?.payVO) {
                    const params = { payInfo: data?.payVO.payInfo };
                    payCancel(params);
                } else {
                    const param = { actUid: actUid, memUid: user.memUid, payVO: data?.payVO, voucherVO: data?.voucherVO };
                    postUserCancel(param);
                }

            } else if (data?.isOffer) {
                const param = { actUid: actUid, memUid: user.memUid };
                postOfferCancel(param);
            }
        }
    }

    const { mutate: cancelActivity } = useMutation(activityApi.cancelActivity, {
        onMutate: (variable) => {
            setLoading(true);
        },
        onError: (error, variable, context) => {
            console.log("error", error, variable, context);
            alert('활동 취소가 실패되었습니다. 잠시후 다시 시도해주세요.')
            return
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {
            alert('활동 취소가 완료되었습니다.');
            refetch();
        },
        onSettled: (data: any) => {
            setLoading(false);
        },
    });

    const handleCancel = () => {
        const param = { ...data, actStat: 'F' };
        cancelActivity(param);
    }

    useEffect(() => {
        const actOwner = data?.userInfo;
        const swiperArr = data?.fileList;
        setActOwner(actOwner);
        setSwiperArr(swiperArr);
    }, [data]);

    const [loading, setLoading] = useState<boolean>(true);
    const [isSwiperLoad, setIsSwiperLoad] = useState<boolean>(false);
    const handleSwiperLoad = () => setIsSwiperLoad(false);

    useEffect(() => {
        if (data) refetch();
    }, []);

    useEffect(() => {
        if (!isLoading && !isSwiperLoad) setLoading(false);
    }, [isLoading, isSwiperLoad]);

    return (
        <>
            <DefaultHeader act={data} state={location.state} tailEvent={() => handleLikeBtn()} />
            <Loading isLoading={loading} />
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
                                        <Link className="mAccuse" to={"#"} style={{ visibility: 'hidden' }}>신고하기</Link>
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
                                            <Link className="mAccuse" to={"#"} onClick={() => handleReport("A")} style={{ visibility: `${data?.memUid === user?.memUid ? 'hidden' : 'visible'}` }}>신고하기</Link>
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
                                            <Link className="mAccuse" to={"#"} onClick={() => handleReport("A")} style={{ visibility: `${data?.memUid === user?.memUid ? 'hidden' : 'visible'}` }}>신고하기</Link>
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

                            {
                                data?.isReg &&
                                (
                                    <div className="infoArea">
                                        <h2>활동을 신청한 제공자 <span>(총 {data?.offerList?.length || 0}건)</span></h2>
                                        {
                                            data?.offerList?.map((el: any, idx: number) => {
                                                return (
                                                    <div key={`offer_${idx}_${el.memName}`} style={{ marginTop: 10 }}>
                                                        <dd>{el.memName}</dd>
                                                        <dd>{`${convGender(el.memGender)}자/${formatDate(el.memBirth, 'YYYY')}년생`}</dd>
                                                        {el.offReqFlag === 'Y ' && <dd>{`요청사항: ${el.offReq}`}</dd>}
                                                        <dd>{formatDate(el.regDate, 'YYYY년 MM월 DD일 HH시 mm분')}</dd>
                                                    </div>
                                                )
                                            })
                                        }

                                        {/* <dl className="ic1"><dt>활동번호</dt><dd>{data?.actUid}</dd></dl> */}
                                    </div>
                                )
                            }

                            {
                                data?.actOpenChat &&
                                <div className="viewBtn">
                                    <button className="btnM sm" onClick={() => { }}>오픈채팅방 바로가기</button>
                                </div>
                            }

                            {
                                data?.isUser &&
                                <div className="infoArea">
                                    <h2 className="applyPerson">신청정보</h2>
                                    {
                                        data?.userList?.map((el: any, idx: number) => {
                                            return (
                                                <div key={`user_${idx}_${el.memName}`}>
                                                    <dl><dt>이름</dt><dd>{el.memName}</dd></dl>
                                                    <dl><dt>전화번호</dt><dd>{el.memPhone}</dd></dl>
                                                    <dl><dt>장애유형</dt><dd>{convAbleType(el.memAbleType)}</dd></dl>
                                                    <dl><dt>장애정도</dt><dd>{convAbleStat(el.memAbleStat)}</dd></dl>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            }


                            {
                                data?.payVO &&
                                <div className="infoArea">
                                    <h2 className="payInfo">결제정보</h2>
                                    {
                                        <>
                                            <dl><dt>승인번호</dt><dd>{data?.payVO.payInfo}</dd></dl>
                                            <dl><dt>결제금액</dt><dd>{`${withCommas(data?.payVO.payPrice)} `}</dd></dl>
                                            <dl><dt>결제수단</dt><dd>{`${data?.payVO.payMethod}(${data?.payVO.cardTypeNm})`}</dd></dl>
                                            <dl><dt>결제시각</dt><dd>{formatDate(data?.payVO.regDate, 'YYYY-MM-DD HH:mm')}</dd></dl>
                                        </>
                                    }
                                </div>
                            }
                            {
                                data?.voucherVO &&
                                <div className="infoArea">
                                    <h2 className="voucherInfo">바우처 결제정보</h2>
                                    {
                                        <>
                                            <dl><dt>승인번호</dt><dd>{data?.voucherVO.vouPayUid}</dd></dl>
                                            <dl><dt>사용/잔여금액</dt><dd>{`${withCommas(data?.voucherVO.vouPay)}(${withCommas(data?.voucherVO.vouStatPrice - data?.voucherVO.useVouPay)}) `}</dd></dl>
                                            <dl><dt>바우처명</dt><dd>{data?.voucherVO.vouName}</dd></dl>
                                            <dl><dt>사용시각</dt><dd>{formatDate(data?.voucherVO.regDate, 'YYYY-MM-DD HH:mm')}</dd></dl>
                                            {/* <dl><dt>장애유형</dt><dd>{convAbleType(el.memAbleType)}</dd></dl>
                                            <dl><dt>장애정도</dt><dd>{convAbleStat(el.memAbleStat)}</dd></dl> */}
                                        </>
                                    }

                                </div>
                            }
                            {
                                (data?.actStat !== "C" && data?.actPrice > 0 && (isAble || (!data?.isReg && (data?.isUser || data?.isOffer)))) &&
                                <div className="infoArea">
                                    <dl className="ic6 line">
                                        <h2 className="payInfo">[서비스 취소 및 환불 규정]</h2>
                                        <dd>
                                            (1) 신청자는 유니마인드랩 주식회사의 웹사이트를 방문하여 취소 또는 환불 정책을 확인할 책임이 있습니다.<br />
                                            (2) 서비스 이용자의 취소 요청이 있는 경우 환불이 가능하며 취소 시기에 따라 아래와 같은 요율을 따릅니다.<br />
                                            - 서비스 진행 2일(48시간) 이전 취소 시: 전액 환불<br />
                                            - 서비스 진행 1일~2일 이전 취소 시: 이용료의 70% 환불<br />
                                            - 서비스 진행 당일 취소시: 이용료의 50% 환불<br />
                                            (3) 아래와 같은 경우 서비스 이용 요금은 환불되지 않습니다.<br />
                                            - 신청자가 서비스를 부분적으로 사용한 경우<br />
                                            - 신청자가 예정된 날짜에 사전 통지 없이 No-Show 한 경우<br />
                                            - 신청자가 예약 시간에 늦었지만 종료 시간에 맞추어 종료되는 경우<br />
                                            (4) 서비스 요금 및 부가 서비스 요금에 부과되는 물품 용역소비세/ 부가가치세/ 유사한 간접세는 관련 세법에 따라 환불될 수 있습니다.
                                        </dd>
                                    </dl>

                                    <dl className="ic6 line">
                                        <h2 className="payInfo">[환불 처리 기간]</h2>
                                        <dd>
                                            서비스 요금 또는 부가 서비스 요금의 환불은 신청자에게 환불
                                        </dd>
                                    </dl>
                                </div>
                            }
                        </div>
                        <div className="viewBtn">
                            {(data?.actStat !== "C" && isAble) && <Link to={'#'} onClick={handleActUser} className="btnM sm">{`${user.userType === 'U' ? '이용자' : '제공자'}로 신청하기`}</Link>}
                            {(data?.actStat === "C" && !isAble && !data?.isFeedback) && <Link to={`/feedBack/${actUid}`} className="btnM sm">피드백 하기</Link>}
                            {(data?.isReg && (data?.actStat === 'A' || data?.actStat === 'R')) && <Link to={'#'} className="btnM" onClick={handleModify}>{data?.actStat === 'R' ? '신청하기' : '수정하기'}</Link>}
                            {(data?.isReg && data?.actStat === 'A') && <Link to={'#'} className="btnM" onClick={() => handleCancel()}>{'취소하기'}</Link>}
                            {(data?.actStat !== 'C' && !data?.isReg && (data?.isUser || data?.isOffer)) && <Link to={'#'} className="btnM" onClick={() => handleRequestCancel()}>취소요청</Link>}
                            {(data?.memUid !== user?.memUid) && <Link to={'#'} className="btnG sm" onClick={() => handleReport("B")}>활동 신고하기</Link>}
                        </div>
                    </div>
                    <div className="copy">
                        <span>유니마인드랩 주식회사 · 대표이사 : 최우주 · 사업자등록번호 : 461-81-02935</span>
                        <span>주소 : 서울시 성동구 광나루로 286 8층 (소셜캠퍼스온 서울1)</span>
                        <span>전화 : 070-7014-0304 · 이메일 : uni@unimindlab.com</span>
                        <span>ⓒ 2022 UNIMIND LAB Inc.</span>
                    </div>
                </section>
                {popUpVisible &&
                    <div className="popDim">
                        <div className="basicPop">
                            <div className="pBack">
                                <strong className="pTit sm">신고 사유를 선택해주세요.</strong>
                                <div className="pAccuse">
                                    {codeData?.map((el: any, idx: number) => (
                                        <span className="radioSet" key={'repDec' + idx} onChange={() => setReportDesc(el.codeDetailDesc)}>
                                            <input type="radio" name="radioB" />
                                            <label htmlFor="">{el.codeDetailDesc}</label>
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="pBtn">
                                <Link to={'#'} className="btnG" onClick={() => postReport()}>확인</Link>
                                <Link to={'#'} className="btnM" onClick={() => setPopUpVisivle(false)}>취소</Link>
                            </div>
                        </div>
                    </div>
                }
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

export default ActivityView;
