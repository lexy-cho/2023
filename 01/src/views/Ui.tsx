import Calendar from "component/Calendar";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { fileToBase64 } from "utils/common";
import { maskingEmail, maskingPhoneNumber, isValidateDateOfBirth, isValidateEmail, withCommas } from "utils/format";

function Content() {
    const navigate = useNavigate();
    const [rate, setRate] = useState<number>(0);

    const onHandleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const fileInput = event.target;
        if (fileInput.files && fileInput.files.length > 0) {
          try {
            const file = fileInput.files[0];
            const { fileName, fileExt, fileBase64 } = await fileToBase64(file);
            console.log('File Name:', fileName);
            console.log('File Extension:', fileExt);
            console.log('Base64 data:', fileBase64);
            // 여기에서 변환된 데이터를 사용할 수 있습니다.
          } catch (error) {
            console.error('Error converting file to base64:', error);
          }
        }
      };

    return (
        <div id="container">
            <section>
                <div className="uiComponent">{/* class 없어도 유지 */}
                    <button className="btnM">BUTTON - Main</button>&nbsp;
                    <button className="btnG">BUTTON - Gray</button>&nbsp;
                    <button className="btnL">BUTTON - Line</button> &nbsp;
                    <button className="btnM sm">Main small</button>&nbsp;
                    <button className="btnG sm">Gray small</button>&nbsp;
                    <button className="btnL sm">Line small</button>
                    <br /><br />
                    {/* <button className="btnM" disabled >BUTTON - Main</button>&nbsp;
                    <button className="btnG" disabled >BUTTON - Gray</button>&nbsp;
                    <button className="btnL" disabled >BUTTON - Line</button> */}
                    <br /><br />
                    <input type="text" placeholder="Placeholder" />&nbsp;
                    <input type="text" placeholder="Placeholder" defaultValue="Value" />&nbsp;
                    {/* <input type="text" placeholder="Readonly" readOnly />&nbsp;
                    <input type="text" placeholder="Disabled" disabled /> */}
                    <br /><br />
                    <input type="text" className="cal" />
                    <br /><br />
                    <span className="selectSet">
                        <select name="" id="">
                            <option value="no" className="label">선택하세요</option>
                            <option value="" selected>Select Option 1</option>
                            <option value="">Select Option 2</option>
                            <option value="">Select Option 3</option>
                            <option value="">Select Option 4</option>
                        </select>
                    </span>
                    <span className="selectSet">
                        <select name="" id="" disabled>
                            <option value="">Select Option 1</option>
                            <option value="">Select Option 2</option>
                            <option value="">Select Option 3</option>
                            <option value="">Select Option 4</option>
                        </select>
                    </span>
                    <br /><br />
                    <span className="checkSet">
                        <input type="checkbox" />
                        <label htmlFor="">checkSet</label>
                    </span>
                    <span className="checkSet w">
                        <input type="checkbox" />
                        <label htmlFor="">checkSet</label>
                    </span>
                    <br /><br />
                    <span className="radioSet">
                        <input type="radio" name="radio1" />
                        <label htmlFor="">radioSet</label>
                    </span>
                    <span className="radioSet">
                        <input type="radio" name="radio1" checked />
                        <label htmlFor="">radioSet</label>
                    </span>
                    {/* <span className="radioSet">
                        <input type="radio" name="radio2" disabled/>
                        <label htmlFor=""><i></i>radioSet</label>
                    </span>
                    <span className="radioSet">
                        <input type="radio" name="radio2" checked disabled/>
                        <label htmlFor=""><i></i>radioSet</label>
                    </span>
                    <br/><br/>
                    <span className="toggleSet">
                        <input type="checkbox" id="push" />
                        <label htmlFor="push"></label>
                    </span>&nbsp;
                    <span className="toggleSet">
                        <input type="checkbox" id="push1" checked/>
                        <label htmlFor="push1"></label>
                    </span>&nbsp;
                    <span className="toggleSet">
                        <input type="checkbox" id="push2" disabled/>
                        <label htmlFor="push2"></label>
                    </span>&nbsp;
                    <span className="toggleSet">
                        <input type="checkbox" id="push3" checked disabled/>
                        <label htmlFor="push3"></label>
                    </span> */}
                    <br /><br />

                    {/* 별점 */}
                    <StarRatings
                        rating={rate}
                        starRatedColor="gold"
                        starEmptyColor="grey"
                        starHoverColor="gold"
                        numberOfStars={5}
                        name="rating"
                        starDimension="50px"
                        starSpacing="10px"
                        changeRating={(rating: number) => setRate(rating)}
                    />
                    <br /><br />
                    {/* 휴대폰번호 암호화 */}
                    <span> 데이터 포맷 </span>
                    <div>{maskingPhoneNumber('01000000000')}</div>
                    <div>{maskingEmail('abcdefg12345@naver.com ')}</div>
                    <div>{withCommas(55000)}</div>
                    <div> 생년월일 검증 <input onInput={(event: any) => console.log(isValidateDateOfBirth(event.target.value))} maxLength={8} /> </div>
                    <div> 이메일 검증 <input onInput={(event: any) => console.log(isValidateEmail(event.target.value))} /> </div>
                    <br /><br />

                    {/* DatePicker */}
                    <Calendar selectedDate={new Date()} />
                    
                    <input type="file" id="file1" accept="image/*" onChange={onHandleFileChange} />
                    <label htmlFor="file1">파일찾기</label>
                    
                </div>

                {/* aler 팝업 */}
                <div className="alertDim" style={{display:'none'}}>
                    <div className="alertPop">
                        <p>일반적인 레이어 alert 팝업 입니다.<br/>두줄일때는 이렇게 쓰면 됩니다.</p>
                        {/* <div className="pBtn">
                            <button className="btnG">취소</button>
                            <a href="" className="btnM">확인</a>
                        </div> 이건 버튼 두개 일 겨우 */}
                        <div className="pBtn">
                            <button className="btnG">확인</button>
                        </div>
                    </div>
                </div>
                {/* //aler 팝업 */}
                {/* 팝업 */}
                <div className="popDim" style={{display:'none'}}>
                    <div className="basicPop">
                        <div className="pBack">
                            <strong className="pTit sm">신고 사유를 선택해주세요.</strong>
                            <div className="pAccuse">
                                <span className="radioSet">
                                    <input type="radio" name="radioB" />
                                    <label htmlFor="">신고사유 1</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" name="radioB" />
                                    <label htmlFor="">신고사유 12</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" name="radioB" />
                                    <label htmlFor="">신고사유 13</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" name="radioB" />
                                    <label htmlFor="">신고사유 14</label>
                                </span>
                            </div>
                        </div>
                        <div className="pBtn">
                            <button className="btnG">확인</button>
                            <button className="btnM">취소</button>
                        </div>
                    </div>
                    <div className="basicPop" style={{display:'none'}}>
                        <div className="pBack">
                            <strong className="pTit">이용자-제공자 전환</strong>
                            <p>
                                서로이용자는 교육 및 동행을 이용하는 고객입니다. <br/>
                                서로제공자는 교육 및 동행을 제공하는 고객입니다.
                            </p>
                            <div className="pChangeChoice">
                                <span className="radioSet">
                                    <input type="radio" name="radioA" />
                                    <label htmlFor="">이용자</label>
                                </span>
                                <span className="radioSet">
                                    <input type="radio" name="radioA" />
                                    <label htmlFor="">제공자</label>
                                </span>
                            </div>
                        </div>
                        <div className="pBtn">
                            <button className="btnG">확인</button>
                        </div>
                    </div>
                    <div className="basicPop" style={{display:'none'}}>
                        <div className="pBack">
                            <strong className="pTit">신고처리된 계정이에요.</strong>
                            <p>
                                현재 신고처리 되어 관리자에 의해 신고처리된 계정이에요. 60일 후 자동으로 삭제처리 될 예정이오니 아래 메일로 연락주세요.
                                <strong>uni@unimindlab.com</strong>
                            </p>
                        </div>
                        <div className="pBtn">
                            <button className="btnG">확인</button>
                        </div>
                    </div>
                </div>
                {/* //팝업 */}

            </section>
        </div>
    );
}

export default Content;
