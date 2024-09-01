import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Video from '../../components/Video';
import logo from '../../assets/images/i_logo.svg';
import imgExhibitionBgSelect01 from '../../assets/images/img_exhibition_bgSelect01.png';
import imgBgMain from '../../assets/images/img_main.png';
import imgMainSec02Product02 from '../../assets/images/img_mainSec02_product02.png';
import imgMainSec03Product02 from '../../assets/images/img_mainSec03_product02.png';
import imgMainSec03Product03 from '../../assets/images/img_mainSec03_product03.png';

const Exhibition = () => {
  const [ videoOpen, setVideoOpen ] = useState(true);
  const openVideo = () => {
      setVideoOpen(true);
  }
  const closeVideo = () => {
      setVideoOpen(false);
  }

  return (
    <div className="app">

      <div id="headerWrap"> {/* li hover 시 isActive 클래스 추가 */}
        <div id="header">
          <div className="headerBack">
            <h1><img src={logo} alt="SDI on"/></h1>
            <div className="right">
              <div className="pcVer">
                <nav>
                  <ul>
                    <li className="on"> {/* li hover 및 현재 페이지에 추가 */}
                      <Link to="/sdi/EssBusiness">SAMSUNG SDI</Link>
                      <ul className="subNav">
                        <li><Link to="/sdi/essbusiness">ESS Business</Link></li>
                        <li><Link to="/sdi/globaltrackrecord">Global Track Record</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/technology/safety">Technology</Link>
                      <ul className="subNav">
                        <li><Link to="/technology/safety">Safety</Link></li>
                        <li><Link to="/technology/performance">Performance</Link></li>
                        <li><a href="">Quality Management</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="">Products</a>
                      <ul className="subNav">
                        <li><a href="">Utility & CES</a></li>
                        <li><a href="">UPS</a></li>
                        <li><a href="">Residential</a></li>
                      </ul>
                    </li>
                    <li className="point">
                      <a href="">New Release</a>
                      <ul className="subNav">
                        <li><a href="">SBOX</a></li>
                        <li><a href="">RES</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                <div className="util">
                  <button className="btnS roundSty white" onClick={ openVideo }>Exhibition</button>
                  <button className="btnS roundSty blue">Conference</button>
                </div>
              </div>
              <div className="mVer">
                <button className="btnNav">MENU</button>
              </div>
            </div>
          </div>
        </div>
        <div id="subHeader">
          <div className="subHeaderBack">
            <div className="logout">
              <p>Please log out to<br/>protect your information</p>
              <a className="btnM whiteLine btnLogout">LOG OUT</a>
            </div>
          </div>
        </div>
        <div id="mNavLayer">
          <nav>
            <ul>
              <li>
                <a href="">SAMSUNG SDI</a>
                <ul className="subNav">
                  <li><a href="">ESS Business</a></li>
                  <li><a href="">Global Track Record</a></li>
                </ul>
              </li>
              <li>
                <a href="">Technology</a>
                <ul className="subNav">
                  <li><a href="">Safety</a></li>
                  <li><a href="">Performance</a></li>
                  <li><a href="">Quality Management</a></li>
                </ul>
              </li>
              <li>
                <a href="">Products</a>
                <ul className="subNav">
                  <li><a href="">Utility & CES</a></li>
                  <li><a href="">UPS</a></li>
                  <li><a href="">Residential</a></li>
                </ul>
              </li>
              <li>
                <a href="">New Release</a>
                <ul className="subNav">
                  <li><a href="">SBOX</a></li>
                  <li><a href="">RES</a></li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="util">
            <button className="btnL white">Exhibition</button>
            <button className="btnL white">Conference</button>
          </div>
        </div>
      </div>

      <div className="app-body">
        <div>
          <div className="contents">
            <article>
              {/* main */}
              <div className="bannerContainer fullCase mainBanner">
                <div className="imgBack">
                  <img src={imgBgMain} alt="mainIntro" />
                </div>
                <div className="bannerInner">
                  <em>Your Question Answered</em>
                  <strong>COME AND SEE<br/>OUR LATEST INNOVATION AT<br/>ESS VIRTUAL <span className="mBreak">STUDIO</span></strong>
                  <button className="btnM white">Go to exhibition</button>
                </div>
                <span className="iScroll">Scroll</span>
              </div>
              {/* //main */}
              <section className="ctsSection mainSec01">
                <h2><strong>Samsung SDI</strong>Ready to Offer an<br/>Energy Solution for Tomorrow</h2>
                <ul className="wideGuide">
                  <li>
                    <div className="ctsFrame">
                      <div className="layerBox leftType">
                        <strong>ESS Business</strong>
                        <p>Eco-friendly energy solutions for our future.<br/>Samsung SDI is leading the world market with<br/>Lithium-ion energy storage.</p>
                        <button className="btnM roundSty blue thin">Learn More</button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="ctsFrame">
                      <div className="layerBox rightType">
                        <strong>Global Track Record</strong>
                        <p>Eco-friendly energy solutions for our future.<br/>Samsung SDI is leading the world market with<br/>Lithium-ion energy storage.</p>
                        <button className="btnM roundSty blue thin">Learn More</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
              <section className="ctsSection mainSec02">
                <h2><strong>New Release</strong>Introduce Our New Products</h2>
                <ul className="gradientGuide">
                  <li className="leftType">
                    <big>SBB</big>
                    <div className="ctsFrame">
                      <div className="detailBox">
                        <div className="detailInfo">
                          <p>Pre-populated battery<br/>enclosure of SAMSUNG SDI</p>
                          <button className="btnUnline">Learn Details</button>
                        </div>
                        <img src="#" alt="SBB" />
                      </div>
                    </div>
                  </li>
                  <li className="rightType">
                    <big>RES</big>
                    <div className="ctsFrame">
                      <div className="detailBox">
                        <img src={imgMainSec02Product02} alt="RES" />
                        <div className="detailInfo">
                          <p>New version of residential<br/>battery of SAMSUNG SDI</p>
                          <button className="btnUnline">Learn Details</button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
              <section className="ctsSection mainSec03">
                <h2><strong>Products</strong>Providing a broad range of solutions<br/>from the size of KWh to MW</h2>
                <div className="productList">
                  <ul>
                    <li>
                      <strong>Utility/CES</strong>
                      <small>Battery Platform</small>
                      <img src="#" alt="Utility/CES"/>
                      <button className="btnGo">Go</button>
                    </li>
                    <li>
                      <strong>UPS</strong>
                      <small>Lithium-ion Solution</small>
                      <img src={imgMainSec03Product02} alt="UPS"/>
                      <button className="btnGo">Go</button>
                    </li>
                    <li>
                      <strong>Residential</strong>
                      <small>Battery Pack Solution</small>
                      <img src={imgMainSec03Product03} alt="Residential" className="rightCase"/>
                      <button className="btnGo">Go</button>
                    </li>
                  </ul>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>

      <div id="footerWrap">
        <div id="footer">
          <div className="question">
            <div className="questionBack">
              <strong>Any Questions?</strong>
              <p>Please leave us a note.</p>
              <button className="btnM">WRITE A MESSAGE</button>
            </div>
          </div>
          <div className="linkBar">
            <div className="footerBack">
              <a href="#" target="_blank">Personal Information Management Policy</a>
              <a href="https://www.samsungsdi.co.kr/index.html" target="_blank">Go to Samsung SDI Website</a>
            </div>
          </div>
          <div className="infoBar">
            <div className="footerBack">
              <strong>2021 SAMSUNG SDI Co.,Ltd. All right reserved.</strong>
              <p>Samsung SDI reserves the right to modify the design, packaging, specifications and features shown herein without prior notice or obligation.<br/>[17084] 150-20, GONGSE-RO GIHEUNG-GU, YONGIN-SI, GYEONGGI-DO</p>
            </div>
          </div>
        </div>
      </div>

      <React.Fragment>
        <Video open={ videoOpen } close={ closeVideo } keyclassName="">
          <div className="ctsBack">
            <img src={imgExhibitionBgSelect01} alt=""/>
          </div>
          <div className="ctsInner">
            <div className="playSelect" id="playSelect02">
              <div className="whiteBox">
                <div className="headLine">
                  <strong>Welcome to<br/>our Utility and CES Solution Studio.</strong>
                  <p>What solution would you like to see?</p>
                </div>
                <div className="gridSet grid3">
                  <div className="gridItem">
                    <div className="playInfo">
                      <strong>Energy Platform</strong>
                      <p>2h+ of charge /<br/>discharge time at below 0.5C</p>
                    </div>
                    <ul>
                      <li>
                        <span className="selectItem mini">
                          <input type="radio" name="playSelectPlatform" id="playSelectPlatform1" checked/>
                          <label htmlFor="playSelectPlatform1">Cell</label>
                        </span>
                      </li>
                      <li>
                        <span className="selectItem mini">
                          <input type="radio" name="playSelectPlatform" id="playSelectPlatform2"/>
                          <label htmlFor="playSelectPlatform2">Module</label>
                        </span>
                      </li>
                      <li>
                        <span className="selectItem mini">
                          <input type="radio" name="playSelectPlatform" id="playSelectPlatform3"/>
                          <label htmlFor="playSelectPlatform3">Rack</label>
                        </span>
                      </li>
                      <li>
                        <span className="selectItem mini">
                          <input type="radio" name="playSelectPlatform" id="playSelectPlatform4"/>
                          <label htmlFor="playSelectPlatform4">Warranty</label>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="gridItem">
                    <div className="playInfo">
                      <strong>Medium Platform</strong>
                      <p>1-2h of charge /<br/>discharge time at 0.5-1C</p>
                    </div>
                    <ul>
                      <li>
                        <span className="selectItem mini">
                          <input type="radio" name="playSelectPlatform" id="playSelectPlatform5" checked/>
                          <label htmlFor="playSelectPlatform5">Cell</label>
                        </span>
                      </li>
                      <li>
                        <span className="selectItem mini">
                          <input type="radio" name="playSelectPlatform" id="playSelectPlatform6"/>
                          <label htmlFor="playSelectPlatform6">Module</label>
                        </span>
                      </li>
                      <li>
                        <span className="selectItem mini">
                          <input type="radio" name="playSelectPlatform" id="playSelectPlatform7"/>
                          <label htmlFor="playSelectPlatform7">Rack</label>
                        </span>
                      </li>
                      <li>
                        <span className="selectItem mini">
                          <input type="radio" name="playSelectPlatform" id="playSelectPlatform8"/>
                          <label htmlFor="playSelectPlatform8">Warranty</label>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="gridItem">
                    <div className="playInfo">
                      <strong>Power Platform</strong>
                      <p>0.5-1h of charge /<br/>discharge time at 1-2C</p>
                    </div>
                    <ul>
                      <li>
                        <span className="selectItem mini">
                          <input type="radio" name="playSelectPlatform" id="playSelectPlatform9" checked/>
                          <label htmlFor="playSelectPlatform9">Cell</label>
                        </span>
                      </li>
                      <li>
                        <span className="selectItem mini">
                          <input type="radio" name="playSelectPlatform" id="playSelectPlatform10"/>
                          <label htmlFor="playSelectPlatform10">Module</label>
                        </span>
                      </li>
                      <li>
                        <span className="selectItem mini">
                          <input type="radio" name="playSelectPlatform" id="playSelectPlatform11"/>
                          <label htmlFor="playSelectPlatform11">Rack</label>
                        </span>
                      </li>
                      <li>
                        <span className="selectItem mini">
                          <input type="radio" name="playSelectPlatform" id="playSelectPlatform12"/>
                          <label htmlFor="playSelectPlatform12">Warranty</label>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="faqArea">
                  <p>Are you Interested in more detailed information?</p>
                  <div className="btnArea">
                    <button className="btnM black roundSty">FAQ</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="videoControl">
            <div className="controlBg"></div>
          </div> */}
        </Video>
      </React.Fragment>
    </div>
  )
}

export default Exhibition;
