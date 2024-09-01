import React, { useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import sampleImage from '@assets/images/sample1.png';

const Component = () => {
  return (
    <>
      <section>
        <div className="cptTable">
            <table>
                <tbody>
                    <tr>
                        <th>BUTTON</th>
                    </tr>
                    <tr>
                        <td>
                            <button className="btnB">BUTTON - Main</button> <button className="btnB"  >Disabeld</button> &nbsp;&nbsp;
                            <button className="btnL">BUTTON - Line</button> <button className="btnL"  >Disabeld</button> &nbsp;&nbsp;
                            <button className="btnW">BUTTON - White</button> <button className="btnW"  >Disabeld</button> <br/><br/>
                            <button className="btnB sm">Btn 32</button> <button className="btnL sm">Btn 32</button> <button className="btnW sm">Btn 32</button> &nbsp;&nbsp;
                            <button className="btnB ss">Btn 24</button> <button className="btnL ss">Btn 24</button>  <button className="btnW ss">Btn 24</button> &nbsp;&nbsp;
                            <br/><br/>
                            <button className="bEX">Del</button> {/*  btn Editor Delete */}
                            <button className="bEV">View</button>
                            <button className="bED">Done</button>
                            <button className="bEC">Copy</button>
                            <button className="bEM">Modify</button>
                            <button className="bID">Del</button> {/*  btn Item Delete */}
                            <button className="bUL">Link</button>
                            <button className="bUL" disabled>Link</button>
                            <button className="bPE">Password</button>
                            <button className="bPS">Password Reset</button>
                            <button className="bMove">Move</button>
                            <button className="bAdd">추가</button>
                            <button className="bAdd">아이템 추가</button>
                            <button className="bExc">엑셀 다운로드</button>
                            <button className="bCal">캘린더</button>
                            <button className="bCR">요금 동기화</button> {/*  btn charge Reset */}
                            <button className="bRC">예약 취소</button> {/*  btn Reserv Cancel */}
                            <button className="bFillter">필터 <em>10</em></button>
                            <button className="bField">필드 <em>10</em></button>
                            <br/><br/>
                            <button className="sort">sort</button>
                            <button className="sort up">sort</button>
                            <button className="sort down">sort</button>
                        </td>
                    </tr>
                    <tr>
                        <th>INPUT</th>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" placeholder="Placeholder"/>
                            <input type="text" placeholder="Placeholder" defaultValue="defaultValue" />
                            <input type="text" placeholder="readOnly" defaultValue="readOnly" readOnly/>
                            <input type="text" placeholder="" defaultValue="" />
                            <input type="time" />
                            <br/><br/>
                            <span className="selectSet">
                                <select name="" id="">
                                    <option defaultValue="no" className="label">선택하세요</option>
                                    <option defaultValue="" >Select Option 1</option>
                                    <option defaultValue="">Select Option 2</option>
                                    <option defaultValue="">Select Option 3</option>
                                    <option defaultValue="">Select Option 4</option>
                                </select>
                            </span>
                            <span className="selectSet">
                                <select name="" id="" >
                                    <option defaultValue="">Select Option 1</option>
                                    <option defaultValue="">Select Option 2</option>
                                    <option defaultValue="">Select Option 3</option>
                                    <option defaultValue="">Select Option 4</option>
                                </select>
                            </span>
                            <span className="selectSet w">
                                <select name="" id="">
                                    <option defaultValue="no" className="label">선택하세요</option>
                                    <option defaultValue="" >Select Option 1</option>
                                    <option defaultValue="">Select Option 2</option>
                                    <option defaultValue="">Select Option 3</option>
                                    <option defaultValue="">Select Option 4</option>
                                </select>
                            </span>
                            {/* <script>
                                $(document).ready(function(){
                                    multSelect("btnSelect1");
                                    multSelect("btnSelect2");
                                    multSelect("btnSelect3");
                                    cSelect("cSelect");
                                });
                            </script> */}
                            <div className="cSelect" id="cSelect">
                                <em className="sValue">선택하세요.</em>
                                <div className="cArea" style={{display: "none"}}>
                                    <span>First checkbox</span>
                                    <span>Second checkbox</span>
                                    <span>Third checkbox</span>
                                </div>
                            </div>
                            <div className="multiSSet">
                                <em className="mValue" id="btnSelect1">선택하세요.</em>
                                <div className="selectArea">
                                    <div className="item">
                                        <span className="checkSet">
                                            <input type="checkbox" id="one"/>
                                            <label htmlFor="one">First checkbox</label>
                                        </span>
                                        <span className="checkSet">
                                            <input type="checkbox" id="two"/>
                                            <label htmlFor="two">Second checkbox</label>
                                        </span>
                                        <span className="checkSet">
                                            <input type="checkbox" id="three"/>
                                            <label htmlFor="three">Third checkbox</label>
                                        </span>
                                    </div>
                                    <div className="bLine">
                                        <button className="btnL">취소</button>
                                        <button className="btnB">적용</button>
                                    </div>
                                </div>
                            </div>
                            <div className="multiSSet">
                                <em className="mValue on" id="btnSelect2">시즌 클래스 <i>2</i></em>
                                <div className="selectArea">
                                    <div className="item">
                                        <span className="radioSet">
                                            <input type="radio" id="one2"/>
                                            <label htmlFor="one2">First checkbox</label>
                                        </span>
                                        <span className="radioSet">
                                            <input type="radio" id="two2"/>
                                            <label htmlFor="two2">Second checkbox</label>
                                        </span>
                                        <span className="radioSet">
                                            <input type="radio" id="three2"/>
                                            <label htmlFor="three2">Third checkbox</label>
                                        </span>
                                    </div>
                                    <div className="bLine">
                                        <button className="btnL">취소</button>
                                        <button className="btnB">적용</button>
                                    </div>
                                </div>
                            </div>
                            {/* 20240516 select UI 기능정의
                                1) multiSSet 에서 mValue를 클릭 시 
                                 ㄴ multiSSet open 으로 "open" class 토글되도록 함.
                                 ㄴ selectArea 영역이 토글 되도록함. 
                                2) selectArea에서 적용을 해서 데이터 선택을 하면 mValue 에 "on" class 추가하도록 함
                                3) multiSSet chipCase 에서는 "chipArea"를 클릭 시 1) 과 동일하게 적용되도록함.
                                 ㄴ chipArea 에서는 em이 기본이고, selectArea에서 데이터 선택 시 em은 삭제하고 button으로 적용
                                 ㄴ chipArea 내 button은 클릭 시 삭제하도록 함.    
                            */}
                            <br/><br/>
                            <div className="multiSSet chipCase">
                                <div className="chipArea" id="btnSelect3">
                                    <em style={{display : 'none'}}>선택하세요</em>
                                    <button>DET</button>
                                    <button>DET</button>
                                    <button>DET</button>
                                    <button>DET</button>
                                    <button>DET</button>
                                    <button>DET</button>
                                </div>
                                <div className="selectArea">
                                    <div className="item">
                                        <span className="checkSet">
                                            <input type="checkbox" id="chip01"/>
                                            <label htmlFor="chip01"><span>DET</span><em>DOBULE DELUXE ROOM</em></label>
                                        </span>
                                        <span className="checkSet">
                                            <input type="checkbox" id="chip02"/>
                                            <label htmlFor="chip02"><span>DET</span><em>DOBULE DELUXE ROOM</em></label>
                                        </span>
                                        <span className="checkSet">
                                            <input type="checkbox" id="chip03"/>
                                            <label htmlFor="chip03"><span>DET</span><em>DOBULE DELUXE ROOM</em></label>
                                        </span>
                                    </div>
                                    <div className="bLine">
                                        <button className="btnL">취소</button>
                                        <button className="btnB">적용</button>
                                    </div>
                                </div>
                            </div>
                            <br/><br/>
                            <span className="checkSet">
                                <input type="checkbox" id="check" />
                                <label htmlFor="check">checkSet</label>
                            </span>
                            <span className="checkSet">
                                <input type="checkbox" id="check1" defaultChecked/>
                                <label htmlFor="check1">checkSet</label>
                            </span>
                            <span className="checkSet">
                                <input type="checkbox" id="check2" />
                                <label htmlFor="check2">checkSet</label>
                            </span>
                            <span className="checkSet">
                                <input type="checkbox" id="check3" defaultChecked />
                                <label htmlFor="check3">checkSet</label>
                            </span>
                            <span className="checkSet ll">
                                <label htmlFor="check4">checkSet</label>
                                <input type="checkbox" id="check4" defaultChecked />
                            </span>
                            <br/><br/>
                            <span className="radioSet">
                                <input type="radio" name="radio1"/>
                                <label htmlFor="">radioSet</label>
                            </span>
                            <span className="radioSet">
                                <input type="radio" name="radio1" defaultChecked/>
                                <label htmlFor="">radioSet</label>
                            </span>
                            <span className="radioSet">
                                <input type="radio" name="radio2" />
                                <label htmlFor="">radioSet</label>
                            </span>
                            <span className="radioSet">
                                <input type="radio" name="radio2" defaultChecked />
                                <label htmlFor="">radioSet</label>
                            </span>
                            <br/><br/>
                            <span className="toggleSet">
                                <input type="checkbox" id="push" />
                            </span>
                            <span className="toggleSet">
                                <input type="checkbox" id="push1" defaultChecked />
                            </span>
                            <span className="toggleSet">
                                <input type="checkbox" id="push2"  />
                            </span>
                            <span className="toggleSet">
                                <input type="checkbox" id="push3"  defaultChecked  />
                            </span> &nbsp;&nbsp;
                            <span className="toggleSet">
                                <label>toggle</label>
                                <input type="checkbox" />
                            </span> &nbsp;&nbsp;
                            <span className="andOrSet">
                                <input type="checkbox" id="" />
                                <label htmlFor=""><i>OR</i><em>AND</em></label>
                            </span>&nbsp;
                            <span className="andOrSet">
                                <input type="checkbox" id="" defaultChecked />
                                <label htmlFor=""><i>OR</i><em>AND</em></label>
                            </span>&nbsp;
                            <span className="andOrSet">
                                <input type="checkbox" id="" disabled />
                                <label htmlFor=""><i>OR</i><em>AND</em></label>
                            </span>
                            <br/><br/>
                            <input type="text" className="cal" placeholder="2024.01.01"  />
                            <input type="text" className="multyCal" placeholder="시작일 선택 ~ 종료일 선택" />
                            <span className="calDupSet">
                                <input type="text" className="cal" placeholder="2024.01.01"  />
                                <em>-</em>
                                <input type="text" className="cal" placeholder="2024.01.01"  />
                            </span>
                            <input type="text" className="calA" defaultValue="2024.01 ~"  />
                            <br/><br/>
                            <span className="ipBtn">
                                <input type="text"/>
                                <button>버튼</button>
                            </span> &nbsp;
                            <span className="ipPw">
                                <input type="password"/>
                                <button>비밀번호 초기화</button>
                            </span> &nbsp;
                            <span className="ipSearch">
                                <input type="text"/>
                                <button>검색</button>
                            </span> &nbsp;
                            <span className="unit">
                                <input type="text"/>
                                <em>원</em>
                            </span> &nbsp;
                            <span className="ipModify">
                                <input type="text" defaultValue="100개씩 보기" disabled />
                                <button className="bEM">Modify</button>
                                <em>
                                    <button className="bID">Del</button>
                                    <button className="bED">Done</button>
                                </em>
                            </span>
                            <br/><br/>
                            <span className="ipCalendar">
                                <span><input type="text" className="cal" defaultValue="2024.01 ~"  /></span>
                                <em>
                                    <button className="bPrev">이전</button>
                                    <button className="bNext">다음</button>
                                </em>
                                <button className="btnB sm" >오늘</button>
                            </span>
                            <br/><br/>
                            <div className="langSelect">
                                <span><input type="radio" defaultChecked /><label>한국어</label></span>
                                <span><input type="radio" /><label>영어</label></span>
                                <span><input type="radio" /><label>일본어</label></span>
                                <span><input type="radio" /><label>중국어 간체</label></span>
                                <span><input type="radio" /><label>중국어 번체</label></span>
                                <span><input type="radio" /><label>포르투칼어</label></span>
                                <span><input type="radio" /><label>스페인어</label></span>
                            </div>
                            <br/><br/>
                            <div className="addSet">
                                <div className="before"><button className="bAdd">뷰타입 추가</button></div>
                                <div className="after" style={{display: 'none'}}>
                                    <input type="text" placeholder="뷰 타입 이름" className="item" />
                                    <div className="multiSSet item">
                                        <em className="mValue on">선택해주세요</em>
                                        <div className="selectArea">
                                            <div className="item">
                                                <span className="radioSet">
                                                    <input type="radio" id="one2"/>
                                                    <label htmlFor="one2">First checkbox</label>
                                                </span>
                                                <span className="radioSet">
                                                    <input type="radio" id="two2"/>
                                                    <label htmlFor="two2">Second checkbox</label>
                                                </span>
                                                <span className="radioSet">
                                                    <input type="radio" id="three2"/>
                                                    <label htmlFor="three2">Third checkbox</label>
                                                </span>
                                            </div>
                                            <div className="bLine">
                                                <button className="btnL">취소</button>
                                                <button className="btnB">적용</button>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="afterBtn item">
                                        <button className="bID">Del</button>
                                        <button className="bED">Done</button>
                                    </span>
                                </div>
                            </div>
                            <div className="addSet long">
                                <div className="before case2">
                                    <button className="bAdd">신규 추가</button>
                                    <button className="bAdd">기존 상품 선택</button>
                                </div>
                                <div className="after" style={{display: 'none'}}>
                                    <div className="multiSSet item">
                                        <em className="mValue on">선택해주세요</em>
                                        <div className="selectArea">
                                            <div className="item">
                                                <span className="radioSet">
                                                    <input type="radio" id="one2"/>
                                                    <label htmlFor="one2">First checkbox</label>
                                                </span>
                                                <span className="radioSet">
                                                    <input type="radio" id="two2"/>
                                                    <label htmlFor="two2">Second checkbox</label>
                                                </span>
                                                <span className="radioSet">
                                                    <input type="radio" id="three2"/>
                                                    <label htmlFor="three2">Third checkbox</label>
                                                </span>
                                            </div>
                                            <div className="bLine">
                                                <button className="btnL">취소</button>
                                                <button className="btnB">적용</button>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="text" placeholder="수량" className="item" />
                                    <input type="text" className="multyCal item" placeholder="2024.01.01" />
                                    <span className="afterBtn item">
                                        <button className="bID">Del</button>
                                        <button className="bED">Done</button>
                                    </span>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Textarea</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="taSet">
                                <textarea placeholder="상세 설명 입력"></textarea>
                                <em><i>0</i>/120</em>
                                {/* 글자수가 1 이상일 경우 em className="num" */}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Image Upload</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="imgSetCol">
                                <div className="imgSetOnly">
                                    <span className="imgUpLoad">
                                        <i>Drag & Drop files</i>
                                        <button className="btnL sm">파일 선택</button>
                                    </span>
                                    <span className="imgUpLoadAfter">
                                        <i>
                                            <button className="bEV">View</button>
                                            <button className="bEX">Del</button>
                                        </i>
                                        <span>{/* 이미지 영역 */}</span>
                                    </span>
                                </div>
                                <em>파일 형식 : jpg, png &nbsp;&nbsp; 권장 비율 : 16:9</em>
                            </div>
                            <div className="imgSetCol">
                                <div className="imgSet">
                                    <div className="imgSetBack">
                                        <span className="imgUpLoad">
                                            <i>Drag & Drop files</i>
                                            <button className="btnL sm">파일 선택</button>
                                        </span>
                                        <div>
                                            <span className="imgUpLoadAfter">
                                                <i>
                                                    <button className="bEV">View</button>
                                                    <button className="bEX">Del</button>
                                                </i>
                                                <span>{/* 이미지 영역 */}</span>
                                            </span>
                                            <span className="imgUpLoadAfter">
                                                <i>
                                                    <button className="bEV">View</button>
                                                    <button className="bEX">Del</button>
                                                </i>
                                                <span>{/* 이미지 영역 */}</span>
                                            </span>
                                            <span className="imgUpLoadAfter">
                                                <i>
                                                    <button className="bEV">View</button>
                                                    <button className="bEX">Del</button>
                                                </i>
                                                <span>{/* 이미지 영역 */}</span>
                                            </span>
                                        </div>
                                    </div>
                                    <em>파일 형식 : jpg, png &nbsp;&nbsp; 권장 비율 : 16:9 <br/>권장 이미지 용량 : 20MB 이하 / 동영상 : 500MB 이하(최대 20초)</em>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>paginate</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="paginate">
                                <span>
                                    <a className="prev">이전</a>
                                    <a className="on">1</a>
                                    <a>2</a>
                                    <a>3</a>
                                    <a>4</a>
                                    <a>5</a>
                                    <a className="next">다음</a>
                                </span>
                                <span className="selectSet">
                                    <select name="" id="">
                                        <option defaultValue="" >100개씩 보기</option>
                                        <option defaultValue="">200개씩 보기</option>
                                    </select>
                                </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>TAB</th>
                    </tr>
                    <tr>
                        <td>
                            {/*  tab-wrap */}
                            <div className="tabwrap">
                                {/*  tab */}
                                <div className="tabBack">
                                    <div className="tabNav">
                                        <nav>
                                            <ul>
                                                <li className="on"><button className="newTab" data-name="0">Tab Menu 1</button></li>
                                                <li><button data-name="1">Tab Menu 2</button></li>
                                                <li><button data-name="2">Tab Menu 3</button></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                {/* // tab */}
                                <div className="tabLayout">
                                    <div className="tabData tData0" style={{display: "none"}}>Tab Menu 0 Data</div>
                                    <div className="tabData tData1">Tab Menu 1 Data</div>
                                    <div className="tabData tData2">Tab Menu 2 Data</div>
                                </div>
                            </div>
                            {/*  //tab-wrap */}
                        </td>
                    </tr>
                    {/* <tr>
                        <th>POPUP</th>
                    </tr>
                    <tr>
                        <td>
                            <button className="btnS" id="alertBtn1">일반 alert 팝업</button>
                            <button className="btnS" id="alertBtn2">타이틀이 있는 alert 팝업</button>
                            <button className="btnS line" id="basicBtn1">layer 팝업</button>
                            <button className="btnS" id="popBtn3">새창 팝업</button>
                            <script>
                                $(document).ready(function(){
                                    popupOpen("alertBtn1","alertDim","alertPop1");
                                    popupClose("alertPopClose1","alertDim","alertPop1");
                                    popupOpen("alertBtn2","alertDim","alertPop2");
                                    popupClose("alertPopClose2","alertDim","alertPop2");
                                    popupOpen("basicBtn1","popDim","basicPop1");
                                    popupClose("basicPopClose1","popDim","basicPop1");
                                    popupClose("basicPopClose2","popDim","basicPop1");
                                    newPopupOpen("popBtn3","네이버","http://www.naver.com","500","500");
                                });
                            </script>
                        </td>
                    </tr> */}
                </tbody>
            </table>
		</div>
	  </section>
    </>
    
	
  );
};

export default Component;