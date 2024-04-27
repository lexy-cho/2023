import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "utils/api";
import { setAccessToken, setUserInfo } from "utils/store";
import { useUserDispatch } from "UserContext";
import Loading from "component/Loading";

function Login() {
    const navigate = useNavigate();
    const [kindTab, setKindTab] = useState('P')
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRememberPhone, setIsRememberPhone] = useState(false);
    const [isRememberEmail, setIsRememberEmail] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies();
    const dispatch = useUserDispatch(); //23.11.5 로그인 시 context에 추가

    const changeTabHandler = (t: string) => {
        setKindTab(t);
        setPassword('')
        if (cookies.rememberPhone !== undefined) {
            setPhone(cookies.rememberPhone);
        } else {
            setPhone('');
        }
        if (cookies.rememberEmail !== undefined) {
            setEmail(cookies.rememberEmail);
        } else {
            setEmail('')
        }
    }

    useEffect(() => {
        if (cookies.rememberPhone !== undefined) {
            setPhone(cookies.rememberPhone);
            setIsRememberPhone(true);
        }
        if (cookies.rememberEmail !== undefined) {
            setEmail(cookies.rememberEmail);
            setIsRememberEmail(true);
        }
    }, []);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, t: string) => {
        if (t === 'P') {
            setPhone(e.target.value.replace(/[^0-9]/g, ""))
        }
        if (t === 'E') {
            setEmail(e.target.value)
        }
        if (t === '비밀번호') {
            setPassword(e.target.value)
        }
    }

    const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>, t: string) => {
        if (t === 'P') {
            setIsRememberPhone(e.target.checked);
            if (e.target.checked) {
                setCookie('rememberPhone', phone); //로그인 구현 완료 시 로그인에 성공했을 때만 쿠키에 저장하도록 변경
            } else {
                removeCookie('rememberPhone');
            }
        }
        if (t === 'E') {
            setIsRememberEmail(e.target.checked);
            if (e.target.checked) {
                setCookie('rememberEmail', email);
            } else {
                removeCookie('rememberEmail');
            }
        }
    };

    //로그인 - response 일반회원일 경우 - session 저장
    //response 준회원일 경우 - session에 저장하지 않고 context dipatch로 회원 업그레이드 페이지로 이동
    const submitHandler = (e: any, t: string) => {
        e.preventDefault()
        if (t === 'P') {
            if (phone === '' || password === '') {
                alert('전화번호와 비밀번호를 모두 입력하세요.')
            } else {
                // login api
                const param = { memId: phone, memPwd: password, memAuthType: t };
                loginMutation.mutate(param);
            }
        }
        if (t === 'E') {
            if (email === '' || password === '') {
                alert('이메일과 비밀번호를 모두 입력하세요.')
            } else {
                // login api
                const param = { memId: email, memPwd: password, memAuthType: t };
                loginMutation.mutate(param);
            }
        }
    }

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loginMutation = useMutation(loginApi.login, {
        onMutate: (variable) => {
            setIsLoading(true);
        },
        onError: ({ error }, variable, context) => {
            //   error
            console.log("error", error, variable, context);
            if (error.errorCode === 406) {
                navigate(`/accuse/${error.repType}`, { replace: true });
            } else {
                alert(error.errorMessage);
            }
        },
        onSuccess: ({ statusCode, data, responseMessage }: any, variables, context) => {
            if (statusCode === 200) {
                setAccessToken(data?.accessToken);
                setUserInfo({ ...data?.user, userType: 'U' });
                dispatch({ type: 'LOGIN', user: { ...data?.user, userType: 'U' } }); //23.11.5 로그인 시 context에 추가
                navigate("/");
            } else if (statusCode === 203) {
                alert("준회원입니다. 회원가입으로 진행해주세요.");
                return
                // navigate("/login/check");
                // dispatch({type: 'CREATE_USER', user: {...data?.user, memId : data?.user.memEmail}});
            }
        },
        onSettled: (data: any) => {
            setIsLoading(false);
        },
    });

    return (
        <>
            <Loading isLoading={isLoading} />
            <div id="container" className="memberCase">
                <section>
                    <h1 onClick={() => navigate('/', { replace: true })}>로그인</h1>
                    <div className="login">
                        <form>
                            <div className="kindTab">
                                <span className="radioSet">
                                    <input type="radio" name="radio1" defaultChecked onChange={() => changeTabHandler('P')} />
                                    <label htmlFor="">전화번호</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" name="radio1" onChange={() => changeTabHandler('E')} />
                                    <label htmlFor="">이메일</label>
                                </span>
                            </div>
                            <div className="inP">
                                <input type="text" placeholder={kindTab === 'P' ? '전화번호' : '이메일'} value={kindTab === 'P' ? phone : email}
                                    onChange={(e) => onChangeHandler(e, kindTab)}
                                    inputMode={kindTab === 'P' ? "numeric" : "email"} maxLength={kindTab === 'P' ? 11 : 33} />
                                <input type="password" placeholder="비밀번호" value={password} onChange={(e) => onChangeHandler(e, '비밀번호')} />
                            </div>
                            <span className="checkSet w">
                                <input type="checkbox" id='saveId' checked={kindTab === 'P' ? isRememberPhone : isRememberEmail} onChange={(e) => checkboxHandler(e, kindTab)} />
                                <label htmlFor="">{`${kindTab === 'P' ? '전화번호' : '이메일'} 저장`}</label>
                            </span>
                            <Link to={'#'} className="btnL" onClick={(e) => submitHandler(e, kindTab)}>로그인</Link>
                            <Link to="/join" className="btnG">회원가입</Link>
                        </form>
                        <div className="btnArea">
                            <Link to="/idFind" className="btnG sm" state={{ kindTab }}>{`아이디 찾기`}</Link>
                            <Link to="/PWFind" className="btnG sm" state={{ kindTab }}>비밀번호 재설정</Link>
                        </div>
                    </div>
                </section>
            </div>
        </>

    );
}

export default Login;