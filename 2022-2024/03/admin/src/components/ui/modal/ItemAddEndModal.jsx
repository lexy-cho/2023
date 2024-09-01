import React from "react";

const ItemAddEnd = ({onClose}) => {

    return (
        <div className="basicPop itemAddEndPop" id="itemAddEndPop" style={{display:'block'}}>
            <button className="btnPClose" id="roomChoicePopClose1" onClick={() => onClose()}>닫기</button>
            <h1 className="pt">아이템이 신규 추가되었습니다.</h1>
            <div className="pBack">
                <p className="sNoti">아직 아이템에 패키지 등록이 필요해요. 추가 정보를 입력해주세요.</p>
                <article className="boxDt">
                    <div className="grid mt24">
                        <dl>
                            <dt>아이템</dt>
                            <dd>
                                <div className="multiSSet">
                                    <em className="mValue">선택해주세요</em>
                                    <div className="selectArea">
                                        <div className="item">
                                            <span className="radioSet">
                                                <input type="radio" id=""/>
                                                <label htmlFor=""></label>
                                            </span>
                                            <span className="radioSet">
                                                <input type="radio" id=""/>
                                                <label htmlFor=""></label>
                                            </span>
                                            <span className="radioSet">
                                                <input type="radio" id=""/>
                                                <label htmlFor=""></label>
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
                        <dl>
                            <dt>수량</dt>
                            <dd>
                                <input type="text" placeholder="0" />
                            </dd>
                        </dl>
                    </div>
                    <div className="grid mt24">
                        <dl>
                            <dt>기간 입력 <sup>*</sup></dt>
                            <dd>
                                <input type="text" className="cal" placeholder="2024.01.01" id="" />
                            </dd>
                        </dl>
                        <div></div>
                    </div>
                </article>
            </div>
            <div className="pBtn">
                <span className="fr">
                    <button className="btnL sm">아니요, 다음에 할게요</button>
                    <button className="btnB sm" onClick={() => onClose()}>저장 후 닫기</button>
                </span>
            </div>
        </div>
    )
}

export default ItemAddEnd;