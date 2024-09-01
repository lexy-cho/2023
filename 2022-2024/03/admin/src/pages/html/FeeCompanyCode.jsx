import React, { useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import { DatePicker } from '@components/common'

const FeeCompanyCode = () => {
  const {dpMin, dpMax} = DatePicker();

  return (
    <>
        <section className="pagingCase">
            <div className="subTit">
                <div><em>요금</em><span>회사</span><span>회사 코드</span></div>
                <h2>회사 코드</h2>
            </div>
            {/* -- */}
            <fieldset className="topForm">
                <div className="left">
                    <span className="ipSearch">
                        <input type="text" placeholder="회사명, 연락처 검색" />
                        <button>검색</button>
                    </span>
                    <div className="multiSSet">
                        <em className="mValue">구분</em>
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
                    <span className="short">
                        <input type="text" className="calA" placeholder="시작 날짜" id="datepicker1" onClick={()=>dpMin.show()} />
                        <input type="text" className="calA" placeholder="마감 날짜" id="datepicker2" onClick={()=>dpMax.show()} />
                    </span>
                    <button className="btnW sm">필터 초기화</button>
                </div>
                <span className="right"><button className="btnW sm">정산 정보</button></span>
            </fieldset>
            {/* -- */}
            <div className="content">
                <article className="lbox listCase">
                    <div className="boxTit">
                        <h3>회사 코드 목록</h3>
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
                                    <col width="100" />
                                    <col width="80" />
                                    <col width="180" />
                                    <col width="180" />
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="80" />
                                    <col width="140" />
                                    <col width="100" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>
                                            <span className="checkSet">
                                                <input type="checkbox" />
                                            </span>
                                        </th>
                                        <th>기능</th>
                                        <th>구분</th>
                                        <th>이름</th>
                                        <th>계정</th>
                                        <th>판매 시작 날짜</th>
                                        <th>판매 종료 날짜</th>
                                        <th>수수료</th>
                                        <th>연락처</th>
                                        <th>담당자</th>
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
                                        <td>개인</td>
                                        <td>이름 1</td>
                                        <td>TJRUD2@DOWHAT.IO</td>
                                        <td>24.03.21</td>
                                        <td>24.03.21</td>
                                        <td>10%</td>
                                        <td>010-1453-1211</td>
                                        <td>홍길동</td>
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
                                        <td>개인</td>
                                        <td>이름 1</td>
                                        <td>TJRUD2@DOWHAT.IO</td>
                                        <td>24.03.21</td>
                                        <td>24.03.21</td>
                                        <td>10%</td>
                                        <td>010-1453-1211</td>
                                        <td>홍길동</td>
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
                                        <td>개인</td>
                                        <td>이름 1</td>
                                        <td>TJRUD2@DOWHAT.IO</td>
                                        <td>24.03.21</td>
                                        <td>24.03.21</td>
                                        <td>10%</td>
                                        <td>010-1453-1211</td>
                                        <td>홍길동</td>
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

export default FeeCompanyCode;