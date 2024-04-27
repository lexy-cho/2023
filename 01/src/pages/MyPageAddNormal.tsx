import { useMutation, useQuery } from "@tanstack/react-query";
import { useUserDispatch, useUserState } from "UserContext";
import DefaultHeader from "containers/DefaultHeader";
import MemberDTO from "dto/MemberDTO";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import settingApi from "utils/api/settingApi";
import { setUserInfo } from "utils/store";


function MyPageAddNormal() {
    const navigate = useNavigate();
    const dispatch = useUserDispatch();
    const { user } = useUserState();


    // const typeArr = [{ id: "B", title: "시각" }, { id: "C", title: "청각" }, { id: "D", title: "지체" }, { id: "E", title: "감각" }, { id: "E", title: "정신" }, { id: "F", title: "복합" },]
    const typeArr = [{ id: "B", title: "시각" }, { id: "C", title: "청각" }, { id: "D", title: "지체" }, { id: "E", title: "감각/정신" }, { id: "F", title: "복합" },]
    const extentArr = [{ id: "B", title: "심함" }, { id: "A", title: "심하지 않음" }]
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

    const [type, setType] = useState<string>(data?.memberNormalVO?.memAbleType || '')
    const [extent, setExtent] = useState<string>(data?.memberNormalVO?.memAbleStat || '')
    const [note, setNote] = useState<string>(data?.memberNormalVO?.memAdInformation || '')

    const { mutate: chgAddInfo } = useMutation(settingApi.chgAddInfo, {
        onError: (error, variable, context) => {
            console.log("error", error, variable, context);
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {
            setUserInfo({ ...data?.memberInfo, userType: 'U' });
            navigate(-1);
        },
    });

    const saveMypage = () => {
        // const params = {};

        /**
         * 전화번호, 생년월일 입력 및 포맷 확인
         */
        const params = {
            memUid: info?.memUid,
            memUseType: info?.memUseType,
            memberNormalVO: {
                memNormalUid: info?.memberNormalVO?.memNormalUid,
                memUid: info?.memberNormalVO?.memUid,
                memAbleType: type,
                memAbleStat: extent,
                memAdInformation: note
            }
        }

        chgAddInfo(params);
    }


    const handleNoteChange = (e: ChangeEvent<HTMLInputElement>) => {
        const length = e.target.maxLength;
        const newValue = e.target.value;
        if (getByteSize(newValue) <= length) {
            setNote(newValue);
        }
    };

    const getByteSize = (str: string) => {
        return new Blob([str]).size;
    };

    useEffect(() => {
        if (data) setInfo(data);
    }, [data])

    return (
        <>
            <DefaultHeader title={'추가정보수정'} headType={'sub'} />
            <div id="container" className="memberModify">
                <section>
                    <div className="mainContents">
                        <form>
                            <strong>{info?.memId}</strong>
                            <dl>
                                <dt>장애여부</dt>
                                <dd className="kindTab col6">
                                    {typeArr.map((t: any, idx: number) =>
                                        <span className="radioSet" key={idx}>
                                            <input type="radio" name="radio2" checked={type === t.id} onChange={() => setType(t.id)} />
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
                                {/* <dd><input type="text" placeholder="부가정보를 입력해주세요" value={note} onChange={(e) => setNote(e.target.value)} /></dd> */}
                                <dd><input type="text" placeholder="부가정보를 입력해주세요" value={note} onChange={(e) => handleNoteChange(e)} maxLength={500}/></dd>
                            </dl>
                        </form>
                        <Link to="#" className="btnM" onClick={saveMypage}>추가정보 수정</Link>
                    </div>
                </section>
            </div>
        </>
    );
}

export default MyPageAddNormal;
