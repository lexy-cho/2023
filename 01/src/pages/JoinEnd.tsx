import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {  useEffect } from "react";
import { useUserState } from "UserContext";

function Join() {
    const navigate = useNavigate();
    const { newUser } = useUserState();

    // useEffect(() => {
    //     if (!newUser) {
    //         navigate(`/join`);
    //         return;
    //     }

    //     const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    //         e.returnValue = '이 페이지를 떠나시겠습니까? 변경된 내용이 저장되지 않을 수 있습니다.';
    //     };

    //     window.addEventListener('beforeunload', handleBeforeUnload);

    //     return () => {
    //         window.removeEventListener('beforeunload', handleBeforeUnload);
    //     };
    // }, []);
    
    return (
        <div id="container" className="memberCase">
            <section>
                <div className="infoEnd">
                    <div>
                        <p>
                            회원가입이 <span>완료되었습니다.</span>
                        </p>
                    </div>
                    <Link to="/mypage" className="btnG">마이서로로 이동</Link>
                    <Link to="/" className="btnL">홈으로 이동</Link>
                </div>
            </section>
        </div>
    );
}

export default Join;