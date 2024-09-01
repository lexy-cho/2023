import React, {useState} from 'react';
import { BaseButton } from '@components/common';

const ChoiceAlert = ({onClose}) => {
    return (
        <>
        <div className='alertPop' style={{display:'block'}}>
            <h1 className='pt'>알림</h1>
            <div className='pBack'>
                주문하실 상품을 선택해 주세요.
            </div>
            <div className='pBtn'>
                <BaseButton label={'확인'} className={'btnM'} onClick={() => onClose()} />
            </div>
        </div>
        </>
    )
}

export default ChoiceAlert;
