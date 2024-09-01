import React, {useState, useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import { DatePicker } from '@components/common';
import ReserveAddModal from '../../components/ui/modal/ReserveAddModal';
import ReserveDetailModal from '../../components/ui/modal/ReserveDetailModal';
import {ModalFullPresent} from '@components/common';

const ReserveHistory = () => {
    const [isModal, setIsModal] = useState(false);
    const [isModal2, setIsModal2] = useState(false);
  const {dpMin, dpMax} = DatePicker();

  return (
    <>
        <section className="pagingCase">
            <div className="subTit">
                <div><em>예약</em><span>예약</span><span>예약 내역</span></div>
                <h2>예약 내역</h2>
            </div>
            {/* -- */}
            <div className='listScroll'>
                <fieldset className="topForm">
                    <div className="left">
                        <span className="ipSearch">
                            <input type="text" placeholder="이름, 예약/취소 번호 검색" />
                            <button>검색</button>
                        </span>
                        <span className="short">
                            <input type="text" className="calA" placeholder="도착 날짜" id="datepicker1" onClick={()=>dpMin.show()} />
                            <input type="text" className="calA" placeholder="출발 날짜" id="datepicker2" onClick={()=>dpMax.show()} />
                        </span>
                        <div className="multiSSet">
                            <em className="mValue">소스 코드</em>
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
                        <div className="multiSSet">
                            <em className="mValue">마켓 코드</em>
                            <div className="selectArea">
                                <div className="item">
                                    <span className="checkSet">
                                        <input type="checkbox" id="one2"/>
                                        <label htmlFor="one2">First checkbox</label>
                                    </span>
                                    <span className="checkSet">
                                        <input type="checkbox" id="two2"/>
                                        <label htmlFor="two2">Second checkbox</label>
                                    </span>
                                    <span className="checkSet">
                                        <input type="checkbox" id="three2"/>
                                        <label htmlFor="three2">Third checkbox</label>
                                    </span>
                                </div>
                                <div className="bLine">
                                    <button className="btnL">취소</button>
                                    <button className="btnB">적용</button>
                                </div>
                            </div>
                        </div>
                        <div className="multiSSet">
                            <em className="mValue">회사코드</em>
                            <div className="selectArea">
                                <div className="item">
                                    <span className="checkSet">
                                        <input type="checkbox" id="one4"/>
                                        <label htmlFor="one4">First checkbox</label>
                                    </span>
                                    <span className="checkSet">
                                        <input type="checkbox" id="two4"/>
                                        <label htmlFor="two4">Second checkbox</label>
                                    </span>
                                    <span className="checkSet">
                                        <input type="checkbox" id="three4"/>
                                        <label htmlFor="three4">Third checkbox</label>
                                    </span>
                                </div>
                                <div className="bLine">
                                    <button className="btnL">취소</button>
                                    <button className="btnB">적용</button>
                                </div>
                            </div>
                        </div>
                        <div className="multiSSet">
                            <em className="mValue">상품</em>
                            <div className="selectArea">
                                <div className="item">
                                    <span className="checkSet">
                                        <input type="checkbox" id="one3"/>
                                        <label htmlFor="one3">First checkbox</label>
                                    </span>
                                    <span className="checkSet">
                                        <input type="checkbox" id="two3"/>
                                        <label htmlFor="two3">Second checkbox</label>
                                    </span>
                                    <span className="checkSet">
                                        <input type="checkbox" id="three3"/>
                                        <label htmlFor="three3">Third checkbox</label>
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
                </fieldset>
                {/* -- */}
                <div className='revList'>
                    <div className="content">
                        <article className="lbox listCase">
                            <div className="boxTit">
                                <h3>예약 목록</h3>
                                <span className="right">
                                    <button className="btnW ss" disabled>선택삭제</button>
                                    <button className="bAdd" onClick={() => setIsModal(true)}>추가</button>
                                </span>
                            </div>
                            <div className="boxDt">
                                <div className="tls">
                                    <table>
                                        <colgroup>
                                            <col width="8%" />
                                            <col width="7%" />
                                            <col width="70" />
                                            <col width="9%" />
                                            <col width="16%" />
                                            <col width="6%" />
                                            <col width="8%" />
                                            <col width="8%" />
                                            <col width="4%" />
                                            <col width="7%" />
                                            <col width="7%" />
                                            <col width="7%" />
                                            <col width="10%" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>예약 목록</th>
                                                <th>예약 번호</th>
                                                <th>상세</th>
                                                <th>이름</th>
                                                <th>상품 및 경로</th>
                                                <th>룸 타입</th>
                                                <th>도착</th>
                                                <th>출발</th>
                                                <th>룸</th>
                                                <th>소스 코드</th>
                                                <th>마켓 코드</th>
                                                <th>레이트 코드</th>
                                                <th>레이트 총액</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="rstsCheck">CHECKED IN</td>
                                                <td>34234</td>
                                                <td><button className="bEV" onClick={() => setIsModal2(true)}>View</button></td>
                                                <td>홍길동</td>
                                                <td>ROOM ONLY + CMS</td>
                                                <td>SDB</td>
                                                <td>24.01.02</td>
                                                <td>24.01.02</td>
                                                <td>1</td>
                                                <td>FRONT</td>
                                                <td>PKG</td>
                                                <td>LTS</td>
                                                <td>145,000</td>
                                            </tr>               
                                            <tr>
                                                <td className="rstsEnd">Noshow</td>
                                                <td>34234</td>
                                                <td><button className="bEV">View</button></td>
                                                <td>홍길동</td>
                                                <td>ROOM ONLY + CMS</td>
                                                <td>SDB</td>
                                                <td>24.01.02</td>
                                                <td>24.01.02</td>
                                                <td>1</td>
                                                <td>FRONT</td>
                                                <td>PKG</td>
                                                <td>LTS</td>
                                                <td>145,000</td>
                                            </tr>            
                                            <tr>
                                                <td className="rstsEnd">Cancel</td>
                                                <td>34234</td>
                                                <td><button className="bEV">View</button></td>
                                                <td>홍길동</td>
                                                <td>ROOM ONLY + CMS</td>
                                                <td>SDB</td>
                                                <td>24.01.02</td>
                                                <td>24.01.02</td>
                                                <td>1</td>
                                                <td>FRONT</td>
                                                <td>PKG</td>
                                                <td>LTS</td>
                                                <td>145,000</td>
                                            </tr>            
                                            <tr>
                                                <td className="rstsNon">NON</td>
                                                <td>34234</td>
                                                <td><button className="bEV">View</button></td>
                                                <td>홍길동</td>
                                                <td>ROOM ONLY + CMS</td>
                                                <td>SDB</td>
                                                <td>24.01.02</td>
                                                <td>24.01.02</td>
                                                <td>1</td>
                                                <td>FRONT</td>
                                                <td>PKG</td>
                                                <td>LTS</td>
                                                <td>145,000</td>
                                            </tr>             
                                            <tr>
                                                <td className="rstsCheck">6PM</td>
                                                <td>34234</td>
                                                <td><button className="bEV">View</button></td>
                                                <td>홍길동</td>
                                                <td>ROOM ONLY + CMS</td>
                                                <td>SDB</td>
                                                <td>24.01.02</td>
                                                <td>24.01.02</td>
                                                <td>1</td>
                                                <td>FRONT</td>
                                                <td>PKG</td>
                                                <td>LTS</td>
                                                <td>145,000</td>
                                            </tr>               
                                            <tr>
                                                <td className="rstsCheck">WALKIN</td>
                                                <td>34234</td>
                                                <td><button className="bEV">View</button></td>
                                                <td>홍길동</td>
                                                <td>ROOM ONLY + CMS</td>
                                                <td>SDB</td>
                                                <td>24.01.02</td>
                                                <td>24.01.02</td>
                                                <td>1</td>
                                                <td>FRONT</td>
                                                <td>PKG</td>
                                                <td>LTS</td>
                                                <td>145,000</td>
                                            </tr>         
                                            <tr>
                                                <td className="rstsEnd">CHECK OUT</td>
                                                <td>34234</td>
                                                <td><button className="bEV">View</button></td>
                                                <td>홍길동</td>
                                                <td>ROOM ONLY + CMS</td>
                                                <td>SDB</td>
                                                <td>24.01.02</td>
                                                <td>24.01.02</td>
                                                <td>1</td>
                                                <td>FRONT</td>
                                                <td>PKG</td>
                                                <td>LTS</td>
                                                <td>145,000</td>
                                            </tr>      
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            {/* -- */}
            <Pagenation />
            {/* -- */}
        </section>
        {isModal && 
            <ModalFullPresent >
                <ReserveAddModal onClose={() => {setIsModal(false)}}/>
            </ModalFullPresent>
        }
        {isModal2 && 
            <ModalFullPresent >
                <ReserveDetailModal onClose={() => {setIsModal2(false)}}/>
            </ModalFullPresent>
        }
    </>
    
	
  );
};

export default ReserveHistory;