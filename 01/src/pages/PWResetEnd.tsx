import { Link } from "react-router-dom";

function PWResetEnd() {

    return (
        <div id="container" className="memberCase">
            <section>
                <div className="infoEnd">
                    <div>
                        <p>
                            비밀번호가<span>재설정되었습니다.</span>
                        </p>
                    </div>
                    <Link to="/mypage" className="btnG">마이서로로 이동</Link>
                    <Link to="/" className="btnL">홈으로 이동</Link>
                </div>
            </section>
        </div>
    );
}

export default PWResetEnd;
