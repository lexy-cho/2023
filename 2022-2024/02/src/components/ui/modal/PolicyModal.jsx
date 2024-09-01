import React, {useRef, useState} from 'react';
import { BaseButton } from '@components/common';

const PolicyModal = ({onClose}) => {
    return (
        <>
        <div className='basicPop policyePop' style={{display:'block'}}>
            <BaseButton label={'닫기'} className={'btnPClose'} onClick={() => onClose()} />
            <h1 className='pt'>개인정보처리방침</h1>
            <div className='pBack'>
                <div className='agreeDtBack'>
                    제1조 총칙<br/>
                    본 사이트는 귀하의 개인정보보호를 매우 중요시하며, 『정보통신망이용촉진등에관한법률』상의 개인정보보호 규정 및 정보통신부가 제정한 『개인정보보호지침』을 준수하고 있습니다.<br/>
                    본 사이트는 개인정보보호방침을 통하여 귀하께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.<br/>
                    본 사이트는 개인정보보호방침을 홈페이지 첫 화면 하단에 공개함으로써 귀하께서 언제나 용이하게 보실 수 있도록 조치하고 있습니다.<br/>
                    본 사이트는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.
                </div>
            </div>
            <div className='pBtn'>
                <BaseButton label={'확인'} className={'btnB'} onClick={() => onClose()} />
            </div>
        </div>
        </>
    )
}

export default PolicyModal;
