import { useUserDispatch, useUserState } from "UserContext";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import DefaultHeader from "containers/DefaultHeader";
import { ChangeEvent, useEffect, useState } from "react";
import settingApi from "utils/api/settingApi";
import MemberDTO from "dto/MemberDTO";
import { fileToBase64 } from "utils/common";
import { setUserInfo } from "utils/store";

function MyPageAddProvider() {
    const navigate = useNavigate();
    const dispatch = useUserDispatch();
    const { user } = useUserState();

    const [detailInfo, setDetailInfo] = useState<string>("");
    const [info, setInfo] = useState<MemberDTO>();
    const [fileArr, setFileArr] = useState<any>([]);

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
    // console.log(data);

    const { mutate: chgAddInfo } = useMutation(settingApi.chgAddInfo, {
        onError: (error, variable, context) => {
            console.log("error", error, variable, context);
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {
            // console.log(statusCode, data);
            if (statusCode == 200) {
                setUserInfo({ ...data?.memberInfo, userType: 'U' });
                navigate(-1);
            }
        },
    });

    useEffect(() => {
        if (data) {
            setInfo(data);
            setDetailInfo(data?.memberEducatorVO?.detailIntroduction);
            setFileArr(data?.offerImage);
        }
    }, [data])

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
                    stat: 'N'
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
        newArr[idx].stat = 'D';
        setFileArr(newArr);
    }

    const saveMypage = () => {
        if (fileArr.some((el: any) => el.fileDesc === '')) {
            alert('소개 이미지 설명은 필수 입니다.');
            return
        }

        const params = {
            memUseType: info?.memUseType,
            memUid: info?.memUid,
            memberEducatorVO: {
                memEducatorUid: info?.memberEducatorVO?.memEducatorUid,
                memUid: info?.memberEducatorVO?.memUid,
                detailIntroduction: detailInfo
            },
            fileList: fileArr
        }
        // console.log("params=====>", params);
        // console.log("fileArr======>", fileArr);
        chgAddInfo(params)
    }

    return (
        <>
            <DefaultHeader title={'추가정보수정'} headType={'sub'} />
            <div id="container" className="memberModify">
                <section>
                    <div className="mainContents">
                        <div style={{ height: 'calc(100vh - 280px)' }}>
                            <strong>{info?.memId}</strong>
                            <div>
                                <input type="text" placeholder="상세소개를 입력해주세요" defaultValue={detailInfo} style={{ marginBottom: 20 }} onChange={(e) => setDetailInfo(e.target.value)} />
                            </div>
                            <div>
                                <strong>소개 이미지를 등록해주세요</strong>
                            </div>
                            <div className="imageRow">
                                <ul className="imgList">
                                    {
                                        fileArr.filter((el: any) => el.stat !== 'D').map((el: any, idx: number) => {
                                            return (
                                                <li key={`img${idx}`}>
                                                    <button onClick={() => deleteFileArr(idx)}>삭제</button>
                                                    <span>
                                                        {
                                                            el.fileUid && (
                                                                <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={`${process.env.REACT_APP_FILE_URL}${el.fileUrl}`} alt={el.fileDesc ? el.fileDesc : ''} />
                                                            )
                                                        }
                                                        {
                                                            !el.fileUid && <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={`data:image/png;base64,${el.fileBase64}`} alt={el.fileDesc ? el.fileDesc : ''} />
                                                        }
                                                    </span>
                                                    <input type="text" placeholder="이미지설명" defaultValue={el.fileDesc} onChange={(e) => el.fileDesc = e.target.value} />
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div>
                                    <label className="btnG" htmlFor="file" style={{ marginBottom: 20 }}>이미지 추가</label>
                                    <input type="file" accept='image/*' id="file" onChange={uploadImage} multiple style={{ display: 'none' }} />
                                </div>
                                <Link to="#" className="btnL" onClick={saveMypage}>추가정보 수정</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default MyPageAddProvider;
