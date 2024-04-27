import { useQuery } from "@tanstack/react-query";
import DaumPost from "component/DaumPost";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserDispatch, useUserState } from "UserContext";
import { mainApi } from "utils/api";
import joinApi from "utils/api/joinApi";
import { isValidateEmail, isValidatePhone, isValidPassword } from "utils/format";

function Join() {
    const navigate = useNavigate()
    const [visible, setVisible] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [regNum, setRegNum] = useState<string>('')
    const [type, setType] = useState<string>('');
    const [items, setItems] = useState<string>('');
    const [password, setPassword] = useState<string>('')
    const [confirmPw, setConfirmPw] = useState<string>('')
    const [selectedAddr, setSelectedAddr] = useState<string>('');
    const [detailAddr, setDetailAddr] = useState<string>('');
    const [zonecode, setZonecode] = useState<string>('');

    const { newUser } = useUserState();
    const dispatch = useUserDispatch();

    //  * Daum 주소찾기 API 예제
    //  * 다음주소 API로 모달 호출 setVisible(변수명 변경해서 사용가능)
    //  * Modal 컴포넌트는 관리자 그대로 사용
    //  * Modal 스타일 변경필요
    //  * DaumPost 컴포넌트 호출 완료시 handleComplete 호출(function 이름 및 Data 변경해서 사용가능)
    const handleComplete = (fullAddr: any, extraAddr: any, zonecode: any) => {
        setZonecode(zonecode) //우편번호
        setSelectedAddr(fullAddr + extraAddr)
    }

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
        let sub = newUser.memAuthType === "E" ? phone : email
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
        if (regNum === '') {
            e.preventDefault();
            alert('사업자번호를 입력해주세요.')
            return
        }
        if (type === '') {
            e.preventDefault();
            alert('업태를 입력해주세요.')
            return
        }
        if (items === '') {
            e.preventDefault();
            alert('종목을 입력해주세요.')
            return
        }
        if (selectedAddr === '') {
            e.preventDefault();
            alert('사업장 주소를 입력해주세요.')
            return
        }
        if (detailAddr == '') {
            e.preventDefault();
            alert('사업장 상세 주소를 입력해주세요.')
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
                    memberEducatorVO: {
                        memBusinessNumber: regNum,
                        memAddress: selectedAddr,
                        memAddressD: detailAddr,
                        memAddressZ: zonecode,
                        businessStatus: type,
                        businessType: items,
                    },

                },
            });
        } else if (newUser.memAuthType === "P") {
            dispatch({
                type: "CREATE_USER",
                user: {
                    memName: username,
                    memPwd: password,
                    memEmail: sub,
                    memberEducatorVO: {
                        memBusinessNumber: regNum,
                        memAddress: selectedAddr,
                        memAddressD: detailAddr,
                        memAddressZ: zonecode,
                        businessStatus: type,
                        businessType: items,
                    },

                },
            });
        }
        navigate('/join5Provider');
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
                            <input type="text" placeholder="사업자번호를 입력해주세요" value={regNum} onChange={(e) => setRegNum(e.target.value)} maxLength={33} />
                            <input type="text" placeholder="업태를 입력해주세요" value={type} onChange={(e) => setType(e.target.value)} maxLength={33} />
                            <input type="text" placeholder="종목을 입력해주세요" value={items} onChange={(e) => setItems(e.target.value)} maxLength={33} />
                        </div>
                        <div style={{ display: 'flex', gap: 5 }}>
                            <input type="text" style={{ backgroundColor: '#FCD3E8' }} placeholder="주소를 검색해주세요" defaultValue={selectedAddr} readOnly />
                            <button className="btnG sm" style={{ width: 'auto', height: 'auto', marginTop: 7, paddingBottom: 0 }} onClick={(e) => { e.preventDefault(); setVisible(true) }}>주소찾기</button>
                        </div>
                        <div>
                            <input type="text" placeholder="상세주소를 입력해주세요" value={detailAddr} onChange={(e) => setDetailAddr(e.target.value)} maxLength={33} />
                            <input type="password" placeholder="비밀번호를 입력해주세요" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input type="password" placeholder="비밀번호를 다시 입력해주세요" value={confirmPw} onChange={(e) => setConfirmPw(e.target.value)} />
                        </div>
                    </form>
                    <Link to="#" className="btnL" onClick={onNextHandler}>다음</Link>
                </div>
            </section>
            {visible && <DaumPost setOnModal={(bool: boolean) => setVisible(bool)} callback={(fullAddr: any, extraAddr: any, zonecode: any) => handleComplete(fullAddr, extraAddr, zonecode)} />}
        </div>
    );
}

export default Join;
