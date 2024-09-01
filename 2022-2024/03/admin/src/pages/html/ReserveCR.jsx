import React, { useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import { DatePicker } from '@components/common'

const ReserveCR = () => {
  const {dpMin, dpMax} = DatePicker();

  return (
    <>
        <section className="pagingCase">
            <div className="subTit">
                <div><em>예약</em><span>관리</span><span>고객 요청사항</span></div>
                <h2>고객 요청사항</h2>
            </div>
            {/* -- */}
            <fieldset className="topForm">
                <div className="left">
                    <span className="ipSearch">
                        <input type="text" placeholder="예약자, 예약번호, 회원번호 검색" />
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
                        <input type="text" className="calA" placeholder="체크아웃 날짜" id="datepicker2" onClick={()=>dpMax.show()} />
                    </span>
                    <button className="btnW sm">필터 초기화</button>
                </div>
                <button className="bExc">엑셀 다운로드</button>
            </fieldset>
            {/* -- */}
            <div className="content">
                <article className="lbox listCase">
                    <div className="boxTit"><h3>요청사항 목록</h3></div>
                    <div className="boxDt">
                        <div className="tls requestList">
                            <table>
                                <colgroup>
                                    <col width="80" />
                                    <col width="80" />
                                    <col width="100" />
                                    <col width="100" />
                                    <col width="70" />
                                    <col width="70" />
                                    <col width="45%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>요청 날짜</th>
                                        <th>예약번호</th>
                                        <th>고객명</th>
                                        <th>룸 타입</th>
                                        <th>체크인 날짜</th>
                                        <th>체크아웃 날짜</th>
                                        <th>요청사항</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>24.01.02</td>
                                        <td>2132133</td>
                                        <td>홍길동</td>
                                        <td>AKT</td>
                                        <td>24.01.02</td>
                                        <td>24.01.02</td>
                                        <td className="requestTxt">
                                            <div><p className="ellipsis">요청사항이 두줄이상이면 펼치기를 사용할수있습니다. 해당 테이블은 펼쳐집니다.요청사항이 두줄이상이면 펼치기를 사용할수있습니다. 해당 테이블은 펼쳐집니다.요청사항이 두줄이상이면 펼치기를 사용할수있습니다. 해당 테이블은 펼쳐집니다.요청사항이 두줄이상이면 펼치기를 사용할</p>
                                            <button>펼치기</button></div>
                                        </td>
                                    </tr>      
                                    <tr>
                                        <td>24.01.02</td>
                                        <td>2132133</td>
                                        <td>홍길동</td>
                                        <td>AKT</td>
                                        <td>24.01.02</td>
                                        <td>24.01.02</td>
                                        <td className="requestTxt"><div><p className="ellipsis">요청사항이 두줄이상이면 펼치기를 사용할수있습니다.</p></div></td>
                                    </tr>               
                                    <tr>
                                        <td>24.01.02</td>
                                        <td>2132133</td>
                                        <td>홍길동</td>
                                        <td>AKT</td>
                                        <td>24.01.02</td>
                                        <td>24.01.02</td>
                                        <td className="requestTxt close">
                                            <div><p className="ellipsis">요청사항이 두줄이상이면 펼치기를 사용할수있습니다. 해당 테이블은 펼쳐집니다.요청사항이 두줄이상이면 펼치기를 사용할수있습니다. 해당 테이블은 펼쳐집니다.요청사항이 두줄이상이면 펼치기를 사용할수있습니다. 해당 테이블은 펼쳐집니다.요청사항이 두줄이상이면 펼치기를 사용할</p>
                                            <button>접기</button></div>
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
    </>
    
	
  );
};

export default ReserveCR;