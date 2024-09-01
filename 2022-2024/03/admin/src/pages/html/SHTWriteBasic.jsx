import React from "react";
import { DatePicker } from '@components/common'

const SRWriteBasic = () => {
    const {dpMin, dpMax} = DatePicker();
    return (
        <div className="contentBack">
            <div className="content scroll">
                <div className="grid">
                    <div>
                        <article className="lbox">
                            <div className="boxTit"><h3>기본 정보</h3></div>
                            <div className="boxDt">
                                <dl>
                                    <dt>약관 이름 <sup>*</sup></dt>
                                    <dd><input type="text" placeholder="약관 이름 입력" /></dd>
                                </dl>
                            </div>
                        </article>
                        <article className="lbox">
                            <div className="boxTit"><h3>내용 <sup>*</sup></h3></div>
                            <div className="boxDt">
                                <div className="editorTool">html편집기 영역</div>
                            </div>
                        </article>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="bArea">
                <button className="btnL">취소하기</button>
                <button className="btnB">저장하기</button>
            </div>
        </div>
    )
}

export default SRWriteBasic;