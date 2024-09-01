import React, { useState, useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { useNavigate} from 'react-router-dom';
import { Pagenation }  from '@components/common';
import { DatePicker } from '@components/common';
import MenuLinkModal from '../../components/ui/modal/MenuLinkModal';
import {ModalFullPresent} from '@components/common';

const FeeCodeSeason = () => {
  const {dpMin, dpMax} = DatePicker();
  const [isModal, setIsModal] = useState(false);

  const navigate = useNavigate();
  const handleLink = (e, link) => {
    e.preventDefault();
    navigate(link);
  }
  return (
    <>
        <section className="pagingCase">
            <div className="subTit">
                <div><em>요금</em><span>요금코드 관리</span><span>시즌코드</span></div>
                <h2>시즌코드</h2>
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
                    <input type="text" className="calA" defaultValue="24.01.01 ~ 24.01.30" />
                    <button className="btnW sm">필터 초기화</button>
                </div>
                <span className="right"><button className="btnW sm" onClick={() => setIsModal(true)}>메뉴 연결</button></span>
            </fieldset>
            {/* -- */}
            <div className="content">
                <article className="lbox listCase">
                    <div className="boxTit">
                        <h3>계정 목록</h3>
                        <span className="right">
                            <button className="btnW ss" disabled>선택삭제</button>
                            <button className="bAdd" onClick={(e) => handleLink(e,'/feeCodeSeasonWrite')}>추가</button>
                        </span>
                    </div>
                    <div className="boxDt">
                        <div className="tls">
                            <table>
                                <colgroup>
                                    <col width="72" />
                                    <col width="120" />
                                    <col width="314" />
                                    <col width="*" />
                                    <col width="150" />
                                    <col width="150" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>
                                            <span className="checkSet">
                                                <input type="checkbox" />
                                            </span>
                                        </th>
                                        <th>기능</th>
                                        <th>시즌 클래스 이름</th>
                                        <th>시즌 코드</th>
                                        <th>시작 날짜</th>
                                        <th>종료 날짜</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span className="checkSet">
                                                <input type="checkbox" />
                                            </span>
                                        </td>
                                        <td>
                                            <button className="bEV">View</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td>For member</td>
                                        <td>Weekday, Summer, Winter</td>
                                        <td>24.03.21</td>
                                        <td>24.03.21</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="checkSet">
                                                <input type="checkbox" />
                                            </span>
                                        </td>
                                        <td>
                                            <button className="bEV">View</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td>Room field Calendar</td>
                                        <td>Weekday, Weekend, Holiday, Friday, Sunday</td>
                                        <td>24.03.21</td>
                                        <td>24.03.21</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="checkSet">
                                                <input type="checkbox" />
                                            </span>
                                        </td>
                                        <td>
                                            <button className="bEV">View</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td>Other</td>
                                        <td>Weekday, Weekend</td>
                                        <td>24.03.21</td>
                                        <td>24.03.21</td>
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
                <MenuLinkModal onClose={() => {setIsModal(false)}}/>
            </ModalFullPresent>
        }
    </>
    
	
  );
};

export default FeeCodeSeason;