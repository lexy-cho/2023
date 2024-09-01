import React from 'react';

const CalendarModal = ( {onClose}) => {

    return (
        <div class="basicPop checkDatePop" id="checkDatePop" style={{display:'block'}}>
				<button class="btnPClose" id="checkDatePopClose1" onClick={() => onClose()}>닫기</button>
				<h1 class="pt">Check In / Check Out</h1>
				<div class="pBack">

					<div class="mWeek">
						<span>S</span>
						<span>M</span>
						<span>T</span>
						<span>W</span>
						<span>T</span>
						<span>F</span>
						<span>S</span>
					</div>
					<div class="cCalendar">

						<div>
							<strong><button class="prev">이전</button><em>2024.01</em></strong>
							<table>
								<thead>
									<tr>
										<th>S</th>
										<th>M</th>
										<th>T</th>
										<th>W</th>
										<th>T</th>
										<th>F</th>
										<th>S</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="not"><span>1 <i></i></span></td>
										<td><span>2 <i>120,000~</i></span></td>
										<td><span>3 <i>120,000~</i></span></td>
										<td><span>4 <i>120,000~</i></span></td>
										<td><span>5 <i>120,000~</i></span></td>
										<td><span>6 <i>120,000~</i></span></td>
										<td><span>7 <i>120,000~</i></span></td>
									</tr>
									<tr>
										<td><span>8 <i>120,000~</i></span></td>
										<td><span>9 <i>120,000~</i></span></td>
										<td><span>10 <i>120,000~</i></span></td>
										<td><span>11 <i>120,000~</i></span></td>
										<td class="start"><span>12 <i>120,000~</i></span></td>
										<td class="ing"><span>13 <i>120,000~</i></span></td>
										<td class="ing"><span>14 <i>120,000~</i></span></td>
									</tr>
									<tr>
										<td class="ing"><span>15 <i>120,000~</i></span></td>
										<td class="ing"><span>16 <i>120,000~</i></span></td>
										<td class="ing"><span>17 <i>120,000~</i></span></td>
										<td class="ing"><span>18 <i>120,000~</i></span></td>
										<td class="ing"><span>19 <i>120,000~</i></span></td>
										<td class="ing"><span>20 <i>120,000~</i></span></td>
										<td class="ing"><span>21 <i>120,000~</i></span></td>
									</tr>
									<tr>
										<td class="ing"><span>22 <i>120,000~</i></span></td>
										<td class="end"><span>23 <i>120,000~</i></span></td>
										<td><span>24 <i>120,000~</i></span></td>
										<td><span>25 <i>120,000~</i></span></td>
										<td><span>26 <i>120,000~</i></span></td>
										<td><span>27 <i>120,000~</i></span></td>
										<td><span>28 <i>120,000~</i></span></td>
									</tr>
									<tr>
										<td><span>29 <i></i></span></td>
										<td><span>30 <i></i></span></td>
										<td><span>31 <i></i></span></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
								</tbody>
							</table>
						</div>

						<div>
							<strong><em>2024.01</em><button class="next">다음</button></strong>
							<table>
								<thead>
									<tr>
										<th>S</th>
										<th>M</th>
										<th>T</th>
										<th>W</th>
										<th>T</th>
										<th>F</th>
										<th>S</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><span>1 <i>120,000~</i></span></td>
										<td><span>2 <i>120,000~</i></span></td>
										<td><span>3 <i>120,000~</i></span></td>
										<td><span>4 <i>120,000~</i></span></td>
										<td><span>5 <i>120,000~</i></span></td>
										<td><span>6 <i>120,000~</i></span></td>
										<td><span>7 <i>120,000~</i></span></td>
									</tr>
									<tr>
										<td><span>8 <i>120,000~</i></span></td>
										<td><span>9 <i>120,000~</i></span></td>
										<td><span>10 <i>120,000~</i></span></td>
										<td><span>11 <i>120,000~</i></span></td>
										<td><span>12 <i>120,000~</i></span></td>
										<td><span>13 <i>120,000~</i></span></td>
										<td><span>14 <i>120,000~</i></span></td>
									</tr>
									<tr>
										<td><span>15 <i>120,000~</i></span></td>
										<td><span>16 <i>120,000~</i></span></td>
										<td><span>17 <i>120,000~</i></span></td>
										<td><span>18 <i>120,000~</i></span></td>
										<td><span>19 <i>120,000~</i></span></td>
										<td><span>20 <i>120,000~</i></span></td>
										<td><span>21 <i>120,000~</i></span></td>
									</tr>
									<tr>
										<td><span>22 <i>120,000~</i></span></td>
										<td><span>23 <i>120,000~</i></span></td>
										<td><span>24 <i>120,000~</i></span></td>
										<td><span>25 <i>120,000~</i></span></td>
										<td><span>26 <i>120,000~</i></span></td>
										<td><span>27 <i>120,000~</i></span></td>
										<td><span>28 <i>120,000~</i></span></td>
									</tr>
									<tr>
										<td><span>29 <i>120,000~</i></span></td>
										<td><span>30 <i>120,000~</i></span></td>
										<td><span>31 <i>280,000~</i></span></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
								</tbody>
							</table>
						</div>

					</div>
                    {/* mobile */}
					<div class="mCDSet">
						<div class="choiceDate"><i>Cheak In</i> <span>2024.01.04 (THU)</span> <em>[2 Night]</em> <div><i>Cheak Out</i> <span>2024.01.14 (SUN)</span></div></div>
						<button class="cReset">선택 초기화</button>
					</div>
				</div>
                {/* pc */}
				<div class="pBtn">
					<div class="choiceDate">Cheak In <span>2024.01.04 (THU)</span> <em>[2 Night]</em> Cheak Out <span>2024.01.14 (SUN)</span></div> 
					<span class="bSet"><button class="cReset">선택 초기화</button><button class="btnM" id="checkDatePopClose2">확인</button></span>
				</div>
			</div>
    )
}

export default CalendarModal;