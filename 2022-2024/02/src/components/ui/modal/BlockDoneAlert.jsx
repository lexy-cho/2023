import React from 'react';
import { BaseButton } from '@components/common';

const BlockDoneAlert = ({onClose}) => {

    return (
        <div className='alertPop' style={{display:'block'}}>
            <h1 className='pt'>알림</h1>
            <div className='pBack'>
                차단되었습니다.
            </div>
            <div className='pBtn'>
                <BaseButton label={'확인'} className={'btnB'} onClick={() => onClose()} />
            </div>
        </div>
    )
}

export default BlockDoneAlert;
