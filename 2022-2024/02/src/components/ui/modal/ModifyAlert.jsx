import React from 'react';
import { BaseButton } from '@components/common';

const ModifyAlert = ({onClose}) => {

    return (
        <div className='alertPop modifyPop' style={{display:'block'}}>
            <h1 className='pt'>링크복사</h1>
            <div className='pBack'>
                링크가 복사되었습니다.
            </div>
            <div className='pBtn'>
                <BaseButton label={'메인화면으로'} className={'btnL ss'} onClick={() => onClose()} />
                <BaseButton label={'메인화면으로'} className={'btnB ss'} onClick={() => onClose()} />
            </div>
            <div className='pBtn'>
                <BaseButton label={'메인화면으로'} className={'btnB ss'} onClick={() => onClose()} />
            </div>
        </div>
    )
}

export default ModifyAlert;
