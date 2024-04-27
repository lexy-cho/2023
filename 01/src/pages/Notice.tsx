import { useQuery } from "@tanstack/react-query";
import { useUserState } from "UserContext";
import DefaultFooter from "containers/DefaultFooter";
import DefaultHeader from "containers/DefaultHeader";
import { useNavigate } from "react-router-dom";
import settingApi from "utils/api/settingApi";
import { formatDate } from "utils/format";
import parse from "html-react-parser";

function Notice() {
    const navigate = useNavigate();
    const { user } = useUserState();

    const getNotiList = async (): Promise<any> => {
        const params = { memUid: user?.memUid };
        try {
            const response: any = await settingApi.getNotiList(params);
            if (response.statusCode === 200) {
                return { list: response.data.list };
            }
        } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch data");
        }
    };

    const { data, isLoading, isError, refetch } = useQuery<{ list: any }>(["getNotiList"], getNotiList, { enabled: !!user?.memUid, cacheTime: 0 });
    const notiList = data?.list;

    return (
        <>
            <DefaultHeader title={'알림'} headType={'sub'} tailType={'all'} />
            <div id="container">
                <section>
                    <div className="contents">
                        <div className="alarmList">
                            <ul>
                                {notiList.length > 0  ? notiList.map((el: any, idx: number) => (
                                    <li key={el.notiUid || idx} style={{ whiteSpace: 'pre-wrap' }}>
                                        <strong>{el?.notiTitle}</strong>
                                        {parse(`${el?.notiCont}`)}
                                        {/* <em>2023년 10월 10일 9시 12분 21초</em> */}
                                        <em>{formatDate(el?.regDate, 'YYYY-MM-DD HH:mm:ss')}</em>
                                    </li>
                                ))
                                    :
                                    <li className="noneList">
                                        <span>받은 알람이 없습니다.</span>
                                    </li>
                                }
                            </ul>
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

export default Notice;
