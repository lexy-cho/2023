import { useUserDispatch, useUserState } from "UserContext";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { formatTime, isValidateEmail, isValidatePhone } from "utils/format";
import { useMutation, useQuery } from "@tanstack/react-query";
import joinApi from "utils/api/joinApi";
import { decrypt } from 'utils/aes256';
import Loading from "component/Loading";

function Join() {
    const navigate = useNavigate()
    const [kindTab, setKindTab] = useState<string>('P')
    const [onChangeId, setOnChangeId] = useState<string>('');
    const [authNum, setAuthNum] = useState<string>('');
    const [authData, setAuthData] = useState<string>('');
    const [checkData, setCheckData] = useState<any>({ memId: '', memAuthType: '' })
    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    const [isToggle, setIsToggle] = useState<boolean>(false);
    const [isOver, setIsOver] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { newUser } = useUserState();
    const dispatch = useUserDispatch();

    // console.log("context NewUser:", newUser);
    //////////////////////////////////////

    // 타이머 관련
    const intervalRef = useRef<any>(null);
    const [time, setTime] = useState<number>(300);                    // 타이머 시간
    const [isRunning, setIsRunning] = useState<boolean>(false);     // 타이머 진행 여부

    const changeTabHandler = (t: string) => {
        setKindTab(t);
        setOnChangeId('')
        setIsDisabled(false)
        setIsRunning(false)
        setTime(300)
        setAuthNum('')
        setAuthData('')
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
            checkAccount()
        }
        // checkAccount()
    }

    const { refetch } = useQuery<any>(
        ['joinCheck', checkData],
        () => joinApi.joinCheck(checkData),
        {
            enabled: false,
            refetchOnWindowFocus: false,
            retry: 0,
            onError: (err) => {
                console.log("error", err);
                alert(err)
                // navigate('/login')
            },
            onSettled: (data: any) => {

            },
        }
    );

    const checkAccount = async () => {
        const res = await refetch()
        if (res.data && res.data.statusCode === 200) { //회원정보가 없을경우
            dispatch({
                type: "CREATE_USER",
                user: {
                    memAuthType: checkData.memAuthType,
                    memId: checkData.memId,
                    certNo: authNum,
                    isCert: true,
                },
            });
            if (newUser.memUseType === "U") {
                navigate('/join4Normal')
            } else if (newUser.memUseType === "O") {
                navigate('/join4Provider')
            }
        } else if (res.data && res.data.statusCode === 203) { //준회원정보가 있을경우
            dispatch({
                type: "CREATE_USER",
                user: {
                    memAuthType: checkData.memAuthType,
                    memId: checkData.memId,
                    certNo: authNum,
                    isCert: true,
                    memUid: res.data.data.user.memUid, //기존 Uid 저장
                    memGender: res.data.data.user.memGender,
                    memPhone: res.data.data.user.memPhone,
                    memEmail: res.data.data.user.memEmail,
                    memberNormalVO: res.data.data.user.memberNormalVO
                },
            });
            navigate('/join3Check')
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

    const certNoMutation = useMutation(joinApi.getCertNo, {
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
        <>
            <Loading isLoading={isLoading} />
            <div id="container" className="memberCase">
                <section>
                    <h1 onClick={() => navigate('/', { replace: true })}>회원가입 선택<span>3단계 : 인증하기 (총 5단계)</span></h1>
                    <div className="userAuth">
                        <form onSubmit={(event: any) => event.preventDefault()}>
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
                                <input type="text" placeholder={kindTab === 'P' ? "전화번호 입력" : "이메일 입력"} value={onChangeId} disabled={isDisabled}
                                    onChange={(e) => onChangeHandler(e)} inputMode={kindTab === 'P' ? "numeric" : "email"} maxLength={kindTab === 'P' ? 11 : 33} />
                                <button className="btnG" onClick={getCertNo} disabled={isRunning}>인증번호 요청</button>
                            </div>
                            <div className="inKey">
                                <p>제한시간 {formatTime(time, 'mm:ss')}</p>
                                <input type="text" placeholder="인증번호 입력" value={authNum} onChange={(e) => onChangeHandler(e, '인증번호')} inputMode="numeric" maxLength={5} />
                            </div>
                        </form>
                        <Link to="#" className="btnL" onClick={checkAuthNum}>인증완료</Link>
                    </div>
                </section>
            </div>
        </>

    );
}

export default Join;
