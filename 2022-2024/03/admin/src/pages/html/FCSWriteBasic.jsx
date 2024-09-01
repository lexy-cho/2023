import React , {useState} from 'react';
import { DatePicker } from '@components/common'
import SeasonCodeAddModal from '../../components/ui/modal/SeasonCodeAddModal';
import CopyAlert from '../../components/ui/modal/CopyAlert';
import {ModalFullPresent} from '@components/common';
import {ModalAlertPresent} from '@components/common';

const FCSWriteBasic = () => {
    const [isModal, setIsModal] = useState(false);
    const [isModal2, setIsModal2] = useState(false);
    const {dpMin, dpMax} = DatePicker();
    
    return (
        <>
        <div className="contentBack">
            <div className="content scroll">
                <article className="lbox">
                    <div className="boxTit"><h3>기본 정보</h3></div>
                    <div className="boxDt">
                        <dl>
                            <dt>시즌 클래스 이름 <sup>*</sup></dt>
                            <dd><input type="text" placeholder="시즌 클래스 이름 입력" /></dd>
                        </dl>
                    </div>
                </article>
                <article className="lbox">
                    <div className="boxTit">
                        <h3>시즌 코드</h3>
                        <span className="right">
                            <button className="btnW ss" disabled>선택삭제</button>
                        </span>
                    </div>
                    <div className="boxDt">
                        <div className="tableAddSet">
                            <div className="tls fcsCodeList scroll">
                                <table>
                                    <colgroup>
                                        <col width="72" />
                                        <col width="25%" />
                                        <col width="170" />
                                        <col width="30%" />
                                        <col width="110" />
                                        <col width="110" />
                                        <col width="150" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>
                                                <span className="checkSet">
                                                    <input type="checkbox" />
                                                </span>
                                            </th>
                                            <th>시즌 코드이름</th>
                                            <th>요일</th>
                                            <th>날짜</th>
                                            <th>시작 날짜</th>
                                            <th>종료 날짜</th>
                                            <th>기능</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span className="checkSet">
                                                    <input type="checkbox" />
                                                </span>
                                            </td>
                                            <td>Weekday</td>
                                            <td>월, 화, 수</td>
                                            <td><p className="ellipsis">-</p></td>
                                            <td>24.03.21</td>
                                            <td>24.03.29</td>
                                            <td>
                                                <button className="bEM">Modify</button>
                                                <button className="bEC" onClick={() => setIsModal2(true)}>Copy</button>
                                                <button className="bEX">Del</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="checkSet">
                                                    <input type="checkbox" />
                                                </span>
                                            </td>
                                            <td>Main day</td>
                                            <td>-</td>
                                            <td><p className="ellipsis">24.01.23, 24.01.25, 24.01.26, 24.02.14, 24.02.15, 24.05.23, 24.05.23, 24.05.23</p></td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>
                                                <button className="bEM">Modify</button>
                                                <button className="bEC" onClick={() => setIsModal2(true)}>Copy</button>
                                                <button className="bEX">Del</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="addSet">
                                <div className="before">
                                    <button className="bAdd" onClick={() => setIsModal(true)}>코드 추가</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <div className="bArea">
                <button className="btnL">취소하기</button>
                <button className="btnB">저장하기</button>
            </div>
        </div>
        {isModal && 
            <ModalFullPresent >
                <SeasonCodeAddModal onClose={() => {setIsModal(false)}}/>
            </ModalFullPresent>
        }
        {isModal2 && 
            <ModalAlertPresent >
                <CopyAlert onClose={() => {setIsModal2(false)}}/>
            </ModalAlertPresent>
        }
        </>
    )
}

export default FCSWriteBasic;