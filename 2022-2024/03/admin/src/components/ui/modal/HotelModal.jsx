import React from "react";

const HotelModal = ({onClose}) => {

    return (
        <div className="basicPop hrChoicePop" id="hrChoicePop" style={{display:'block'}}>
				<button className="btnPClose" id="hrChoicePopClose1" onClick={() => onClose()}>닫기</button>
				<h1 className="pt">Hotel&Resort</h1>
				<div className="pBack">
					<div className="hrPList">
						<ol>
							<li className="on" id="hrChoicePopClose2"><span><img scr="" /></span><em>강원도 속초</em>체스터톤스 속초</li>
							<li><span><img scr="" /></span><em>강원도 속초</em>체스터톤스 속초</li>
							<li><span><img scr="" /></span><em>강원도 속초</em>체스터톤스 속초</li>
							<li><span><img scr="" /></span><em>강원도 속초</em>체스터톤스 속초</li>
							<li><span><img scr="" /></span><em>강원도 속초</em>체스터톤스 속초</li>
							<li><span><img scr="" /></span><em>강원도 속초</em>체스터톤스 속초</li>
							<li><span><img scr="" /></span><em>강원도 속초</em>체스터톤스 속초</li>
							<li><span><img scr="" /></span><em>강원도 속초</em>체스터톤스 속초</li>
							<li><span><img scr="" /></span><em>강원도 속초</em>체스터톤스 속초</li>
						</ol>
					</div>
				</div>
				<div className="pBtn">
					<button className="btnM" id="basicPopClose1">확인</button>
				</div>
			</div>
    )
}

export default HotelModal;