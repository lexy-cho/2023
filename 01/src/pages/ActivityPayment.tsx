import { useMutation, useQuery } from "@tanstack/react-query";
import { useUserState } from "UserContext";
import DefaultFooter from "containers/DefaultFooter";
import DefaultHeader from "containers/DefaultHeader";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import activityApi from "utils/api/activityApi";
import { formatDate, withCommas } from "utils/format";

import parse from "html-react-parser";
import { nanoid } from "nanoid";
import Loading from "component/Loading";

function ActivityPayment() {

    const [voucherUid, setVoucherUid] = useState<number>(0);
    const [paymentType, setPaymentType] = useState<string | undefined>(undefined);

    const navigate = useNavigate();
    const location = useLocation();
    const { id: actUid } = useParams(); //활동UID
    const { type: payType } = useParams(); //활동UID
    //const type = location.state?.type; //이용자로 신청하기 위한 파라미터
    const actPrice = location.state?.actPrice;
    const reqDesc = location.state?.reqDesc;
    const { user } = useUserState();    
    const [loading, setLoading] = useState<boolean>(false);

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

    const getVoucherList = async (): Promise<any> => {
        const params = { memUid: user?.memUid };
        try {
            const response: any = await activityApi.getVoucherList(params);
            if (response.statusCode === 200) {
                return response.data;
            }
        } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch data");
        }
    }

    //activity info
    const { data, isLoading, isError, refetch } = useQuery<any>(["getActivity"], getActivity, { enabled: !!actUid, cacheTime: 0 });

    //voucher info
    const { data: voucher, isLoading: isLoadingV, isError: error, refetch: voRef } = useQuery<any>(["getVoucherList"], getVoucherList, { enabled: !!data, cacheTime: 0 });

    const payVoucher = useMutation(activityApi.payVoucher, {
        onMutate: (variable) => {
            setLoading(true);
        },
        onError: (error, variable, context) => {
            console.log("error", error, variable, context);
            alert('등록진행이 실패되었습니다. 잠시후 다시 시도해주세요.')
            return
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {
            // console.log(statusCode, data);
            navigate(`/activity/${actUid}/success`, { state: { actPrice: actPrice, reqDesc: reqDesc } });
        },
        onSettled: (data: any) => {
            setLoading(false);
        },
    });

    const handlePayment = (payType: string) => {

        if (payType === 'V') {
            if (!voucherUid) {
                alert('바우처를 선택해주세요.');
                return;
            }

            const voucherItem = voucher.voucherList.filter((el: any) => el.vouUid === voucherUid)[0];

            let realPrice = voucherItem.vouStatPrice - voucherItem.useVouPay;
            if (actPrice > realPrice) {
                alert('바우처 금액이 부족합니다.');
                return;
            }
            const param = {
                actUid: actUid,
                memUid: user.memUid,
                usrReq: reqDesc,
                vouUid: voucherUid,
                vouPay: actPrice
            };
            payVoucher.mutate(param);
        } else if (payType === 'P') {
            /* 토스 페이먼츠 결제 */
            // if (!paymentType) {
            //     alert('결제 방법을 선택해주세요.');
            //     return;
            // }
            if (actPrice > 0) {
                const params = {
                    memUid: user.memUid,
                    actUid: actUid,
                    payInfo: nanoid(),
                    payPrice: data?.actPrice,
                    reqDesc: reqDesc,
                }
                pay(params);
            } 
        }
    }

    const { mutate: pay } = useMutation(activityApi.payStart, {
        onMutate: (variable) => {
            setLoading(true);
        },
        onError: (error, variable, context) => {
            console.log("error", error, variable, context);
        },
        onSuccess: ({ statusCode, data: resData }: any, variables, context) => {
            console.log(statusCode, resData, variables);
            
            const state = {
                orderId: variables.payInfo,
                orderName: data.actName,
                customerName: user.memName,
                customerEmail: user.memEmail,
                orderPrice: data.actPrice,
            };

            if (statusCode === 200) navigate('/checkout', { state: state });
        },
        onSettled: (data: any) => {
            setLoading(false);
        },
    });

    return (
        <>
            <DefaultHeader act={data} />
            <Loading isLoading={loading} />
            <div id="container">
                <section>
                    <div className="contents">
                        <div className="viewArea">
                            <div className="infoArea">
                                <strong className="applyPrice">{withCommas(actPrice)}</strong>
                                <dl><dt>활동번호</dt><dd>{`A${data?.actUid}`}</dd></dl>
                                <dl><dt>시작일시</dt><dd>{formatDate(data.actStartDate, 'YYYY년 MM월 DD일')}</dd></dl>
                                <dl><dt>시작지점</dt><dd>{data.actStartPoint}</dd></dl>
                                <dl><dt>종료일시</dt><dd>{formatDate(data.actEndDate, 'YYYY년 MM월 DD일')}</dd></dl>
                                <dl><dt>종료지점</dt><dd>{data.actEndPoint}</dd></dl>
                                <dl className="line">
                                    <dt>상세정보</dt>
                                    <dd style={{ whiteSpace: 'pre-wrap' }}>{parse(`${data?.actDec}`)}</dd>
                                </dl>
                                <dl className="line">
                                    <dt>요청사항</dt>
                                    <dd>{reqDesc}</dd>
                                </dl>

                                {
                                    payType === 'V' && (
                                        <dl className="line">
                                            <dt>바우처정보</dt>
                                            <dd className="voucherChoice">
                                                <ul>
                                                    {
                                                        voucher.voucherList.length > 0 ? voucher.voucherList.map((el: any, idx: number) => {
                                                            return (
                                                                <li key={`voucher_${el.vouUid}_${idx}`}>
                                                                    <input type="radio" id={`voucher_${el.vouUid}_${idx}`} value={el.vouUid} onChange={(e) => setVoucherUid(Number(e.target.value))} />
                                                                    <label htmlFor={`voucher_${el.vouUid}_${idx}`} >
                                                                        <strong>{el.vouName}</strong><br />
                                                                        지원금액 : <em>{withCommas(el.vouStatPrice)}</em><br />
                                                                        사용/잔여금액 : <em>{withCommas(el.useVouPay)} / {withCommas((el.vouStatPrice - el.useVouPay))}</em><br />
                                                                        <i>{formatDate(el.regDate, 'YYYY년 MM월 DD일 HH시 mm분 ss초')}</i>
                                                                    </label>
                                                                </li>
                                                            )
                                                        })
                                                            :
                                                            <li >
                                                                사용가능한 바우처가 없습니다.
                                                            </li>
                                                    }
                                                </ul>
                                            </dd>
                                        </dl>
                                    )
                                }
                                {/* {
                                    payType === 'P' && (
                                        <div className="payKind">
                                            <span className="radioSet">
                                                <input type="radio" name="radio2" value={'CARD'} onChange={(e) => setPaymentType(e.target.value)} />
                                                <label htmlFor="" >카드</label>
                                            </span>
                                            <span className="radioSet">
                                                <input type="radio" name="radio2" value={'VACCT'} onChange={(e) => setPaymentType(e.target.value)} />
                                                <label htmlFor="">계좌이체</label>
                                            </span>
                                        </div>
                                    )
                                } */}
                            </div>
                        </div>

                        <div className="viewBtn">
                            <button className="btnM" onClick={() => handlePayment(payType || '')}>{`${payType === 'V' ? '바우처사용하기' : '결제하기'}`}</button>
                            <button className="btnG" onClick={() => navigate(-1)}>취소하기</button>
                        </div>
                    </div>
                </section>
            </div>
            <DefaultFooter />
        </>
    )
}


export default ActivityPayment;