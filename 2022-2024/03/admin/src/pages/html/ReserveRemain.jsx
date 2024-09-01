import React, { useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import { DatePicker } from '@components/common'

const ReserveRemain = () => {
  const {dpMin, dpMax} = DatePicker();

  return (
    <>
        <section>
            <div className="subTit">
                <div><em>예약</em><span>관리</span><span>잔여 룸</span></div>
                <h2>잔여 룸</h2>
            </div>
            {/* -- */}
            <fieldset className="topForm">
                <div className="left">
                    <span className="ipCalendar">
                        <span><input type="text" className="cal" defaultValue="2024.01 ~"  id="datepicker1" onClick={()=>dpMin.show()} /></span>
                        <em>
                            <button className="bPrev">이전</button>
                            <button className="bNext">다음</button>
                        </em>
                        <button className="btnB sm" disabled>오늘</button>
                    </span>
                    <div className="multiSSet">
                        <em className="mValue">룸 타입</em>
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
            </fieldset>
            {/* -- */}
            <div className="content">
                <article className="lbox rRemain editCase">
                    <div className="tls rRListTop">
                        <table>
                            <colgroup>
                                <col width="18%" />
                                <col width="8.5%" />
                                <col width="3.5%" colSpan="21" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th colSpan={2}>룸</th>
                                    <th>01.01</th>
                                    <th>01.02</th>
                                    <th>01.03</th>
                                    <th>01.04</th>
                                    <th>01.05</th>
                                    <th className="sat">01.06</th>
                                    <th className="sun">01.07</th>
                                    <th>01.08</th>
                                    <th>01.09</th>
                                    <th>01.10</th>
                                    <th>01.11</th>
                                    <th>01.12</th>
                                    <th className="sat">01.13</th>
                                    <th className="sun">01.14</th>
                                    <th>01.15</th>
                                    <th>01.16</th>
                                    <th>01.17</th>
                                    <th>01.18</th>
                                    <th>01.19</th>
                                    <th className="sat">01.20</th>
                                    <th className="sun">01.21</th>
                                </tr>
                                <tr>
                                    <th>룸 타입</th>
                                    <th>룸 수량</th>
                                    <th>월</th>
                                    <th>화</th>
                                    <th>수</th>
                                    <th>목</th>
                                    <th>금</th>
                                    <th className="sat">토</th>
                                    <th className="sun">일</th>
                                    <th>월</th>
                                    <th>화</th>
                                    <th>수</th>
                                    <th>목</th>
                                    <th>금</th>
                                    <th className="sat">토</th>
                                    <th className="sun">일</th>
                                    <th>월</th>
                                    <th>화</th>
                                    <th>수</th>
                                    <th>목</th>
                                    <th>금</th>
                                    <th className="sat">토</th>
                                    <th className="sun">일</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="tls rRList">
                        <table>
                            <colgroup>
                                <col width="18%" />
                                <col width="8.5%" />
                                <col width="3.5%" colSpan="21" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>ADM</td>
                                    <td>23</td>
                                    <td><span className="mDim">수정</span><input type="text" defaultValue="23" /></td>
                                    <td><span className="mDim">수정</span><input type="text" defaultValue="23" /></td>
                                    <td><span className="mDim">수정</span><input type="text" defaultValue="23" /></td>
                                    <td><span className="mDim">수정</span><input type="text" defaultValue="23" /></td>
                                    <td><span className="mDim">수정</span><input type="text" defaultValue="23" /></td>
                                    <td><span className="mDim">수정</span><input type="text" defaultValue="23" /></td>
                                    <td><span className="mDim">수정</span><input type="text" defaultValue="23" /></td>
                                    <td><span className="mDim">수정</span><input type="text" defaultValue="23" /></td>
                                    <td><span className="mDim">수정</span><input type="text" defaultValue="23" /></td>
                                    <td><span className="mDim">수정</span><input type="text" defaultValue="23" /></td>
                                    <td><span className="mDim">수정</span><input type="text" defaultValue="23" /></td>
                                    <td><span className="mDim">수정</span><input type="text" defaultValue="23" /></td>
                                    <td><span className="mDim">수정</span><input type="text" defaultValue="23" /></td>
                                    <td><span className="mDim">수정</span><input type="text" defaultValue="23" /></td>
                                    <td><span className="mDim">수정</span><input type="text" defaultValue="23" /></td>
                                    <td><span className="mDim">수정</span><input type="text" defaultValue="23" /></td>
                                    <td><span className="mDim">수정</span><input type="text" defaultValue="23" /></td>
                                    <td><span className="mDim">수정</span><input type="text" defaultValue="23" /></td>
                                    <td><span className="mDim">수정</span><input type="text" defaultValue="23" /></td>
                                    <td><span className="mDim">수정</span><input type="text" defaultValue="23" /></td>
                                    <td><span className="mDim">수정</span><input type="text" defaultValue="23" /></td>
                                </tr>      
                            </tbody>
                        </table>
                    </div>
                    <div className="tls rRListSummery">
                        <table>
                            <colgroup>
                                <col width="18%" />
                                <col width="8.5%" />
                                <col width="3.5%" colSpan="21" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>TOTAL</th>
                                    <th>546</th>
                                    <th>321</th>
                                    <th>321</th>
                                    <th>321</th>
                                    <th>321</th>
                                    <th>321</th>
                                    <th>321</th>
                                    <th>321</th>
                                    <th>321</th>
                                    <th>321</th>
                                    <th>321</th>
                                    <th>321</th>
                                    <th>321</th>
                                    <th>321</th>
                                    <th>321</th>
                                    <th>321</th>
                                    <th>321</th>
                                    <th>321</th>
                                    <th>321</th>
                                    <th>321</th>
                                    <th>321</th>
                                    <th>321</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={2}>예상 판매 룸</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>      
                                <tr>
                                    <td colSpan={2}>블록 제외 판매 룸</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>      
                                <tr>
                                    <td colSpan={2}>블록 룸</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>      
                                <tr>
                                    <td colSpan={2}>점유율</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>  
                                <tr>
                                    <td colSpan={2}>판매 가능 룸</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>         
                            </tbody>
                        </table>
                    </div>
                </article>
            </div>
        </section>
    </>
    
	
  );
};

export default ReserveRemain;