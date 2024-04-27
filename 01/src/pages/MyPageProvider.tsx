import { useUserDispatch, useUserState } from "UserContext";
import { Link, useNavigate } from "react-router-dom";
import DefaultHeader from "containers/DefaultHeader";
import { useMutation, useQuery } from "@tanstack/react-query";
import settingApi from "utils/api/settingApi";
import { useEffect, useState } from "react";
import DaumPost from "component/DaumPost";
import { setUserInfo } from "utils/store";
import { isValidateDateOfBirth, isValidateEmail, isValidatePhone } from "utils/format";

function MyPageProvider() {
    const navigate = useNavigate();
    const dispatch = useUserDispatch();
    const { user } = useUserState();
    const [info, setInfo] = useState<any>();
    const [visible, setVisible] = useState<boolean>(false);

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
    // console.log(data)

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

    const handleComplete = (fullAddr: any, extraAddr: any, zonecode: any) => {
        // console.log(zonecode) //우편번호
        setInfo({ ...info, memberEducatorVO: { ...info.memberEducatorVO, memAddress: fullAddr + extraAddr, memAddressZ: zonecode } })
    }

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
        if (info?.memberEducatorVO?.memBusinessNumber === '') {
            alert('사업자번호를 입력해주세요.')
            return
        }
        if (info?.memberEducatorVO?.businessStatus === '') {
            alert('업태를 입력해주세요.')
            return
        }
        if (info?.memberEducatorVO?.businessType === '') {
            alert('종목를 입력해주세요.')
            return
        }
        if (info?.memberEducatorVO?.memAddressD=== '') {
            alert('상세주소를 입력해주세요.')
            return
        }
        if ((info?.memBirth === '' || info?.memBirth?.length !== 8) && !isValidateDateOfBirth(info?.memBirth||'')) {
            alert('생년월일을 형식에 알맞게 입력해주세요.')
            return
        }
        if (info?.memGender === '') {
            alert('성별을 선택해주세요.')
            return
        }

        const params = {
            memUid: info?.memUid,
            memUseType: info?.memUseType,
            memAuthType: info?.memAuthType,
            memPhone: info?.memPhone,
            memEmail: info?.memEmail,
            memGender: info?.memGender,
            memBirth: info?.memBirth,
            memberEducatorVO: {
                memUid: info?.memberEducatorVO?.memUid,
                memBusinessNumber: info?.memberEducatorVO?.memBusinessNumber,
                businessName: info?.memberEducatorVO?.businessName,
                memAddress: info?.memberEducatorVO?.memAddress,
                memAddressD: info?.memberEducatorVO?.memAddressD,
                memAddressZ: info?.memberEducatorVO?.memAddressZ,
                businessStatus: info?.memberEducatorVO?.businessStatus,
                businessType: info?.memberEducatorVO?.businessType,
            }
        }

        chgInfo(params);
    }

    useEffect(() => {
        if (data) setInfo(data);
    }, [data])

    return (
        <>
            <DefaultHeader title={'기본정보수정'} headType={'sub'} />
            <div id="container" className="memberModify">
                <section>
                    <div className="mainContents">
                        <strong>{info?.memId}</strong>
                        <div>
                            <input type="text" placeholder="이름을 입력해주세요" maxLength={33} defaultValue={info?.memberEducatorVO.businessName} onChange={(e) => setInfo({ ...info, memberEducatorVO: { ...info.memberEducatorVO, businessName: e.target.value } })} />
                            <input type="text" placeholder={`${info?.memAuthType === "E" ? "전화번호를" : "이메일을"} 입력해주세요.`}
                                defaultValue={info?.memAuthType === "E" ? info?.memPhone : info?.memEmail} onChange={(e) => info?.memAuthType === "E" ? setInfo({ ...info, memPhone: e.target.value }) : setInfo({ ...info, memEmail: e.target.value })} />
                            <input type="text" placeholder="사업자번호를 입력해주세요" maxLength={33} defaultValue={info?.memberEducatorVO?.memBusinessNumber} onChange={(e) => setInfo({ ...info, memberEducatorVO: { ...info.memberEducatorVO, memBusinessNumber: e.target.value } })} />
                            <input type="text" placeholder="업태를 입력해주세요" maxLength={33} defaultValue={info?.memberEducatorVO?.businessStatus} onChange={(e) => setInfo({ ...info, memberEducatorVO: { ...info.memberEducatorVO, businessStatus: e.target.value } })} />
                            <input type="text" placeholder="종목을 입력해주세요" maxLength={33} defaultValue={info?.memberEducatorVO?.businessType} onChange={(e) => setInfo({ ...info, memberEducatorVO: { ...info.memberEducatorVO, businessType: e.target.value } })} />
                        </div>
                        <div style={{ display: 'flex', gap: 5 }}>
                            <input type="text" style={{ backgroundColor: '#FCD3E8' }} placeholder="주소를 검색해주세요" defaultValue={info?.memberEducatorVO?.memAddress} readOnly />
                            <button className="btnG sm" style={{ width: 'auto', height: 'auto', marginTop: 7, paddingBottom: 0 }} onClick={(e) => { e.preventDefault(); setVisible(true) }}>주소찾기</button>
                        </div>
                        <div>
                            <input type="text" placeholder="상세주소를 입력해주세요" maxLength={33} defaultValue={info?.memberEducatorVO?.memAddressD} onChange={(e) => setInfo({ ...info, memberEducatorVO: { ...info.memberEducatorVO, memAddressD: e.target.value } })} />
                        </div>
                        <div>
                            <input type="number" placeholder="생년월일을 입력해주세요 예)19910101" maxLength={8} defaultValue={info?.memBirth} onChange={(e) => setInfo({ ...info, memBirth: e.target.value })} />
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
                        <Link to="#" className="btnM" onClick={saveMypage}>기본정보 수정</Link>
                    </div>
                </section>
                {visible && <DaumPost setOnModal={(bool: boolean) => setVisible(bool)} callback={(fullAddr: any, extraAddr: any, zonecode: any) => handleComplete(fullAddr, extraAddr, zonecode)} />}
            </div>
        </>
    );
}



export default MyPageProvider;
