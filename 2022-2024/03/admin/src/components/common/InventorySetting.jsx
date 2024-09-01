import React, { forwardRef, useEffect, useState } from 'react';
import { dateFormatUse } from '@utils/DateUtil';
import useInvenSettingQuery from '../../pages/price/fare/inventory/service/queries/useInvenSettingQuery';
import InventorySettingTable from './InventorySettingTable';

const InventorySetting = forwardRef(({ onInventoryChange, room_type_seq_list = [], package_seq = '' }, ref) => {
  const { getRateInventoryList } = useInvenSettingQuery();

  const [roomTypeList, setRoomTypeList] = useState([]);
  const [inventoryList, setInventoryList] = useState([]);
  const [sellDateList, setSellDateList] = useState([]);

  const [params, setParams] = useState({
    start_date: dateFormatUse(new Date(), 'yyyy-MM-DD'),
    // 검색할 룸타입
    room_type_seq_list: room_type_seq_list,
    group: '',
    package_seq: package_seq,
  });
  const fetchRateInventoryList = async () => {
    const r = await getRateInventoryList(params);
    console.log(r);
    setRoomTypeList(r?.room_type_list);
    setInventoryList(r?.inventory_list);
    setSellDateList(r?.sell_date);
  };
  useEffect(() => {
    fetchRateInventoryList();
  }, []);

  return (
    <>
      <div className="contentBack">
        <div className="content scroll">
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
                <em className="mValue">회사 코드</em>
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
                <em className="mValue">채널</em>
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
              <button className="btnW sm">잔여 룸</button>
              <button className="bExc">엑셀 업로드</button>
              <button className="bExc">엑셀 다운로드</button>
            </span>
          </fieldset>
          {/* -- */}
          <article className="feeSetList">
            <InventorySettingTable ref={ref} onInventoryChange={onInventoryChange} roomTypeList={roomTypeList} inventoryList={inventoryList} sellDateList={sellDateList} />
          </article>
        </div>
      </div>
    </>
  );
});

export default InventorySetting;
