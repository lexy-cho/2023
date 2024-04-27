
import { PaymentWidgetInstance, loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { withCommas } from "utils/format";

const selector = "#payment-widget";
// const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
// const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

export function CheckoutPage() {
    const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
    const paymentMethodsWidgetRef = useRef<ReturnType<PaymentWidgetInstance["renderPaymentMethods"]> | null>(null);
    const [price, setPrice] = useState(10000);
    const location = useLocation();
    const orderId = location?.state?.orderId;
    const orderPrice = location?.state?.orderPrice;

    useEffect(() => {                
        setPrice(orderPrice);
    }, []);

    useEffect(() => {
        const paymentMethodsWidget = paymentMethodsWidgetRef.current;

        if (paymentMethodsWidget == null) {
            return;
        }

        paymentMethodsWidget.updateAmount(price);
        
    }, [price]);
    
    useEffect(() => {
        (async () => {
            const paymentWidget = await loadPaymentWidget(`${process.env.REACT_APP_CLIENT_KEY}`, `${process.env.REACT_APP_CUSTOMER_KEY}`);

            const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
                selector,
                { value: price, currency: "KRW", country: "KR" },
                { variantKey: "DEFAULT" }
            );

            paymentWidgetRef.current = paymentWidget;
            paymentMethodsWidgetRef.current = paymentMethodsWidget;
        })();
      }, [price]);

    const pay = async () => {
        const paymentWidget = paymentWidgetRef.current;
        try {
            // ## Q. 결제 요청 후 계속 로딩 중인 화면이 보인다면?
            // 아직 결제 요청 중이에요. 이어서 요청 결과를 확인한 뒤, 결제 승인 API 호출까지 해야 결제가 완료돼요.
            // 코드샌드박스 환경에선 요청 결과 페이지(`successUrl`, `failUrl`)로 이동할 수가 없으니 유의하세요.
            await paymentWidget?.requestPayment({
                // orderId: orderId,
                // orderName: "토스 티셔츠 외 2건",
                // customerName: "김토스",
                // customerEmail: "customer123@gmail.com",
                // successUrl: `${window.location.origin}/success`,
                // failUrl: `${window.location.origin}/fail`,
                orderId: location?.state?.orderId,
                orderName: location?.state?.orderName,
                customerName: location?.state?.customerName,
                customerEmail: location?.state?.customerEmail,
                successUrl: `${window.location.origin}/success`,
                failUrl: `${window.location.origin}/fail`,
            });
        } catch (error) {
            // handle error
        }
    }

    return (
        <div id="container" className="checkOut">
            <section>
                <div className="contents">
                    <div className="viewArea">
                        <div className="infoArea">
                            <h2 className="payInfo">{location?.state?.orderName}</h2>
                            <span>{`${withCommas(Number(price.toLocaleString()))}`}</span>
                        </div>
                        {/* <div>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={(event) => {
                                        setPrice(event.target.checked ? price - 5_000 : price + 5_000);
                                    }}
                                />
                                5,000원 할인 쿠폰 적용
                            </label>
                        </div> */}
                        <div id="payment-widget" />
                        <button onClick={pay} className="btnM" style={{ marginTop: 20 }}> 결제하기 </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CheckoutPage;