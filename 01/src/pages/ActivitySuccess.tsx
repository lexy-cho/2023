import { useQuery } from "@tanstack/react-query";
import { useUserState } from "UserContext";
import parse from "html-react-parser";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import activityApi from "utils/api/activityApi";
import { formatDate } from "utils/format";

function ActivitySuccess() {


    const navigate = useNavigate();
    const location = useLocation();
    const { id: actUid } = useParams(); //활동UID
    const reqDesc = location.state?.reqDesc;
    const actPrice = location.state?.actPrice;
    const { user } = useUserState();


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

    //activity info
    const { data, isLoading, isError, refetch } = useQuery<any>(["getActivity"], getActivity, { enabled: !!actUid, cacheTime: 0 });

    return (
        <>
            <div id="container">
                <section>
                    <div className="contents">
                        <div className="viewArea">
                            <div className="applyOk">
                                <p>
                                    신청이 <br />완료되었습니다.
                                </p>
                            </div>

                            <div className="infoArea">
                                <dl><dt>활동번호</dt><dd>{`A${data?.actUid}`}</dd></dl>
                                <dl><dt>시작일시</dt><dd>{formatDate(data?.actStartDate, 'YYYY년 MM월 DD일')}</dd></dl>
                                <dl><dt>시작지점</dt><dd>{data?.actStartPoint}</dd></dl>
                                <dl><dt>종료일시</dt><dd>{formatDate(data?.actEndDate, 'YYYY년 MM월 DD일')}</dd></dl>
                                <dl><dt>종료지점</dt><dd>{data?.actEndPoint}</dd></dl>
                                <dl className="line">
                                    <dt>상세정보</dt>
                                    {/* <dd>{data.actDec}</dd> */}
                                    <dd style={{ whiteSpace: 'pre-wrap' }}>{parse(`${data?.actDec}`)}</dd>
                                </dl>
                                <dl className="line">
                                    <dt>요청사항</dt>
                                    <dd>{reqDesc}</dd>
                                </dl>
                            </div>

                            <div className="viewBtn">
                                <button className="btnG" onClick={() => navigate('/myPage')}>마이서로로 이동</button>
                                <button className="btnM" onClick={() => navigate('/')}>홈으로 이동</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )

}


export default ActivitySuccess;