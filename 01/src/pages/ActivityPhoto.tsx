import { useState, ChangeEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUserState } from "UserContext";
import { fileToBase64 } from "utils/common";
import { useMutation } from "@tanstack/react-query";
import activityApi from "utils/api/activityApi";
import Loading from "component/Loading";


function ActivityPhoto() {
    const navigate = useNavigate();
    const location = useLocation()

    const data = location.state?.data;
    // console.log(data);

    const { user } = useUserState();
    const [fileArr, setFileArr] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleFileArr = (file: any) => {
        let newArr = [...fileArr];
        newArr.push({ ...file, fileDesc: '' });
        setFileArr(newArr);
    }

    const deleteFileArr = (idx: number) => {
        let newArr = [...fileArr];
        newArr.splice(idx, 1);
        setFileArr(newArr);
    }

    const handleDesc = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
        //console.log(e.target.value);
        //console.log(idx);

        let newArr = [...fileArr];
        //console.log(newArr[idx].fileInfo.fileName);
        newArr.splice(idx, 1, { ...newArr[idx], fileDesc: e.target.value });
        // console.log(newArr);
        setFileArr(newArr);

    };


    const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
        if (fileArr.length === 20) {
            alert('사진등록은 20개까지 등록이 가능합니다.');
            return;
        }
        const fileInput = event.target;
        if (fileInput.files && fileInput.files.length > 0) {
            try {
                const file = fileInput.files[0];
                const { fileName, fileExt, fileBase64 } = await fileToBase64(file);
                // console.log('File Name:', fileName);
                // console.log('File Extension:', fileExt);
                // console.log('Base64 data:', fileBase64);
                //이미지 등록  api
                const fileJson = {
                    fileName: fileName,
                    fileExt: fileExt,
                    fileBase64: fileBase64
                }
                //chgMemPic(params);
                handleFileArr(fileJson);
            } catch (error) {
                console.error('Error converting file to base64:', error);
            }
        }
    };

    const postActivity = useMutation(activityApi.postActivity, {
        onMutate: (variable) => {
            setLoading(true);
        },
        onError: (error, variable, context) => {
            // console.log("error", error, variable, context);
            alert('활동 등록이 실패되었습니다. 잠시후 다시 시도해주세요.')
            return
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {
            // alert('활동 등록이 완료되었습니다.');
            // console.log(statusCode, data);
            navigate('/activityRegEnd');

        },
        onSettled: (data: any) => {
            setLoading(false);
        },
    });

    const handleSubmit = () => {
        // console.log(fileArr);
        //return;
        let param = JSON.parse(data);
        param = { ...param, fileList: fileArr };
        postActivity.mutate(param);
    }

    return (
        <>
            <Loading isLoading={loading} />
            <div id="container" className="memberCase">
                <section>
                    <h1>활동등록<span>2단계 : 사진 등록 (총 2단계)</span></h1>
                    <div className="activityImg">
                        <ul className="imgList">
                            {
                                fileArr.map((el: any, idx: number) => {
                                    return (
                                        <li key={`img_${el.fileName}_${idx}`}>
                                            <button onClick={() => deleteFileArr(idx)}>삭제</button>
                                            <span><img style={{ objectFit: 'cover' }} src={`data:image/png;base64,${el.fileBase64}`} /></span>
                                            <input type="text" placeholder="이미지설명" onChange={(e) => { handleDesc(e, idx) }} />
                                        </li>
                                    )
                                })
                            }

                            {/* <li>
                        <button>삭제</button>
                        <img src=""  alt="파일설명이 나옵니다" />
                    </li>
                    <li>
                        <button>삭제</button>
                        <span><img src="" alt="파일설명이 나옵니다" /></span>
                    </li>
                    <li>
                        <button>삭제</button>
                        <span><img src="" alt="파일설명이 나옵니다" /></span>
                    </li>
                
                
                    <li>
                        <button>삭제</button>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/img_thumbnail.svg`}  alt="파일설명이 나옵니다" />
                    </li>
                    <li>
                        <button>삭제</button>
                        <img src=""  alt="파일설명이 나옵니다" />
                    </li>
                    <li>
                        <button>삭제</button>
                        <span><img src="" alt="파일설명이 나옵니다" /></span>
                    </li>
                    <li>
                        <button>삭제</button>
                        <span><img src="" alt="파일설명이 나옵니다" /></span>
                    </li>
                
                    <li>
                        <button>삭제</button>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/img_thumbnail.svg`}  alt="파일설명이 나옵니다" />
                    </li>
                    <li>
                        <button>삭제</button>
                        <img src=""  alt="파일설명이 나옵니다" />
                    </li>
                    <li>
                        <button>삭제</button>
                        <span><img src="" alt="파일설명이 나옵니다" /></span>
                    </li>
                    <li>
                        <button>삭제</button>
                        <span><img src="" alt="파일설명이 나옵니다" /></span>
                    </li>
                
                    <li>
                        <button>삭제</button>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/img_thumbnail.svg`}  alt="파일설명이 나옵니다" />
                    </li>
                    <li>
                        <button>삭제</button>
                        <img src=""  alt="파일설명이 나옵니다" />
                    </li>
                    <li>
                        <button>삭제</button>
                        <span><img src="" alt="파일설명이 나옵니다" /></span>
                    </li>
                    <li>
                        <button>삭제</button>
                        <span><img src="" alt="파일설명이 나옵니다" /></span>
                    </li> */}
                        </ul>

                        <span className="fileFind"><input type="file" accept='image/*' id="file" onChange={uploadImage} /><label>+사진등록</label></span>

                        {/* <button onClick={() => handleSubmit()} className="btnL" style={{ marginTop: 20 }}>다음</button>
                        <button onClick={() => navigate(-1)} className="btnL" style={{ marginTop: 20 }}>이전</button> */}
                        <Link to={'#'} onClick={() => handleSubmit()} className="btnL" style={{ marginTop: 20 }}>다음</Link>
                        <Link to={'#'} onClick={() => navigate(-1)} className="btnL" style={{ marginTop: 20 }}>이전</Link>
                    </div>
                </section>
            </div>
        </>

    )
}

export default ActivityPhoto;
