import { useNavigate, } from "react-router-dom";
import { useUserState } from "UserContext";
import { useMutation } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import settingApi from "utils/api/settingApi";
import { setUserInfo } from "utils/store";
import { Link } from "react-router-dom";
import Loading from "component/Loading";

function AddProfile() {

    const navigate = useNavigate();
    const [type, setType] = useState<string>('');
    const [extent, setExtent] = useState<string>('')
    const [note, setNote] = useState<string>('')
    const typeArr = [{ id: "B", title: "시각" }, { id: "C", title: "청각" }, { id: "D", title: "지체" }, { id: "E", title: "감각" }, { id: "E", title: "정신" }, { id: "F", title: "복합" },]
    const extentArr = [{ id: "B", title: "심함" }, { id: "A", title: "심하지 않음" }]
    const [loading, setLoading] = useState<boolean>(false);

    const { user } = useUserState();

    const chgAddInfp = useMutation(settingApi.chgAddInfo, {
        onMutate: (variable) => {
            setLoading(true);
        },
        onError: (error, variable, context) => {
            //   console.log("error", error, variable, context);
            alert('추가프로필 등록이 실패되었습니다. 잠시후 다시 시도해주세요.')
            return
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {
            alert('추가프로필 등록이 완료되었습니다.');
            // console.log(statusCode,data);
            user.memberNormalVO.memAbleType = type;
            user.memberNormalVO.memAbleStat = extent;
            user.memberNormalVO.memAdInformation = note;
            setUserInfo(user);

            navigate('/activityWrite2/U', { replace: true });
        },
        onSettled: (data: any) => {
            setLoading(false);
        },
    });


    const handleAddProfile = () => {
        // console.log(extent)
        // console.log(type)
        // console.log(note)

        if (!type) {
            alert('장애여부를 선택해주세요.');
            return;
        }

        if (!extent) {
            alert('장애정도를 선택해주세요');
            return;
        }

        const param = {
            memUid: user.memUid,
            memUseType: "U", // 이용자:U, 제공자:O
            // 일반회원인경우
            memberNormalVO: {
                memUid: user.memUid,
                memAbleType: type,
                memAbleStat: extent,
                memAdInformation: note
            }
        };

        chgAddInfp.mutate(param);

    }

    return (
        <>
            <Loading isLoading={loading} />
            <div id="container" className="memberCase">
                <section>
                    <h1>추가 프로필 등록이 필요해요.<span style={{ marginTop: 10 }}>활동등록을 위해 추가 정보를<br /> 더 입력해주세요.</span></h1>
                    <div className="joinInfo">

                        <dl>
                            <dt>장애여부</dt>
                            <dd className="kindTab col6">
                                {typeArr.map((t: any, idx: number) =>
                                    <span className="radioSet" key={idx}>
                                        <input type="radio" name="radio2" value={t.id} onChange={(e) => setType(e.target.value)} />
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
                                        <input type="radio" name="radio3" value={e.id} onChange={() => setExtent(e.id)} />
                                        <label htmlFor="">{e.title}</label>
                                    </span>
                                )}
                            </dd>
                            <dd><input type="text" placeholder="부가정보를 입력해주세요" onChange={(e) => setNote(e.target.value)} /></dd>
                        </dl>

                        {/* <button  className="btnL" style={{marginTop: 20}} onClick={() => handleAddProfile()}>등록하기</button>
                    <button  className="btnG" style={{marginTop: 20}} onClick={() => navigate(-1)} >뒤로가기</button> */}

                        <Link to={'#'} className="btnL" style={{ marginTop: 20 }} onClick={() => handleAddProfile()}>등록하기</Link>
                        <Link to={'#'} className="btnG" style={{ marginTop: 20 }} onClick={() => navigate(-1)}>뒤로가기</Link>
                    </div>
                </section>
            </div>
        </>
    )
}


export default AddProfile;
