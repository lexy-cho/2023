import { useMutation, useQuery } from "@tanstack/react-query";
import { useUserDispatch, useUserState } from "UserContext";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "utils/api";
import settingApi from "utils/api/settingApi";
import { fileToBase64 } from "utils/common";
import { convGender } from "utils/conversion";
import { formatDate } from "utils/format";

import DefaultFooter from "containers/DefaultFooter";
import DefaultHeader from "containers/DefaultHeader";
import styled from "styled-components";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { getUserInfo } from "utils/store";
import Loading from "component/Loading";

function MyPage() {
    const navigate = useNavigate();
    const [image, setImage] = useState<any>([])
    const dispatch = useUserDispatch();
    const { user } = useUserState();
    const [loading, setLoading] = useState<boolean>(false);

    // const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files?.[0]) {
    //         //화면에 프로필 사진 표시
    //         setImage(e.target.files[0])

    //         const reader = new FileReader();
    //         reader.onload = () => {
    //             if (reader.readyState === 2) {
    //                 setImage(reader.result)
    //             }
    //         }
    //         reader.readAsDataURL(e.target.files[0])
    //     }
    //     //이미지 등록  api
    // }

    const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
        const fileInput = event.target;
        if (fileInput.files && fileInput.files.length > 0) {
            try {
                const file = fileInput.files[0];
                const { fileName, fileExt, fileBase64 } = await fileToBase64(file);
                // console.log('File Name:', fileName);
                // console.log('File Extension:', fileExt);
                // console.log('Base64 data:', fileBase64);
                //이미지 등록  api
                const params = {
                    memUid: user?.memUid,
                    profileImage: {
                        fileName: fileName,
                        fileExt: fileExt,
                        fileBase64: fileBase64
                    }
                }
                chgMemPic(params);
            } catch (error) {
                console.error('Error converting file to base64:', error);
            }
        }
    };

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

    const { mutate: chgMemPic } = useMutation(settingApi.chgMemPic, {
        onMutate: (variable) => {
            setLoading(true);
        },
        onError: (error, variable, context) => {
            console.log("error", error, variable, context);
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {
            console.log(statusCode, data)
            refetch();
        },
        onSettled: (data: any) => {
            setLoading(false);
        },
    });

    const { mutate: memOut } = useMutation(settingApi.memOut, {
        onError: (error, variable, context) => {
            console.log("error", error, variable, context);
        },
        onSuccess: ({ statusCode, data }: any, variables, context) => {
            loginApi.logout();
            dispatch({ type: "LOGOUT" });
            window.location.reload();
        },
    });

    const { data, isLoading, isError, refetch } = useQuery<any>(["getMypage", getUserInfo()], getMypage, { enabled: !!user?.memUid, cacheTime: 0 });
    const swiperArr = data?.offerImage;
    
    const logout = () => {
        if (window.confirm(`로그아웃 하시겠습니까?`)) {
            loginApi.logout();
            dispatch({ type: "LOGOUT" });
            window.location.reload();
            // navigate('/');
        }
    }

    const memout = () => {
        if (window.confirm(`서로플랫폼 회원을 탈퇴 하시겠습니까?`)) memOut({ memUid: data?.memUid, memUseType: data?.memUseType });
    }

    return (
        <>
            <DefaultHeader title={'마이서로'} headType={'sub'} tailType={'all'} />
            <Loading isLoading={loading} />
            <div id="container">
                <section>
                    <div className="mainContents mypage" >
                        {data?.memUseType === 'O' ? (
                            <div className="mypageTop">
                                <div className="banner">
                                    <StyleSwiper
                                        slidesPerView={1}
                                        cssMode={false}
                                        navigation={true}
                                        modules={[Navigation]}
                                        preventInteractionOnTransition={true}
                                    >
                                        {swiperArr?.map((el: any, idx: number) => (
                                            <SwiperSlide key={el.fileUid || idx}>
                                                <img className="slide-img" src={`${process.env.REACT_APP_FILE_URL}${el.fileUrl}`} />
                                            </SwiperSlide>
                                        ))}
                                    </StyleSwiper>
                                    <span>{data?.memberEducatorVO?.detailIntroduction}</span>
                                </div>
                                <div className="myprofile">
                                    <div className="myprofileBack" style={{ backgroundImage: `url(${data?.profileImage?.fileUrl ? process.env.REACT_APP_FILE_URL + data?.profileImage?.fileUrl : ''})` }}>
                                        <div>
                                            <label htmlFor="file">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/ic_photo.svg`} />
                                                <input style={{ display: 'none' }} type="file" accept='image/*' id="file" onChange={uploadImage} />
                                            </label>
                                        </div>
                                    </div>
                                    <span>{data?.memberEducatorVO?.businessName}</span>
                                    <span>{data?.memberEducatorVO?.memBusinessNumber}|{data?.memberEducatorVO?.businessStatus}|{data?.memberEducatorVO?.businessType}</span>
                                    <span>{data?.memberEducatorVO?.memAddress}</span>
                                    <span>{formatDate(data?.memBirth, 'YYYY.MM.DD')} | {convGender(data?.memGender)}</span>
                                    <span>{Number(data?.memGrade) ? '★' + data?.memGrade : ''}</span>
                                </div>
                            </div>

                        ) : (
                            <div className="mypageTop noBanner">
                                <div className="myprofile">
                                    <div className="myprofileBack" style={{ backgroundImage: `url(${data?.profileImage?.fileUrl ? process.env.REACT_APP_FILE_URL + data?.profileImage?.fileUrl : ''})` }}>
                                        <div>
                                            <label htmlFor="file">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/ic_photo.svg`} />
                                                <input style={{ display: 'none' }} type="file" accept='image/*' id="file" onChange={uploadImage} />
                                            </label>
                                        </div>
                                    </div>
                                    <span>{data?.memName}</span>
                                    <span>{data?.memId}</span>
                                    <span>{formatDate(data?.memBirth, 'YYYY.MM.DD')} | {convGender(data?.memGender)}</span>
                                    {Number(data?.memGrade) ? <span>★ {data?.memGrade}</span> : ''}
                                </div>
                            </div>
                        )}
                        <div className="myinfoBtn">
                            <div>
                                <Link to={data?.memUseType === 'U' ? '/myPage/normal' : '/myPage/provider'} className="btnM sm">기본정보 수정</Link>
                                <Link to={data?.memUseType === 'U' ? '/myPage/addNormal' : '/myPage/addProvider'} className="btnM sm">추가정보 수정</Link>
                            </div>
                            <div>
                                <Link to={'/pwReset'} state={'mypage'} className="btnM sm">비밀번호 재설정</Link>
                                <Link to="#" className="btnM sm" onClick={memout}>회원탈퇴</Link>
                            </div>
                            <Link to="#" className="btnG sm" onClick={logout}>로그아웃</Link>
                        </div>
                    </div>
                </section>
            </div>
            <DefaultFooter />
        </>
    );
}

const StyleSwiper = styled(Swiper)`
  box-sizing: border-box;
  width: 100%;
  .slide-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .swiper-button-prev {
    --swiper-navigation-color: #FFFFFF;
    --swiper-navigation-size: 15px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #E24B97;
    padding: 2px 2px 0 0;
    top: 48%
  }

  .swiper-button-next {
    --swiper-navigation-color: #FFFFFF;
    --swiper-navigation-size: 15px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #E24B97;
    padding: 2px 0 0 2px;
    top: 48%
  }
`

export default MyPage;
