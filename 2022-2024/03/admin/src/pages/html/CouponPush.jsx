import React , {useState, useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import { DatePicker } from '@components/common';
import PushAlert from '../../components/ui/modal/PushAlert';
import {ModalAlertPresent} from '@components/common';

const CouponPush = () => {
  const {dpMin, dpMax} = DatePicker();
  const [isModal, setIsModal] = useState(false);

  return (
    <>
        <section className='viewCase'>
            <div className="subTit">
                <div><em>쿠폰</em><span>기타</span><span>푸시 발송</span></div>
                <h2>푸시 발송</h2>
            </div>
            {/* -- */}        
            <div className="content pushLayout">
                <article className="lbox">
                    <div className="boxTit"><h3>STEP 1 . 푸시 메세지 내용 <sup>*</sup></h3></div>
                    <div className="boxDt">
                        <dl>
                            <dt>발송일</dt>
                            <dd>
                                <span className="radioSet">
                                    <input type="radio" id=""/>
                                    <label htmlFor="">즉시 발송</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" id=""/>
                                    <label htmlFor="">예약 발송</label>
                                </span>
                                <input type="text" className="cal w180" placeholder="2024.01.01" id="datepicker1" onClick={()=>dpMin.show()}/>
                                <input type="time" className="w180" />
                            </dd>
                        </dl>
                        <dl className="mt24">
                            <dt>첨부 타입</dt>
                            <dd>
                                <div className="multiSSet w370">
                                    <em className="mValue">선택해주세요</em>
                                    <div className="selectArea">
                                        <div className="item">
                                            <span className="radioSet">
                                                <input type="radio" id="one2"/>
                                                <label htmlFor="one2">First checkbox</label>
                                            </span>
                                            <span className="radioSet">
                                                <input type="radio" id="two2"/>
                                                <label htmlFor="two2">Second checkbox</label>
                                            </span>
                                            <span className="radioSet">
                                                <input type="radio" id="three2"/>
                                                <label htmlFor="three2">Third checkbox</label>
                                            </span>
                                        </div>
                                        <div className="bLine">
                                            <button className="btnL">취소</button>
                                            <button className="btnB">적용</button>
                                        </div>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </article>
                <div className="pushList">
                    <article className="lbox">
                        <div className="boxTit">
                            <div className="left">
                                <h3>STEP 2. 대상 선택 <sup>*</sup></h3>
                                <span className="ipSearch">
                                    <input type="text" placeholder="이름, 아이디, 전화번호 검색" />
                                    <button>검색</button>
                                </span>
                            </div>
                            <span className="right"><button className="bExc">엑셀 다운로드</button></span>
                        </div>
                        <div className="boxDt scroll">
                            <div className="tls">
                                <table>
                                    <colgroup>
                                        <col width="72" />
                                        <col width="72" />
                                        <col width="25%" colSpan="3" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>
                                                <span className="checkSet">
                                                    <input type="checkbox" id="" />
                                                </span>
                                            </th>
                                            <th>번호</th>
                                            <th>이름</th>
                                            <th>아이디</th>
                                            <th>전화번호</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span className="checkSet">
                                                    <input type="checkbox" id="" />
                                                </span>
                                            </td>
                                            <td>1</td>
                                            <td>THAN DIM GHON</td>
                                            <td>00215654</td>
                                            <td>010-2655-1255</td>
                                        </tr>               
                                        <tr>
                                            <td>
                                                <span className="checkSet">
                                                    <input type="checkbox" id="" />
                                                </span>
                                            </td>
                                            <td>2</td>
                                            <td>THAN DIM GHON</td>
                                            <td>00215654</td>
                                            <td>010-2655-1255</td>
                                        </tr>            
                                        <tr>
                                            <td>
                                                <span className="checkSet">
                                                    <input type="checkbox" id="" />
                                                </span>
                                            </td>
                                            <td>3</td>
                                            <td>THAN DIM GHON</td>
                                            <td>00215654</td>
                                            <td>010-2655-1255</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </article>
                    <button className="move">이동</button>
                    <article className="lbox">
                        <div className="boxTit">
                            <h3>선택 대상자 <em>(4)</em></h3>
                            <button className="btnW ss">전체 비우기</button>
                        </div>
                        <div className="boxDt scroll">
                            <div className="tls">
                                <table>
                                    <colgroup>
                                        <col width="30%" />
                                        <col width="30%" />
                                        <col width="30%" />
                                        <col width="72" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>이름</th>
                                            <th>아이디</th>
                                            <th>전화번호</th>
                                            <th>비우기</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>THAN DIM GHON</td>
                                            <td>00215654</td>
                                            <td>010-2655-1255</td>
                                            <td><button className="bID">Del</button></td>
                                        </tr>               
                                        <tr>
                                            <td>THAN DIM GHON</td>
                                            <td>00215654</td>
                                            <td>010-2655-1255</td>
                                            <td><button className="bID">Del</button></td>
                                        </tr>            
                                        <tr>
                                            <td>THAN DIM GHON</td>
                                            <td>00215654</td>
                                            <td>010-2655-1255</td>
                                            <td><button className="bID">Del</button></td>
                                        </tr>        
                                        <tr>
                                            <td>THAN DIM GHON</td>
                                            <td>00215654</td>
                                            <td>010-2655-1255</td>
                                            <td><button className="bID">Del</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="bArea">
                    <button className="btnB" onClick={() => setIsModal(true)}>발송하기</button>
                </div>
            </div>
            {/* -- */}
        </section>
        {isModal && 
            <ModalAlertPresent >
                <PushAlert onClose={() => {setIsModal(false)}}/>
            </ModalAlertPresent>
        }
    </>
    
  );
};

export default CouponPush;