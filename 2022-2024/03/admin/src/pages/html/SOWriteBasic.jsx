import React from "react";
import { DatePicker } from '@components/common'

const SOWriteBasic = () => {
    const {dpMin, dpMax} = DatePicker();
    
    return (
        <div className="contentBack">
            <div className="content scroll">
                <div className="grid">
                    <div>
                        <article className="lbox">
                            <div className="boxTit">
                                <h3>기본 정보</h3>
                                <span className="toggleSet">
                                    <label>활성화</label>
                                    <input type="checkbox" />
                                </span>
                            </div>
                            <div className="boxDt">
                                <dl>
                                    <dt>옵션 이름 <sup>*</sup></dt>
                                    <dd><input type="text" placeholder="옵션 이름 입력" /></dd>
                                </dl>
                            </div>
                        </article>
                        <article className="lbox">
                            <div className="boxTit">
                                <h3>옵션 아이템</h3>
                                <span className="right">*기준되는 항목은 고객에게 노출되지 않습니다.</span>
                            </div>
                            <div className="boxDt">
                                <div className="tableAddSet">
                                    <div className="tls editCase optionAddList scroll">
                                        <table>
                                            <colgroup>
                                                <col width="72" />
                                                <col width="72" />
                                                <col width="*" />
                                                <col width="15%" />
                                                <col width="25%" />
                                                <col width="72" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>순서</th>
                                                    <th>기준</th>
                                                    <th>아이템</th>
                                                    <th>수량</th>
                                                    <th>금액 (￦)</th>
                                                    <th>삭제</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="cnd"><button className="bMove">Move</button></td>
                                                    <td className="cnd">
                                                        <span className="checkSet">
                                                            <input type="radio" defaultChecked />
                                                        </span>
                                                    </td>
                                                    <td className="mCol">
                                                        <span className="mDim">수정하기</span>
                                                        <input type="text" defaultValue="저층" />
                                                    </td>
                                                    <td className="mCol">
                                                        <span className="mDim">수정하기</span>
                                                        <input type="text" defaultValue="0" />
                                                    </td>
                                                    <td className="mCol">
                                                        <span className="mDim">수정하기</span>
                                                        <input type="text" defaultValue="50,000" />
                                                    </td>
                                                    <td className="cnd"><button className="bEX">Del</button></td>
                                                </tr>
                                                <tr>
                                                    <td className="cnd"><button className="bMove">Move</button></td>
                                                    <td className="cnd">
                                                        <span className="checkSet">
                                                            <input type="radio" />
                                                        </span>
                                                    </td>
                                                    <td className="mCol">
                                                        <span className="mDim">수정하기</span>
                                                        <input type="text" defaultValue="중층" />
                                                    </td>
                                                    <td className="mCol">
                                                        <span className="mDim">수정하기</span>
                                                        <input type="text" defaultValue="0" />
                                                    </td>
                                                    <td className="mCol">
                                                        <span className="mDim">수정하기</span>
                                                        <input type="text" defaultValue="50,000" />
                                                    </td>
                                                    <td className="cnd"><button className="bEX">Del</button></td>
                                                </tr>
                                                <tr>
                                                    <td className="cnd"><button className="bMove">Move</button></td>
                                                    <td className="cnd">
                                                        <span className="checkSet">
                                                            <input type="radio" />
                                                        </span>
                                                    </td>
                                                    <td className="mCol">
                                                        <span className="mDim">수정하기</span>
                                                        <input type="text" defaultValue="고층" />
                                                    </td>
                                                    <td className="mCol">
                                                        <span className="mDim">수정하기</span>
                                                        <input type="text" defaultValue="0" />
                                                    </td>
                                                    <td className="mCol">
                                                        <span className="mDim">수정하기</span>
                                                        <input type="text" defaultValue="50,000" />
                                                    </td>
                                                    <td className="cnd"><button className="bEX">Del</button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="addSet optionA">
                                        <div className="before">
                                            <button className="bAdd">옵션 추가</button>
                                        </div>
                                        <div className="after" style={{display: 'none'}}>
                                            <input type="text" placeholder="아이템 항목명" className="item" />
                                            <input type="text" placeholder="수량" className="item" />
                                            <input type="text" placeholder="금액 (￦)" className="item" />
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
                            <div className="boxTit"><h3>룸 타입 선택</h3></div>
                            <div className="boxDt">
                                <div className="multiSSet chipCase">
                                    <div className="chipArea">
                                        <em>선택하세요</em>
                                        <div style={{display : 'none'}}>
                                            <button>DET</button>
                                            <button>DET</button>
                                            <button>DET</button>
                                            <button>DET</button>
                                            <button>DET</button>
                                            <button>DET</button>
                                        </div>
                                    </div>
                                    <div className="selectArea">
                                        <div className="item">
                                            <span className="checkSet">
                                                <input type="checkbox" id="chip01"/>
                                                <label htmlFor="chip01"><span>DET</span><em>DOBULE DELUXE ROOM</em></label>
                                            </span>
                                            <span className="checkSet">
                                                <input type="checkbox" id="chip02"/>
                                                <label htmlFor="chip02"><span>DET</span><em>DOBULE DELUXE ROOM</em></label>
                                            </span>
                                            <span className="checkSet">
                                                <input type="checkbox" id="chip03"/>
                                                <label htmlFor="chip03"><span>DET</span><em>DOBULE DELUXE ROOM</em></label>
                                            </span>
                                        </div>
                                        <div className="bLine">
                                            <button className="btnL">취소</button>
                                            <button className="btnB">적용</button>
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
                <button className="btnB">저장하기</button>
            </div>
        </div>
    )
}

export default SOWriteBasic;