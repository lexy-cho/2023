import { useNavigate } from "react-router-dom";

function Join() {
    const navigate = useNavigate();

    return (
        <div id="container" className="memberCase">
            <section>
                <h1>회원가입 선택<span>2단계 : 약관동의 (총 5단계)</span></h1>
                <div className="join2">
                    <form>
                        <span className="checkSet w">
                            <input type="checkbox" />
                            <label htmlFor="">모두 동의하기</label>
                        </span>
                        <span className="checkSet w">
                            <input type="checkbox" />
                            <label htmlFor="">이용약관에 동의해요.</label>
                        </span>
                        <div className="agreeArea">
                            <div>내용</div>
                        </div>
                        <span className="checkSet w">
                            <input type="checkbox" />
                            <label htmlFor="">개인정보보호정책에 동의해요.</label>
                        </span>
                        <div className="agreeArea">
                            <div>내용</div>
                        </div>
                    </form>
                    <a href="/#/join3" className="btnL">다음</a>
                </div>
            </section>
        </div>
    );
}

export default Join;
