import React , {useEffect, useState}from 'react';
import Select from './Select';
import DatePicker from './DatePicker';
const Search = ( {onSearch}) => {

    const {dpMin, dpMax} = DatePicker();

    

    return (
        <fieldset className="chiceSolt">
            <div>
                <em>호텔 선택</em>            
                <Select />
            </div>
            <div>
                <em>기간 조회</em>
                <span className="calDupSet">
                    <input type="text" className="cal" readOnly placeholder="일자 선택" id="datepicker1" onClick={()=>dpMin.show()}/>
                    <em>-</em>
                    <input type="text" className="cal" placeholder="일자 선택" id="datepicker2" onClick={()=>dpMax.show()} />
                </span>
            </div>
            <div>
                <em>검색</em>
                <span className="minSSet">
                    <input type="text" className="txt" placeholder="본문, 제목 검색" />
                    <input type="button" value="검색" className="icon" />
                </span>
            </div>
        </fieldset>
    )
}

export default Search;