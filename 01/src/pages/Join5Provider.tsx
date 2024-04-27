import { useMutation } from "@tanstack/react-query";
import { useUserDispatch, useUserState } from "UserContext";
import { useState, useEffect, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import joinApi from "utils/api/joinApi";
import { fileToBase64 } from "utils/common";
import { setAccessToken, setUserInfo } from "utils/store";

function Join() {
    const navigate = useNavigate();
    const [detailInfo, setDetailInfo] = useState<string>("")
    const [fileArr, setFileArr] = useState<any>([]);
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

    const onSubmitHandler = () => {
        if(fileArr.some((el:any) => el.fileDesc === '')) {
            alert('소개 이미지 설명은 필수 입니다.');
            return
        }
        let param = newUser
        delete param.certNo;
            
        if (newUser.memAuthType === 'P') {
            param = { ...param, memPhone: newUser.memId, memberEducatorVO: { ...param.memberEducatorVO, detailIntroduction: detailInfo }, fileList: fileArr }
        } else if (newUser.memAuthType === 'E') {
            param = { ...param, memEmail: newUser.memId, memberEducatorVO: { ...param.memberEducatorVO, detailIntroduction: detailInfo }, fileList: fileArr }
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
            //   navigate('/login')
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {
            if (statusCode === 200) {
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
            // console.log(statusCode, data)
            navigate('/joinEnd');
        },
    });

    // const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files) {
    //         let files: FileList = e.target.files;
    //         let file: File;
    //         let prevUrls: any[] = []
    //         let fileUrls: any[] = []

    //         let fileName;
    //         let fileBase64;
    //         let fileObj;

    //         for (let i = 0; i < files.length; i++) {
    //             file = files[i]
    //             let reader = new FileReader();
    //             reader.onload = () => {
    //                 //api에 보내기 위한 데이터
    //                 fileBase64 = String(reader.result).split(',')[1]
    //                 fileName = file.name;
    //                 fileObj = { fileName, fileBase64, stat: 'N' }
    //                 fileUrls = [...fileUrls, fileObj]
    //                 setImgFiles([...imgFiles, ...fileUrls])

    //                 //미리보기용 데이터
    //                 prevUrls = [...prevUrls, reader.result]
    //                 setImages([...images, ...prevUrls])
    //             };
    //             reader.readAsDataURL(file);
    //         }
    //     }
    // }

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
                const fileJson = {
                    fileName: fileName,
                    fileExt: fileExt,
                    fileBase64: fileBase64,
                    fileDesc: ''
                }
                handleFileArr(fileJson);
            } catch (error) {
                console.error('Error converting file to base64:', error);
            }
        }
    };

    const handleFileArr = (file: any) => {
        let newArr = [...fileArr];
        newArr.push(file);
        setFileArr(newArr);
    }

    const deleteFileArr = (idx: number) => {
        let newArr = [...fileArr];
        newArr.splice(idx, 1);
        setFileArr(newArr);
    }

    return (
        <div id="container" className="memberCase">
            <section>
                <h1 onClick={() => navigate('/', {replace:true})}>회원가입 선택<span>5단계 : 추가정보입력 (총 5단계)</span></h1>
                <div className="joinInfo">
                    <strong>{newUser?.memId}</strong>
                    <div>
                        <input type="text" placeholder="상세소개를 입력해주세요" style={{ marginBottom: 20 }} onChange={(e) => setDetailInfo(e.target.value)} />
                    </div>
                    <div>
                        <strong>소개 이미지를 등록해주세요</strong>
                    </div>
                    <div className="activityImg">
                        <ul className="imgList">
                            {
                                fileArr.map((el: any, idx: number) => {
                                    return (
                                        <li key={`img${idx}`}>
                                            <button onClick={() => deleteFileArr(idx)}>삭제</button>
                                            <span><img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={`data:image/png;base64,${el.fileBase64}`} /></span>
                                            <input type="text" placeholder="이미지설명" defaultValue={el.fileDesc} onChange={(e) => el.fileDesc = e.target.value}/>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <span className="fileFind">
                            <input type="file" accept='image/*' id="file" onChange={uploadImage} />
                            <label htmlFor="file">+사진등록</label>
                        </span>
                        <Link to="#" className="btnL" style={{ marginTop: 20 }} onClick={onSubmitHandler}>다음</Link>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Join;
