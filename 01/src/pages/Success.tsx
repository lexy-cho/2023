import { useMutation } from "@tanstack/react-query";
import { useUserState } from "UserContext";
import Loading from "component/Loading";
import DefaultFooter from "containers/DefaultFooter";
import DefaultHeader from "containers/DefaultHeader";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import activityApi from "utils/api/activityApi";
import { getUserInfo } from "utils/store";


function Success() {
    const navigate = useNavigate();
    const { user } = useUserState();
    const userInfo = getUserInfo()
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [isPay, setPay] = useState(false);

    let orderId = new URL(window.location.href).searchParams.get("orderId");
    let paymentKey = new URL(window.location.href).searchParams.get("paymentKey");
    let amount = new URL(window.location.href).searchParams.get("amount");


    const { mutate: payEnd } = useMutation(activityApi.payEnd, {
        onError: (error, variable, context) => {
            console.log("error", error, variable, context);
            // alert(1);            
            navigate('/fail')
        },
        onSuccess: ({ statusCode, data: resData }: any, variables, context) => {
            console.log(statusCode, resData, variables);
            if (statusCode === 200) {
                setPay(true);
                navigate(`/activity/${resData?.actUid}/success`, { state: { actPrice: resData?.payPrice, payInfo: resData?.payInfo, reqDesc:resData?.reqDesc } });
                return
            }else {
                navigate('/fail');
            }
        }, 
        // onSettled: async () => {
        //     setLoading(false);
        // },
    });

    useEffect(() => {
        const params = { payInfo: orderId, paymentKey, amount };
        payEnd(params);
    }, [])

    if (loading) return <Loading isLoading={loading} />
    return (
        <>
            <DefaultHeader headType={'main'} tailType={'all'} />
            {/* <Loading isLoading={loading} /> */}
            {(isPay) && (
                <div id="container">
                    <section>
                        <div>
                            <h1>결제 성공</h1>
                            <div>{`주문 아이디: ${searchParams.get("orderId")}`}</div>
                            <div>{`결제 금액: ${Number(
                                searchParams.get("amount")
                            ).toLocaleString()}원`}</div>
                        </div>
                    </section>
                </div>
            )}
            {(!isPay) && (
                <div id="container">
                    <section>
                        <div>
                            <h1>결제 실패</h1>
                            <div>{`주문 아이디: ${searchParams.get("orderId")}`}</div>
                            <div>{`결제 금액: ${Number(
                                searchParams.get("amount")
                            ).toLocaleString()}원`}</div>
                        </div>
                    </section>
                </div>
            )}
            <DefaultFooter />
        </>
    );
}

export default Success;
