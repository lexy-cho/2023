import { useQuery } from "@tanstack/react-query";
import { useUserState } from "UserContext";
import DefaultFooter from "containers/DefaultFooter";
import DefaultHeader from "containers/DefaultHeader";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import styled from "styled-components";
import settingApi from "utils/api/settingApi";
import { formatDate } from "utils/format";

function News() {
    const navigate = useNavigate();

    /**
     * TODO: 로그인 user정보
     * context or session or Redux(Recoil)
     */
    const { user } = useUserState();

    const getNewsList = async (): Promise<any> => {
        const params = { startRow: 0, pageCnt: 10 };
        try {
            const response: any = await settingApi.getNewsList(params);
            if (response.statusCode === 200) {
                return { list: response.data.list };
            }
        } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch data");
        }
    };

    const { data, isLoading, isError, refetch } = useQuery<{ list: any }>(["getNewsList"], getNewsList, { enabled: !!user?.memUid, cacheTime: 0 });
    const newsList = data?.list;

    return (
        <>
            <DefaultHeader title={'뉴스'} headType={'sub'} />
            <div id="container">
                <section>
                    <div className="contents">
                        <div className="newsList">
                            <ul>
                                {newsList.length > 0 ? newsList?.map((el: any, idx: number) => (
                                    <li key={el.newsUid || idx}>
                                        <Link to={`/news/${el.newsUid}`}>
                                            <strong>{el?.newsSubject}</strong>
                                            <em>{formatDate(el.regDate, 'YYYY-MM-DD HH:mm:ss')}</em>
                                        </Link>
                                    </li>
                                ))
                                    :
                                    <li className="noneList">
                                        <span>뉴스정보가 없습니다.</span>
                                    </li>
                                }

                            </ul>
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

export default News;
