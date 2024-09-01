import React, { useState, useEffect, useRef } from 'react';
import Modal from '../../components/Modal';
import img_r501_r5 from '../../assets/images/img_r501_r5.png';
import img_r501_cell from '../../assets/images/img_r501_cell.png';
import img_r501_icon01 from '../../assets/images/img_r501_icon01.png';
import img_r501_icon02 from '../../assets/images/img_r501_icon02.png';
import img_r501_icon03 from '../../assets/images/img_r501_icon03.png';
import img_r501_icon04 from '../../assets/images/img_r501_icon04.png';
import img_r502_hvs from '../../assets/images/img_r502_hvs.png';
import img_r503_01 from '../../assets/images/img_r503_01.png';
import img_r503_02 from '../../assets/images/img_r503_02.png';
import img_r503_03 from '../../assets/images/img_r503_03.png';
import img_r503_03_right from '../../assets/images/img_r503_03_right.png';
import img_r504_01 from '../../assets/images/img_r504_01.png';
import img_r504_02 from '../../assets/images/img_r504_02.png';
import img_r505_video from '../../assets/images/img_r505_video.png';
import img_r506 from '../../assets/images/img_r506.png';
import img_r506_cell from '../../assets/images/img_r506_cell.png';
import img_r506_cell_m from '../../assets/images/img_r506_cell_m.png';
import img_r506_module from '../../assets/images/img_r506_module.png';
import img_r506_module_m from '../../assets/images/img_r506_module_m.png';
import img_sbb04_112ahCell from '../../assets/images/img_sbb04_112ahCell.png';

const R5 = (props) => {
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

  const [ modalOpen01, setModalOpen01 ] = useState(false);
  const openModal01 = () => {
      setModalOpen01(true);
  }
  const closeModal01 = () => {
      setModalOpen01(false);
      document.body.classList.remove('modalOpen');
  }
  const [ modalOpen02, setModalOpen02 ] = useState(false);
  const openModal02 = () => {
      setModalOpen02(true);
  }
  const closeModal02 = () => {
      setModalOpen02(false);
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
        <div className="r5Layout">
          <article>
            <section className="headSection">
              <div className="imgBack">
                <video src="#"></video>
              </div>
              <div className="headCts shadow">
                <h2 data-aos="fade-up" data-aos-duration="1200">R5</h2>
                <div className="intro">
                  <button className="btnScroll" onClick={ goClick }>Scroll Down</button>
                </div>
              </div>
            </section>
            <section className="ctsBox r501" ref={cBox}>
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-duration="1200">R5 HVS Solution</h3>
                <small data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">Compact and Superior<br/>Residential High Voltage System Solution</small>
              </div>
              <div className="ctsFrame">
                <div className="imgArea tC">
                  <span className="r5Image" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
                    <img src={img_r501_r5} alt=""/>
                    <span className="cell"><img src={img_r501_cell} alt=""/></span>
                  </span>
                </div>
                <div className="gradientLine">
                  <div className="gridSet grid2">
                    <div className="gridItem leftSec" data-aos="fade-up" data-aos-delay="350" data-aos-duration="1200">
                      <span>5.0Ah Cell<br/>Cylindrical battery optimized for Residential ESS</span>
                      <strong><b>3.74</b>kWh</strong>
                    </div>
                    <div className="gridItem rightSec">
                      <ul>
                        <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200"><span className="keyIcon"><img src={img_r501_icon01} alt=""/></span>Smaller in size</li>
                        <li data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200"><span className="keyIcon"><img src={img_r501_icon02} alt=""/></span>Lighter in weight</li>
                        <li data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200"><span className="keyIcon"><img src={img_r501_icon03} alt=""/></span>Easy installation</li>
                        <li data-aos="fade-up" data-aos-delay="550" data-aos-duration="1200"><span className="keyIcon"><img src={img_r501_icon04} alt=""/></span>High system efficiency</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="ctsBox r502">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-duration="1200">Key features</h3>
              </div>
              <div className="ctsFrame">
                <div className="accordion">
                  <dl>
                    <dt data-aos="fade-up" data-aos-delay="200">
                      <strong>High Energy Density</strong>
                    </dt>
                    <dd data-aos="fade-up" data-aos-delay="250">
                      <div className="gridSet grid3">
                        <div className="gridItem tC">• Smaller in size</div>
                        <div className="gridItem tC">• Lighter in weight</div>
                        <div className="gridItem tC">• Easy installation</div>
                      </div>
                      <div className="accordDetail">
                        <div className="leftSec">
                          <strong>Excellence in energy density</strong>
                        </div>
                        <div className="rightSec">
                          <div className="tls btWhite">
                            <table>
                              <colgroup>
                                <col width="100px"/>
                                <col width="100px"/>
                                <col width="60px"/>
                                <col width="60px"/>
                                <col width="60px"/>
                              </colgroup>
                              <thead>
                                <tr>
                                  <th colSpan="2"></th>
                                  <th>SDI (NCA)</th>
                                  <th>1 (ncm)</th>
                                  <th>2 (lfp)</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="tL">Usable Energy</td>
                                  <td>kWh</td>
                                  <td>3.74</td>
                                  <td>8.8</td>
                                  <td>3.2</td>
                                </tr>
                                <tr>
                                  <td className="tL">Weight</td>
                                  <td>kg</td>
                                  <td>20.4</td>
                                  <td>68</td>
                                  <td>32</td>
                                </tr>
                                <tr>
                                  <td className="tL" rowSpan="2">Energy Density</td>
                                  <td>Wh/L</td>
                                  <td><strong className="blue">309</strong></td>
                                  <td>196</td>
                                  <td>131</td>
                                </tr>
                                <tr>
                                  <td>Wh/kg</td>
                                  <td>183</td>
                                  <td>129</td>
                                  <td>100</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </dd>
                  </dl>
                  <dl>
                    <dt data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
                      <strong>Low Energy, High Voltage</strong>
                    </dt>
                    <dd data-aos="fade-up" data-aos-delay="250" data-aos-duration="1200">
                      <div className="gridSet grid3">
                        <div className="gridItem tC">• Low Energy, High Voltage</div>
                        <div className="gridItem tC">• Optimized scalability for HVS</div>
                        <div className="gridItem tC">• High system efficiency</div>
                      </div>
                      <div className="accordDetail">
                        <div className="leftSec">
                          <strong>Optimized Scalability for HVS</strong>
                        </div>
                        <div className="rightSec">
                          <div className="imgArea tC">
                            <img src={img_r502_hvs} alt=""/>
                          </div>
                        </div>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </section>
            <section className="ctsBox r503">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-duration="1200">Wire Bonding</h3>
                <small data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">Perfect Safety Manufacturing Technology</small>
              </div>
              <div className="ctsFrame">
                <div className="wireBonding">
                  <div className="gridSet grid2">
                    <div className="gridItem" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
                      <div className="whiteLine">
                        <span className="num">1</span>
                        <div className="imgArea"><img src={img_r503_01} alt=""/></div>
                        <strong>Fuse</strong>
                      </div>
                      <p>Acts as a fuse against the overcurrent</p>
                    </div>
                    <div className="gridItem" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">
                      <div className="whiteLine">
                        <span className="num">2</span>
                        <div className="imgArea"><img src={img_r503_02} alt=""/></div>
                        <ul>
                          <li>
                            <strong>Fuse</strong>
                          </li>
                          <li>
                            <strong>Wire</strong>
                          </li>
                        </ul>
                      </div>
                      <p>Less surface area in contact, minimizing heat transfer</p>
                    </div>
                  </div>
                  <div className="whiteLine" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
                    <span className="num">3</span>
                    <div className="gridSet grid2">
                      <div className="gridItem">
                        <div className="imgArea"><img src={img_r503_03} alt=""/></div>
                        <strong>Tab</strong>
                      </div>
                      <div className="gridItem">
                        <div className="imgArea"><img src={img_r503_03_right} alt=""/></div>
                        <strong>Wire</strong>
                      </div>
                    </div>
                  </div>
                  <p data-aos="fade-in" data-aos-delay="700" data-aos-duration="1200">Covers less cell surface area, allowing effective heat dissipation</p>
                </div>
              </div>
            </section>
            <section className="ctsBox r504">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-duration="1200">Various System Configurations</h3>
                <small data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">Perfect Safety Manufacturing Technology</small>
              </div>
              <div className="ctsFrame">
                <div className="config" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200">
                  <strong>Rack BMS : Max 56kWh (500V)</strong>
                  <div className="imgArea"><img src={img_r504_01} alt=""/></div>
                  <div className="tR"><em>* Size<br/>- Rack BMS : 135mm x 115mm x 1.6mm<br/>- Junction Board : 170mm X 135mm X 1.6mm</em></div>
                </div>
                <div className="config" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1200">
                  <strong>Junction Board : Max 33kWh (300V)</strong>
                  <div className="imgArea"><img src={img_r504_02} alt=""/></div>
                  <div className="tR"><em>* Size<br/>- Rack BMS : 135mm x 115mm x 1.6mm<br/>- Junction Board : 170mm X 135mm X 1.6mm</em></div>
                </div>
              </div>
            </section>
            <section className="ctsBox r505">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-duration="1200">R&D Talk</h3>
              </div>
              <div className="ctsFrame">
                <div className="videoBack"><img src={img_r505_video} alt=""/></div>
              </div>
            </section>
            <section className="ctsBox r506">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-duration="1200">Specification</h3>
              </div>
              <div className="platform productCts">
                <div className="platformBack productBg">
                  <img src={img_r506} alt=""/>
                </div>
                <div className="ctsFrame">
                  <div className="productList">
                    <ul>
                      <li className="grayBg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200" onClick={openModal01}>{/* 2021-09-10 수정 */}
                        <strong>5.0Ah Cell</strong>
                        <img src={img_r506_cell} alt="5.0Ah Cell" className="pcCase"/>
                        <img src={img_r506_cell_m} alt="5.0Ah Cell" className="mCase"/>
                        <button className="btnMore">LEARN MORE</button>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200" onClick={openModal02}>{/* 2021-09-10 수정 */}
                        <strong>R5 Module</strong>
                        <img src={img_r506_module} alt="R5 Module" className="pcCase"/>
                        <img src={img_r506_module_m} alt="R5 Module" className="mCase"/>
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
        <Modal open={ modalOpen01 } close={ closeModal01 } header="5.0Ah Cell" keyclassName="productPop bottomCase">
          <div className="productDetail">
            <div className="pdImage">
              <img src={img_sbb04_112ahCell} alt=""/>
            </div>
            <div className="pdTlsBack">
              <div className="pdTls">
                <table>
                  <thead>
                    <th colSpan="2">Item</th>
                    <th>Cell</th>
                  </thead>
                  <tbody>
                    <tr>
                      <th rowSpan="2" className="tL">Dimension</th>
                      <td>Diameter</td>
                      <td>21.3mm</td>
                    </tr>
                    <tr>
                      <td>Height</td>
                      <td>70.25mm</td>
                    </tr>
                    <tr>
                      <th colSpan="2" className="tL">Weight [g]</th>
                      <td>69.5</td>
                    </tr>
                    <tr>
                      <th colSpan="2" className="tL">Capacity [Ah]</th>
                      <td>5Ah</td>
                    </tr>
                    <tr>
                      <th rowSpan="2" className="tL">Capacity</th>
                      <td>Nameplate<br/>(4.2V, 0.5C/0.2C, 2.75V)</td>
                      <td>Min 4800mAh</td>
                    </tr>
                    <tr>
                      <td>ESS Standard<br/>(4.1V., 0.33C/0.2C, 3V)</td>
                      <td>Min 4060mAh</td>
                    </tr>
                    <tr>
                      <th colSpan="2" className="tL">Max Charge Voltage</th>
                      <td>4.1V</td>
                    </tr>
                    <tr>
                      <th colSpan="2" className="tL">Discharge Cut-off Voltage</th>
                      <td>3.00V</td>
                    </tr>
                    <tr>
                      <th colSpan="2" className="tL">Nominal Voltage</th>
                      <td>3.65V</td>
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
      {modalOpen02 &&
        <Modal open={ modalOpen02 } close={ closeModal02 } header="R5 Module" keyclassName="productPop bottomCase">
          <div className="productDetail">
            <div className="pdImage">
              <img src={img_sbb04_112ahCell} alt=""/>
            </div>
            <div className="pdTlsBack">
              <div className="pdTls">
                <table>
                  <thead>
                    <th colSpan="2">Item</th>
                    <th>R5-M037</th>
                  </thead>
                  <tbody>
                    <tr>
                      <th colSpan="2" className="tL">Component</th>
                      <th>Battery Module, BMS</th>
                    </tr>
                    <tr>
                      <th className="tL">Energy</th>
                      <td>kWh</td>
                      <td>3.74</td>
                    </tr>
                    <tr>
                      <th className="tL">Operation Voltage</th>
                      <td>V</td>
                      <td>84~114.8</td>
                    </tr>
                    <tr>
                      <th className="tL">Dimensions(WxDxH)</th>
                      <td>mm</td>
                      <td>382x375x84.6</td>
                    </tr>
                    <tr>
                      <th className="tL">Weight</th>
                      <td>kg</td>
                      <td>20.4</td>
                    </tr>
                    <tr>
                      <th className="tL">Operating Temperature</th>
                      <td>℃</td>
                      <td>-10~45</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="modalBtn">
            <button className="btnM white roundSty" onClick={closeModal02}> CLOSE </button>
            <button className="btnM black roundSty" onClick={closeModal02}> PDF DOWNLOAD </button>
          </div>
        </Modal>
      }
      {/* ==== dnd 팝업 ==== */}
    </div>
  )
}

export default R5;
