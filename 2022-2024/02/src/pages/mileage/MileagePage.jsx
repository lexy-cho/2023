import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Pagenation, BaseInput, BaseSelect, ItemTag, BaseButton } from '@components/common';
import ChargeModal from '../../components/ui/modal/ChargeModal';
import CardModal from '../../components/ui/modal/CardModal';
import PayRefundModal from '../../components/ui/modal/PayRefundModal';
import ChargeRefundModal from '../../components/ui/modal/ChargeRefundModal';
import HaveRefundModal from '../../components/ui/modal/HaveRefundModal';
import {ModalPresent} from '@components/common';
import {ModalAlertPresent} from '@components/common';

const MileagePage = () => {
  const tems = [{ name: '전체', value: 0 }, { name: '1개월', value: 1 }, { name: '3개월', value: 2 }, { name: '6개월', value: 3 }, { name: '1년', value: 4 }, { name: '기간 지정', value: 5 }];
  const [isModal, setIsModal] = useState(false);  
  const [isModal2, setIsModal2] = useState(false);
  const [isModal3, setIsModal3] = useState(false);
  const [isModal4, setIsModal4] = useState(false);
  const [isModal5, setIsModal5] = useState(false);
  const [isModal6, setIsModal6] = useState(false);
  const [cardOn, setCardOn] = useState(false);
  
  return (
    <>
        <section>
            <h2>마일리지</h2>
            <div className='mileageTop'>
                <div className='mSummery'>
                    <div>
                        <strong>
                            보유 마일리지
                            <span><em>0</em>P(￦)</span>
                        </strong>
                        <span>
                            <BaseButton label={'잔액 환불'} className={'ttb'} onClick={() => setIsModal6(true)} />
                            <BaseButton label={'충전하기'} className={'btnB ss'} onClick={() => setIsModal(true)} />
                        </span>
                    </div>
                    <div>
                        <strong>
                            내 카드
                            <span style={{display: `${cardOn ? 'none' : 'block'}`}}><em>미등록</em></span> 
                            <span style={{display: `${cardOn ? 'block' : 'none'}`}}><i>KB 신용카드</i><em>1234-****-****-5678</em></span>
                        </strong>
                        <span>
                            <BaseButton label={'등록하기'} className={'btnB ss'} style={{display: `${cardOn ? 'none' : 'block'}`}} onClick={() => {setIsModal3(true); setCardOn(true);}} />
                            <BaseButton label={'카드변경'} className={'btnL ss'} style={{display: `${cardOn ? 'block' : 'none'}`}} onClick={() => {setIsModal3(true); setCardOn(true);}} />
                        </span>
                    </div>
                </div>
                <div className='infoNotes'>
                    <dl>
                        <dt>추가금 결제 안내사항</dt>
                        <dd>
                            의뢰서와 실제 디자인 업무가 다를 경우, 디자인 중 상호 협의하에 디자인이 수정된 경우 등에 추가요금을 결제하게 됩니다.<br/>
                            자세한 내용은 하단에 치자이너가 작성한 '추가금 요청사유'를 확인해주세요!
                        </dd>
                    </dl>
                </div>
            </div>
            <article>
                <div className='listBox'>
                    <div className='listTit lCase'>
                        <h3>마일리지 충전내역</h3>
                        <div className='back'>
                            <div className='sorting sts'>
                                <span>
                                    <input type='radio' id='sortingSts1' name='sortingSts1' defaultChecked />
                                    <label htmlFor='sortingSts1'>전체</label>
                                </span>
                                <span>
                                    <input type='radio' id='sortingSts2' name='sortingSts1'  />
                                    <label htmlFor='sortingSts2'>충전내역</label>
                                </span>
                                <span>
                                    <input type='radio' id='sortingSts3' name='sortingSts1' />
                                    <label htmlFor='sortingSts3'>환불내역</label>
                                </span>
                            </div>
                            <div className='right sortingSet'>
                                <BaseButton label={'모바일소팅'} className={'btnMS'} />
                                <span className='sArea'>
                                    <BaseSelect items={tems} placeholder={'전체'} onChange={(e) => console.log(e)} />
                                    <BaseInput  type="text" value={'2023-05-01 ~ 2023-05-07'} />
                                    <BaseButton label={'검색'} className={'btnB ss'} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='mileageList chargeCase'>
                        <table>
                            <colgroup>
                                <col width={65} />
                                <col width={238} />
                                <col width={218} />
                                <col />
                                <col width={100} />
                                <col width={100} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>구분</th>
                                    <th>마일리지</th>
                                    <th>결제내역</th>
                                    <th>상세 내용</th>
                                    <th>결제일자</th>
                                    <th>환불요청</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='refund'>
                                    <td><em>충전 환불</em></td>
                                    <td>- 100,000,000 P(￦)</td>
                                    <td>100,000,000원</td>
                                    <td>충전한 마일리지 환불</td>
                                    <td>2024.05.05</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><em>충전</em></td>
                                    <td>+ 1,000,000 P(￦)</td>
                                    <td>1,000,000원 </td>
                                    <td>마일리지 충전</td>
                                    <td>2024.05.04</td>
                                    <td><span>환불완료</span></td>
                                </tr>
                                <tr>
                                    <td><em>충전</em></td>
                                    <td>+ 1,000 P(￦)</td>
                                    <td>1,000원</td>
                                    <td>마일리지 충전</td>
                                    <td>2024.05.02</td>
                                    <td><em>환불진행중</em></td>
                                </tr>
                                <tr>
                                    <td><em>충전</em></td>
                                    <td>+ 1,000 P(￦)</td>
                                    <td>1,000원</td>
                                    <td>마일리지 충전</td>
                                    <td>2024.05.01</td>
                                    <td><BaseButton label={'환불요청'} onClick={() => setIsModal5(true)} /></td>
                                </tr>
                                {/* <tr>
                                    <td colSpan={6} className='noList search'>검색 결과가 없습니다.</td>
                                </tr>
                                <tr>
                                    <td colSpan={6} className='noList'>충전내역이 없습니다.</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                    <Pagenation />
                </div>
            </article>
            <article>
                <div className='listBox'>
                    <div className='listTit lCase'>
                        <h3>마일리지 결제내역</h3>
                        <div className='back'>
                            <div className='sorting sts'>
                                <span>
                                    <input type='radio' id='sortingSts21' name='sortingSts12' defaultChecked />
                                    <label htmlFor='sortingSts21'>전체</label>
                                </span>
                                <span>
                                    <input type='radio' id='sortingSts22' name='sortingSts12'  />
                                    <label htmlFor='sortingSts22'>결제내역</label>
                                </span>
                                <span>
                                    <input type='radio' id='sortingSts23' name='sortingSts12' />
                                    <label htmlFor='sortingSts23'>환불내역</label>
                                </span>
                            </div>
                            <div className='right sortingSet'>
                                <BaseButton label={'모바일소팅'} className={'btnMS'} />
                                <span className='sArea'>
                                    <BaseSelect items={tems} placeholder={'전체'} onChange={(e) => console.log(e)} />
                                    <BaseInput  type="text" value={'2023-05-01 ~ 2023-05-07'} />
                                    <BaseButton label={'검색'} className={'btnB ss'} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='mileageList'>
                        <table>
                            <colgroup>
                                <col width={65} />
                                <col width={238} />
                                <col />
                                <col width={100} />
                                <col width={100} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>구분</th>
                                    <th>마일리지</th>
                                    <th>상세 내용</th>
                                    <th>결제일자</th>
                                    <th>환불요청</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='refund'>
                                    <td><em>결제 환불</em></td>
                                    <td>+ 450,000,000 P(￦)</td>
                                    <td>김은지 치자이너 / 요청서 제목</td>
                                    <td>2024.05.05</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><em>결제</em></td>
                                    <td>- 900,000,000 P(￦)</td>
                                    <td>김은지 치자이너 / 요청서 제목</td>
                                    <td>2024.05.04</td>
                                    <td><BaseButton label={'환불요청'} onClick={() => setIsModal4(true)} /></td>
                                </tr>
                                {/* <tr>
                                    <td colSpan={6} className='noList search'>검색 결과가 없습니다.</td>
                                </tr>
                                <tr>
                                    <td colSpan={6} className='noList'>결제내역이 없습니다.</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                    <Pagenation />
                </div>
            </article>
        </section>
        {isModal && 
            <ModalAlertPresent >
                <div className='alertPop' style={{display:'block'}}>
                    <h1 className='pt'>알림</h1>
                    <div className='pBack'>
                        등록된 카드 정보가 없습니다. <br/>
                        내 카드 정보를 등록해주세요.
                    </div>
                    <div className='pBtn'>
                        <BaseButton label={'확인'} className={'btnB'} 
                        onClick={() => {
                            setIsModal(false); 
                            setIsModal2(true); 
                            setCardOn(true);
                        }} />
                    </div>
                </div>
            </ModalAlertPresent>
        }
        {isModal2 && 
            <ModalPresent >
                <ChargeModal onClose={() => {setIsModal2(false)}}/>
            </ModalPresent>
        }
        {isModal3 && 
            <ModalPresent >
                <CardModal onClose={() => {setIsModal3(false)}}/>
            </ModalPresent>
        }
        {isModal4 && 
            <ModalPresent >
                <PayRefundModal onClose={() => {setIsModal4(false)}}/>
            </ModalPresent>
        }
        {isModal5 && 
            <ModalPresent >
                <ChargeRefundModal onClose={() => {setIsModal5(false)}}/>
            </ModalPresent>
        }
        {isModal6 && 
            <ModalPresent >
                <HaveRefundModal onClose={() => {setIsModal6(false)}}/>
            </ModalPresent>
        }
    </>
  );
};

export default MileagePage;
