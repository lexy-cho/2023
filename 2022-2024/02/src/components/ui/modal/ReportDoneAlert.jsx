import React from 'react';
import { BaseButton } from '@components/common';

const ReportDoneAlert = ({onClose}) => {

    return (
        <div className='alertPop' style={{display:'block'}}>
            <h1 className='pt'>알림</h1>
            <div className='pBack'>
                신고 접수 완료되었습니다.
            </div>
            <div className='pBtn'>
                <BaseButton label={'확인'} className={'btnB'} onClick={() => onClose()} />
            </div>
        </div>
    )
}

export default ReportDoneAlert;
