import React, { useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';

const SettingItem = () => {
  return (
    <>
        <section>
            <div className="subTit">
                <div><em>설정</em><span>설정</span><span>호텔관리</span></div>
                <h2>호텔관리</h2>
            </div>
            {/* -- */}
            <fieldset className="topForm">
                <span className="ipSearch">
                    <input type="text" placeholder='호텔 이름, 담당자 이름 검색'/>
                    <button>검색</button>
                </span>
            </fieldset>
            {/* -- */}
            <div className="content">
                <article className="lbox listCase">
                    <div className="boxTit">
                        <h3>호텔 목록</h3>
                        <span className="right">
                            <button className="bAdd">추가</button>
                        </span>
                    </div>
                    <div className="boxDt">
                        <div className="tls">
                            <table>
                                <colgroup>
                                    <col width="120" />
                                    <col width="25%" />
                                    <col width="100" />
                                    <col width="180" />
                                    <col width="30%" />
                                    <col width="150" />
                                    <col width="150" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>기능</th>
                                        <th>호텔 이름</th>
                                        <th>호텔 코드</th>
                                        <th>담당자 이름</th>
                                        <th>주소</th>
                                        <th>등록 날짜</th>
                                        <th>마지막 수정 날짜</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <button className="bEV">View</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td>체스터톤스 속초</td>
                                        <td>1024</td>
                                        <td>홍길동</td>
                                        <td><p className="ellipsis">서울시 금천구 가산디지털 1로 226 에이스하이엔드 5차...</p></td>
                                        <td>24.03.21 13:00</td>
                                        <td>24.03.21 15:00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </article>
            </div>
            {/* -- */}
        </section>
    </>
    
	
  );
};

export default SettingItem;