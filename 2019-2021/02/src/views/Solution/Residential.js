import React, { useState, useEffect, useRef } from 'react';
import Modal from '../../components/Modal';
import img_headResidential01 from '../../assets/images/img_headResidential01.png';
import img_utility_keyword01 from '../../assets/images/img_utility_keyword01.png';
import img_residential01 from '../../assets/images/img_residential01.png';
import img_residential01_m from '../../assets/images/img_residential01_m.png';
import img_residential04 from '../../assets/images/img_residential04.png';
import img_residential05 from '../../assets/images/img_residential05.png';
import img_residential02_key01 from '../../assets/images/img_residential02_key01.png';
import img_residential02_key02 from '../../assets/images/img_residential02_key02.png';
import img_residential02_key03 from '../../assets/images/img_residential02_key03.png';
import img_residential02_key04 from '../../assets/images/img_residential02_key04.png';
import img_residential02_key05 from '../../assets/images/img_residential02_key05.png';
import img_residential03_48v from '../../assets/images/img_residential03_48v.png';
import img_residential03_hvs from '../../assets/images/img_residential03_hvs.png';
import img_residential04_48v_cell from '../../assets/images/img_residential04_48v_cell.png';
import img_residential04_48v_cell_m from '../../assets/images/img_residential04_48v_cell_m.png';
import img_residential04_48v_module from '../../assets/images/img_residential04_48v_module.png';
import img_residential04_48v_module_m from '../../assets/images/img_residential04_48v_module_m.png';
import img_residential05_hvs_cell from '../../assets/images/img_residential05_hvs_cell.png';
import img_residential05_hvs_cell_m from '../../assets/images/img_residential05_hvs_cell_m.png';
import img_residential05_hvs_module from '../../assets/images/img_residential05_hvs_module.png';
import img_residential05_hvs_module_m from '../../assets/images/img_residential05_hvs_module_m.png';
import img_ups02_video from '../../assets/images/img_ups02_video.png';
import img_ups03_specification from '../../assets/images/img_ups03_specification.png';
import img_sbb04_112ahCell from '../../assets/images/img_sbb04_112ahCell.png';

const Risidential = (props) => {
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
  const [ modalOpen03, setModalOpen03 ] = useState(false);
  const openModal03 = () => {
      setModalOpen03(true);
  }
  const closeModal03 = () => {
      setModalOpen03(false);
      document.body.classList.remove('modalOpen');
  }
  const [ modalOpen04, setModalOpen04 ] = useState(false);
  const openModal04 = () => {
      setModalOpen04(true);
  }
  const closeModal04 = () => {
      setModalOpen04(false);
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
        <div className="risidentialLayout">
          <article>
            <section className="headSection">
              <div className="imgBack">
                <img src={img_headResidential01} alt="mainIntro" />
              </div>
              <div className="headCts shadow">
                <h2 data-aos="fade-up" data-aos-duration="1200">Residential</h2>
                <div className="intro">
                  <strong data-aos="fade-in" data-aos-delay="100" data-aos-duration="1500">Residential ESS</strong>
                  <p data-aos="fade-in" data-aos-delay="300" data-aos-duration="1500">Flexible Energy Usage in Smart Homes</p>
                  <div className="keyword">
                    <ul>
                      <li data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200">
                        <span className="kIcon"><img src={img_utility_keyword01} alt=""/></span>
                        <strong>PV Home</strong>
                      </li>
                    </ul>
                  </div>
                  <button className="btnScroll" onClick={ goClick }>Scroll Down</button>
                </div>
              </div>
            </section>
            <section className="ctsBox residential01" ref={cBox}>
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">Flexible Energy Usage in<br/>Smart Homes</h3>
              </div>
              <div className="ctsFrame" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
                <img src={img_residential01} className="pcCase" alt=""/>
                <img src={img_residential01_m} className="mCase" alt=""/>
              </div>
            </section>
            <section className="ctsBox residential02">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">Key Features</h3>
              </div>
              <div className="ctsFrame">
                <div className="resFeature">
                  <div className="gridSet grid2">
                    <div className="gridItem" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
                      <div className="featureIcon"><img src={img_residential02_key01} alt=""/></div>
                      <strong>Advanced Cell Technology</strong>
                      <p>High Capacity and Long Cycle Life</p>
                    </div>
                    <div className="gridItem" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">
                      <div className="featureIcon"><img src={img_residential02_key02} alt=""/></div>
                      <strong>Standard Module</strong>
                      <p>Standard Module for Various Customer Needs</p>
                    </div>
                  </div>
                  <div className="gridSet grid3">
                    <div className="gridItem" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
                      <span className="featureIcon"><img src={img_residential02_key03} alt=""/></span>
                      <strong>Easy Installation</strong>
                      <p>Easy Installation with Simple Module Structure</p>
                    </div>
                    <div className="gridItem" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200">
                      <span className="featureIcon"><img src={img_residential02_key04} alt=""/></span>
                      <strong>Scalability</strong>
                      <p>Easy to Expand Capacity</p>
                    </div>
                    <div className="gridItem" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1200">
                      <span className="featureIcon"><img src={img_residential02_key05} alt=""/></span>
                      <strong>Compatibility</strong>
                      <p>Compatible with Various Standard Inverters*<br/><span className="fBlue">* for residential SMPS</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="ctsBox residential03">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200">Product Line-up</h3>
              </div>
              <div className="ctsFrame">
                <div className="resProduct">
                  <div className="gridSet grid2">
                    <div className="gridItem" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">
                      <div className="resImg"><img src={img_residential03_hvs} alt=""/></div>
                      <strong>HVS Solution</strong>
                      <p>• Advanced 21700 Cylindrical Cell<br/>• High Conversion Efficiency (DC to AC).<br/>• Optimized for High Voltage PCS<br/>• Lightweight for Easy Handling<br/>• Compact Design</p>
                    </div>
                    <div className="gridItem" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
                      <div className="resImg"><img src={img_residential03_48v} alt=""/></div>
                      <strong>48V Solution</strong>
                      <p>• High Energy 94Ah Prismatic Cell<br/>• High Energy Density & Long Cycle Life<br/>• Available up to 1C-rate<br/>• Fits on 19 inch Standard Rack<br/>• Wide Temperature Range</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="ctsBox residential04">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">48V Solution Specification</h3>
              </div>
              <div className="platform productCts">
                <div className="platformBack productBg">
                  <img src={img_residential04} alt=""/>
                </div>
                <div className="ctsFrame">
                  <div className="productList">
                    <ul>
                      <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
                        <strong>94Ah Cell</strong>
                        <img src={img_residential04_48v_cell} alt="94Ah Cell" className="pcCase"/>
                        <img src={img_residential04_48v_cell_m} alt="94Ah Cell" className="mCase"/>
                        <button className="btnMore" onClick={openModal01}>LEARN MORE</button>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">
                        <strong>R1 Module</strong>
                        <img src={img_residential04_48v_module} alt="R1 Module" className="pcCase"/>
                        <img src={img_residential04_48v_module_m} alt="R1 Module" className="mCase"/>
                        <button className="btnMore" onClick={openModal02}>LEARN MORE</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="ctsBox residential05">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">HVS Solution Specification</h3>
              </div>
              <div className="platform productCts">
                <div className="platformBack productBg">
                  <img src={img_residential05} alt=""/>
                </div>
                <div className="ctsFrame">
                  <div className="productList">
                    <ul>
                      <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
                        <strong>5.0Ah Cell</strong>
                        <img src={img_residential05_hvs_cell} alt="5.0Ah Cell" className="pcCase"/>
                        <img src={img_residential05_hvs_cell_m} alt="5.0Ah Cell" className="mCase"/>
                        <button className="btnMore" onClick={openModal03}>LEARN MORE</button>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">
                        <strong>R5 Module</strong>
                        <img src={img_residential05_hvs_module} alt="R5 Module" className="pcCase"/>
                        <img src={img_residential05_hvs_module_m} alt="R5 Module" className="mCase"/>
                        <button className="btnMore" onClick={openModal04}>LEARN MORE</button>
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
        <Modal open={ modalOpen01 } close={ closeModal01 } header="5.0Ah Cell" keyclassName="productPop solutionCase3">
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
                      <td>Nameplate (4.2V, 0.5C/0.2C, 2.75V)</td>
                      <td>Min 4800mAh</td>
                    </tr>
                    <tr>
                      <td>ESS Standard (4.1V., 0.33C/0.2C, 3V)</td>
                      <td>Min 4060mAh</td>
                    </tr>
                    <tr>
                      <th colSpan="2" className="tL">Cycle Life</th>
                      <td>4000cycles<br/>≥70% of the initial capacity</td>
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
        <Modal open={ modalOpen02 } close={ closeModal02 } header="R5 Module" keyclassName="productPop solutionCase3">
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
      {modalOpen03 &&
        <Modal open={ modalOpen03 } close={ closeModal03 } header="94Ah Cell" keyclassName="productPop solutionCase4">
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
                      <th className="tL">Dimension(LxHxW) (excluding terminals)</th>
                      <td>mm</td>
                      <td>173 x 125 x 45</td>
                    </tr>
                    <tr>
                      <th className="tL">Weight</th>
                      <td>g</td>
                      <td>2,100</td>
                    </tr>
                    <tr>
                      <th className="tL">Capacity</th>
                      <td>Ah</td>
                      <td>94</td>
                    </tr>
                    <tr>
                      <th className="tL">Design Energy (nominal)</th>
                      <td>Wh</td>
                      <td>345.9</td>
                    </tr>
                    <tr>
                      <th className="tL">Energy Density (gravimetric)</th>
                      <td>Wh/kg</td>
                      <td>164.7</td>
                    </tr>
                    <tr>
                      <th className="tL">Energy Density (volumetric)</th>
                      <td>Wh/L</td>
                      <td>355.5</td>
                    </tr>
                    <tr>
                      <th className="tL">Voltage Max</th>
                      <td>V</td>
                      <td>4.15</td>
                    </tr>
                    <tr>
                      <th className="tL">Voltage Nominal</th>
                      <td>V</td>
                      <td>3.68</td>
                    </tr>
                    <tr>
                      <th className="tL">Voltage Min</th>
                      <td>V</td>
                      <td>2.7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="modalBtn">
            <button className="btnM white roundSty" onClick={closeModal03}> CLOSE </button>
            <button className="btnM black roundSty" onClick={closeModal03}> PDF DOWNLOAD </button>
          </div>
        </Modal>
      }
      {modalOpen04 &&
        <Modal open={ modalOpen04 } close={ closeModal04 } header="R1 Module" keyclassName="productPop solutionCase4">
          <div className="productDetail">
            <div className="pdImage">
              <img src={img_sbb04_112ahCell} alt=""/>
            </div>
            <div className="pdTlsBack">
              <div className="pdTls">
                <table>
                  <thead>
                    <th colSpan="2">Item</th>
                    <th>R1-M048</th>
                  </thead>
                  <tbody>
                    <tr>
                      <th colSpan="2" className="tL">Component</th>
                      <th>Battery Module, BMS</th>
                    </tr>
                    <tr>
                      <th className="tL">Energy</th>
                      <td>kWh</td>
                      <td>4.8</td>
                    </tr>
                    <tr>
                      <th className="tL">Operation Voltage</th>
                      <td>V</td>
                      <td>44.8~58.1</td>
                    </tr>
                    <tr>
                      <th className="tL">Dimensions(WxDxH)</th>
                      <td>mm</td>
                      <td>446x440x158</td>
                    </tr>
                    <tr>
                      <th className="tL">Weight</th>
                      <td>kg</td>
                      <td>35</td>
                    </tr>
                    <tr>
                      <th className="tL">Operating Temperature</th>
                      <td>℃</td>
                      <td>-10~50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="modalBtn">
            <button className="btnM white roundSty" onClick={closeModal04}> CLOSE </button>
            <button className="btnM black roundSty" onClick={closeModal04}> PDF DOWNLOAD </button>
          </div>
        </Modal>
      }
      {/* ==== dnd 팝업 ==== */}
    </div>
  )
}

export default Risidential;
