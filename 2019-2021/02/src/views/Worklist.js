import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/worklist.css';

const Worklist = () => {

  return (
    <div id="workListwrap">
      <h1><span>SDI on</span></h1>
      <ul>
        <li>기준 Device : PC (Edge, Chrome, Safari)</li>
        <li>문서타입 : HTML5 / CSS3</li>
      </ul>
      <table className="table">
        <caption>
          <span className="new"></span>&nbsp; 전달 시 신규
          <span className="gray"></span>&nbsp; 최초 전달 완료
          <span className="red"></span>&nbsp; 수정사항
          <span className="pink"></span>&nbsp; History
        </caption>
        <thead>
          <tr>
            <th width="80">ID</th>
            <th width="110">1depth</th>
            <th width="160">2depth</th>
            <th width="160">3depth</th>
            <th width="53">PopUp</th>
            <th width="240">Path</th>
            <th width="200">FileName</th>
            <th width="*">History &amp; Descration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan="8" className="title">src Root</th>
          </tr>
          <tr>
            <th></th>
            <td>Common</td>
            <td>layout</td>
            <td></td>
            <td></td>
            <td><Link to="./layout">/layout</Link></td>
            <td>Layout.js</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
						<td rowSpan="3">Gate</td>
						<td>오픈 전</td>
						<td></td>
						<td></td>
            <td><Link to="./gateyet">/gateyet</Link></td>
            <td>GateYet.js</td>
						<td><strong className="new">2021-08-12</strong></td>
					</tr>
					<tr>
            <th></th>
						<td>운영 중</td>
						<td></td>
						<td></td>
            <td><Link to="./gate">/gate</Link></td>
            <td>Gate.js</td>
						<td><strong className="new">2021-08-12</strong></td>
					</tr>
					<tr>
            <th></th>
						<td>종료</td>
						<td></td>
						<td></td>
            <td><Link to="./gateclose">/gateclose</Link></td>
            <td>GateClose.js</td>
						<td><strong className="new">2021-08-12</strong></td>
					</tr>
          <tr>
            <th></th>
						<td>Home</td>
						<td></td>
						<td></td>
						<td></td>
            <td><Link to="./home">/home</Link></td>
            <td>Home.js</td>
						<td><strong className="new">2021-08-12</strong></td>
					</tr>
          <tr>
            <th></th>
						<td rowSpan="6">Exhibition</td>
						<td>gate</td>
						<td></td>
						<td></td>
            <td><Link to="./exhibition/gate">/exhibition/gate</Link></td>
            <td>Gate.js</td>
						<td></td>
					</tr>
          <tr>
            <th></th>
						<td>play-select01</td>
						<td></td>
						<td></td>
            <td><Link to="./exhibition">/exhibition</Link></td>
            <td>Exhibition.js</td>
						<td></td>
					</tr>
          <tr>
            <th></th>
						<td>play-select02</td>
						<td></td>
						<td></td>
            <td><Link to="./exhibition">/exhibition</Link></td>
            <td>Exhibition.js</td>
						<td></td>
					</tr>
          <tr>
            <th></th>
						<td>play-select03</td>
						<td></td>
						<td></td>
            <td><Link to="./exhibition">/exhibition</Link></td>
            <td>Exhibition.js</td>
						<td></td>
					</tr>
          <tr>
            <th></th>
						<td>menu click</td>
						<td></td>
						<td></td>
            <td><Link to="./exhibition">/exhibition</Link></td>
            <td>Exhibition.js</td>
						<td></td>
					</tr>
          <tr>
            <th></th>
						<td>Faq</td>
						<td></td>
						<td></td>
            <td><Link to="./exhibition">/exhibition</Link></td>
            <td>Exhibition.js</td>
						<td></td>
					</tr>
          <tr>
            <th></th>
						<td rowSpan="3">Conference</td>
						<td>사전 안내</td>
						<td></td>
						<td></td>
            <td><Link to="./conference">/conference</Link></td>
            <td>Conference.js</td>
						<td></td>
					</tr>
          <tr>
            <th></th>
						<td>In session</td>
						<td></td>
						<td></td>
            <td><Link to="./conference/insession">/conference/insession</Link></td>
            <td>InSession.js</td>
						<td></td>
					</tr>
          <tr>
            <th></th>
						<td>On demand</td>
						<td></td>
						<td></td>
            <td><Link to="./conference/ondemand">/conference/ondemand</Link></td>
            <td>OnDemand.js</td>
						<td></td>
					</tr>
          <tr>
            <th></th>
						<td rowSpan="2">Samsung SDI</td>
						<td>ESS Business</td>
						<td></td>
						<td></td>
            <td><Link to="./sdi/essbusiness">/sdi/essbusiness</Link></td>
            <td>EssBusiness.js</td>
						<td><strong className="new">2021-08-12</strong></td>
					</tr>
          <tr>
            <th></th>
						<td>Global Track Record</td>
						<td></td>
						<td></td>
            <td><Link to="./sdi/globaltrackrecord">/sdi/globaltrackrecord</Link></td>
            <td>GlobalTrackRecord.js</td>
						<td><strong className="new">2021-08-12</strong></td>
					</tr>
          <tr>
            <th></th>
						<td rowSpan="3">Technology</td>
						<td>Safety</td>
						<td></td>
						<td></td>
            <td><Link to="./technology/safety">/technology/safety</Link></td>
            <td>Safety.js</td>
						<td><strong className="new">2021-08-12</strong></td>
					</tr>
          <tr>
            <th></th>
						<td>Performance</td>
						<td></td>
						<td></td>
            <td><Link to="./technology/performance">/technology/performance</Link></td>
            <td>Performance.js</td>
						<td><strong className="new">2021-08-12</strong></td>
					</tr>
          <tr>
            <th></th>
						<td>Quality Management</td>
						<td></td>
						<td></td>
            <td><Link to="./technology/qualitymanagement">/technology/qualitymanagement</Link></td>
            <td>QualityManagement.js</td>
						<td></td>
					</tr>
          <tr>
            <th></th>
						<td rowSpan="4">Products</td>
						<td>Utility & CES</td>
						<td></td>
						<td></td>
            <td><Link to="./products/utilityces">/products/utilityces</Link></td>
            <td>UtilityCes.js</td>
						<td></td>
					</tr>
          <tr>
            <th></th>
						<td>UPS</td>
						<td></td>
						<td></td>
            <td><Link to="./products/ups">/products/ups</Link></td>
            <td>Ups.js</td>
						<td></td>
					</tr>
          <tr>
            <th></th>
						<td>Residential</td>
						<td></td>
						<td></td>
            <td><Link to="./products/residential">/products/residential</Link></td>
            <td>Residential.js</td>
						<td></td>
					</tr>
          <tr>
            <th></th>
						<td>BCU & BMS</td>
						<td></td>
						<td></td>
            <td><Link to="./products/bcubms">/products/bcubms</Link></td>
            <td>BcuBms.js</td>
						<td></td>
					</tr>
          <tr>
            <th></th>
						<td rowSpan="2">New Release</td>
						<td>SBOX</td>
						<td></td>
						<td></td>
            <td><Link to="./newrelease/sbox">/newrelease/sbox</Link></td>
            <td>Sbox.js</td>
						<td></td>
					</tr>
          <tr>
            <th></th>
						<td>Residential</td>
						<td></td>
						<td></td>
            <td><Link to="./newrelease/residential">/newrelease/residential</Link></td>
            <td>Residential.js</td>
						<td></td>
					</tr>
          <tr>
            <th colSpan="8" className="title">Mail</th>
          </tr>
          <tr>
            <th></th>
						<td>Invite</td>
						<td></td>
						<td></td>
						<td></td>
            <td><Link to="./mail/invite">/mail/invite</Link></td>
            <td>Invite.js</td>
						<td></td>
					</tr>
          <tr>
            <th></th>
						<td>Welcome</td>
						<td></td>
						<td></td>
						<td></td>
            <td><Link to="./mail/welcome">/mail/welcome</Link></td>
            <td>Welcome.js</td>
						<td></td>
					</tr>
          <tr>
            <th></th>
						<td>PIN code</td>
						<td></td>
						<td></td>
						<td></td>
            <td><Link to="./mail/pincode">/mail/pincode</Link></td>
            <td>PinCode.js</td>
						<td></td>
					</tr>
          <tr>
            <th></th>
						<td>Questions</td>
						<td></td>
						<td></td>
						<td></td>
            <td><Link to="./mail/questions">/mail/questions</Link></td>
            <td>Questions.js</td>
						<td></td>
					</tr>
          <tr>
            <th></th>
						<td>Answer</td>
						<td></td>
						<td></td>
						<td></td>
            <td><Link to="./mail/answer">/mail/answer</Link></td>
            <td>Answer.js</td>
						<td></td>
					</tr>
        </tbody>
      </table>
      <h2> 수정 History detail (날짜주석 참조)</h2>
      <ol>
        <li></li>
      </ol>
    </div>
  )
}

export default Worklist;
