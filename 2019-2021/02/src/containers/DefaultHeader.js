import React, { useState, useEffect } from 'react';
import Video from '../components/Video';
import Conference from '../components/Conference';
import logo from '../assets/images/i_logo.svg';
import imgExhibitionGate from '../assets/images/img_exhibition_gate.png';
import { Link } from 'react-router-dom';

const DefaultHeader = (scroll) => {
  const [ videoOpen, setVideoOpen ] = useState(false);
  const openVideo = () => {
      document.body.classList.add('modalOpen');
      setVideoOpen(true);
  }
  const closeVideo = () => {
      document.body.classList.remove('modalOpen');
      setVideoOpen(false);
  }
  const [ conferenceOpen, setConferenceOpen ] = useState(false);
  const openConference = () => {
      document.body.classList.add('modalOpen');
      setConferenceOpen(true);
  }
  const closeConference = () => {
      document.body.classList.remove('modalOpen');
      setConferenceOpen(false);
  }
  const [isShowing, setIsShowing] = useState(false);
  const showEventShow = () => {
    setIsShowing(true);
  };
  const showEventHide = () => {
    setIsShowing(false);
  };
  const logoutClick = () => {
    sessionStorage.removeItem('gate')
    window.location.reload();
	}

  const [scrolVal, setScrollVal] = useState(0);
  useEffect(() => {
    setScrollVal(scroll.scroll);

  }, [scroll]);

  const MobileNavLayer = () => (
    <div id="mNavLayer">
      <div className="navHeader">
        <strong>SDIon</strong>
        <button className="btnClose" onClick={showEventHide}>Close</button>
      </div>
      <div className="mNav fullpagePopScroll">
        <nav>
          <ul>
            <li className="on">
              <Link to="/newrelease/sbb">New Release</Link>
              <button className="btnNavOpen">open</button>
              <ul className="subNav">
                <li><Link to="/newrelease/sbb" onClick={showEventHide}>SBB</Link></li>
                <li><Link to="/newrelease/r5" onClick={showEventHide}>R5</Link></li>
              </ul>
            </li>
            <li className="on">
              <Link to="/solution/utilityces" onClick={showEventHide}>Solution</Link>
              <button className="btnNavOpen">open</button>
              <ul className="subNav">
                <li><Link to="/solution/utilityces" onClick={showEventHide}>Utility & CES</Link></li>
                <li><Link to="/solution/ups" onClick={showEventHide}>UPS</Link></li>
                <li><Link to="/solution/residential" onClick={showEventHide}>Residential</Link></li>
              </ul>
            </li>
            <li className="on">
              <Link to="/technology/safety" onClick={showEventHide}>Technology</Link>
              <button className="btnNavOpen">open</button>
              <ul className="subNav">
                <li><Link to="/technology/safety" onClick={showEventHide}>Safety</Link></li>
                <li><Link to="/technology/performance" onClick={showEventHide}>Performance</Link></li>
                <li><Link to="/technology/qualitymanagement" onClick={showEventHide}>Quality Management</Link></li>
              </ul>
            </li>
            <li className="on">
              <Link to="/sdi/EssBusiness" onClick={showEventHide}>About us</Link>
              <button className="btnNavOpen">open</button>
              <ul className="subNav">
                <li><Link to="/sdi/essbusiness" onClick={showEventHide}>Business Overview</Link></li>
                <li><Link to="/sdi/globaltrackrecord" onClick={showEventHide}>Global Track Record</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="tC bottomArea">
          <button className="btnM ghost roundSty" onClick={() => {openVideo(); showEventHide();}}>Exhibition</button>
          <button className="btnM ghost roundSty mt1" onClick={() => {openConference(); showEventHide();}}>Conference</button>
          <p>Please log out to protect your information</p>
          <button onClick={ logoutClick } className="btnM ghost roundSty last">LOG OUT</button>
        </div>
      </div>
    </div>
  );

  return (
    <div id="headerWrap" className={scrolVal >=0 && scrolVal <= parseInt(sessionStorage.getItem('box')-1) ? "shadow" : "line"}> {/* 활성화일 때 isActive 클래스 추가 | darkCase 다크모드 스타일 | banner영역 하단으로 내려왔을 때 line 클래스 추가 */}
      <div id="header">
        <div className="headerBack">
          <div className="pcVer">
            <h1><a href="/mkup/#/home">SDIon</a></h1>
            <div className="left">
              <button className="btnExhibitionOpen" onClick={ openVideo }>Virtual Exhibition</button>
              <button className="btnConferenceOpen" onClick={ openConference }>Conference</button>
              <div className="logout">
                <p>Please log out to<br/>protect your information</p>
                <span onClick={ logoutClick } className="btnM whiteLine btnLogout">LOG OUT</span>
              </div>
            </div>
            <div className="right">
              <nav>
                <ul>
                  <li className="on"> {/* li hover 및 현재 페이지에 on class 추가 */}
                    <Link to="/newrelease/sbb">New Release<span className="point">point</span></Link>
                    <ul className="subNav">
                      <li className="on"><Link to="/newrelease/sbb">SBB</Link></li>
                      <li><Link to="/newrelease/r5">R5</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/solution/utilityces">Solution</Link>
                    <ul className="subNav">
                      <li><Link to="/solution/utilityces">Utility & CES</Link></li>
                      <li><Link to="/solution/ups">UPS</Link></li>
                      <li><Link to="/solution/residential">Residential</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/technology/safety">Technology</Link>
                    <ul className="subNav">
                      <li><Link to="/technology/safety">Safety</Link></li>
                      <li><Link to="/technology/performance">Performance</Link></li>
                      <li><Link to="/technology/qualitymanagement">Quality Management</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/sdi/EssBusiness">About us</Link>
                    <ul className="subNav">
                      <li><Link to="/sdi/essbusiness">Business Overview</Link></li>
                      <li><Link to="/sdi/globaltrackrecord">Global Track Record</Link></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="mVer">
            <h1><a href="#">SDIon</a></h1>
            <div className="right">
              <button className="btnNav" onClick={showEventShow}>MENU</button>
            </div>
          </div>
        </div>
      </div>
      {isShowing &&  <MobileNavLayer />}

      <React.Fragment>
        <Video open={ videoOpen } close={ closeVideo } keyclassName="0"></Video>
        <Conference open={ conferenceOpen } close={ closeConference }></Conference>
      </React.Fragment>
    </div>
  )
}

export default DefaultHeader;
