import React, {useState} from 'react';
import { BaseButton } from '@components/common';
import {BaseInput, BaseSelect, ModalAlertPresent} from '@components/common';

const ChargeModal = ({onClose}) => {
    const [isModal, setIsModal] = useState(false);  
    const [isModal2, setIsModal2] = useState(false);  
    const [direct, setDirect] = useState(false);

    return (
        <>
        <div className='basicPop chargePop' style={{display:'block'}}>
            <BaseButton label={'닫기'} className={'btnPClose'} onClick={() => onClose()} />
            <h1 className='pt'>마일리지 충전하기</h1>
            <div className='pBack'>
                <div className='have'>
                    보유 마일리지 
                    <strong><strong>450,000,000</strong>P(￦)</strong>
                </div>
                <div className='recharge'>
                    <h2>충전할 마일리지</h2>
                    <div>
                        <span className='checkSet'>
                            <input type='radio' id='checkbox1' name='checkbox' onChange={(e) => setDirect(false)} />
                            <label htmlFor='checkbox1'><em>10,000</em> P(￦)</label>
                        </span>
                        <span className='checkSet'>
                            <input type='radio' id='checkbox2' name='checkbox' onChange={(e) => setDirect(false)} />
                            <label htmlFor='checkbox2'><em>30,000</em> P(￦)</label>
                        </span>
                        <span className='checkSet'>
                            <input type='radio' id='checkbox3' name='checkbox' onChange={(e) => setDirect(false)} />
                            <label htmlFor='checkbox3'><em>50,000</em> P(￦)</label>
                        </span>
                        <span className='checkSet'>
                            <input type='radio' id='checkbox4' name='checkbox' onChange={(e) => setDirect(false)} />
                            <label htmlFor='checkbox4'><em>100,000</em> P(￦)</label>
                        </span>
                        <span>
                            <span className='checkSet'>
                                <input type='radio' id='checkbox5' name='checkbox' onChange={(e) => setDirect(true)} />
                                <label htmlFor='checkbox5'>직접입력</label>
                            </span>
                            <BaseInput type='text' placeholder={'마일리지 직접입력'} style={{display: `${direct ? 'block' : 'none'}`}} />
                        </span>
                    </div>
                    <p>결제 금액<span><strong>10,000</strong> 원</span></p>
                </div>
                <div className='cardInfo'>
                    <h2>결제 카드 정보</h2>
                    <div>
                        <strong>
                            내 카드
                            <span><i>KB 신용카드</i><em>1234-****-****-5678</em></span>
                        </strong>
                        <BaseButton label={'카드변경'} className={'btnL ss'}/>
                    </div>
                    <span className='checkBack'>
                        <span className='checkSet'>
                            <input type='checkbox' id='checkbox6' />
                            <label htmlFor='checkbox6'>유의 사항을 확인 하였으며, 결제에 동의합니다.</label>
                        </span>
                        <input type="button" value="more" className="more" />
                    </span>
                </div>
                <p className='willyou'>등록된 카드로 결제를 진행하시겠습니까?</p>
            </div>
            <div className='pBtn'>
                <BaseButton label={'충전하기'} className={'btnB'} onClick={() => setIsModal(true)} />
            </div>
        </div>
        {isModal && 
            <ModalAlertPresent >
                <div className='alertPop' style={{display:'block'}}>
                    <h1 className='pt'>알림</h1>
                    <div className='pBack'>
                        다시 시도해 주세요.
                    </div>
                    <div className='pBtn'>
                        <BaseButton label={'확인'} className={'btnB'} 
                        onClick={() => {
                            setIsModal(false); 
                            setIsModal2(true); 
                        }} />
                    </div>
                </div>
            </ModalAlertPresent>
        }
        {isModal2 && 
            <ModalAlertPresent >
                <div className='alertPop' style={{display:'block'}}>
                    <h1 className='pt'>알림</h1>
                    <div className='pBack'>
                        마일리지가 충전되었습니다. 
                    </div>
                    <div className='pBtn'>
                        <BaseButton label={'확인'} className={'btnB'} 
                        onClick={() => {
                            setIsModal2(false); 
                        }} />
                    </div>
                </div>
            </ModalAlertPresent>
        }
        </>
    )
}

export default ChargeModal;
