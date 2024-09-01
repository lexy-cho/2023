import React from 'react';
import { BaseButton } from '@components/common';

const CancelDoneAlert = ({onClose}) => {

    return (
        <div className='alertPop' style={{display:'block'}}>
            <h1 className='pt'>알림</h1>
            <div className='pBack'>
                거래가 취소 되었습니다.
            </div>
            <div className='pBtn'>
                <BaseButton label={'확인'} className={'btnB'} onClick={() => onClose()} />
            </div>
        </div>
    )
}

export default CancelDoneAlert;
