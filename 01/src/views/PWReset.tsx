import { useNavigate } from "react-router-dom";

function PWReset() {
    const navigate = useNavigate();

    return (
        <div id="container" className="memberCase">
            <section>
                <h1>비밀번호 재설정</h1>
                <div className="pwReset">
                    <strong>새로운 비밀번호를 입력해 주세요.</strong>
                    <form>
                        <div className="inP">
                            <input type="password" placeholder="비밀번호를 입력해주세요" />
                            <input type="password" placeholder="비밀번호를 다시 입력해주세요" />
                        </div>
                    </form>
                    <button className="btnL" onClick={() => navigate(`/pwResetEnd`)}>비밀번호 재설정</button>
                    <a href="/#/login" className="btnG">취소</a>
                    <div>
                        <p>비밀번호가 보안에 취약합니다. (영문,특수문자, 숫자 혼합 8자리 이상으로 설정해주세요.)</p>
                        <p>비밀번호가 서로 맞지 않습니다.</p>
                        <p className="not">비밀번호 조건이 확인되었습니다.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PWReset;
