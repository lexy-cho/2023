import React from 'react';
import imgBgMain from '../../assets/images/img_main.png';
import imgMainSec02Product02 from '../../assets/images/img_mainSec02_product02.png';
import imgMainSec03Product01 from '../../assets/images/img_mainSec03_product01.png';
import imgMainSec03Product02 from '../../assets/images/img_mainSec03_product02.png';
import imgMainSec03Product03 from '../../assets/images/img_mainSec03_product03.png';

const Home = () => {
  return (
    <div>
      <div className="contents">
        <article>
          <div className="fullLayout">
            <section className="headSection">
              <div className="imgBack">
                <img src={imgBgMain} alt="mainIntro" />
              </div>
              <div className="headCts">
                <h2>Battery Studio</h2>
                <div className="intro">
                  <button className="btnM white">ENTER</button>
                  <span className="iScroll">Scroll Down</span>
                </div>
              </div>
            </section>
            <section className="ctsSection mainSec01">
              <h3>Safe and Economical<br/>Pre-engineered Battery Enclosure</h3>
              <h2><strong>Samsung SDI</strong>Ready to Offer an<br/>Energy Solution for Tomorrow</h2>
              <ul className="wideGuide">
                <li>
                  <div className="ctsFrame">
                    <div className="layerBox leftType">
                      <strong>ESS Business</strong>
                      <p>Eco-friendly energy solutions for our future.<br/>Samsung SDI is leading the world market with<br/>Lithium-ion energy storage.</p>
                      <button className="btnM roundSty blue thin">Learn More</button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="ctsFrame">
                    <div className="layerBox rightType">
                      <strong>Global Track Record</strong>
                      <p>Eco-friendly energy solutions for our future.<br/>Samsung SDI is leading the world market with<br/>Lithium-ion energy storage.</p>
                      <button className="btnM roundSty blue thin">Learn More</button>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
            <section className="ctsSection mainSec02">
              <h2><strong>New Release</strong>Introduce Our New Products</h2>
              <ul className="gradientGuide">
                <li className="leftType">
                  <big>SBB</big>
                  <div className="ctsFrame">
                    <div className="detailBox">
                      <div className="detailInfo">
                        <p>Pre-populated battery<br/>enclosure of SAMSUNG SDI</p>
                        <button className="btnUnline">Learn Details</button>
                      </div>
                      <img src={imgMainSec02Product01} alt="SBB" />
                    </div>
                  </div>
                </li>
                <li className="rightType">
                  <big>RES</big>
                  <div className="ctsFrame">
                    <div className="detailBox">
                      <img src={imgMainSec02Product02} alt="RES" />
                      <div className="detailInfo">
                        <p>New version of residential<br/>battery of SAMSUNG SDI</p>
                        <button className="btnUnline">Learn Details</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
            <section className="ctsSection mainSec03">
              <h2><strong>Products</strong>Providing a broad range of solutions<br/>from the size of KWh to MW</h2>
              <div className="productList">
                <ul>
                  <li>
                    <strong>Utility/CES</strong>
                    <small>Battery Platform</small>
                    <img src={imgMainSec03Product01} alt="Utility/CES"/>
                    <button className="btnGo">Go</button>
                  </li>
                  <li>
                    <strong>UPS</strong>
                    <small>Lithium-ion Solution</small>
                    <img src={imgMainSec03Product02} alt="UPS"/>
                    <button className="btnGo">Go</button>
                  </li>
                  <li>
                    <strong>Residential</strong>
                    <small>Battery Pack Solution</small>
                    <img src={imgMainSec03Product03} alt="Residential" className="rightCase"/>
                    <button className="btnGo">Go</button>
                  </li>
                </ul>
              </div>
            </section>
            {/* Navigation */}
            <div className="navigation">
              <ul>
                <li><a href="#">Virtual Exhibition</a></li>
                <li><a href="#">SBB</a></li>
                <li><a href="#">R5</a></li>
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Technology</a></li>
                <li><a href="#">About Us</a></li>
              </ul>
            </div>
            {/* //Navigation */}
          </div>
        </article>
      </div>
    </div>
  )
}

export default Home;
