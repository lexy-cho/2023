import React, { useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';

const FeeCodemarket = () => {
  return (
    <>
        <section className="pagingCase">
            <div className="subTit">
                <div><em>요금</em><span>요금코드 관리</span><span>마켓 카테고리/코드</span></div>
                <h2>마켓 카테고리/코드</h2>
            </div>
            {/* -- */}
            <div className="content">
                <article className="lbox listCase">
                    <div className="boxTit">
                        <h3>마켓 코드 목록</h3>
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
                                    <col width="120" />
                                    <col width="30%" />
                                    <col width="*" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>
                                            <span className="checkSet">
                                                <input type="checkbox" />
                                            </span>
                                        </th>
                                        <th>기능</th>
                                        <th>마켓 카테고리</th>
                                        <th className="rowDiv">
                                            <div className="addRowCol">
                                                <span>마켓 코드</span>
                                                <span>비고</span>
                                            </div>
                                        </th>
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
                                        <td>FREE INDIVIDUAL</td>
                                        <td className="rowDiv">
                                            <div className="addRowCol">
                                                <span>OTA</span>
                                                <span>온라인 여행사</span>
                                            </div>
                                            <div className="addRowCol">
                                                <span>BAR</span>
                                                <span>최저요금</span>
                                            </div>
                                            <div className="addRowCol">
                                                <span>WKI</span>
                                                <span>워크인</span>
                                            </div>
                                        </td>    
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
                                        <td>Member</td>
                                        <td className="rowDiv">
                                            <div className="addRowCol">
                                                <span>OMB</span>
                                                <span>개방형 소유자</span>
                                            </div>
                                            <div className="addRowCol">
                                                <span>MBR</span>
                                                <span>추천요금</span>
                                            </div>
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

export default FeeCodemarket;