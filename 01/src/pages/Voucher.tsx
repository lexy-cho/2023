import { useQuery } from "@tanstack/react-query";
import { useUserState } from "UserContext";
import DefaultFooter from "containers/DefaultFooter";
import DefaultHeader from "containers/DefaultHeader";
import PageDTO from "dto/PageDTO";
import VoucherDTO from "dto/VoucherDTO";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import settingApi from "utils/api/settingApi";
import { formatDate, withCommas } from "utils/format";

function Voucher() {
    const navigate = useNavigate();
    const { user } = useUserState();
    const [voucherList, setVoucherList] = useState<VoucherDTO[]>([]);
    const [page, setPage] = useState<PageDTO>({
        currentPage: 1,
        itemsPerPage: 10,
        totalCnt: 0,
        row: 0,
    });

    const getVoucherList = async (page: PageDTO): Promise<any> => {
        const params = { startRow: page.row * page.itemsPerPage, pageCnt: page.itemsPerPage, memUid: user?.memUid };
        try {
            const response: any = await settingApi.getVoucherList(params);
            // console.log(response)
            if (response.statusCode === 200) {
                const { list, cnt } = response.data;
                return { list: list, cnt: cnt };
            }
        } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch data");
        }
    };

    const { data, isLoading, isFetching, isError, refetch } = useQuery<{ list: any, cnt: number }>(["getVoucherList", page], () => getVoucherList(page), { enabled: !!user?.memUid, cacheTime: 0, suspense: false });
    const totalCnt = data?.cnt;
    const remainPage = Math.floor((((totalCnt || 0) - ((page.row + 1) * page.itemsPerPage)) / page.itemsPerPage) + 1);

    const handleMore = () => {
        setPage((prevPage) => ({ ...prevPage, row: prevPage.row + 1 }));
    }

    useEffect(() => {
        if (data) setVoucherList((prevList: any) => ([...prevList, ...data?.list]))
    }, [data])

    return (
        <>
            <DefaultHeader title={'바우처관리'} headType={'sub'} />
            <div id="container">
                <section>
                    <div className="contents">
                        <nav>
                            <div className="voucherlistKind">
                                {/* 선택된 페이지 일 경우 em 추가 */}
                                {/* <a href="" className="on">바우처 정보 <em>현재 목록</em></a>  
                            <a href="voucherHistory">바우처 사용내역</a> */}
                                <Link className="on" to="#">바우처 정보 <em>현재 목록</em></Link>
                                <Link to="/voucherHistory" replace={true}>바우처 사용내역</Link>
                            </div>
                        </nav>
                        <div className="voucherList">
                            <h2>바우처 정보</h2>
                            <span className="listNum">총 {voucherList?.length}건</span>
                            <ul className="myInfoList">
                                {voucherList?.length > 0 ? voucherList?.map((el: any, idx: number) => (
                                    <li key={`${el.vouUid}_${idx}` || idx}>
                                        <strong>{el?.vouName}</strong>
                                        <i>지원금액 : </i>{withCommas(el.vouStatPrice)} <br /><i>사용/잔여금액 : </i>{withCommas(el.useVouPay)} / {withCommas(el.vouStatPrice - el.useVouPay)}
                                        <em>{formatDate(el?.regDate, 'YYYY년 MM월 DD일 HH시 mm분 ss초')}</em>
                                    </li>
                                ))
                                    :
                                    <li className="noneList">
                                        <span>바우처 정보가 없습니다.</span>
                                    </li>
                                }
                                {/* <li>
                                <strong>성동구지원사업</strong>
                                <i>지원금액 : </i>100,000원 <br /><i>사용/잔여금액 : </i>50,000원 / 50,000원
                                <em>2023년 10월 10일 9시 12분 21초</em>
                            </li>
                            <li>
                                <strong>성동구지원사업</strong>
                                <i>지원금액 : </i>100,000원 <br /><i>사용/잔여금액 : </i>50,000원 / 50,000원
                                <em>2023년 10월 10일 9시 12분 21초</em>
                            </li> */}
                            </ul>
                        </div>
                        {remainPage > 0 && <Link to={'#'} className="btnM listMore" onClick={handleMore}>더보기</Link>}
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

export default Voucher;
