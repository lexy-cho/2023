import React, { useState, } from 'react';
import Modal from '../../components/Modal';
import { Link } from 'react-router-dom';
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from '@fullpage/react-fullpage';
import DefaultFooter from '../../containers/DefaultFooter';

import bg_mainTechnology from '../../assets/images/bg_mainTechnology.png';
import bg_mainSolution from '../../assets/images/bg_mainSolution.png';
import bg_mainAboutus from '../../assets/images/bg_mainAboutus.png';
import img_mainSBB from '../../assets/images/img_mainSBB.png';
import img_mainSBB_m from '../../assets/images/img_mainSBB_m.png';
import img_mainR5 from '../../assets/images/img_mainR5.png';
import img_mainSolution_bgItem from '../../assets/images/img_mainSolution_bgItem.png';
import img_mainSolution01 from '../../assets/images/img_mainSolution01.png';
import img_mainSolution01_m from '../../assets/images/img_mainSolution01_m.png';
import img_mainSolution02 from '../../assets/images/img_mainSolution02.png';
import img_mainSolution02_m from '../../assets/images/img_mainSolution02_m.png';
import img_mainSolution03 from '../../assets/images/img_mainSolution03.png';
import img_mainSolution03_m from '../../assets/images/img_mainSolution03_m.png';
import i_technologySafety from '../../assets/images/i_technologySafety.png';
import i_technologyPerfomance from '../../assets/images/i_technologyPerfomance.png';
import i_technologyQuality from '../../assets/images/i_technologyQuality.png';
import imgMainSec02Product02 from '../../assets/images/img_mainSec02_product02.png';
import imgMainSec03Product02 from '../../assets/images/img_mainSec03_product02.png';
import imgMainSec03Product03 from '../../assets/images/img_mainSec03_product03.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const gnbInt = () =>  {
  document.querySelector('#headerWrap').classList.remove('line');
  document.querySelector('#headerWrap').classList.add('shadow');
};
const fullpageGoTop = () =>  {
  //window.fullpageApi.moveTo(0);
  console.log(ReactFullpage)
};


const Home = () => (

  <div load={gnbInt()}>
    <div className="contents">
      <article>
        <ReactFullpage
          licenseKey = {'AF760DC1-B8A64C4E-B09FD43B-8C14CAE2'}
          navigation
          sectionsColor={["#535353", "#000000", "#ff5f45", "#373737", "#000000", "#ff5f45", "#000000", "#000000"]}
          navigationPosition= 'left'
          navigationTooltips={['Virtual Exhibition', 'SBB', 'R5', 'Solution', 'Technology', 'About Us']}
          normalScrollElements= ".fullpagePopScroll"
          onLeave={(origin, destination, direction) => {
            if ( destination.index == 0){
              document.querySelector('#section0Fade1').classList.remove('aos-animate');
              document.querySelector('#section1Fade1').classList.remove('aos-animate');
              document.querySelector('#section1Fade2').classList.remove('aos-animate');
              document.querySelector('#section1Fade3').classList.remove('aos-animate');
              document.querySelector('#section1Fade4').classList.remove('aos-animate');
            }else if ( destination.index == 1){
              document.querySelector('#section1Fade1').classList.remove('aos-animate');
              document.querySelector('#section1Fade2').classList.remove('aos-animate');
              document.querySelector('#section1Fade3').classList.remove('aos-animate');
              document.querySelector('#section1Fade4').classList.remove('aos-animate');
              document.querySelector('#section2Fade1').classList.remove('aos-animate');
              document.querySelector('#section2Fade2').classList.remove('aos-animate');
              document.querySelector('#section2Fade3').classList.remove('aos-animate');
              document.querySelector('#section2Fade4').classList.remove('aos-animate');
            }else if ( destination.index == 2){
              document.querySelector('#section2Fade1').classList.remove('aos-animate');
              document.querySelector('#section2Fade2').classList.remove('aos-animate');
              document.querySelector('#section2Fade3').classList.remove('aos-animate');
              document.querySelector('#section2Fade4').classList.remove('aos-animate');
              document.querySelector('#section3Fade1').classList.remove('aos-animate');
              document.querySelector('#section3Fade2').classList.remove('aos-animate');
              document.querySelector('#section3Fade3').classList.remove('aos-animate');
              document.querySelector('#section3Fade4').classList.remove('aos-animate');
              document.querySelector('#section3Fade5').classList.remove('aos-animate');
              document.querySelector('#section3Fade6').classList.remove('aos-animate');
            }else if ( destination.index == 3){
              document.querySelector('#section3Fade1').classList.remove('aos-animate');
              document.querySelector('#section3Fade2').classList.remove('aos-animate');
              document.querySelector('#section3Fade3').classList.remove('aos-animate');
              document.querySelector('#section3Fade4').classList.remove('aos-animate');
              document.querySelector('#section3Fade5').classList.remove('aos-animate');
              document.querySelector('#section3Fade6').classList.remove('aos-animate');
              document.querySelector('#section4Fade1').classList.remove('aos-animate');
              document.querySelector('#section4Fade2').classList.remove('aos-animate');
              document.querySelector('#section4Fade3').classList.remove('aos-animate');
              document.querySelector('#section4Fade4').classList.remove('aos-animate');
              document.querySelector('#section4Fade5').classList.remove('aos-animate');
            }else if ( destination.index == 4){
              document.querySelector('#section4Fade1').classList.remove('aos-animate');
              document.querySelector('#section4Fade2').classList.remove('aos-animate');
              document.querySelector('#section4Fade3').classList.remove('aos-animate');
              document.querySelector('#section4Fade4').classList.remove('aos-animate');
              document.querySelector('#section4Fade5').classList.remove('aos-animate');
              document.querySelector('#section5Fade1').classList.remove('aos-animate');
              document.querySelector('#section5Fade2').classList.remove('aos-animate');
              document.querySelector('#section5Fade3').classList.remove('aos-animate');
              document.querySelector('#section5Fade4').classList.remove('aos-animate');
              document.querySelector('#section5Fade1').classList.remove('aos-animate');
              document.querySelector('#section5Fade2').classList.remove('aos-animate');
              document.querySelector('#section5Fade3').classList.remove('aos-animate');
              document.querySelector('#section5Fade4').classList.remove('aos-animate');
            }else if ( destination.index == 5){
              document.querySelector('#section4Fade1').classList.remove('aos-animate');
              document.querySelector('#section4Fade2').classList.remove('aos-animate');
              document.querySelector('#section4Fade3').classList.remove('aos-animate');
              document.querySelector('#section4Fade4').classList.remove('aos-animate');
              document.querySelector('#section4Fade5').classList.remove('aos-animate');
            }
          }}
          afterLoad={(origin, destination, direction) => {
            if ( destination.index == 0){
              document.querySelector('#section0Fade1').classList.add('aos-animate');
              document.querySelector('#fullpageTop').classList.add('hidden');
            }else if ( destination.index == 1){
              document.querySelector('#fullpageTop').classList.remove('hidden');
              document.querySelector('#section0Fade1').classList.remove('aos-animate');
              document.querySelector('#section1Fade1').classList.add('aos-animate');
              document.querySelector('#section1Fade2').classList.add('aos-animate');
              document.querySelector('#section1Fade3').classList.add('aos-animate');
              document.querySelector('#section1Fade4').classList.add('aos-animate');
            }else if ( destination.index == 2){
              document.querySelector('#section1Fade1').classList.remove('aos-animate');
              document.querySelector('#section1Fade2').classList.remove('aos-animate');
              document.querySelector('#section1Fade3').classList.remove('aos-animate');
              document.querySelector('#section1Fade4').classList.remove('aos-animate');
              document.querySelector('#section2Fade1').classList.add('aos-animate');
              document.querySelector('#section2Fade2').classList.add('aos-animate');
              document.querySelector('#section2Fade3').classList.add('aos-animate');
              document.querySelector('#section2Fade4').classList.add('aos-animate');
            }else if ( destination.index == 3){
              document.querySelector('#section2Fade1').classList.remove('aos-animate');
              document.querySelector('#section2Fade2').classList.remove('aos-animate');
              document.querySelector('#section2Fade3').classList.remove('aos-animate');
              document.querySelector('#section2Fade4').classList.remove('aos-animate');
              document.querySelector('#section3Fade1').classList.add('aos-animate');
              document.querySelector('#section3Fade2').classList.add('aos-animate');
              document.querySelector('#section3Fade3').classList.add('aos-animate');
              document.querySelector('#section3Fade4').classList.add('aos-animate');
              document.querySelector('#section3Fade5').classList.add('aos-animate');
              document.querySelector('#section3Fade6').classList.add('aos-animate');
            }else if ( destination.index == 4){
              document.querySelector('#section3Fade1').classList.remove('aos-animate');
              document.querySelector('#section3Fade2').classList.remove('aos-animate');
              document.querySelector('#section3Fade3').classList.remove('aos-animate');
              document.querySelector('#section3Fade4').classList.remove('aos-animate');
              document.querySelector('#section3Fade5').classList.remove('aos-animate');
              document.querySelector('#section3Fade6').classList.remove('aos-animate');
              document.querySelector('#section4Fade1').classList.add('aos-animate');
              document.querySelector('#section4Fade2').classList.add('aos-animate');
              document.querySelector('#section4Fade3').classList.add('aos-animate');
              document.querySelector('#section4Fade4').classList.add('aos-animate');
              document.querySelector('#section4Fade5').classList.add('aos-animate');
            }else if ( destination.index == 5){
              document.querySelector('#section4Fade1').classList.remove('aos-animate');
              document.querySelector('#section4Fade2').classList.remove('aos-animate');
              document.querySelector('#section4Fade3').classList.remove('aos-animate');
              document.querySelector('#section4Fade4').classList.remove('aos-animate');
              document.querySelector('#section4Fade5').classList.remove('aos-animate');
              document.querySelector('#section5Fade1').classList.add('aos-animate');
              document.querySelector('#section5Fade2').classList.add('aos-animate');
              document.querySelector('#section5Fade3').classList.add('aos-animate');
              document.querySelector('#section5Fade4').classList.add('aos-animate');
            }
          }}
          render={({ state, fullpageApi }) => {
            return (
              <div className="homeLayout">
                <div className="section">
                  <section className="headSection">
                    <div className="imgBack">
                      {/*<img src={imgBgMain} alt="mainIntro" />*/}
                    </div>
                    <div className="headCts">
                      <h2 id="section0Fade1" data-aos="fade-up" data-aos-duration="1200">Battery Studio</h2>
                      <div className="intro">
                        <button className="btnM ghost roundSty">ENTER</button>
                        <button className="btnScroll" onClick={() => fullpageApi.moveSectionDown()}>Scroll Down</button>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="section">
                  <section className="mainBox mainCts01">
                    <div className="mainBoxBack">
                      <big>SBB</big>
                    </div>
                    <div className="mainBoxInner">
                      <div className="flexBetween">
                        <div className="ctsFrame">
                          <div className="headline">
                            <b id="section1Fade3" data-aos="fade-in" data-aos-delay="300" data-aos-duration="1200">NEW</b>
                            <h3 id="section1Fade1" data-aos="fade-up" data-aos-duration="1200">Safe and Economical<br/>Pre-engineered <span className="mBreak">Battery Enclosure</span></h3>
                            <Link to="/newrelease/sbb" className="btnM ghost roundSty" id="section1Fade2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">LEARN MORE</Link>
                          </div>
                        </div>
                        <div className="ctsFrame" id="section1Fade4" data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1000" data-aos-easing="ease">
                          <img src={img_mainSBB} alt="SBB" className="pcCase" />
                          <img src={img_mainSBB_m} alt="SBB" className="mCase" />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="section">
                  <section className="mainBox mainCts02">
                    <div className="mainBoxBack">
                      <big>R5</big>
                    </div>
                    <div className="mainBoxInner">
                      <div className="flexBetween">
                        <div className="ctsFrame">
                          <div className="headline">
                            <b id="section2Fade3" data-aos="fade-in" data-aos-delay="300" data-aos-duration="1200">NEW</b>
                            <h3 id="section2Fade1" data-aos="fade-up" data-aos-duration="1200">Compact and Superior Residential HVS Solution</h3>
                            <Link to="/newrelease/r5" className="btnM ghost roundSty" id="section2Fade2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">LEARN MORE</Link>
                          </div>
                        </div>
                        <div className="ctsFrame" id="section2Fade4" data-aos="fade-up" data-aos-delay="1200" data-aos-duration="800" data-aos-easing="ease">
                          <img src={img_mainR5} alt="R5" />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="section">
                  <section className="mainBox mainCts03 productCts">
                    <div className="mainBoxBack productBg">
                      <img src={bg_mainSolution} alt="Technology"/>
                    </div>
                    <div className="mainBoxInner">
                      <div className="flexBetween">
                        <div className="ctsFrame">
                          <div className="headline">
                            <h3 id="section3Fade1" data-aos="fade-up" data-aos-duration="1200">Solution</h3>
                            <p id="section3Fade2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">Samsung SDI offers eco-friendly energy solutions for the present and the future.<br/>We are providing a broad range of solutions ranging from residential to utility scale projects</p>
                          </div>
                        </div>
                        <div className="ctsFrame">
                          <div className="productList">
                            <ul>
                              <li className="bgItem" id="section3Fade3" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
                                <img src={img_mainSolution_bgItem} alt="Utility/CES"/>
                              </li>
                              {/* 2021-09-10 수정 */}
                              <li id="section3Fade4" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
                                <Link to="/solution/utilityces">
                                  <strong>Utility/CES</strong>
                                  <small>Battery Platform</small>
                                  <img src={img_mainSolution01} className="pcCase" alt="Utility/CES"/>
                                  <img src={img_mainSolution01_m} className="mCase" alt="Utility/CES"/>
                                  <button className="btnMore">LEARN MORE</button>
                                </Link>
                              </li>
                              <li className="grayBg" id="section3Fade5" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1200">
                                <Link to="/solution/ups">
                                  <strong>UPS</strong>
                                  <small>Lithium-ion Solution</small>
                                  <img src={img_mainSolution02} className="pcCase" alt="UPS"/>
                                  <img src={img_mainSolution02_m} className="mCase" alt="UPS"/>
                                  <button className="btnMore">LEARN MORE</button>
                                </Link>
                              </li>
                              <li id="section3Fade6" data-aos="fade-up" data-aos-delay="900" data-aos-duration="1200">
                                <Link to="/solution/residential">
                                  <strong>Residential</strong>
                                  <small>Battery Pack Solution</small>
                                  <img src={img_mainSolution03} className="pcCase" alt="Residential" />
                                  <img src={img_mainSolution03_m} className="mCase" alt="Residential" />
                                  <button className="btnMore">LEARN MORE</button>
                                </Link>
                              </li>
                              {/* //2021-09-10 수정 */}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="section">
                  <section className="mainBox mainCts04">
                    <div className="mainBoxBack">
                      <img src={bg_mainTechnology} alt="Technology"/>
                    </div>
                    <div className="mainBoxInner">
                      <div className="flexBetween">
                        <div className="ctsFrame">
                          <div className="headline">
                            <h3 id="section4Fade1" data-aos="fade-up" data-aos-duration="1200">Technology</h3>
                            <p id="section4Fade2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">Samsung SDI is leading the change of a new era with lithium-ion batteries.<br/>Our state-of-the-art technology enables safe,<br/>reliable and long-lasting performance for intended applications.</p>
                          </div>
                        </div>
                        <div className="ctsFrame">
                          <div className="technologyList">
                            <ul>
                              <li id="section4Fade3" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
                                <strong>Safety</strong>
                                <div className="iconArea">
                                  <img src={i_technologySafety} alt="Safety"/>
                                </div>
                                <p>All ESS products of Samsung SDI are designed to meet NFPA 855 requirements based on UL9540A*.</p>
                                <Link to="/technology/safety" className="btnM ghostBlue roundSty">LEARN MORE</Link>
                              </li>
                              <li id="section4Fade4" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
                                <strong>Perfomance</strong>
                                <div className="iconArea">
                                  <img src={i_technologyPerfomance} alt="Perfomance"/>
                                </div>
                                <p>Our state-of-the-art technology enable superior cycle life and power performance.</p>
                                <Link to="/technology/performance" className="btnM ghostBlue roundSty">LEARN MORE</Link>
                              </li>
                              <li id="section4Fade5" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1200">
                                <strong>Quality <span className="pcBreak">Management</span></strong>
                                <div className="iconArea">
                                  <img src={i_technologyQuality} alt="Quality Management"/>
                                </div>
                                <p>We have the industry’s most stringent quality standard in place to ensure maximum safety in every cell.</p>
                                <Link to="/technology/qualitymanagement" className="btnM ghostBlue roundSty">LEARN MORE</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="section">
                  <section className="mainBox mainCts05">
                    <div className="mainBoxBack">
                      <img src={bg_mainAboutus} alt="About Us"/>
                    </div>
                    <div className="mainBoxInner">
                      <div className="flexBetween">
                        <div className="ctsFrame">
                          <div className="headline">
                            <h3 id="section5Fade1" data-aos="fade-up" data-aos-duration="1200">About Us</h3>
                            <p id="section5Fade2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">Since Samsung SDI began lithium-ion battery business,<br/>we expanded business area from IT devices to electric cars and energy storage.<br/>Today, Samsung SDI continues to make history by leading the growing global ESS market based on<br/>best-in-class battery technology and strong partnerships.</p>
                          </div>
                        </div>
                        <div className="ctsFrame">
                          <div className="btnArea">
                            <Link to="/sdi/essbusiness" className="btnL ghost roundSty" id="section5Fade3" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">Business Overview</Link>
                            <Link to="/sdi/globaltrackrecord" className="btnL ghost roundSty" id="section5Fade4" data-aos="fade-up" data-aos-delay="350" data-aos-duration="1200">Global Track Record</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="section fp-auto-height">
                  <DefaultFooter />
                </div>
              </div>
            );
          }}
        />
      </article>
      <button className="btnTop" id="fullpageTop" onClick={() => window.fullpage_api.moveTo(1)}>TOP</button>
    </div>
  </div>
);

export default Home;
