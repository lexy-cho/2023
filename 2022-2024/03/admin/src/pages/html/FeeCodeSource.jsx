import React, { useState, useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import SourceCodeAddModal from '../../components/ui/modal/SourceCodeAddModal';
import SourceCodeViewModal from '../../components/ui/modal/SourceCodeViewModal';
import {ModalFullPresent} from '@components/common';

const FeeCodeSource = () => {
    const [isModal, setIsModal] = useState(false);
    const [isModal2, setIsModal2] = useState(false);
  return (
    <>
        <section className="pagingCase">
            <div className="subTit">
                <div><em>요금</em><span>요금코드 관리</span><span>소스코드</span></div>
                <h2>소스코드</h2>
            </div>
            {/* -- */}
            <fieldset className="topForm">
                <div className="left">
                    <div className="multiSSet">
                        <em className="mValue">소스 이름</em>
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
                    <div className="multiSSet">
                        <em className="mValue on">소스 코드 <i>2</i></em>
                        <div className="selectArea">
                            <div className="item">
                                <span className="checkSet">
                                    <input type="checkbox" id="one2"/>
                                    <label htmlFor="one2">First checkbox</label>
                                </span>
                                <span className="checkSet">
                                    <input type="checkbox" id="two2"/>
                                    <label htmlFor="two2">Second checkbox</label>
                                </span>
                                <span className="checkSet">
                                    <input type="checkbox" id="three2"/>
                                    <label htmlFor="three2">Third checkbox</label>
                                </span>
                            </div>
                            <div className="bLine">
                                <button className="btnL">취소</button>
                                <button className="btnB">적용</button>
                            </div>
                        </div>
                    </div>
                    <button className="btnW sm">필터 초기화</button>
                </div>
                <span className="right"><button className="btnW sm">메뉴 연결</button></span>
            </fieldset>
            {/* -- */}
            <div className="content">
                <article className="lbox listCase">
                    <div className="boxTit">
                        <h3>계정 목록</h3>
                        <span className="right">
                            <button className="btnW ss" disabled>선택삭제</button>
                            <button className="bAdd" onClick={() => setIsModal(true)}>추가</button>
                        </span>
                    </div>
                    <div className="boxDt">
                        <div className="tls">
                            <table>
                                <colgroup>
                                    <col width="72" />
                                    <col width="72" />
                                    <col width="120" />
                                    <col width="18%" />
                                    <col width="18%" />
                                    <col width="*" />
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
                                        <th>소스 코드 이름</th>
                                        <th>소스 코드</th>
                                        <th>비고</th>
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
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td>Off_line</td>
                                        <td>FRONT</td>
                                        <td><p className="ellipsis">FRONT</p></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="checkSet">
                                                <input type="checkbox" />
                                            </span>
                                        </td>
                                        <td>5</td>
                                        <td>
                                            <button className="bEV">View</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td>On_Line</td>
                                        <td>TEL</td>
                                        <td><p className="ellipsis">Telephone</p></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="checkSet">
                                                <input type="checkbox" />
                                            </span>
                                        </td>
                                        <td>1</td>
                                        <td>
                                            <button className="bEV">View</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td>On_Line</td>
                                        <td>INT</td>
                                        <td><p className="ellipsis">Internet</p></td>
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
                <SourceCodeAddModal onClose={() => {setIsModal(false)}}/>
            </ModalFullPresent>
        }
        {isModal2 && 
            <ModalFullPresent >
                <SourceCodeViewModal onClose={() => {setIsModal2(false)}}/>
            </ModalFullPresent>
        }
    </>
    
	
  );
};

export default FeeCodeSource;