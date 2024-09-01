import React, {useState, useEffect} from 'react';
import { BaseButton } from '@components/common';
import sampleProfile from '@assets/images/sample/sample3.png';
import {BaseInput, ImageSetting} from '@components/common';

const QnaModal = ({onClose}) => {
    const [imgFileList, setImgFileList] = useState([]);
    useEffect(() => {
      //console.log(imgFileList);
    }, [imgFileList]);

    return (
        <>
        <div className='basicPop qnqPop' style={{display:'block'}}>
            <BaseButton label={'닫기'} className={'btnPClose'} onClick={() => onClose()} />
            <h1 className='pt'>문의하기</h1>
            <form>
            <div className='pBack'>
                <div className='tws'>
                    <dl>
                        <dt>제목</dt>
                        {/* <dd><BaseInput type="text" placeholder="제목을 입력해 주세요." /></dd> */}
                        <dd><input type='text' placeholder="제목을 입력해 주세요." /></dd>
                    </dl>
                    <dl>
                        <dt>내용</dt>
                        <dd>
                            <textarea placeholder="내용을 입력해 주세요."></textarea>
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

export default QnaModal;
