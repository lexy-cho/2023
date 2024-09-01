import React from 'react';
import { BaseButton } from '@components/common';

const CancelCallDoneAlert = ({onClose}) => {

    return (
        <div className='alertPop' style={{display:'block'}}>
            <h1 className='pt'>알림</h1>
            <div className='pBack'>
                거래취소 요청이 접수되었습니다. <br/>
                치자이너가 거래취소 요청 수락 시, <br/>
                거래가 취소됩니다.
            </div>
            <div className='pBtn'>
                <BaseButton label={'확인'} className={'btnB'} onClick={() => onClose()} />
            </div>
        </div>
    )
}

export default CancelCallDoneAlert;
