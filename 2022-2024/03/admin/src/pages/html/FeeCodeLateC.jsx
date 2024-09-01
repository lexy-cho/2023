import React, {useState, useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import LateCAddModal from '../../components/ui/modal/LateCAddModal';
import LateCViewModal from '../../components/ui/modal/LateCViewModal';
import {ModalFullPresent} from '@components/common';

const FeeCodeLateC = () => {
    const [isModal, setIsModal] = useState(false);
    const [isModal2, setIsModal2] = useState(false);
  return (
    <>
        <section className="pagingCase">
            <div className="subTit">
                <div><em>요금</em><span>요금코드 관리</span><span>레이트 카테고리</span></div>
                <h2>레이트 카테고리</h2>
            </div>
            {/* -- */}
            <fieldset className="topForm">
                <div className="left">
                    <div className="multiSSet">
                        <em className="mValue on" id="btnSelect2">시즌 클래스 <i>2</i></em>
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
                </div>
                <span className="right"><button className="btnW sm">마켓 카테고리</button></span>
            </fieldset>
            {/* -- */}
            <div className="content">
                <article className="lbox listCase">
                    <div className="boxTit">
                        <h3>레이트 카테고리 목록</h3>
                        <span className="right">
                            <button className="btnW ss" disabled>선택삭제</button>
                            <button className="bAdd" onClick={() => setIsModal(true)}>추가</button>
                        </span>
                    </div>
                    <div className="boxDt">
                        <div className="tls fcMarketList">
                            <table>
                                <colgroup>
                                    <col width="72" />
                                    <col width="72" />
                                    <col width="160" />
                                    <col width="30%" />
                                    <col width="30%" />
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="30%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>
                                            <span className="checkSet">
                                                <input type="checkbox" />
                                            </span>
                                        </th>
                                        <th>시퀀스</th>
                                        <th>기능</th>
                                        <th>레이트 카테고리</th>
                                        <th>비고</th>
                                        <th>시작 날짜</th>
                                        <th>종료 날짜</th>
                                        <th>연결된 레이트 코드</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span className="checkSet">
                                                <input type="checkbox" />
                                            </span>
                                        </td>
                                        <td>1</td>
                                        <td>
                                            <button className="bEV" onClick={() => setIsModal2(true)}>View</button>
                                            <button className="bEC">Copy</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td>FREE INDIVIDUAL</td>
                                        <td><p className="ellipsis">-</p></td>
                                        <td>24.03.21</td>
                                        <td>24.03.21</td>
                                        <td>OTA,LTS, HBL, ONL</td>
                                    </tr>               
                                    <tr>
                                        <td>
                                            <span className="checkSet">
                                                <input type="checkbox" />
                                            </span>
                                        </td>
                                        <td>2</td>
                                        <td>
                                            <button className="bEV">View</button>
                                            <button className="bEC">Copy</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td>NORMAL</td>
                                        <td><p className="ellipsis">일반적으로 사용해요</p></td>
                                        <td>24.03.21</td>
                                        <td>24.03.21</td>
                                        <td>TEL</td>
                                    </tr>            
                                    <tr>
                                        <td>
                                            <span className="checkSet">
                                                <input type="checkbox" />
                                            </span>
                                        </td>
                                        <td>2</td>
                                        <td>
                                            <button className="bEV">View</button>
                                            <button className="bEC">Copy</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td>ONLINE</td>
                                        <td><p className="ellipsis">온란인에서 사용가능해요</p></td>
                                        <td>24.03.21</td>
                                        <td>24.03.21</td>
                                        <td>INT</td>
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
                <LateCAddModal onClose={() => {setIsModal(false)}}/>
            </ModalFullPresent>
        }
        {isModal2 && 
            <ModalFullPresent >
                <LateCViewModal onClose={() => {setIsModal2(false)}}/>
            </ModalFullPresent>
        }
    </>
    
	
  );
};

export default FeeCodeLateC;