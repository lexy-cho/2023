import React, {useState, useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import CalenderMgtModal from '../../components/ui/modal/CalenderMgtModal';
import {ModalFullPresent} from '@components/common';

const SettingOption = () => {
    const [isModal, setIsModal] = useState(false);
  return (
    <>
        <section className="pagingCase">
            <div className="subTit">
                <div><em>설정</em><span>상품관리</span><span>옵션</span></div>
                <h2>옵션</h2>
            </div>
            {/* -- */}
            <fieldset className="topForm">
                <span className="ipSearch">
                    <input type="text" placeholder='아이템으로 검색'/>
                    <button>검색</button>
                </span>
                <button className="bCal" onClick={() => setIsModal(true)}>캘린더</button>
            </fieldset>
            {/* -- */}
            <div className="content">
                <article className="lbox listCase">
                    <div className="boxTit">
                        <h3>아이템 목록</h3>
                        <span className="right">
                            <button className="btnW ss" disabled>선택삭제</button>
                            <button className="bAdd">추가</button>
                        </span>
                    </div>
                    <div className="boxDt">
                        <div className="tls optionList">
                            <table>
                                <colgroup>
                                    <col width="72" />
                                    <col width="72" />
                                    <col width="72" />
                                    <col width="100" />
                                    <col width="80" />
                                    <col width="14%" />
                                    <col width="*" />
                                    <col width="12%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>
                                            <span className="checkSet">
                                                <input type="checkbox" />
                                            </span>
                                        </th>
                                        <th>이동</th>
                                        <th>시퀀스</th>
                                        <th>기능</th>
                                        <th>노출</th>
                                        <th>이름</th>
                                        <th className='rowDiv'>
                                            <div className='addRowCol'>
                                                <span>옵션 아이템</span>
                                                <span>기준</span>
                                                <span>수량</span>
                                                <span>금액(￦)</span>
                                            </div>
                                        </th>
                                        <th>연결 룸 타입</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span className="checkSet">
                                                <input type="checkbox" />
                                            </span>
                                        </td>
                                        <td><button className="bMove">Move</button></td>
                                        <td>1</td>
                                        <td>
                                            <button className="bEV">View</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td className="active">활성화</td>
                                        <td>층수</td>
                                        <td className="rowDiv">
                                            <div className="addRowCol">
                                                <span>고층</span>
                                                <span>-</span>
                                                <span>50</span>
                                                <span>50,000</span>
                                            </div>
                                            <div className="addRowCol">
                                                <span>중층</span>
                                                <span>-</span>
                                                <span>50</span>
                                                <span>50,000</span>
                                            </div>
                                            <div className="addRowCol">
                                                <span>저층</span>
                                                <span>기준</span>
                                                <span>50</span>
                                                <span>50,000</span>
                                            </div>
                                        </td>
                                        <td>SEB 외 12</td>      
                                    </tr>               
                                    <tr>
                                        <td>
                                            <span className="checkSet">
                                                <input type="checkbox" />
                                            </span>
                                        </td>
                                        <td><button className="bMove">Move</button></td>
                                        <td>2</td>
                                        <td>
                                            <button className="bEV">View</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td className="deactive">비활성화</td>
                                        <td>흡연</td>
                                        <td className="rowDiv">
                                            <div className="addRowCol">
                                                <span>흡연</span>
                                                <span>-</span>
                                                <span>50</span>
                                                <span>50,000</span>
                                            </div>
                                            <div className="addRowCol">
                                                <span>비흡연</span>
                                                <span>기준</span>
                                                <span>50</span>
                                                <span>50,000</span>
                                            </div>
                                        </td>
                                        <td>미연결</td>  
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="checkSet">
                                                <input type="checkbox" />
                                            </span>
                                        </td>
                                        <td><button className="bMove">Move</button></td>
                                        <td>1</td>
                                        <td>
                                            <button className="bEV">View</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td className="active">활성화</td>
                                        <td>뷰 타입</td>
                                        <td className="rowDiv">
                                            <div className="addRowCol">
                                                <span>오션뷰</span>
                                                <span>-</span>
                                                <span>50</span>
                                                <span>50,000</span>
                                            </div>
                                            <div className="addRowCol">
                                                <span>시티뷰</span>
                                                <span>-</span>
                                                <span>50</span>
                                                <span>50,000</span>
                                            </div>
                                        </td>
                                        <td>SEB 외 12</td>  
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </article>
            </div>
            {/* -- */}
            <Pagenation />
            {/* -- */}
        </section>
        {isModal && 
            <ModalFullPresent >
                <CalenderMgtModal onClose={() => {setIsModal(false)}}/>
            </ModalFullPresent>
        }
    </>
    
	
  );
};

export default SettingOption;