import React from "react";

const SearchModal = () => {

    return (
        <div className="basicPop mobileSearchPop" id="mobileSearchPop">
				<button className="btnPClose" id="mobileSearchPopClose1">닫기</button>
				<h1 className="pt">예약 검색</h1>
				<div className="pBack">
					<dl className="hr">
						<dt>Hotel&Resort</dt>
						<dd>
							<span className="minSSet">
								<input type="text" className="txt" placeholder="호텔 검색" readonly />
								<input type="submit" value="검색" className="icon" />
							</span>
						</dd>
					</dl>
					<dl className="date">
						<dt>Check In / Check Out</dt>
						<dd><input type="text" value="2024 / 01 / 12 ~ 2023 / 01 / 15" readonly className="fakeCal" /></dd>
					</dl>
					<dl className="room">
						<dt>Room / People</dt>
						<dd>
							<span><em>0</em>객실</span>
							<span><em>0</em>성인</span>
							<span><em>0</em>어린이</span>
							<span><em>0</em>펫</span>
						</dd>
						<dd>
							<span><em>0</em>객실</span>
							<span><em>0</em>성인</span>
							<span><em>0</em>어린이</span>
							<span><em>0</em>펫</span>
						</dd>
						<dd>
							<span><em>0</em>객실</span>
							<span><em>0</em>성인</span>
							<span><em>0</em>어린이</span>
						</dd>
					</dl>
				</div>
				<div className="pBtn">
					<button className="btnM" id="basicPopClose1">확인</button>
				</div>
			</div>
    )
}

export default SearchModal;