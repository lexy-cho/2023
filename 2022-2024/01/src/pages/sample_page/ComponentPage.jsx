import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BaseInput, ItemTag, BaseButton, ImageSetting, BaseSelect  } from '@components/common';
import { Rating } from 'react-simple-star-rating';
import sample01 from '@assets/images/sample/sample2.png';
import sample02 from '@assets/images/sample/sample10.png';

const ComponentPage = () => {
  const [certVisible, setCertVisible] = useState(false);
  const [dmoreVisible, setDmoreVisible] = useState(false);
  const [pwVisible, setPwVisible] = useState(false);
  const [tab , setTab] = useState(1);
  const handleTab = (tab) => {
      setTab(tab);
  }
  const tabRef = useRef();
  const [imgFileList, setImgFileList] = useState([]);
  useEffect(() => {
    //console.log(imgFileList);
  }, [imgFileList]);

  const emailItems = [{ name: 'gmail.com', value: 0 }, { name: 'naver.com', value: 1 }];
  const phoneItems = [{ name: '010', value: 0 }, { name: '011', value: 1 }];
  const accountItems = [{ name: '국민은행', value: 0 }, { name: '카카오뱅크', value: 1 }];


  return (
    <>
      <section>
        <h2><strong>컴포넌트</strong> & 워크리스트</h2>
        <article>
          <div className='componentLayout'>
            <div className='cptTable'>
              <table>
                <tbody>
                  <tr>
                    <th>Text</th>
                  </tr>
                  <tr>
                    <td>
                      <p style={{fontWeight: '300'}}> Pretendard-Light &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;font-weight:300; </p>
                      <p style={{fontWeight: '400'}}> Pretendard-Regular &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;font-weight:400; </p>
                      <p style={{fontWeight: '500'}}> Pretendard-Medium &nbsp; &nbsp; &nbsp; &nbsp;font-weight:500; </p>
                      <p style={{fontWeight: '600'}}> Pretendard-SemiBold &nbsp; &nbsp; font-weight:600; </p>
                      <p style={{fontWeight: '700'}}> Pretendard-Bold &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;font-weight:700; </p>
                    </td>
                  </tr>
                  <tr>
                    <th>Button</th>
                  </tr>
                  <tr>
                    <td>
                      <button className='btnM'>Main</button> <button className='btnM' disabled >Disabeld</button> &nbsp;&nbsp;
                      <button className='btnL'>Line</button> <button className='btnL' disabled >Disabeld</button> &nbsp;&nbsp;
                      <button className='btnB'>Black</button> <button className='btnB' disabled >Disabeld</button> &nbsp;&nbsp; <br/><br/>
                      <button className='btnBL'>Black Line</button> <button className='btnBL' disabled >Disabeld</button> &nbsp;&nbsp;
                      <button className='btnWL'>White Line</button> <button className='btnWL' disabled >Disabeld</button>   <br/><br/>
                      <button className='btnM sm'>Btn 34</button> <button className='btnL sm'>Btn 34</button> <button className='btnB sm'>Btn 34</button> <button className='btnBL sm'>Btn 34</button> <br/><br/>
                      <button className='bCart'><em>장바구니</em></button>
                      <button className='bCart'><em>장바구니</em><i>8</i></button>
                      <button className='bNoty'><em>알림</em></button>
                      <button className='bNoty'><em>알림</em><i>8</i></button>  <br/><br/>
                      <Link className='bMR ss'>더보기</Link> &nbsp;&nbsp;
                      <Link className='bMR'>전체 보기</Link> &nbsp;&nbsp;
                      <Link className='bMR'>자세히 보기</Link> &nbsp;&nbsp;
                      <Link className='bRH'>리셀러홈</Link> &nbsp;&nbsp;
                      <Link className='bIW'>전액사용</Link> &nbsp;&nbsp;
                      {/* btn In Write */}
                      <Link className='bAV'>전체 보기</Link> &nbsp;&nbsp;
                      <Link className='bRW'>리뷰 쓰기 D-30</Link> &nbsp;&nbsp;
                    </td>
                  </tr>
                  <tr>
                    <th>Input</th>
                  </tr>
                  <tr>
                    <td className='cBasicInput'>
                      <input type='text' placeholder='Placeholder' />
                      <input type='text' placeholder='Placeholder' defaultValue='Value' />
                      <input type='text' placeholder='Readonly' defaultValue='Readonly' readOnly/>
                      <input type='text' placeholder='Disabled' defaultValue='Disabled' disabled/>
                      <input type='text' placeholder='Error Case' className='error' />
                      <br/><br/>
                      <input type='checkbox' id='checkbox00' /> &nbsp;
                      <input type='checkbox' id='checkbox01' /> &nbsp; &nbsp;
                      <span className='checkSet'>
                        <input type='checkbox' id='checkbox1' />
                        <label htmlFor='checkbox1'>checkSet</label>
                      </span>
                      <span className='checkSet'>
                        <input type='checkbox' id='checkbox2' defaultChecked />
                        <label htmlFor='checkbox2'>checkSet</label>
                      </span>
                      <span className='checkSet'>
                        <input type='checkbox' id='checkbox3' disabled />
                        <label htmlFor='checkbox3'>checkSet</label>
                      </span>
                      <span className='checkSet'>
                        <input type='checkbox' id='checkbox4' defaultChecked disabled />
                        <label htmlFor='checkbox4'>checkSet</label>
                      </span>
                      <br/><br/>
                      <input type='checkbox' id='checkbox42' className='rCheck' /> &nbsp;
                      <input type='checkbox' id='checkbox43' className='rCheck' defaultChecked /> &nbsp; &nbsp;
                      <span className='checkSet'>
                        <input type='checkbox' id='checkbox51' className='rCheck' />
                        <label htmlFor='checkbox51'>checkSet</label>
                      </span>
                      <span className='checkSet'>
                        <input type='checkbox' id='checkbox52' className='rCheck' defaultChecked />
                        <label htmlFor='checkbox52'>checkSet</label>
                      </span>
                      <span className='checkSet'>
                        <input type='checkbox' id='checkbox53' className='rCheck' disabled />
                        <label htmlFor='checkbox53'>checkSet</label>
                      </span>
                      <span className='checkSet'>
                        <input type='checkbox' id='checkbox54' className='rCheck' defaultChecked disabled />
                        <label htmlFor='checkbox54'>checkSet</label>
                      </span>
                      <br/><br/>
                      <input type='radio' name='radio00' id='radio01' /> &nbsp;
                      <input type='radio' name='radio00' id='radio02' defaultChecked /> &nbsp; &nbsp;
                      <span className='radioSet'>
                        <input type='radio' name='radio1' id='radio1' />
                        <label htmlFor='radio1'>radioSet</label>
                      </span>
                      <span className='radioSet'>
                        <input type='radio' name='radio1' id='radio2' defaultChecked />
                        <label htmlFor='radio2'>radioSet</label>
                      </span>
                      <span className='radioSet'>
                        <input type='radio' name='radio2' id='radio3' disabled />
                        <label htmlFor='radio3'>radioSet</label>
                      </span>
                      <span className='radioSet'>
                        <input type='radio' name='radio2' id='radio4' defaultChecked disabled />
                        <label htmlFor='radio4'>radioSet</label>
                      </span>
                      <br/><br/>
                      <span className="toggleSet">
                          <input type="checkbox" id="push" />
                      </span> &nbsp;
                      <span className="toggleSet">
                          <input type="checkbox" id="push1" defaultChecked />
                      </span>
                      <br/><br/>
                      <input type='checkbox' className='likeSet' />
                      <input type='checkbox' className='likeSet' defaultChecked />
                      <br/><br/>
                      <div className='sorting'>
                        <span>
                          <input type='radio' id='sorting1' name='sorting1' defaultChecked />
                          <label htmlFor='sorting1'>sorting 1</label>
                        </span>
                        <span>
                          <input type='radio' id='sorting2' name='sorting1' />
                          <label htmlFor='sorting2'>sorting 2</label>
                        </span>
                        <span>
                          <input type='radio' id='sorting3' name='sorting1' />
                          <label htmlFor='sorting3'>sorting 3</label>
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className='taSet'>
                        <textarea placeholder='최소 15자 이상 작성해 주세요.'></textarea>
                        <em>2,000/2,000</em>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className={`pwSet ${pwVisible ? 'on' : ''}`}>
                        <input type={`${pwVisible ? 'text' : 'password'}`} placeholder='비밀번호를 입력하세요.' />
                        <button onClick={() => setPwVisible(!pwVisible)}>Password View</button>
                      </span> <br/><br/>
                      <span className='ipBtn'>
                        <input type='text' placeholder='입력하세요' />
                        <button>버튼</button>
                      </span> <br/>
                      <span className='ipBtn'>
                          <span>
                            <input type='text' placeholder='입력하세요' />
                            <em>00:55</em>
                          </span>
                          <input type='button' value='인증 확인' />
                      </span>  <br/><br/>
                      <span className='unit'>
                        <input type='text' placeholder='입력하세요' />
                        <em>USD</em>
                      </span> <br/>
                      <span className="numSet">
                        <button>-</button>
                        <strong>0</strong>
                        <button>+</button>
                      </span> &nbsp; &nbsp;
                      <input type='text' placeholder='2024-05-15' className='cal' /> <br/><br/>
                      <div style={{maxWidth: '500px', margin: '0 auto'}}>
                        <span className='emailSet'>
                          <BaseInput type="text" placeholder="User name" />
                          <em>@</em>
                          <BaseSelect items={emailItems} placeholder={'gmail.com'} onChange={(e) => console.log(e)} />
                        </span>
                        <dd className='phoneSet'>
                          <BaseSelect items={phoneItems} placeholder={'010'} onChange={(e) => console.log(e)} />
                          <input type='text' />
                        </dd>
                        <dd className='addressSet'>
                          <span className='zip'>
                            <button type='button' className='bIW'>주소찾기</button>
                            <input type='text' disabled />
                          </span>
                          <p>서울특별시 영등포구 선유로3길 7-3 (문래동5가, 유니온빌딩별관) </p>
                          <input type='text' placeholder='상세 주소를 입력해 주세요.' />
                        </dd>
                        <dd className='accountSet'>
                          <BaseSelect items={accountItems} placeholder={'은행 선택'} onChange={(e) => console.log(e)} />
                          <input type='text' />
                          <em>USD 거래 가능한 계좌번호를 입력해 주세요</em>
                        </dd>
                        <dd className='accountSet'>
                          <BaseSelect items={accountItems} placeholder={'은행 선택'} onChange={(e) => console.log(e)} />
                          <input type='text' />
                        </dd>
                        <dd className='agreeSet'>
                          <ul>
                            <li>
                              <span className="checkSet">
                                <input type="checkbox" className='rCheck' />
                                <label>개인정보 수집·이용 동의 <em>&#40;선택&#41;</em></label>
                              </span>
                              <button type='button'>약관 보기</button>
                            </li>
                          </ul>
                        </dd>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Select & File Upload</th>
                  </tr>
                  <tr>
                    <td>
                      {/* cSelect : custerm select */}
                      <span className={`cSelect ${certVisible ? 'on' : ''}`}>
                        <em className='sValue' onClick={() => setCertVisible(!certVisible)}>010</em>
                        <span className='cArea'>
                            <span className='on'>010</span>
                            <span>011</span>
                        </span>
                      </span> &nbsp; &nbsp;
                      <span className={`cSelect ba ${certVisible ? 'on' : ''}`}>
                        <em className='sValue' onClick={() => setCertVisible(!certVisible)}>선택하세요</em>
                        <span className='cArea'>
                            <span className='on'>항목 1</span>
                            <span>항목 2</span>
                        </span>
                      </span>
                      <br /><br />
                      <br /><br />
                      <ImageSetting imgFileList={imgFileList} setImgFileList={setImgFileList} />
                      <br /><br />
                      <br /><br />
                      <div className='fileSet'>
                        <div>
                          <ul>
                            <li>
                              <span className='fileLoad'>
                                <span>이미지영역</span>
                                <button className='bID'>Del</button>
                              </span>
                            </li>
                            <li>
                              <span className='fileLoad'>
                                <span>이미지영역</span>
                                <button className='bID'>Del</button>
                              </span>
                            </li>
                          </ul>
                          <label className='fileFind'>
                            <input type='file' />
                            <i>파일 첨부하기</i>
                          </label>
                        </div>
                        <p className='fileGuide'>
                          <span>사진 및 동영상은 최대 N장까지, NNMB 이하의 파일만 업로드가 가능합니다.</span>
                          <span>상품과 무관한 내용이나 사진 및 동양상 등의 부적절한 리뷰는 사전 경고 없이 삭제될 수 있습니다.</span>
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>list</th>
                  </tr>
                  <tr>
                    <td>
                      <div className='productList'>
                        <ul>
                          <li>
                            <span className="pImg"><img src={sample01} /></span>
                            <em className='brand sm'>오에르</em>
                            <strong>오에르 카밍 릴리프 에멀전</strong>
                            <em className='brand'>오에르</em>
                            <span className='price'>
                              <span>19,900원</span>
                              <em>~20%</em>
                            </span>
                            <span className='seller'>
                              <span className='sPrice'>
                                판매 리워드가
                                <span>10% <span>5,000원</span></span>
                              </span>
                              <span className='sStart'>
                                <dl>
                                  <dt>상품 게시</dt>
                                  <dd>
                                    <span className="toggleSet">
                                        <input type="checkbox" id="push" />
                                    </span>
                                  </dd>
                                </dl>
                                <dl>
                                  <dt>상품 게시 시작일</dt>
                                  <dd>2024.05.15</dd>
                                </dl>
                              </span>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="reviewList">
                        <ul>
                          <li>
                            <span className="writeUser">
                              <span className="profileImg"><img src={sample01} /></span>
                              <span className="nick">
                                <strong>홍길동</strong>
                                <span className="ratingArea">
                                  <Rating
                                    allowFraction
                                    initialValue={3.5}
                                    onClick={function noRefCheck(){}}
                                    size={16}
                                    fillColor='#520774'
                                    emptyColor='#DDDDDD'
                                    readonly />
                                  <em>2024.04.19</em>
                                </span>
                              </span>
                            </span>
                            <div className="img">
                              <ol>
                                <li><img src={sample02} /></li>
                              </ol>
                            </div>
                            <p className="txt">
                              모든 국민은 근로의 의무를 진다. 국가는 근로의 의무의 내용과 조건을 민주주의원칙에 따라 법률로 정한다. 모든 국민은 인간다운 생활을 할 권리를 가진다. 법관이 중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는 바에 의하여 퇴직하게 할 수 있다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다. 모든 국민은 근로의 의무를 진다. 국가는 근로의 의무의 내용과 조건을 민주주의원칙에 따라 법률로 정한다. 모든 국민은 인간다운 생활을 할 권리를 가진다.
                              법관이 중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는 바에 의하여 퇴직하게 할 수 있다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다. 법관이 중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는 바에 의하여 퇴직하게 할 수 있다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>paginate</th>
                  </tr>
                  <tr>
                    <td>
                      <div className='paginate'>
                        <a className='first'>처음</a>
                        <a className='prev'>이전</a>
                        <span>
                          <input type='text' defaultValue={1} />
                          <em>10</em>
                        </span>
                        <a className='next'>다음</a>
                        <a className='last'>마지막</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>TAB</th>
                  </tr>
                  <tr>
                    <td>
                      <div className='tabNav' ref={tabRef} >
                          <nav>
                              <ul>
                                  <li className={`${tab === 1 ? 'on' : ''}`}><button onClick={() => handleTab(1)}>공개요청</button></li>
                                  <li className={`${tab === 2 ? 'on' : ''}`}><button onClick={() => handleTab(2)}>콘텐츠</button></li>
                              </ul>
                          </nav>
                      </div>
                      {/* -- */}
                      {tab === 1 && '<공개요청 URL />'}
                      {tab === 2 && '<콘텐츠 URL />'}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='tabNav lCase' ref={tabRef} >
                          <nav>
                              <ul>
                                  <li className={`${tab === 3 ? 'on' : ''}`}><button onClick={() => handleTab(3)}>상품보기</button></li>
                                  <li className={`${tab === 4 ? 'on' : ''}`}><button onClick={() => handleTab(4)}>콘텐츠<em>Q&A</em></button></li>
                                  <li className={`${tab === 5 ? 'on' : ''}`}><button onClick={() => handleTab(5)}>리뷰<em>17</em></button></li>
                              </ul>
                          </nav>
                      </div>
                      {/* -- */}
                      {tab === 3 && '<공개요청 URL />'}
                      {tab === 4 && '<콘텐츠 URL />'}
                      {tab === 5 && '<콘텐츠 URL />'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </article>
        <article>
          <div className='worklistLayout'>
            <table>
              <thead>
                  <tr>
                      <th width="4%">ID</th>
                      <th width="150">1 depth</th>
                      <th width="150">2 depth</th>
                      <th width="150">3 depth</th>
                      <th width="320">URL</th>
                      <th>History & Descration</th>
                  </tr>
              </thead>
              <tbody>
                <tr>
                    <th colSpan="6" className='title'>Front</th>
                </tr>
                <tr>
                    <th></th>
                    <td rowSpan="2" className='first'>common</td>
                    <td>Component</td>
                    <td></td>
                    <td><Link to='/component'>Component</Link></td>
                    <td></td>
                </tr>
                <tr>
                    <th></th>
                    <td>Error</td>
                    <td></td>
                    <td></td>
                    <td><strong className='new'>Done</strong></td>
                </tr>
                <tr>
                    <th></th>
                    <td rowSpan={3} className='first'>Member</td>
                    <td>login</td>
                    <td></td>
                    <td><Link to='/login' target="_blank">login</Link></td>
                    <td><strong className='new'>Done</strong></td>
                </tr>
                <tr>
                    <th></th>
                    <td>Find ID/Pw</td>
                    <td></td>
                    <td>
                      <Link to='/findId' target="_blank">find ID</Link><br/>
                      <Link to='/findPw' target="_blank">find Pw</Link>
                    </td>
                    <td>
                      <strong className='new'>Done</strong> <br/>
                      <strong className='new'>Done</strong>
                    </td>
                </tr>
                <tr>
                    <th></th>
                    <td>Join</td>
                    <td></td>
                    {/* <td><Link to='/join' target="_blank">Join</Link></td> */}
                    <td><Link to='/login/join/' target="_blank">Join</Link></td>
                    <td><strong className='new'>Done</strong></td>
                </tr>
                <tr>
                    <th></th>
                    <td className='first'>Main</td>
                    <td></td>
                    <td></td>
                    <td><Link to='/' target="_blank">MainPage</Link></td>
                    <td><strong className='new'></strong></td>
                </tr>
                <tr>
                    <th></th>
                    <td className='first'>리셀러 홈</td>
                    <td></td>
                    <td></td>
                    <td><Link to='/reseller' target="_blank">ResellerPage</Link></td>
                    <td><strong className='new'>Done</strong></td>
                </tr>
                <tr>
                    <th></th>
                    <td className='first'>상품 상세페이지</td>
                    <td></td>
                    <td></td>
                    <td><Link to='/product' target="_blank">ProductPage</Link></td>
                    <td><strong className='new'>Done</strong></td>
                </tr>
                <tr>
                    <th></th>
                    <td className='first'>결제페이지</td>
                    <td></td>
                    <td></td>
                    <td>
                      <Link to='/payment' target="_blank">PaymentPage</Link><br/>
                      <Link to='/paymentEnd' target="_blank">PaymentEndPage</Link>
                    </td>
                    <td>
                      <strong className='new'>Done</strong><br/>
                      <strong className='new'>Done</strong>
                    </td>
                </tr>
                <tr>
                    <th></th>
                    <td className='first'>장바구니</td>
                    <td></td>
                    <td></td>
                    <td><Link to='/cart' target="_blank">CartPage</Link></td>
                    <td><strong className='new'>Done</strong></td>
                </tr>
                <tr>
                    <th></th>
                    <td className='first' rowSpan={9}>마이페이지</td>
                    <td>메인화면</td>
                    <td></td>
                    <td><Link to='/myPage' target="_blank">MyMainPage</Link></td>
                    <td><strong className='new'>Done</strong></td>
                </tr>
                <tr>
                    <th></th>
                    <td rowSpan={4}>나의 쇼핑</td>
                    <td>주문/배송 내역</td>
                    <td>
                      <Link to='/order' target="_blank">OrderPage</Link><br/>
                      <Link to='/orderDetail' target="_blank">OrderDetailPage</Link>
                    </td>
                    <td>
                      <strong className='new'>Done</strong><br/>
                      <strong className='new'>Done</strong>
                    </td>
                </tr>
                <tr>
                    <th></th>
                    <td>취소/환불 내역</td>
                    <td>
                      <Link to='/cancel' target="_blank">CancelPage</Link><br/>
                      <Link to='/cancelDetail' target="_blank">CancelDetailPage</Link> (환불)<br/>
                      <Link to='/cancelDetail2' target="_blank">CancelDetailPage2</Link> (취소)
                    </td>
                    <td>
                      <strong className='new'>Done</strong><br/>
                      <strong className='new'>Done</strong><br/>
                      <strong className='new'>Done</strong>
                    </td>
                </tr>
                <tr>
                    <th></th>
                    <td>찜한 상품</td>
                    <td><Link to='/wishlist' target="_blank">WishlistPage</Link></td>
                    <td><strong className='new'>Done</strong></td>
                </tr>
                <tr>
                    <th></th>
                    <td><del>리뷰 관리</del></td>
                    <td>생략 (나의 리뷰에서 진행)</td>
                    <td><strong className='new'></strong></td>
                </tr>
                <tr>
                    <th></th>
                    <td>나의 리뷰</td>
                    <td></td>
                    <td><Link to='/review' target="_blank">ReviewPage</Link></td>
                    <td><strong className='new'>Done</strong></td>
                </tr>
                <tr>
                    <th></th>
                    <td>포인트</td>
                    <td></td>
                    <td><Link to='/point' target="_blank">PointPage</Link></td>
                    <td><strong className='new'>Done</strong></td>
                </tr>
                <tr>
                    <th></th>
                    <td>개인정보 수정</td>
                    <td></td>
                    <td><Link to='/myInfo' target="_blank">MyInfoPage</Link></td>
                    <td><strong className='new'>Done</strong></td>
                </tr>
                <tr>
                    <th></th>
                    <td>정보 수신 동의</td>
                    <td></td>
                    <td><Link to='/notiSetting' target="_blank">NotiSettingPage</Link></td>
                    <td><strong className='new'></strong></td>
                </tr>
                <tr>
                    <th></th>
                    <td className='first' rowSpan={2}>이벤트</td>
                    <td></td>
                    <td></td>
                    <td><Link to='/event' target="_blank">EventPage</Link></td>
                    <td>
                      <strong className='new'>Done</strong>
                    </td>
                </tr>
                <tr>
                    <th></th>
                    <td>이벤트<br/>뉴스레터</td>
                    <td></td>
                    <td>생략 (Tab으로 진행)</td>
                    <td>
                      <strong className='new'>Done</strong><br/>
                      <strong className='new'>Done</strong><br/>
                    </td>
                </tr>
                <tr>
                    <th></th>
                    <td className='first' rowSpan={2}>고객센터</td>
                    <td></td>
                    <td></td>
                    <td><Link to='/center' target="_blank">CenterPage</Link></td>
                    <td>
                      <strong className='new'>Done</strong>
                    </td>
                </tr>
                <tr>
                    <th></th>
                    <td>공지사항<br/>FAQ<br/>1:1 문의</td>
                    <td></td>
                    <td>생략 (Tab으로 진행)</td>
                    <td>
                      <strong className='new'>Done</strong><br/>
                      <strong className='new'>Done</strong><br/>
                      <strong className='new'>Done</strong><br/>
                    </td>
                </tr>
                <tr>
                    <th></th>
                    <td className='first'>알림</td>
                    <td></td>
                    <td></td>
                    <td><Link to='/notiy' target="_blank">NotiyPage.jsx</Link></td>
                    <td><strong className='new'>Done</strong></td>
                </tr>
                <tr>
                    <th></th>
                    <td className='first'>리셀러 신청</td>
                    <td></td>
                    <td></td>
                    <td>
                      <Link to='/apply' target="_blank">ApplyPage</Link><br/>
                      <Link to='/applyEnd' target="_blank">ApplyEndPage</Link>
                    </td>
                    <td>
                    <strong className='new'>Done</strong><br/>
                    <strong className='new'>Done</strong>
                    </td>
                </tr>
                <tr>
                    <th></th>
                    <td rowSpan={3} className='first'>기타</td>
                    <td>서비스 이용약관</td>
                    <td></td>
                    <td><Link to='/' target="_blank"></Link></td>
                    <td><strong className='new'></strong></td>
                </tr>
                <tr>
                    <th></th>
                    <td>개인정보 취급방침</td>
                    <td></td>
                    <td><Link to='/' target="_blank"></Link></td>
                    <td><strong className='new'></strong></td>
                </tr>
                <tr>
                    <th></th>
                    <td>입점 문의</td>
                    <td></td>
                    <td><Link to='/' target="_blank"></Link></td>
                    <td><strong className='new'></strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </section>
    </>
  );
};

export default ComponentPage;
