import React, { useState, useEffect, useRef } from 'react';
import img_headSafety01 from '../../assets/images/img_headSafety01.png';
import img_safety01_detail01_can from '../../assets/images/img_safety01_detail01_can.png';
import img_safety01_detail01_pouch from '../../assets/images/img_safety01_detail01_pouch.png';
import img_safety01_detail02_aluminum from '../../assets/images/img_safety01_detail02_aluminum.png';
import img_safety02_rpt from '../../assets/images/img_safety02_rpt.png';
import img_safety03_concept from '../../assets/images/img_safety03_concept.png';
import img_safety04_video from '../../assets/images/img_safety04_video.png';
import img_safety05_rack from '../../assets/images/img_safety05_rack.png';
import img_safety05_rack_m from '../../assets/images/img_safety05_rack_m.png';
import img_safety06_1 from '../../assets/images/img_safety06_1.png';
import img_safety06_2 from '../../assets/images/img_safety06_2.png';
import img_safety06_3 from '../../assets/images/img_safety06_3.png';
import img_safety06_4 from '../../assets/images/img_safety06_4.png';

const Safety = (props) => {
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
        setScrollY(window.pageYOffset);
        setLoading(scc.current);
        setRefresh(refh.current);
      }
    });
    return () => {
      window.scrollTo(0, 0);
      mounted = false;
    }
  }, []);

  useEffect(() => {
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

  const goClick = () => {
    window.scrollTo(0, cBox.current.offsetTop);
  }
  const gnbInt = () =>  {
    document.querySelector('#headerWrap').classList.remove('darkCase');
  };


  return (
    <div load={gnbInt()}>
      <div className="contents">
        <div className="safetyLayout">
          <article>
            <section className="headSection">
              <div className="imgBack">
                <img src={img_headSafety01} alt="mainIntro" />
              </div>
              <div className="headCts shadow">
                <h2 data-aos="fade-up" data-aos-duration="1200">Safety</h2>
                <div className="intro">
                  <strong data-aos="fade-in" data-aos-delay="100" data-aos-duration="1500">Top Safety</strong>
                  <p data-aos="fade-in" data-aos-delay="300" data-aos-duration="1500">All ESS products of Samsung SDI for utility, UPS, and residential use are designed to meet NFPA 855 requirements based on UL9540A.<br/>We stick to the design principle that puts safety first at cell/ module/rack level to satisfy ESS safety requirements on all<br/>of our ESS products.</p>
                  <button className="btnScroll" onClick={ goClick }>Scroll Down</button>
                </div>
              </div>
            </section>
            <section className="ctsBox safety01" ref={cBox}>
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">Safety at Cell Level</h3>
                <small data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">Our prismatic cell equipped with a safety device<br/>(directional vent) ensures safety and robustness </small>
              </div>
              <div className="ctsFrame">
                {/* safeDetail01 */}
                <div className="safeDetail safeDetail01">
                  <strong data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">Directional Vent Adds Predictability</strong>
                  <div className="gridSet grid2">
                    <div className="gridItem" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
                      <div className="tls">
                        <table>
                          <thead>
                            <tr>
                              <th className="sky">Can Type</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="imgArea tC"><img src={img_safety01_detail01_can} alt=""/></td>
                            </tr>
                            <tr>
                              <td className="explainArea tC">
                                <strong className="blue">The gas only travels through<br/>the vent on top</strong>
                                <p>If overcharging or overheating raises the internal<br/>pressure to a certain level, the gas is released to outside to<br/>prevent any possibility of explosion.<br/><br/>Knowing where flammable gas is released helps us to<br/>know where to take fire suppression measures to<br/>prevent fire.</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="gridItem" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200">
                      <div className="tls">
                        <table>
                          <thead>
                            <tr>
                              <th className="blue">Pouch Type</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="imgArea tC"><img src={img_safety01_detail01_pouch} alt=""/></td>
                            </tr>
                            <tr>
                              <td className="explainArea tC">
                                <strong>Rupture on All Sides</strong>
                                <p>Rupture can occur on any side, making it<br/>difficult to locate fire suppression device<br/>to prevent fire.</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* //safeDetail01 */}
                {/* safeDetail02 */}
                <div className="safeDetail safeDetail02">
                  <strong data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">Robust Aluminum Can Structure</strong>
                  <div className="gridSet grid2">
                    <div className="gridItem" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200">
                      <div className="imgArea tC"><img src={img_safety01_detail02_aluminum} alt=""/></div>
                    </div>
                    <div className="gridItem tL" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
                      <div className="explainArea">
                        <strong>A can-type battery has a robust and reliable structure.</strong>
                        <p>Resistance to moisture penetration and changes in external conditions.<br/>Long life guaranteed for more than 20 years thanks to a zero WVTR. </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* //safeDetail02 */}
              </div>
            </section>
            <section className="ctsBox safety02">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">Safety at Cell Level</h3>
                <small data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200">Overcoming drawbacks of Positive & Floating Can with<br/>high resistance in positive terminals and cans</small>
              </div>
              <div className="ctsFrame">
                {/* safeDetail01 */}
                <div className="safeDetail safeDetail01">
                  <strong data-aos="fade-up" data-aos-delay="700" data-aos-duration="1200">RPT(Resistive Positive Terminal Effect)</strong>
                  <div className="tls btWhite" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1200">
                    <table>
                      <tbody>
                        <tr>
                          <td className="rptArea">
                            <div className="tC"><img src={img_safety02_rpt} alt=""/></div>
                            <span>Part : 4ea<br/>Identical with negative<br/>terminal structure</span>
                            <ul>
                              <li className="square">Anode resistance management in parts, dV inspection</li>
                              <li className="square">mA level of small dV during short circuit</li>
                              <li className="square">Self-discharge mode due to low short circuit current and high open resistance (no possibility of event)</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* //safeDetail01 */}
              </div>
            </section>
            <section className="ctsBox safety03">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">Safety at Module Level</h3>
                <small data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">Spraying fire agent which is stored in <span className="mBreak">a cylinder to the event cell directly</span><br/>Direct injection method will be applied in upcoming <span className="mBreak">platform(E4, M4, E4L, etc.)</span></small>
              </div>
              <div className="ctsFrame">
                {/* safeDetail01 */}
                <div className="safeDetail safeDetail01">
                  <strong data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">Concept of direct injection of fire agent</strong>
                  <div className="gridSet grid2">
                    <div className="gridItem" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200">
                      <div className="tls btWhite">
                        <table>
                          <tbody>
                            <tr>
                              <td className="imgArea"><img src={img_safety03_concept} alt=""/></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="gridItem" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
                      <div className="tls btWhite">
                        <table>
                          <tbody>
                            <tr>
                              <td className="explainArea">
                                <strong>Direct Injection Method</strong>
                                <ul className="dotList">
                                  <li>Spraying fire agent which is stored in a cylindrical to the event cell directly</li>
                                  <li>Minimize the secondary damage and thermal propagation by concentrated injection (over 10min.)</li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td className="explainArea bdNone">
                                <strong>Thermal Insulation Sheet</strong>
                                <ul className="dotList">
                                  <li>Preventing thermal propagation by adding insulation between cells</li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td className="explainArea highlight">
                                <strong>UL9540A Test Results</strong>
                                <p>No fire propagation from the initial cell to adjacent cells</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* //safeDetail01 */}
              </div>
            </section>
            <section className="ctsBox safety04">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">R&D Talk</h3>
              </div>
              <div className="ctsFrame">
                <div className="videoBack">
                  <img src={img_safety04_video} alt=""/>
                </div>
              </div>
            </section>
            <section className="ctsBox safety05">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">Safety at Rack Level</h3>
                <small data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">4 Types of safety devices within a rack to protect batteries<br/>from high fault current flowing. </small>
              </div>
              <div className="ctsFrame">
                {/* safeDetail01 */}
                <div className="safeDetail safeDetail01">
                  <strong data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">Multi-layered Safety System</strong>
                  <div className="tls btWhite" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
                    <table>
                      <tbody>
                        <tr>
                          <td className="rackArea tC">
                            <img src={img_safety05_rack} alt="" className="pcCase"/>
                            <img src={img_safety05_rack_m} alt="" className="mCase"/>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* //safeDetail01 */}
              </div>
            </section>
            <section className="ctsBox safety06">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">Safety at <span className="mBreakForce">Manufacture Process</span></h3>
                <small data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">In the cellt and module manufacturing process,<br/>perform more than 10 tests at the same time</small>
              </div>
              <div className="ctsFrame">
                <div className="safetyProcess">
                  <ul>
                    <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">
                      <span className="thumImg"><img src={img_safety06_1} alt=""/></span>
                      <strong>VOLTAGE TEST</strong>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
                      <span className="thumImg"><img src={img_safety06_2} alt=""/></span>
                      <strong>Camera Vision Test</strong>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200">
                      <span className="thumImg"><img src={img_safety06_3} alt=""/></span>
                      <strong>Cell Short Test</strong>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="700" data-aos-duration="1200">
                      <span className="thumImg"><img src={img_safety06_4} alt=""/></span>
                      <strong>Low Resistance Test</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Safety;
