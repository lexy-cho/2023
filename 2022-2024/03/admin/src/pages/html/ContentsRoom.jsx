import React, {useState, useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import { DatePicker } from '@components/common';
import AmenityModal from '../../components/ui/modal/AmenityModal';
import {ModalFullPresent} from '@components/common';

const ContentsRoom = () => {
    const [isModal, setIsModal] = useState(false);
  const {dpMin, dpMax} = DatePicker();

  return (
    <>
        <section className="pagingCase">
            <div className="subTit">
                <div><em>콘텐츠</em><span>콘텐츠 관리</span><span>객실</span></div>
                <h2>객실</h2>
            </div>
            {/* -- */}
            <fieldset className="topForm">
                <div className="left">
                    <span className="ipSearch">
                        <input type="text" placeholder="룸 타입, 룸 이름 검색" />
                        <button>검색</button>
                    </span>
                    <div className="multiSSet">
                        <em className="mValue">뷰 타입</em>
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
                    <button className="btnW sm">필터 초기화</button>
                </div>
                <span className="right">
                    <button className="btnW sm" onClick={() => setIsModal(true)}>어메니티 설정</button>
                </span>
            </fieldset>
            {/* -- */}
            <div className="content">
                <article className="lbox listCase">
                    <div className="boxTit">
                        <h3>쿠폰 목록</h3>
                        <span className="right">
                            <button className="btnW ss" disabled>선택 삭제</button>
                            <button className="bAdd">추가</button>
                        </span>
                    </div>
                    <div className="boxDt">
                        <div className="tls">
                            <table>
                                <colgroup>
                                    <col width="72" />
                                    <col width="100" />
                                    <col width="100" />
                                    <col width="*" />
                                    <col width="40%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>기능</th>
                                        <th>룸 타입</th>
                                        <th>룸 이름</th>
                                        <th>뷰 타입</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <button className="bEV">View</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td>ADF</td>
                                        <td>Superior Double</td>
                                        <td>Ocean View</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <button className="bEV">View</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td>ADF</td>
                                        <td>Superior Double</td>
                                        <td>Ocean View</td>
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
                <AmenityModal onClose={() => {setIsModal(false)}}/>
            </ModalFullPresent>
        }
    </>
    
	
  );
};

export default ContentsRoom;