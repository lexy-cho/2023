import { useQuery } from "@tanstack/react-query";
import DefaultFooter from "containers/DefaultFooter";
import DefaultHeader from "containers/DefaultHeader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mainApi } from "utils/api";
import { convActStat } from "utils/conversion";
import { formatDate, withCommas } from "utils/format";


function PreviewActivityList() {
    const navigate = useNavigate();
    const [actType, setActType] = useState({ id: "", title: "전체" })
    const [actStat, setActStat] = useState({ id: "", title: "전체" })
    const typeArr = [{ id: "", title: "전체" }, { id: "A", title: "동행" }, { id: "B", title: "교육" },]
    const statArr = [{ id: "", title: "전체" }, { id: "B", title: "진행중" }, { id: "C", title: "모집마감" }, { id: "C", title: "마감" },]

    const getActivityList = async (): Promise<any> => {
        // const params = {startRow:0, pageCnt:10, actStat:'A', actType:'A'};
        const params = { actType: actType.id, actStat: actStat.id };
        try {
            const response: any = await mainApi.getActivityList(params);
            if (response.statusCode === 200) {
                return { cnt: response.data.cnt, list: response.data.list };
            }
        } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch data");
        }
    };

    const { data, isLoading, isError, refetch } = useQuery<{ cnt: Number, list: any }>(["getActivityList", actType, actStat], getActivityList, { enabled: !false, cacheTime: 0, suspense:false }); 
    // const { data, isLoading, isError, refetch } = useQuery<{ cnt: Number, list: any }>(["getActivityList", actType, actStat], getActivityList, { enabled: !false, cacheTime: 0 }); 
    const actList = data?.list;

    /* 상세로 이동 */
    const handleActList = (el: any) => navigate(`/p/activity/${el.actUid}`);

    return (
        <>
            <DefaultHeader title={'발견하기'} headType={'sub'} tailType={"all"} />
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
                </section>
            </div>
            <DefaultFooter />
        </>

    );
}

export default PreviewActivityList;
