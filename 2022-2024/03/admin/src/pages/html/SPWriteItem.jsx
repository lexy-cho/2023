import React, {useState} from 'react';
import { DatePicker } from '@components/common';
import ItemAddModal from '../../components/ui/modal/ItemAddModal';
import ModifyAlert from '../../components/ui/modal/ModifyAlert';
import {ModalFullPresent} from '@components/common';
import {ModalAlertPresent} from '@components/common';

const SPWriteItem = () => {
    const [isModal, setIsModal] = useState(false);
    const [isModal3, setIsModal3] = useState(false);
    const {dpMin, dpMax} = DatePicker();

    return (
        <>
            <div className="contentBack">
                <div className="content">
                    <div className="grid">
                        <div>
                            <article className="lbox">
                                <div className="boxTit">
                                    <h3>아이템</h3>
                                    <button className="btnW ss" disabled>선택삭제</button>
                                </div>
                                <div className="boxDt">
                                    <div className="tableAddSet">
                                        <div className="tls editCase scroll">
                                            <table>
                                                <colgroup>
                                                    <col width="72" />
                                                    <col width="30%" />
                                                    <col width="90" />
                                                    <col width="30%" />
                                                    <col width="100" />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            <span className="checkSet">
                                                                <input type="checkbox" />
                                                            </span>
                                                        </th>
                                                        <th>이름</th>
                                                        <th>수량</th>
                                                        <th>제공기간</th>
                                                        <th>삭제</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="cnd">
                                                            <span className="checkSet">
                                                                <input type="checkbox" />
                                                            </span>
                                                        </td>
                                                        <td>파인풀 - 대인</td>
                                                        <td>2</td>
                                                        <td className="mCol">
                                                            <span className="mDim">수정하기</span>
                                                            <input type="text" defaultValue="23.03.21 - 23.05.31" />
                                                            {/* td 내 modify가 있는 경우, span 영역 클릭하여 span을 display:none 해서 데이터 입력 영역 수정할 수 있도록 함 */}
                                                        </td>
                                                        <td className="cnd"><button className="bEX">Del</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="cnd">
                                                            <span className="checkSet">
                                                                <input type="checkbox" />
                                                            </span>
                                                        </td>
                                                        <td>파인풀 - 대인</td>
                                                        <td>2</td>
                                                        <td className="mCol">
                                                            <span className="mDim">수정하기</span>
                                                            <input type="text" defaultValue="23.03.21 - 23.05.31" />
                                                            {/* td 내 modify가 있는 경우, span 영역 클릭하여 span을 display:none 해서 데이터 입력 영역 수정할 수 있도록 함 */}
                                                        </td>
                                                        <td className="cnd"><button className="bEX">Del</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="cnd">
                                                            <span className="checkSet">
                                                                <input type="checkbox" />
                                                            </span>
                                                        </td>
                                                        <td>파인풀 - 대인</td>
                                                        <td>2</td>
                                                        <td className="mCol">
                                                            <span className="mDim" style={{display: 'none'}}>수정하기</span>
                                                            <input type="text" defaultValue="23.03.21 - 23.05.31" id="datepicker2" onClick={()=>dpMax.show()} />
                                                            {/* td 내 modify가 있는 경우, span 영역 클릭하여 span을 display:none 해서 데이터 입력 영역 수정할 수 있도록 함 */}
                                                        </td>
                                                        <td className="cnd"><button className="bEX">Del</button></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="addSet long">
                                            <div className="before case2">
                                                <button className="bAdd"  onClick={() => setIsModal(true)}>신규 추가</button>
                                                <button className="bAdd">기존 아이템 선택</button>
                                            </div>
                                            <div className="after" style={{display: 'none'}}>
                                                <div className="multiSSet item">
                                                    <em className="mValue">아이템 선택</em>
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
                                                <input type="text" placeholder="수량" className="item" />
                                                <input type="text" className="multyCal item" placeholder="2024.01.01" />
                                                <span className="afterBtn item">
                                                    <button className="bID">Del</button>
                                                    <button className="bED">Done</button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div>
                            <article className="lbox">
                                <div className="boxTit"><h3>업셀링</h3></div>
                                <div className="boxDt">
                                    <div className="tableAddSet">
                                        <div className="tls editCase scroll">
                                            <table>
                                                <colgroup>
                                                    <col width="72" />
                                                    <col width="*" />
                                                    <col width="100" />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            <span className="checkSet">
                                                                <input type="checkbox" />
                                                            </span>
                                                        </th>
                                                        <th>상품 이름</th>
                                                        <th>삭제</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="cnd">
                                                            <span className="checkSet">
                                                                <input type="checkbox" />
                                                            </span>
                                                        </td>
                                                        <td className="txtD">파인풀 - 대인</td>
                                                        <td className="cnd"><button className="bEX">Del</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="cnd">
                                                            <span className="checkSet">
                                                                <input type="checkbox" />
                                                            </span>
                                                        </td>
                                                        <td className="txtD">파인풀 - 대인</td>
                                                        <td className="cnd"><button className="bEX">Del</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="cnd">
                                                            <span className="checkSet">
                                                                <input type="checkbox" />
                                                            </span>
                                                        </td>
                                                        <td className="txtD">파인풀 - 대인</td>
                                                        <td className="cnd"><button className="bEX">Del</button></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="addSet long">
                                            <div className="before case2">
                                                <button className="bAdd">신규 추가</button>
                                                <button className="bAdd">기존 업셀링 선택</button>
                                            </div>
                                            <div className="after" style={{display: 'none'}}>
                                                <div className="multiSSet item">
                                                    <em className="mValue on">상품선택</em>
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
                                                <input type="text" placeholder="수량" className="item" />
                                                <input type="text" className="multyCal item" placeholder="2024.01.01" id="datepicker1" onClick={()=>dpMin.show()} />
                                                <span className="afterBtn item">
                                                    <button className="bID">Del</button>
                                                    <button className="bED">Done</button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <div className="bArea">
                    <button className="btnL">취소하기</button>
                    <button className="btnB"  onClick={() => setIsModal3(true)}>저장하기</button>
                </div>
            </div>
            {isModal && 
                <ModalFullPresent >
                    <ItemAddModal onClose={() => {setIsModal(false)}}/>
                </ModalFullPresent>
            }
            {isModal3 && (
                <ModalAlertPresent >
                    <ModifyAlert onClose={() => setIsModal3(false)}/>
                </ModalAlertPresent>
            )}
        </>
    )
}

export default SPWriteItem;
