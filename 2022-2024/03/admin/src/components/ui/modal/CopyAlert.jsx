import React from "react";

const CopyAlert = ({onClose}) => {

    return (
        <div className="alertPop copyPop" style={{display:'block'}}>
            <h1 className="pt">코드를 복제하시겠습니까?</h1>
            <div className="pBack">
                복제된 코드는 가장 하단에 추가됩니다.
            </div>
            <div className="pBtn">
                <span className="fr">
                    <button className="btnL sm" onClick={() => onClose()}>닫기</button>
                    <button className="btnB sm" onClick={() => onClose()}>복제</button>
                </span>
            </div>
        </div>
    )
}

export default CopyAlert;