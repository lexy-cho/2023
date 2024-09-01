import React, {useState} from 'react';
import { BaseButton, BaseInput, BaseSelect, ModalAlertPresent} from '@components/common';

const CardModal = ({onClose}) => {
    const [isModal, setIsModal] = useState(false);  
    const [isModal2, setIsModal2] = useState(false);  
    const cards = [
      { name: '카드사명', value: 0 },
      { name: '카드사명', value: 1 },
    ];

    return (
        <>
        <div className='basicPop cardPop' style={{display:'block'}}>
            <BaseButton label={'닫기'} className={'btnPClose'} onClick={() => onClose()} />
            <h1 className='pt'>카드정보 등록/변경</h1>
            <div className='pBack'>
                <form>
                    <div className="tws">
                        <dl>
                            <dt>카드사</dt>
                            <dd>
                                <BaseSelect items={cards} placeholder={'카드사를 선택해주세요.'} onChange={(e) => console.log(e)} />
                            </dd>
                        </dl>
                        <dl>
                            <dt>카드번호</dt>
                            <dd>
                                <div className='cardNum'>
                                    <BaseInput type="text" placeholder="0000" />
                                    <em>-</em>
                                    <BaseInput type="text" placeholder="0000" />
                                    <em>-</em>
                                    <BaseInput type="text" placeholder="0000" />
                                    <em>-</em>
                                    <BaseInput type="text" placeholder="0000" />
                                </div>
                            </dd>
                        </dl>
                        <div>
                            <dl>
                                <dt>CVC번호</dt>
                                <dd><BaseInput type="text" placeholder="CVC번호" /></dd>
                            </dl>
                            <dl>
                                <dt>유효기간</dt>
                                <dd><BaseInput type="text" placeholder="MM/YY" /></dd>
                            </dl>
                        </div>
                        <div>
                            <dl>
                                <dt>카드 비밀번호</dt>
                                <dd><BaseInput type="text" placeholder="비밀번호 앞 두자리" /></dd>
                            </dl>
                            <dl>
                                <dt>이름</dt>
                                <dd><BaseInput type="text" placeholder="카드 소유자명" /></dd>
                            </dl>
                        </div>
                    </div>
                    <span className='checkBack'>
                        <span className='checkSet'>
                            <input type='checkbox' id='checkbox6' />
                            <label htmlFor='checkbox6'>유의 사항을 확인 하였으며, 카드 등록에 동의합니다.</label>
                        </span>
                        <input type="button" value="more" className="more" />
                    </span>
                </form>
            </div>
            <div className='pBtn'>
                <BaseButton label={'등록하기'} className={'btnB'} onClick={() => setIsModal(true)} />
            </div>
        </div>
        {isModal && 
            <ModalAlertPresent >
                <div className='alertPop' style={{display:'block'}}>
                    <h1 className='pt'>알림</h1>
                    <div className='pBack'>
                        잘못된 정보로 카드 등록에 실패하였습니다.
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
                        카드 정보가 등록되었습니다. 
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

export default CardModal;
