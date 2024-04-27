import { useMutation, useQuery } from "@tanstack/react-query";
import { useUserDispatch, useUserState } from "UserContext";
import Loading from "component/Loading";
import DefaultFooter from "containers/DefaultFooter";
import DefaultHeader from "containers/DefaultHeader";
import { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import styled from "styled-components";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import activityApi from "utils/api/activityApi";
import { formatDate, withCommas } from "utils/format";


interface FeedBack {
    memGrade: number;
    memDesc: string;
    targetUid: number;
    memUseType: string;
    memName: string;
    memUid: number;
}

function FeedBack() {

    const navigate = useNavigate();
    const [feed, setFeed] = useState<FeedBack[]>([]);
    const [actRate, setActRate] = useState<number>(0);
    const [actDesc, setActDesc] = useState<string>('');
    const { id: actUid } = useParams(); //활동UID
    const [loading, setLoading] = useState<boolean>(false);

    const { user } = useUserState();
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

    const getActivityFeedback = async (): Promise<any> => {
        const params = { actUid, memUid: user?.memUid };
        try {
            const response: any = await activityApi.getActivityFeedback(params);
            if (response.statusCode === 200) {
                return response.data;
            }
        } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch data");
        }
    };

    const { data, isLoading, isError, refetch } = useQuery<any>(["getActivity"], getActivity, { enabled: !!actUid, cacheTime: 0 });

    const { data: userList } = useQuery<any>(["getActivityFeedback"], getActivityFeedback, { enabled: !!actUid, cacheTime: 0 });

    // console.log(userList);

    useEffect(() => {
        // console.log('useEffect')

        const init = userList.memberList.map((el: FeedBack) => {
            return {
                memGrade: 0,
                memDesc: '',
                targetUid: el.memUid,
                memUseType: userList.memUseType,
                memName: el.memName,
                memUid: user.memUid
            }
        })

        setFeed(init);
    }, [userList]);


    const { mutate: feedback } = useMutation(activityApi.feedback, {
        onMutate: (variable) => {
            setLoading(true);
        },
        onError: (error, variable, context) => {
            console.log("error", error, variable, context);
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {
            alert('피드백 등록이 완료되었습니다.')
            // console.log(statusCode, data);
            navigate('/');
        },
        onSettled: (data: any) => {
            setLoading(false);
        },
    });

    const handleSubmit = () => {
        // console.log(feed);
        // console.log(actRate);
        if (actRate === 0) {
            alert('활동별점을 선택해주세요.');
            return;
        }

        for (let i = 0; i < feed.length; i++) {
            if (feed[i].memGrade === 0) {
                alert(`${feed[i].memName}님 별점을 선택해주세요.`);
                return;
            }
        }

        // console.log('asdasd');
        // if(userRate === 0) {
        //     alert('이용자별점을 선택해주세요.');
        //     return;
        // }

        // if(offerRate === 0) {
        //     alert('제공자별점을 선택해주세요.');
        //     return;
        // }

        const param = { actUid: actUid, actGrade: actRate, memUid: user.memUid, actDesc: actDesc, memberList: feed };
        // console.log(param)
        feedback(param)

    }

    const handleUserFeed = (str: string, idx: number) => {
        let newArr = [...feed];
        newArr[idx].memDesc = str;
        setFeed(newArr);
    }

    const handleUserRate = (rate: number, idx: number) => {
        let newArr = [...feed];
        newArr[idx].memGrade = rate;
        setFeed(newArr);
    }

    return (
        <>
            <DefaultHeader act={data} />
            <Loading isLoading={loading} />
            <div id="container">
                <section>
                    <div className="contents">
                        <div className="feedBackArea">
                            <dl>
                                <dt>활동 별점</dt>
                                <dd>
                                    <StarRatings
                                        rating={actRate}
                                        starRatedColor="gold"
                                        starEmptyColor="grey"
                                        starHoverColor="gold"
                                        numberOfStars={5}
                                        name="rating"
                                        starDimension="50px"
                                        starSpacing="10px"
                                        changeRating={(rating: number) => setActRate(rating)}
                                    />
                                    <input type="text" placeholder="자유롭게 피드백을 입력해주세요." value={actDesc} onChange={(e) => setActDesc(e.target.value)} />
                                </dd>
                            </dl>
                            {
                                feed?.map((el: FeedBack, idx: number) => {
                                    return (

                                        <dl key={`userRate_${idx}`}>
                                            <dt>{el.memUseType === 'O' ? `제공자(${el.memName})님` : `이용자(${el.memName})님`} 별점</dt>
                                            <dd>
                                                <StarRatings
                                                    rating={el.memGrade}
                                                    starRatedColor="gold"
                                                    starEmptyColor="grey"
                                                    starHoverColor="gold"
                                                    numberOfStars={5}
                                                    name="rating"
                                                    starDimension="50px"
                                                    starSpacing="10px"
                                                    changeRating={(rating: number) => handleUserRate(rating, idx)}
                                                />
                                                <input type="text" placeholder="자유롭게 피드백을 입력해주세요." value={el.memDesc} onChange={(e) => handleUserFeed(e.target.value, idx)} />
                                            </dd>
                                        </dl>

                                    )
                                })
                            }

                            {/* <dl>
                            <dt>제공자 별점</dt>
                            <dd>
                                <StarRatings
                                    rating={offerRate}
                                    starRatedColor="gold"
                                    starEmptyColor="grey"
                                    starHoverColor="gold"
                                    numberOfStars={5}
                                    name="rating"
                                    starDimension="50px"
                                    starSpacing="10px"
                                    changeRating={(rating: number) => setOfferRate(rating)}
                                />
                                <input type="text" placeholder="자유롭게 피드백을 입력해주세요." value={offerFeed} onChange={(e) => setOfferFeed(e.target.value)} />
                            </dd>
                        </dl> */}
                        </div>
                        <div className="viewBtn">
                            <button className="btnM" onClick={() => handleSubmit()}>등록하기</button>
                            <button className="btnG" onClick={() => navigate(-1)}>취소하기</button>
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
        </>
    )
}



export default FeedBack;
