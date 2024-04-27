import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserDispatch, useUserState } from "UserContext";

function Join() {
    const navigate = useNavigate()
    const { newUser } = useUserState();
    const [nextPage, setNextPage] = useState<string>('')
    const dispatch = useUserDispatch();

    useEffect(() => {
        if (!newUser) {
            navigate(`/join`);
            return;
        }

        /* 업그레이드는 일반회원으로만 가능 23.11.10 */
        // if (newUser.memUseType === "U") {
        //     setNextPage("/join4Normal")
        // } else if (newUser.memUseType === "O") {
        //     setNextPage("/join4Provider")
        // }

        dispatch({ type: "CREATE_USER", user: { memType: 'G', memUseType: 'U', } });
        setNextPage("/join4Normal")

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
                    <Link to={nextPage} className="btnL" >업그레이드하기</Link>
                    {/* <Link to="/join3" className="btnG" >취소</Link> */}
                    <Link to="/login" className="btnG" >취소</Link>
                </div>
            </section>
        </div>
    );
}

export default Join;
