import React, { useState, useEffect, useRef } from 'react';
import Modal from '../../components/Modal';
import img_headUtilityCes01 from '../../assets/images/img_headUtilityCes01.png';
import img_utility_keyword01 from '../../assets/images/img_utility_keyword01.png';
import img_utility_keyword02 from '../../assets/images/img_utility_keyword02.png';
import img_utility_keyword03 from '../../assets/images/img_utility_keyword03.png';
import img_utility_newcell from '../../assets/images/img_utility_newcell.png';
import img_utility_lineup01 from '../../assets/images/img_utility_lineup01.png';
import img_utility_lineup02 from '../../assets/images/img_utility_lineup02.png';
import img_utility_lineup03 from '../../assets/images/img_utility_lineup03.png';
import img_utility_lineup01_detail from '../../assets/images/img_utility_lineup01_detail.png';
import img_utility_lineup02_detail from '../../assets/images/img_utility_lineup02_detail.png';
import img_utility_lineup03_detail from '../../assets/images/img_utility_lineup03_detail.png';
import img_utility01_product01 from '../../assets/images/img_utility01_product01.png';
import img_utility_advanced01 from '../../assets/images/img_utility_advanced01.png';
import img_utility_advanced02 from '../../assets/images/img_utility_advanced02.png';
import img_utility_energyplatform from '../../assets/images/img_utility_energyplatform.png';
import img_utility_energyplatform_cell from '../../assets/images/img_utility_energyplatform_cell.png';
import img_utility_energyplatform_cell_m from '../../assets/images/img_utility_energyplatform_cell_m.png';
import img_utility_energyplatform_module from '../../assets/images/img_utility_energyplatform_module.png';
import img_utility_energyplatform_module_m from '../../assets/images/img_utility_energyplatform_module_m.png';
import img_utility_energyplatform_rack from '../../assets/images/img_utility_energyplatform_rack.png';
import img_utility_energyplatform_rack_m from '../../assets/images/img_utility_energyplatform_rack_m.png';
import img_utility_energyplatform_sbb from '../../assets/images/img_utility_energyplatform_sbb.png';
import img_utility_energyplatform_sbb_m from '../../assets/images/img_utility_energyplatform_sbb_m.png';
import img_utility_mediumplatform_cell from '../../assets/images/img_utility_mediumplatform_cell.png';
import img_utility_mediumplatform_cell_m from '../../assets/images/img_utility_mediumplatform_cell_m.png';
import img_utility_mediumplatform_module from '../../assets/images/img_utility_mediumplatform_module.png';
import img_utility_mediumplatform_module_m from '../../assets/images/img_utility_mediumplatform_module_m.png';
import img_utility_mediumplatform_rack from '../../assets/images/img_utility_mediumplatform_rack.png';
import img_utility_mediumplatform_rack_m from '../../assets/images/img_utility_mediumplatform_rack_m.png';
import img_utility_powerplatform_cell from '../../assets/images/img_utility_powerplatform_cell.png';
import img_utility_powerplatform_cell_m from '../../assets/images/img_utility_powerplatform_cell_m.png';
import img_utility_powerplatform_module from '../../assets/images/img_utility_powerplatform_module.png';
import img_utility_powerplatform_module_m from '../../assets/images/img_utility_powerplatform_module_m.png';
import img_utility_powerplatform_rack from '../../assets/images/img_utility_powerplatform_rack.png';
import img_utility_powerplatform_rack_m from '../../assets/images/img_utility_powerplatform_rack_m.png';
import img_uc05_m from '../../assets/images/img_uc05_m.png';
import img_utility_mediumplatform from '../../assets/images/img_utility_mediumplatform.png';
import img_utility_mediumplatform_product02 from '../../assets/images/img_utility_mediumplatform_product02.png';
import img_utility_mediumplatform_product03 from '../../assets/images/img_utility_mediumplatform_product03.png';
import img_utility_advancedplatform from '../../assets/images/img_utility_advancedplatform.png';
import img_uc06_m from '../../assets/images/img_uc06_m.png';
import img_sbb04_112ahCell from '../../assets/images/img_sbb04_112ahCell.png';

const UtilityCes = (props) => {
  const cBox = useRef(null);

  useEffect(() => {
    sessionStorage.setItem('box', cBox.current.offsetTop);

    const wheelProc = (event)=>{
      if (window.pageYOffset<= cBox.current.offsetTop + event.wheelDelta ) {
        if (event.wheelDelta < 0) {
          window.scrollTo(0, cBox.current.offsetTop);
        } else {
          window.scrollTo(0, 0);
        }
      }
    };

    window.addEventListener('mousewheel', wheelProc);

    return () => {
      window.removeEventListener('mousewheel', wheelProc);
    }
  }, []);

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
  const [ modalOpen05, setModalOpen05 ] = useState(false);
  const openModal05 = () => {
      setModalOpen05(true);
  }
  const closeModal05 = () => {
      setModalOpen05(false);
      document.body.classList.remove('modalOpen');
  }
  const [ modalOpen06, setModalOpen06 ] = useState(false);
  const openModal06 = () => {
      setModalOpen06(true);
  }
  const closeModal06 = () => {
      setModalOpen06(false);
      document.body.classList.remove('modalOpen');
  }
  const [ modalOpen07, setModalOpen07 ] = useState(false);
  const openModal07 = () => {
      setModalOpen07(true);
  }
  const closeModal07 = () => {
      setModalOpen07(false);
      document.body.classList.remove('modalOpen');
  }
  const [ modalOpen08, setModalOpen08 ] = useState(false);
  const openModal08 = () => {
      setModalOpen08(true);
  }
  const closeModal08 = () => {
      setModalOpen08(false);
      document.body.classList.remove('modalOpen');
  }
  const [ modalOpen09, setModalOpen09 ] = useState(false);
  const openModal09 = () => {
      setModalOpen09(true);
  }
  const closeModal09 = () => {
      setModalOpen09(false);
      document.body.classList.remove('modalOpen');
  }
  const [ modalOpen10, setModalOpen10 ] = useState(false);
  const openModal10 = () => {
      setModalOpen10(true);
  }
  const closeModal10 = () => {
      setModalOpen10(false);
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
        <div className="utilityCesLayout">
          <article>
            <section className="headSection">
              <div className="imgBack">
                <img src={img_headUtilityCes01} alt="mainIntro" />
              </div>
              <div className="headCts shadow">
                <h2 data-aos="fade-up" data-aos-duration="1200">Utility & CES</h2>
                <div className="intro">
                  <strong data-aos="fade-in" data-aos-delay="100" data-aos-duration="1500">Battery Platform for Utility & Commercial ESS</strong>
                  <p data-aos="fade-in" data-aos-delay="300" data-aos-duration="1500">Optimized Battery Platforms Based on High-Density Design Technology</p>
                  <div className="keyword">
                    <ul>
                      <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">
                        <span className="kIcon"><img src={img_utility_keyword01} alt=""/></span>
                        <strong>Solar & wind Farm</strong>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
                        <span className="kIcon"><img src={img_utility_keyword02} alt=""/></span>
                        <strong>Grid (substation)</strong>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200">
                        <span className="kIcon"><img src={img_utility_keyword03} alt=""/></span>
                        <strong>Building, Factory</strong>
                      </li>
                    </ul>
                  </div>
                  <button className="btnScroll" onClick={ goClick }>Scroll Down</button>
                </div>
              </div>
            </section>
            <section className="ctsBox uc01" ref={cBox}>
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-duration="1200">Product Introduction : Line-up</h3>
              </div>
              <div className="ctsFrame">
                <div className="gridSet grid3">
                  <div className="gridItem" data-aos="fade-up" data-aos-delay="350" data-aos-duration="1200">
                    <div className="tls">
                      <table>
                        <thead>
                          <tr>
                            <th className="sky">Energy Platform</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="imgArea"><img src={img_utility_lineup01} alt=""/></td>
                          </tr>
                          <tr>
                            <td className="explainArea"><img src={img_utility_lineup01_detail} alt=""/></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="gridItem" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">
                    <div className="tls">
                      <table>
                        <thead>
                          <tr>
                            <th className="blue">Medium Platform</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="imgArea"><img src={img_utility_lineup02} alt=""/></td>
                          </tr>
                          <tr>
                            <td className="explainArea"><img src={img_utility_lineup02_detail} alt=""/></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="gridItem" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
                    <div className="tls">
                      <table>
                        <thead>
                          <tr>
                            <th className="indigo">Power Platform</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="imgArea"><img src={img_utility_lineup03} alt=""/></td>
                          </tr>
                          <tr>
                            <td className="explainArea"><img src={img_utility_lineup03_detail} alt=""/></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="productIntro">
                  <ul>
                    <li data-aos="fade-up" data-aos-delay="350" data-aos-duration="1200">
                      <div>
                        <strong>Energy Platform</strong>
                        <p>Over 10% Increase in Rack Energy Density by Using Advanced Modules,<br/>Higher Energy Density for Better Footprint and Installation Cost Savings</p>
                      </div>
                      <span className="thumbnail"><img src={img_utility01_product01} alt=""/></span>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
                      <div>
                        <strong>Medium Platform</strong>
                        <p>Unique Platform in the ESS Industry with Mid-range Capabilities,<br/>Optimized Solution for 1hour + of Grid Service,<br/>The Highest Lifetime Performance in a Continuous Charge/<br/>Discharge for Over 1hour</p>
                      </div>
                      <span className="thumbnail"><img src={img_utility01_product01} alt=""/></span>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="650" data-aos-duration="1200">
                      <div>
                        <strong>Power Platform</strong>
                        <p>High Power Platform for Less than 1 hour of Use,<br/>Optimized Solution for Power Applications such as<br/>F/R, Railway and Ship</p>
                      </div>
                      <span className="thumbnail"><img src={img_utility01_product01} alt=""/></span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="ctsBox uc02">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200">New Cell : 112Ah</h3>
                <small data-aos="fade-up" data-aos-delay="700" data-aos-duration="1200">New cell(112Ah) feature higher durability and<br/>built-in safety by using NCM in CAN type cells.</small>
              </div>
              <div className="ctsFrame">
                <div className="gridSet grid2">
                  <div className="gridItem tC" data-aos="fade-in" data-aos-delay="700" data-aos-duration="1200">
                    <img src={img_utility_newcell} alt=""/>
                  </div>
                  <div className="gridItem tR" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1200">
                    <strong>Appx.<br/>10% Energy density<br/>increase</strong>
                    <div className="subTls">
                      <table>
                        <colgroup>
                          <col width="120"/>
                          <col width="90"/>
                          <col width="90"/>
                        </colgroup>
                        <thead>
                          <tr>
                            <th>Classification</th>
                            <th className="tC">100Ah</th>
                            <th className="tC colLine">112Ah</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Cell Dimension <span className="mBreak">(mm, L x H x W)</span></td>
                            <td className="tC">173 x 125 x 45</td>
                            <td className="tC colLine">173 x 125 x 45</td>
                          </tr>
                          <tr>
                            <td>Energy Density (Wh/L)</td>
                            <td className="tC">378.1</td>
                            <td className="tC colLine"><strong className="orange">417.8</strong></td>
                          </tr>
                          <tr>
                            <td>Voltage (Nominal)</td>
                            <td className="tC">3.68</td>
                            <td className="tC colLine">3.63</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="ctsBox uc03">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-duration="1200">Advanced Technology</h3>
              </div>
              <div className="ctsFrame">
                <div className="advanced pcCase">
                  <div className="gridSet grid3">
                    <div className="gridItem" data-aos="fade-in" data-aos-delay="100" data-aos-duration="1200"><img src={img_utility_advanced01} alt=""/></div>
                    <div className="gridItem">
                      <div className="tech" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
                        <strong>Application of New 112Ah Cell</strong>
                        <p>NCM-rich Long Cycle Life<br/>Robust & Reliable Enclosure</p>
                      </div>
                      <div className="tech" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
                        <strong>Improved Energy Density</strong>
                        <p>10% improvement in Module<br/>19% improvement in Rack</p>
                      </div>
                    </div>
                    <div className="gridItem" data-aos="fade-in" data-aos-delay="100" data-aos-duration="1200"><img src={img_utility_advanced02} alt=""/></div>
                  </div>
                </div>
                <div className="advanced mCase">
                  <div className="advancedItem">
                    <div className="imgArea" data-aos="fade-in" data-aos-delay="100" data-aos-duration="1200"><img src={img_utility_advanced01} alt=""/></div>
                    <div className="tech" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
                      <strong>Application of New 112Ah Cell</strong>
                      <p>NCM-rich Long Cycle Life <span className="mBreak">Robust & Reliable Enclosure</span></p>
                    </div>
                  </div>
                  <div className="advancedItem">
                    <div className="tech" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
                      <strong>Improved <span className="mBreak">Energy Density</span></strong>
                      <p>10% improvement in Module <span className="mBreak">19% improvement in Rack</span></p>
                    </div>
                    <div className="imgArea" data-aos="fade-in" data-aos-delay="100" data-aos-duration="1200"><img src={img_utility_advanced02} alt=""/></div>
                  </div>
                </div>
              </div>
            </section>
            <section className="ctsBox uc04">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">Energy Platform Specification</h3>
              </div>
              <div className="platform energyPlatform productCts">
                <div className="platformBack productBg">
                  <img src={img_utility_energyplatform} alt=""/>
                </div>
                <div className="ctsFrame">
                  <div className="productList case4">
                    <ul>
                      <li data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200" onClick={openModal01}>{/* 2021-09-10 수정 */}
                        <strong>112Ah Cell</strong>
                        <img src={img_utility_energyplatform_cell} alt="112Ah Cell" className="pcCase"/>
                        <img src={img_utility_energyplatform_cell_m} alt="112Ah Cell" className="mCase"/>
                        <button className="btnMore">LEARN MORE</button>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200" onClick={openModal02}>{/* 2021-09-10 수정 */}
                        <strong>E4 Module</strong>
                        <img src={img_utility_energyplatform_module} alt="E4 Module" className="pcCase"/>
                        <img src={img_utility_energyplatform_module_m} alt="E4 Module" className="mCase"/>
                        <button className="btnMore">LEARN MORE</button>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="700" data-aos-duration="1200" onClick={openModal03}>{/* 2021-09-10 수정 */}
                        <strong>E4 Rack</strong>
                        <img src={img_utility_energyplatform_rack} alt="E4 Rack" className="pcCase"/>
                        <img src={img_utility_energyplatform_rack_m} alt="E4 Rack" className="mCase"/>
                        <button className="btnMore">LEARN MORE</button>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="800" data-aos-duration="1200" onClick={openModal04}>{/* 2021-09-10 수정 */}
                        <strong>SBB</strong>
                        <img src={img_utility_energyplatform_sbb} alt="SBB" className="pcCase"/>
                        <img src={img_utility_energyplatform_sbb_m} alt="SBB" className="mCase"/>
                        <button className="btnMore">LEARN MORE</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="ctsBox uc05">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-duration="1200">Medium Platform Specification</h3>
              </div>
              <div className="platform mediumPlatform productCts">
                <div className="platformBack productBg">
                  <img src={img_utility_mediumplatform} alt=""/>
                </div>
                <div className="ctsFrame">
                  <div className="productList">
                    <ul>
                      <li className="bgItem" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
                        <img src={img_uc05_m} alt=""/>
                      </li>
                      <li className="grayBg" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200" onClick={openModal05}>{/* 2021-09-10 수정 */}
                        <strong>112Ah Cell</strong>
                        <img src={img_utility_mediumplatform_cell} alt="112Ah Cell" className="pcCase"/>
                        <img src={img_utility_mediumplatform_cell_m} alt="112Ah Cell" className="mCase"/>
                        <button className="btnMore">LEARN MORE</button>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200" onClick={openModal06}>{/* 2021-09-10 수정 */}
                        <strong>M4 Module</strong>
                        <img src={img_utility_mediumplatform_module} alt="M4 Module" className="pcCase"/>
                        <img src={img_utility_mediumplatform_module_m} alt="M4 Module" className="mCase"/>
                        <button className="btnMore">LEARN MORE</button>
                      </li>
                      <li className="grayBg" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200" onClick={openModal07}>{/* 2021-09-10 수정 */}
                        <strong>M4 Rack</strong>
                        <img src={img_utility_mediumplatform_rack} alt="M4 Rack" className="pcCase"/>
                        <img src={img_utility_mediumplatform_rack_m} alt="M4 Rack" className="mCase"/>
                        <button className="btnMore">LEARN MORE</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="ctsBox uc06">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-duration="1200">Power Platform Specification</h3>
              </div>
              <div className="platform powerPlatform productCts">
                <div className="platformBack productBg">
                  <img src={img_utility_advancedplatform} alt=""/>
                </div>
                <div className="ctsFrame">
                  <div className="productList">
                    <ul>
                      <li className="bgItem" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
                        <img src={img_uc06_m} alt=""/>
                      </li>
                      <li className="grayBg" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200" onClick={openModal08}>{/* 2021-09-10 수정 */}
                        <strong>78Ah Cell</strong>
                        <img src={img_utility_powerplatform_cell} alt="78Ah Cell" className="pcCase"/>
                        <img src={img_utility_powerplatform_cell_m} alt="78Ah Cell" className="mCase"/>
                        <button className="btnMore">LEARN MORE</button>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="700" data-aos-duration="1200" onClick={openModal09}>{/* 2021-09-10 수정 */}
                        <strong>P3A Module</strong>
                        <img src={img_utility_powerplatform_module} alt="P3A Module" className="pcCase"/>
                        <img src={img_utility_powerplatform_module_m} alt="P3A Module" className="mCase"/>
                        <button className="btnMore">LEARN MORE</button>
                      </li>
                      <li className="grayBg" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1200" onClick={openModal10}>{/* 2021-09-10 수정 */}
                        <strong>P3A Rack</strong>
                        <img src={img_utility_powerplatform_rack} alt="P3A Rack" className="pcCase"/>
                        <img src={img_utility_powerplatform_rack_m} alt="P3A Rack" className="mCase"/>
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
        <Modal open={ modalOpen01 } close={ closeModal01 } header="112Ah Cell" keyclassName="productPop solutionCase1">
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
                      <th>Dimension(LxHxW) (excluding terminals)</th>
                      <td>mm</td>
                      <td>173 x 125 x 45</td>
                    </tr>
                    <tr>
                      <th>Weight</th>
                      <td>g</td>
                      <td>2,150</td>
                    </tr>
                    <tr>
                      <th>Capacity</th>
                      <td>Ah</td>
                      <td>112</td>
                    </tr>
                    <tr>
                      <th>Design Energy (nominal)</th>
                      <td>Wh</td>
                      <td>406.6</td>
                    </tr>
                    <tr>
                      <th>Energy Density (gravimetric)</th>
                      <td>Wh/kg</td>
                      <td>189.1</td>
                    </tr>
                    <tr>
                      <th>Energy Density (volumetric)</th>
                      <td>Wh/L</td>
                      <td>417.8</td>
                    </tr>
                    <tr>
                      <th>Voltage Max</th>
                      <td>V</td>
                      <td>4.1</td>
                    </tr>
                    <tr>
                      <th>Voltage Nominal</th>
                      <td>V</td>
                      <td>3.63</td>
                    </tr>
                    <tr>
                      <th>Voltage Min</th>
                      <td>V</td>
                      <td>3</td>
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
        <Modal open={ modalOpen02 } close={ closeModal02 } header="E4 Module" keyclassName="productPop solutionCase1">
          <div className="productDetail">
            <div className="pdImage">
              <img src={img_sbb04_112ahCell} alt=""/>
            </div>
            <div className="pdTlsBack">
              <div className="pdTls">
                <table>
                  <thead>
                    <th colSpan="2">Item</th>
                    <th colSpan="3">Module</th>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="tL" colSpan="2">Type</th>
                      <th>STANDARD</th>
                      <th>LONG</th>
                      <th>DOUBLE-DEEP</th>
                    </tr>
                    <tr>
                      <th className="tL" colSpan="2">Model</th>
                      <td>E4-M098</td>
                      <td>E4-M130</td>
                      <td>E4-M195</td>
                    </tr>
                    <tr>
                      <th className="tL">Cell<span className="mBreakForce">Capacity</span></th>
                      <td>Ah</td>
                      <td>112</td>
                      <td>112</td>
                      <td>112</td>
                    </tr>
                    <tr>
                      <th className="tL">Energy</th>
                      <td>kWh</td>
                      <td>9.8</td>
                      <td>13.0</td>
                      <td>19.5</td>
                    </tr>
                    <tr>
                      <th className="tL">Operation<span className="mBreakForce">Voltage</span></th>
                      <td>V</td>
                      <td>37.2~49.2</td>
                      <td>49.6~65.6</td>
                      <td>74.4~98.4</td>
                    </tr>
                    <tr>
                      <th className="tL">Dimensions<span className="mBreakForce">(WxDxH)</span></th>
                      <td>mm</td>
                      <td>370x637x160</td>
                      <td>377x868.5x158</td>
                      <td>377x1267.7x158</td>
                    </tr>
                    <tr>
                      <th className="tL">Weight</th>
                      <td>kg</td>
                      <td>57</td>
                      <td>85</td>
                      <td>120</td>
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
        <Modal open={ modalOpen03 } close={ closeModal03 } header="E4 Rack" keyclassName="productPop solutionCase1">
          <div className="productDetail">
            <div className="pdImage">
              <img src={img_sbb04_112ahCell} alt=""/>
            </div>
            <div className="pdTlsBack">
              <div className="pdTls">
                <table>
                  <thead>
                    <th colSpan="2">Item</th>
                    <th colSpan="3">Rack</th>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="tL" colSpan="2">Type</th>
                      <th>STANDARD</th>
                      <th>LONG</th>
                      <th>DOUBLE-DEEP</th>
                    </tr>
                    <tr>
                      <th className="tL" colSpan="2">Model</th>
                      <td>E4-M098</td>
                      <td>E4-M130</td>
                      <td>E4-M195</td>
                    </tr>
                    <tr>
                      <th className="tL">Cell Capacity</th>
                      <td>Ah</td>
                      <td>112</td>
                      <td>112</td>
                      <td>112</td>
                    </tr>
                    <tr>
                      <th className="tL">Energy</th>
                      <td>kWh</td>
                      <td>244</td>
                      <td>256</td>
                      <td>234</td>
                    </tr>
                    <tr>
                      <th className="tL">Operation Voltage </th>
                      <td>V</td>
                      <td>930~1230</td>
                      <td>595~787</td>
                      <td>893~1181</td>
                    </tr>
                    <tr>
                      <th className="tL">Dimensions(WxDxH)</th>
                      <td>mm</td>
                      <td>876x711x2327</td>
                      <td>465x975x2323</td>
                      <td>465x1373.2x2270</td>
                    </tr>
                    <tr>
                      <th className="tL">Weight</th>
                      <td>kg</td>
                      <td>1520</td>
                      <td>1320</td>
                      <td>1643</td>
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
        <Modal open={ modalOpen04 } close={ closeModal04 } header="SBB" keyclassName="productPop solutionCase1">
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
                      <th className="tL" rowSpan="6">Battery</th>
                      <td>Design Energy</td>
                      <td>kWh</td>
                      <td>2185.7</td>
                    </tr>
                    <tr>
                      <td>Configuration</td>
                      <td>-</td>
                      <td>2P 336S 8Racks</td>
                    </tr>
                    <tr>
                      <td>DC Volt, Max.</td>
                      <td>VDC</td>
                      <td>1377.6</td>
                    </tr>
                    <tr>
                      <td>DC Volt, Nominal</td>
                      <td>VDC</td>
                      <td>1219.7</td>
                    </tr>
                    <tr>
                      <td>DC Volt, Min.</td>
                      <td>VDC</td>
                      <td>1041.6</td>
                    </tr>
                    <tr>
                      <td>Rated Power</td>
                      <td>kW</td>
                      <td>1092.8(0.5C)</td>
                    </tr>
                    <tr>
                      <th className="tL" rowSpan="13">Enclosure</th>
                      <td>Dimension[L x D x H]</td>
                      <td>M</td>
                      <td>6.45 x 1.94 x 2.20</td>
                    </tr>
                    <tr>
                      <td>Weight</td>
                      <td>kg</td>
                      <td>21,000(incl. batteries)</td>
                    </tr>
                    <tr>
                      <td>Degree of Protection</td>
                      <td>-</td>
                      <td>IP54(NEMA 3R)</td>
                    </tr>
                    <tr>
                      <td>Operating Amb. Temp.</td>
                      <td>°C</td>
                      <td>-30 ~ 50</td>
                    </tr>
                    <tr>
                      <td>Operating Batt. Tem.</td>
                      <td>°C</td>
                      <td>23 ± 5</td>
                    </tr>
                    <tr>
                      <td>Marine Environmental Rating</td>
                      <td></td>
                      <td>C4</td>
                    </tr>
                    <tr>
                      <td>Seismic Rating</td>
                      <td>-</td>
                      <td>Zone 4</td>
                    </tr>
                    <tr>
                      <td>Fire Rating</td>
                      <td>-</td>
                      <td>1 Hr (Optional)</td>
                    </tr>
                    <tr>
                      <td>Operating Altitude</td>
                      <td>-</td>
                      <td>Less than 2,000</td>
                    </tr>
                    <tr>
                      <td>Active Venting System</td>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Gas Detection System</td>
                      <td>-</td>
                      <td>Yes(H2, CO)</td>
                    </tr>
                    <tr>
                      <td>Emergency Stop</td>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Door Sensor</td>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <th className="tL">HVAC</th>
                      <td>HVAC</td>
                      <td>kW</td>
                      <td>10kW x 4</td>
                    </tr>
                    <tr>
                      <th className="tL" rowSpan="5">FSS</th>
                      <td>Fire Safety System</td>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Heat Detector</td>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Smoke Detector</td>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Horn</td>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Strobe</td>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <th className="tL" rowSpan="4">DC Panel</th>
                      <td>DC Disconnect</td>
                      <td>-</td>
                      <td>Yes(1500V 1600A)</td>
                    </tr>
                    <tr>
                      <td>UVT</td>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>SPD</td>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Surge Counter</td>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <th className="tL" rowSpan="4">AC Panel</th>
                      <td>AC Main Breaker</td>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>SPD</td>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>MCCB</td>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>SMPS</td>
                      <td>-</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <th className="tL">Compliance</th>
                      <td>UL1973 / UL9540A / UL9540 NFPA855</td>
                      <td></td>
                      <td>Yes</td>
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
      {modalOpen05 &&
        <Modal open={ modalOpen05 } close={ closeModal05 } header="112Ah Cell" keyclassName="productPop solutionCase2">
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
                      <th className="tL">Dimension(LxHxW)<br/>(excluding terminals)</th>
                      <td>mm</td>
                      <td>173 x 125 x 45</td>
                    </tr>
                    <tr>
                      <th className="tL">Weight</th>
                      <td>g</td>
                      <td>2,150</td>
                    </tr>
                    <tr>
                      <th className="tL">Capacity</th>
                      <td>Ah</td>
                      <td>112</td>
                    </tr>
                    <tr>
                      <th className="tL">Design Energy<br/>(nominal)</th>
                      <td>Wh</td>
                      <td>406.6</td>
                    </tr>
                    <tr>
                      <th className="tL">Energy Density<br/>(gravimetric)</th>
                      <td>Wh/kg</td>
                      <td>189.1</td>
                    </tr>
                    <tr>
                      <th className="tL">Energy Density<br/>(volumetric)</th>
                      <td>Wh/L</td>
                      <td>417.8</td>
                    </tr>
                    <tr>
                      <th className="tL">Voltage Max</th>
                      <td>V</td>
                      <td>4.1</td>
                    </tr>
                    <tr>
                      <th className="tL">Voltage Nominal</th>
                      <td>V</td>
                      <td>3.63</td>
                    </tr>
                    <tr>
                      <th className="tL">Voltage Min</th>
                      <td>V</td>
                      <td>3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="modalBtn">
            <button className="btnM white roundSty" onClick={closeModal05}> CLOSE </button>
            <button className="btnM black roundSty" onClick={closeModal05}> PDF DOWNLOAD </button>
          </div>
        </Modal>
      }
      {modalOpen06 &&
        <Modal open={ modalOpen06 } close={ closeModal06 } header="M4 Module" keyclassName="productPop solutionCase2">
          <div className="productDetail">
            <div className="pdImage">
              <img src={img_sbb04_112ahCell} alt=""/>
            </div>
            <div className="pdTlsBack">
              <div className="pdTls">
                <table>
                  <thead>
                    <th colSpan="2">Item</th>
                    <th>Module</th>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="tL" colSpan="2">Model</th>
                      <th>M4-M089</th>
                    </tr>
                    <tr>
                      <th className="tL">Cell Capacity</th>
                      <td>Ah</td>
                      <td>112</td>
                    </tr>
                    <tr>
                      <th className="tL">Energy</th>
                      <td>kWh</td>
                      <td>8.9</td>
                    </tr>
                    <tr>
                      <th className="tL">Operation Voltage</th>
                      <td>V</td>
                      <td>68.2~90.2</td>
                    </tr>
                    <tr>
                      <th className="tL">Dimensions(WxDxH)</th>
                      <td>mm</td>
                      <td>370 x 651 x 160</td>
                    </tr>
                    <tr>
                      <th className="tL">Weight</th>
                      <td>kg</td>
                      <td>56</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="modalBtn">
            <button className="btnM white roundSty" onClick={closeModal06}> CLOSE </button>
            <button className="btnM black roundSty" onClick={closeModal06}> PDF DOWNLOAD </button>
          </div>
        </Modal>
      }
      {modalOpen07 &&
        <Modal open={ modalOpen07 } close={ closeModal07 } header="M4 Rack" keyclassName="productPop solutionCase2">
          <div className="productDetail">
            <div className="pdImage">
              <img src={img_sbb04_112ahCell} alt=""/>
            </div>
            <div className="pdTlsBack">
              <div className="pdTls">
                <table>
                  <thead>
                    <th colSpan="2">Item</th>
                    <th colSpan="3">Rack</th>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="tL" colSpan="2">Model</th>
                      <th>M4-R080</th>
                      <th>M4-R098</th>
                      <th>M4-R107</th>
                    </tr>
                    <tr>
                      <th className="tL">Cell Capacity</th>
                      <td>Ah</td>
                      <td>112</td>
                      <td>112</td>
                      <td>112</td>
                    </tr>
                    <tr>
                      <th className="tL">Energy</th>
                      <td>kWh</td>
                      <td>80</td>
                      <td>80</td>
                      <td>107</td>
                    </tr>
                    <tr>
                      <th className="tL">Operation Voltage</th>
                      <td>V</td>
                      <td>614~812</td>
                      <td>750~992</td>
                      <td>818~1082</td>
                    </tr>
                    <tr>
                      <th className="tL">Dimensions(WxDxH)</th>
                      <td>mm</td>
                      <td>438x711x1821</td>
                      <td>438x711x2158</td>
                      <td>438x711x2327</td>
                    </tr>
                    <tr>
                      <th className="tL">Weight</th>
                      <td>kg</td>
                      <td>582</td>
                      <td>701</td>
                      <td>760</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="modalBtn">
            <button className="btnM white roundSty" onClick={closeModal07}> CLOSE </button>
            <button className="btnM black roundSty" onClick={closeModal07}> PDF DOWNLOAD </button>
          </div>
        </Modal>
      }
      {modalOpen08 &&
        <Modal open={ modalOpen08 } close={ closeModal08 } header="78Ah Cell" keyclassName="productPop bottomCase">
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
                      <td>2100</td>
                    </tr>
                    <tr>
                      <th className="tL">Capacity</th>
                      <td>Ah</td>
                      <td>78</td>
                    </tr>
                    <tr>
                      <th className="tL">Design Energy (nominal)</th>
                      <td>Wh</td>
                      <td>288.6</td>
                    </tr>
                    <tr>
                      <th className="tL">Energy Density (gravimetric)</th>
                      <td>Wh/kg</td>
                      <td>215.8</td>
                    </tr>
                    <tr>
                      <th className="tL">Energy Density (volumetric)</th>
                      <td>Wh/L</td>
                      <td>296.6</td>
                    </tr>
                    <tr>
                      <th className="tL">Voltage Max</th>
                      <td>V</td>
                      <td>4.1</td>
                    </tr>
                    <tr>
                      <th className="tL">Voltage Nominal</th>
                      <td>V</td>
                      <td>3.7</td>
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
            <button className="btnM white roundSty" onClick={closeModal08}> CLOSE </button>
            <button className="btnM black roundSty" onClick={closeModal08}> PDF DOWNLOAD </button>
          </div>
        </Modal>
      }
      {modalOpen09 &&
        <Modal open={ modalOpen09 } close={ closeModal09 } header="P3A Module" keyclassName="productPop bottomCase">
          <div className="productDetail">
            <div className="pdImage">
              <img src={img_sbb04_112ahCell} alt=""/>
            </div>
            <div className="pdTlsBack">
              <div className="pdTls">
                <table>
                  <thead>
                    <th colSpan="2">Item</th>
                    <th>Module</th>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="tL" colSpan="2">Model</th>
                      <th>P3-M063</th>
                    </tr>
                    <tr>
                      <th className="tL">Cell Capacity</th>
                      <td>Ah</td>
                      <td>78</td>
                    </tr>
                    <tr>
                      <th className="tL">Energy</th>
                      <td>kWh</td>
                      <td>6.3</td>
                    </tr>
                    <tr>
                      <th className="tL">Operation Voltage </th>
                      <td>V</td>
                      <td>68.2~90.2</td>
                    </tr>
                    <tr>
                      <th className="tL">Dimensions(WxDxH)</th>
                      <td>mm</td>
                      <td>370 x 650 x 160</td>
                    </tr>
                    <tr>
                      <th className="tL">Weight</th>
                      <td>kg</td>
                      <td>54</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="modalBtn">
            <button className="btnM white roundSty" onClick={closeModal09}> CLOSE </button>
            <button className="btnM black roundSty" onClick={closeModal09}> PDF DOWNLOAD </button>
          </div>
        </Modal>
      }
      {modalOpen10 &&
        <Modal open={ modalOpen10 } close={ closeModal10 } header="P3A Rack" keyclassName="productPop bottomCase">
          <div className="productDetail">
            <div className="pdImage">
              <img src={img_sbb04_112ahCell} alt=""/>
            </div>
            <div className="pdTlsBack">
              <div className="pdTls">
                <table>
                  <thead>
                    <th colSpan="2">Item</th>
                    <th colSpan="3">Rack</th>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="tL" colSpan="2">Model</th>
                      <th>P3-R056</th>
                      <th>P3-R070</th>
                      <th>P3-R076</th>
                    </tr>
                    <tr>
                      <th className="tL">Cell Capacity</th>
                      <td>Ah</td>
                      <td>78</td>
                      <td>78</td>
                      <td>78</td>
                    </tr>
                    <tr>
                      <th className="tL">Energy</th>
                      <td>kWh</td>
                      <td>57</td>
                      <td>70</td>
                      <td>76</td>
                    </tr>
                    <tr>
                      <th className="tL">Operation Voltage </th>
                      <td>V</td>
                      <td>614~812</td>
                      <td>750~992</td>
                      <td>818~1082</td>
                    </tr>
                    <tr>
                      <th className="tL">Dimensions(WxDxH)</th>
                      <td>mm</td>
                      <td>438x711x1791</td>
                      <td>438x711x2122</td>
                      <td>438x711x2288</td>
                    </tr>
                    <tr>
                      <th className="tL">Weight</th>
                      <td>kg</td>
                      <td>544</td>
                      <td>659</td>
                      <td>716</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="modalBtn">
            <button className="btnM white roundSty" onClick={closeModal10}> CLOSE </button>
            <button className="btnM black roundSty" onClick={closeModal10}> PDF DOWNLOAD </button>
          </div>
        </Modal>
      }
      {/* ==== dnd 팝업 ==== */}
    </div>
  )
}

export default UtilityCes;
