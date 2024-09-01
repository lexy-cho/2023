import React, { useState, useEffect } from 'react';
import imgExhibitionGate from '../assets/images/img_exhibition_gate.png';
import imgExhibitionBgSelect01 from '../assets/images/img_exhibition_bgSelect01.png';
import imgExhibitionBgSelect02 from '../assets/images/img_exhibition_bgSelect02.png';
import imgExhibitionBgSelect04 from '../assets/images/img_exhibition_bgSelect04.png';
import imgControllerDummy from '../assets/images/img_controller_dummy.png';
import imgControllerDummyM from '../assets/images/img_controller_dummy_m.png';
import sample from '../assets/video/sample.mp4';

const Video = ( props ) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, layerOpen, close, layerClose, keyClass } = props;
    const [activeIndex, setActiveIndex]=useState(0);
    const showHandler=(index)=>{
        setActiveIndex(index);
    };
    const [activeIndex2, setActiveIndex2]=useState(0);
    const controllerHandler=(index)=>{
        setActiveIndex2(index);
    };
    const [activeDimIndex, dimsetActiveIndex]=useState(0);
    const dimHandler=(index)=>{
        dimsetActiveIndex(index);
    };
    const [inPopActiveIndex, inPopSetActiveIndex]=useState(0);
    const inPopShowHandler=(index)=>{
        inPopSetActiveIndex(index);
    };
    const [faqActiveIndex, faqSetActiveIndex]=useState(0);
    const faqShowHandler=(index)=>{
        faqSetActiveIndex(index);
    };
    return (
      // 모달이 열릴때 open 클래스가 생성된다.
      <div className={ open ? 'open videoModal' : 'videoModal' }>
          { open ? (
            <div className="videoPop">
              <div className="videoHeader">
                <h1><span>SDI On</span><em>Exhibition</em></h1>
                <button className="btnClose" onClick={() => {dimsetActiveIndex(0); setActiveIndex(0); setActiveIndex2(0); inPopSetActiveIndex(0); faqSetActiveIndex(0); close();}}>Close</button>
              </div>

              {/* Step1 */}
              <div className={activeIndex===0 ? "is-active step" : "step"}>
                <div className="ctsBack"></div>
                <div className="ctsInner">
                  <div className="exhiGate">
                    <div className="exhiGateBack">
                      <img src={imgExhibitionGate} alt=""/>
                    </div>
                    <div className="exhiGateInner">
                      <div className="txtArea">
                        <strong>Battery Studio ON-AIR</strong>
                      </div>
                      <div className="btnArea">
                        <button className="btnM ghost roundSty" onClick={()=>showHandler(1)}>Start <strong className="fPurple">without</strong> Subtitle</button>
                        <button className="btnM ghost roundSty" onClick={()=>showHandler(1)}>Start <strong className="fMint">with</strong> Subtitle</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step2 */}
              <div className={activeIndex===1 ? "is-active step" : "step"}>
                <div className="ctsBack">
                  <img src={imgExhibitionBgSelect01} alt=""/>
                </div>
                <div className="ctsInner">
                  <div className="playSelect step1">
                    <div className="playSelectInner">
                      <div className="headLine">
                        <span className="bubble">AMY</span>
                        <strong>Which studio would you like to see?</strong>
                      </div>
                      <div className="choice">
                        <button className="btnChoice" onClick={()=>showHandler(2)}>Studio1. Park: Utility/CES</button>
                        <button className="btnChoice" onClick={()=>showHandler(2)}>Studio2. Library: UPS</button>
                        <button className="btnChoice" onClick={()=>showHandler(2)}>Studio3. Home: Residential</button>{/* 2021-09-10 텍스트 수정 */}
                        <button className="btnChoice" onClick={()=>showHandler(2)}>Live on-site: SBB</button>
                      </div>
                      <div className="faqArea">
                        <p>Are you Interested in more detailed information?</p>
                        <div className="btnArea">
                          <button className="btnM ghost roundSty" onClick={()=>inPopSetActiveIndex(1)}>FAQ</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step3 */}
              <div className={activeIndex===2 ? "is-active step" : "step"}>
                <div className="ctsBack">
                  <img src={imgExhibitionBgSelect02} alt=""/>
                </div>
                <div className="ctsInner">
                  <div className="playSelect step2">
                    <div className="playSelectInner">
                      <div className="headLine">
                        <span className="bubble green">TYLER</span>
                        <strong>What solution would you like to see?</strong>
                      </div>
                      <div className="gridSet grid3">
                        <div className="gridItem">
                          <div className="playInfo">
                            <strong>Energy Platform</strong>
                            <p>2h+ of charge /<br/>discharge time at below 0.5C</p>
                          </div>
                          <div className="choice">
                            <button className="btnChoice halfSty" onClick={()=>showHandler(3)}><strong>Cell</strong><span>112Ah</span></button>
                            <button className="btnChoice halfSty" onClick={()=>showHandler(3)}><strong>Module</strong><span>E4</span></button>
                            <button className="btnChoice halfSty" onClick={()=>showHandler(3)}><strong>Rack</strong><span>E4</span></button>
                            <button className="btnChoice" onClick={()=>showHandler(3)}>Warranty</button>
                          </div>
                        </div>
                        <div className="gridItem">
                          <div className="playInfo">
                            <strong>Medium Platform</strong>
                            <p>1-2h of charge /<br/>discharge time at 0.5-1C</p>
                          </div>
                          <div className="choice">
                            <button className="btnChoice halfSty" onClick={()=>showHandler(3)}><strong>Cell</strong><span>112Ah</span></button>
                            <button className="btnChoice halfSty" onClick={()=>showHandler(3)}><strong>Module</strong><span>M4</span></button>
                            <button className="btnChoice halfSty" onClick={()=>showHandler(3)}><strong>Rack</strong><span>M4</span></button>
                            <button className="btnChoice" onClick={()=>showHandler(3)}>Warranty</button>
                          </div>
                        </div>
                        <div className="gridItem">
                          <div className="playInfo">
                            <strong>Power Platform</strong>
                            <p>0.5-1h of charge /<br/>discharge time at 1-2C</p>
                          </div>
                          <div className="choice">
                            <button className="btnChoice halfSty" onClick={()=>showHandler(3)}><strong>Cell</strong><span>78Ah</span></button>
                            <button className="btnChoice halfSty" onClick={()=>showHandler(3)}><strong>Module</strong><span>P3A</span></button>
                            <button className="btnChoice halfSty" onClick={()=>showHandler(3)}><strong>Rack</strong><span>P3A</span></button>
                            <button className="btnChoice" onClick={()=>showHandler(3)}>Warranty</button>
                          </div>
                        </div>
                      </div>
                      <div className="faqArea">
                        <p>Are you Interested in more detailed information?</p>
                        <div className="btnArea">
                          <button className="btnM ghost roundSty" onClick={()=>inPopSetActiveIndex(1)}>FAQ</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step4 */}
              <div className={activeIndex===3 ? "is-active step" : "step"}>
                <div className="ctsBack">
                  <img src={imgExhibitionBgSelect01} alt=""/>
                </div>
                <div className="ctsInner">
                  <div className="playSelect step3">
                    <div className="playSelectInner">
                      <div className="headLine">
                        <span className="bubble">AMY</span>
                        <strong>Which one would you like to see?</strong>
                      </div>
                      <div className="choice">
                        <button className="btnChoice halfSty" onClick={()=>showHandler(4)}><strong>Cell</strong><span>112Ah</span></button>
                        <button className="btnChoice halfSty" onClick={()=>showHandler(4)}><strong>Module</strong><span>U6</span></button>
                        <button className="btnChoice halfSty" onClick={()=>showHandler(4)}><strong>Rack</strong><span>U6</span></button>
                        <button className="btnChoice" onClick={()=>showHandler(4)}>Warranty</button>
                      </div>
                      <div className="faqArea">
                        <p>Are you Interested in more detailed information?</p>
                        <div className="btnArea">
                          <button className="btnM ghost roundSty" onClick={()=>inPopSetActiveIndex(1)}>FAQ</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step5 */}
              <div className={activeIndex===4 ? "is-active step" : "step"}>
                <div className="ctsBack">
                  <img src={imgExhibitionBgSelect04} alt=""/>
                </div>
                <div className="ctsInner">
                  <div className="playSelect step4">
                    <div className="playSelectInner">
                      <div className="headLine">
                        <span className="bubble gradient">AMY & TYLER</span>
                        <strong>Which one would you like to see?</strong>
                      </div>
                      <div className="choice">
                        <button className="btnChoice halfSty" onClick={()=>showHandler(5)}><strong>48V</strong><span>R1</span></button>
                        <button className="btnChoice halfSty" onClick={()=>showHandler(5)}><strong>HVS</strong><span>R5</span></button>
                      </div>
                      <div className="faqArea">
                        <p>Are you Interested in more detailed information?</p>
                        <div className="btnArea">
                          <button className="btnM ghost roundSty" onClick={()=>inPopSetActiveIndex(1)}>FAQ</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className={inPopActiveIndex===1 ? "is-show inPopWrap" : "inPopWrap"}>
                <button className="btnBack" onClick={()=>inPopSetActiveIndex(0)}>FAQ Close</button>
                <div className="inPopContainer">
                  <h2>Frequently Asked Questions</h2>
                  <div className="inPopContents">
                    <ul className="faqNav">
                      <li className={faqActiveIndex===0 ? "is-active" : ""}  onClick={()=>faqShowHandler(0)}><button>Utility & Commercial</button></li>
                      <li className={faqActiveIndex===1 ? "is-active" : ""}  onClick={()=>faqShowHandler(1)}><button>UPS</button></li>
                      <li className={faqActiveIndex===2 ? "is-active" : ""}  onClick={()=>faqShowHandler(2)}><button>Residential</button></li>
                      <li className={faqActiveIndex===3 ? "is-active" : ""}  onClick={()=>faqShowHandler(3)}><button>SBB</button></li>
                    </ul>
                    <div className="faqDetail">
                      <div className={faqActiveIndex===0 ? "is-active " : ""}>
                        <dl className="on">
                          <dt>Why does Samsung SDI use prismatic cells and what is the key advantage of prismatic cells compared to pouch cells?</dt>
                          <dd>
                            Samsung SDI's prismatic cell has its proprietary design based on the advantages of form factor so that abnormal events can be contained at cell level. The prismatic cell is enclosed in highly durable aluminum and has a vent in a designated point. When an issue occurs inside a cell, high temperature and pressure gas is released from a vent, containing the event. On the other hand, high pressure gas in pouch cells can be released in any direction, making it difficult to control the event.
                          </dd>
                        </dl>
                        <dl>
                          <dt>What is the improvement in E4 compared to the previous Energy platform product E3?</dt>
                          <dd>
                            100Ah cells are used for the previous model E3 while 112Ah cells are applied for the newly released E4. The energy density of E4 has increased by raising the capacity by more than 10%.
                          </dd>
                        </dl>
                        <dl>
                          <dt>What is the difference among the power/commercial ESS platforms?</dt>
                          <dd>
                            Charging/discharging time differs depending on the platform. The Energy, Medium, and Power platform are designed for usage environment of more than 2 hours, 1~2 hours, and less than 1 hour, respectively.
                          </dd>
                        </dl>
                        <dl>
                          <dt>Why did Samsung SDI develop double-dip modules for the Energy platform?</dt>
                          <dd>
                            The basic and long modules have the optimal size for the standard 40ft ISO containers whereas double-dip modules are designed for bigger containers according to customers' requirements. Double-dip modules are also designed to minimize the energy density reduction caused by separation distances between ESS in enclosure.
                          </dd>
                        </dl>
                        <dl>
                          <dt>How does the cooling system of Energy platform products work without fans?</dt>
                          <dd>
                            The Medium/Power platform products are equipped with fans to cool down as they have high C-rate. However, in case of the Energy platform which has low C-rate, extreme heat would not occur if the temperature remains within the operating condition so an extra cooling device is not required.
                          </dd>
                        </dl>
                        <dl>
                          <dt>How does the fire safety system of power/commercial ESS work?</dt>
                          <dd>
                            E4D, M4, P3A are equipped with the existing fire suppression sheets and the newly released E4 and E4L are equipped with a direct injection system. Both systems contain fire in advance and prevent heat transfer to adjacent modules by releasing fire agent in case of event. However, a direct injection system sprays fire agent directly to the event cell by connecting an extinguisher with a rack whereas the existing system has a fire suppression sheet in modules which releases fire agent.
                          </dd>
                        </dl>
                      </div>
                      <div className={faqActiveIndex===1 ? "is-active " : ""}>
                        <dl className="on">
                          <dt>Why does Samsung SDI use prismatic cells and what is the key advantage of prismatic cells compared to pouch cells? </dt>
                          <dd>
                            Samsung SDI's prismatic cells have its proprietary design based on the advantages of form factor so that abnormal events can be contained at cell level. The prismatic cell is enclosed in highly durable aluminum and has a vent in a designated point. When an issue occurs inside a cell, high temperature and pressure gas is released from a vent, containing the event. On the other hand, high pressure gas in pouch cells can be released in any direction, making it difficult to control the event.
                          </dd>
                        </dl>
                        <dl>
                          <dt>What is the difference between UPS and BBU?</dt>
                          <dd>
                            UPS and BBU both play a role as a backup power in case of blackout. UPS has a centralized system whereas BBU has a distributed system adjacent to individual server rack. UPS is installed in separate places such as an underground room so the server would not be affected by an event, making it safer.
                          </dd>
                        </dl>
                        <dl>
                          <dt>What is the advantage of using LIBs for UPS, instead of lead-acid batteries?</dt>
                          <dd>
                            U6 using high output LMO charges 5 times faster and discharges 3 times faster than a lead-acid battery. LMO which has high energy density requires only 30% of the installation area and 40% of the weight compared to lead-acid battery, reducing the costs for space and installation significantly. Moreover, you can save the cost for battery replacement as U6 lasts 15 years while a lead-acid battery requires replacement every 4 years.
                          </dd>
                        </dl>
                        <dl>
                          <dt>How does the fire safety system of UPS battery work?</dt>
                          <dd>
                            The fire suppression sheet method was applied in U6. Fire suppression sheets are installed in modules and in case of events, the sheet sprays fire agent, preventing the event in advance and heat propagation to the adjacent modules. Samsung SDI's products are equipped with built-in safety solutions so the explosion prevention design of lead-acid battery is not required.
                          </dd>
                        </dl>
                      </div>
                      <div className={faqActiveIndex===2 ? "is-active " : ""}>
                        <dl className="on">
                          <dt>Why does Samsung SDI use prismatic cells for the 48V solution and what is the advantage of prismatic cells, compared to pouch cells? </dt>
                          <dd>
                            Samsung SDI's prismatic cells have its proprietary design based on the advantages of form factor so that abnormal events can be contained at cell level. The prismatic cell is enclosed in highly durable aluminum and has a vent in a designated point. When an issue occurs inside a cell, high temperature and pressure gas is released from a vent, containing the event. On the other hand, high pressure gas in pouch cells can be released in any direction, making it difficult to control the event.
                          </dd>
                        </dl>
                        <dl>
                          <dt>What is the difference between the residential 48V and the HVS solution?</dt>
                          <dd>
                            The 48V solution is low voltage while HVS solution is high voltage. In general, the 48V solution is enough for households to use but recently the amount of electricity consumption increases as the number of home appliances grows and people charge their EVs at home. So, the demand for the HVS solution is increasing.
                          </dd>
                        </dl>
                        <dl>
                          <dt>How does the fire safety system of the residential 48V solution work?</dt>
                          <dd>
                            The fire suppression sheet method was applied in the 48V solution. Fire suppression sheets are installed in modules and in case of event, the sheet sprays fire agent, preventing the event in advance and heat propagation to the adjacent modules.
                          </dd>
                        </dl>
                        <dl>
                          <dt>Is there any other safety device in the residential HVS solution instead of the fire suppression sheet method?</dt>
                          <dd>
                            The wire bonding method was applied to the HVS solution instead of the fire suppression sheet method as it is equipped with cylindrical cells. The wire welded on cells play a role as a fuse to cut off the overcurrent in case of event. Therefore, heat transfer can be prevented at cell level in any case. The wire bonding method also enables efficient heat release, compared to the existing tab-welding method.
                          </dd>
                        </dl>
                      </div>
                      <div className={faqActiveIndex===3 ? "is-active " : ""}>
                        <dl className="on">
                          <dt>How much time can SDI's customers save when applying SBB, compared to the time previously required for supply and installation of racks and modules?</dt>
                          <dd>
                            Only less than 20% of the time is needed to install SBBs, compared to the time previously required for supply and installation of racks and modules.
                          </dd>
                        </dl>
                        <dl>
                          <dt>How much TCO can SDI's customers save when introducing SBB?</dt>
                          <dd>
                            It might vary according to installation area and project size but basically, the labor cost is not needed and cabling other EPC costs will be minimized. Additional cost reduction is possible through consulations with SDI before starting proejcts.
                          </dd>
                        </dl>
                        <dl>
                          <dt>How can SDI's customers conduct augmentation after introducing SBB?</dt>
                          <dd>
                            Our customers can augment the storage capacity by minimizing the capacity of the initial SBBs and installing the same enclosure on the existing battery bank.
                          </dd>
                        </dl>
                        <dl>
                          <dt>How does the fire safety system of SBB work?</dt>
                          <dd>
                            SBB is equipped with E4D modules which the fire suppression sheet method is applied. Fire suppression sheets are installed in modules and in case of event, the sheet sprays fire agent, preventing the event in advance and heat propagation to the adjacent modules.
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* play controller */}
              <div className={activeIndex!=0 ? "is-show controllerArea" : "controllerArea"}>
                <button className={ activeIndex2===1 ? 'off btnControll' : 'btnControll' } onClick={()=>controllerHandler(1)}>playControllShow</button>
                <div className={ activeIndex2===1 ? 'is-show controllerShow' : 'controllerShow' }>
                  <div className="goBtnArea">
                    <span className="btnControllShow">
                      <span>
                        <button className="on" onClick={()=>{dimHandler(2);}}><strong>Utility & Commercial</strong></button>{/* 2021-09-10 구조 수정 */}
                        <button><strong>UPS</strong></button>
                        <button><strong>Residential</strong></button>
                        <button><strong>SBB</strong></button>
                      </span>
                      <button className="btnPlaylist">Playlist</button>
                    </span>
                    <button className="btnGoBack" onClick={()=>{controllerHandler(0);}}>Go Back</button>
                  </div>
                  <div className="imgControllerDummy">
                    <img className="pcCase" src={imgControllerDummy} alt="" onClick={()=>{dimHandler(1);}}/>
                    <img className="mCase" src={imgControllerDummyM} alt="" onClick={()=>{dimHandler(1);}}/>
                  </div>
                </div>
              </div>

              {/* end kind1 */}
              <div className={activeIndex===5 ? "is-active step" : "step"}>
                <div className="ctsBack">
                  <img src={imgExhibitionBgSelect01} alt=""/>
                </div>
                <div className="ctsInner">
                  <div className="playSelect end">
                    <div className="playSelectInner">
                      <div className="headLine">
                        <span className="bubble">AMY</span>
                        <strong>Where can I take you next?</strong>
                      </div>
                      <div className="choice endCase">
                        <button className="btnChoice cReplay" onClick={()=>showHandler(6)}>I would like to hear this solution again.</button>
                        <button className="btnChoice cOther" onClick={()=>showHandler(6)}>I’d like to know more about other solutions.</button>
                        <button className="btnChoice cNext" onClick={()=>showHandler(6)}>I’d like to move on to the next studio.</button>
                        <button className="btnChoice cLeave" onClick={close}>What an amusing story. See you next time!</button>
                      </div>
                      <div className="faqArea">
                        <p>Are you Interested in more detailed information?</p>
                        <div className="btnArea">
                          <button className="btnM ghost roundSty" onClick={()=>inPopSetActiveIndex(1)}>FAQ</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* end kind2 */}
              <div className={activeIndex===6 ? "is-active step" : "step"}>
                <div className="ctsBack">
                  <img src={imgExhibitionBgSelect02} alt=""/>
                </div>
                <div className="ctsInner">
                  <div className="playSelect end">
                    <div className="playSelectInner">
                      <div className="headLine">
                        <span className="bubble green">TYLER</span>
                        <strong>Where can I take you next?</strong>
                      </div>
                      <div className="choice endCase">
                        <button className="btnChoice cReplay" onClick={()=>showHandler(7)}>I would like to hear this solution again.</button>
                        <button className="btnChoice cOther" onClick={()=>showHandler(7)}>I’d like to know more about other solutions.</button>
                        <button className="btnChoice cNext" onClick={()=>showHandler(7)}>I’d like to move on to the next studio.</button>
                        <button className="btnChoice cLeave" onClick={close}>What an amusing story. See you next time!</button>
                      </div>
                      <div className="faqArea">
                        <p>Are you Interested in more detailed information?</p>
                        <div className="btnArea">
                          <button className="btnM ghost roundSty" onClick={()=>inPopSetActiveIndex(1)}>FAQ</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* simulation kind1 */}
              <div className={activeIndex===7 ? "is-active step" : "step"}>
                <div className="ctsBack">
                  <img src={imgExhibitionBgSelect01} alt=""/>
                </div>
                <div className="ctsInner">
                  <div className="playSelect simulation">
                    <div className="playSelectInner">
                      <div className="headLine">
                        <span className="bubble">AMY</span>
                        <strong>Would you like to watch the simulation video?</strong>
                      </div>
                      <div className="choice">
                        <button className="btnChoice" onClick={()=>{inPopSetActiveIndex(2);}}>Yes</button>
                        <button className="btnChoice" onClick={()=>{showHandler(8);}}>No</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* simulation kind2 */}
              <div className={activeIndex===8 ? "is-active step" : "step"}>
                <div className="ctsBack">
                  <img src={imgExhibitionBgSelect02} alt=""/>
                </div>
                <div className="ctsInner">
                  <div className="playSelect simulation">
                    <div className="playSelectInner">
                      <div className="headLine">
                        <span className="bubble green">TYLER</span>
                        <strong>Would you like to watch the simulation video?</strong>
                      </div>
                      <div className="choice">
                        <button className="btnChoice" onClick={()=>{inPopSetActiveIndex(2);}}>Yes</button>
                        <button className="btnChoice" onClick={()=>{showHandler(0);}}>No</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* holder Dim */}
              <div className={ activeDimIndex===1 ? 'is-show holdWrap' : 'holdWrap'} onClick={()=>{dimHandler(0);}}>
                {/* Utility/CES */}
                <p className="is-show">
                  <strong>Utility/CES</strong>
                  Optimized Battery Platforms Based on High-Density Design Technology
                </p>
                {/* UPS */}
                <p>
                  <strong>UPS</strong>
                  Proven High-Voltage LIB Solutions Compatible with Premium UPS
                </p>
                {/* RES */}
                <p>
                  <strong>RES</strong>
                  Scalable Standard Battery for Customized ESS
                </p>
                {/* SBB */}
                <p>
                  <strong>SBB</strong>
                  Reliable and Economical Pre-populated Battery Enclosure
                </p>
              </div>

              {/* Simulation video */}
              <div className={inPopActiveIndex===2 ? "is-show inPopWrap" : "inPopWrap"}>
                <div className="inPopContainer simulation">
                  <div className="inPopContents">
                    <video width="100%" height="100%" controls >
                      <source src={sample} type="video/mp4"/>
                    </video>
                  </div>
                  <button className="btnM ghost roundSty" onClick={()=>inPopSetActiveIndex(0)}>Close</button>
                </div>
              </div>

            </div>
          ) : null }
      </div>
    )
}

export default Video;
