import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserDispatch, useUserState } from "UserContext";

function LoginUpgrade() {
    const navigate = useNavigate();
    const dispatch = useUserDispatch();
    const { newUser } = useUserState();

    /**
      * TODO: 
      * span 선택시 memType:G고정
      * memUserType 변경해서 dispatch필요
      *     dispatch({
                type: "CREATE_USER",
                user: {
                    memType: 'G',
                    memUseType: 'U',
                },// } as MemberDTO,
            });
      */
    
    const selectType = (t:string) => {
        dispatch({
            type: "CREATE_USER",
            user: {
                memType: 'G',
                memUseType: t,
            },// } as MemberDTO,
        });
        navigate(`/${t === 'U' ? "join4Normal" : "join4Provider"}`);
    }

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
                <h1>회원가입 선택<span>1단계 : 타입선택 (총 5단계)</span></h1>
                <div className="join1">
                    <form>
                        <div>
                            <span onClick={() => selectType('U')}>
                                <strong>일반회원</strong>
                                <input type="radio" name="radio1"/>
                                <label htmlFor="">서로서비스의 이용자 혹은 제공자로 등록해요.</label>
                            </span>
                            <span onClick={() => selectType('O')}>
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

export default LoginUpgrade;