import React , {useState} from 'react';
import { DatePicker } from '@components/common'
import AmountAddModal from '../../components/ui/modal/AmountAddModal';
import {ModalFullPresent} from '@components/common';

const FCLWriteSet = () => {
    const [isModal, setIsModal] = useState(false);
    const {dpMin, dpMax} = DatePicker();
    
    return (
        <>
        <div className="contentBack">
            <div className="content">
                <article className="lbox">
                    <div className="boxTit">
                        <h3>금액 목록</h3>
                        <span className="right">
                            <button className="btnW ss" disabled>선택삭제</button>
                        </span>
                    </div>
                    <div className="boxDt">
                        <div className="tableAddSet">
                            <div className="tls fclSetList scroll">
                                <table>
                                    <colgroup>
                                        <col width="72" />
                                        <col width="200" />
                                        <col width="25%" />
                                        <col width="35%" />
                                        <col width="180" />
                                        <col width="160" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>
                                                <span className="checkSet">
                                                    <input type="checkbox" />
                                                </span>
                                            </th>
                                            <th>시즌 코드</th>
                                            <th>룸 타입</th>
                                            <th>컨디션</th>
                                            <th>금액</th>
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
                                            <td>DLX, SUP, SPD</td>
                                            <td>40,퍼센트, 424,000 / 20,수량,323,000</td>
                                            <td>430,000</td>
                                            <td className="cnd">
                                                <button className="bEV">View</button>
                                                <button className="bEC">Copy</button>
                                                <button className="bEX">Del</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="cnd">
                                                <span className="checkSet">
                                                    <input type="checkbox" />
                                                </span>
                                            </td>
                                            <td>Weekday</td>
                                            <td>DLX, SUP, SPD</td>
                                            <td>40,퍼센트, 424,000 / 20,수량,323,000</td>
                                            <td>430,000</td>
                                            <td className="cnd">
                                                <button className="bEV">View</button>
                                                <button className="bEC">Copy</button>
                                                <button className="bEX">Del</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="addSet">
                                <div className="before">
                                    <button className="bAdd" onClick={() => setIsModal(true)}>금액 추가</button>
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
                <AmountAddModal onClose={() => {setIsModal(false)}}/>
            </ModalFullPresent>
        }
        </>
    )
}

export default FCLWriteSet;