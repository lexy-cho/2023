import { useUserState } from "UserContext";
import DefaultFooter from "containers/DefaultFooter";
import DefaultHeader from "containers/DefaultHeader";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { convAbleStat, convAbleType } from "utils/conversion";
import { withCommas , setPhoneBar} from "utils/format";
import { useMutation, useQuery } from "@tanstack/react-query";
import activityApi from "utils/api/activityApi";
import MarkdownViewer from '../component/MarkdownViewer';
import Loading from "component/Loading";

function ActivityUser() {

    const [certYn, setCertYn] = useState<boolean>(false);
    const [reqDesc, setReqDesc] = useState<string>('');
    const navigate = useNavigate();
    const location = useLocation();
    const { id: actUid } = useParams(); //활동UID
    //const type = location.state?.type; //이용자로 신청하기 위한 파라미터
    const actPrice = location.state?.actPrice;

    const { user } = useUserState();
    const [loading, setLoading] = useState<boolean>(false);

    const handlePayment = (payType: string) => {
        if (!certYn) {
            alert('이용약관 동의가 필요합니다.');
            return;
        }

        // console.log(reqDesc);
        navigate(`/activity/${actUid}/pay/${payType}`, { state: {  actPrice: actPrice, reqDesc: reqDesc } });
    }

    const handleUserReq = () => {
        if (!certYn) {
            alert('이용약관 동의가 필요합니다.');
            return;
        }
        
        if(data?.actPrice == 0 ){
            const param = {
                actUid: actUid,
                memUid: user.memUid,
                usrReq: reqDesc
            };
            postActUser.mutate(param);
        }
    }

    const postActUser = useMutation(activityApi.user, {
        onMutate: (variable) => {
            setLoading(true);
        },
        onError: (error, variable, context) => {
            console.log("error", error, variable, context);
            alert('등록진행이 실패되었습니다. 잠시후 다시 시도해주세요.')
            return
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {
            console.log(statusCode, data);
            navigate(`/activity/${actUid}/success`, { state: { actPrice: actPrice, reqDesc: reqDesc } });
        },
        onSettled: (data: any) => {
            setLoading(false);
        },
    });

    const { mutate } = useMutation(activityApi.postOffer, {
        onMutate: (variable) => {
            setLoading(true);
        },
        onError: (error, variable, context) => {
            alert('활동신청이 실패되었습니다. 잠시후 다시시도해주세요.');
            console.log("error", error, variable, context);
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {

            //alert('신고완료!')
            //setPopUpVisivle(false);
            navigate(`/activity/${actUid}/success`, {replace: true, state: { actPrice: actPrice, reqDesc: reqDesc } });
            console.log(statusCode, data);
        },
        onSettled: (data: any) => {
            setLoading(false);
        },
    });

    const handleOfferReq = () => {
        if(window.confirm('제공자로 신청하시겠습니까?')){
            const param = {actUid ,memUid: user.memUid , offReq: reqDesc};
            mutate(param);
        }
        
    }

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

    return (
        <>
            <DefaultHeader act={data} />
            <Loading isLoading={loading} />
            <div id="container">
                <section>
                    <div className="contents">
                        <div className="viewArea">
                            <div className="infoArea">
                                <strong className="applyPrice">{withCommas(actPrice)}</strong>
                                <h2>{user.userType === 'U' ? '이용자' : '제공자'}로 신청하기</h2>
                                <dl><dt>이름</dt><dd>{user.memName}</dd></dl>
                                <dl><dt>전화번호</dt><dd>{setPhoneBar(user.memPhone)}</dd></dl>
                                {
                                    user.userType === 'U' &&
                                    <>
                                        <dl><dt>장애유형</dt><dd>{convAbleType(user.memberNormalVO?.memAbleType)}</dd></dl>
                                        <dl><dt>장애정도</dt><dd>{convAbleStat(user.memberNormalVO?.memAbleStat)}</dd></dl>
                                    </>
                                }
                                
                                <dl className="line" style={{marginTop: 10}}>
                                    <dt>요청사항</dt>
                                    <dd><textarea placeholder="요청사항을 입력하세요." onChange={(e) => setReqDesc(e.target.value)}></textarea></dd>
                                </dl>
                                <div className="applyAgree">
                                    {/* <div className="agreeArea">
                                        약관내용
                                    </div> */}
                                    <MarkdownViewer filePath="/markdown/terms.md" cls="agreeArea"/>
                                    <span className="checkSet" >
                                        <input type="checkbox" checked={certYn} onChange={(e) => setCertYn(e.target.checked)} />
                                        <label htmlFor="">이용약관에 동의</label>
                                    </span>
                                </div>
                                {/* <div className="applyAgree">
                                    <MarkdownViewer filePath="/markdown/guide.md" />
                                    <span className="checkSet" >
                                        <input type="checkbox" checked={certYn} onChange={(e) => setCertYn(e.target.checked)} />
                                        <label htmlFor="">가이드라인에 동의</label>
                                    </span>
                                </div> */}
                            </div>
                        </div>

                        <div className="viewBtn" style={{marginTop:20}}>
                            {
                                user.userType === 'U' ?
                                <>
                                    {data?.actPrice > 0 ? (
                                        <span>
                                            <button className="btnM sm" onClick={() => handlePayment('V')}>바우처로 결제하기</button>
                                            <button className="btnM sm" onClick={() => handlePayment('P')}>결제하기</button>
                                        </span>
                                    ):(
                                        <span>
                                            <button className="btnM" onClick={() => handleUserReq()}>신청하기</button>
                                        </span>
                                    )}
                                </>
                                :
                                <button className="btnM" onClick={() => handleOfferReq()}>신청하기</button>
                            }
                           
                           
                            <button className="btnG" onClick={() => navigate(-1)}>취소</button>
                        </div>
                    </div>
                </section>
            </div>
            <DefaultFooter />
        </>
    )
}

export default ActivityUser;