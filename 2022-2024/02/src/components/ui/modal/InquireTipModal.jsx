import React, {useRef, useState} from 'react';
import { BaseButton } from '@components/common';
import tipImage11 from '@assets/images/img_popModeTip11.png';
import tipImage12 from '@assets/images/img_popModeTip12.png';
import tipImage13 from '@assets/images/img_popModeTip13.png';
import tipImage14 from '@assets/images/img_popModeTip14.png';
import tipImage15 from '@assets/images/img_popModeTip15.png';
import tipImage21 from '@assets/images/img_popModeTip21.png';
import tipImage22 from '@assets/images/img_popModeTip22.png';
import tipImage23 from '@assets/images/img_popModeTip23.png';
import tipImage24 from '@assets/images/img_popModeTip24.png';
import tipImage25 from '@assets/images/img_popModeTip25.png';
import tipImage26 from '@assets/images/img_popModeTip26.png';
import tipImage27 from '@assets/images/img_popModeTip27.png';
import tipImage28 from '@assets/images/img_popModeTip28.png';

const InquireTipModal = ({onClose}) => {
    const [tab , setTab] = useState(1);
    const handleTab = (tab) => {
      setTab(tab);
    }
    const tabRef = useRef();
    return (
        <>
        <div className='basicPop inquireTipPop' style={{display:'block'}}>
            <BaseButton label={'닫기'} className={'btnPClose'} onClick={() => onClose()} />
            <h1 className='pt'>의뢰서 작성 tip!</h1>
            <div className='tabNav popCase' ref={tabRef} >
                <nav>
                    <ul>
                        <li className={`${tab === 1 ? 'on' : ''}`}><button onClick={() => handleTab(1)}>간편모드</button></li>
                        <li className={`${tab === 2 ? 'on' : ''}`}><button onClick={() => handleTab(2)}>상세모드</button></li>
                    </ul>
                </nav>
            </div>
            {/* -- */}
            {tab === 1 && 
            <div>
                <div className='pBack'>
                    <div>
                        <dl>
                            <dt>
                                <strong>01</strong>
                                <span>
                                    환자의 개인정보를 위해 이름 대신<br/>
                                    숫자 또는 기호로 <em>의뢰번호를 작성</em>해 주세요
                                </span>
                            </dt>
                            <dd><span><img src={tipImage11} /></span></dd>
                        </dl>
                        <dl>
                            <dt>
                                <strong>02</strong>
                                <span>
                                    “보철종류” 선택을 눌러<br/>
                                    원하는 <em>보철종류를 선택</em>해주세요
                                </span>
                            </dt>
                            <dd><span><img src={tipImage12} /></span></dd>
                        </dl>
                        <dl>
                            <dt>
                                <strong>03</strong>
                                <span>
                                    선택한 각 보철종류마다<br/>
                                    <em>필요한 보철물 개수를 입력</em>해주세요
                                </span>
                            </dt>
                            <dd><span><img src={tipImage13} /></span></dd>
                        </dl>
                        <dl>
                            <dt>
                                <strong>04</strong>
                                <span>
                                    "파일 첨부하기"를 눌러<br/>
                                    <em>스캔파일을 업로드</em> 해주세요
                                </span>
                            </dt>
                            <dd><span><img src={tipImage14} /></span></dd>
                        </dl>
                        <dl>
                            <dt>
                                <strong>05</strong>
                                <span>
                                    “저장하기"를 눌러 의뢰서를<br/>
                                    <em>의뢰서 바구니에 저장</em>하세요!
                                </span>
                            </dt>
                            <dd><span><img src={tipImage15} /></span></dd>
                        </dl>
                    </div>
                </div>
            </div>
            }
            {tab === 2 && 
            <div>
                <div className='pBack'>
                    <div>
                        <dl>
                            <dt>
                                <strong>01</strong>
                                <span>
                                    환자의 개인정보를 위해 이름 대신<br/>
                                    숫자 또는 기호로 <em>의뢰번호를 작성</em>해 주세요
                                </span>
                            </dt>
                            <dd><span><img src={tipImage21} /></span></dd>
                        </dl>
                        <dl>
                            <dt>
                                <strong>02</strong>
                                <span>
                                    <em>“보철종류”를 선택</em>하고<br/>
                                    원하는 <em>"치식"을 선택</em>해주세요
                                </span>
                            </dt>
                            <dd>
                                <span><img src={tipImage22} /></span>
                                <span><img src={tipImage23} /></span>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <strong>03</strong>
                                <span>
                                    수치값, 디자인 내용등<br/>
                                    <em>상세 내용을 작성</em>해 주세요
                                </span>
                            </dt>
                            <dd>
                                <span><img src={tipImage24} /></span>
                                <span><img src={tipImage25} /></span>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <strong>04</strong>
                                <span>
                                    "파일 첨부하기"를 눌러<br/>
                                    <em>스캔파일을 업로드</em> 해주세요
                                </span>
                            </dt>
                            <dd><span><img src={tipImage26} /></span></dd>
                        </dl>
                        <dl>
                            <dt>
                                <strong>05</strong>
                                <span>
                                    같은 환자의 의뢰서 탭을 추가하여<br/>
                                    <em>다른 보철물 종류의 동시 의뢰</em>도 가능합니다
                                    <i>예시) 24번 지르코니아 + 어버트먼트</i>
                                </span>
                            </dt>
                            <dd><span><img src={tipImage27} /></span></dd>
                        </dl>
                        <dl>
                            <dt>
                                <strong>06</strong>
                                <span>
                                    “저장하기"를 눌러 의뢰서를<br/>
                                    <em>의뢰서 바구니에 저장</em>하세요!
                                </span>
                            </dt>
                            <dd><span><img src={tipImage28} /></span></dd>
                        </dl>
                    </div>
                </div>
            </div>
            }
        </div>
        </>
    )
}

export default InquireTipModal;
