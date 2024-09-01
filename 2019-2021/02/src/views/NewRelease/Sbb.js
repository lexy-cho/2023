import React, { useState, useEffect, useRef } from 'react';
import Modal from '../../components/Modal';
import img_sbb01_battery from '../../assets/images/img_sbb01_battery.png';
import img_sbb01_icon01 from '../../assets/images/img_sbb01_icon01.png';
import img_sbb01_icon02 from '../../assets/images/img_sbb01_icon02.png';
import img_sbb01_icon03 from '../../assets/images/img_sbb01_icon03.png';
import img_sbb01_icon04 from '../../assets/images/img_sbb01_icon04.png';
import img_sbb02_asisSdi01 from '../../assets/images/img_sbb02_asisSdi01.png';
import img_sbb02_asisSdi02 from '../../assets/images/img_sbb02_asisSdi02.png';
import img_sbb02_asisSdi03 from '../../assets/images/img_sbb02_asisSdi03.png';
import img_sbb02_asisCus01 from '../../assets/images/img_sbb02_asisCus01.png';
import img_sbb02_asisCus02 from '../../assets/images/img_sbb02_asisCus02.png';
import img_sbb02_tobeSdi01 from '../../assets/images/img_sbb02_tobeSdi01.png';
import img_sbb02_tobeCus01 from '../../assets/images/img_sbb02_tobeCus01.png';
import img_sbb02_why01 from '../../assets/images/img_sbb02_why01.png';
import img_sbb02_why02 from '../../assets/images/img_sbb02_why02.png';
import img_sbb02_why03 from '../../assets/images/img_sbb02_why03.png';
import img_sbb02_why04 from '../../assets/images/img_sbb02_why04.png';
import img_sbb02_why05 from '../../assets/images/img_sbb02_why05.png';
import img_sbb03_container from '../../assets/images/img_sbb03_container.png';
import img_sbb03_pcs from '../../assets/images/img_sbb03_pcs.png';
import img_sbb04_con01 from '../../assets/images/img_sbb04_con01.png';
import img_sbb04_con02 from '../../assets/images/img_sbb04_con02.png';
import img_sbb05_video from '../../assets/images/img_sbb05_video.png';
import img_sbb06 from '../../assets/images/img_sbb06.png';
import img_sbb06_m from '../../assets/images/img_sbb06_m.png';
import img_sbb06_sbb from '../../assets/images/img_sbb06_sbb.png';
import img_sbb06_sbb_m from '../../assets/images/img_sbb06_sbb_m.png';
import img_sbb04_112ahCell from '../../assets/images/img_sbb04_112ahCell.png';

const Sbb = (props) => {
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(false);
  const scc = useRef(true);

  const [refresh, setRefresh] = useState(true);
  const refh = useRef(true);

  const cBox = useRef(null);
  useEffect(() => {
    sessionStorage.setItem('box', cBox.current.offsetTop);
    let mounted = true;
    window.addEventListener('scroll', () => {
      if (mounted) {
        //console.log('이벤트 시작');
        setScrollY(window.pageYOffset);
        setLoading(scc.current);
        setRefresh(refh.current);
      }
    });
    return () => {
      //console.log('이벤트 종료');
      window.scrollTo(0, 0);
      mounted = false;
      // window.removeEventListener('scroll', debounce(listener, delay));
    }
  }, []);

  useEffect(() => {
    // console.log(loading);
    ////console.log(scrollY);
    if (scrollY < 7 && loading) {
      refh.current = false;
      scc.current = true;
    }

    if (scrollY > 7 && loading && !refresh) {
      window.scrollTo(500, cBox.current.offsetTop);
      scc.current = false;
    }else if (scrollY > 7 && loading && refresh) {
      window.scrollTo(0, 0);
      scc.current = false;
    }

    if (scrollY === 0 && !loading) {
      scc.current = true;
    }

  }, [scrollY]);

  const [ modalOpen01, setModalOpen01 ] = useState(false);
  const openModal01 = () => {
      setModalOpen01(true);
  }
  const closeModal01 = () => {
      setModalOpen01(false);
      document.body.classList.remove('modalOpen');
  }
  const goClick = () => {
    window.scrollTo(0, cBox.current.offsetTop);
	}
  const gnbInt = () =>  {
    document.querySelector('#headerWrap').classList.remove('darkCase');
  };


  return (
    <div load={gnbInt()}>
      <div className="contents">
        <div className="sbbLayout">
          <article>
            <section className="headSection">
              <div className="imgBack">
                <video src="#"></video>
              </div>
              <div className="headCts shadow">
                <h2 data-aos="fade-up" data-aos-duration="1200" className="txtNone">SBB</h2>
                <div className="intro">
                  <button className="btnScroll" onClick={ goClick }>Scroll Down</button>
                </div>
              </div>
            </section>
            <section className="ctsBox sbb01" ref={cBox}>
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-duration="1200">Samsung Battery Box</h3>
                <small data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">Safe and Economical<br/>Pre-engineered Battery Enclosure</small>
              </div>
              <div className="ctsFrame">
                <div className="imgArea" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
                  <img src={img_sbb01_battery} alt=""/>
                </div>
                <div className="gradientLine">
                  <div className="gridSet grid2">
                    <div className="gridItem leftSec" data-aos="fade-up" data-aos-delay="350" data-aos-duration="1200">
                      <span>112Ah Cell<br/>Prismatic battery optimized for Utility ESS</span>
                      <strong><b>2.18</b>MWh</strong>
                    </div>
                    <div className="gridItem rightSec">
                      <ul>
                        <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200"><span className="keyIcon"><img src={img_sbb01_icon01} alt=""/></span>No Labor Cost</li>
                        <li data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200"><span className="keyIcon"><img src={img_sbb01_icon02} alt=""/></span>Short Lead Time</li>
                        <li data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200"><span className="keyIcon"><img src={img_sbb01_icon03} alt=""/></span>Pre-populated</li>
                        <li data-aos="fade-up" data-aos-delay="550" data-aos-duration="1200"><span className="keyIcon"><img src={img_sbb01_icon04} alt=""/></span>Flexible Layout</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="ctsBox sbb02">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-duration="1200">SBB, As good as it gets!</h3>
              </div>
              <div className="ctsFrame">
                <div className="sbbAs">
                  <div className="sbbAsLine asis">
                    <strong data-aos="fade-in" data-aos-delay="200" data-aos-duration="1500">As-Is</strong>
                    <div className="gridSet grid2" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1500">
                      <div className="gridItem">
                        <div className="tls">
                          <table>
                            <thead>
                              <tr>
                                <th className="gray">SAMSUNG SDI</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <strong>Battery & Rack Manufacturing</strong>
                                  <div className="sbbIconArea">
                                    <ul>
                                      <li><span className="sbbIcon"><img src={img_sbb02_asisSdi01} alt=""/></span>Module</li>
                                      <li><span className="sbbIcon"><img src={img_sbb02_asisSdi02} alt=""/></span>BCU</li>
                                      <li><span className="sbbIcon"><img src={img_sbb02_asisSdi03} alt=""/></span>Rack Supply</li>
                                    </ul>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <span className="asAdd">+</span>
                      </div>
                      <div className="gridItem customerCase">
                        <div className="tls">
                          <table>
                            <thead>
                              <tr>
                                <th className="gray">Customer</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <strong>Container Manufacturing & Battery Installation</strong>
                                  <div className="sbbIconArea case2">
                                    <ul>
                                      <li><span className="sbbIcon"><img src={img_sbb02_asisCus01} alt=""/></span>CNT(40ft) <span className="mBreakForce">with Rack</span></li>
                                      <li><span className="sbbIcon"><img src={img_sbb02_asisCus02} alt=""/></span>Project Site</li>
                                    </ul>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <ul className="dotList" data-aos="fade-in" data-aos-delay="500" data-aos-duration="1500">
                      <li>Skilled Electricians and Laborers Required (High cost)</li>
                      <li>Installation Training Required</li>
                      <li>Safety Inspection and Test after Installation </li>
                    </ul>
                  </div>
                  <div className="sbbAsLine tobe">
                    <strong  data-aos="fade-in" data-aos-delay="500" data-aos-duration="1500">To-be</strong>
                    <div className="gridSet grid2" data-aos="fade-in" data-aos-delay="600" data-aos-duration="1500">
                      <div className="gridItem sdiCase">
                        <div className="tls">
                          <table>
                            <thead>
                              <tr>
                                <th className="sky">SAMSUNG SDI</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <strong>Battery & Rack Manufacturing + Installation </strong>
                                  <div className="sbbIconArea">
                                    <ul>
                                      <li><span className="sbbIcon"><img src={img_sbb02_tobeSdi01} alt=""/></span>Battery Enclosure Supply</li>
                                    </ul>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <span className="asAdd">+</span>
                      </div>
                      <div className="gridItem">
                        <div className="tls">
                          <table>
                            <thead>
                              <tr>
                                <th className="blue">Customer</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <strong className="point">”Pre-populated Battery Enclosure Supply”</strong>
                                  <div className="sbbIconArea">
                                    <ul>
                                      <li><span className="sbbIcon"><img src={img_sbb02_tobeCus01} alt=""/></span><strong>Just Plug-in!</strong></li>
                                    </ul>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="whySbb">
                  <ul>
                    <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
                      <span className="whiteIcon"><img src={img_sbb02_why01} alt=""/></span>
                      <div>
                        <strong>No Labor Costs for Battery Installation</strong>
                        <p>Customers no longer have to pay costs for installation.<br/>SBB allows you to save more than 2.5% of CAPEX</p>
                      </div>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">
                      <span className="whiteIcon"><img src={img_sbb02_why02} alt=""/></span>
                      <div>
                        <strong>No Need of Highly Skilled Technicians for Battery Installation</strong>
                        <p>There is no need for customers to pay costs for highly skilled technicians.<br/>Personnel management and technical training are not required at all.</p>
                      </div>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
                      <span className="whiteIcon"><img src={img_sbb02_why03} alt=""/></span>
                      <div>
                        <strong>Short Lead Time for Installation</strong>
                        <p>As it is a pre-engineered product, it only takes 20 days to operate 100MWh SBB<br/>while 80 days are required for the existing products. </p>
                      </div>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200">
                      <span className="whiteIcon"><img src={img_sbb02_why04} alt=""/></span>
                      <div>
                        <strong>Low Risk in Pre-populated and Verified Enclosure</strong>
                        <p>In case of the existing energy storage system, faults or errors can be found during installation or after testing.<br/>However, all tests have been completed on SBB in advance so that technical issues can be minimized.</p>
                      </div>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="700" data-aos-duration="1200">
                      <span className="whiteIcon"><img src={img_sbb02_why05} alt=""/></span>
                      <div>
                        <strong>Flexible site layout (2MWh unit enclosure)</strong>
                        <p>Flexible layout is possible even in limited space as SBB is smaller than<br/>the existing 40ft containers.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="ctsBox sbb03">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-duration="1200">Battery Enclosure Layout</h3>
              </div>
              <div className="ctsFrame">
                <div className="gridSet grid2" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200">
                  <div className="gridItem">
                    <div className="tls btWhite">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <strong>Side by Side & Back to<br/>Back Layout with min. clearance</strong>
                            </td>
                          </tr>
                          <tr>
                            <td className="tC vMiddle">
                              <div className="imgArea">
                                <img src={img_sbb03_container} alt=""/>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>Clearance SBB back to back 6”, Side by side 10”<br/>SBB block clearance : 8ft(for maintenance)</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="gridItem">
                    <div className="tls btWhite">
                      <table>
                        <colgroup>
                          <col width="50%"/>
                          <col width="50%"/>
                        </colgroup>
                        <tbody>
                          <tr>
                            <td colSpan="2">
                              <strong>8MW/32MWh System with<br/>2MW PCS</strong>
                              <div className="imgArea tC">
                                <img src={img_sbb03_pcs} alt=""/>
                              </div>
                            </td>
                          </tr>
                          <tr className="subTr subTrTop">
                            <td></td>
                            <td className="tC">Required Gross Area<br/>(Including Fence 8ft each)</td>
                          </tr>
                          <tr className="subTr">
                            <td>Battery Enclosure v2.1MWh<br/>(L 6.44 x D 1.94m)</td>
                            <td className="tC">514.5 m2 5535.15 ft2</td>
                          </tr>
                          <tr className="subTr">
                            <td>40ft ISO Container 4.5MWh<br/>(L 12.2 x D 2.4m)</td>
                            <td className="tC">707.4 m2 7610.6 ft2</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="ctsBox sbb04">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-duration="1200">Main Features</h3>
                <small data-aos="fade-up" data-aos-delay="50" data-aos-duration="1200">All-in-one configuration consisting of batteries,<br/>AC panel, DC panel, HVAC, and fire control system</small>
              </div>
              <div className="ctsFrame">
                <div className="mainFeature">
                  <div className="gridSet grid2" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200">
                    <div className="gridItem">
                      <ul>
                        <li>
                          <span className="num">1</span>
                          <strong>DC Disconnect</strong>
                          <p>Enhanced short circuit protection with DC Disconnect Switch and protection coordination with a fuse in BCU<br/><br/>Increased isolation function between battery and PCS with remote tripping function</p>
                        </li>
                        <li>
                          <span className="num">2</span>
                          <strong>DC Disconnect</strong>
                          <p>Enhanced battery protection from<br/>DC & AC surge</p>
                        </li>
                        <li>
                          <span className="num">3</span>
                          <strong>AC panel for Aux.</strong>
                          <p>Circuit breaker for AC aux. power</p>
                        </li>
                        <li>
                          <span className="num">4</span>
                          <strong>Embedded Control Board</strong>
                          <p>The embedded control board to<br/>gather status data of all equipment<br/>in enclosure and communicate<br/>with SBMS</p>
                        </li>
                        <li>
                          <span className="num">5</span>
                          <strong>Easy Cable Access</strong>
                          <p>Bottom cable connection structure<br/>(AC & DC)</p>
                        </li>
                        <li>
                          <span className="num">6</span>
                          <strong>Multi-layered Insulator</strong>
                          <p>Multi layered insulator to maintain<br/>room temperature and minimize<br/>condensation</p>
                        </li>
                      </ul>
                    </div>
                    <div className="gridItem imgArea tR">
                      <img src={img_sbb04_con01} alt=""/>
                    </div>
                  </div>
                </div>
                <div className="mainFeature">
                  <div className="gridSet grid2" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
                    <div className="gridItem imgArea">
                      <img src={img_sbb04_con02} alt=""/>
                    </div>
                    <div className="gridItem">
                      <ul>
                        <li>
                          <span className="num">1</span>
                          <strong>Degree of Protection</strong>
                          <p>IP54(NEMA 3R)</p>
                        </li>
                        <li>
                          <span className="num">2</span>
                          <strong>Front Access</strong>
                          <p>Front access only<br/><br/>Mounting battery enclosure with minimized clearances</p>
                        </li>
                        <li>
                          <span className="num">3</span>
                          <strong>Wall mounted HVAC</strong>
                          <p>Door mounted HVAC units with integrated heat exchanger Easy maintenance</p>
                        </li>
                        <li>
                          <span className="num">4</span>
                          <strong>Container type Door<br/>Locking System</strong>
                          <p>IP54</p>
                        </li>
                        <li>
                          <span className="num">5</span>
                          <strong>Crane Compatible</strong>
                          <p>Crane compatible structure on top</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="ctsBox sbb05">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-duration="1200">R&D Talk</h3>
              </div>
              <div className="ctsFrame">
                <div className="videoBack"><img src={img_sbb05_video} alt=""/></div>
              </div>
            </section>
            <section className="ctsBox sbb06">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-duration="1200">Specification</h3>
              </div>
              <div className="platform productCts">
                <div className="platformBack productBg">
                  <img src={img_sbb06} alt=""/>
                </div>
                <div className="ctsFrame" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
                  <div className="productList onlyCase">
                    <ul>
                      <li className="bgItem">
                        <img src={img_sbb06_m} alt="SBB"/>
                      </li>
                      <li onClick={openModal01}>{/* 2021-09-10 수정 */}
                        <strong>SBB</strong>
                        <em>Samsung  Battery Box</em>
                        <img src={img_sbb06_sbb} className="pcCase" alt="SBB"/>
                        <img src={img_sbb06_sbb_m} className="mCase" alt="SBB"/>
                        <button className="btnMore">LEARN MORE</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>

      {/* ==== 팝업 ==== */}
      {modalOpen01 &&
        <Modal open={ modalOpen01 } close={ closeModal01 } header="SBB" keyclassName="productPop bottomCase">
          <div className="productDetail">
            <div className="pdImage">
              <img src={img_sbb04_112ahCell} alt=""/>
            </div>
            <div className="pdTlsBack">
              <div className="pdTls">
                <table>
                  <thead>
                    <th colSpan="3">Items</th>
                    <th>Specification</th>
                  </thead>
                  <tbody>
                    <tr>
                      <th rowSpan="6" className="tL">Battery</th>
                      <th className="tL">Design Energy</th>
                      <td>kWh</td>
                      <td>2185.7</td>
                    </tr>
                    <tr>
                      <th className="tL">Configuration</th>
                      <td>-</td>
                      <td>2P 336S 8Racks</td>
                    </tr>
                    <tr>
                      <th className="tL">DC Volt, Max.</th>
                      <td>VDC</td>
                      <td>1377.6</td>
                    </tr>
                    <tr>
                      <th className="tL">DC Volt, Nominal</th>
                      <td>VDC</td>
                      <td>1219.7</td>
                    </tr>
                    <tr>
                      <th className="tL">DC Volt, Min.</th>
                      <td>VDC</td>
                      <td>1041.6</td>
                    </tr>
                    <tr>
                      <th className="tL">Rated Power</th>
                      <td>kW</td>
                      <td>1092.8(0.5C)</td>
                    </tr>
                    <tr>
                      <th rowSpan="13" className="tL">Enclosure</th>
                      <th className="tL">Dimension[L x D x H]</th>
                      <td>M</td>
                      <td>6.45 x 1.94 x 2.20</td>
                    </tr>
                    <tr>
                      <th className="tL">Weight</th>
                      <td>kg</td>
                      <td>21,000(incl. batteries)</td>
                    </tr>
                    <tr>
                      <th className="tL">Degree of Protection</th>
                      <td>-</td>
                      <td>IP54(NEMA 3R)</td>
                    </tr>
                    <tr>
                      <th className="tL">Operating Amb. Temp.</th>
                      <td>°C</td>
                      <td>-30 ~ 50</td>
                    </tr>
                    <tr>
                      <th className="tL">Operating Batt. Tem.</th>
                      <td>°C</td>
                      <td>23 ± 5</td>
                    </tr>
                    <tr>
                      <th className="tL">Marine Environmental Rating</th>
                      <td></td>
                      <td>C4</td>
                    </tr>
                    <tr>
                      <th className="tL">Seismic Rating</th>
                      <td>-</td>
                      <td>Zone 4</td>
                    </tr>
                    <tr>
                      <th className="tL">Fire Rating</th>
                      <td>-</td>
                      <td>1 Hr (Optional)</td>
                    </tr>
                    <tr>
                      <th className="tL">Operating Altitude</th>
                      <td>-</td>
                      <td>Less than 2,000</td>
                    </tr>
                    <tr>
                      <th className="tL">Active Venting System</th>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <th className="tL">Gas Detection System</th>
                      <td>-</td>
                      <td>Yes(H2, CO)</td>
                    </tr>
                    <tr>
                      <th className="tL">Emergency Stop</th>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <th className="tL">Door Sensor</th>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <th className="tL">HVAC</th>
                      <th className="tL">HVAC</th>
                      <td>kW</td>
                      <td>6.10kW x 4</td>
                    </tr>
                    <tr>
                      <th rowSpan="5" className="tL">FSS</th>
                      <th className="tL">Fire Safety System</th>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <th className="tL">Heat Detector</th>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <th className="tL">Smoke Detector</th>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <th className="tL">Horn</th>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <th className="tL">Strobe</th>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <th rowSpan="4" className="tL">DC Panel</th>
                      <th className="tL">DC Disconnect</th>
                      <td>-</td>
                      <td>Yes(1500V 1600A)</td>
                    </tr>
                    <tr>
                      <th className="tL">UVT</th>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <th className="tL">SPD</th>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <th className="tL">Surge Counter</th>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <th rowSpan="4" className="tL">AC Panel</th>
                      <th className="tL">AC Main Breaker</th>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <th className="tL">SPD</th>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <th className="tL">MCCB</th>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <th className="tL">SMPS</th>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <th className="tL">Compliance</th>
                      <th className="tL">UL1973 / UL9540A / UL9540 NFPA855</th>
                      <td></td>
                      <td>Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="modalBtn">
            <button className="btnM white roundSty" onClick={closeModal01}> CLOSE </button>
            <button className="btnM black roundSty" onClick={closeModal01}> PDF DOWNLOAD </button>
          </div>
        </Modal>
      }
      {/* ==== dnd 팝업 ==== */}
    </div>
  )
}

export default Sbb;
