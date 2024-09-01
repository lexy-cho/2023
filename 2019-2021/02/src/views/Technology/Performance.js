import React, { useState, useEffect, useRef } from 'react';
import img_headPerformance01 from '../../assets/images/img_headPerformance01.png';
import img_pfm01_left from '../../assets/images/img_pfm01_left.png';
import img_pfm01_right from '../../assets/images/img_pfm01_right.png';


const Performance = (props) => {
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
        <div className="performanceLayout">
          <article>
            <section className="headSection">
              <div className="imgBack">
                <img src={img_headPerformance01} alt="mainIntro" />
              </div>
              <div className="headCts shadow">
                <h2 data-aos="fade-up" data-aos-duration="1200">Performance</h2>
                <div className="intro">
                  <strong data-aos="fade-in" data-aos-delay="100" data-aos-duration="1500">Superior Performance</strong>
                  <p data-aos="fade-in" data-aos-delay="300" data-aos-duration="1500">Samsung SDI offers optimized line-up for various applications.<br/>Our cutting-edge technology enables superior cycle life and<br/>power performance for intended applications.</p>
                  <button className="btnScroll" onClick={ goClick }>Scroll Down</button>
                </div>
              </div>
            </section>
            <section className="ctsBox pfm01" ref={cBox}>
              <div className="ctsHead">
                <h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">Jelly Roll Quality</h3>
                <small data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">Samsung SDI cells are engineered to ensure internal <span className="mBreak">alignment throughout their lifetime</span><br/>Optimal cell design for safe and long life operation</small>
              </div>
              <div className="ctsFrame">
                <strong data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200">No Deformation or Cracks inside cell jelly roll</strong>
                <div className="gridSet grid2">
                  <div className="gridItem" data-aos="fade-up" data-aos-delay="550" data-aos-duration="1200">
                    <div className="tls">
                      <table>
                        <thead>
                          <tr>
                            <th className="sky">SOH 100% Cell (Beginning of Life)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="imgArea tC"><img src={img_pfm01_left} alt=""/></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="gridItem" data-aos="fade-up" data-aos-delay="650" data-aos-duration="1200">
                    <div className="tls">
                      <table>
                        <thead>
                          <tr>
                            <th className="blue">SOH 80% Cell (End of Life)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="imgArea tC"><img src={img_pfm01_right} alt=""/></td>
                          </tr>
                        </tbody>
                      </table>
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

export default Performance;
