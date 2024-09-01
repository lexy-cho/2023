import React from "react";
import { DatePicker } from '@components/common'

const SUFReserv = () => {
    const {dpMin, dpMax} = DatePicker();
    
    return (
        <div className="content summeryUnFix">
            {/* -- */}
            <fieldset className="topForm">
                <div className="left">
                    <span className="ipSearch">
                        <input type="text" placeholder='검색'/>
                        <button>검색</button>
                    </span>
                    <div className="multiSSet">
                        <button className="bFillter">필터 <em>10</em></button>
                        <div className="selectArea">
                            <strong>
                                필터 설정
                                <button>초기화</button>
                            </strong>
                            <div className="fillterItem">
                                <dl>
                                    <dt>옵션 이름</dt>
                                    <dd>
                                        <span className="selectSet">
                                            <select name="" id="" >
                                                <option defaultValue="">전체</option>
                                            </select>
                                        </span>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>기간</dt>
                                    <dd><input type="text" className="multyCalA" defaultValue="24.01.03~ 24.01.31"  /></dd>
                                </dl>
                                <dl>
                                    <dt>상품</dt>
                                    <dd><input type="text" placeholder="입력" /></dd>
                                </dl>
                                <dl>
                                    <dt>상품 수량</dt>
                                    <dd className="multyNum">
                                        <input type="text" placeholder="최소값 입력" /><em>~</em><input type="text" placeholder="최대값 입력" />
                                    </dd>
                                </dl>
                            </div>
                            <div className="bLine">
                                <button className="btnL">취소</button>
                                <button className="btnB">적용</button>
                            </div>
                        </div>
                    </div>
                    <div className="multiSSet">
                        <button className="bField">필드 <em>10</em></button>
                        <div className="selectArea">
                            <strong>필드</strong>
                            <div className="item">
                                <span className="checkSet">
                                    <input type="checkbox" id="one"/>
                                    <label htmlFor="one">First checkbox</label>
                                </span>
                            </div>
                            <div className="bLine">
                                <button className="btnL">취소</button>
                                <button className="btnB">적용</button>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="right">
                    <button className="bExc">엑셀 다운로드</button>
                    <span className="ipModify">
                        {/* 수정일 경우, inModify open 으로 class 추가 */}
                        <input type="text" defaultValue="100개씩 보기" disabled />
                        <button className="bEM">Modify</button>
                        <em>
                            <button className="bID">Del</button>
                            <button className="bED">Done</button>
                        </em>
                    </span>
                    <button className="btnW sm">더보기</button>
                </span>
            </fieldset>
            <article className="lbox listCase summeryUnFixTable">
                <div className="boxTit">
                    <h3>예약 <em className="small">(123개)</em></h3>
                </div>
                <div className="boxDt">
                    <div className="tls">
                        <table>
                            <colgroup>
                                <col style={{width: '72px'}} />
                                <col style={{width: '120px'}} />
                                <col style={{width: '120px'}} />
                                <col style={{width: '120px'}} />
                                <col style={{width: '120px'}} />
                                <col style={{width: '120px'}} />
                                <col style={{width: '120px'}} />
                                <col style={{width: '120px'}} />
                                <col style={{width: '120px'}} />
                                <col style={{width: '120px'}} />
                                <col style={{width: '120px'}} />
                                <col style={{width: '120px'}} />
                                <col style={{width: '120px'}} />
                                <col style={{width: '120px'}} />
                                <col style={{width: '120px'}} />
                                <col style={{width: '120px'}} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>text <button className="sort">sort</button></th>
                                    <th>text <button className="sort up">sort</button></th>
                                    <th>text <button className="sort down">sort</button></th>
                                    <th>text <button className="sort">sort</button></th>
                                    <th>text <button className="sort">sort</button></th>
                                    <th>text <button className="sort">sort</button></th>
                                    <th>text <button className="sort">sort</button></th>
                                    <th>text <button className="sort">sort</button></th>
                                    <th>text <button className="sort">sort</button></th>
                                    <th>text <button className="sort">sort</button></th>
                                    <th>text <button className="sort">sort</button></th>
                                    <th>text <button className="sort">sort</button></th>
                                    <th>text <button className="sort">sort</button></th>
                                    <th>end text <button className="sort">sort</button></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                    <td>TEXTTEXT</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </article>
            {/* -- */}
        </div>
    )
}

export default SUFReserv;