import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { isBefore, isEqual, format } from 'date-fns';
import { Dept1Item, SellItem } from './InventorySettingComponents';

const InventorySettingTable = forwardRef(({ onInventoryChange, roomTypeList, inventoryList, sellDateList }, ref) => {
  const [header, setHeader] = useState([]); //조회일자
  const [list, setList] = useState([]);

  const handleVisible = ({ dept1Idx, dept2Idx, dept3Idx, name }) => {
    setList((prev) => {
      const newValue = [...prev];
      if (name === 'dept1') {
        newValue[dept1Idx] = { ...newValue[dept1Idx], visible: !newValue[dept1Idx].visible };
      } else if (name === 'dept2') {
        const dept2Value = [...newValue[dept1Idx].dept2];
        const row = dept2Value[dept2Idx].dept3.filter((el) => !el.visible);
        const rowCnt = row.reduce((acc, cur, index) => {
          let cnt = cur.dept4.length * 2;
          return acc + cnt;
        }, 0);
        dept2Value[dept2Idx] = { ...dept2Value[dept2Idx], visible: !dept2Value[dept2Idx].visible, rowCnt: !dept2Value[dept2Idx].visible ? dept2Value[dept2Idx].orgRow - rowCnt : 1 };

        newValue[dept1Idx] = { ...newValue[dept1Idx], dept2: dept2Value };
      } else if (name === 'dept3') {
        const dept2Value = [...newValue[dept1Idx].dept2];
        const dept3Value = [...dept2Value[dept2Idx].dept3];

        let row = dept3Value[dept3Idx].dept4.length * 2;

        console.log('row', row, dept2Value[dept2Idx].rowCnt);
        dept3Value[dept3Idx] = { ...dept3Value[dept3Idx], visible: !dept3Value[dept3Idx].visible };
        dept2Value[dept2Idx] = { ...dept2Value[dept2Idx], dept3: dept3Value, rowCnt: dept3Value[dept3Idx].visible ? dept2Value[dept2Idx].rowCnt + row : dept2Value[dept2Idx].rowCnt - row };

        newValue[dept1Idx] = { ...newValue[dept1Idx], dept2: dept2Value };
      }
      return [...newValue];
    });
  };

  // 판매가능 수량 변경
  const handleInventoryChange = ({ name, e, dept1Idx, dept2Idx, dept3Idx, dept4Idx, pIdx }) => {
    console.log(dept1Idx, dept2Idx, dept3Idx, dept4Idx, pIdx);
    console.log('e', e.target.value);

    setList((prev) => {
      const newValue = [...prev];
      const dept2Value = [...newValue[dept1Idx].dept2];
      const dept3Value = [...dept2Value[dept2Idx].dept3];
      const inventoryCodeList = { ...dept3Value[dept3Idx].inventoryCodeList };
      const inventory = [...inventoryCodeList.inventory];

      let inventoryTemp = null;

      if (name === 'dept3') {
        inventory[pIdx] = {
          ...inventory[pIdx],
          channel_detail: inventoryCodeList.channel_detail,
          channel_type: inventoryCodeList.channel_type,
          count: isNaN(Number(e.target.value)) ? 0 : Number(e.target.value),
        };

        // dept3 수정
        inventoryTemp = inventory[pIdx];

        dept3Value[dept3Idx] = { ...dept3Value[dept3Idx], inventoryCodeList: { ...inventoryCodeList, inventory: inventory } };
      } else if (name === 'dept4') {
        const dept4Value = [...dept3Value[dept3Idx].dept4];
        const dept4InventoryCodeList = { ...dept4Value[dept4Idx].inventoryCodeList };
        const dept4Inventory = [...dept4InventoryCodeList.inventory];

        dept4Inventory[pIdx] = {
          ...dept4Inventory[pIdx],
          channel_detail: dept4InventoryCodeList.channel_detail,
          channel_type: dept4InventoryCodeList.channel_type,
          count: isNaN(Number(e.target.value)) ? 0 : Number(e.target.value),
        };

        // dept4 수정
        inventoryTemp = dept4Inventory[pIdx];

        dept4Value[dept4Idx] = { ...dept4Value[dept4Idx], inventoryCodeList: { ...dept4InventoryCodeList, inventory: dept4Inventory } };

        dept3Value[dept3Idx] = { ...dept3Value[dept3Idx], dept4: dept4Value };
      }

      dept2Value[dept2Idx] = { ...dept2Value[dept2Idx], dept3: dept3Value };
      newValue[dept1Idx] = { ...newValue[dept1Idx], dept2: dept2Value };

      // 수정된 값만 보내기
      if (onInventoryChange && inventoryTemp) onInventoryChange(inventoryTemp);

      return [...newValue];
    });
  };

  const generateTable = (roomTypeList, inventoryList, sellDateList) => {
    //className="sun"
    const h = []; // 테이블 헤더
    const sellDateArr = []; // 일자 모음 임시
    for (let i = 0; i < sellDateList.length; i++) {
      sellDateArr.push(sellDateList[i]);
      h.push(format(sellDateList[i], 'MM.dd'));
    }
    setHeader(h);

    console.log('inventoryList', inventoryList);
    const dept = roomTypeList.map((dept1, idx) => {
      let rowCnt = 0;

      const d2 = dept1.package_list.map((dept2) => {
        const iList = inventoryList[idx] || [];
        rowCnt = 1;

        const d3 = dept2.channel_list.map((dept3) => {
          rowCnt += 2;
          dept3.channel_detail_list.map((el) => {
            rowCnt += 2;
          });

          // dep3 해당 요금코드 필터
          const inventoryList = iList.filter((el) => {
            if (el.channel_type === dept3.channel_type && el.channel_detail === '') return true;
            else return false;
          });

          let inventoryCode = {};
          if (inventoryList.length > 0) {
            inventoryCode = { ...inventoryList[0] };
          }
          //console.log('priceList', priceList);

          //dept4
          const dept4 = dept3.channel_detail_list.map((el) => {
            const inventoryList = iList.filter((ele) => {
              if (ele.channel_type === dept3.channel_type && ele.channel_detail === el) return true;
              else return false;
            });

            let inventoryCode = {};
            if (inventoryList.length > 0) {
              inventoryCode = { ...inventoryList[0] };
            }

            return {
              name: el,
              inventoryCodeList: inventoryCode,
            };
          });
          //dept4 end

          //dept3
          return {
            name: dept3.channel_type,
            dept4: dept4,
            inventoryCodeList: inventoryCode,
            visible: true,
          };
        });

        const inventory = iList.filter((el) => {
          if (el.package_seq === dept2.package_seq && el.channel_type === '' && el.channel_detail === '') return true;
          else return false;
        });

        //dept2
        return {
          name: dept2.title,
          dept3: d3,
          inventoryList: inventory.length > 0 ? { ...inventory[0] } : {},
          visible: true,
          rowCnt: rowCnt,
          orgRow: rowCnt,
        };
      });
      console.log('dept1', dept1);
      return {
        roomTypeSeq: dept1.room_type_seq,
        name: dept1.room_type_name,
        list: dept1.room_sell_status_list,
        dept2: d2,
        visible: true,
      };
    });
    setList(dept);
    console.log('dept', dept);
  };

  useEffect(() => {
    generateTable(roomTypeList, inventoryList, sellDateList);
  }, [roomTypeList, inventoryList, sellDateList]);

  return (
    <div className="tls scroll editCase">
      <table>
        <colgroup>
          <col width="20" />
          <col width="20" />
          <col width="20" />
          <col width="200" />
          <col width="70" />
          <col width="80" />
          <col width="80" />
          <col width="80" />
          <col width="80" />
          <col width="80" />
          <col width="80" />
          <col width="80" />
          <col width="80" />
          <col width="80" />
          <col width="80" />
          <col width="80" />
          <col width="80" />
        </colgroup>
        <thead>
          <tr>
            <th className="first" colSpan="4">
              전체접기
            </th>
            <th></th>
            {header.map((el, idx) => {
              return <th key={`feeSetList_inven_header_${idx}`}>{el}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {/* 1Depth */}
          {list.length > 0 &&
            list.map((dept1, dept1Idx) => {
              // 2Depth
              const d2Element = dept1.dept2.map((dept2, dept2Idx) => {
                // 3Dept
                const d3Element = dept2.dept3.map((dept3, dept3Idx) => {
                  // 4Dept
                  const d4Element = dept3.dept4.map((dept4, dept4Idx) => {
                    const row = dept3.dept4.length * 2;
                    return (
                      <React.Fragment key={`4Depth_${dept1Idx}_${dept2Idx}_${dept3Idx}_${dept4Idx}`}>
                        <tr>
                          {dept4Idx === 0 && <th rowSpan={row}></th>}
                          <th rowSpan="2" className="depthTh">
                            <span className="txt">{dept4.name}</span>
                          </th>
                          <th>판매가능 수량</th>
                          {header.map((el, idx) => {
                            const pIdx = dept4.inventoryCodeList?.inventory.findIndex((p) => format(p.sell_date, 'MM.dd') === el);
                            const count = dept4.inventoryCodeList?.inventory[pIdx]?.count; // 총 = 판매가능수량

                            return (
                              <SellItem
                                key={`dept4_sell_detail_${dept1Idx}_${dept2Idx}_${dept3Idx}_${dept4Idx}_${idx}`}
                                date={el}
                                onChange={(e) => handleInventoryChange({ name: 'dept4', e, dept1Idx, dept2Idx, dept3Idx, dept4Idx, pIdx })}
                                value={count}
                              />
                            );
                          })}
                        </tr>
                        <tr className="numLine">
                          <th className="label">
                            <span className="num">
                              잔여<em>예약</em>
                            </span>
                          </th>
                          {header.map((el, idx) => {
                            const pIdx = dept4.inventoryCodeList?.inventory.findIndex((p) => format(p.sell_date, 'MM.dd') === el);
                            if (pIdx > -1) {
                              const count = dept4.inventoryCodeList?.inventory[pIdx]?.count; // 총
                              const reservationCount = dept4.inventoryCodeList?.inventory[pIdx]?.reservation_count; // 예약
                              const letf = count - reservationCount; //잔여
                              return (
                                <td key={`dept4_sell_status_${dept1Idx}_${dept2Idx}_${dept3Idx}_${dept4Idx}_${idx}`}>
                                  <span className="num">
                                    {letf}
                                    <em>{reservationCount}</em>
                                  </span>
                                </td>
                              );
                            }
                            return (
                              <td key={`dept4_sell_status_${dept1Idx}_${dept2Idx}_${dept3Idx}_${dept4Idx}_${idx}`}>
                                <span className="num">{/* 2<em>100</em> */}</span>
                              </td>
                            );
                          })}
                        </tr>
                      </React.Fragment>
                    );
                  });

                  return (
                    <React.Fragment key={`4Depth_${dept1Idx}_${dept2Idx}_${dept3Idx}`}>
                      <tr>
                        {dept3Idx === 0 && <th rowSpan={dept2.rowCnt - 1}></th>}

                        <th rowSpan="2" colSpan="2" className={`depthTh`}>
                          {dept3.name}{' '}
                          <span className="toggleSet">
                            <input type="checkbox" onClick={() => setIsModal(true)} />
                            <label>block</label>
                          </span>
                          {dept3.dept4.length > 0 && (
                            <button className={`opner ${dept3.visible ? 'on' : ''}`} onClick={() => handleVisible({ dept1Idx, dept2Idx, dept3Idx, name: 'dept3' })}>
                              오프너
                            </button>
                          )}
                        </th>
                        <th>판매가능 수량</th>
                        {header.map((el, idx) => {
                          const pIdx = dept3.inventoryCodeList?.inventory.findIndex((p) => format(p.sell_date, 'MM.dd') === el);
                          const count = dept3.inventoryCodeList?.inventory[pIdx]?.count; // 총 = 판매가능수량
                          // const edit = dept3.inventoryCodeList?.inventory[pIdx]?.edit_count || count; // 생성 판매가능수량
                          return (
                            <SellItem
                              key={`dept3_sell_detail_${dept1Idx}_${dept2Idx}_${dept3Idx}_${idx}`}
                              date={el}
                              onChange={(e) => handleInventoryChange({ name: 'dept3', e, dept1Idx, dept2Idx, dept3Idx, pIdx })}
                              value={count}
                            />
                          );
                        })}
                      </tr>
                      <tr className="numLine">
                        <th className="label">
                          <span className="num">
                            잔여<em>예약</em>
                          </span>
                        </th>
                        {header.map((el, idx) => {
                          const pIdx = dept3.inventoryCodeList?.inventory.findIndex((p) => format(p.sell_date, 'MM.dd') === el);
                          if (pIdx > -1) {
                            const count = dept3.inventoryCodeList?.inventory[pIdx]?.count; // 총
                            const reservationCount = dept3.inventoryCodeList?.inventory[pIdx]?.reservation_count; // 예약
                            const letf = count - reservationCount; //잔여
                            return (
                              <td key={`dept3_sell_status_${dept1Idx}_${dept2Idx}_${dept3Idx}_${idx}`}>
                                <span className="num">
                                  {letf}
                                  <em>{reservationCount}</em>
                                </span>
                              </td>
                            );
                          }
                          return (
                            <td key={`dept3_sell_status_${dept1Idx}_${dept2Idx}_${dept3Idx}_${idx}`}>
                              <span className="num">{/* 2<em>100</em> */}</span>
                            </td>
                          );
                        })}
                      </tr>

                      {d4Element && dept3.visible && d4Element}
                    </React.Fragment>
                  );
                });

                return (
                  <React.Fragment key={`2Depth_${dept1Idx}_${dept2Idx}`}>
                    <tr>
                      <th rowSpan={dept2.rowCnt}></th>
                      <th colSpan="3" className="depthTh">
                        {dept2.name}{' '}
                        <button className={`opner ${dept2.visible ? 'on' : ''}`} onClick={() => handleVisible({ dept1Idx, dept2Idx, name: 'dept2' })}>
                          오프너
                        </button>
                      </th>
                      <th className="label">
                        <span className="num">
                          잔여<em>예약</em>
                        </span>
                      </th>

                      {header.map((el, idx) => {
                        console.log;
                        const pIdx = dept2.inventoryList?.inventory.findIndex((p) => format(p.sell_date, 'MM.dd') === el);

                        const count = dept2.inventoryList?.inventory[pIdx]?.count; // 총
                        const reservationCount = dept2.inventoryList?.inventory[pIdx]?.reservation_count; // 예약
                        const letf = count - reservationCount; //잔여

                        return (
                          <td key={`dept2_sell_status_${dept1Idx}_${dept2Idx}_${idx}`}>
                            <span className="num">
                              {letf}
                              <em>{count}</em>
                            </span>
                          </td>
                        );
                      })}
                    </tr>

                    {d3Element && dept2.visible && d3Element}
                  </React.Fragment>
                );
              });
              // end 2Depth

              return (
                <React.Fragment key={`dept1_${dept1Idx}`}>
                  <Dept1Item dept={dept1} dept1Idx={dept1Idx} onVisible={handleVisible} />

                  {d2Element && dept1.visible && d2Element}
                </React.Fragment>
              );
            })}
          {/* end 1Depth */}
        </tbody>
      </table>
    </div>
  );
});

export default InventorySettingTable;
