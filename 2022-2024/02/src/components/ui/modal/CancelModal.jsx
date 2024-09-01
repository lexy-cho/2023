import React, {useState} from 'react';
import { BaseButton } from '@components/common';
import sampleProfile from '@assets/images/sample/sample3.png';
import CancelDoneAlert from './CancelDoneAlert';
import {BaseSelect, ModalAlertPresent} from '@components/common';

const CancelModal = ({onClose}) => {
    const [isModal, setIsModal] = useState(false);  
    const items = [
        { name: '신고사유 1', value: 0 },
        { name: '신고사유 2', value: 1 },
    ];

    return (
        <>
        <div className='basicPop cancelPop' style={{display:'block'}}>
            <BaseButton label={'닫기'} className={'btnPClose'} onClick={() => onClose()} />
            <h1 className='pt'>거래취소</h1>
            <div className='pBack'>
                <div className='userInfo'>
                    <h2>취소 대상</h2>
                    <div>
                        <span className='profileImg'>
                            <img src={sampleProfile} />
                        </span>
                        <strong>치기치기공</strong>
                    </div>
                </div>
                <div className='checkList'>
                    <span className='checkSet'>
                        <input type='radio' id='checkbox1' name='checkbox' />
                        <label htmlFor='checkbox1'>다른 방법으로 해결했어요</label>
                    </span>
                    <span className='checkSet'>
                        <input type='radio' id='checkbox2' name='checkbox' />
                        <label htmlFor='checkbox2'>디자인할 필요가 없어졌어요</label>
                    </span>
                    <span className='checkSet'>
                        <input type='radio' id='checkbox3' name='checkbox' />
                        <label htmlFor='checkbox3'>원하는 치자이너가 없어요</label>
                    </span>
                    <span className='checkSet'>
                        <input type='radio' id='checkbox4' name='checkbox' />
                        <label htmlFor='checkbox4'>기타(하단 내용 작성)</label>
                    </span>
                </div>
                <textarea placeholder='거래취소 사유를 입력하세요.' ></textarea>
            </div>
            <div className='pBtn'>
                <BaseButton label={'취소'} className={'btnL'} onClick={() => onClose()} />
                <BaseButton label={'거래 취소하기'} className={'btnB'} onClick={() => setIsModal(true)} />
            </div>
        </div>
        {isModal && 
            <ModalAlertPresent >
                <CancelDoneAlert onClose={() => {setIsModal(false)}}/>
            </ModalAlertPresent>
        }
        </>
    )
}

export default CancelModal;
