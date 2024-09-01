import React, { useState, useEffect, useRef } from 'react';
import img_headQm01 from '../../assets/images/img_headQm01.png';
import img_qm01_01 from '../../assets/images/img_qm01_01.png';
import img_qm01_02 from '../../assets/images/img_qm01_02.png';
import img_qm01_03 from '../../assets/images/img_qm01_03.png';
import img_qm01_04 from '../../assets/images/img_qm01_04.png';
import img_qm01_05 from '../../assets/images/img_qm01_05.png';


const QualityManagement = (props) => {
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
        <div className="qualityManagementLayout">
          <article>
            <section className="headSection">
              <div className="imgBack">
                <img src={img_headQm01} alt="mainIntro" />
              </div>
              <div className="headCts shadow">
                <h2 data-aos="fade-up" data-aos-duration="1200">Quality <span className="mBreakForce">Management</span></h2>
                <div className="intro">
                  <strong data-aos="fade-in" data-aos-delay="100" data-aos-duration="1500">Unrivalled Quality</strong>
                  <p data-aos="fade-in" data-aos-delay="300" data-aos-duration="1500">Samsung SDI puts product quality before all else, and is committed to delivering these top priority values on multiple fronts.<br/>Our quality innovation spans both the development and mass-production phases to bolster our company-wide quality operation system and<br/>supply the optimal products that cater to customer needs as a result.</p>
                  <button className="btnScroll" onClick={ goClick }>Scroll Down</button>
                </div>
              </div>
            </section>
            <section className="ctsBox qm01" ref={cBox}>
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">Quality management</h3>
                <small data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">Samsung SDI has the industry’s most stringent quality standard<br/>in place to ensure maximum safety and performance in every cell.</small>
              </div>
              <div className="ctsFrame">
                <div className="qmStep">
                  <ul>
                    <li>
                      <div className="qmBlock" data-aos="fade-in" data-aos-delay="300" data-aos-duration="1500"><strong>Incoming<br/>Quality Control</strong></div>
                      <div className="qmImg" data-aos="fade-in" data-aos-delay="100" data-aos-duration="500"><img src={img_qm01_01} alt="" data-aos="fade-in" data-aos-delay="450" data-aos-duration="1500"/></div>
                    </li>
                    <li>
                      <div className="qmBlock lightBlue" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1500"><strong>Electrode</strong></div>
                      <div className="qmImg" data-aos="fade-in" data-aos-delay="100" data-aos-duration="500"><img src={img_qm01_02} alt="" data-aos="fade-in" data-aos-delay="500" data-aos-duration="1500"/></div>
                    </li>
                    <li>
                      <div className="qmBlock blue" data-aos="fade-in" data-aos-delay="500" data-aos-duration="1500"><strong>Assembly</strong></div>
                      <div className="qmImg" data-aos="fade-in" data-aos-delay="100" data-aos-duration="500"><img src={img_qm01_03} alt="" data-aos="fade-in" data-aos-delay="550" data-aos-duration="1500"/></div>
                    </li>
                    <li>
                      <div className="qmBlock purple" data-aos="fade-in" data-aos-delay="600" data-aos-duration="1500"><strong>Formation</strong></div>
                      <div className="qmImg" data-aos="fade-in" data-aos-delay="100" data-aos-duration="500"><img src={img_qm01_04} alt="" data-aos="fade-in" data-aos-delay="600" data-aos-duration="1500"/></div>
                    </li>
                    <li>
                      <div className="qmBlock lightPurple" data-aos="fade-in" data-aos-delay="700" data-aos-duration="1500"><strong>Module & Pack</strong></div>
                      <div className="qmImg" data-aos="fade-in" data-aos-delay="100" data-aos-duration="500"><img src={img_qm01_05} alt="" data-aos="fade-in" data-aos-delay="650" data-aos-duration="1500"/></div>
                    </li>
                  </ul>
                  {/*<div class="arrowLine" data-aos="fade-in" data-aos-delay="1500" data-aos-duration="500"></div>*/}
                </div>
                <div className="statsArea">
                  <div className="gridSet grid2">
                    <div className="gridItem" data-aos="fade-up" data-aos-delay="900" data-aos-duration="1200">
                      <div className="statsLine">
                        <strong>2,000</strong>
                        <span>Checkpoint</span>
                      </div>
                    </div>
                    <div className="gridItem" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1200">
                      <div className="statsLine">
                        <strong>100%</strong>
                        <span>Traceability</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  )
}

export default QualityManagement;
