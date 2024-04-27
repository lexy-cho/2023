import { useUserState } from "UserContext";

import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Join() {
    const [checkedList, setCheckedList] = useState<string[]>([]);
    const navigate = useNavigate();
    const { newUser } = useUserState();
    // console.log(newUser);

    const handleAllCheck = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.checked ? setCheckedList(["terms", "privacy"]) : setCheckedList([])
    }

    const handleSingleCheck = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.checked ? setCheckedList([...checkedList, e.target.name]) : setCheckedList(checkedList.filter((check) => check !== e.target.name))
    }

    const isAllAgree = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (checkedList.length !== 2) {
            e.preventDefault();
            alert('약관에 모두 동의하여 주시기 바랍니다.')
            return
        }
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
                <h1 onClick={() => navigate('/', {replace:true})}>회원가입 선택<span>2단계 : 약관동의 (총 5단계)</span></h1>
                <div className="join2">
                    <form>
                        <span className="checkSet w">
                            <input type="checkbox" onChange={handleAllCheck} checked={checkedList.length === 2 ? true : false} />
                            <label htmlFor="">모두 동의하기</label>
                        </span>
                        <br />
                        <span className="checkSet w">
                            <input type="checkbox" name="terms" onChange={handleSingleCheck} checked={checkedList.includes("terms") ? true : false} />
                            <label htmlFor="">이용약관에 동의해요.</label>
                        </span>
                        <div className="agreeArea">
                            <div>내용</div>
                        </div>
                        <span className="checkSet w">
                            <input type="checkbox" name="privacy" onChange={handleSingleCheck} checked={checkedList.includes("privacy") ? true : false} />
                            <label htmlFor="">개인정보보호정책에 동의해요.</label>
                        </span>
                        <div className="agreeArea">
                            <div>내용</div>
                        </div>
                    </form>
                    <Link to="/join3" className="btnL" onClick={isAllAgree}>다음</Link>
                </div>
            </section>
        </div>
    );
}

export default Join;
