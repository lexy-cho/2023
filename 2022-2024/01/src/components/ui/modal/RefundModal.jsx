import React, {useState, useEffect} from 'react';
import { BaseButton, BaseSelect } from '@components/common';
import sample01 from '@assets/images/sample/sample2.png';

const RefundModal = ({onClose}) => {
    const changeItems = [{ name: '사유 1', value: 0 }, { name: '사유 2', value: 1 }];
    
    return (
        <>
        <div className='basicPop disPop' style={{display:'block'}}>
            <BaseButton label={'닫기'} className={'btnPClose'} onClick={() => onClose()} />
            <h1 className='pt'>환불 신청하기</h1>
            <form>
            <div className='pBack'>
                <ul className='pProductList'>
                    <li>
                        <input type='checkbox' className='rCheck' />
                        <div className='pPrductBack'>
                            <div className='thumPrduct rCase'>
                                <span className='thPImg'><img src={sample01} /></span>
                                <div>
                                    <strong>[야다] 자연주의 명품 알모네이쳐</strong>
                                    <p>옵션옵션옵션옵션</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <input type='checkbox' className='rCheck' defaultChecked />
                        <div className='pPrductBack'>
                            <div className='thumPrduct rCase'>
                                <span className='thPImg'><img src={sample01} /></span>
                                <div>
                                    <strong>[야다] 자연주의 명품 알모네이쳐</strong>
                                    <p>옵션옵션옵션옵션</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className='tws'>
                    <dl>
                        <dt>환불 사유</dt>
                        <dd>
                            <BaseSelect items={changeItems} placeholder={'사유를 선택해 주세요.'} onChange={(e) => console.log(e)} />
                        </dd>
                    </dl>
                    <dl>
                        <dt>내용</dt>
                        <dd>
                            <span className='taSet'>
                                <textarea placeholder='자세하고 솔직한 리뷰는 다른 고객에게 도움이 됩니다.'></textarea>
                                <em>0/2,000</em>
                            </span>
                        </dd>
                    </dl>
                </div>
            </div>
            <div className='pBtn'>
                <BaseButton type='button' label={'취소'} className={'btnWL'} onClick={() => onClose()} />
                <BaseButton type='button' label={'신청하기'} className={'btnM'} />
            </div>
            </form>
        </div>
        </>
    )
}

export default RefundModal;
