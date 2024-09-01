import React from "react";
import { DatePicker } from '@components/common'

const SFCoupon = () => {
    const {dpMin, dpMax} = DatePicker();
    
    return (
        <div className="content summeryFix">
            쿠폰 별 데이터
        </div>
    )
}

export default SFCoupon;