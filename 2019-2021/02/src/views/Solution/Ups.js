import React, { useState, useEffect, useRef } from 'react';
import Modal from '../../components/Modal';
import img_headUps01 from '../../assets/images/img_headUps01.png';
import img_ups_keyword01 from '../../assets/images/img_ups_keyword01.png';
import img_utility_keyword03 from '../../assets/images/img_utility_keyword03.png';
import img_ups02_video from '../../assets/images/img_ups02_video.png';
import img_ups03_specification from '../../assets/images/img_ups03_specification.png';
import img_utility_mediumplatform_m from '../../assets/images/img_utility_mediumplatform_m.png';
import img_ups03_cell from '../../assets/images/img_ups03_cell.png';
import img_ups03_module from '../../assets/images/img_ups03_module.png';
import img_ups03_rack from '../../assets/images/img_ups03_rack.png';
import img_ups03_cell_m from '../../assets/images/img_ups03_cell_m.png';
import img_ups03_module_m from '../../assets/images/img_ups03_module_m.png';
import img_ups03_rack_m from '../../assets/images/img_ups03_rack_m.png';
import img_sbb04_112ahCell from '../../assets/images/img_sbb04_112ahCell.png';

const Ups = (props) => {
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
  const goClick = () => {
    window.scrollTo(0, cBox.current.offsetTop);
	}
  const gnbInt = () =>  {
    document.querySelector('#headerWrap').classList.remove('darkCase');
  };


  return (
    <div load={gnbInt()}>
      <div className="contents">
        <div className="upsLayout">
          <article>
            <section className="headSection">
              <div className="imgBack">
                <img src={img_headUps01} alt="mainIntro" />
              </div>
              <div className="headCts shadow">
                <h2 data-aos="fade-up" data-aos-duration="1200">UPS</h2>
                <div className="intro">
                  <strong data-aos="fade-in" data-aos-delay="100" data-aos-duration="1500">Batteries for Uninterruptible Power Supply</strong>
                  <p data-aos="fade-in" data-aos-delay="300" data-aos-duration="1500">Proven High-Voltage LIB Solutions Compatible with Premium UPS</p>
                  <div className="keyword">
                    <ul>
                      <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">
                        <span className="kIcon"><img src={img_ups_keyword01} alt=""/></span>
                        <strong>Data Center</strong>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
                        <span className="kIcon"><img src={img_utility_keyword03} alt=""/></span>
                        <strong>Building, Factory</strong>
                      </li>
                    </ul>
                  </div>
                  <button className="btnScroll" onClick={ goClick }>Scroll Down</button>
                </div>
              </div>
            </section>
            <section className="ctsBox ups01" ref={cBox}>
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">UPS Solution</h3>
                <small data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
                • Top-performing 10-minute Backup Battery Solution<br/>• Batteries compatible with Global UPS Solutions<br/>• Global Reference to IDC and Factory with over 8 years of Operation<br/>• Proven Safety & Quality
                </small>
              </div>
              <div className="ctsFrame">
                <div className="upsSolution">
                  <strong data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">10min Solution</strong>
                  <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">6C power</span>
                </div>
              </div>
            </section>
            <section className="ctsBox ups02">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-delay="700" data-aos-duration="1200">Introduction of UPS Solution</h3>
              </div>
              <div className="ctsFrame">
                <div className="videoBack">
                  <img src={img_ups02_video} alt=""/>
                </div>
              </div>
            </section>
            <section className="ctsBox ups03">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200">UPS Solution Specification</h3>
              </div>
              <div className="platform productCts">
                <div className="platformBack productBg">
                  <img src={img_ups03_specification} alt=""/>
                </div>
                <div className="ctsFrame">
                  <div className="productList">
                    <ul>
                      <li className="bgItem" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
                        <img src={img_utility_mediumplatform_m} alt=""/>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" onClick={openModal01}>{/* 2021-09-10 수정 */}
                        <strong>67Ah Cell</strong>
                        <img src={img_ups03_cell} alt="67Ah Cell" className="pcCase"/>
                        <img src={img_ups03_cell_m} alt="67Ah Cell" className="mCase"/>
                        <button className="btnMore">LEARN MORE</button>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" onClick={openModal02}>{/* 2021-09-10 수정 */}
                        <strong>U6 Module</strong>
                        <img src={img_ups03_module} alt="U6 Module" className="pcCase"/>
                        <img src={img_ups03_module_m} alt="U6 Module" className="mCase"/>
                        <button className="btnMore">LEARN MORE</button>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200" onClick={openModal03}>{/* 2021-09-10 수정 */}
                        <strong>U6 Rack</strong>
                        <img src={img_ups03_rack} alt="U6 Rack" className="pcCase"/>
                        <img src={img_ups03_rack_m} alt="U6 Rack" className="mCase"/>
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
        <Modal open={ modalOpen01 } close={ closeModal01 } header="67Ah Cell" keyclassName="productPop bottomCase">
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
                      <td>1,930</td>
                    </tr>
                    <tr>
                      <th className="tL">Capacity</th>
                      <td>Ah</td>
                      <td>112</td>
                    </tr>
                    <tr>
                      <th className="tL">Capacity</th>
                      <td>Ah</td>
                      <td>67</td>
                    </tr>
                    <tr>
                      <th className="tL">Design Energy (nominal)</th>
                      <td>Wh</td>
                      <td>254.6</td>
                    </tr>
                    <tr>
                      <th className="tL">Energy Density (gravimetric)</th>
                      <td>Wh/kg</td>
                      <td>198.3</td>
                    </tr>
                    <tr>
                      <th className="tL">VoEnergy Density (volumetric)</th>
                      <td>Wh/L</td>
                      <td>261.6</td>
                    </tr>
                    <tr>
                      <th className="tL">Voltage Max</th>
                      <td>V</td>
                      <td>4.2</td>
                    </tr>
                    <tr>
                      <th className="tL">Voltage Nominal</th>
                      <td>V</td>
                      <td>3.8</td>
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
            <button className="btnM white roundSty" onClick={closeModal01}> CLOSE </button>
            <button className="btnM black roundSty" onClick={closeModal01}> PDF DOWNLOAD </button>
          </div>
        </Modal>
      }
      {modalOpen02 &&
        <Modal open={ modalOpen02 } close={ closeModal02 } header="U6 Module" keyclassName="productPop bottomCase">
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
                      <th>U6-M020</th>
                    </tr>
                    <tr>
                      <th className="tL">Cell Capacity</th>
                      <td>Ah</td>
                      <td>67</td>
                    </tr>
                    <tr>
                      <th className="tL">Energy</th>
                      <td>kWh</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <th className="tL">Operation Voltage </th>
                      <td>V</td>
                      <td>25.6~33.6</td>
                    </tr>
                    <tr>
                      <th className="tL">Design Energy (nominal)</th>
                      <td>Wh</td>
                      <td>254.6</td>
                    </tr>
                    <tr>
                      <th className="tL">Dimensions(WxDxH)</th>
                      <td>mm</td>
                      <td>214 x 405 x 163</td>
                    </tr>
                    <tr>
                      <th className="tL">Weight</th>
                      <td>kg</td>
                      <td>17</td>
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
        <Modal open={ modalOpen03 } close={ closeModal03 } header="U6 Rack" keyclassName="productPop bottomCase">
          <div className="productDetail">
            <div className="pdImage">
              <img src={img_sbb04_112ahCell} alt=""/>
            </div>
            <div className="pdTlsBack">
              <div className="pdTls">
                <table>
                  <thead>
                    <th colSpan="2">Item</th>
                    <th>Rack</th>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="tL" colSpan="2">Model</th>
                      <th>U6-R035</th>
                    </tr>
                    <tr>
                      <th className="tL">Cell Capacity</th>
                      <td>Ah</td>
                      <td>67</td>
                    </tr>
                    <tr>
                      <th className="tL">Cell Capacity</th>
                      <td>Ah</td>
                      <td>67</td>
                    </tr>
                    <tr>
                      <th className="tL">Energy</th>
                      <td>kWh</td>
                      <td>35</td>
                    </tr>
                    <tr>
                      <th className="tL">Operation Voltage</th>
                      <td>V</td>
                      <td>435~571</td>
                    </tr>
                    <tr>
                      <th className="tL">Dimensions(WxDxH)</th>
                      <td>mm</td>
                      <td>650 x 530 x 2055</td>
                    </tr>
                    <tr>
                      <th className="tL">Weight</th>
                      <td>kg</td>
                      <td>510</td>
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
      {/* ==== dnd 팝업 ==== */}
    </div>
  )
}

export default Ups;
