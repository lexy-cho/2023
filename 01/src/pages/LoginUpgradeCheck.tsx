import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useUserState } from "UserContext";

function LoginUpgradeCheck() {
    const navigate = useNavigate()
    const { newUser } = useUserState();

    useEffect(() => {
        if (!newUser) {
            navigate(`/join`);
            return;
        }

        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            e.returnValue = '이 페이지를 떠나시겠습니까? 변경된 내용이 저장되지 않을 수 있습니다.';
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        <div id="container" className="memberCase">
            <section>
                <h1>회원 업그레이드</h1>
                <div className="mmUpgrade">
                    <p>
                        <strong>업그레이드 하시겠어요?</strong>
                        기존의 유니마인드랩 서로서비스에 참여하셨다면 회원 업그레이드를 통해 더 많은 서비스를 이용할 수 있습니다.
                    </p>
                    <Link to="/login/upgrade" className="btnL" >업그레이드하기</Link>
                    <Link to="/login" className="btnG" >취소</Link>
                </div>
            </section>
        </div>
    );
}

export default LoginUpgradeCheck;
