import { useQuery } from "@tanstack/react-query";
import DefaultFooter from "containers/DefaultFooter";
import DefaultHeader from "containers/DefaultHeader";
import { useEffect, useState } from "react";
import { useNavigate, Link, useLocation, redirect } from "react-router-dom";
import activityApi from "utils/api/activityApi";
import { convActStat } from "utils/conversion";
import { formatDate, withCommas } from "utils/format";
import { getUserInfo, setUserInfo } from 'utils/store';
import { useUserDispatch, useUserState } from "UserContext";
import { usePreviousPage } from "PreviousContext";
import Loading from "component/Loading";


function ActivityList() {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useUserState();
    let userInfo = getUserInfo()
    // const [visible, setVisible] = useState<boolean>(false)
    // const [kind, setKind] = useState({ id: "A", title: "" })
    const [actType, setActType] = useState(location.state?.actType || { id: "", title: "전체" })
    const [actStat, setActStat] = useState(location.state?.actStat || { id: "", title: "전체" })
    const typeArr = [{ id: "", title: "전체" }, { id: "A", title: "동행" }, { id: "B", title: "교육" },]
    // const kindArr = [{ id: "B", title: "시각" }, { id: "C", title: "청각" }, { id: "D", title: "지체" }, { id: "E", title: "감각" }, { id: "E", title: "정신" }, { id: "F", title: "복합" },]
    const statArr = [{ id: "", title: "전체" }, { id: "B", title: "진행중" }, { id: "C", title: "모집마감" }, { id: "C", title: "마감" },]

    //const [type, setType] = useState<string>('U');
    const [prevType, setPrevType] = useState<string>(userInfo?.userType || 'U');
    const [popUpVisible, setPopUpVisivle] = useState<boolean>(false)
    const dispatch = useUserDispatch(); //23.11.5 로그인 시 context에 추가

    const { navigateWithPrevious } = usePreviousPage();

    const getActivityList = async (): Promise<any> => {
        // const params = {startRow:0, pageCnt:10, actStat:'A', actType:'A'};
        const params = { actType: actType.id, actStat: actStat.id };
        try {
            const response: any = await activityApi.getActivityList(params);
            if (response.statusCode === 200) {
                return { cnt: response.data.cnt, list: response.data.list };
            }
        } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch data");
        }
    };

    const { data, isLoading, isError, refetch } = useQuery<{ cnt: Number, list: any }>(["getActivityList", actType, actStat], getActivityList, { enabled: !!userInfo, cacheTime: 0, suspense:false }); 
    // const { data, isLoading, isError, refetch } = useQuery<{ cnt: Number, list: any }>(["getActivityList", actType, actStat], getActivityList, { enabled: !false, cacheTime: 0 }); 
    const actList = data?.list;

    const handleActList = (el: any) => {
        // navigate(`/activity/${el.actUid}`);
        navigate(`/activity/${el.actUid}`, {state:{actType, actStat}});
        navigateWithPrevious(`/activity/${el.actUid}`, {state:{actType, actStat}});
    }

    const handleType = async () => {
        setPopUpVisivle(false);
        //setType(prevType);
        await chgUser();
        // console.log(userInfo);
    }

    const chgUser = async () => {
        const chgUserData = { ...userInfo, userType: prevType };
        await setUserInfo(chgUserData);
        await dispatch({ type: 'LOGIN', user: chgUserData }); //23.11.5 로그인 시 context에 추가
        userInfo = getUserInfo()
    }

    return (
        <>
            <DefaultHeader title={'발견하기'} headType={'sub'} tailType={"all"} />
            <Loading isLoading={isLoading} />
            <div id="container">
                <section>
                    <div className="contents">
                        <fieldset className="listSorting">
                            <legend>활동 목록을 정렬하는 영역으로 기본 선택은 동행 활동 전체 입니다. 검색 선택 없이 목록으로 바로 이동하시려면 다음버튼을 눌러주세요. <button>목록으로 바로가기</button></legend>
                            <div className="line1">
                                {typeArr.map((t: any, idx: number) =>
                                    <span className="radioSet" key={idx}>
                                        <input type="radio" name="radio1" checked={actType.title === t.title} onChange={() => setActType(t)} />
                                        <label htmlFor="">{t.title}</label>
                                    </span>
                                )}
                            </div>
                            <div className="line2">
                                {statArr.map((t: any, idx: number) =>
                                    <span className="radioSet" key={idx}>
                                        <input type="radio" name="radio2" checked={actStat.title === t.title} onChange={() => setActStat(t)} />
                                        <label htmlFor="">{t.title}</label>
                                    </span>
                                )}
                            </div>
                            {/* 2023.11.10 협의후 주석처리 */}
                            {/* 이용자 장애정도 정보 있는 경우 */}
                            {/* {(userInfo?.memberNormalVO) && <button className="userKindMore">시각/심함 (수정하기)</button>} */}
                            {/* 이용자 장애정도 정보 없거나, 수정일 경우 */}
                            {/* <div className="sortingDetail">
                                {visible &&
                                    <>
                                        <dl>
                                            <dt>장애여부</dt>
                                            <dd className="col6">
                                                {kindArr.map((t: any, idx: number) =>
                                                    <span className="radioSet" key={idx}>
                                                        <input type="radio" name="radio3" checked={kind.title === t.title} onChange={() => setKind(t)} />
                                                        <label htmlFor="">{t.title}</label>
                                                    </span>
                                                )}
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>장애정도</dt>
                                            <dd>
                                                <span className="radioSet">
                                                    <input type="radio" name="radio4" />
                                                    <label htmlFor="">심함</label>
                                                </span>
                                                <span className="radioSet">
                                                    <input type="radio" name="radio4" />
                                                    <label htmlFor="">심하지 않음</label>
                                                </span>
                                            </dd>
                                        </dl>
                                    </>
                                }
                                <button className={visible ? "sortingEtc" : "sortingEtc open"} onClick={() => setVisible(!visible)}> 
                                    {visible ? '접기' : '열기'}
                                </button>
                            </div> */}
                            {/* end 이용자 장애정도 정보 없거나, 수정일 경우 */}
                        </fieldset>
                        <ul className="list">
                            {
                                actList?.map((el: any, idx: number) => (
                                    <li title={`${el.actName} 활동상세 화면으로 이동`} key={el?.actUid || idx} onClick={() => handleActList(el)}>
                                        <span className="img">
                                            <span>
                                                <img src={`${el.mfileUrl ? process.env.REACT_APP_FILE_URL + el?.mfileUrl : process.env.PUBLIC_URL + '/assets/images/ic_logo_pink.svg'}`} alt={el.mfileDesc ? el.mfileDesc : ''} />
                                            </span>
                                        </span>
                                        <div>
                                            <strong>{el.actName}</strong>
                                            <span className="date">
                                                {formatDate(el.actStartDate, 'YYYY년 MM월 DD일 HH시')}부터<br />{formatDate(el.actEndDate, 'YYYY년 MM월 DD일 HH시')}까지<br />({el.actTime}시간)
                                            </span>
                                            <span className="price">{el.actPrice ? withCommas(el.actPrice) : '무료'}</span>
                                        </div>
                                        <em className={el.actStat === 'C' ? "icS close" : "icS"}>{convActStat(el.actStat)}</em>
                                    </li>
                                ))
                            }
                            {
                                (actList?.length === 0) && <li>활동이 없습니다.</li>
                            }
                            {/* end Loop */}
                        </ul>
                        <span className="addArea">
                            <span className="userKind">
                                <span className="radioSet">
                                    <input type="radio" name="radio5" value={'U'} onChange={() => setPopUpVisivle(true)} checked={userInfo?.userType === 'U' ? true : false} />
                                    <label htmlFor="">이용자</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" name="radio5" value={'O'} onChange={() => setPopUpVisivle(true)} checked={userInfo?.userType === 'O' ? true : false} />
                                    <label htmlFor="">제공자</label>
                                </span>
                            </span>
                            <Link to={'/activityWrite1'} className="goRecord">활동등록 하러가기</Link>
                        </span>
                    </div>
                    {/* <div className="copy">
                    <span>유니마인드랩 주식회사 · 대표이사 : 최우주 · 사업자등록번호 : 461-81-02935</span>
                    <span>주소 : 서울시 성동구 광나루로 286 8층 (소셜캠퍼스온 서울1)</span>
                    <span>전화 : 070-7014-0304 · 이메일 : uni@unimindlab.com</span>
                    <span>ⓒ 2022 UNIMIND LAB Inc.</span>
                </div> */}
                </section>
                {popUpVisible &&
                    <div className="popDim">
                        <div className="basicPop">
                            <div className="pBack">
                                <strong className="pTit">이용자-제공자 전환</strong>
                                <p>
                                    서로이용자는 교육 및 동행을 이용하는 고객입니다. <br />
                                    서로제공자는 교육 및 동행을 제공하는 고객입니다.
                                </p>
                                <div className="pChangeChoice">
                                    <span className="radioSet">
                                        <input type="radio" name="radioA" value={'U'} onChange={(e) => setPrevType(e.target.value)} checked={prevType === 'U' ? true : false} />
                                        <label htmlFor="">이용자</label>
                                    </span>
                                    <span className="radioSet">
                                        <input type="radio" name="radioA" value={'O'} onChange={(e) => setPrevType(e.target.value)} checked={prevType === 'O' ? true : false} />
                                        <label htmlFor="">제공자</label>
                                    </span>
                                </div>
                            </div>
                            <div className="pBtn">
                                <Link to={'#'} className="btnG" onClick={() => handleType()}>확인</Link>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <DefaultFooter />
        </>

    );
}

export default ActivityList;
