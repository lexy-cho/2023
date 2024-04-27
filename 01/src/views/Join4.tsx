import { useNavigate } from "react-router-dom";

function Join() {
    const navigate = useNavigate();

    return (
        <div id="container" className="memberCase">
            <section>
                <h1>회원가입 선택<span>4단계 : 기본정보입력 (총 5단계)</span></h1>
                <div className="joinInfo">
                    <form>
                        <strong>jason@unimindlalab.com</strong>
                        <div>
                            <input type="text" placeholder="이름을 입력해주세요" />
                            <input type="text" placeholder="이메일을 입력해주세요" />
                            <input type="number" placeholder="생년월일을 입력해주세요 예) 19910101" />
                        </div>
                        <dl>
                            <dt>성별을 선택해주세요</dt>
                            <dd className="kindTab">
                                <span className="radioSet">
                                    <input type="radio" name="radio1"/>
                                    <label htmlFor="">남</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" name="radio1"/>
                                    <label htmlFor="">여</label>
                                </span>
                            </dd>
                        </dl>
                        <div>
                            <input type="password" placeholder="비밀번호를 입력해주세요" />
                            <input type="password" placeholder="비밀번호를 다시 입력해주세요" />
                        </div>
                    </form>
                    <a href="/#/join5" className="btnL">다음</a>
                </div>
            </section>
        </div>
    );
}

export default Join;
