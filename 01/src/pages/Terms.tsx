import { useUserState } from "UserContext";
import DefaultFooter from "containers/DefaultFooter";
import DefaultHeader from "containers/DefaultHeader";
import { useNavigate } from "react-router-dom";

function Terms() {
    const navigate = useNavigate();

    return (
        <>
            <DefaultHeader title={'이용약관'} headType={'sub'} />
            <div id="container">
                <section>
                    <div className="contents">
                        <div className="privacy">
                            이용약관 및 개인정보취급방침
                        </div>
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

export default Terms;
