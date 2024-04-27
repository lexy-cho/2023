import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserDispatch, useUserState } from "UserContext";
import { encrypt } from "utils/aes256";
import { loginApi } from "utils/api";
import { isValidPassword } from "utils/format";
import { setAccessToken, setUserInfo } from "utils/store";

/**
 * TODO:
 * 1. 로그인 화면에서 진입가능하다.
 * 2. 마이서로 화면에서 진입가능하다.
 * 3. findUser 로만 판단하면 안될것같음
 * 4. 취소 버튼 클릭시 Login이 아니고 state에 따라서 이동 경로가 변경되어야함
 */

function PWReset() {
    const navigate = useNavigate();
    const [password, setPassword] = useState<string>('')
    const [confirmPw, setConfirmPw] = useState<string>('')
    const [warnMsg, setWarnMsg] = useState<string>('')
    const [warnMsgSt, setWarnMsgSt] = useState<string>('')
    const [isDisabled, setIsDisabled] = useState<boolean>(true)

    const { findUser, user } = useUserState();
    const dispatch = useUserDispatch(); //23.11.5 로그인 시 context에 추가

    const location = useLocation();
    const enter = location.state;   // mypage

    const onSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        // if (password === '' || isDisabled === true) {
        //     setWarnMsg('비밀번호를 조건에 맞게 입력해주세요.')
        //     return
        // }
        if (password === '' || confirmPw === '') {
            alert('비밀번호를 입력해주세요.')
            return
        }
        if (password !== confirmPw) {
            alert('비밀번호가 일치하지 않습니다.')
            return
        }

        if (!isValidPassword(password)) {
            alert("비밀번호가 보안에 취약합니다. (영문,특수문자, 숫자 혼합 8자리 이상으로 설정해주세요.)")
            // setWarnMsg('비밀번호를 조건에 맞게 입력해주세요.')
            setWarnMsg("비밀번호가 보안에 취약합니다. (영문,특수문자, 숫자 혼합 8자리 이상으로 설정해주세요.)")
            return
        }


        const randomNum = Math.floor(10000 + Math.random() * 90000);
        const encryptedData = encrypt(`${randomNum.toString()}_${process.env.REACT_APP_ENC_KEY}`);

        let param = { memUid: enter === 'mypage' ? user?.memUid : findUser?.memUid, memPwd: password, authCode: encryptedData }
        pwResetMutation.mutate(param)
    }

    const pwResetMutation = useMutation(loginApi.resetPw, {
        onMutate: (variable) => {
            // console.log("onMutate", variable);
            // variable : {loginId: 'xxx', password; 'xxx'}
        },
        onError: (error, variable, context) => {
            // error
            console.log("error", error, variable, context);
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {
            if (statusCode === 200) {
                alert('비밀번호가 재설정 되었습니다')
                setAccessToken(data?.accessToken);
                setUserInfo({ ...data?.user, userType: 'U' });
                dispatch({ type: 'LOGIN', user: { ...data?.user, userType: 'U' } });
                navigate('/pwResetEnd')
            }
        },
        onSettled: (data: any) => {
            console.log("end");
        },
    });

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, t: string) => {
        const isValidate = isValidPassword(e.target.value)
        if (t === "password") {
            setPassword(e.target.value)
            if (isValidate) {
                // setPassword(e.target.value)
                setWarnMsg("")
            } else {
                setWarnMsg("비밀번호가 보안에 취약합니다. (영문,특수문자, 숫자 혼합 8자리 이상으로 설정해주세요.)")
                return
            }
        } else if (t === "confirmPw") {
            setConfirmPw(e.target.value)
            if (password !== '' && password == e.target.value) {
                setWarnMsg("비밀번호 조건이 확인되었습니다.")
                setWarnMsgSt("not")
                // setIsDisabled(false)
                // setConfirmPw(e.target.value)
            } else {
                setWarnMsg("비밀번호가 서로 맞지 않습니다.")
                return
            }
        }
    }

    const handleCancel = () => {
        enter === 'mypage' ? navigate(-1) : navigate('/login');
    }

    return (
        <div id="container" className="memberCase">
            <section>
                <h1>비밀번호 재설정</h1>
                <div className="pwReset">
                    <strong>새로운 비밀번호를 입력해 주세요.</strong>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="inP">
                            <input type="password" placeholder="비밀번호를 입력해주세요" onChange={(e) => onChangeHandler(e, 'password')} />
                            <input type="password" placeholder="비밀번호를 다시 입력해주세요" onChange={(e) => onChangeHandler(e, 'confirmPw')} />
                        </div>
                    </form>
                    <button className="btnL" onClick={(e) => onSubmitHandler(e)} >비밀번호 재설정</button>
                    <Link to="#" className="btnG" onClick={handleCancel}>취소</Link>
                    <div>
                        {warnMsg !== "" && <p className={warnMsgSt}>{warnMsg}</p>}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PWReset;
