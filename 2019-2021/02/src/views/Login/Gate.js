import React, { useState, useEffect } from 'react';
import Modal from '../../components/Modal';
import ModalTop from '../../components/ModalTop';
import logo from '../../assets/images/i_logo.svg';
import logoGif from '../../assets/images/i_logo_login.gif';

const Gate = ({history}) => {
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ modalOpen2, setModalOpen2 ] = useState(false);
  const [ modalOpen3, setModalOpen3 ] = useState(false);

  const [ modalFlagObj, setModalFlagObj ] = useState({
    registModal : false
    , successModal : false
  });

  const { registModal, successModal } = modalFlagObj;

  const openModal = () => {
      setModalOpen(true);
      setModalFlagObj({...modalFlagObj, registModal : true});
  }
  const openModal2 = () => {
      setModalOpen2(true);
  }
  const openModal3 = () => {
      setModalOpen3(true);
  }
  const closeModal = () => {
      setModalOpen(false);
      setModalFlagObj({...modalFlagObj, registModal : false, successModal : false});
      document.body.classList.remove('modalOpen');
  }
  const closeModal2 = () => {
      setModalOpen2(false);
      document.body.classList.remove('modalOpen');
  }
  const closeModal3 = () => {
      setModalOpen3(false);
      document.body.classList.remove('modalTopOpen');
  }

  const [isShowing, setIsShowing] = useState(false);
  const showEventShow = () => {
    setIsShowing(true);
  };
  const showEventHide = () => {
    setIsShowing(false);
  };
  const [isShowing2, setIsShowing2] = useState(true);
  const showEvent2Show = () => {
    setIsShowing2(true);
  };
  const showEvent2Hide = () => {
    setIsShowing2(false);
  };

	const click = () => {
		sessionStorage.setItem('gate', true);
		history.push('/home');	// 로그인 후 URL
	}

  const pinBtn = (e) => {
    e.target.classList.add('active');
    const notiTimer = setTimeout(() => {
      e.target.classList.remove('active');
    }, 3000);
    return () => clearTimeout(notiTimer);
  }

  useEffect(() => {
    window.$('select').niceSelect();
  }, []);

  const Pincode = () => (
    <div className="gateCts">
      <p>Check the PIN code sent to <strong>"Your@email.com"</strong></p>
      <div className="gateCtsInner">
        {/* <p className="erMsg">Error Message</p> error message */}
        <div className="pinBack">
          <span className="pinItem"><input type="password" maxlength="1"/></span>{/* 틀릴 경우 input에 'error' class 추가 */}
          <span className="pinItem"><input type="password" maxlength="1"/></span>{/* 틀릴 경우 input에 'error' class 추가 */}
          <span className="pinItem"><input type="password" maxlength="1"/></span>{/* 틀릴 경우 input에 'error' class 추가 */}
          <span className="pinItem"><input type="password" maxlength="1"/></span>{/* 틀릴 경우 input에 'error' class 추가 */}
          <span className="pinItem"><input type="password" maxlength="1"/></span>{/* 틀릴 경우 input에 'error' class 추가 */}
          <span className="pinItem"><input type="password" maxlength="1"/></span>{/* 틀릴 경우 input에 'error' class 추가 */}
        </div>
        <button className="btnM blue mt1" onClick={click}>Enter SDI-ON Website</button>
        <button className="btnResend" onClick={(e) => {pinBtn(e)}}><em>Resend PIN code</em></button>
        {/*<button className="btnResend active">Resend PIN code</button>*/}
        <div>
          <span className="loginHelp" onClick={ openModal2 }>Having trouble logging in?</span>
        </div>
      </div>
    </div>
  );
  const Login = () => (
    <div className="gateCts">
      <p>Please enter your e-mail and <span className="mBreakForce"><strong>verify the PIN code</strong> to get access to the site.</span></p>
      <div className="gateCtsInner">
        {/* <p className="erMsg">Error Message</p> error message */}
        <input type="text" placeholder="ENTER YOUR E-MAIL ADDRESS" className="emailInput"/>{/* 틀릴 경우 input에 'error' class 추가 */}
        <button className="btnM blue mt1" onClick={() => {showEventShow();showEvent2Hide();}}>Send Me a PIN code</button>
        <div className="txtDivider">or</div>
        <button className="btnM whiteLine" onClick={ openModal }>Ask for Sign up</button>
        <div>
          <span className="loginHelp" onClick={ openModal2 }>Having trouble logging in?</span>
        </div>
        {/*  <select className='nice-select' id='select'>
          <option>123</option>
          <option>456</option>
        </select> */}
        {isShowing &&  <Pincode />}
      </div>
    </div>
  );

  return (
    <div id="gateWrap" className="login">
      <div className="gateBack">
        <div className="gateInner">
          <h1><img src={logoGif} alt="SDI on"/></h1>
          <div className="intro">
            <p data-aos="fade-up" data-aos-duration="1000">Welcome to SDI ON,<br/>Samsung SDI’s <strong className="point">Private online platform</strong></p>
            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"><strong className="highlight">We are <span className="mBreak">all set now.</span></strong></div>
          </div>
          {isShowing2 &&
            <div id="login" data-aos="fade-down" data-aos-delay="900" data-aos-duration="2000">
              <Login />
            </div>
          }
          {isShowing &&
            <div id="pincode" data-aos="fade-down" data-aos-delay="900" data-aos-duration="2000">
              <Pincode />
            </div>
          }
        </div>
      </div>

      {/* ==== 팝업 ==== */}
      {modalOpen &&
        <Modal open={ modalOpen } close={ closeModal } header="Registration" keyclassName="registrationPop">
          {registModal && (
            <div className="regist">
              <div className="modalDetail">
                <p className="subModalTt">Please fill in the blanks to sign up</p>
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
                </div>
                <div className="formBox">
                  <div className="formBoxTt">
                    <strong>Company Information</strong>
                  </div>
                  <div className="col2">
                    <dl>
                      <dt>Company</dt>
                      <dd><input type="text" placeholder="In English only"/></dd>
                    </dl>
                    <dl>
                      <dt>Department</dt>
                      <dd><input type="text" placeholder="In English only"/></dd>
                    </dl>
                  </div>
                  <dl>
                    <dt>e-mail (your Work E-mail)</dt>
                    <dd>
                      <input type="text" placeholder="example@email.com"/>
                      <p className="erMsg">* Invalid e-mail address</p>
                    </dd>
                  </dl>
                </div>
                <p className="tC policy">By signing up you agree to the following <span className="underLine" onClick={openModal3}>Personal Information Management Policy</span></p>
              </div>
              <div className="modalBtn">
                <button className="btnM white roundSty" onClick={closeModal}>Cancel</button>
                <button className="btnM black roundSty" onClick={() => {
                    setModalFlagObj( {...modalFlagObj, successModal : true, registModal : false})
                  }
                }>Submit</button>
              </div>
            </div>
          )}
          {successModal && (
            <div className="success">
              <div className="modalDetail">
                <div className="successMsg">
                  <strong>Your request<br/>has been successfully<br/><b>submitted</b></strong>
                  <p className="tC">You will get approval or disapproval<br/>from the administrator via e-mail within a couple of days.</p>
                </div>
                <div className="greenBack">
                  <strong>Confirmation</strong>
                  <dl>
                    <dt>Name:</dt>
                    <dd>First Last name</dd>
                  </dl>
                  <dl>
                    <dt>e-mail:</dt>
                    <dd>example@email.com</dd>
                  </dl>
                  <dl>
                    <dt>Company:</dt>
                    <dd>ABC Inc.</dd>
                  </dl>
                </div>
              </div>
              <div className="modalBtn">
                <button className="btnM black roundSty" onClick={closeModal}>OK!</button>
              </div>
            </div>
          )}
        </Modal>
      }
      {modalOpen2 &&
        <Modal open={ modalOpen2 } close={ closeModal2 } keyclassName="helpPop">
          <div className="modalHeader"><header>Still having a problem?<br/>Let us help you</header></div>
          <div className="modalDetail">
            <ul>
              <li><strong>STEP1.</strong> Make certain that you enter a correct e-mail address</li>
              <li><strong>STEP2.</strong> Check out your spam folder</li>
              <li><strong>STEP3.</strong> If the problem still persists. Please leave your email and name in the input box below. The web administrator will contact you.</li>
            </ul>
            <div className="greenBack helpsUs">
              <p>Please leave your work e-mail address with which you are having trouble signing in</p>
              <div className="formBox">
                <div className="col2 mg0">
                  <dl>
                    <dt>E-MAIL</dt>
                    <dd><input type="text" placeholder="example@email.com"/></dd>
                  </dl>
                  <dl>
                    <dt>NAME</dt>
                    <dd><input type="text" placeholder="In English only"/></dd>
                  </dl>
                </div>
                <button className="btnM">submit</button>
              </div>
            </div>
          </div>
          <div className="modalBtn">
           <button className="btnM white roundSty" onClick={closeModal2}> Close </button>
          </div>
        </Modal>
      }
      {modalOpen3 &&
        <ModalTop open={ modalOpen3 } close={ closeModal3 } header="Personal Information Management Policy" keyclassName="policyPop gatePolicy">
          <div className="policy fullpagePopScroll">
            <div className="topLine">
              <strong>Samsung SDI will cherish your information and Samsung SDI’s Personal Information Management Policy contains the following contents.</strong>
              <div className="tR">Date: June 1, 2021 (V10.0)</div>
            </div>
            <p>Samsung SDI Co., Ltd. (hereinafter referred to as ‘The Company`) protects the personal information and interests of customers, visitors, etc. in accordance with the Personal Information Protection Act and the Act on Promotion of Information and Communications Network Utilization and Information Protection.<br/>In addition, we are preparing the following personal information management policy so that we can handle users' complaints related to personal information smoothly.</p>
            <div className="policyList">
              <ol>
                <li>
                  <strong>1. Personal information items for collection and purposes of processing</strong>
                  <ol>
                    <li>1) The company collects and uses the following personal information solely for the specified purposes.
                      <ul>
                        <li>List of information (required and optional) and purposes for collection</li>
                      </ul>
                      <div className="policyTvs">
                        <table>
                          <thead>
                            <tr>
                              <th>Category</th>
                              <th>Items for collection</th>
                              <th>Purpose</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Homepage</td>
                              <td>-	Cookies</td>
                              <td>Notice, Choice, Access and security</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p>Collection method<br/>-	Homepage : Automatic collection using automatic information collection device (automatic generation information collection tools)</p>
                    </li>
                    <li>2) The collected personal information will not be used for any purposes other than the above. If the purpose of use changes, necessary actions will be taken such as collecting a separate agreement from employees according to related laws.</li>
                    <li>3) The users have the right to refuse the collection and use of their personal information that are not permitted by the law. However, refusal may interrupt the company’s provision of any services.</li>
                  </ol>
                </li>
                <li>
                  <strong>2. Personal information process and retention period</strong>
                  <ol>
                    <li>1) The company processes and retains users’ personal information only within the process and retention period, as agreed by employees upon collection of personal information or under relevant laws.</li>
                    <li>2) The process and retention period of the personal information collected from and agreed by users is as below.
                      <div className="policyTvs">
                        <table>
                          <thead>
                            <tr>
                              <th colSpan="2">Classification</th>
                              <th>Retention</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td rowSpan="2">Required information</td>
                              <td>Personal information inevitably collected and used for compliance with a special regulation or fulfilment of a legal obligation.</td>
                              <td rowSpan="3">Until achievement of the goal</td>
                            </tr>
                            <tr>
                              <td>Personal information inevitably collected and used for conclusion and implementation of an employment contract.</td>
                            </tr>
                            <tr>
                              <td>Optional information</td>
                              <td>Optional information	Personal information collected and used with prior consent of an employee.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </li>
                    <li>3) The process and retention period of the personal information collected under the law is as below.
                      <div className="policyTvs">
                        <table>
                          <thead>
                            <tr>
                              <th>Retained items</th>
                              <th>Retention period</th>
                              <th>Legal grounds</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Display/advertisement records</td>
                              <td>6 months</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>Website visit history</td>
                              <td>3 months</td>
                              <td>Protection of Communications Secrets Act</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>3. Provision of personal information to a third party</strong>
                  <ol>
                    <li>1) The company does not provide users’ personal information to an external party or a third party without consent of the user.</li>
                    <li>2) In the following cases however, personal information may be provided to a third party without prior consent of the user.
                      <ul>
                        <li>If provision of the information is inevitable to comply with special regulations or statutory obligations.</li>
                        <li>If the owner of the information or its legal representative is unable to make an expression of intention or is unable to express prior content due to unknown address, and if such information is clearly deemed urgent and necessary for the life, body and property of the information owner or a third party.</li>
                        <li>If provision of the information is required by law or investigative authorities for investigative purposes under relevant laws.</li>
                      </ul>
                    </li>
                  </ol>
                  <div className="policyTvs">
                    <table>
                      <thead>
                        <tr>
                          <th>Destination</th>
                          <th>Providing item</th>
                          <th>Purpose</th>
                          <th>Providing period</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
                <li>
                  <strong>4. Consignment of personal information processing</strong>
                  <ol>
                    <li>
                      1) The company consigns the following personal information processing tasks to external companies for smooth personal information business processing.
                      <div className="policyTvs">
                        <table>
                          <thead>
                            <tr>
                              <th>Category</th>
                              <th>Trustee</th>
                              <th>Business contents to entrust</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Direct consignment</td>
                              <td>Works<br/>Worldwide<br/>inc</td>
                              <td>measure the number of visits, average time spent on the site, pages viewed, etc</td>
                            </tr>
                            <tr>
                              <td>Re-consignment</td>
                              <td>DaamDaamSamuso</td>
                              <td>Identity authentication using email communication company information and email address provided to the registration system</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </li>
                    <li>2) The company prohibits strictly defines and manages technical/administrative protection measures, safety assurance measures, re-entrustment restrictions, management and supervision of trustees, confidentiality and liabilities to protect personal information processed through consignments.</li>
                    <li>3) If any changes in the consigning company or commissioned tasks occur, the company posts such changes on the company bulletin board without delay.</li>
                  </ol>
                </li>
                <li>
                  <strong>5. Rights, obligations and exercing methods of users and legal representatives</strong>
                  <ol>
                    <li>1) Users who provide personal information may exercise the following rights to the company at any time
                      <ul>
                        <li>Need to view personal information</li>
                        <li>If there is an error, correction request</li>
                        <li>Deletetion request</li>
                        <li>Deletetion request</li>
                      </ul>
                    </li>
                    <li>2) The exercise of rights under paragraph (1) can be done in writing, telephone, e-mail, etc. to the company, and the company will take action without delay.</li>
                    <li>3) If the user requests correction of errors in personal information or deletion of personal information, the company does not use or provide that personal information until the correction or deletion is completed.</li>
                    <li>4) The exercise of rights under paragraph (1) can be done through the agent, such as the legal representative of the user or the person who has been delegated. In this case, you must submit a letter of attorney in accordance with Appendix 11 of the Enforcement Rule of the Personal Information Protection Act.</li>
                    <li>5) The user shall not infringe on the personal information and privacy of the user himself / herself or other person under the management of the company in order to comply with related statutes such as the Personal Information Protection Act.</li>
                    <li>6) The company is seeking the consent of the legal representative in case of the need to collect personal information of children under the age of 14 to provide services.</li>
                  </ol>
                </li>
                <li>
                  <strong>6. Deletion of personal information</strong>
                  <ol>
                    <li>1) The company shall delete the relevant personal information without delay by the following procedures and methods if the period of personal information is elapsed and the purpose of processing is achieved.
                      <ul>
                        <li>Deletion procedure<br/>Measures for destruction or deletion after being stored for a certain period in accordance with internal policies and other related statutes</li>
                        <li>Deletion method<br/>Personal information recorded in a paper document is scraped or incinerated by a grinder, and personal information stored in the form of an electronic file is deleted by a method that can not be recorded or restored.</li>
                      </ul>
                    </li>
                    <li>2) If the personal information held by the user has expired or the purpose of processing has been achieved, the personal information must be kept in accordance with other statutes.</li>
                  </ol>
                </li>
                <li>
                  <strong>7. Measures to ensure the safety of personal information</strong>
                  <ol>
                    <li>1) The company is securing stability by taking the following administrative technical protection measures so that the personal information it handles is not lost, stolen, leaked, modulated or damaged.
                      <ul>
                        <li>Administrative measures<br/>Guidelines for information security regulations and internal management plans for personal information, compliance, inspection, education, etc.</li>
                        <li>Technical measures<br/>Management / authentication of access rights such as personal information processing system, installation / operation of access control system and security program, encryption of personal information, etc.</li>
                        <li>Physical action<br/>Establishment & operation of access control of computer room and personal information storage room, Protection measures for printing and copy.</li>
                      </ul>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>8. Matters concerning the installation, operation and rejection of an automatic personal information collection device</strong>
                  <ol>
                    <li>1) The company operates a 'cookie' that stores and finds users' information from time to time. Cookie is a very small text file sent by the server used to run the company ’ s website to the user ’ s web browser, which is stored on the user ’ s computer hard disk.</li>
                    <li>2) The purpose of using cookies and the method of denying setting are as follows.
                      <ul>
                        <li>Purpose of use such as cookies<br/>Implementation of automatic login function, personal customization service such as “no more pop-up today”</li>
                        <li>Rejecting method of cookie setting<br/>Users can also use Web browser option settings to allow all cookies, go through confirmation every time cookies are saved, or refuse to save all cookies. However, if the user refuses to install the cookie, it may be difficult to provide the service.</li>
                      </ul>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>9. Personal Information Protection Management Department</strong>
                  <ol>
                    <li>1) The company is responsible for the management of personal information and operates a personal information protection management department as follows to deal with the grievances of users related to personal information.
                      <div className="policyTvs">
                        <table>
                          <thead>
                            <tr>
                              <th>Protection Officer</th>
                              <th>Customer service department</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Customer service department</td>
                              <td>Information Security Group<br/>(031-8006-3502 / s-report@samsung.com)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </li>
                    <li>2) If you ask about the user's personal information protection, complaint handling, damage relief, etc., we will reply and process it without delay.</li>
                  </ol>
                </li>
                <li>
                  <strong>10. Method for compensatinng for performing perference of persoanl information and revention for inpension of rights.</strong>
                  <ol>
                    <li>1) Users can request access to personal information protection manager. We will try to handle it quickly when I ask for inspection.</li>
                    <li>2) You can contact the following agencies for reports, damage relief, and counseling on user's personal information infringement.
                      <ul>
                        <li>Personal Information Violation Report Center<br/>(http://Privacy.kisa.or.kr, Tel.118)</li>
                        <li>Supreme Public Prosecutor's Office Cyber Investigation Department<br/>(http://www.spo.go.kr, Tel.1301)</li>
                        <li>Electronic Cybercrime Report & Management system (https://ecrm.cyber.go.kr/minwon/main, Tel.182)</li>
                      </ul>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>11. History of changes in personal information management policies</strong>
                  <ol>
                    <li>1) This personal information management policy (V10.0) applies from June 1, 2021.</li>
                    <li>2) The revision of the personal information management policy is as follows.</li>
                  </ol>
                  <div className="policyTvs">
                    <table>
                      <colgroup>
                        <col width="40"/>
                        <col width="140"/>
                        <col width="300"/>
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="tC">Ver</th>
                          <th className="tC">Revision date</th>
                          <th>Revision details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="tC">V10.0</td>
                          <td className="tC">2021.06.01</td>
                          <td>Change the items and methods of collecting personal information</td>
                        </tr>
                        <tr>
                          <td className="tC">V9.0</td>
                          <td className="tC">2020.03.02</td>
                          <td>Change the items and methods of collecting personal information and the service department</td>
                        </tr>
                        <tr>
                          <td className="tC">V8.0</td>
                          <td className="tC">2019.04.25</td>
                          <td>Change the items and methods of collecting personal information and person in charnge of protection</td>
                        </tr>
                        <tr>
                          <td className="tC">V7.0</td>
                          <td className="tC">2018.05.23</td>
                          <td>Change the items and periods of collecting personal information and person in charnge of protection</td>
                        </tr>
                        <tr>
                          <td className="tC">V6.0</td>
                          <td className="tC">2017.03.15</td>
                          <td>Integration of management policy and treatment policy into management policy</td>
                        </tr>
                        <tr>
                          <td className="tC">V5.0</td>
                          <td className="tC">2016.02.12</td>
                          <td>Change the person in charnge of protection</td>
                        </tr>
                        <tr>
                          <td className="tC">V4.0</td>
                          <td className="tC">2015.08.24</td>
                          <td>Separation into management policy and treatment policy</td>
                        </tr>
                        <tr>
                          <td className="tC">V3.0</td>
                          <td className="tC">2013.07.25</td>
                          <td>Modification of management/treatment policy</td>
                        </tr>
                        <tr>
                          <td className="tC">V2.0</td>
                          <td className="tC">2011.09.30</td>
                          <td>Integration into management/treatment policy</td>
                        </tr>
                        <tr>
                          <td className="tC">V1.0</td>
                          <td className="tC">2007.10.22</td>
                          <td>Enactment of personal information treatment policy</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div className="modalBtn">
            <button className="btnM white roundSty" onClick={closeModal3}> CLOSE </button>
          </div>
        </ModalTop>
      }
      {/* ==== dnd 팝업 ==== */}
    </div>
  )
}

export default Gate;