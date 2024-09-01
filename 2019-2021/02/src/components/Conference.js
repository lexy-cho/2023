import React, { useState, useEffect } from 'react';
import img_conference_pre from '../assets/images/img_conference_pre.png';
import img_conference_dummy from '../assets/images/img_conference_dummy.png';
import img_insession_video from '../assets/images/img_insession_video.png';

const Conference = ( props ) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, layerOpen, close, layerClose, keyClass } = props;
    const [activeIndex, setActiveIndex]=useState(0);
    const showHandler=(index)=>{
        setActiveIndex(index);
    };

    const [isShowing, setIsShowing] = useState(false);
    const showEventShow = () => {
      setIsShowing(true);
    };

    const MoreVideo = () => (
      <ul>
        <li>
          <div className="videoItem">
            <div className="videoThumb"><span className="thumbnail"><img src="#" alt=""/></span></div>
            <div className="videoDetail">
              <strong>Archive Video Title 01</strong>
              <em>2021.09.20</em>
              <p>dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text</p>
            </div>
          </div>
        </li>
        <li>
          <div className="videoItem">
            <div className="videoThumb"><span className="thumbnail"><img src="#" alt=""/></span></div>
            <div className="videoDetail">
              <strong>Archive Video Title 01</strong>
              <em>2021.09.20</em>
              <p>dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text</p>
            </div>
          </div>
        </li>
        <li>
          <div className="videoItem">
            <div className="videoThumb"><span className="thumbnail"><img src="#" alt=""/></span></div>
            <div className="videoDetail">
              <strong>Archive Video Title 01</strong>
              <em>2021.09.20</em>
              <p>dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text</p>
            </div>
          </div>
        </li>
      </ul>
    );

    return (
      <div className={ open ? 'open conferenceModal' : 'conferenceModal' }>
          { open ? (
            <div className="conferenceWrap">
              <div className="cfHeader">
                <h1 onClick={()=> setActiveIndex(0)}><span>SDI On</span><em>Conference</em></h1>
                {/* tab */}
                <div className="tab">
                  <nav>
                    <ul>
                      <li className={activeIndex===1 ? "is-active" : ""} onClick={()=> setActiveIndex(1)}><button>In Session</button></li>
                      <li className={activeIndex===2 ? "is-active" : ""} onClick={()=> setActiveIndex(2)}><button>On Demand</button></li>
                    </ul>
                  </nav>
                </div>
                <button className="btnClose" onClick={() => {setActiveIndex(0); close();}}>Close</button>
              </div>

              {/* conference Pre */}
              <section className={activeIndex===0 ? "is-active cfSection" : "cfSection"}>
                <div className="cfBanner">
                  <div className="cfBannerBack">
                    <img src={img_conference_pre} alt=""/>
                    <ul className="timer">
                      <li className="on">1</li>
                      <li className="on">2</li>
                      <li className="on">3</li>
                      <li>4</li>
                    </ul>
                  </div>
                  <div className="cfBannerCts">
                    <strong>20:00 Main <span className="mBreakForce">Event Live</span></strong>
                    <p>banner text banner text banner text banner text</p>
                  </div>
                  <div className="utilArea">
                    <div className="swipers">
                      <button className="btnSwiper before">before</button>
                      <button className="btnSwiper next">next</button>
                    </div>
                    <span className="counter">1/4</span>
                  </div>
                </div>
                <div className="cfContents">
                  <div className="cfFrame">
                    <div className="cfBox">
                      <strong>Conference Info 1</strong>
                      <p>dummy text dummy text dummy text dummy text dummy text<br/>dummy text dummy text dummy text </p>
                      <div className="imgArea">
                        <img src={img_conference_dummy} alt=""/>
                      </div>
                    </div>
                    <div className="cfBox">
                      <strong>Conference Info 2</strong>
                      <p>dummy text dummy text dummy text dummy text dummy text<br/>dummy text dummy text dummy text </p>
                      <div className="imgArea">
                        <img src={img_conference_dummy} alt=""/>
                      </div>
                    </div>
                    <div className="latest">
                      <strong>In case you missed our latest session videos</strong>
                      <button className="btnM whiteLine roundSty">Watch Now</button>
                    </div>
                  </div>
                </div>
              </section>

              {/* In Session */}
              <div className={activeIndex===1 ? "is-active cfSection" : "cfSection"}>
                <div className="cfContents inSession">
                  <div className="videoArea">
                    <div className="cfFrame">
                      <div className="videoBack">
                        <img src={img_insession_video} alt=""/>
                      </div>
                      <div className="videoInfo">
                        <strong>Keynote Streaming Title</strong>
                        <em>2021.09.20</em>
                        <p>dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text</p>
                        <div className="btnArea">
                          <button className="btnM whiteLine roundSty">Watch in Full Screen</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cfFrame">
                    <div className="cfBox">
                      <strong>Conference Info 1</strong>
                      <p>dummy text dummy text dummy text dummy text dummy text<br/>dummy text dummy text dummy text </p>
                      <div className="imgArea">
                        <img src={img_conference_dummy} alt=""/>
                      </div>
                    </div>
                    <div className="cfBox">
                      <strong>Conference Info 2</strong>
                      <p>dummy text dummy text dummy text dummy text dummy text<br/>dummy text dummy text dummy text </p>
                      <div className="imgArea">
                        <img src={img_conference_dummy} alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* On Demand */}
              <div className={activeIndex===2 ? "is-active cfSection" : "cfSection"}>
                <div className="cfContents onDemend">
                  <ul className="videoList">
                    <li>
                      <div className="videoItem">
                        <div className="videoThumb"><span className="thumbnail"><img src="#" alt=""/></span></div>
                        <div className="videoDetail">
                          <strong>Archive Video Title 01</strong>
                          <em>2021.09.20</em>
                          <p>dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="videoItem">
                        <div className="videoThumb"><span className="thumbnail"><img src="#" alt=""/></span></div>
                        <div className="videoDetail">
                          <strong>Archive Video Title 02</strong>
                          <em>2021.09.20</em>
                          <p>dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="videoItem">
                        <div className="videoThumb"><span className="thumbnail"><img src="#" alt=""/></span></div>
                        <div className="videoDetail">
                          <strong>Archive Video Title 03</strong>
                          <em>2021.09.20</em>
                          <p>dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="videoItem">
                        <div className="videoThumb"><span className="thumbnail"><img src="#" alt=""/></span></div>
                        <div className="videoDetail">
                          <strong>Archive Video Title 01</strong>
                          <em>2021.09.20</em>
                          <p>dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="videoItem">
                        <div className="videoThumb"><span className="thumbnail"><img src="#" alt=""/></span></div>
                        <div className="videoDetail">
                          <strong>Archive Video Title 01</strong>
                          <em>2021.09.20</em>
                          <p>dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="videoItem">
                        <div className="videoThumb"><span className="thumbnail"><img src="#" alt=""/></span></div>
                        <div className="videoDetail">
                          <strong>Archive Video Title 01</strong>
                          <em>2021.09.20</em>
                          <p>dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text</p>
                        </div>
                      </div>
                    </li>
                    {isShowing &&  <MoreVideo />}
                  </ul>
                  <div className="btnArea tC">
                    <button className="btnM whiteLine roundSty" onClick={showEventShow}>See more</button>
                  </div>
                </div>
              </div>

            </div>
          ) : null }
      </div>
    )
}

export default Conference;
