import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    return (
        <div id="container" className="memberCase">
            <section>
                <h1>로그인</h1>
                <div className="login">
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
                            <input type="password" placeholder="비밀번호" />
                        </div>
                        <span className="checkSet w">
                            <input type="checkbox" />
                            <label htmlFor="">전화번호 저장</label>
                        </span>
                        <button className="btnL" onClick={() => navigate(`/`)}>로그인</button>
                        <a href="/#/join" className="btnG">회원가입</a>
                    </form>
                    <div className="btnArea">
                        <a href="/#/idFind" className="btnG sm">전화번호 찾기</a>
                        <a href="/#/pwFind" className="btnG sm">비밀번호 재설정</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
