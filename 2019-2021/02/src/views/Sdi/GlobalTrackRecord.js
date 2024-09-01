import React, { useState, useEffect } from 'react';
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from '@fullpage/react-fullpage';
import DefaultFooter from '../../containers/DefaultFooter';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade, Lazy, Mousewheel, } from 'swiper';

import img_headGtr01 from '../../assets/images/img_headGtr01.png';
import img_gtr_americas01_01 from '../../assets/images/img_gtr_americas01_01.png';
import img_gtr_americas01_02 from '../../assets/images/img_gtr_americas01_02.png';
import img_gtr_americas01_03 from '../../assets/images/img_gtr_americas01_03.png';
import img_gtr_americas01_04 from '../../assets/images/img_gtr_americas01_04.png';
import img_gtr_americas01_05 from '../../assets/images/img_gtr_americas01_05.png';
import img_gtr_americas01_06 from '../../assets/images/img_gtr_americas01_06.png';
import img_gtr_europe01_01 from '../../assets/images/img_gtr_europe01_01.png';
import img_gtr_europe01_02 from '../../assets/images/img_gtr_europe01_02.png';
import img_gtr_europe01_03 from '../../assets/images/img_gtr_europe01_03.png';
import img_gtr_europe01_04 from '../../assets/images/img_gtr_europe01_04.png';
import img_gtr_europe01_05 from '../../assets/images/img_gtr_europe01_05.png';
import img_gtr_ao01_01 from '../../assets/images/img_gtr_ao01_01.png';
import img_gtr_ao01_02 from '../../assets/images/img_gtr_ao01_02.png';
import img_gtr_ao01_03 from '../../assets/images/img_gtr_ao01_03.png';
import img_gtr_ao01_04 from '../../assets/images/img_gtr_ao01_04.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade, Lazy, Mousewheel]);

const GlobalTrackRecord = () => (
  <div>
    <div className="contents">
      <article>
        <ReactFullpage
          sectionsColor={["transparent", "transparent", "transparent", "transparent", "transparent", "transparent"]}
          normalScrollElements= ".fullpagePopScroll"
          onLeave={(origin, destination, direction) => {
            if ( destination.index == 0){
              document.querySelector('#section0Fade1').classList.remove('aos-animate');
              document.querySelector('#section0Fade2').classList.remove('aos-animate');
              document.querySelector('#section0Fade3').classList.remove('aos-animate');
              document.querySelector('#section0Fade4').classList.remove('aos-animate');
              document.querySelector('#section0Fade5').classList.remove('aos-animate');
              document.querySelector('#section1Fade1').classList.remove('aos-animate');
              document.querySelector('#section1Fade2').classList.remove('aos-animate');
              document.querySelector('#section1Fade3').classList.remove('aos-animate');
              document.querySelector('#section1Fade4').classList.remove('aos-animate');
              document.querySelector('#section1Fade5').classList.remove('aos-animate');
            }else if ( destination.index == 1){
              document.querySelector('#section1Fade1').classList.remove('aos-animate');
              document.querySelector('#section1Fade2').classList.remove('aos-animate');
              document.querySelector('#section1Fade3').classList.remove('aos-animate');
              document.querySelector('#section1Fade4').classList.remove('aos-animate');
              document.querySelector('#section1Fade5').classList.remove('aos-animate');
              document.querySelector('#section2Fade1').classList.remove('aos-animate');
              document.querySelector('#section2Fade2').classList.remove('aos-animate');
              document.querySelector('#section2Fade3').classList.remove('aos-animate');
              document.querySelector('#section2Fade4').classList.remove('aos-animate');
              document.querySelector('#section2Fade5').classList.remove('aos-animate');
              document.querySelector('#section2Fade6').classList.remove('aos-animate');
              document.querySelector('#section2Fade7').classList.remove('aos-animate');
              document.querySelector('#section2Fade8').classList.remove('aos-animate');
              document.querySelector('#section2Fade9').classList.remove('aos-animate');
              document.querySelector('#section2Fade10').classList.remove('aos-animate');
              document.querySelector('#section2Fade11').classList.remove('aos-animate');
            }else if ( destination.index == 2){
              document.querySelector('#section2Fade1').classList.remove('aos-animate');
              document.querySelector('#section2Fade2').classList.remove('aos-animate');
              document.querySelector('#section2Fade3').classList.remove('aos-animate');
              document.querySelector('#section2Fade4').classList.remove('aos-animate');
              document.querySelector('#section2Fade5').classList.remove('aos-animate');
              document.querySelector('#section2Fade6').classList.remove('aos-animate');
              document.querySelector('#section2Fade7').classList.remove('aos-animate');
              document.querySelector('#section2Fade8').classList.remove('aos-animate');
              document.querySelector('#section2Fade9').classList.remove('aos-animate');
              document.querySelector('#section2Fade10').classList.remove('aos-animate');
              document.querySelector('#section2Fade11').classList.remove('aos-animate');
              document.querySelector('#section3Fade1').classList.remove('aos-animate');
              document.querySelector('#section3Fade2').classList.remove('aos-animate');
              document.querySelector('#section3Fade3').classList.remove('aos-animate');
              document.querySelector('#section3Fade4').classList.remove('aos-animate');
              document.querySelector('#section3Fade5').classList.remove('aos-animate');
              document.querySelector('#section3Fade6').classList.remove('aos-animate');
              document.querySelector('#section3Fade7').classList.remove('aos-animate');
              document.querySelector('#section3Fade8').classList.remove('aos-animate');
              document.querySelector('#section3Fade9').classList.remove('aos-animate');
              document.querySelector('#section3Fade10').classList.remove('aos-animate');
              document.querySelector('#section3Fade11').classList.remove('aos-animate');
            }else if ( destination.index == 3){
            }
            //console.log("onLeave event", { origin, destination, direction });
          }}
          afterLoad={(origin, destination, direction) => {
            //console.log("onLeave event", { origin, destination, direction });
            if ( destination.index == 0){
              document.querySelector('#headerWrap').classList.remove('darkCase');
              document.querySelector('#headerWrap').classList.add('shadow');
              document.querySelector('#fullpageTop').classList.add('hidden');
              document.querySelector('#section0Fade1').classList.add('aos-animate');
              document.querySelector('#section0Fade2').classList.add('aos-animate');
              document.querySelector('#section0Fade3').classList.add('aos-animate');
              document.querySelector('#section0Fade4').classList.add('aos-animate');
              document.querySelector('#section0Fade5').classList.add('aos-animate');
              document.querySelector('#fullpageTop').classList.add('hidden');
            }else if ( destination.index == 1){
              document.querySelector('#headerWrap').classList.add('darkCase');
              document.querySelector('#headerWrap').classList.remove('shadow');
              document.querySelector('#fullpageTop').classList.remove('hidden');
              document.querySelector('#section0Fade1').classList.remove('aos-animate');
              document.querySelector('#section0Fade2').classList.remove('aos-animate');
              document.querySelector('#section0Fade3').classList.remove('aos-animate');
              document.querySelector('#section0Fade4').classList.remove('aos-animate');
              document.querySelector('#section0Fade5').classList.remove('aos-animate');
              document.querySelector('#section1Fade1').classList.add('aos-animate');
              document.querySelector('#section1Fade2').classList.add('aos-animate');
              document.querySelector('#section1Fade3').classList.add('aos-animate');
              document.querySelector('#section1Fade4').classList.add('aos-animate');
              document.querySelector('#section1Fade5').classList.add('aos-animate');
            }else if ( destination.index == 2){
              document.querySelector('#section1Fade1').classList.remove('aos-animate');
              document.querySelector('#section1Fade2').classList.remove('aos-animate');
              document.querySelector('#section1Fade3').classList.remove('aos-animate');
              document.querySelector('#section1Fade4').classList.remove('aos-animate');
              document.querySelector('#section1Fade5').classList.remove('aos-animate');
              document.querySelector('#section2Fade1').classList.add('aos-animate');
              document.querySelector('#section2Fade2').classList.add('aos-animate');
              document.querySelector('#section2Fade3').classList.add('aos-animate');
              document.querySelector('#section2Fade4').classList.add('aos-animate');
              document.querySelector('#section2Fade5').classList.add('aos-animate');
              document.querySelector('#section2Fade6').classList.add('aos-animate');
              document.querySelector('#section2Fade7').classList.add('aos-animate');
              document.querySelector('#section2Fade8').classList.add('aos-animate');
              document.querySelector('#section2Fade9').classList.add('aos-animate');
              document.querySelector('#section2Fade10').classList.add('aos-animate');
              document.querySelector('#section2Fade11').classList.add('aos-animate');
            }else if ( destination.index == 3){
              document.querySelector('#section2Fade1').classList.remove('aos-animate');
              document.querySelector('#section2Fade2').classList.remove('aos-animate');
              document.querySelector('#section2Fade3').classList.remove('aos-animate');
              document.querySelector('#section2Fade4').classList.remove('aos-animate');
              document.querySelector('#section2Fade5').classList.remove('aos-animate');
              document.querySelector('#section2Fade6').classList.remove('aos-animate');
              document.querySelector('#section2Fade7').classList.remove('aos-animate');
              document.querySelector('#section2Fade8').classList.remove('aos-animate');
              document.querySelector('#section2Fade9').classList.remove('aos-animate');
              document.querySelector('#section2Fade10').classList.remove('aos-animate');
              document.querySelector('#section2Fade11').classList.remove('aos-animate');
              document.querySelector('#section3Fade1').classList.add('aos-animate');
              document.querySelector('#section3Fade2').classList.add('aos-animate');
              document.querySelector('#section3Fade3').classList.add('aos-animate');
              document.querySelector('#section3Fade4').classList.add('aos-animate');
              document.querySelector('#section3Fade5').classList.add('aos-animate');
              document.querySelector('#section3Fade6').classList.add('aos-animate');
              document.querySelector('#section3Fade7').classList.add('aos-animate');
              document.querySelector('#section3Fade8').classList.add('aos-animate');
              document.querySelector('#section3Fade9').classList.add('aos-animate');
              document.querySelector('#section3Fade10').classList.add('aos-animate');
              document.querySelector('#section3Fade11').classList.add('aos-animate');
            }
          }}
          render={({ state, fullpageApi }) => {
            return (
              <div className="globalTrackRecordLayout">
                <div className="section">
                  <section className="headSection">
                    <div className="imgBack">
                      <img src={img_headGtr01} alt="mainIntro" />
                    </div>
                    <div className="headCts shadow">
                      <h2 id="section0Fade1" data-aos="fade-up" data-aos-duration="1200">Global Track Record</h2>
                      <div className="intro">
                        <div className="globalRecord">
                          <div className="figure">
                            <dl id="section0Fade2" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
                              <dt>SINCE</dt>
                              <dd>10</dd>
                            </dl>
                            <dl id="section0Fade3" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1200">
                              <dt>COUNTIRES</dt>
                              <dd>50<sup>+</sup></dd>
                            </dl>
                            <dl id="section0Fade4" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
                              <dt>TOTAL GWh</dt>
                              <dd>15<sup>+</sup></dd>
                            </dl>
                          </div>
                          <span id="section0Fade4" data-aos="fade-in" data-aos-delay="400" data-aos-duration="2000">*As of June, 2020 Installation & Award</span>
                        </div>
                        <p id="section0Fade5" data-aos="fade-in" data-aos-delay="500" data-aos-duration="2000">Since 2010, Samsung SDI's ESS products have been successfully operating in Over 50 countries.<br/>Today, Samsung SDI continues to make history by Leading the growing global ESS market based<br/>on best-in-class battery technology and strong partnerships.</p>
                        <button className="btnScroll" onClick={() => fullpageApi.moveSectionDown()}>Scroll Down</button>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="section">
                  <section className="globalBox americas">
                    <div className="globalBack">
                      <div className="slide">
                        <img src={img_gtr_americas01_01} alt=""/>
                      </div>
                      <div className="slide">
                        <img src={img_gtr_americas01_02} alt=""/>
                      </div>
                      <div className="slide">
                        <img src={img_gtr_americas01_03} alt=""/>
                      </div>
                      <div className="slide">
                        <img src={img_gtr_americas01_04} alt=""/>
                      </div>
                      <div className="slide">
                        <img src={img_gtr_americas01_05} alt=""/>
                      </div>
                      <div className="slide">
                        <img src={img_gtr_americas01_06} alt=""/>
                      </div>
                    </div>
                    <div className="globalInner">
                      <h3 id="section1Fade1" data-aos="fade-up" data-aos-duration="1200">Americas</h3>
                      <dl>
                        <dt id="section1Fade2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">USA</dt>
                        <dd id="section1Fade3" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200">
                          <ul className="byArea">
                            <li>
                              <strong>Austin, TX</strong>
                              <span>36MW / 14MWh</span>
                            </li>
                            <li>
                              <strong>El Cajon/Escondido, CA</strong>
                              <span>37.5MW / 150MWh</span>
                            </li>
                            <li>
                              <strong>Pomona, CA</strong>
                              <span>20MW / 80MWh</span>
                            </li>
                            <li>
                              <strong>Indianapolis, IN</strong>
                              <span>20MW / 20MWh</span>
                            </li>
                            <li>
                              <strong>El Centro, CA</strong>
                              <span>30MW / 20MWh</span>
                            </li>
                            <li>
                              <strong>Tucson, AZ</strong>
                              <span>10MW / 5MWh</span>
                            </li>
                            <li>
                              <strong>Clinton, OH</strong>
                              <span>10MW / 4MWh</span>
                            </li>
                            <li>
                              <strong>San Diego, CA</strong>
                              <span>20MW / 136MWh</span>
                            </li>
                            <li>
                              <strong>Kauai, HI</strong>
                              <span>15MW / 93MWh</span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                      <dl>
                        <dt id="section1Fade4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">Canada</dt>
                        <dd id="section1Fade5" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1200">
                          <ul className="byArea">
                            <li>
                              <strong>Sault Sainte Marie, Ontario</strong>
                              <span>8MW / 8MWh</span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </div>
                  </section>
                </div>
                <div className="section">
                  <section className="globalBox europe">
                    <div className="globalBack">
                      <div className="slide">
                        <img src={img_gtr_europe01_01} alt=""/>
                      </div>
                      <div className="slide">
                        <img src={img_gtr_europe01_02} alt=""/>
                      </div>
                      <div className="slide">
                        <img src={img_gtr_europe01_03} alt=""/>
                      </div>
                      <div className="slide">
                        <img src={img_gtr_europe01_04} alt=""/>
                      </div>
                      <div className="slide">
                        <img src={img_gtr_europe01_05} alt=""/>
                      </div>
                    </div>
                    <div className="globalInner">
                      <h3 id="section2Fade1" data-aos="fade-up" data-aos-duration="1200">Europe</h3>
                      <dl>
                        <dt id="section2Fade2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">Germany</dt>
                        <dd id="section2Fade3" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200">
                          <ul className="byArea">
                            <li>
                              <strong>Schwerin</strong>
                              <span>10MW / 10MWh</span>
                            </li>
                            <li>
                              <strong>Aachen</strong>
                              <span>5MW / 3MWh</span>
                            </li>
                            <li>
                              <strong>Chemnitz</strong>
                              <span>10MW / 16MWh</span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                      <dl>
                        <dt id="section2Fade4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">Italy</dt>
                        <dd id="section2Fade5" data-aos="fade-up" data-aos-delay="350" data-aos-duration="1200">
                          <ul className="byArea">
                            <li>
                              <strong>Potenza</strong>
                              <span>2MW / 2MWh</span>
                            </li>
                            <li>
                              <strong>Sardinia&Sicily(2 Sites)</strong>
                              <span>2MW / 2MWh</span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                      <dl>
                        <dt id="section2Fade6" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">UK</dt>
                        <dd id="section2Fade7" data-aos="fade-up" data-aos-delay="350" data-aos-duration="1200">
                          <ul className="byArea">
                            <li>
                              <strong>Leighton Buzzard</strong>
                              <span>6MW / 10MWh</span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                      <dl>
                        <dt id="section2Fade8" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">Netherlands</dt>
                        <dd id="section2Fade9" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200">
                          <ul className="byArea">
                            <li>
                              <strong>Zeeland</strong>
                              <span>10MW/10MWh</span>
                            </li>
                            <li>
                              <strong>Caribbean Islands</strong>
                              <span>2MW / 1MWh</span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                      <dl>
                        <dt id="section2Fade10" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">Spain</dt>
                        <dd id="section2Fade11" data-aos="fade-up" data-aos-delay="550" data-aos-duration="1200">
                          <ul className="byArea">
                            <li>
                              <strong>Carboneras</strong>
                              <span>20MW / 12MWh</span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </div>
                  </section>
                </div>
                <div className="section">
                  <section className="globalBox asiaOceania">
                    <div className="globalBack">
                      <div className="slide">
                        <img src={img_gtr_ao01_01} alt=""/>
                      </div>
                      <div className="slide">
                        <img src={img_gtr_ao01_02} alt=""/>
                      </div>
                      <div className="slide">
                        <img src={img_gtr_ao01_03} alt=""/>
                      </div>
                      <div className="slide">
                        <img src={img_gtr_ao01_04} alt=""/>
                      </div>
                    </div>
                    <div className="globalInner">
                      <h3 id="section3Fade1" data-aos="fade-up" data-aos-duration="1200">Asia & Oceania</h3>
                      <dl>
                        <dt id="section3Fade2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">Korea</dt>
                        <dd id="section3Fade3" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200">
                          <ul className="byArea">
                            <li>
                              <strong>KEPCO(F/R 5 Sites)</strong>
                              <span>128MW / 38MWh</span>
                            </li>
                            <li>
                              <strong>Solarsido PV</strong>
                              <span>78MW / 306MWh</span>
                            </li>
                            <li>
                              <strong>Youngam PV</strong>
                              <span>100MW / 251MWh</span>
                            </li>
                            <li>
                              <strong>Muan PV</strong>
                              <span>72MW / 250MWh</span>
                            </li>
                            <li>
                              <strong>Hyundai Steel(2 Sites)</strong>
                              <span>36MW / 207MWh</span>
                            </li>
                            <li>
                              <strong>Dongkuk Steel(3 Sites)</strong>
                              <span>36MW / 203MWh</span>
                            </li>
                            <li>
                              <strong>SeAH(5 Sites)</strong>
                              <span>33MW / 175MWh</span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                      <dl>
                        <dt id="section3Fade4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">China</dt>
                        <dd id="section3Fade5" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1200">
                          <ul className="byArea">
                            <li>
                              <strong>Tibet Shuanghu/Gaize</strong>
                              <span>8MW / 28MWh</span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                      <dl>
                        <dt id="section3Fade6" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">Japan</dt>
                        <dd id="section3Fade7" data-aos="fade-up" data-aos-delay="350" data-aos-duration="1200">
                          <ul className="byArea">
                            <li>
                              <strong>Hokkaido Shinhidaka</strong>
                              <span>17MW / 9MWh</span>
                            </li>
                            <li>
                              <strong>Hokkaido Chitose</strong>
                              <span>17MW / 14MWh</span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                      <dl>
                        <dt id="section3Fade8" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">Australia</dt>
                        <dd id="section3Fade9" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200">
                          <ul className="byArea">
                            <li>
                              <strong>Alice Spring</strong>
                              <span>6MW / 2MWh</span>
                            </li>
                            <li>
                              <strong>WesternAustralia</strong>
                              <span>4MW / 2MWh</span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                      <dl>
                        <dt id="section3Fade10" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">Cambodia</dt>
                        <dd id="section3Fade11" data-aos="fade-up" data-aos-delay="550" data-aos-duration="1200">
                          <ul className="byArea">
                            <li>
                              <strong>Phnom Penh</strong>
                              <span>0.5MW / 1MWh</span>
                            </li>
                          </ul>
                        </dd>
                      </dl>
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

export default GlobalTrackRecord;
