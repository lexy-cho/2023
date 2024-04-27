import { useNavigate } from "react-router-dom";
import { useUserState } from "UserContext";
import { maskingEmail, maskingPhoneNumber } from "utils/format";

function IdFindEnd() {
    const navigate = useNavigate();
    const { findUser } = useUserState();

    return (
        <div id="container" className="memberCase">
            <section>
                <div className="infoEnd">
                    <div>
                        <p>
                            {findUser.memAuthType === 'E'? maskingEmail(findUser.memId) : maskingPhoneNumber(findUser.memId)}<span>입니다.</span>
                        </p>
                    </div>
                    <a href="/login" className="btnG">로그인으로 이동</a>
                    <a href="/" className="btnL">홈으로 이동</a>
                </div>
            </section>
        </div>
    );
}

export default IdFindEnd;
