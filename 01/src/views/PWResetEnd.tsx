import { useNavigate } from "react-router-dom";

function PWResetEnd() {
    const navigate = useNavigate();

    return (
        <div id="container" className="memberCase">
            <section>
                <div className="infoEnd">
                    <div>
                        <p>
                            비밀번호가<span>재설정되었습니다.</span>
                        </p>
                    </div>
                    <a href="/#/mypage" className="btnG">마이서로로 이동</a>
                    <a href="/#/" className="btnL">홈으로 이동</a>
                </div>
            </section>
        </div>
    );
}

export default PWResetEnd;
