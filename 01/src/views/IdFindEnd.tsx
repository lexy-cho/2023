import { useNavigate } from "react-router-dom";

function IdFindEnd() {
    const navigate = useNavigate();

    return (
        <div id="container" className="memberCase">
            <section>
                <div className="infoEnd">
                    <div>
                        <p>
                            010-99**-**01<span>입니다.</span>
                        </p>
                    </div>
                    <a href="/#/mypage" className="btnG">마이서로로 이동</a>
                    <a href="/#/" className="btnL">홈으로 이동</a>
                </div>
            </section>
        </div>
    );
}

export default IdFindEnd;
