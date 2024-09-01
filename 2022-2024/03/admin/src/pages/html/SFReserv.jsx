import React from "react";
import { DatePicker } from '@components/common'

const SFReserv = () => {
    const {dpMin, dpMax} = DatePicker();
    
    return (
        <div className="content summeryFix">
            {/* -- */}
            <fieldset className="topForm">
                <div className="left">
                    <span className="sTab">
                        <button className="on">판매 합계</button>
                        <button>판매 금액 합계</button>
                    </span>
                    <div className="multiSSet">
                        <em className="mValue on">모든 호텔</em>
                        <div className="selectArea">
                            <div className="item">
                                <span className="radioSet">
                                    <input type="radio" id="one2"/>
                                    <label htmlFor="one2">First checkbox</label>
                                </span>
                            </div>
                            <div className="bLine">
                                <button className="btnL">취소</button>
                                <button className="btnB">적용</button>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="selectSet">
                    <select name="" id="">
                        <option defaultValue="">월간</option>
                        <option defaultValue="">연간</option>
                    </select>
                </span>
            </fieldset>
            {/* 월별 표 */}
            <article className="lbox summeryFixTable" style={{display:'none'}}>
                <div className="tls mothFix">
                    <table>
                        <colgroup>
                            <col width="100" />
                            <col width="242" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th className="first">월별</th>
                                <th>카테고리</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th rowSpan="3" className="first">2024/1</th>
                                <td>CMS - Agoda</td>
                            </tr> 
                            <tr>
                                <td>CMS - Agoda</td>
                            </tr>  
                            <tr>
                                <td className="total">총 계</td>
                            </tr>   
                            <tr>
                                <th rowSpan="3" className="first">2024/2</th>
                                <td>CMS - Agoda</td>
                            </tr> 
                            <tr>
                                <td>CMS - Agoda</td>
                            </tr>  
                            <tr>
                                <td className="total">총 계</td>
                            </tr>    
                        </tbody>
                    </table>
                </div>
                <div className="dayBack">
                    <span className="summeryBtn">
                        <button>이전</button>
                        <button>다음</button>
                    </span>
                    <div className="tls dayNum wScroll">
                        <table>
                            <thead>
                                <tr>
                                    <th>1일</th>
                                    <th>2일</th>
                                    <th>3일</th>
                                    <th>4일</th>
                                    <th>5일</th>
                                    <th>6일</th>
                                    <th className="sun">7일</th>
                                    <th>8일</th>
                                    <th>9일</th>
                                    <th>10일</th>
                                    <th>11일</th>
                                    <th>12일</th>
                                    <th>13일</th>
                                    <th className="sun">14일</th>
                                    <th>15일</th>
                                    <th>16일</th>
                                    <th>17일</th>
                                    <th>18일</th>
                                    <th>19일</th>
                                    <th>20일</th>
                                    <th className="sun">21일</th>
                                    <th>22일</th>
                                    <th>23일</th>
                                    <th>24일</th>
                                    <th>25일</th>
                                    <th>26일</th>
                                    <th>27일</th>
                                    <th className="sun">28일</th>
                                    <th>29일</th>
                                    <th>30일</th>
                                    <th>31일</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="dayData">
                        {/**/}
                        <div className="tls monthDay wScroll">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr> 
                                    <tr>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr> 
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                    </tr>
                                </tfoot>
                            </table>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr> 
                                    <tr>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr> 
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        {/**/}
                    </div>
                </div>
            </article>
            {/* end 월별 표 */}
            {/* 연별 표 */}
            <article className="lbox summeryFixTable yearCase">
                <div className="tls mothFix">
                    <table>
                        <colgroup>
                            <col width="100" />
                            <col width="242" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th className="first">연도별</th>
                                <th>카테고리</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th rowSpan="3" className="first">2024</th>
                                <td>CMS - Agoda</td>
                            </tr> 
                            <tr>
                                <td>CMS - Agoda</td>
                            </tr>  
                            <tr>
                                <td className="total">총 계</td>
                            </tr>    
                        </tbody>
                    </table>
                </div>
                <div className="dayBack">
                    <div className="tls dayNum wScroll">
                        <table>
                            <thead>
                                <tr>
                                    <th>1월</th>
                                    <th>2월</th>
                                    <th>3월</th>
                                    <th>4월</th>
                                    <th>5월</th>
                                    <th>6월</th>
                                    <th>7월</th>
                                    <th>8월</th>
                                    <th>9월</th>
                                    <th>10월</th>
                                    <th>11월</th>
                                    <th>12월</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="dayData">
                        {/**/}
                        <div className="tls monthDay wScroll">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr> 
                                    <tr>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr> 
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                        <th>0</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        {/**/}
                    </div>
                </div>
            </article>
            {/* -- */}
            <article className="lbox summeryGraph">
                <div className="boxTit"><h3>판매 차트</h3></div>
                <div className="boxDt">
                    <div className="mTab">
                        <span>
                            <button className="on">1월</button>
                            <button>2월</button>
                            <button>3월</button>
                            <button>4월</button>
                            <button>5월</button>
                            <button>6월</button>
                            <button>7월</button>
                            <button>8월</button>
                            <button>9월</button>
                            <button>10월</button>
                            <button>11월</button>
                            <button>12월</button>
                        </span>
                    </div>
                    {/* 1월 */}
                    <div>
                        그래프 영역
                    </div>
                    {/* 2월 */}
                    <div style={{display:'none'}}>
                        그래프 영역
                    </div>
                    {/* 이하 생략*/}
                </div>
            </article>
        </div>
    )
}

export default SFReserv;