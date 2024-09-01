import React from "react";

const BlockAlert = ({onClose}) => {

    return (
        <div className="alertPop blockPop" style={{display:'block'}}>
            <h1 className="pt">Block 설정 시 판매가능 수량이 초기화됩니다.</h1>
            <div className="pBack">
            판매가능 수량이 초기화 됩니다. 그래도 설정 하시겠나요?
            </div>
            <div className="pBtn">
                <span className="fr">
                    <button className="btnL sm" onClick={() => onClose()}>취소</button>
                    <button className="btnB sm" onClick={() => onClose()}>Block 후 초기화</button>
                </span>
            </div>
        </div>
    )
}

export default BlockAlert;