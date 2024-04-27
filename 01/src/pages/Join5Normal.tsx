import { useMutation } from "@tanstack/react-query";
import { useUserDispatch, useUserState } from "UserContext";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import joinApi from "utils/api/joinApi";
import { setAccessToken, setUserInfo } from "utils/store";

function Join() {
    const navigate = useNavigate();
    const [type, setType] = useState({ id: "", title: "" })
    const [extent, setExtent] = useState<string>('')
    const [note, setNote] = useState<string>('')
    // const typeArr = [{ id: "B", title: "시각" }, { id: "C", title: "청각" }, { id: "D", title: "지체" }, { id: "E", title: "감각" }, { id: "E", title: "정신" }, { id: "F", title: "복합" },]
    const typeArr = [{ id: "B", title: "시각" }, { id: "C", title: "청각" }, { id: "D", title: "지체" }, { id: "E", title: "감각/정신" }, { id: "F", title: "복합" },]
    const extentArr = [{ id: "B", title: "심함" }, { id: "A", title: "심하지 않음" }]

    const { newUser } = useUserState();
    const dispatch = useUserDispatch();

    // console.log("context NewUser:", newUser);
    //////////////////////////////////////

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

    let param = newUser
    delete param?.certNo;

    const moreInfoJoin = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (type.id === '') {
            alert('장애여부를 선택해주세요.')
            return
        }
        if (extent === '') {
            alert('장애정도를 선택해주세요.')
            return
        }

        if (newUser.memAuthType === 'P') {
            param = { ...param, memPhone: newUser.memId, memberNormalVO: { memAbleType: type.id, memAbleStat: extent, memAdInformation: note } }
        } else if (newUser.memAuthType === 'E') {
            param = { ...param, memEmail: newUser.memId, memberNormalVO: { memAbleType: type.id, memAbleStat: extent, memAdInformation: note } }
        } else return

        if (newUser.memUid) {
            joinPut.mutate(param)
        } else {
            joinPost.mutate(param)
        }
    }

    const skipMoreInfo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (newUser.memAuthType === 'P') {
            param = { ...param, memPhone: newUser.memId, memberNormalVO: { memAbleType: 'A' } }
        } else if (newUser.memAuthType === 'E') {
            param = { ...param, memEmail: newUser.memId, memberNormalVO: { memAbleType: 'A' } }
        } else return

        if (newUser.memUid) {
            joinPut.mutate(param)
        } else {
            joinPost.mutate(param)
        }
    }

    const joinPost = useMutation(joinApi.join, {
        onError: ({ error }, variable, context) => {
            console.log("error", error, variable, context);
            alert(error.errorMessage);
            // navigate('/login')
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {
            if (statusCode === 200) {
                // console.log(data);
                setAccessToken(data?.accessToken);
                setUserInfo({ ...data?.user, userType: 'U' });
                dispatch({ type: 'LOGIN', user: { ...data?.user, userType: 'U' } });
                navigate('/joinEnd');
            }
        },
    });

    const joinPut = useMutation(joinApi.upGrade, {
        onError: ({ error }, variable, context) => {
            console.log("error", error, variable, context);
            alert(error.errorMessage);
            return
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {
            alert('가입이 완료되었습니다.');
            navigate('/joinEnd');
            // console.log(statusCode, data)
        },
    });

    return (
        <div id="container" className="memberCase">
            <section>
                <h1 onClick={() => navigate('/', {replace:true})}>회원가입 선택<span>5단계 : 추가정보입력 (총 5단계)</span></h1>
                <div className="joinInfo">
                    <form onSubmit={(event: any) => event.preventDefault()}>
                        <strong>{newUser?.memId}</strong>
                        <dl>
                            <dt>장애여부</dt>
                            <dd className="kindTab col6">
                                {typeArr.map((t: any, idx: number) =>
                                    <span className="radioSet" key={idx}>
                                        <input type="radio" name="radio2" checked={type.title === t.title} onChange={() => setType(t)} />
                                        <label htmlFor="">{t.title}</label>
                                    </span>
                                )}
                            </dd>
                        </dl>
                        <dl>
                            <dt>장애정도</dt>
                            <dd className="kindTab">
                                {extentArr.map((e: any, idx: number) =>
                                    <span className="radioSet" key={idx}>
                                        <input type="radio" name="radio3" checked={extent === e.id} onChange={() => setExtent(e.id)} />
                                        <label htmlFor="">{e.title}</label>
                                    </span>
                                )}
                            </dd>
                            <dd><input type="text" placeholder="부가정보를 입력해주세요" onChange={(e) => setNote(e.target.value)} /></dd>
                        </dl>
                    </form>
                    <Link to="#" className="btnL" onClick={(e) => moreInfoJoin(e)}>다음</Link>
                    <Link to="#" className="btnG" onClick={(e) => skipMoreInfo(e)}>해당없음</Link>
                </div>
            </section>
        </div>
    );
}

export default Join;
