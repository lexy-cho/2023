import React, { useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import { DatePicker } from '@components/common'

const FeeCompanyCMS = () => {
  const {dpMin, dpMax} = DatePicker();

  return (
    <>
        <section className="pagingCase">
            <div className="subTit">
                <div><em>요금</em><span>회사</span><span>CMS 채널</span></div>
                <h2>CMS 채널</h2>
            </div>
            {/* -- */}
            <fieldset className="topForm">
                <div className="multiSSet">
                    <em className="mValue on">채널 전체</em>
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
                <span className="right"><button className="bCR">데이터 연동</button></span>
            </fieldset>
            {/* -- */}
            <div className="content">
                <article className="lbox listCase">
                    <div className="boxTit"><h3>채널 목록</h3></div>
                    <div className="boxDt">
                        <div className="tls fcMarketList">
                            <table>
                                <colgroup>
                                    <col width="20%" />
                                    <col width="70%" />
                                    <col width="30%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>채널명</th>
                                        <th>채널 아이템</th>
                                        <th>룸 타입 / 패키지</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td rowSpan={3}>Agoda</td>
                                        <td>Standard - Twin</td>
                                        <td>STA</td>
                                    </tr>   
                                    <tr>
                                        <td>Standard - Twin</td>
                                        <td>STA</td>
                                    </tr>
                                    <tr>
                                        <td>Standard - Twin</td>
                                        <td>STA</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={6}>TRIP</td>
                                        <td><p className="ellipsis">TRIP.COM_Standard Twin&lt;double occupancy&gt;&lt;Two breakfast&gt;&lt;net rate mode&gt;&lt;pre-pay&gt;</p></td>
                                        <td>2BF PKG(RST)</td>
                                    </tr>
                                    <tr>
                                        <td><p className="ellipsis">TRIP.COM_Standard Twin&lt;double occupancy&gt;&lt;Two breakfast&gt;&lt;net rate mode&gt;&lt;pre-pay&gt;</p></td>
                                        <td>HOLLYWOOD KING</td>
                                    </tr>
                                    <tr>
                                        <td><p className="ellipsis">TRIP.COM_Standard Twin&lt;double occupancy&gt;&lt;Two breakfast&gt;&lt;net rate mode&gt;&lt;pre-pay&gt;</p></td>
                                        <td>2BF PKG(RST)</td>
                                    </tr>
                                    <tr>
                                        <td><p className="ellipsis">TRIP.COM_Standard Twin&lt;double occupancy&gt;&lt;Two breakfast&gt;&lt;net rate mode&gt;&lt;pre-pay&gt;</p></td>
                                        <td>HOLLYWOOD KING</td>
                                    </tr>
                                    <tr>
                                        <td><p className="ellipsis">TRIP.COM_Standard Twin&lt;double occupancy&gt;&lt;Two breakfast&gt;&lt;net rate mode&gt;&lt;pre-pay&gt;</p></td>
                                        <td>2BF PKG(RST)</td>
                                    </tr>
                                    <tr>
                                        <td><p className="ellipsis">TRIP.COM_Standard Twin&lt;double occupancy&gt;&lt;Two breakfast&gt;&lt;net rate mode&gt;&lt;pre-pay&gt;</p></td>
                                        <td>HOLLYWOOD KING</td>
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

export default FeeCompanyCMS;