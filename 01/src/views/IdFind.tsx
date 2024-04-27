import { useNavigate } from "react-router-dom";

function IDFind() {
    const navigate = useNavigate();

    return (
        <div id="container" className="memberCase">
            <section>
                <h1>전화번호 찾기</h1>
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
                    <a href="/#/idFindEnd" className="btnL">인증완료</a>
                </div>
            </section>
        </div>
    );
}

export default IDFind;
