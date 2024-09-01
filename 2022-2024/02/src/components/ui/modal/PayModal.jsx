import React, {useState} from 'react';
import { BaseButton } from '@components/common';
import sampleProfile from '@assets/images/sample/sample3.png';
import PayFailAlert from './PayFailAlert';
import {BaseSelect, ModalAlertPresent} from '@components/common';

const PayModal = ({onClose}) => {
    const [isModal, setIsModal] = useState(false);  
    const items = [
        { name: '신고사유 1', value: 0 },
        { name: '신고사유 2', value: 1 },
    ];

    return (
        <>
        <div className='basicPop payPop' style={{display:'block'}}>
            <BaseButton label={'닫기'} className={'btnPClose'} onClick={() => onClose()} />
            <h1 className='pt'>결제완료</h1>
            <div className='pBack'>
                <div>
                    <dl>
                        <dt>차감 마일리지</dt>
                        <dd>
                            <strong>-900,000,000</strong> P(￦)
                        </dd>
                    </dl>
                    <dl>
                        <dt>남은 마일리지</dt>
                        <dd>
                            <strong>450,000,000</strong> P(￦)
                        </dd>
                    </dl>
                </div>
            </div>
            <div className='pBtn'>
                <BaseButton label={'확인'} className={'btnB'} onClick={() => setIsModal(true)} />
            </div>
        </div>
        {isModal && 
            <ModalAlertPresent >
                <PayFailAlert onClose={() => {setIsModal(false)}}/>
            </ModalAlertPresent>
        }
        </>
    )
}

export default PayModal;
