import { useMutation, useQuery } from "@tanstack/react-query";
import { useUserDispatch, useUserState } from "UserContext";
import DefaultHeader from "containers/DefaultHeader";
import MemberDTO from "dto/MemberDTO";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import settingApi from "utils/api/settingApi";
import { isValidateDateOfBirth, isValidateEmail, isValidatePhone } from "utils/format";
import { setUserInfo } from "utils/store";

function MyPageNormal() {
    const navigate = useNavigate();
    const dispatch = useUserDispatch();
    const { user } = useUserState();
    const [info, setInfo] = useState<MemberDTO>();

    const getMypage = async (): Promise<any> => {
        try {
            const response: any = await settingApi.getMypage({ memUid: user.memUid });
            if (response.statusCode === 200) {
                return response.data.memberInfo;
            }
        } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch data");
        }
    };

    const { data, isLoading, isError, refetch } = useQuery<any>(["getMypage"], getMypage, { enabled: !!user?.memUid, cacheTime: 0 });

    const { mutate: chgInfo } = useMutation(settingApi.chgInfo, {
        onError: ({ error }, variable, context) => {
            console.log("error", error, variable, context);
            alert(error.errorMessage);
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {
            setUserInfo({ ...data?.memberInfo, userType: 'U' });
            navigate(-1);
        },
    });

    const saveMypage = () => {
        let sub = (info?.memAuthType === "E" ? info?.memPhone : info?.memEmail) || '';
        if (info?.memName === '') {
            alert('이름을 입력해주세요.')
            return
        }
        if (sub === '') {
            alert(`${info?.memAuthType === "E" ? '전화번호를' : '이메일을'} 입력해주세요.`)
            return
        }
        if (info?.memAuthType === "E" && !isValidatePhone(sub)) {
            alert('유효하지않은 전화번호 형식입니다.');
            return
        }
        if (info?.memAuthType === "P" && !isValidateEmail(sub)) {
            alert('유효하지않은 이메일 형식입니다.');
            return
        }
        if (info?.memGender === '') {
            alert('성별을 선택해주세요.')
            return
        }
        if ((info?.memBirth === '' || info?.memBirth?.length !== 8) && !isValidateDateOfBirth(info?.memBirth || '')) {
            alert('생년월일을 형식에 알맞게 입력해주세요.')
            return
        }

        const params = {
            memUid: info?.memUid,
            memUseType: info?.memUseType,
            memAuthType: info?.memAuthType,
            memName: info?.memName,
            memPhone: info?.memPhone,
            memEmail: info?.memEmail,
            memGender: info?.memGender,
            memBirth: info?.memBirth,
        }
        chgInfo(params);
    }

    useEffect(() => {
        if (data) setInfo(data);
    }, [data])

    return (
        <>
            <DefaultHeader title={'기본정보수정'} headType={'sub'} />
            <div id="container" className="memberModify" >
                <section>
                    <div className="mainContents">
                        <form>
                            <strong>{info?.memId}</strong>
                            <div>
                                <input type="text" placeholder="이름을 입력해주세요" defaultValue={info?.memName} onChange={(e) => setInfo({ ...info, memName: e.target.value })} maxLength={10} />
                                <input type="text" placeholder={`${info?.memAuthType === "E" ? "전화번호를" : "이메일을"} 입력해주세요.`}
                                    defaultValue={info?.memAuthType === "E" ? info?.memPhone : info?.memEmail}
                                    onChange={(e) => info?.memAuthType === "E" ? setInfo({ ...info, memPhone: e.target.value }) : setInfo({ ...info, memEmail: e.target.value })}
                                    inputMode={info?.memAuthType === "E" ? "numeric" : "email"} maxLength={info?.memAuthType === "E" ? 11 : 33} />
                                <input type="number" placeholder="생년월일을 입력해주세요 예)19910101"
                                    defaultValue={info?.memBirth}
                                    maxLength={8}
                                    inputMode={'numeric'} 
                                    onChange={(e) => setInfo({ ...info, memBirth: e.target.value })} />
                            </div>
                            <dl>
                                <dt>성별을 선택해주세요</dt>
                                <dd className="kindTab">
                                    <span className="radioSet">
                                        <input type="radio" name="radio1" checked={info?.memGender === 'M' ? true : false} value={'M'} onChange={(e) => setInfo({ ...info, memGender: e.target.value })} />
                                        <label htmlFor="">남</label>
                                    </span>
                                    <span className="radioSet">
                                        <input type="radio" name="radio1" checked={info?.memGender === 'F' ? true : false} value={'F'} onChange={(e) => setInfo({ ...info, memGender: e.target.value })} />
                                        <label htmlFor="">여</label>
                                    </span>
                                </dd>
                            </dl>
                        </form>
                        <Link to="#" className="btnM" onClick={saveMypage}>기본정보 수정</Link>
                    </div>
                </section>
            </div>
        </>
    );
}



export default MyPageNormal;
