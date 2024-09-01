import React from "react";

const SourceCodeView = ({onClose}) => {

    return (
        <div className="fullPop sourceCodePop" id="sourceCodePop" style={{display:'block'}}>
            <button className="btnPClose" onClick={() => onClose()}>닫기</button>
            <h1 className="pt">소스 코드 상세</h1>
            <div className="pBack">
                <div className="scroll">
                    {/*  */}
                    <article className="lbox">
                        <div className="boxTit"><h3>기본 정보</h3></div>
                        <div className="boxDt">
                            <div className="grid">
                                <dl>
                                    <dt>소스 이름 <sup>*</sup></dt>
                                    <dd>
                                        <div className="multiSSet">
                                            <em className="mValue on">OFF - LINE</em>
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
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>소스 코드 <sup>*</sup></dt>
                                    <dd><input type="text" placeholder="Ex)AAA" /></dd>
                                </dl>
                            </div>
                            <dl className="mt24">
                                <dt>비고</dt>
                                <dd><input type="text" placeholder="비고 입력" /></dd>
                            </dl>
                        </div>
                    </article>
                    {/*  */}
                </div>
            </div>
            <div className="pBtn">
                <span className="fr">
                    <button className="btnL sm">취소</button>
                    <button className="btnB sm">저장 후 닫기</button>
                </span>
            </div>
        </div>
    )
}

export default SourceCodeView;