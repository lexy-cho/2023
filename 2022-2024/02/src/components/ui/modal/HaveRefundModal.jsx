import React, {useState} from 'react';
import { BaseButton, BaseInput, BaseSelect, ModalAlertPresent} from '@components/common';

const HaveRefundModal = ({onClose}) => {
    const [isModal, setIsModal] = useState(false);  
    const cards = [
      { name: '환불 사유', value: 0 },
      { name: '환불 사유', value: 1 },
    ];

    return (
        <>
        <div className='basicPop refundPop' style={{display:'block'}}>
            <BaseButton label={'닫기'} className={'btnPClose'} onClick={() => onClose()} />
            <h1 className='pt'>보유 마일리지 환불하기</h1>
            <div className='pBack'>
                <form>
                    <div className='info'>
                        <div>
                            보유 마일리지
                            <strong><strong>450,000,000</strong> P(￦)</strong>
                        </div>
                    </div>
                    <div className='tws'>
                        <textarea placeholder='환불 사유를 입력하세요.'></textarea>
                    </div>
                </form>
            </div>
            <div className='pBtn'>
                <BaseButton label={'취소'} className={'btnL'} onClick={() => onClose()} />
                <BaseButton label={'환불 신청하기'} className={'btnB'} onClick={() => setIsModal(true)} />
            </div>
        </div>
        {isModal && 
            <ModalAlertPresent >
                <div className='alertPop' style={{display:'block'}}>
                    <h1 className='pt'>알림</h1>
                    <div className='pBack'>
                        환불 신청이 접수되었습니다.
                    </div>
                    <div className='pBtn'>
                        <BaseButton label={'확인'} className={'btnB'} onClick={() => setIsModal(false)} />
                    </div>
                </div>
            </ModalAlertPresent>
        }
        </>
    )
}

export default HaveRefundModal;
