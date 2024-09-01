import React from "react";
import { DatePicker } from '@components/common'

const CMWriteLog = () => {
    const {dpMin, dpMax} = DatePicker();
    
    return (
        <div className="contentBack">
            <div className="content scroll">
            </div>
            <div className="bArea">
                <button className="btnL">취소하기</button>
                <button className="btnB">저장하기</button>
            </div>
        </div>
    )
}

export default CMWriteLog;