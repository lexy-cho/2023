import React, {useState, useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import AccountAddModal from '../../components/ui/modal/AccountAddModal';
import AccountViewModal from '../../components/ui/modal/AccountViewModal';
import PWResetAlert from '../../components/ui/modal/PWResetAlert';
import {ModalFullPresent} from '@components/common';
import {ModalAlertPresent} from '@components/common';

const SettingHAccount = () => {
    const [isModal, setIsModal] = useState(false);
    const [isModal2, setIsModal2] = useState(false);
    const [isModal3, setIsModal3] = useState(false);
  return (
    <>
        <section className="pagingCase">
            <div className="subTit">
                <div><em>설정</em><span>설정</span><span>계정관리</span></div>
                <h2>계정관리</h2>
            </div>
            {/* -- */}
            <fieldset className="topForm">
                <div className='left'>
                    <span className="ipSearch">
                        <input type="text" placeholder='아이디 검색'/>
                        <button>검색</button>
                    </span>
                    <span className="selectSet ml16">
                        <select name="" id="">
                            <option defaultValue="">프로퍼티</option>
                        </select>
                    </span>
                </div>
                <span className="right">
                    <button className="btnW sm">권한코드</button>
                </span>
            </fieldset>
            {/* -- */}
            <div className="content">
                <article className="lbox listCase">
                    <div className="boxTit">
                        <h3>계정 목록</h3>
                        <span className="right">
                            <button className="bAdd" onClick={() => setIsModal(true)}>추가</button>
                        </span>
                    </div>
                    <div className="boxDt">
                        <div className="tls">
                            <table>
                                <colgroup>
                                    <col width="72" />
                                    <col width="160" />
                                    <col width="25%" />
                                    <col width="12%" />
                                    <col width="12%" />
                                    <col width="12%" />
                                    <col width="150" />
                                    <col width="150" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>기능</th>
                                        <th>프로퍼티</th>
                                        <th>아이디</th>
                                        <th>부서</th>
                                        <th>권한 코드</th>
                                        <th>생성 날짜</th>
                                        <th>마지막 접속 날짜</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <button className="bEV" onClick={() => setIsModal2(true)}>View</button>
                                            <button className="bPS" onClick={() => setIsModal3(true)}>Password Reset</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td>체스터톤스</td>
                                        <td>eireirder</td>
                                        <td>최고관리자</td>
                                        <td className="aListCode">
                                            <div className="multiSSet">
                                                <em className="mValue on">코드 2</em>
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
                                        </td>
                                        <td>24.03.21 13:00</td>
                                        <td>24.03.21 15:00</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <button className="bEV">View</button>
                                            <button className="bPS">Password Reset</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td>체스터톤스</td>
                                        <td>eireirder</td>
                                        <td>최고관리자</td>
                                        <td className="aListCode">
                                            <div className="multiSSet">
                                                <em className="mValue on">코드 1</em>
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
                                        </td>
                                        <td>24.03.21 13:00</td>
                                        <td>24.03.21 15:00</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>
                                            <button className="bEV">View</button>
                                            <button className="bPS">Password Reset</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td>체스터톤스</td>
                                        <td>eireirder</td>
                                        <td>최고관리자</td>
                                        <td className="aListCode">
                                            <div className="multiSSet">
                                                <em className="mValue on">코드 3</em>
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
                                        </td>
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
            <Pagenation />
            {/* -- */}
        </section>

        {isModal && 
            <ModalFullPresent >
                <AccountAddModal onClose={() => {setIsModal(false)}}/>
            </ModalFullPresent>
        }
        {isModal2 && 
            <ModalFullPresent >
                <AccountViewModal onClose={() => {setIsModal2(false)}}/>
            </ModalFullPresent>
        }
        {isModal3 && 
            <ModalAlertPresent >
                <PWResetAlert onClose={() => {setIsModal3(false)}}/>
            </ModalAlertPresent>
        }
    </>    
	
  );
};

export default SettingHAccount;