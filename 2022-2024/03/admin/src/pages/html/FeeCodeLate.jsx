import React, { useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import { DatePicker } from '@components/common';

const FeeCodeLate = () => {
    const {dpMin, dpMax} = DatePicker();

  return (
    <>
        <section className="pagingCase">
            <div className="subTit">
                <div><em>요금</em><span>요금코드 관리</span><span>레이트 코드</span></div>
                <h2>레이트 코드</h2>
            </div>
            {/* -- */}
            <fieldset className="topForm">
                <div className="left">
                    <div className="multiSSet">
                        <em className="mValue">레이트 코드</em>
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
                    <input type="text" className="calA" placeholder="판매 날짜" id="datepicker1" onClick={()=>dpMin.show()} />
                    <button className="btnW sm">필터 초기화</button>
                </div>
            </fieldset>
            {/* -- */}
            <div className="content">
                <article className="lbox listCase">
                    <div className="boxTit">
                        <h3>레이트 코드 목록</h3>
                        <span className="right">
                            <button className="btnW ss" disabled>선택삭제</button>
                            <button className="bAdd">추가</button>
                        </span>
                    </div>
                    <div className="boxDt">
                        <div className="tls fcMarketList">
                            <table>
                                <colgroup>
                                    <col width="72" />
                                    <col width="72" />
                                    <col width="160" />
                                    <col width="160" />
                                    <col width="30%" />
                                    <col width="30%" />
                                    <col width="120" />
                                    <col width="120" />
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
                                        <th>레이트 코드</th>
                                        <th>레이트 카테고리</th>
                                        <th>비고</th>
                                        <th>판매 시작 날짜</th>
                                        <th>판매 종료 날짜</th>
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
                                            <button className="bEV">View</button>
                                            <button className="bEC">Copy</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td>OTA</td>
                                        <td>PACKAGE</td>
                                        <td><p className="ellipsis">Long Term Stay, 장기숙박</p></td>
                                        <td>24.03.21</td>
                                        <td>24.03.21</td>
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
                                        <td>TEL</td>
                                        <td>NORMAL</td>
                                        <td><p className="ellipsis">Rack Rate, 표준요금</p></td>
                                        <td>24.03.21</td>
                                        <td>24.03.21</td>
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
                                        <td>INT</td>
                                        <td>ONLINE</td>
                                        <td><p className="ellipsis">패키지</p></td>
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
    </>
    
	
  );
};

export default FeeCodeLate;