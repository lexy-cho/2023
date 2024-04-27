import { useQuery } from "@tanstack/react-query";
import { useUserState } from "UserContext";
import DefaultFooter from "containers/DefaultFooter";
import DefaultHeader from "containers/DefaultHeader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import activityApi from "utils/api/activityApi";
import { convActStat } from "utils/conversion";
import { formatDate, withCommas } from "utils/format";
import { getUserInfo } from 'utils/store';


function MyActivityList() {
    const navigate = useNavigate();
    const { user } = useUserState();
    let userInfo = getUserInfo()
    const [actType, setActType] = useState({ id: "", title: "전체" })
    const [actStat, setActStat] = useState({ id: "", title: "전체" })
    const typeArr = [{ id: "", title: "전체" }, { id: "A", title: "동행" }, { id: "B", title: "교육" },]
    const statArr = [{ id: "", title: "전체" }, { id: "A", title: "대기" }, { id: "B", title: "진행중" }, { id: "C", title: "마감" }, { id: "R", title: "거절" }, { id: "F", title: "취소" }, ]

    const getMyActivityList = async (): Promise<any> => {
        const params = { actType: actType.id, actStat: actStat.id, memUid: user.memUid };
        try {
            const response: any = await activityApi.getMyActivityList(params);
            if (response.statusCode === 200) {
                return { cnt: response.data.cnt, list: response.data.list };
            }
        } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch data");
        }
    };

    const { data, isLoading, isError, refetch } = useQuery<{ cnt: Number, list: any }>(["getMyActivityList", actType, actStat], getMyActivityList, { enabled: !!userInfo, cacheTime: 0, suspense: false });
    // const { data, isLoading, isError, refetch } = useQuery<{ cnt: Number, list: any }>(["getActivityList", actType, actStat], getActivityList, { enabled: !false, cacheTime: 0 }); 
    const actList = data?.list;

    const handleActList = (el: any) => {
        navigate(`/activity/${el.actUid}`);
    }

    return (
        <>
            <DefaultHeader title={'마이활동'} headType={'sub'} />
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

export default MyActivityList;
