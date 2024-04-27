import { useMutation, useQuery } from "@tanstack/react-query";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginApi } from "utils/api";
import { formatTime, isValidateEmail, isValidatePhone } from "utils/format";
import { useUserDispatch } from "UserContext";
import { decrypt } from 'utils/aes256';
import Loading from "component/Loading";


function PWFind() {
    const location = useLocation()
    const navigate = useNavigate()
    const [kindTab, setKindTab] = useState<string>(location.state?.kindTab || "")
    const [onChangeId, setOnChangeId] = useState<string>('');
    const [authNum, setAuthNum] = useState<string>('');
    const [authData, setAuthData] = useState<string>('');
    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    const [checkData, setCheckData] = useState<any>({ memId: '', memAuthType: '' })
    // 타이머 관련
    const intervalRef = useRef<any>(null);
    const [time, setTime] = useState<number>(300);                    // 타이머 시간
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [isToggle, setIsToggle] = useState<boolean>(false);
    const [isOver, setIsOver] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const dispatch = useUserDispatch();

    const changeTabHandler = (t: string) => {
        setKindTab(t);
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, t?: string) => {
        if (t && t === '인증번호') {
            setAuthNum(e.target.value.replace(/[^0-9]/g, ""))
        } else {
            setOnChangeId(kindTab === 'E' ? e.target.value : e.target.value.replace(/[^0-9]/g, ""));
        }
    }

    const checkAuthNum = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        /* 유효시간 만료 확인 */
        if (isOver) {
            alert('제한시간이 종료되었습니다.');
            return
        }
        if (authNum === '') {
            alert('인증을 완료해주세요.')
            return
        }
        if (authNum !== authData) {
            alert('인증번호를 확인해주세요.')
            return
        } else {
            findId()
        }
    }

    const { refetch, isError } = useQuery<any>(
        ['findId', checkData],
        () => loginApi.findId(checkData),
        {
            enabled: false,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: (status) => {

            },
            onError: (err) => {
                console.log("error", err);
                alert(err)
                // navigate('/login')
            },
            onSettled: (data: any) => {
                console.log("end");
            },
        }
    );

    const findId = async () => {
        const res = await refetch()
        if (res.data && res.data.statusCode === 200) {
            let data = res.data.data
            dispatch({
                type: "FIND_USER",
                user: {
                    memId: data.memId,
                    memUid: data.memUid
                },
            });
            navigate('/pwReset')
        } else if (isError) {
            console.log('err')
        }
    }

    const getCertNo = () => {
        let msg = kindTab === 'P' ? '전화번호를 입력해주세요.' : '이메일을 입력해주세요.';

        if (isToggle) return

        if (onChangeId === '') {
            alert(msg);
            return
        }
        /* 전화번호 검증 */
        if (kindTab === 'P' && !isValidatePhone(onChangeId)) {
            alert('유효하지않은 전화번호 형식입니다.');
            return
        }
        /* 이메일 검증 */
        if (kindTab === 'E' && !isValidateEmail(onChangeId)) {
            alert('유효하지않은 이메일 형식입니다.');
            return
        }
        setCheckData({ memId: onChangeId, memAuthType: kindTab }); // 인증완료 후 사용할 데이터
        ///Api통신
        certNoMutation.mutate({ memId: onChangeId, memAuthType: kindTab })

        //  setIsRunning(true); //통신이 완료되면 타이머 시작
        /**
         * TODO: 인증번호 Api 통신 후
         * 통신이 완료되면 타이머 시작
         * 0. 전화번호, 이메일 null check, 검증 후 인증번호 요청이 가능하다
         * 1. 인증번호 요청 했을경우 입력필드(전화번호,이메일) 수정불가
         * 2. 전화번호, 이메일 라디오 버튼 재선택시 입력필드(전화번호,이메일) 수정가능, 인증번호 요청중일시 제한시간 초기화, interval 초기화
         * 3. 인증번호 요청 중 재요청시 제한시간 초기화
         */

    }

    const certNoMutation = useMutation(loginApi.getCertNo, {
        onMutate: (variable) => {
            setIsLoading(true);
            setIsDisabled(true); //인증번호 요청 했을경우 입력필드(전화번호,이메일) 수정불가
            setIsToggle(true);
            setIsOver(false);
        },
        onError: ({ error }, variable, context) => {
            // error
            console.log("error", error, variable, context);
            alert(error.errorMessage);
            setIsDisabled(false)
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {
            if (statusCode === 200) {
                setIsRunning(true);//통신이 완료되면 타이머 시작
                setAuthData(decrypt(data))
            }
        },
        onSettled: (data: any) => {
            setIsLoading(false);
            setIsToggle(false);
        },
    });

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTime((prev: number) => (prev > 0 ? prev - 1 : 0));
            }, 1000);
        } else {
            setIsDisabled(false);
            setIsOver(true);
            clearInterval(intervalRef.current!);
        }
        return () => {
            setIsDisabled(false);
            clearInterval(intervalRef.current!);
        };
    }, [isRunning]);

    return (
        <>
            <Loading isLoading={isLoading} />
            <div id="container" className="memberCase">
            <section>
                <h1 onClick={() => navigate('/', {replace:true})}>비밀번호 재설정</h1>
                <div className="userAuth">
                    <form onSubmit={(event: any) => event.preventDefault()}>
                        <div className="kindTab">
                            <span className="radioSet">
                                <input type="radio" name="radio1" checked={kindTab === "P" ? true : false} onChange={() => changeTabHandler('P')} />
                                <label htmlFor="">전화번호</label>
                            </span>
                            <span className="radioSet">
                                <input type="radio" name="radio1" checked={kindTab === "E" ? true : false} onChange={() => changeTabHandler('E')} />
                                <label htmlFor="">이메일</label>
                            </span>
                        </div>
                        <div className="inP">
                            <input type="text" placeholder={kindTab === 'P' ? "전화번호 입력" : "이메일 입력"} value={onChangeId} disabled={isDisabled} 
                                onChange={(e) => onChangeHandler(e)} inputMode={kindTab === 'P' ? "numeric" : "email"} maxLength={kindTab === 'P' ? 11 : 33} />
                            <button className="btnG" onClick={getCertNo} disabled={isRunning}>인증번호 요청</button>
                        </div>
                        <div className="inKey">
                            <p>제한시간 {formatTime(time, 'mm:ss')}</p>
                            <input type="text" placeholder="인증번호 입력" value={authNum} onChange={(e) => onChangeHandler(e, '인증번호')} inputMode="numeric" maxLength={5}/>
                        </div>
                    </form>
                    <Link to="/pwReset" className="btnL" onClick={checkAuthNum}>인증완료</Link>
                </div>
            </section>
        </div>
        </>
        
    );
}

export default PWFind;
