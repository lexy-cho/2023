import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import ToastModal from "../components/ToastModal";

const Layout = () => {
  // const [isShowing, setIsShowing] = useState(false);
  // const openModal = () => {
  //   setIsShowing(true);
  // };

  // const [activeIndex, setActiveIndex]=useState(0);
  // const tabClickHandler=(index)=>{
  //     setActiveIndex(index);
  // };
  // const tabContArr=[
  //     {
  //       id: '0',
  //       tabTitle:(
  //         <li className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)}><button>Tab Menu 1</button></li>
  //       ),
  //       tabCont:(
  //         <div className="tabData">Tab Menu 1 Data</div>
  //       )
  //     },
  //     {
  //       id: '1',
  //       tabTitle:(
  //         <li className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHandler(1)}><button>Tab Menu 2</button></li>
  //       ),
  //       tabCont:(
  //         <div className="tabData">Tab Menu 2 Data</div>
  //       )
  //     },
  //     {
  //       id: '2',
  //       tabTitle:(
  //         <li className={activeIndex===2 ? "is-active" : ""} onClick={()=>tabClickHandler(2)}><button>Tab Menu 3</button></li>
  //       ),
  //       tabCont:(
  //         <div className="tabData">Tab Menu 3 Data</div>
  //       )
  //     }
  // ];

  const [modalOpen, setModalOpen ] = useState(false);
  const openModal = () => {
      setModalOpen(true);
  }
  const closeModal = () => {
      setModalOpen(false);
  }
  const [isShowing, setIsShowing] = useState(false);
  const openToastModal = () => {
    setIsShowing(true);
  };
  useEffect(() => {
    if (isShowing) {
      const notiTimer = setTimeout(() => {
        setIsShowing(false);
      }, 3000);
      return () => clearTimeout(notiTimer);
    }
  }, [isShowing]);

  const [isShowing2, setIsShowing2] = useState(false);
  const showEvent = () => {
    setIsShowing2(true);
  };
  const showEvent2 = () => {
    setIsShowing2(false);
  };

  const pinBtn = (e) => {
    e.target.classList.add('active');
    const notiTimer = setTimeout(() => {
      e.target.classList.remove('active');
    }, 3000);
    return () => clearTimeout(notiTimer);
  }

  return (
    <div id="wrap">
      {/* container */}
      <div id="container" style={{backgroundColor:'white',position:'relative',zIndex:20}}>
      <section>
        <div className="content">
          <article>

          <div className="btnSample">
            <button className="btnResend" onClick={(e) => {pinBtn(e)}}><em>Resend PIN code</em></button>
          </div>
          <br/>

            <button className="btnM" onClick={ openModal }>alert 팝업</button>
            {modalOpen &&
              <Modal open={ modalOpen } close={ closeModal } header="Modal heading" keyclassName="alertPop">
                <div className="modalDetail"><div>리액트 함수형 모달 팝업창입니다.</div></div>
                <div className="modalBtn">
                 <button className="btnM white" onClick={closeModal}> Cancel </button>
                 <button className="btnM" onClick={closeModal}> Delete </button>
                </div>
              </Modal>
            }

            <div className="gridSet grid3">
              <div className="gridItem">
                <strong>Font - CocoSharp</strong>
                <p style={{fontFamily:'CocoSharp L W05 Extralight'}}>CocoSharp L W05 Extralight</p>
                <p style={{fontFamily:'CocoSharp L W05 Extralight It'}}>CocoSharp L W05 Extralight It</p>
                <p style={{fontFamily:'CocoSharp L W05 Light'}}>CocoSharp L W05 Light</p>
                <p style={{fontFamily:'CocoSharp L W05 Light Italic'}}>CocoSharp L W05 Light Italic</p>
                <p style={{fontFamily:'CocoSharp L W05 Regular'}}>CocoSharp L W05 Regular</p>
                <p style={{fontFamily:'CocoSharp L W05 Italic'}}>CocoSharp L W05 Italic</p>
                <p style={{fontFamily:'CocoSharp L W05 Bold'}}>CocoSharp L W05 Bold</p>
                <p style={{fontFamily:'CocoSharp L W05 Bold Italic'}}>CocoSharp L W05 Bold Italic</p>
                <p style={{fontFamily:'CocoSharp L W05 Extrabold'}}>CocoSharp L W05 Extrabold</p>
                <p style={{fontFamily:'CocoSharp L W05 Extrabold It'}}>CocoSharp L W05 Extrabold It</p>
                <p style={{fontFamily:'CocoSharp L W05 Heavy'}}>CocoSharp L W05 Heavy</p>
                <p style={{fontFamily:'CocoSharp L W05 Heavy Italic'}}>CocoSharp L W05 Heavy Italic</p>
              </div>
              <div className="gridItem">
                <strong>Font - NanumGothic</strong>
                <p style={{fontFamily:'NanumGothic', fontWeight:400}}>NanumGothic Regular</p>
                <p style={{fontFamily:'NanumGothic', fontWeight:600}}>NanumGothic Bold</p>
                <p style={{fontFamily:'NanumGothic', fontWeight:800}}>NanumGothic ExtraBold</p>
              </div>
              <div className="gridItem">
                <strong>Font - Oswald</strong>
                <p style={{fontFamily:'Oswald-ExtraLight'}}>Oswald-ExtraLight</p>
                <p style={{fontFamily:'Oswald-Light'}}>Oswald-Light</p>
                <p style={{fontFamily:'Oswald-Regular'}}>Oswald-Regular</p>
                <p style={{fontFamily:'Oswald-Medium'}}>Oswald-Medium</p>
                <p style={{fontFamily:'Oswald-SemiBold'}}>Oswald-SemiBold</p>
                <p style={{fontFamily:'Oswald-Bold'}}>Oswald-Bold</p>
              </div>
            </div>
            <div className="gridSet grid3">
              <div className="gridItem">
                <strong>Font - TitilliumWeb</strong>
                <p style={{fontFamily:'TitilliumWeb-ExtraLight'}}>TitilliumWeb-ExtraLight</p>
                <p style={{fontFamily:'TitilliumWeb-ExtraLightItalic'}}>TitilliumWeb-ExtraLightItalic</p>
                <p style={{fontFamily:'TitilliumWeb-Light'}}>TitilliumWeb-Light</p>
                <p style={{fontFamily:'TitilliumWeb-LightItalic'}}>TitilliumWeb-LightItalic</p>
                <p style={{fontFamily:'TitilliumWeb-Regular'}}>TitilliumWeb-Regular</p>
                <p style={{fontFamily:'TitilliumWeb-Italic'}}>TitilliumWeb-Italic</p>
                <p style={{fontFamily:'TitilliumWeb-SemiBold'}}>TitilliumWeb-SemiBold</p>
                <p style={{fontFamily:'TitilliumWeb-SemiBoldItalic'}}>TitilliumWeb-SemiBoldItalic</p>
                <p style={{fontFamily:'TitilliumWeb-Bold'}}>TitilliumWeb-Bold</p>
                <p style={{fontFamily:'TitilliumWeb-BoldItalic'}}>TitilliumWeb-BoldItalic</p>
                <p style={{fontFamily:'TitilliumWeb-Black'}}>TitilliumWeb-Black</p>
              </div>
              <div className="gridItem">
                <strong>Font - Poppins</strong>
                <p style={{fontFamily:'Poppins-Thin'}}>Poppins-Thin</p>
                <p style={{fontFamily:'Poppins-ThinItalic'}}>Poppins-ThinItalic</p>
                <p style={{fontFamily:'Poppins-ExtraLight'}}>Poppins-ExtraLight</p>
                <p style={{fontFamily:'Poppins-ExtraLightItalic'}}>Poppins-ExtraLightItalic</p>
                <p style={{fontFamily:'Poppins-Light'}}>Poppins-Light</p>
                <p style={{fontFamily:'Poppins-LightItalic'}}>Poppins-LightItalic</p>
                <p style={{fontFamily:'Poppins-Regular'}}>Poppins-Regular</p>
                <p style={{fontFamily:'Poppins-Italic'}}>Poppins-Italic</p>
                <p style={{fontFamily:'Poppins-Medium'}}>Poppins-Medium</p>
                <p style={{fontFamily:'Poppins-MediumItalic'}}>Poppins-MediumItalic</p>
                <p style={{fontFamily:'Poppins-SemiBold'}}>Poppins-SemiBold</p>
                <p style={{fontFamily:'Poppins-SemiBoldItalic'}}>Poppins-SemiBoldItalic</p>
                <p style={{fontFamily:'Poppins-Bold'}}>Poppins-Bold</p>
                <p style={{fontFamily:'Poppins-BoldItalic'}}>Poppins-BoldItalic</p>
                <p style={{fontFamily:'Poppins-ExtraBold'}}>Poppins-ExtraBold</p>
                <p style={{fontFamily:'Poppins-ExtraBoldItalic'}}>Poppins-ExtraBoldItalic</p>
                <p style={{fontFamily:'Poppins-Black'}}>Poppins-Black</p>
                <p style={{fontFamily:'Poppins-BlackItalic'}}>Poppins-BlackItalic</p>
              </div>
              <div className="gridItem"></div>
            </div>
            <br/>
            <strong>Button</strong>
            <button className="btnM">Black</button>
            <button className="btnM white">White</button>
            <button className="btnM blue">Blue</button>
            <button className="btnM WhiteLine">WhiteLine</button>
            <button className="btnM black roundSty">Black</button>
            <button className="btnM roundSty white">White</button>
            <button className="btnM roundSty blue">Blue</button>
            <button className="btnM roundSty WhiteLine">WhiteLine</button>
            <br/>
            <br/>
            <strong>Input</strong>
            <input type="text" placeholder="In English only"/>
            <br/>
            <br/>
            {/* tab-wrap
            <div className="tabWrap">
                {/* tab
                <div className="tabBack">
                    <div className="tabNav">
                        <nav>
                            <ul>
                              {tabContArr.map((section, index)=>{
                                  return section.tabTitle
                              })}
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* // tab
                <div className="tabLayout">
                  {tabContArr[activeIndex].tabCont}
                </div>
            </div>
              //tab-wrap */}
            <strong>FormBox</strong>
            <div className="formBox">
              <div className="formBoxTt">
                <strong>Personal Information</strong>
              </div>
              <div className="col2">
                <dl>
                  <dt>First Name</dt>
                  <dd><input type="text" placeholder="In English only"/></dd>
                </dl>
                <dl>
                  <dt>Last Name</dt>
                  <dd><input type="text" placeholder="In English only"/></dd>
                </dl>
              </div>
              <dl>
                <dt>e-mail (your Work E-mail)</dt>
                <dd>
                  <input type="text" placeholder="In English only"/>
                  <p className="erMsg">* Invalid e-mail address</p>
                </dd>
              </dl>
            </div>
            {/*<React.Fragment>
              <button className="btnM" onClick={ openModal }>alert 팝업</button>
              <Modal open={ modalOpen } close={ closeModal } header="Modal heading">
                <div className="modalDetail"><div>리액트 함수형 모달 팝업창입니다.</div></div>
                <div className="modalBtn">
                 <button className="btnM white" onClick={closeModal}> Cancel </button>
                 <button className="btnM" onClick={closeModal}> Delete </button>
                </div>
              </Modal>
            </React.Fragment>*/}
          </article>
        </div>
      </section>
      </div>
      {/* end container */}
    </div>
  )
}

export default Layout;
