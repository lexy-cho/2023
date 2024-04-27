import { useNavigate } from "react-router-dom";

function Join() {
    const navigate = useNavigate();

    return (
        <div id="container" className="memberCase">
            <section>
                <h1>회원가입 선택<span>1단계 : 타입선택 (총 5단계)</span></h1>
                <div className="join1">
                    <form>
                        <div>
                            <span>
                                <strong>일반회원</strong>
                                <input type="radio" name="radio1"/>
                                <label htmlFor="">서로서비스의 이용자 혹은 제공자로 등록해요.</label>
                            </span>
                            <span onClick={() => navigate(`/join2`)}>
                                <strong>교육제공자</strong>
                                <input type="radio" name="radio1"/>
                                <label htmlFor="">서로서비스에서 교육을 제공해요.</label>
                            </span>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Join;
