import React, {useState} from 'react';
import { BaseButton } from '@components/common';

const PrivacyAlert = ({onClose}) => {
    return (
        <>
        <div className='alertPop privacyPop' style={{display:'block'}}>
            <h1 className='pt'>개인정보 수집·이용 약관</h1>
            <div className='pBack'>
                <div className='privacyData'>
                    약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용
                    약관내용약관내용약관내용약관내용약관내용약관내용<br/>
                    약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용
                    약관내용약관내용약관내용약관내용약관내용약관내용
                </div>
            </div>
            <div className='pBtn'>
                <BaseButton label={'확인'} className={'btnM'} onClick={() => onClose()} />
            </div>
        </div>
        </>
    )
}

export default PrivacyAlert;
