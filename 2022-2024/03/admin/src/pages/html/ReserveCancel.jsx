import React, {useState, useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import ReserveCancelAddModal from '../../components/ui/modal/ReserveCancelAddModal';
import {ModalFullPresent} from '@components/common';

const ReserveCancel = () => {
    const [isModal, setIsModal] = useState(false);
  return (
    <>
        <section className="pagingCase">
            <div className="subTit">
                <div><em>예약</em><span>예약</span><span>취소 규정</span></div>
                <h2>취소 규정</h2>
            </div>
            {/* -- */}
            <fieldset className="topForm">
                <div className="multiSSet">
                    <em className="mValue">시즌 클래스</em>
                    <div className="selectArea">
                        <div className="item">
                            <span className="checkSet">
                                <input type="checkbox" id="one"/>
                                <label htmlFor="one">First checkbox</label>
                            </span>
                            <span className="checkSet">
                                <input type="checkbox" id="two"/>
                                <label htmlFor="two">Second checkbox</label>
                            </span>
                            <span className="checkSet">
                                <input type="checkbox" id="three"/>
                                <label htmlFor="three">Third checkbox</label>
                            </span>
                        </div>
                        <div className="bLine">
                            <button className="btnL">취소</button>
                            <button className="btnB">적용</button>
                        </div>
                    </div>
                </div>
            </fieldset>
            {/* -- */}
            <div className="content">
                <article className="lbox listCase">
                    <div className="boxTit">
                        <h3>취소 규정 목록</h3>
                        <span className="right">
                            <button className="btnW ss" disabled>선택삭제</button>
                            <button className="bAdd" onClick={() => setIsModal(true)}>추가</button>
                        </span>
                    </div>
                    <div className="boxDt">
                        <div className="tls rCancelList">
                            <table>
                                <colgroup>
                                    <col width="72" />
                                    <col width="140" />
                                    <col width="25%" />
                                    <col width="25%" />
                                    <col width="*" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>
                                            <span className="checkSet">
                                                <input type="checkbox" />
                                            </span>
                                        </th>
                                        <th>기능</th>
                                        <th>이름</th>
                                        <th className='rowDiv'>
                                            <div className='addRowCol'>
                                                <span>일자(~일 전)</span>
                                                <span>퍼센트(%)</span>
                                            </div>
                                        </th>
                                        <th>적용 시즌코드</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="disabled">
                                        <td>
                                            <span className="checkSet">
                                                <input type="checkbox" />
                                            </span>
                                        </td>
                                        <td>
                                            <button className="bEV">View</button>
                                            <button className="bEC">Copy</button>
                                            <button className="bEX" disabled>Del</button>
                                        </td>
                                        <td>기본 취소 규정</td>
                                        <td className="rowDiv">
                                            <div className="addRowCol">
                                                <span>1</span>
                                                <span>100</span>
                                            </div>
                                            <div className="addRowCol">
                                                <span>2</span>
                                                <span>80</span>
                                            </div>
                                            <div className="addRowCol">
                                                <span>3</span>
                                                <span>50</span>
                                            </div>
                                        </td>
                                        <td>설정되지 않은 시즌코드는 해당 규정으로 정의됩니다.</td>      
                                    </tr>               
                                    <tr>
                                        <td>
                                            <span className="checkSet">
                                                <input type="checkbox" />
                                            </span>
                                        </td>
                                        <td>
                                            <button className="bEV">View</button>
                                            <button className="bEC">Copy</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td>성수기</td>
                                        <td className="rowDiv">
                                            <div className="addRowCol">
                                                <span>1</span>
                                                <span>100</span>
                                            </div>
                                            <div className="addRowCol">
                                                <span>2</span>
                                                <span>80</span>
                                            </div>
                                            <div className="addRowCol">
                                                <span>3</span>
                                                <span>50</span>
                                            </div>
                                        </td>
                                        <td>
                                            GOOD SEASON -WEEKENT,HOLIDAY <br/>
                                            BLACK FRIDAYS - Weekend, holiday <br/> 
                                            New season2 - holiday <br/> 
                                            모든 코드가 다 노출됩니다. 한줄일경우에만 ...처리됩니다.
                                        </td>    
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
                <ReserveCancelAddModal onClose={() => {setIsModal(false)}}/>
            </ModalFullPresent>
        }
    </>
    
	
  );
};

export default ReserveCancel;