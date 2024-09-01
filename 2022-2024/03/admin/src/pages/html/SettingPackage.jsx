import React, { useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';

const SettingPackage = () => {
  return (
    <>
        <section className="pagingCase">
            <div className="subTit">
                <div><em>설정</em><span>상품관리</span><span>패키지</span></div>
                <h2>패키지</h2>
            </div>
            {/* -- */}
            <fieldset className="topForm">
                <span className="ipSearch">
                    <input type="text" placeholder='패키지명으로 검색'/>
                    <button>검색</button>
                </span>
            </fieldset>
            {/* -- */}
            <div className="content">
                <article className="lbox listCase">
                    <div className="boxTit">
                        <h3>패키지 목록</h3>
                        <span className="right">
                            <button className="btnW ss" disabled>선택삭제</button>
                            <button className="bAdd">추가</button>
                        </span>
                    </div>
                    <div className="boxDt">
                        <div className="tls">
                            <table>
                                <colgroup>
                                    <col width="72" />
                                    <col width="72" />
                                    <col width="100" />
                                    <col width="100" />
                                    <col width="30%" />
                                    <col width="120" />
                                    <col width="150" />
                                    <col width="150" />
                                    <col width="30%" />
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
                                        <th>노출</th>
                                        <th>이름</th>
                                        <th>패키지 타입</th>
                                        <th>시작 날짜</th>
                                        <th>종료 날짜</th>
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
                                            <button className="bEV">View</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td className="deactive">비노출</td>
                                        <td>늦캉스 패키지</td>
                                        <td>SDB</td>
                                        <td>24.03.21</td>
                                        <td>24.03.29</td>
                                        <td><p className="ellipsis">-</p></td>
                                    </tr>
                                    <tr className="checkded">
                                        {/* 목록 내 체크박스 선택시 class 추가 (스크립트 필요)  */}
                                        <td>
                                            <span className="checkSet">
                                                <input type="checkbox" defaultChecked />
                                            </span>
                                        </td>
                                        <td>2</td>
                                        <td>
                                            <button className="bEV">View</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td className="active">노출</td>
                                        <td>늦캉스 패키지</td>
                                        <td>STW</td>
                                        <td>24.03.21</td>
                                        <td>24.03.29</td>
                                        <td><p className="ellipsis">-</p></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="checkSet">
                                                <input type="checkbox" />
                                            </span>
                                        </td>
                                        <td>3</td>
                                        <td>
                                            <button className="bEV">View</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td className="active">노출</td>
                                        <td>늦캉스 패키지</td>
                                        <td>FTW</td>
                                        <td>24.03.21</td>
                                        <td>24.03.29</td>
                                        <td><p className="ellipsis">-</p></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={9} className='noResult'>
                                            <div>해당 검색어로 된 검색 결과가 없습니다.</div>
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

export default SettingPackage;