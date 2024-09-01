import { getters } from '@store/BrandingStore';
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import useFareSettingQuery from '../../pages/price/fare/setting/service/queries/useFareSettingQuery';
import FeeSettingTable from './FeeSettingTable';
import { dateFormatUse } from '@utils/DateUtil';
const FeeSetting = forwardRef(({ onPriceChange, onSellChange, onCancel, roomTypeSeqList = [], package_seq = '' }, ref) => {
  const { getRatePriceList } = useFareSettingQuery();

  const [params, setParams] = useState({
    start_date: dateFormatUse(new Date(), 'yyyy-MM-DD'),
    // 검색할 룸타입
    room_type_seq_list: roomTypeSeqList,
    group: '',
    package_seq: package_seq,
  });

  const [roomTypeList, setRoomTypeList] = useState([]);
  const [priceCodeList, setPriceCodeList] = useState([]);
  const [sellDateList, setSellDateList] = useState([]);

  const fetchRatePriceList = async () => {
    const r = await getRatePriceList(params);
    // console.log(r);
    setRoomTypeList(r?.room_type_list);
    setPriceCodeList(r?.price_code_list);
    setSellDateList(r?.sell_date_list);
  };

  useEffect(() => {
    fetchRatePriceList();
  }, []);

  return (
    <>
      <fieldset className="topForm">
        <div className="left">
          <span className="ipCalendar">
            <span>
              <input type="text" className="cal" defaultValue="2024.01 ~" />
            </span>
            <em>
              <button className="bPrev">이전</button>
              <button className="bNext">다음</button>
            </em>
            <button className="btnB sm">오늘</button>
          </span>
          <div className="multiSSet">
            <em className="mValue">룸 타입</em>
            <div className="selectArea">
              <div className="item">
                <span className="radioSet">
                  <input type="radio" id="one2" />
                  <label htmlFor="one2">First checkbox</label>
                </span>
              </div>
              <div className="bLine">
                <button className="btnL">취소</button>
                <button className="btnB">적용</button>
              </div>
            </div>
          </div>
          <div className="multiSSet">
            <em className="mValue">상품 그룹</em>
            <div className="selectArea">
              <div className="item">
                <span className="radioSet">
                  <input type="radio" id="one2" />
                  <label htmlFor="one2">First checkbox</label>
                </span>
              </div>
              <div className="bLine">
                <button className="btnL">취소</button>
                <button className="btnB">적용</button>
              </div>
            </div>
          </div>
          <button className="btnW sm">필터 초기화</button>
        </div>
        <span className="right">
          <button className="bCR">요금 동기화</button>
          <button className="bExc">엑셀 업로드</button>
          <button className="bExc">엑셀 다운로드</button>
        </span>
      </fieldset>

      <FeeSettingTable
        ref={ref}
        onFetch={fetchRatePriceList}
        onPriceChange={onPriceChange}
        onSellChange={onSellChange}
        onCancel={onCancel}
        roomTypeList={roomTypeList}
        priceCodeList={priceCodeList}
        sellDateList={sellDateList}
      />
    </>
  );
});

export default FeeSetting;
