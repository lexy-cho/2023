import React from "react";

const SOWriteCal = () => {
    return (
        <div className="contentBack">
            <div className="content">
                <article className="lbox listCase optionCalList">
                    <div className="boxTit">
                        <h3>날짜별 수량</h3>
                        <span className="right">
                            기간 <input type="text" className="multyCal" defaultValue="23.12.04 ‒ 23.12.30" />
                        </span>
                    </div>
                    <div className="boxDt">
                        <div className="tls editCase scroll">
                            <table>
                                <colgroup>
                                    <col width="128" />
                                    <col width="72" />
                                    <col colSpan={3} width="72" />
                                    <col colSpan={3} width="72" />
                                    <col colSpan={3} width="72" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th rowSpan={2} colSpan={2}>날짜</th>
                                        <th colSpan={3}>전체</th>
                                        <th colSpan={3}>고층</th>
                                        <th colSpan={3}>저층</th>
                                    </tr>
                                    <tr>
                                        <th className="allot">Allot</th>
                                        <th className="sold">Sold</th>
                                        <th className="avail">Avail</th>
                                        <th className="allot">Allot</th>
                                        <th className="sold">Sold</th>
                                        <th className="avail">Avail</th>
                                        <th className="allot">Allot</th>
                                        <th className="sold">Sold</th>
                                        <th className="avail">Avail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>23.12.04</td><td>Mon</td><td>100</td><td>20</td><td>130</td>
                                        <td className="mCol">
                                            <span className="mDim">수정하기</span>
                                            <input type="text" defaultValue="50" />
                                            {/* td 내 modify가 있는 경우, span 영역 클릭하여 span을 display:none 해서 데이터 입력 영역 수정할 수 있도록 함 */}
                                        </td>
                                        <td>20</td><td>0</td>
                                        <td className="mCol">
                                            <span className="mDim">수정하기</span>
                                            <input type="text" defaultValue="50" />
                                        </td>
                                        <td>20</td><td>30</td>
                                    </tr>
                                    <tr>
                                        <td>23.12.05</td><td>Tue</td><td>100</td><td>30</td><td>120</td>
                                        <td className="mCol">
                                            <span className="mDim">수정하기</span>
                                            <input type="text" defaultValue="50" />
                                        </td>
                                        <td>23</td><td>27</td>
                                        <td className="mCol">
                                            <span className="mDim">수정하기</span>
                                            <input type="text" defaultValue="50" />
                                        </td>
                                        <td>23</td><td>27</td>
                                    </tr>
                                    <tr>
                                        <td>23.12.06</td><td>Wed</td><td>100</td><td>50</td><td>100</td>
                                        <td className="mCol">
                                            <span className="mDim">수정하기</span>
                                            <input type="text" defaultValue="50" />
                                        </td>
                                        <td>10</td><td>40</td>
                                        <td className="mCol">
                                            <span className="mDim">수정하기</span>
                                            <input type="text" defaultValue="50" />
                                        </td>
                                        <td>10</td><td>40</td>
                                    </tr>
                                    <tr>
                                        <td>23.12.07</td><td>Thu</td><td>100</td><td>41</td><td>111</td>
                                        <td className="mCol">
                                            <span className="mDim">수정하기</span>
                                            <input type="text" defaultValue="40" />
                                        </td>
                                        <td>20</td><td>20</td>
                                        <td className="mCol">
                                            <span className="mDim">수정하기</span>
                                            <input type="text" defaultValue="50" />
                                        </td>
                                        <td>20</td><td>30</td>
                                    </tr>
                                    <tr>
                                        <td>23.12.08</td><td>Fri</td><td>100</td><td>23</td><td>127</td>
                                        <td className="mCol">
                                            <span className="mDim">수정하기</span>
                                            <input type="text" defaultValue="50" />
                                        </td>
                                        <td>23</td><td>27</td>
                                        <td className="mCol">
                                            <span className="mDim">수정하기</span>
                                            <input type="text" defaultValue="50" />
                                        </td>
                                        <td>23</td><td>27</td>
                                    </tr>
                                    <tr className="satDay">
                                        <td>23.12.09</td><td>Sat</td><td>100</td><td>56</td><td>94</td>
                                        <td className="mCol">
                                            <span className="mDim">수정하기</span>
                                            <input type="text" defaultValue="40" />
                                        </td>
                                        <td>10</td><td>30</td>
                                        <td className="mCol">
                                            <span className="mDim">수정하기</span>
                                            <input type="text" defaultValue="50" />
                                        </td>
                                        <td>10</td><td>40</td>
                                    </tr>
                                    <tr className="sunDay">
                                        <td>23.12.10</td><td>Sun</td><td>100</td><td>78</td><td>72</td>
                                        <td className="mCol">
                                            <span className="mDim">수정하기</span>
                                            <input type="text" defaultValue="50" />
                                        </td>
                                        <td>20</td><td>30</td>
                                        <td className="mCol">
                                            <span className="mDim">수정하기</span>
                                            <input type="text" defaultValue="50" />
                                        </td>
                                        <td>20</td><td>30</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </article>
            </div>
            <div className="bArea">
                <button className="btnL">취소하기</button>
                <button className="btnB">저장하기</button>
            </div>
        </div>
    )
}

export default SOWriteCal;