import { useNavigate } from "react-router-dom";

function Join() {
    const navigate = useNavigate();

    return (
        <div id="container" className="memberCase">
            <section>
                <h1>회원가입 선택<span>5단계 : 추가정보입력 (총 5단계)</span></h1>
                <div className="joinInfo">
                    <form>
                        <strong>jason@unimindlalab.com</strong>
                        <dl>
                            <dt>장애여부</dt>
                            <dd className="kindTab col6">
                                <span className="radioSet">
                                    <input type="radio" name="radio2"/>
                                    <label htmlFor="">시각</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" name="radio2"/>
                                    <label htmlFor="">청각</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" name="radio2"/>
                                    <label htmlFor="">지체</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" name="radio2"/>
                                    <label htmlFor="">감각</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" name="radio2"/>
                                    <label htmlFor="">정신</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" name="radio2"/>
                                    <label htmlFor="">복합</label>
                                </span>
                            </dd>
                        </dl>
                        <dl>
                            <dt>장애정도</dt>
                            <dd className="kindTab">
                                <span className="radioSet">
                                    <input type="radio" name="radio3"/>
                                    <label htmlFor="">심함</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" name="radio3"/>
                                    <label htmlFor="">심하지 않음</label>
                                </span>
                            </dd>
                            <dd><input type="text" placeholder="부가정보를 입력해주세요" /></dd>
                        </dl>
                    </form>
                    <a href="/#/joinEnd" className="btnL">다음</a>
                    <a href="/#/joinEnd" className="btnG">건너띄기</a>
                </div>
            </section>
        </div>
    );
}

export default Join;
