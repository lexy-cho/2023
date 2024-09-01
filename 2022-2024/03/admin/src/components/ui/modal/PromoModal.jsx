import React from "react";

const PromoModal = ({onClose}) => {

    return (
        <div className="basicPop pCodePop" id="pCodePop" style={{display:'block'}}>
				<button className="btnPClose" id="pCodePopClose1" onClick={() => onClose()}>닫기</button>
				<h1 className="pt">프로모션 코드</h1>
				<div className="pBack">
					<span className="ipBtn">
						<input type="text" placeholder="프로모션 코드 입력" />
						<button className="btnM" id="pCodePopClose2">확인</button>
					</span>
				</div>
			</div>
    )
}

export default PromoModal;