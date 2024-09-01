import React from "react";

const RoomModal = ({onClose}) => {

    return (
        <div className="basicPop roomChoicePop" id="roomChoicePop" style={{display:'block'}}>
            <button className="btnPClose" id="roomChoicePopClose1" onClick={() => onClose()}>닫기</button>
            <h1 className="pt">Room / People</h1>
            <div className="pBack">
                <dl>
                    <dt>ROOM 1</dt>
                    <dd>
                        <div className="numCSet">
                            <label>성인</label>
                            <span>
                                <button>+</button>
                                <em><strong>성인</strong><i>0</i></em>
                                <button>-</button>
                            </span>
                        </div>
                        <div className="numCSet">
                            <label>어린이</label>
                            <span>
                                <button>+</button>
                                <em><strong>어린이</strong><i>0</i></em>
                                <button>-</button>
                            </span>
                        </div>
                        <div className="numCSet">
                            <label>펫</label>
                            <span>
                                <button>+</button>
                                <em><strong>펫</strong><i>0</i></em>
                                <button>-</button>
                            </span>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>ROOM 2</dt>
                    <dd>
                        <div className="numCSet">
                            <label>성인</label>
                            <span>
                                <button>+</button>
                                <em><strong>성인</strong><i>0</i></em>
                                <button>-</button>
                            </span>
                        </div>
                        <div className="numCSet">
                            <label>어린이</label>
                            <span>
                                <button>+</button>
                                <em><strong>어린이</strong><i>0</i></em>
                                <button>-</button>
                            </span>
                        </div>
                        <div className="numCSet">
                            <label>펫</label>
                            <span>
                                <button>+</button>
                                <em><strong>펫</strong><i>0</i></em>
                                <button>-</button>
                            </span>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>ROOM 3</dt>
                    <dd>
                        <div className="numCSet">
                            <label>성인</label>
                            <span>
                                <button>+</button>
                                <em><strong>성인</strong><i>0</i></em>
                                <button>-</button>
                            </span>
                        </div>
                        <div className="numCSet">
                            <label>어린이</label>
                            <span>
                                <button>+</button>
                                <em><strong>어린이</strong><i>0</i></em>
                                <button>-</button>
                            </span>
                        </div>
                        <div className="numCSet">
                            <label>펫</label>
                            <span>
                                <button>+</button>
                                <em><strong>펫</strong><i>0</i></em>
                                <button>-</button>
                            </span>
                        </div>
                    </dd>
                </dl>
                <div className="mRoomAdd">
                    <div><button>객실추가</button></div>
                    <p><span>* 최대 3개 객실 예약가능 <br/>* 어린이 기준 : 37개월 ~ 12세</span></p>
                </div>
            </div>
            <div className="pBtn">
                <span>* 최대 3개 객실 예약가능 <br/>* 어린이 기준 : 37개월 ~ 12세</span>
                <button className="btnM" id="roomChoicePopClose2">확인</button>
            </div>
        </div>
    )
}

export default RoomModal;