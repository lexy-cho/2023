import React, {useState, useEffect} from 'react';
import { BaseButton } from '@components/common';
import sample01 from '@assets/images/sample/sample2.png';
import {BaseInput, ImageSetting} from '@components/common';
import { Rating } from 'react-simple-star-rating';

const ReviewModal = ({onClose}) => {
    const [imgFileList, setImgFileList] = useState([]);
    useEffect(() => {
      //console.log(imgFileList);
    }, [imgFileList]);

    return (
        <>
        <div className='basicPop reviewPop' style={{display:'block'}}>
            <BaseButton label={'닫기'} className={'btnPClose'} onClick={() => onClose()} />
            <h1 className='pt'>리뷰 쓰기</h1>
            <p className='pointNum'>포토리뷰 <strong>200P</strong>, 일반리뷰 <strong>100P</strong></p>
            <div className='thumPrduct rCase'>
                <span className='thPImg'><img src={sample01} /></span>
                <div>
                    <strong>[야다] 자연주의 명품 펫푸드 알모네이쳐자연주의 명품 펫푸드 알모네이쳐</strong>
                    <p>옵션옵션옵션옵션</p>
                </div>
            </div>
            <form>
            <div className='pBack'>
                <div className='rNum'>
                    <p>구매한 상품은 어떠셨나요?<br/>별점으로 평가해 주세요.</p>
                    <span className="ratingArea">
                        <Rating  
                            initialValue={0}
                            size={32}
                            fillColor='#520774'
                            emptyColor='#DDDDDD'
                         />
                    </span>
                </div>
                <div className='tws'>
                    <dl>
                        <dt>내용</dt>
                        <dd>
                            <span className='taSet'>
                                <textarea placeholder='자세하고 솔직한 리뷰는 다른 고객에게 도움이 됩니다.'></textarea>
                                <em>0/2,000</em>
                            </span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>사진/동영상 첨부</dt>
                        <dd>
                            <ImageSetting imgFileList={imgFileList} setImgFileList={setImgFileList} />
                        </dd>
                    </dl>
                </div>
            </div>
            <div className='pBtn'>
                <BaseButton type='button' label={'취소'} className={'btnWL'} onClick={() => onClose()} />
                <BaseButton type='button' label={'등록'} className={'btnM'} />
            </div>
            </form>
        </div>
        </>
    )
}

export default ReviewModal;
