import { useState, useEffect, ChangeEvent } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Calendar from 'component/Calendar';
import { useUserState } from "UserContext";
import { useMutation, useQuery } from "@tanstack/react-query";
import activityApi from "utils/api/activityApi";
import { formatDate, betweenTime } from "utils/format";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import moment, { Moment } from 'moment';
import Loading from "component/Loading";

interface ActivityData {
    actName: string;
    actStartPoint: string;
    actEndPoint: string;
    actStartDate: Date | string | null | undefined;
    actEndDate: Date | string | null | undefined;
    actDec: string;
    actOpenChat: string;
    actType: string;
    actStat: string;
    actPrice?: number | undefined;
    actTime?: number;
}


function ActivityModify() {
    const navigate = useNavigate();
    const location = useLocation()
    const { regType } = useParams(); //활동UID

    //const [activityData,setActivityData] = useState({actName: '',actStartPoint:'',actEndPoint:'',actStartDate:'',actEndDate:'',actDec:'',actOpenChat:'',actType: '', actStat: 'A', actTime:''})
    const [activityData, setActivityData] = useState<ActivityData>({ actName: '', actStartPoint: '', actEndPoint: '', actStartDate: new Date(), actEndDate: new Date(), actDec: '', actOpenChat: '', actType: '', actStat: 'A' })
    const [calendarVisible, setCalendarVisible] = useState<boolean>(false);

    const [typeArr, setTypeArr] = useState([{ id: "A", title: "동행" }, { id: "B", title: "교육" }]);

    const kindArr = [{ id: "1", title: "안내보행" }, { id: "2", title: "문화체험" }, { id: "3", title: "여가활동" }]
    const { id: actUid } = useParams(); //활동UID
    const { user } = useUserState();
    const [loading, setLoading] = useState<boolean>(false);

    const locationState = location.state; //이용자로 신청하기 위한 파라미터
    // console.log(locationState);
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

    useEffect(() => {
        if (user.memUseType === 'U') {
            setTypeArr([{ id: "A", title: "동행" }]);
        }
        setActivityData(data);
        // return () => {
        //     setActivityData(data)
        // }
    }, [data]);

    useEffect(() => {
        console.log('activityData === ', activityData);
    }, [activityData]);

    const postActivity = useMutation(activityApi.putActivity, {
        onMutate: (variable) => {
            setLoading(true);
        },
        onError: (error, variable, context) => {
            console.log("error", error, variable, context);
            alert('활동 수정이 실패되었습니다. 잠시후 다시 시도해주세요.')
            return
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {
            alert('활동 수정 완료되었습니다.');
            console.log(statusCode, data);
            //완료페이지가 없어서 우선 홈으로 보냄.
            //navigate(-1 , {replace: true, state: {...locationState, modify: true}});
            //navigate(`activity/${actUid}`, {relative: 'path', replace: true, state: {...locationState, modify: true}});
            navigate(-1);
            //navigate(`/`, {relative: 'path',replace: true, state: {...locationState, modify: true}});

        },
        onSettled: (data: any) => {
            setLoading(false);
        },
    });

    const onClickHandler = () => {

        if (!activityData.actType) {
            alert('분류를 선택해주세요.');
            return;
        }

        if (!activityData.actName) {
            alert('활동명을 입력해주세요.');
            return;
        }

        if (!activityData.actStartPoint) {
            alert('시작지점을 입력해주세요');
            return;
        }

        if (!activityData.actEndPoint) {
            alert('종료지점을 입력해주세요');
            return;
        }

        if (!activityData.actStartDate) {
            alert('시작시간을 입력해주세요');
            return;
        }

        if (!activityData.actEndDate) {
            alert('종료시간을 입력해주세요');
            return;
        }

        if (!activityData.actDec) {
            alert('상세정보를 입력해주세요');
            return;
        }

        // 날짜 타입 변환
        const startDateTime = formatDate(activityData.actStartDate || '', 'YYYY-MM-DD HH:mm');
        const endDateTime = formatDate(activityData.actEndDate || '', 'YYYY-MM-DD HH:mm');

        const actTime2 = betweenTime(startDateTime, endDateTime);
        const actStat = activityData.actStat;

        let param = {
            ...activityData
            , actTime: actTime2
            , actStartDate: startDateTime
            , actEndDate: endDateTime
            , actStat: actStat === 'R' ? 'A' : actStat
        };
        postActivity.mutate(param);
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, length: number, name: string) => {

        const newValue = e.target.value;
        // console.log(1111, e, length, name, getByteSize(newValue))
        if (getByteSize(newValue) <= length) {
            // console.log(111)
            setActivityData({ ...activityData, [`${name}`]: newValue })
        }
        return
    };

    const getByteSize = (str: string) => {
        return new Blob([str]).size;
    };

    return (
        <>
            <Loading isLoading={loading} />
            <div id="container" className="memberCase" style={{ backgroundColor: '#ffffff' }}>
                <section>
                    <h1 style={{ color: '#000' }}>활동등록<span style={{ color: '#000' }}>2단계 : 정보 등록</span></h1>
                    <div className="listSorting">
                        <dl>
                            <dt style={{ color: '#000' }}>분류</dt>
                            <div className="line1">
                                {typeArr.map((t: any, idx: any) =>

                                    <span className="radioSet" key={`type${idx}`}>
                                        <input type="radio" name="radio2" defaultValue={t.id} checked={t.id === activityData.actType} onChange={() => setActivityData({ ...activityData, actType: t.id })} />
                                        <label htmlFor="">{t.title}</label>
                                    </span>


                                )}
                            </div>
                        </dl>
                        {/* <dl>
                                    <dt>활동내용</dt>
                                    <dd className="activityCol">
                                        {kindArr.map((k:any,idx:any)=>
                                        <span className="radioSet" key={`kind${idx}`}>
                                            <input type="radio" name="radio3" checked={kind=== k.id} onChange={()=>setKind(k.id)}/>
                                            <label htmlFor="">{k.title}</label>
                                        </span>
                                        )}
                                    </dd>
                                </dl> */}
                    </div>
                    <div className="joinInfo">
                        <div>
                            <input type="text" placeholder="활동명을 입력해주세요" value={activityData.actName} onChange={(e) => handleInputChange(e, 20, 'actName')} />
                            <input type="text" placeholder="시작지점을 입력해주세요" value={activityData.actStartPoint} onChange={(e) => handleInputChange(e, 30, 'actStartPoint')} />
                            <input type="text" placeholder="종료지점을 입력해주세요" value={activityData.actEndPoint} onChange={(e) => handleInputChange(e, 30, 'actEndPoint')} />
                        </div>
                        <div style={{ display: 'flex', gap: 5 }}>
                            <DatePicker
                                locale={ko}
                                selected={new Date(`${activityData.actStartDate}`)}
                                showTimeSelect
                                onChange={(date) => setActivityData({ ...activityData, actStartDate: date || new Date() })}
                                minDate={new Date()} // minDate 이전 날짜 선택 불가
                                maxDate={new Date(`${activityData.actEndDate}`)}
                                timeFormat="HH:mm"
                                timeIntervals={60}
                                dateFormat="yyyy년 MM월 dd일 HH시"
                            />
                            {/* <input type="text" style={{backgroundColor:'#FCD3E8'}} placeholder="시작일자를 입력해주세요" value={formatDate(activityData.actStartDate, 'YYYYMMDD')} onChange={(e)=>setActivityData({...activityData,actStartDate:e.target.value})}/> */}
                            <img className="header-logo" src={`${process.env.PUBLIC_URL}/assets/images/ic_cal.svg`} onClick={() => setCalendarVisible(true)} />
                        </div>
                        <div style={{ display: 'flex', gap: 5 }}>
                            <DatePicker
                                locale={ko}
                                selected={new Date(`${activityData.actEndDate}`)}
                                showTimeSelect
                                onChange={(date) => {
                                    setActivityData({ ...activityData, actEndDate: date || new Date() })
                                }}
                                minDate={new Date(`${activityData.actStartDate}`)}
                                timeFormat="HH:mm"
                                timeIntervals={60}
                                dateFormat="yyyy년 MM월 dd일 HH시"
                            />
                            <img className="header-logo" src={`${process.env.PUBLIC_URL}/assets/images/ic_cal.svg`} onClick={() => setCalendarVisible(true)} />
                        </div>
                        <div>
                            {/* <input type="number" placeholder="소요시간 입력해주세요" defaultValue={activityData.actTime} onChange={(e)=>setActivityData({...activityData,actTime:e.target.value})}/> */}
                            <input type="text" placeholder="상세정보를 입력해주세요" value={activityData.actDec} onChange={(e) => handleInputChange(e, 500, 'actDec')} />
                            {/* <input type="text" placeholder="오픈채팅방 주소를 입력해주세요" defaultValue={activityData.actOpenChat} onChange={(e)=>setActivityData({...activityData,actOpenChat:e.target.value})}/> */}
                        </div>
                    </div>
                    {/* {
                                calendarVisible && <Calendar selectedDate={new Date()} onSelectDate={(date:Date) => onSelectCalendar(date)}/>
                            } */}

                    <Link to={'#'} className="btnL" style={{ marginTop: 20 }} onClick={() => onClickHandler()}>수정하기</Link>
                    {/* <button  className="btnL" style={{marginTop: 20}} onClick={() => navigate(-1)} >뒤로가기</button> */}
                </section>
            </div>
        </>

    )
}


export default ActivityModify;
