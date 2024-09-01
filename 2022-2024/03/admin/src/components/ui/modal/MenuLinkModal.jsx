import React from "react";

const MenuLink = ({onClose}) => {

    return (
        <div className="fullPop menuLinkPop" id="menuLinkPop" style={{display:'block'}}>
            <button className="btnPClose" onClick={() => onClose()}>닫기</button>
            <h1 className="pt">메뉴 연결</h1>
            <div className="pBack">
                <div className="tls editCase scroll">
                    <table>
                        <colgroup>
                            <col width="40%" />
                            <col width="40%" />
                            <col width="100" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>시즌 클래스</th>
                                <th>연결 메뉴</th>
                                <th>연결 해제</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>For member</td>
                                <td className="mSel">
                                    <span className="mDim">수정하기</span>
                                    <div className="multiSSet">
                                        <em className="mValue on"><em>메뉴 1번, 메뉴2번, 메뉴3번, 요금코드, 회사코드</em></em>
                                        <div className="selectArea">
                                            <div className="item">
                                                <span className="checkSet">
                                                    <input type="checkbox" id=""/>
                                                    <label htmlFor="">First checkbox</label>
                                                </span>
                                                <span className="checkSet">
                                                    <input type="checkbox" id=""/>
                                                    <label htmlFor="">Second checkbox</label>
                                                </span>
                                                <span className="checkSet">
                                                    <input type="checkbox" id=""/>
                                                    <label htmlFor="">Third checkbox</label>
                                                </span>
                                            </div>
                                            <div className="bLine">
                                                <button className="btnL">취소</button>
                                                <button className="btnB">적용</button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="cnd"><button className="bUL">Link</button></td>
                            </tr>
                            <tr>
                                <td>Room Field Calendar</td>
                                <td className="mSel">
                                    <span className="mDim">수정하기</span>
                                    <div className="multiSSet">
                                        <em className="mValue on"><em>메뉴3번</em></em>
                                        <div className="selectArea">
                                            <div className="item">
                                                <span className="checkSet">
                                                    <input type="checkbox" id=""/>
                                                    <label htmlFor="">First checkbox</label>
                                                </span>
                                                <span className="checkSet">
                                                    <input type="checkbox" id=""/>
                                                    <label htmlFor="">Second checkbox</label>
                                                </span>
                                                <span className="checkSet">
                                                    <input type="checkbox" id=""/>
                                                    <label htmlFor="">Third checkbox</label>
                                                </span>
                                            </div>
                                            <div className="bLine">
                                                <button className="btnL">취소</button>
                                                <button className="btnB">적용</button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="cnd"><button className="bUL">Link</button></td>
                            </tr>
                            <tr>
                                <td>Room Field Calendar</td>
                                <td className="mSel">
                                    <span className="mDim">수정하기</span>
                                    <div className="multiSSet">
                                        <em className="mValue"><em>선택</em></em>
                                        <div className="selectArea">
                                            <div className="item">
                                                <span className="checkSet">
                                                    <input type="checkbox" id=""/>
                                                    <label htmlFor="">First checkbox</label>
                                                </span>
                                                <span className="checkSet">
                                                    <input type="checkbox" id=""/>
                                                    <label htmlFor="">Second checkbox</label>
                                                </span>
                                                <span className="checkSet">
                                                    <input type="checkbox" id=""/>
                                                    <label htmlFor="">Third checkbox</label>
                                                </span>
                                            </div>
                                            <div className="bLine">
                                                <button className="btnL">취소</button>
                                                <button className="btnB">적용</button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="cnd"><button className="bUL" disabled>Link</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="pBtn">
                <span className="fr">
                    <button className="btnL sm">취소</button>
                    <button className="btnB sm">저장 후 닫기</button>
                </span>
            </div>
        </div>
    )
}

export default MenuLink;