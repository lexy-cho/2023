import { useNavigate } from "react-router-dom";

function Join() {
    const navigate = useNavigate();

    return (
        <div id="container" className="memberCase">
            <section>
                <h1>회원가입 선택<span>3단계 : 인증하기 (총 5단계)</span></h1>
                <div className="userAuth">
                    <form>
                        <div className="kindTab">
                            <span className="radioSet">
                                <input type="radio" name="radio1"/>
                                <label htmlFor="">전화번호</label>
                            </span>
                            <span className="radioSet">
                                <input type="radio" name="radio1"/>
                                <label htmlFor="">이메일</label>
                            </span>
                        </div>
                        <div className="inP">
                            <input type="text" placeholder="전화번호" />
                            <button className="btnG">인증번호 요청</button>
                        </div>
                        <div className="inKey">
                            <p>제한시간 4:12</p>
                            <input type="text" placeholder="인증번호 입력" />
                        </div>
                    </form>
                    <a href="/#/join3Check" className="btnL">인증완료</a>
                </div>
            </section>
        </div>
    );
}

export default Join;
