import React, {useRef, useState} from 'react';
import { BaseButton } from '@components/common';
import NumvalueDoneAlert from './NumValueDoneAlert';
import {ModalAlertPresent} from '@components/common';

const NumValueModal = ({onClose}) => {
    const [isModal, setIsModal] = useState(false);  

    return (
        <>
        <div className='basicPop numvaluePop' style={{display:'block'}}>
            <BaseButton label={'닫기'} className={'btnPClose'} onClick={() => onClose()} />
            <h1 className='pt'>수치값 제목 불러오기</h1>
            <div className='pBack'>
                <ul>
                    <li className='on'>
                        <div>Implant Scan body library</div>
                        <BaseButton label={'삭제'} onClick={() => setIsModal(true)} />
                    </li>
                    <li>
                        <div>글이 길어지면 이렇게까지 길어집니다. 이렇게까지 길어집니
                        글이 길어지면 이렇게까지 길어집니다. 이렇게까지 길어집다.</div>
                        <BaseButton label={'삭제'} onClick={() => setIsModal(true)}/>
                    </li>
                    <li>
                        <div>Implant Scan body library</div>
                        <BaseButton label={'삭제'} onClick={() => setIsModal(true)}/>
                    </li>
                    <li>
                        <div>글이 길어지면 이렇게까지 길어집니다. 이렇게까지 길어집니
                        글이 길어지면 이렇게까지 길어집니다. 이렇게까지 길어집다.</div>
                        <BaseButton label={'삭제'} onClick={() => setIsModal(true)}/>
                    </li>
                    <li>
                        <div>Implant Scan body library</div>
                        <BaseButton label={'삭제'} onClick={() => setIsModal(true)}/>
                    </li>
                    <li>
                        <div>글이 길어지면 이렇게까지 길어집니다. 이렇게까지 길어집니
                        글이 길어지면 이렇게까지 길어집니다. 이렇게까지 길어집다.</div>
                        <BaseButton label={'삭제'} onClick={() => setIsModal(true)}/>
                    </li>
                    <li>
                        <div>Implant Scan body library</div>
                        <BaseButton label={'삭제'} onClick={() => setIsModal(true)}/>
                    </li>
                    <li>
                        <div>글이 길어지면 이렇게까지 길어집니다. 이렇게까지 길어집니
                        글이 길어지면 이렇게까지 길어집니다. 이렇게까지 길어집다.</div>
                        <BaseButton label={'삭제'} onClick={() => setIsModal(true)}/>
                    </li>
                    <li>
                        <div>Implant Scan body library</div>
                        <BaseButton label={'삭제'} onClick={() => setIsModal(true)}/>
                    </li>
                    <li>
                        <div>글이 길어지면 이렇게까지 길어집니다. 이렇게까지 길어집니
                        글이 길어지면 이렇게까지 길어집니다. 이렇게까지 길어집다.</div>
                        <BaseButton label={'삭제'} onClick={() => setIsModal(true)}/>
                    </li>
                    <li className='noList'>
                        저장된 자주쓰는 말이 없습니다.
                    </li>
                </ul>
            </div>
            <div className='pBtn'>
                <BaseButton label={'불러오기'} className={'btnB'} onClick={() => onClose()} />
            </div>
        </div>
        {isModal && 
            <ModalAlertPresent >
                <NumvalueDoneAlert onClose={() => {setIsModal(false)}}/>
            </ModalAlertPresent>
        }
        </>
    )
}

export default NumValueModal;
