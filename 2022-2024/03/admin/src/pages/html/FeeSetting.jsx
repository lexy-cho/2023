import React, {useState, useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import { DatePicker } from '@components/common';

const FeeSetting = () => {
  const {dpMin, dpMax} = DatePicker();

  return (
    <>
        <section className="feeSetting">
            <div className="subTit">
                <div><em>요금</em><span>요금</span><span>요금 설정</span></div>
                <h2>요금 설정</h2>
            </div>
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
                    <div className="multiSSet">
                        <em className="mValue">룸 타입</em>
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
                    <div className="multiSSet">
                        <em className="mValue">상품 그룹</em>
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
                    <button className="btnW sm">필터 초기화</button>
                </div>
                <span className="right">
                    <button className="bCR">요금 동기화</button>
                    <button className="bExc">엑셀 업로드</button>
                    <button className="bExc">엑셀 다운로드</button>
                </span>
            </fieldset>
            {/* -- */}
            <div className="content">
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
                                {/* 1Depth */}
                                <tr className="numLine">
                                    <th className="first" rowSpan="2" colSpan="4">원룸 스텐다드 슈퍼 더블(STD) <button className="opner on">오프너</button></th>
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
                                <tr className="stsLine">
                                    <th className="label">판매상태</th>
                                    <td className="closeCol">
                                        <span className="toggleSet">
                                            <input type="checkbox" />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                    <td>
                                        <span className="toggleSet">
                                            <input type="checkbox" defaultChecked />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                    <td>
                                        <span className="toggleSet">
                                            <input type="checkbox" defaultChecked />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                    <td className="closeCol">
                                        <span className="toggleSet">
                                            <input type="checkbox" />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                    <td className="closeCol">
                                        <span className="toggleSet">
                                            <input type="checkbox" />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                    <td>
                                        <span className="toggleSet">
                                            <input type="checkbox" defaultChecked />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                    <td>
                                        <span className="toggleSet">
                                            <input type="checkbox" defaultChecked />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                    <td className="closeCol">
                                        <span className="toggleSet">
                                            <input type="checkbox" />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                    <td className="closeCol">
                                        <span className="toggleSet">
                                            <input type="checkbox" />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                    <td>
                                        <span className="toggleSet">
                                            <input type="checkbox" defaultChecked />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                    <td>
                                        <span className="toggleSet">
                                            <input type="checkbox" defaultChecked />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                    <td className="closeCol">
                                        <span className="toggleSet">
                                            <input type="checkbox" />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                </tr> 
                                {/* end 1Depth */} 
                                {/* 2Depth */}
                                <tr>
                                    <th rowSpan="20"></th>
                                    <th colSpan="3" className="depthTh">Room Only <button className="opner on">오프너</button></th>
                                    <th colSpan="13" className="roomType">{/* 룸 타입 */}</th>
                                </tr>  
                                {/* end 2Depth */}
                                {/* 3Depth */}
                                <tr>
                                    <th rowSpan="18"></th>
                                    <th rowSpan="3" colSpan="2" className="depthTh">PMS <button className="opner on">오프너</button></th>
                                    <th rowSpan="2">레이트 코드</th>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">VAT눌러보세요</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>  
                                <tr>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                </tr> 
                                <tr>
                                    <th>요금</th>
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
                                {/* end 3Depth */}
                                {/* 4Depth */}
                                <tr>
                                    <th rowSpan="6"></th>
                                    <th rowSpan="3" className="depthTh"><span className="txt">PHN</span></th>
                                    <th rowSpan="2">레이트 코드</th>
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
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                </tr> 
                                <tr>
                                    <th>요금</th>
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
                                    <th rowSpan="3" className="depthTh"><span className="txt">WALK-IN</span></th>
                                    <th rowSpan="2">레이트 코드</th>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">VAT눌러보세요</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>  
                                <tr>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                </tr> 
                                <tr>
                                    <th>요금</th>
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
                                {/* end 4Depth */}
                                {/*********************************/}
                                {/* Only 3Depth - no 4Depth */}
                                <tr>
                                    <th rowSpan="3" colSpan="2" className="depthTh">DB</th>
                                    <th rowSpan="2">레이트 코드</th>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">VAT눌러보세요</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>   
                                <tr>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                </tr>  
                                <tr>
                                    <th>요금</th>
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
                                {/* end Only 3Depth - no 4Depth*/}
                                {/*********************************/}
                                {/* 3Depth */}
                                <tr>
                                    <th rowSpan="3" colSpan="2" className="depthTh">CMS <button className="opner on">오프너</button></th>
                                    <th rowSpan="2">레이트 코드</th>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">VAT눌러보세요</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="mSel">
                                        <span className="mDim">수정</span>
                                        <div className="multiSSet">
                                            <em className="mValue on">BAT</em>
                                            <div className="selectArea">
                                                <div className="item">
                                                    <span className="radioSet">
                                                        <input type="radio" id=""/>
                                                        <label htmlFor="">First checkbox</label>
                                                    </span>
                                                </div>
                                                <div className="bLine">
                                                    <button className="btnL">취소</button>
                                                    <button className="btnB">적용</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>  
                                <tr>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                </tr> 
                                <tr>
                                    <th>요금</th>
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
                                {/* end 3Depth */}
                                {/* 4Depth */}
                                <tr>
                                    <th rowSpan="3"></th>
                                    <th rowSpan="3" className="depthTh"><span className="txt">Agoda-Room Only-Standard-Twin DELUX DOUBLE Agoda-Room Only-Standard-Twin DELUX DOUBLE</span></th>
                                    <th rowSpan="2">레이트 코드</th>
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
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                    <td>494,000</td>
                                </tr> 
                                <tr>
                                    <th>요금</th>
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
                                {/* end 4Depth */}
                                {/*********************************/}
                                {/* 2Depth - Close 3, 4 Depth */}
                                <tr>
                                    <th colSpan="3" className="depthTh">멍카스 패키지 <button className="opner">오프너</button></th>
                                    <th colSpan="13" className="roomType">{/* 룸 타입 */}</th>
                                </tr>  
                                {/* end 2Depth - Close 3, 4 Depth */}
                                {/* 3Depth */}
                                <tr style={{display:'none'}}>
                                    <th rowSpan="6"></th>
                                    <th rowSpan="3" colSpan="2" className="depthTh">PMS</th>
                                    <th rowSpan="2">레이트 코드</th>
                                    {/* 샘플 생략 */}
                                </tr>  
                                <tr style={{display:'none'}}>
                                    {/* 샘플 생략 */}
                                </tr> 
                                <tr style={{display:'none'}}>
                                    <th>요금</th>
                                    {/* 샘플 생략 */}
                                </tr>  
                                {/* end 3Depth */}
                                {/* 4Depth */}
                                <tr style={{display:'none'}}>
                                    <th rowSpan="6"></th>
                                    <th rowSpan="3" className="depthTh"><span className="txt">PHN</span></th>
                                    <th rowSpan="2">레이트 코드</th>
                                    {/* 샘플 생략 */}
                                </tr>  
                                <tr style={{display:'none'}}>
                                    {/* 샘플 생략 */}
                                </tr> 
                                <tr style={{display:'none'}}>
                                    <th>요금</th>
                                    {/* 샘플 생략 */}
                                </tr>  
                                {/* end 4Depth */}
                                {/*********************************/}
                                {/* 1Depth - Close 2, 3, 4 Depth */}
                                <tr className="numLine">
                                    {/* <th className="first" rowSpan="2" colSpan="4">원룸 스텐다드 슈퍼 더블(STD)</th> 2, 3, 4 Depth 닫기 전 */}
                                    <th className="first" colSpan="4">쓰리룸 프리미어 스위트 더블 디럭스 로얄(TKTS) <button className="opner">오프너</button></th>
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
                                <tr className="stsLine" style={{display:'none'}}>
                                    <th className="label">판매상태</th>
                                    <td className="closeCol">
                                        <span className="toggleSet">
                                            <input type="checkbox" />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                    <td>
                                        <span className="toggleSet">
                                            <input type="checkbox" defaultChecked />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                    <td>
                                        <span className="toggleSet">
                                            <input type="checkbox" defaultChecked />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                    <td className="closeCol">
                                        <span className="toggleSet">
                                            <input type="checkbox" />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                    <td className="closeCol">
                                        <span className="toggleSet">
                                            <input type="checkbox" />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                    <td>
                                        <span className="toggleSet">
                                            <input type="checkbox" defaultChecked />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                    <td>
                                        <span className="toggleSet">
                                            <input type="checkbox" defaultChecked />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                    <td className="closeCol">
                                        <span className="toggleSet">
                                            <input type="checkbox" />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                    <td className="closeCol">
                                        <span className="toggleSet">
                                            <input type="checkbox" />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                    <td>
                                        <span className="toggleSet">
                                            <input type="checkbox" defaultChecked />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                    <td>
                                        <span className="toggleSet">
                                            <input type="checkbox" defaultChecked />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                    <td className="closeCol">
                                        <span className="toggleSet">
                                            <input type="checkbox" />
                                            <label htmlFor=""><i>오픈</i><em>마감</em></label>
                                        </span>
                                    </td>
                                </tr> 
                                {/* end 1Depth */} 
                                {/*********************************/}
                                {/* 1Depth - Close 2, 3, 4 Depth */}
                                <tr className="numLine">
                                    {/* <th className="first" rowSpan="2" colSpan="4">원룸 스텐다드 슈퍼 더블(STD)</th> 2, 3, 4 Depth 닫기 전 */}
                                    <th className="first" colSpan="4">원룸 스텐다드 슈퍼 더블(STD) <button className="opner">오프너</button></th>
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
                                <tr className="stsLine" style={{display:'none'}}>
                                    <th className="label">판매상태</th>
                                    {/* 샘플 생략 */}
                                </tr> 
                                {/* end 1Depth - Close 2, 3, 4 Depth */} 
                            </tbody>
                        </table>
                    </div>
                </article>
            </div>
            {/* -- */}
        </section>
    </>
  );
};

export default FeeSetting;