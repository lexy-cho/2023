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
import { convActType } from "utils/conversion";
import { formatDate, withCommas } from "utils/format";

function VoucherHistory() {
    const navigate = useNavigate();
    const { user } = useUserState();
    const [voucherUseList, setVoucherUseList] = useState<VoucherDTO[]>([]);
    const [page, setPage] = useState<PageDTO>({
        currentPage: 1,
        itemsPerPage: 10,
        totalCnt: 0,
        row: 0,
    });

    const getVoucherUseList = async (page: PageDTO): Promise<any> => {
        const params = { startRow: page.row * page.itemsPerPage, pageCnt: page.itemsPerPage, memUid: user?.memUid };
        try {
            const response: any = await settingApi.getVoucherUseList(params);
            if (response.statusCode === 200) {
                const { list, cnt } = response.data;
                return { list: list, cnt: cnt };
            }
        } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch data");
        }
    };

    const { data, isLoading, isFetching, isError, refetch } = useQuery<{ list: any, cnt: number }>(["getVoucherUseList", page], () => getVoucherUseList(page), { enabled: !!user?.memUid, cacheTime: 0, suspense: false });
    const totalCnt = data?.cnt;
    const remainPage = Math.floor((((totalCnt || 0) - ((page.row + 1) * page.itemsPerPage)) / page.itemsPerPage) + 1);
    // console.log("voucherUserList", data);

    const handleMore = () => {
        setPage((prevPage) => ({ ...prevPage, row: prevPage.row + 1 }));
    }

    useEffect(() => {
        if (data) setVoucherUseList((prevList: any) => ([...prevList, ...data?.list]))
    }, [data])

    return (
        <>
            <DefaultHeader title={'바우처관리'} headType={'sub'} />
            <div id="container">
                <section>
                    <div className="contents">
                        <nav>
                            <div className="voucherlistKind">
                                <Link to="/voucher" replace={true}>바우처 정보 <em>현재 목록</em></Link>
                                <Link className="on" to="#">바우처 사용내역</Link>
                            </div>
                        </nav>
                        <div className="voucherList">
                            <h2>바우처 사용내역</h2>
                            <span className="listNum">총 {voucherUseList?.length}건</span>
                            <ul className="myInfoList">
                                {voucherUseList?.length > 0 ? voucherUseList?.map((el: any, idx: number) => (
                                    <li key={`${el.vouUid}_use_${idx}` || idx}>
                                        <strong>[{convActType(el.actType)}] {el?.actName}</strong>
                                        <i>사용금액 : </i>{withCommas(el?.vouPay)} | {el?.memName} <br /><i>바우처명 : </i>{el?.vouName}
                                        <em>{formatDate(el?.regDate, 'YYYY년 MM월 DD일 HH시 mm분 ss초')}</em>
                                    </li>
                                ))
                                    :
                                    <li className="noneList">
                                        <span>바우처 사용 정보가 없습니다.</span>
                                    </li>
                                }
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

export default VoucherHistory;
