import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade, Lazy, Mousewheel, } from 'swiper';
import img_headBusinessOverview01 from '../../assets/images/img_headBusinessOverview01.png';
import img_headBusinessOverview02 from '../../assets/images/img_headBusinessOverview02.png';
import img_headBusinessOverview03 from '../../assets/images/img_headBusinessOverview03.png';
import img_headBusinessOverview04 from '../../assets/images/img_headBusinessOverview04.png';
import img_headBusinessOverview05 from '../../assets/images/img_headBusinessOverview05.png';
import imgEss01 from '../../assets/images/img_ess01.png';
import imgEss02Thum01 from '../../assets/images/img_ess02_thum01.png';
import imgEss02Thum02 from '../../assets/images/img_ess02_thum02.png';
import imgEss02Thum03 from '../../assets/images/img_ess02_thum03.png';
import imgEss02Thum04 from '../../assets/images/img_ess02_thum04.png';
import imgEss03 from '../../assets/images/img_ess03.png';
import imgEss03_m from '../../assets/images/imgEss03_m.png';
import imgEss04 from '../../assets/images/img_ess04.png';


SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade, Lazy, Mousewheel]);

const EssBusiness = (props) => {
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
        <div className="essBusinessLayout">
          <article>
            <section className="headSection">
              <div className="imgBack">
                <div className="loop">
                  <span><img src={img_headBusinessOverview01} alt="mainIntro" /></span>
                  <span><img src={img_headBusinessOverview02} alt="mainIntro" /></span>
                  <span><img src={img_headBusinessOverview03} alt="mainIntro" /></span>
                  <span><img src={img_headBusinessOverview04} alt="mainIntro" /></span>
                  <span><img src={img_headBusinessOverview05} alt="mainIntro" /></span>
                </div>
              </div>
              <div className="headCts shadow">
                <h2 data-aos="fade-up" data-aos-duration="1200">Business Overview</h2>
                <div className="intro">
                  <strong data-aos="fade-in" data-aos-delay="100" data-aos-duration="2000">Creative Energy Solution Leader</strong>
                  <p data-aos="fade-in" data-aos-delay="300" data-aos-duration="3000">Since starting the lithium-ion battery business in 2000,<br/>Samsung SDI has been continuously innovating towards excellence.<br/>We are all dreaming of a battery future with BoT(Battery of Things).</p>
                  <button className="btnScroll" onClick={ goClick }>Scroll Down</button>
                </div>
              </div>
            </section>
            <section className="ctsBox ess01" ref={cBox}>
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">Powering Tomorrow<br/>With Safe & Reliable ESS <span className="mBreak">Solutions</span></h3>
              </div>
              <div className="ctsFrame">
                <div className="videoBack" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
                  <img src={imgEss01} alt="ess Business"/>
                </div>
              </div>
            </section>
            <section className="ctsBox ess03">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">Samsung SDI at a Glance</h3>
              </div>
              <div className="ctsFrame">
                <div className="sdiScore" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
                  <img src={imgEss03} alt="SDI ESS Score" className="pcCase"/>
                  <img src={imgEss03_m} alt="SDI ESS Score" className="mCase"/>
                  <em>*Figures in 2021</em>
                </div>
              </div>
            </section>
            <section className="ctsBox ess02">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">Business Area</h3>
                <small data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">From Consumer, Automotive to Industrial</small>
              </div>
              <div className="ctsFrame">
                <ul className="sumnailList">
                  <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">
                    <span className="thumbnail">
                      <img src={imgEss02Thum01} alt="IT / Wearables"/>
                    </span>
                    <strong>IT / Wearables</strong>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
                    <span className="thumbnail">
                      <img src={imgEss02Thum02} alt="Power Apps"/>
                    </span>
                    <strong>Power Apps</strong>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200">
                    <span className="thumbnail">
                      <img src={imgEss02Thum03} alt="Electromobility"/>
                    </span>
                    <strong>Electromobility</strong>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="700" data-aos-duration="1200">
                    <span className="thumbnail">
                      <img src={imgEss02Thum04} alt="Energy Storage"/>
                    </span>
                    <strong>Energy Storage</strong>
                  </li>
                </ul>
              </div>
            </section>
            <section className="ctsBox ess04">
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">Global Network</h3>
                <small data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">Our global network consists of a total of 27 locations,<br/>including the Headquarters, the R&D Center,<br/>production facilities and sales bases.</small>
              </div>
              <div className="ctsFrame">
                <div className="sdiProximity" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">
                  <img src={imgEss04} alt="Global Footprint"/>
                </div>
                <div className="btnArea tC mCase" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">
                  <button className="btnS whiteLine roundSty">VIEW FULL SIZE IMAGE</button>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  )
}

export default EssBusiness;
