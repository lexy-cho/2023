import DefaultFooter from "containers/DefaultFooter";
import DefaultHeader from "containers/DefaultHeader";
import { Link, useParams } from "react-router-dom";

function Accuse() {
    const { type: repType } = useParams(); //활동UID

    return (
        <>
            <DefaultHeader headType={'alert'} tailType={'alert'} />
            <div id="container">
                <section>
                    <div className="contents">
                        <div className="accuseArea">
                            <div className="basicPop">
                                <div className="pBack">
                                    <strong className="pTit">신고처리된 {repType === 'A' ? '계정' : '활동'}이에요.</strong>
                                    <p>
                                        현재 신고처리 되어 관리자에 의해 신고처리된 {repType === 'A' ? '계정' : '활동'}이에요. 60일 후 자동으로 삭제처리 될 예정이오니 아래 메일로 연락주세요.
                                        <strong>uni@unimindlab.com</strong>
                                    </p>
                                </div>
                                <div className="pBtn">
                                    <Link className="btnG" to={'/'} replace={true}>확인</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <DefaultFooter />
        </>
    );
}

export default Accuse;
