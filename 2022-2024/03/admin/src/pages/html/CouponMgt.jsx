import React, {useState, useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import { DatePicker } from '@components/common';
import CouponPWModifyModal from '../../components/ui/modal/CouponPWModifyModal';
import {ModalFullPresent} from '@components/common';

const CouponMgt = () => {
  const {dpMin, dpMax} = DatePicker();
  const [isModal, setIsModal] = useState(false);

  return (
    <>
        <section className="pagingCase">
            <div className="subTit">
                <div><em>쿠폰</em><span>쿠폰 관리</span><span>쿠폰</span></div>
                <h2>쿠폰</h2>
            </div>
            {/* -- */}
            <fieldset className="topForm">
                <div className="left">
                    <span className="ipSearch">
                        <input type="text" placeholder="쿠폰명, 쿠폰코드 검색" />
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
                    </span>
                    <button className="btnW sm">필터 초기화</button>
                </div>
                <span className="right"><button className="bExc">엑셀 다운로드</button></span>
            </fieldset>
            {/* -- */}
            <div className="content">
                <article className="lbox listCase">
                    <div className="boxTit">
                        <h3>쿠폰 목록</h3>
                        <span className="right">
                            <button className="bAdd">추가</button>
                        </span>
                    </div>
                    <div className="boxDt">
                        <div className="tls fcMarketList">
                            <table>
                                <colgroup>
                                    <col width="72" />
                                    <col width="120" />
                                    <col width="80" />
                                    <col width="180" />
                                    <col width="180" />
                                    <col width="120" />
                                    <col width="80" />
                                    <col width="120" />
                                    <col width="140" />
                                    <col width="100" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>기능</th>
                                        <th>활성화</th>
                                        <th>쿠폰 이름</th>
                                        <th>혜택</th>
                                        <th>고유 코드</th>
                                        <th>구분</th>
                                        <th>프로퍼티</th>
                                        <th>사용기간</th>
                                        <th>등록 일자</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <button className="bEV">View</button>
                                            <button className="bPE" onClick={() => setIsModal(true)}>Password</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td className="active">활성화</td>
                                        <td>홈페이지 신규가입</td>
                                        <td>5,000원 할인</td>
                                        <td>COU-3342</td>
                                        <td>객실</td>
                                        <td>체스터톤스 속초</td>
                                        <td>발급일로부터 60일까지</td>
                                        <td>24.02.02</td>
                                    </tr>               
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <button className="bEV">View</button>
                                            <button className="bPE">Password</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td className="active">활성화</td>
                                        <td>홈페이지 신규가입</td>
                                        <td>5,000원 할인</td>
                                        <td>COU-3342</td>
                                        <td>객실</td>
                                        <td>체스터톤스 속초</td>
                                        <td>발급일로부터 60일까지</td>
                                        <td>24.02.02</td>
                                    </tr>            
                                    <tr>
                                        <td>3</td>
                                        <td>
                                            <button className="bEV">View</button>
                                            <button className="bPE">Password</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td className="deactive">비활성화</td>
                                        <td>홈페이지 신규가입</td>
                                        <td>5,000원 할인</td>
                                        <td>COU-3342</td>
                                        <td>객실</td>
                                        <td>체스터톤스 속초</td>
                                        <td>발급일로부터 60일까지</td>
                                        <td>24.02.02</td>
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
        {isModal && 
            <ModalFullPresent >
                <CouponPWModifyModal onClose={() => {setIsModal(false)}}/>
            </ModalFullPresent>
        }
    </>
    
	
  );
};

export default CouponMgt;