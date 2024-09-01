import React , {useState, useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import CodeAddModal from '../../components/ui/modal/CodeAddModal';
import {ModalFullPresent} from '@components/common';

const SettingHACode = () => {
    const [isModal, setIsModal] = useState(false);
  return (
    <>
        <section className='viewCase'>
            <div className="subTit">
                <div><em>설정</em><span>설정</span><span>계정 권한 코드</span></div>
                <h2>계정 권한 코드</h2>
            </div>
            {/* -- */}        
            <div className="content acoountCode">
                <div className="grid case3">
                    <div>
                        <article className="lbox">
                            <div className="boxTit">
                                <h3>권한 목록</h3>
                                <button className="bAdd" onClick={() => setIsModal(true)}>추가</button>
                            </div>
                            <div className="boxDt scroll">
                                <div className="tls chioiceStep1">
                                    <table>
                                        <colgroup>
                                            <col width="110" />
                                            <col width="50%" />
                                            <col width="40%" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>기능</th>
                                                <th>권한 코드</th>
                                                <th>프로퍼티</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="bts">
                                                    <button className="bEV">View</button>
                                                    <button className="bEC">Copy</button>
                                                    <button className="bEX">Del</button>
                                                </td>
                                                <td className="choiced">오너</td> 
                                                {/* 프로퍼티 선택시 class 적용 nowChoice*/}
                                                <td className="rowDiv">
                                                    <div className="addRowCol nowChoice">체스터톤스 속초</div>
                                                    {/* 프로퍼티 선택시 class 적용 nowChoice*/}
                                                    <div className="addRowCol">르부르 낙산</div>
                                                    <div className="addRowCol">두왓 호텔</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div>
                        <article className="lbox">
                            <div className="boxTit">
                                <h3>최고관리자/체스터톤스 속초</h3>
                                <span className="toggleSet">
                                    <label>전체</label>
                                    <input type="checkbox" />
                                </span>
                            </div>
                            <div className="boxDt scroll">
                                <div className="tls chioiceStep2">
                                    <table>
                                        <colgroup>
                                            <col width="*" />
                                            <col width="105" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>대메뉴</th>
                                                <th>접근권한</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>예약</td>
                                                <td>
                                                    <span className="toggleSet">
                                                        <input type="checkbox" />
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="nowChoice">쿠폰</td>
                                                {/* 대메뉴 선택시 class 적용 nowChoice*/}
                                                <td>
                                                    <span className="toggleSet">
                                                        <input type="checkbox" />
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>멤버십</td>
                                                <td>
                                                    <span className="toggleSet">
                                                        <input type="checkbox" />
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>요금</td>
                                                <td>
                                                    <span className="toggleSet">
                                                        <input type="checkbox" />
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div>
                        <article className="lbox">
                            <div className="boxTit">
                                <h3>쿠폰</h3>
                                <span className="right">
                                    <span className="checkSet">
                                        <label htmlFor="check">조회 전체</label>
                                        <input type="checkbox" id="check" />
                                    </span>
                                    <span className="checkSet">
                                        <label htmlFor="check">수정 전체</label>
                                        <input type="checkbox" id="check" />
                                    </span>
                                </span>
                            </div>
                            <div className="boxDt scroll">
                                <div className="tls">
                                    <table>
                                        <colgroup>
                                            <col width="40%" />
                                            <col width="35%" />
                                            <col width="80" />
                                            <col width="80" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>중메뉴</th>
                                                <th>소메뉴</th>
                                                <th>조회</th>
                                                <th>수정</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td rowSpan={3}>예약</td>
                                                <td>예약 내역</td>
                                                <td>
                                                    <span className="checkSet">
                                                        <input type="checkbox" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="checkSet">
                                                        <input type="checkbox" />
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>취소 규정</td>
                                                <td>
                                                    <span className="checkSet">
                                                        <input type="checkbox" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="checkSet">
                                                        <input type="checkbox" />
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>미수금 내역</td>
                                                <td>
                                                    <span className="checkSet">
                                                        <input type="checkbox" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="checkSet">
                                                        <input type="checkbox" />
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td rowSpan={2}>관리</td>
                                                <td>잔여 룸 관리</td>
                                                <td>
                                                    <span className="checkSet">
                                                        <input type="checkbox" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="checkSet">
                                                        <input type="checkbox" />
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>고객 요청사항 관리</td>
                                                <td>
                                                    <span className="checkSet">
                                                        <input type="checkbox" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="checkSet">
                                                        <input type="checkbox" />
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="bArea">
                    <button className="btnB">저장하기</button>
                </div>
            </div>
            {/* -- */}
        </section>

        {isModal && 
            <ModalFullPresent >
                <CodeAddModal onClose={() => {setIsModal(false)}}/>
            </ModalFullPresent>
        }
    </>
    
  );
};

export default SettingHACode;