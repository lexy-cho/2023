import { useQuery } from "@tanstack/react-query";
import { useUserState } from "UserContext";
import DefaultFooter from "containers/DefaultFooter";
import DefaultHeader from "containers/DefaultHeader";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import settingApi from "utils/api/settingApi";
import { formatDate } from "utils/format";

function NewsView() {
    const navigate = useNavigate();
    const location = useLocation();
    const { id: newsUid } = useParams(); //뉴스UID

    const getNewsDetail = async (): Promise<any> => {
        const params = { newsUid };
        try {
            const response: any = await settingApi.getNewsDetail(params);
            if (response.statusCode === 200) {
                return response?.data;
            }
        } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch data");
        }
    };

    const { data, isLoading, isError, refetch } = useQuery<any>(["getNewsDetail"], getNewsDetail, { enabled: !!newsUid, cacheTime: 0 });
    return (
        <>
            <DefaultHeader title={'뉴스'} headType={'sub'} />
            <div id="container">
                <section>
                    <div className="contents">
                        <div className="newsView">
                            <dl>
                                <dt>
                                    <strong>{data?.newsSubject}</strong>
                                    <em>{formatDate(data?.regDate, 'YYYY-MM-DD HH:mm:ss')}</em>
                                </dt>
                                <dd dangerouslySetInnerHTML={{__html: String(parse(`${data.newsDesc}`)) }}></dd>
                            </dl>
                        </div>
                    </div>
                    {/* <div className="copy">
                        <span>유니마인드랩 주식회사 · 대표이사 : 최우주 · 사업자등록번호 : 461-81-02935</span>
                        <span>주소 : 서울시 성동구 광나루로 286 8층 (소셜캠퍼스온 서울1)</span>
                        <span>전화 : 070-7014-0304 · 이메일 : uni@unimindlab.com</span>
                        <span>ⓒ 2022 UNIMIND LAB Inc.</span>
                    </div> */}
                </section>
            </div>
            <DefaultFooter />
        </>

    );
}



export default NewsView;
