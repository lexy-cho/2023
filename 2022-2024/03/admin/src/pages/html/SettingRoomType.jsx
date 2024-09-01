import React, { useEffect , useRef, useState} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { useNavigate} from 'react-router-dom';
import { Pagenation }  from '@components/common';
import RoomAmountModal from '../../components/ui/modal/RoomAmountModal';
import ViewtypeModal from '../../components/ui/modal/ViewtypeModal';
import BedtypeModal from '../../components/ui/modal/BedtypeModal';
import {ModalFullPresent} from '@components/common';

const SettingRoomType = () => {
    const [isModal, setIsModal] = useState(false);
    const [isModal2, setIsModal2] = useState(false);
    const [isModal3, setIsModal3] = useState(false);

    const navigate = useNavigate();
    const handleLink = (e, link) => {
      e.preventDefault();
      navigate(link);
    }

  return (
    <>
        <section className="pagingCase">
            <div className="subTit">
                <div><em>설정</em><span>상품관리</span><span>룸 타입 설정</span></div>
                <h2>룸 타입 설정</h2>
            </div>
            {/* -- */}
            <fieldset className="topForm">
                <span className="ipSearch">
                    <input type="text" placeholder='룸타입 명 검색'/>
                    <button>검색</button>
                </span>
                <span className='right'>
                    <button className="btnW sm" onClick={() => setIsModal(true)}>룸 수량</button>
                    <button className="btnW sm" onClick={() => setIsModal2(true)}>뷰 타입</button>
                    <button className="btnW sm" onClick={() => setIsModal3(true)}>베드 타입</button>
                </span>
            </fieldset>
            {/* -- */}
            <div className="content">
                <article className="lbox listCase">
                    <div className="boxTit">
                        <h3>룸 타입 목록</h3>
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
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="*" />
                                    <col width="120" />
                                    <col width="200" />
                                    <col width="200" />
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
                                        <th>활성화</th>
                                        <th>이름</th>
                                        <th>타입</th>
                                        <th>뷰 타입</th>
                                        <th>베드 타입</th>
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
                                            <button className="bEV" onClick={(e) => handleLink(e,'/settingRoomTypeWrite')}>View</button>
                                            <button className="bEX">Del</button>
                                        </td>
                                        <td className="deactive">비활성화</td>
                                        <td>원룸 스탠다드 더블</td>
                                        <td>SDB</td>
                                        <td>Ocean</td>
                                        <td>Double</td>
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
                                        <td className="active">활성화</td>
                                        <td>원룸 스탠다드 더블</td>
                                        <td>STW</td>
                                        <td>Ocean</td>
                                        <td>Single+single</td>
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
                                        <td className="active">활성화</td>
                                        <td>원룸 스탠다드 더블</td>
                                        <td>FTW</td>
                                        <td>Ocean</td>
                                        <td>Double+twin</td>
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
                <RoomAmountModal onClose={() => {setIsModal(false)}}/>
            </ModalFullPresent>
        }
        {isModal2 && 
            <ModalFullPresent >
                <ViewtypeModal onClose={() => {setIsModal2(false)}}/>
            </ModalFullPresent>
        }
        {isModal3 && 
            <ModalFullPresent >
                <BedtypeModal onClose={() => {setIsModal3(false)}}/>
            </ModalFullPresent>
        }
    </>
    
	
  );
};

export default SettingRoomType;