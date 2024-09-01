import React, {useState} from 'react';
import { BaseButton } from '@components/common';

const LeaveAlert = ({onClose}) => {

    return (
        <>
        <div className='alertPop' style={{display:'block'}}>
            <h1 className='pt'>나가기</h1>
            <div className='pBack'>
                채팅방을 나가면 다시 되돌릴 수 없습니다.<br/>
                선택하신 채팅방에서 나가시겠습니까?
            </div>
            <div className='pBtn'>
                <BaseButton label={'취소'} className={'btnL'} onClick={() => onClose()} />
                <BaseButton label={'확인'} className={'btnB'} onClick={() => onClose()} />
            </div>
        </div>
        </>
    )
}

export default LeaveAlert;
