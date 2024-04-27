import { useQuery } from "@tanstack/react-query";
import { useUserDispatch, useUserState } from "UserContext";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import joinApi from "utils/api/joinApi";
import { isValidPassword, isValidateDateOfBirth, isValidateEmail, isValidatePhone } from "utils/format";

function Join() {
    const { newUser } = useUserState();
    const dispatch = useUserDispatch();

    const navigate = useNavigate()
    const [gender, setGender] = useState<string>(newUser?.memGender || '')
    const [username, setUsername] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPw, setConfirmPw] = useState<string>('')
    const [birthDate, setBirthDate] = useState<string>('')


    // console.log("context NewUser:", newUser);
    //////////////////////////////////////

    const { refetch } = useQuery<any>(['duplication'], () => joinApi.duplication({ memAuthType: newUser?.memAuthType, memPhone: phone, memEmail: email }),
        {
            enabled: false,
            refetchOnWindowFocus: false,
            retry: 0,
            onError: (err) => {
                console.log("error", err);
                alert(err)
            },
        }
    );

    const onNextHandler = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        let sub = newUser?.memAuthType === "E" ? phone : email
        /* 전화번호, 이메일 중복 확인 */
        const { data } = await refetch();
        const dup = data?.data;
        
        if (username === '') {
            e.preventDefault();
            alert('이름을 입력해주세요.')
            return
        }
        if (sub === '') {
            e.preventDefault();
            alert(`${newUser?.memAuthType === "E" ? '전화번호를' : '이메일을'} 입력해주세요.`)
            return
        }
        if(dup) {
            e.preventDefault();
            alert(`이미 등록된 ${newUser?.memAuthType === "E" ? ' 전화번호' : '이메일'} 입니다.`);
            return
        }
        if (newUser?.memAuthType === "E" && !isValidatePhone(sub)) {
            e.preventDefault();
            alert('유효하지않은 전화번호 형식입니다.');
            return
        }
        if (newUser?.memAuthType === "P" && !isValidateEmail(sub)) {
            e.preventDefault();
            alert('유효하지않은 이메일 형식입니다.');
            return
        }
        if (gender === '') {
            e.preventDefault();
            alert('성별을 선택해주세요.')
            return
        }
        if ((birthDate === '' || birthDate.length !== 8) && !isValidateDateOfBirth(birthDate)) {
            e.preventDefault();
            alert('생년월일을 형식에 알맞게 입력해주세요.')
            return
        }
        if (password === '' || confirmPw === '') {
            e.preventDefault();
            alert('비밀번호를 입력해주세요.')
            return
        }
        if (password !== confirmPw) {
            e.preventDefault();
            alert('비밀번호가 일치하지 않습니다.')
            return
        }

        if (!isValidPassword(password)) {
            e.preventDefault();
            alert("비밀번호가 보안에 취약합니다. (영문,특수문자, 숫자 혼합 8자리 이상으로 설정해주세요.)")
            return
        }

        //TODO: 전화번호, 이메일 중복 확인 api 필요

        if (newUser.memAuthType === "E") {
            dispatch({
                type: "CREATE_USER",
                user: {
                    memName: username,
                    memPwd: password,
                    memPhone: sub,
                    memGender: gender,
                    memBirth: birthDate,
                },
            });
        } else if (newUser.memAuthType === "P") {
            dispatch({
                type: "CREATE_USER",
                user: {
                    memName: username,
                    memPwd: password,
                    memEmail: sub,
                    memGender: gender,
                    memBirth: birthDate,
                },
            });
        }
        navigate('/join5Normal');
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
                <h1 onClick={() => navigate('/', {replace:true})}>회원가입 선택<span>4단계 : 기본정보입력 (총 5단계)</span></h1>
                <div className="joinInfo">
                    <form>
                        <strong>{newUser?.memId}</strong>
                        <div>
                            <input type="text" placeholder="이름을 입력해주세요" value={username} onChange={(e) => setUsername(e.target.value)} maxLength={10} />
                            <input type="text" placeholder={`${newUser?.memAuthType === "E" ? "전화번호를" : "이메일을"} 입력해주세요.`} 
                                value={newUser?.memAuthType === "E" ? phone : email} 
                                onChange={(e) => newUser?.memAuthType === "E" ? setPhone(e.target.value) : setEmail(e.target.value)} 
                                inputMode={newUser?.memAuthType === "E" ? "numeric" : "email"} maxLength={newUser?.memAuthType === "E" ? 11 : 33}/>
                            <input type="number" placeholder="생년월일을 입력해주세요 예)19910101" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} inputMode="numeric" maxLength={8}/>
                        </div>
                        <dl>
                            <dt>성별을 선택해주세요</dt>
                            <dd className="kindTab">
                                <span className="radioSet">
                                    <input type="radio" name="radio1" defaultChecked={newUser?.memGender === 'M' ? true : false} onChange={() => setGender('M')} />
                                    <label htmlFor="">남</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" name="radio1" defaultChecked={newUser?.memGender === 'F' ? true : false} onChange={() => setGender('F')} />
                                    <label htmlFor="">여</label>
                                </span>
                            </dd>
                        </dl>
                        <div>
                            <input type="password" placeholder="비밀번호를 입력해주세요" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input type="password" placeholder="비밀번호를 다시 입력해주세요" value={confirmPw} onChange={(e) => setConfirmPw(e.target.value)} />
                        </div>
                    </form>
                    <Link to="#" className="btnL" onClick={onNextHandler}>다음</Link>
                </div>
            </section>
        </div>
    );
}

export default Join;