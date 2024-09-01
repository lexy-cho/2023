import React from 'react';
import { BaseButton } from '@components/common';

const PayFailAlert = ({onClose}) => {

    return (
        <div className='alertPop' style={{display:'block'}}>
            <h1 className='pt'>알림</h1>
            <div className='pBack'>
                마일리지가 부족합니다.<br/>
                마일리지를 충전해주세요!
            </div>
            <div className='pBtn'>
                <BaseButton label={'취소'} className={'btnL'} onClick={() => onClose()} />
                <BaseButton label={'충전 하러가기'} className={'btnB'} onClick={() => onClose()} />
            </div>
        </div>
    )
}

export default PayFailAlert;
