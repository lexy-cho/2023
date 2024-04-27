import { useQuery } from "@tanstack/react-query";
import { useUserState } from "UserContext";
import DefaultFooter from "containers/DefaultFooter";
import DefaultHeader from "containers/DefaultHeader";
import PageDTO from "dto/PageDTO";
import PayDTO from "dto/PayDTO";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import settingApi from "utils/api/settingApi";
import { convActType } from "utils/conversion";
import { formatDate, withCommas } from "utils/format";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

function Pay() {
    const navigate = useNavigate();
    const { user } = useUserState();
    const [payList, setPayList] = useState<PayDTO[]>([]);
    const [page, setPage] = useState<PageDTO>({
        currentPage: 1,
        itemsPerPage: 10,
        totalCnt: 0,
        row: 0,
    });
    const [startDate, setStartDate] = useState<any>(new Date());
    const [endDate, setEndDate] = useState<any>(new Date());

    const getPayList = async (page: PageDTO): Promise<any> => {
        const params = { startRow: page.row * page.itemsPerPage, pageCnt: page.itemsPerPage, memUid: user?.memUid, searchStartDate: formatDate(startDate, 'YYYYMMDD'), searchEndDate: formatDate(endDate, 'YYYYMMDD') };
        try {
            const response: any = await settingApi.getPayList(params);
            if (response.statusCode === 200) {
                const { list, cnt } = response.data;
                console.log(list);
                return { list: list, cnt: cnt };
            }
        } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch data");
        }
    };

    const { data, isLoading, isError, refetch } = useQuery<{ list: any, cnt: number }>(["getPayList", page, startDate, endDate], () => getPayList(page), { enabled: !!user?.memUid, cacheTime: 0, suspense: false });
    const totalCnt = data?.cnt;
    const remainPage = Math.floor((((totalCnt || 0) - ((page.row + 1) * page.itemsPerPage)) / page.itemsPerPage) + 1);

    const handleMore = () => {
        setPage((prevPage) => ({ ...prevPage, row: prevPage.row + 1 }));
    }

    const handleDate = (type:any) => {
        const now = new Date();
        if(type === 'today') {
            setStartDate(now);
        }else if(type === 'yesterday') {
            const date = new Date(now.setDate(now.getDate() - 1));
            setStartDate(date);
        }else if(type === '1w') {
            const date = new Date(now.setDate(now.getDate() - 7));
            setStartDate(date);
        }else if(type === '2w') {
            const date = new Date(now.setDate(now.getDate() - 14));
            setStartDate(date);
        }else if(type === 'm') {
            const date = new Date(now.getFullYear(), now.getMonth(), 1);
            setStartDate(date);
        }else if(type === '1m') {
            const date = new Date(now.setMonth(now.getMonth() - 1));
            setStartDate(date);
        }else if(type === '3m') {
            const date = new Date(now.setMonth(now.getMonth() - 3));
            setStartDate(date);
        }else if(type === '6m') {
            const date = new Date(now.setMonth(now.getMonth() - 6));
            setStartDate(date);
        }else if(type === 'y') {
            const date = new Date(now.setFullYear(now.getFullYear() - 1));
            setStartDate(date);
        }
    }

    useEffect(() => {
        if (data) setPayList((prevList: any) => ([...prevList, ...data?.list]))
    }, [data])

    return (
        <>
            <DefaultHeader title={'결제내역'} headType={'sub'} />
            <div id="container">
                <section>
                    <div className="contents">
                        <fieldset className="listSorting">
                            <legend>날짜검색 <button>검색없이 목록 바로가기</button></legend>
                            <div className="dateArea">
                                <DatePicker
                                    className="dateInput"
                                    locale={ko}
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    maxDate={endDate}
                                    dateFormat="yyyy-MM-dd"
                                />
                                <img className="calimg" src={`${process.env.PUBLIC_URL}/assets/images/ic_cal.svg`}/>
                                <img className="calimgDark" src={`${process.env.PUBLIC_URL}/assets/images/ic_cal_white.svg`}/>
                                <DatePicker
                                    className="dateInput"
                                    locale={ko}
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    minDate={startDate} // minDate 이전 날짜 선택 불가
                                    dateFormat="yyyy-MM-dd"
                                />
                                <img className="calimg" src={`${process.env.PUBLIC_URL}/assets/images/ic_cal.svg`}/>
                                <img className="calimgDark" src={`${process.env.PUBLIC_URL}/assets/images/ic_cal_white.svg`}/>
                            </div>
                            <div className="dateButton">
                                <span className="radioSet">
                                    <input type="radio" name="radio3" value={'today'} onChange={(e:any) => handleDate(e.target.value)}/>
                                    <label htmlFor="">오늘</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" name="radio3" value={'yesterday'} onChange={(e:any) => handleDate(e.target.value)}/>
                                    <label htmlFor="">어제</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" name="radio3" value={'1w'} onChange={(e:any) => handleDate(e.target.value)}/>
                                    <label htmlFor="">1주</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" name="radio3" value={'2w'} onChange={(e:any) => handleDate(e.target.value)}/>
                                    <label htmlFor="">2주</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" name="radio3" value={'m'} onChange={(e:any) => handleDate(e.target.value)}/>
                                    <label htmlFor="">이번달</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" name="radio3" value={'1m'} onChange={(e:any) => handleDate(e.target.value)}/>
                                    <label htmlFor="">1달</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" name="radio3" value={'3m'} onChange={(e:any) => handleDate(e.target.value)}/>
                                    <label htmlFor="">3달</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" name="radio3" value={'6m'} onChange={(e:any) => handleDate(e.target.value)}/>
                                    <label htmlFor="">6달</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" name="radio3" value={'y'} onChange={(e:any) => handleDate(e.target.value)}/>
                                    <label htmlFor="">1년</label>
                                </span>
                            </div>
                        </fieldset>
                        <div className="payList">
                            <span className="listNum">총 {payList?.length}건</span>
                            <ul className="myInfoList">

                                {payList?.length > 0 ? payList?.map((el: any, idx: number) => (

                                    <li key={`pay_${el.payUid}_${idx}` || idx}>
                                        {/* <strong>{el?.vouName}</strong>
                                    <i>지원금액 : </i>{withCommas(el.vouStatPrice)} <br /><i>사용/잔여금액 : </i>{withCommas(el.useVouPay)} / {withCommas(el.vouStatPrice - el.useVouPay)}
                                    <em>{formatDate(el?.regDate, 'YYYY년 MM월 DD일 HH시 mm분 ss초')}</em> */}
                                        <strong>[{convActType(el.actType)}] {el?.actName}</strong>
                                        <i>승인번호 : </i>{el?.payInfo} <br />
                                        <i>사용금액 : </i>{withCommas(el?.payPrice)} | {el?.memName}<br />
                                        <i>결제수단 : </i>{el?.payMethod === 'A' ? `계좌이체` : `카드(${el?.cardType})`} <br />
                                        <em>{formatDate(el?.regDate, 'YYYY년 MM월 DD일 HH시 mm분 ss초')}</em>
                                    </li>
                                ))
                                    :
                                    <li className="noneList">
                                        <span>결제 정보가 없습니다.</span>
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

export default Pay;
