import React from "react";

const SPWriteInventory = () => {
    return (
        <div className="contentBack">
            <div className="content scroll">
                {/* -- */}
                <fieldset className="topForm">
                    <div className="left">
                        <span className="ipCalendar">
                            <span><input type="text" className="cal" defaultValue="2024.01 ~"  /></span>
                            <em>
                                <button className="bPrev">이전</button>
                                <button className="bNext">다음</button>
                            </em>
                            <button className="btnB sm" >오늘</button>
                        </span>
                    </div>
                </fieldset>
                {/* -- */}
                <article className="feeSetList">
                    <div className="tls scroll editCase">
                        <table>
                            <colgroup>
                                <col width="20" />
                                <col width="20" />
                                <col width="20" />
                                <col width="200" />
                                <col width="70" />
                                <col width="80" />
                                <col width="80" />
                                <col width="80" />
                                <col width="80" />
                                <col width="80" />
                                <col width="80" />
                                <col width="80" />
                                <col width="80" />
                                <col width="80" />
                                <col width="80" />
                                <col width="80" />
                                <col width="80" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th className="first" colSpan="4">전체접기</th>
                                    <th></th>
                                    <th>01.01</th>
                                    <th>01.02</th>
                                    <th>01.03</th>
                                    <th>01.04</th>
                                    <th>01.05</th>
                                    <th className="sun">01.06</th>
                                    <th>01.07</th>
                                    <th>01.08</th>
                                    <th>01.09</th>
                                    <th>01.10</th>
                                    <th>01.11</th>
                                    <th>01.12</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Only 1Depth */}
                                <tr className="stsLLine">
                                    <th className="first" rowSpan="3" colSpan="4">체스터톤스 속초</th>
                                    <th className="label">판매상태</th>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                </tr>
                                <tr className="numLine">
                                    <th className="label"><span className="num">잔여<em>예약</em></span></th>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                </tr>
                                <tr>
                                    <th className="label">판매가능 룸</th>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                </tr> 
                                {/* end Only 1Depth */} 
                                {/* 1Depth */}
                                <tr className="stsLLine">
                                    <th className="first" rowSpan="3" colSpan="4">원룸 스텐다드 슈퍼 더블(STD) <button className="opner on">오프너</button></th>
                                    <th className="label">판매상태</th>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                </tr>
                                <tr className="numLine">
                                    <th className="label"><span className="num">잔여<em>예약</em></span></th>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                </tr>
                                <tr>
                                    <th className="label">판매가능 룸</th>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                </tr> 
                                {/* end 1Depth */} 
                                {/* 2Depth */}
                                <tr>
                                    <th rowSpan="14"></th>
                                    <th colSpan="3" className="depthTh">Room Only <button className="opner on">오프너</button></th>
                                    <th className="label"><span className="num">잔여<em>예약</em></span></th>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                </tr>  
                                {/* end 2Depth */}
                                {/* 3Depth */}
                                <tr>
                                    <th rowSpan="12"></th>
                                    <th rowSpan="2" colSpan="2" className="depthTh">
                                        PMS 
                                        <span className="toggleSet">
                                            <input type="checkbox" />
                                            <label>block</label>
                                        </span> 
                                        <button className="opner on">오프너</button>
                                    </th>
                                    <th>판매가능 수량</th>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                </tr>  
                                <tr className="numLine">
                                    <th className="label"><span className="num">잔여<em>예약</em></span></th>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                </tr> 
                                {/* end 3Depth */}
                                {/* 4Depth */}
                                <tr>
                                    <th rowSpan="4"></th>
                                    <th rowSpan="2" className="depthTh"><span className="txt">PHN</span></th>
                                    <th>판매가능 수량</th>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                </tr>  
                                <tr className="numLine">
                                    <th className="label"><span className="num">잔여<em>예약</em></span></th>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                </tr> 
                                <tr>
                                    <th rowSpan="2" className="depthTh"><span className="txt">WALK-IN</span></th>
                                    <th>판매가능 수량</th>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                </tr>  
                                <tr className="numLine">
                                    <th className="label"><span className="num">잔여<em>예약</em></span></th>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                </tr> 
                                {/* end 4Depth */}
                                {/*********************************/}
                                {/* Only 3Depth - no 4Depth */}
                                <tr>
                                    <th rowSpan="2" colSpan="2" className="depthTh">
                                        DB 
                                        <span className="toggleSet">
                                            <input type="checkbox" />
                                            <label>Allot</label>
                                        </span> 
                                    </th>
                                    <th>판매가능 수량</th>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                </tr>  
                                <tr className="numLine">
                                    <th className="label"><span className="num">잔여<em>예약</em></span></th>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                </tr> 
                                {/* end Only 3Depth - no 4Depth */}
                                {/*********************************/}
                                {/* 3Depth */}
                                <tr>
                                    <th rowSpan="2" colSpan="2" className="depthTh">
                                        CMS 
                                        <span className="toggleSet">
                                            <input type="checkbox" />
                                            <label>Allot</label>
                                        </span> 
                                        <button className="opner on">오프너</button>
                                        </th>
                                    <th>판매가능 수량</th>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                </tr>  
                                <tr className="numLine">
                                    <th className="label"><span className="num">잔여<em>예약</em></span></th>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                </tr> 
                                {/* end 3Depth */}
                                {/* 4Depth */}
                                <tr>
                                    <th rowSpan="2"></th>
                                    <th rowSpan="2" className="depthTh"><span className="txt">Agoda-Room Only-Standard-Twin DELUX DOUBLE Agoda-Room Only-Standard-Twin DELUX DOUBLE</span></th>
                                    <th>판매가능 수량</th>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                    <td className="mCol">
                                        <span className="mDim">수정</span>
                                        <input type="text" defaultValue="" placeholder="입력" />
                                    </td>
                                </tr>  
                                <tr className="numLine">
                                    <th className="label"><span className="num">잔여<em>예약</em></span></th>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                </tr> 
                                {/* end 4Depth */}
                                {/*********************************/}
                                {/* 2Depth - Close 3, 4 Depth */}
                                <tr>
                                    <th colSpan="3" className="depthTh">멍카스 패키지 <button className="opner">오프너</button></th>
                                    <th className="label"><span className="num">잔여<em>예약</em></span></th>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                </tr>  
                                {/* end 2Depth - Close 3, 4 Depth */}
                                {/* 3Depth */}
                                <tr style={{display:'none'}}>
                                    <th rowSpan="8"></th>
                                    <th rowSpan="2" colSpan="2" className="depthTh">PMS <button className="opner on">오프너</button></th>
                                    <th>판매가능 수량</th>
                                    {/* 샘플 생략 */}
                                </tr>  
                                <tr className="numLine" style={{display:'none'}}>
                                    <th className="label"><span className="num">잔여<em>예약</em></span></th>
                                    {/* 샘플 생략 */}
                                </tr> 
                                {/* end 3Depth */}
                                {/* 4Depth */}
                                <tr style={{display:'none'}}>
                                    <th rowSpan="4"></th>
                                    <th rowSpan="2" className="depthTh">PHN</th>
                                    <th>판매가능 수량</th>
                                    {/* 샘플 생략 */}
                                </tr>  
                                <tr className="numLine" style={{display:'none'}}>
                                    <th className="label"><span className="num">잔여<em>예약</em></span></th>
                                    {/* 샘플 생략 */}
                                </tr> 
                                <tr style={{display:'none'}}>
                                    <th rowSpan="2" className="depthTh">WALK-IN</th>
                                    <th>판매가능 수량</th>
                                    {/* 샘플 생략 */}
                                </tr>  
                                <tr className="numLine" style={{display:'none'}}>
                                    <th className="label"><span className="num">잔여<em>예약</em></span></th>
                                    {/* 샘플 생략 */}
                                </tr> 
                                {/* end 4Depth */}
                                {/*********************************/}
                                {/* 1Depth */}
                                <tr className="stsLLine">
                                    <th className="first" rowSpan="2" colSpan="4">쓰리룸 프리미어 스위트 더블 디럭스 로얄(TKTS) <button className="opner">오프너</button></th>
                                    {/* <th className="first" rowSpan="3" colSpan="4">쓰리룸 프리미어 스위트 더블 디럭스 로얄(TKTS) <button className="opner on">오프너</button></th> 2, 3, 4 Depth 닫기 전 */}
                                    <th className="label">판매상태</th>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                </tr>
                                <tr className="numLine">
                                    <th className="label"><span className="num">잔여<em>예약</em></span></th>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                </tr>
                                <tr style={{display:'none'}}>
                                    <th className="label">판매가능 룸</th>
                                    {/* 샘플 생략 */}
                                </tr> 
                                {/* end 1Depth */} 
                                {/* 2Depth */}
                                <tr style={{display:'none'}}>
                                    <th rowSpan="7"></th>
                                    <th colSpan="3" className="depthTh">Room Only <button className="opner on">오프너</button></th>
                                    <th className="label"><span className="num">잔여<em>예약</em></span></th>
                                    {/* 샘플 생략 */}
                                </tr>  
                                {/* end 2Depth */}
                                {/* 3Depth */}
                                <tr style={{display:'none'}}>
                                    <th rowSpan="8"></th>
                                    <th rowSpan="2" colSpan="2" className="depthTh">PMS <button className="opner on">오프너</button></th>
                                    <th>판매가능 수량</th>
                                    {/* 샘플 생략 */}
                                </tr>  
                                <tr className="numLine" style={{display:'none'}}>
                                    <th className="label"><span className="num">잔여<em>예약</em></span></th>
                                    {/* 샘플 생략 */}
                                </tr> 
                                {/* end 3Depth */}
                                {/* 4Depth */}
                                <tr style={{display:'none'}}>
                                    <th rowSpan="4"></th>
                                    <th rowSpan="2" className="depthTh">PHN</th>
                                    <th>판매가능 수량</th>
                                    {/* 샘플 생략 */}
                                </tr>  
                                <tr className="numLine" style={{display:'none'}}>
                                    <th className="label"><span className="num">잔여<em>예약</em></span></th>
                                    {/* 샘플 생략 */}
                                </tr> 
                                <tr style={{display:'none'}}>
                                    <th rowSpan="2" className="depthTh">WALK-IN</th>
                                    <th>판매가능 수량</th>
                                    {/* 샘플 생략 */}
                                </tr>  
                                <tr className="numLine" style={{display:'none'}}>
                                    <th className="label"><span className="num">잔여<em>예약</em></span></th>
                                    {/* 샘플 생략 */}
                                </tr> 
                                {/* end 4Depth */}
                                {/*********************************/}
                                {/* 1Depth */}
                                <tr className="stsLLine">
                                    <th className="first" rowSpan="2" colSpan="4">원룸 스텐다드 슈퍼 더블(STD) <button className="opner">오프너</button></th>
                                    {/* <th className="first" rowSpan="3" colSpan="4">원룸 스텐다드 슈퍼 더블(STD) <button className="opner on">오프너</button></th> 2, 3, 4 Depth 닫기 전 */}
                                    <th className="label">판매상태</th>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                    <td className="close">마감</td>
                                    <td>오픈</td>
                                </tr>
                                <tr className="numLine">
                                    <th className="label"><span className="num">잔여<em>예약</em></span></th>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                    <td><span className="num">2<em>100</em></span></td>
                                </tr>
                                <tr style={{display:'none'}}>
                                    <th className="label">판매가능 룸</th>
                                    {/* 샘플 생략 */}
                                </tr> 
                                {/* end 1Depth */} 
                                {/* 2Depth 샘플 생략 */}
                                {/* 3Depth 샘플 생략 */}
                                {/* 4Depth 샘플 생략 */}
                            </tbody>
                        </table>
                    </div>
                </article>
            </div>
            <div className="bArea">
                <button className="btnL">취소하기</button>
                <button className="btnB">저장하기</button>
            </div>
        </div>
    )
}

export default SPWriteInventory;