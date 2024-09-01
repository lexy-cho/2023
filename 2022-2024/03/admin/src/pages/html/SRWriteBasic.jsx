import React, {useState} from 'react';
import ModifyAlert from '../../components/ui/modal/ModifyAlert';
import {ModalAlertPresent} from '@components/common';

const SRWriteBasic = () => {
    const [isModal3, setIsModal3] = useState(false);
    return (
        <>
        <div className="contentBack">
            <div className="content scroll">
                <div className="grid">
                    <div>
                        <article className="lbox">
                            <div className="boxTit">
                                <h3>기본 정보</h3>
                                <span className="toggleSet">
                                    <label>활성화</label>
                                    <input type="checkbox" />
                                </span>
                            </div>
                            <div className="boxDt">
                                <dl>
                                    <dt>룸 이름 <sup>*</sup></dt>
                                    <dd><input type="text" placeholder="룸 이름 입력" /></dd>
                                </dl>
                                <div className="grid case4 mt24">
                                    <dl>
                                        <dt>룸 타입</dt>
                                        <dd><input type="text" placeholder="Ex)AAA" /></dd>
                                    </dl>
                                    <dl>
                                        <dt>PMS 코드 </dt>
                                        <dd><input type="text" placeholder="코드 입력" /></dd>
                                    </dl>
                                    <dl>
                                        <dt>Seq</dt>
                                        <dd><input type="text" placeholder="Seq 입력" /></dd>
                                    </dl>
                                    <dl>
                                        <dt>펫 룸</dt>
                                        <dd>
                                            <span className="checkSet">
                                                <input type="checkbox" id="check" />
                                                <label htmlFor="check">해당</label>
                                            </span>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </article>
                        <article className="lbox">
                            <div className="boxTit"><h3>사용 인원</h3></div>
                            <div className="boxDt">
                                <div className="grid">
                                    <dl>
                                        <dt>최소 인원 <sup>*</sup></dt>
                                        <dd><input type="text" placeholder="숫자만 입력" /></dd>
                                    </dl>
                                    <dl>
                                        <dt>최대 인원 <sup>*</sup></dt>
                                        <dd><input type="text" placeholder="숫자만 입력" /></dd>
                                    </dl>
                                </div>
                                <div className="grid mt24">
                                    <dl>
                                        <dt>최대 성인 인원</dt>
                                        <dd><input type="text" placeholder="숫자만 입력" /></dd>
                                    </dl>
                                    <dl>
                                        <dt>최대 어린이 인원</dt>
                                        <dd><input type="text" placeholder="숫자만 입력" /></dd>
                                    </dl>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div>
                        <article className="lbox">
                            <div className="boxTit"><h3>뷰 타입 / 베드 타입 <sup>*</sup></h3></div>
                            <div className="boxDt">
                                <div className="grid">
                                    <dl>
                                        <dt>뷰 타입 <sup>*</sup></dt>
                                        <dd>
                                            <span className="selectSet">
                                                <select name="" id="">
                                                    <option>뷰 타입 선택</option>
                                                    <option defaultValue="">Ocean</option>
                                                    <option defaultValue="">Partial Ocean</option>
                                                    <option defaultValue="">No Ocean</option>
                                                </select>
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>베드 타입 <sup>*</sup></dt>
                                        <dd>
                                            <span className="selectSet">
                                                <select name="" id="">
                                                    <option>베드 타입 선택</option>
                                                    <option defaultValue="">Double</option>
                                                    <option defaultValue="">Single+single</option>
                                                    <option defaultValue="">Double+twin</option>
                                                </select>
                                            </span>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <div className="bArea">
                <button className="btnL">취소하기</button>
                <button className="btnB"  onClick={() => setIsModal3(true)}>저장하기</button>
            </div>
        </div>
        {isModal3 && (
            <ModalAlertPresent >
                <ModifyAlert onClose={() => setIsModal3(false)}/>
            </ModalAlertPresent>
        )}
        </>
    )
}

export default SRWriteBasic;