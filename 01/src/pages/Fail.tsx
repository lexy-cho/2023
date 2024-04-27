import { useMutation } from "@tanstack/react-query";
import { useUserState } from "UserContext";
import DefaultFooter from "containers/DefaultFooter";
import DefaultHeader from "containers/DefaultHeader";
import Loading from "component/Loading";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { getUserInfo } from "utils/store";
import activityApi from "utils/api/activityApi";

function Success() {
    const navigate = useNavigate();
    const { user } = useUserState();
    const userInfo = getUserInfo()
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);


    let orderId = new URL(window.location.href).searchParams.get("orderId");
    let paymentKey = new URL(window.location.href).searchParams.get("paymentKey");
    let message = new URL(window.location.href).searchParams.get("message");

    const { mutate: payFail } = useMutation(activityApi.payFail, {
        onError: (error, variable, context) => {
            console.log("error", error, variable, context);

        },
        onSuccess: ({ statusCode, data: resData }: any, variables, context) => {
            console.log(statusCode, resData, variables);
            if (statusCode === '200') {

            }
        }, onSettled: async () => {
            setLoading(false);
        },
    });

    useEffect(() => {
        console.log(searchParams);
        const params = { payInfo: orderId, message };
        payFail(params);
    }, [])

    if (loading) return <Loading isLoading={loading} />

    return (
        <>
            <DefaultHeader headType={'main'} tailType={'all'} />
            <div id="container" className="checkOut">
                <section>
                    <div className="contents">
                        <div className="viewArea">
                            <div className="infoArea">
                                <h1>결제 실패</h1>
                                <div>{`실패 사유: ${searchParams.get("message")}`}</div>
                            </div>

                            <Link to="/" className="btnM" style={{ marginTop: 20 }}>메인으로</Link>
                        </div>
                    </div>
                </section>
            </div>
            <DefaultFooter />
        </>
    );
}

export default Success;
