import React, {useRef, useState} from 'react';
import { BaseButton } from '@components/common';

const TemporaryModal = ({onClose}) => {
    const [tab , setTab] = useState(1);
    const handleTab = (tab) => {
      setTab(tab);
    }
    const tabRef = useRef();
    return (
        <>
        <div className='basicPop temporaryPop' style={{display:'block'}}>
            <BaseButton label={'닫기'} className={'btnPClose'} onClick={() => onClose()} />
            <h1 className='pt'>임시저장 의뢰서 불러오기</h1>
            <div className='pBack'>
                <ul>
                    <li className='reQMinInfo on'>
                        <div className='left'>
                            <span className='itemTag'>
                                <em>의뢰서 a</em>
                            </span>
                            <strong>@8321430183048173057</strong>
                            <p>교정 32</p>
                        </div>
                        <strong className='time'>2024. 06. 30 <strong>18:30</strong></strong>
                    </li>
                    <li className='reQMinInfo'>
                        <div className='left'>
                            <span className='itemTag'>
                                <em>의뢰서 a</em>
                            </span>
                            <strong>@8321430183048173057</strong>
                            <p>교정 32</p>
                        </div>
                        <div className='right'>
                            <strong className='time'>2024. 06. 30 <strong>18:30</strong></strong>
                        </div>
                    </li>
                    <li className='reQMinInfo'>
                        <div className='left'>
                            <span className='itemTag'>
                                <em>의뢰서 a</em>
                            </span>
                            <strong>@8321430183048173057</strong>
                            <p>교정 32</p>
                        </div>
                        <div className='right'>
                            <strong className='time'>2024. 06. 30 <strong>18:30</strong></strong>
                        </div>
                    </li>
                    <li className='reQMinInfo'>
                        <div className='left'>
                            <span className='itemTag'>
                                <em>의뢰서 a</em>
                            </span>
                            <strong>@8321430183048173057</strong>
                            <p>교정 32</p>
                        </div>
                        <div className='right'>
                            <strong className='time'>2024. 06. 30 <strong>18:30</strong></strong>
                        </div>
                    </li>
                    <li className='reQMinInfo'>
                        <div className='left'>
                            <span className='itemTag'>
                                <em>의뢰서 a</em>
                            </span>
                            <strong>@8321430183048173057</strong>
                            <p>교정 32</p>
                        </div>
                        <div className='right'>
                            <strong className='time'>2024. 06. 30 <strong>18:30</strong></strong>
                        </div>
                    </li>
                    <li className='noList'>
                        임시저장된 의뢰서가 없습니다.
                    </li>
                </ul>
            </div>
            <div className='pBtn'>
                <BaseButton label={'불러오기'} className={'btnB'} onClick={() => onClose()} />
            </div>
        </div>
        </>
    )
}

export default TemporaryModal;
