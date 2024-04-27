import { useState, useEffect, ChangeEvent } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Calendar from 'component/Calendar';
import { useUserState } from "UserContext";
import { useMutation } from "@tanstack/react-query";
import activityApi from "utils/api/activityApi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { betweenTime, formatDate } from 'utils/format';
import Loading from "component/Loading";

interface ActivityData {
    actName: string;
    actStartPoint: string;
    actEndPoint: string;
    actStartDate: Date | null | undefined;
    actEndDate: Date | null | undefined;
    actDec: string;
    actOpenChat: string;
    actType: string;
    actStat: string;
    actPrice?: number | undefined;
    actTime?: number;
}


function ActivityWrite2() {
    const navigate = useNavigate();
    const location = useLocation()
    //const regType = location.state?.regType
    const { regType } = useParams(); //활동UID
    const [visible, setVisible] = useState<boolean>(false);
    const [calendarVisible, setCalendarVisible] = useState<boolean>(false);
    const [calendarType, setCalendarType] = useState<string>('start');
    const [activityData, setActivityData] = useState<ActivityData>({ actName: '', actStartPoint: '', actEndPoint: '', actStartDate: null, actEndDate: null, actDec: '', actOpenChat: '', actType: '', actStat: 'A' })
    const [type, setType] = useState<string>('');
    const [kind, setKind] = useState<string>('');
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState('');
    const [loading, setLoading] = useState<boolean>(false);

    //const typeArr = [{id:"A",title:"동행"},{id:"B",title:"교육"}]
    const [typeArr, setTypeArr] = useState([{ id: "A", title: "동행" }, { id: "B", title: "교육" }]);
    const kindArr = [{ id: "1", title: "안내보행" }, { id: "2", title: "문화체험" }, { id: "3", title: "여가활동" }]

    const data = location.state?.data;
    // console.log(data);



    const { user } = useUserState();
    // console.log(user);


    const onClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        // console.log(activityData);
        event.preventDefault();

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
        const startDateTime = formatDate(activityData.actStartDate, 'YYYY-MM-DD HH:mm');
        const endDateTime = formatDate(activityData.actEndDate, 'YYYY-MM-DD HH:mm');

        const actTime2 = betweenTime(startDateTime, endDateTime);
        // console.log(actTime2);


        // type 추가
        let param = { ...activityData, type: regType, memUid: user.memUid, actTime: actTime2, actStartDate: startDateTime, actEndDate: endDateTime };
        //navigate('', {state : {data : param}})
        // console.log(param);
        console.log(regType);
        if (regType === 'O') {
            navigate('/activityPhoto', { state: { data: JSON.stringify(param) } });
        } else {
            postActivity.mutate(param);
        }

    }

    const postActivity = useMutation(activityApi.postActivity, {
        onMutate: (variable) => {
            setLoading(true);
        },
        onError: (error, variable, context) => {
            console.log("error", error, variable, context);
            alert('활동 등록이 실패되었습니다. 잠시후 다시 시도해주세요.')
            return
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {
            alert('활동 등록이 완료되었습니다.');
            console.log(statusCode, data);
            //완료페이지가 없어서 우선 홈으로 보냄.
            navigate('/activityRegEnd');
        },
        onSettled: (data: any) => {
            setLoading(false);
        },
    });

    useEffect(() => {
        if (user.memUseType === 'U') {
            setTypeArr([{ id: "A", title: "동행" }]);
        }
    }, []);


    const onSelectCalendar = (date: Date) => {
        // console.log(onSelectCalendar);
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, length: number, name: string) => {
        const newValue = e.target.value;
        if (getByteSize(newValue) <= length) {
            setActivityData({ ...activityData, [`${name}`]: newValue })
        }
    };

    const getByteSize = (str: string) => {
        return new Blob([str]).size;
    };

    return (
        <>
            <Loading isLoading={loading} />
            <div id="container" className="memberCase">
                <section>
                    <h1>활동등록<span>2단계 : 정보 등록(총 2단계)</span></h1>
                    <div className="listSorting">
                        <dl>
                            <dt>분류</dt>
                            <div className="line1">
                                {typeArr.map((t: any, idx: any) =>
                                    <span className="radioSet" key={`type${idx}`}>
                                        <input type="radio" name="radio2" value={t.id} onChange={() => setActivityData({ ...activityData, actType: t.id })} />
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
                            {/* <input type="text" placeholder="활동명을 입력해주세요" value={activityData.actName} onChange={(e) => setActivityData({ ...activityData, actName: e.target.value })} />
                                    <input type="text" placeholder="시작지점을 입력해주세요" value={activityData.actStartPoint} onChange={(e) => setActivityData({ ...activityData, actStartPoint: e.target.value })} /> 
                                    <input type="text" placeholder="종료지점을 입력해주세요" value={activityData.actEndPoint} onChange={(e) => setActivityData({ ...activityData, actEndPoint: e.target.value })} />  */}
                            <input type="text" placeholder="활동명을 입력해주세요" value={activityData.actName} onChange={(e) => handleInputChange(e, 20, 'actName')} />
                            <input type="text" placeholder="시작지점을 입력해주세요" value={activityData.actStartPoint} onChange={(e) => handleInputChange(e, 30, 'actStartPoint')} />
                            <input type="text" placeholder="종료지점을 입력해주세요" value={activityData.actEndPoint} onChange={(e) => handleInputChange(e, 30, 'actEndPoint')} />
                        </div>
                        <div style={{ display: 'flex', gap: 5 }}>
                            {/* <input type="text" style={{backgroundColor:'#FCD3E8'}} placeholder="시작시간을 입력해주세요" defaultValue={activityData.actStartDate} onChange={(e)=>setActivityData({...activityData,actStartDate:e.target.value})}/> */}
                            <DatePicker
                                locale={ko}
                                selected={activityData.actStartDate}
                                showTimeSelect
                                onChange={(date) => setActivityData({ ...activityData, actStartDate: date || new Date() })}
                                minDate={new Date()} // minDate 이전 날짜 선택 불가
                                maxDate={activityData.actEndDate ? activityData.actEndDate : null}
                                timeFormat="HH:mm"
                                timeIntervals={60}
                                dateFormat="yyyy년 MM월 dd일 HH시"
                                placeholderText="시작일시를 선택해주세요"
                            />
                            <img className="header-logo" src={`${process.env.PUBLIC_URL}/assets/images/ic_cal_white.svg`} onClick={() => setCalendarVisible(true)} />
                        </div>
                        <div style={{ display: 'flex', gap: 5 }}>
                            {/* <input type="text" style={{backgroundColor:'#FCD3E8'}} placeholder="종료시간을 입력해주세요" defaultValue={activityData.actEndDate} onChange={(e)=>setActivityData({...activityData,actEndDate:e.target.value})}/> */}
                            <DatePicker
                                locale={ko}
                                selected={activityData.actEndDate}
                                showTimeSelect
                                onChange={(date) => {
                                    setActivityData({ ...activityData, actEndDate: date || new Date() })
                                }}
                                minDate={activityData.actStartDate ? activityData.actStartDate : new Date()} // minDate 이전 날짜 선택 불가
                                timeFormat="HH:mm"
                                timeIntervals={60}
                                dateFormat="yyyy년 MM월 dd일 HH시"
                                placeholderText="종료일시를 선택해주세요"
                            />
                            <img className="header-logo" src={`${process.env.PUBLIC_URL}/assets/images/ic_cal_white.svg`} onClick={() => setCalendarVisible(true)} />
                        </div>
                        <div>
                            {/* <input type="number" placeholder="금액을 입력해주세요" value={activityData.actPrice} onChange={(e)=>setActivityData({...activityData,actPrice:Number(e.target.value)})}/> */}
                            {/* <input type="text" placeholder="상세정보를 입력해주세요" value={activityData.actDec} onChange={(e)=>setActivityData({...activityData,actDec:e.target.value})}/> */}
                            <input type="text" placeholder="상세정보를 입력해주세요" value={activityData.actDec} onChange={(e) => handleInputChange(e, 500, 'actDec')} />
                            {/* <input type="text" placeholder="오픈채팅방 주소를 입력해주세요" value={activityData.actOpenChat} onChange={(e)=>setActivityData({...activityData,actOpenChat:e.target.value})}/> */}
                        </div>
                    </div>
                    {/* {
                                calendarVisible && <Calendar selectedDate={new Date()} onSelectDate={(date:Date) => onSelectCalendar(date)}/>
                            } */}

                    {/* <button  className="btnL" style={{marginTop: 20}} onClick={() => onClickHandler()}>등록하기</button>
                    <button  className="btnL" style={{marginTop: 20}} onClick={() => navigate(-1)} >뒤로가기</button> */}
                    <Link to={'#'} className="btnL" style={{ marginTop: 20 }} onClick={onClickHandler}>등록하기</Link>
                    <Link to={'#'} className="btnL" style={{ marginTop: 20 }} onClick={() => navigate(-1)}>뒤로가기</Link>


                </section>
            </div>
        </>
    );
}

export default ActivityWrite2;
