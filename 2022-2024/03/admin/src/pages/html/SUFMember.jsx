import React from "react";
import { DatePicker } from '@components/common'

const SUFMember = () => {
    const {dpMin, dpMax} = DatePicker();
    
    return (
        <div className="content summeryFix">
            회원 별 데이터
        </div>
    )
}

export default SUFMember;