import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { Dept1Item, PriceItem } from './FeeSettingComponents';
import { isBefore, isEqual, format } from 'date-fns';

const FeeSettingTable = forwardRef(({ onFetch, roomTypeList, priceCodeList, sellDateList, onPriceChange, onSellChange }, ref) => {
  const [list, setList] = useState([]);
  const [orgList, setOrgList] = useState([]); // 원본데이터
  const [header, setHeader] = useState([]);

  const handleVisible = ({ dept1Idx, dept2Idx, dept3Idx, name }) => {
    setList((prev) => {
      const newValue = [...prev];
      if (name === 'dept1') {
        newValue[dept1Idx] = { ...newValue[dept1Idx], visible: !newValue[dept1Idx].visible };
      } else if (name === 'dept2') {
        const dept2Value = [...newValue[dept1Idx].dept2];
        const row = dept2Value[dept2Idx].dept3.filter((el) => !el.visible);
        const rowCnt = row.reduce((acc, cur, index) => {
          let cnt = cur.dept4.length * 3;
          return acc + cnt;
        }, 0);
        dept2Value[dept2Idx] = { ...dept2Value[dept2Idx], visible: !dept2Value[dept2Idx].visible, rowCnt: !dept2Value[dept2Idx].visible ? dept2Value[dept2Idx].orgRow - rowCnt : 1 };

        newValue[dept1Idx] = { ...newValue[dept1Idx], dept2: dept2Value };
      } else if (name === 'dept3') {
        const dept2Value = [...newValue[dept1Idx].dept2];
        const dept3Value = [...dept2Value[dept2Idx].dept3];

        let row = dept3Value[dept3Idx].dept4.length * 3;

        console.log('row', row, dept2Value[dept2Idx].rowCnt);
        dept3Value[dept3Idx] = { ...dept3Value[dept3Idx], visible: !dept3Value[dept3Idx].visible };
        dept2Value[dept2Idx] = { ...dept2Value[dept2Idx], dept3: dept3Value, rowCnt: dept3Value[dept3Idx].visible ? dept2Value[dept2Idx].rowCnt + row : dept2Value[dept2Idx].rowCnt - row };

        newValue[dept1Idx] = { ...newValue[dept1Idx], dept2: dept2Value };
      }
      return [...newValue];
    });
  };

  // 판매상태 변경
  const handleSellChange = (e, dept1Idx, sIdx) => {
    setList((prev) => {
      const newValue = [...prev];
      const dept1Value = { ...newValue[dept1Idx] };
      const sellValue = [...dept1Value.list];

      sellValue[sIdx] = { ...sellValue[sIdx], room_type_seq: dept1Value.roomTypeSeq, room_sell_status: e.target.checked ? 'SELL' : 'BLOCK' };
      newValue[dept1Idx] = { ...dept1Value, list: sellValue };

      // 수정된 값만 보내기
      if (onSellChange) onSellChange(sellValue[sIdx]);

      return [...newValue];
    });
  };

  // 요금변경
  const handlePriceChange = ({ name, e, dept1Idx, dept2Idx, dept3Idx, dept4Idx, pIdx }) => {
    console.log(e.target.value);
    console.log(dept1Idx, dept2Idx, dept3Idx, dept4Idx, pIdx);

    setList((prev) => {
      const newValue = [...prev];
      const dept2Value = [...newValue[dept1Idx].dept2];
      const dept3Value = [...dept2Value[dept2Idx].dept3];
      const priceCodeList = { ...dept3Value[dept3Idx].priceCodeList };
      const priceCode = [...priceCodeList.price_code];

      let priceCodeTemp = null;

      if (name === 'dept3') {
        priceCode[pIdx] = {
          ...priceCode[pIdx],
          channel_detail: priceCodeList.channel_detail,
          channel_type: priceCodeList.channel_type,
          price_detail: isNaN(Number(e.target.value)) ? 0 : Number(e.target.value),
        };

        // dept3 수정
        priceCodeTemp = priceCode[pIdx];

        dept3Value[dept3Idx] = { ...dept3Value[dept3Idx], priceCodeList: { ...priceCodeList, price_code: priceCode } };
      } else if (name === 'dept4') {
        const dept4Value = [...dept3Value[dept3Idx].dept4];
        const dept4PriceCodeList = { ...dept4Value[dept4Idx].priceCodeList };
        const dept4PriceCode = [...dept4PriceCodeList.price_code];

        dept4PriceCode[pIdx] = {
          ...dept4PriceCode[pIdx],
          channel_detail: dept4PriceCodeList.channel_detail,
          channel_type: dept4PriceCodeList.channel_type,
          price_detail: isNaN(Number(e.target.value)) ? 0 : Number(e.target.value),
        };

        // dept4 수정
        priceCodeTemp = dept4PriceCode[pIdx];

        dept4Value[dept4Idx] = { ...dept4Value[dept4Idx], priceCodeList: { ...dept4PriceCodeList, price_code: dept4PriceCode } };

        dept3Value[dept3Idx] = { ...dept3Value[dept3Idx], dept4: dept4Value };
      }

      dept2Value[dept2Idx] = { ...dept2Value[dept2Idx], dept3: dept3Value };
      newValue[dept1Idx] = { ...newValue[dept1Idx], dept2: dept2Value };

      // 수정된 값만 보내기
      if (onPriceChange && priceCodeTemp) onPriceChange(priceCodeTemp);

      return [...newValue];
    });
  };

  useEffect(() => {
    const h = []; // 테이블 헤더
    const sellDateArr = []; // 판매일자 모음 임시
    for (let i = 0; i < sellDateList.length; i++) {
      sellDateArr.push(sellDateList[i]);
      h.push(format(sellDateList[i], 'MM.dd'));
    }
    setHeader(h);
    //console.log('roomTypeList,roomTypeLis', roomTypeList);
    const dept = roomTypeList.map((dept1, idx) => {
      let rowCnt = 0;

      const d2 = dept1.package_list.map((dept2) => {
        const pList = priceCodeList[idx] || []; // 금액데이터 - 신규가 존재하는지 확인이 필요
        rowCnt = 1;

        const d3 = dept2.channel_list.map((dept3) => {
          rowCnt += 3;
          dept3.channel_detail_list.map((el) => {
            rowCnt += 3;
          });

          // console.log(pList);
          // dep3 해당 요금코드 필터
          const priceList = pList.filter((el) => {
            if (el.channel_type === dept3.channel_type && el.channel_detail === '') return true;
            else return false;
          });

          let priceCode = {};
          if (priceList.length > 0) {
            priceCode = { ...priceList[0] };
          }
          //console.log('priceList', priceList);

          //dept4
          const dept4 = dept3.channel_detail_list.map((el) => {
            const priceList = pList.filter((ele) => {
              if (ele.channel_type === dept3.channel_type && ele.channel_detail === el) return true;
              else return false;
            });

            let priceCode = {};
            if (priceList.length > 0) {
              priceCode = { ...priceList[0] };
            }

            return {
              name: el,
              priceCodeList: priceCode,
            };
          });
          //dept4 end

          //dept3
          return {
            name: dept3.channel_type,
            dept4: dept4,
            // dept4: dept3.channel_detail_list,
            priceCodeList: priceCode,
            visible: true,
          };
        });

        //dept2
        return {
          name: dept2.title,
          dept3: d3,
          priceCodeList: priceCodeList[idx],
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
        // rowCnt: rowCnt,
        // orgRow: rowCnt,
        visible: true,
      };
    });

    console.log(dept, 'dept');

    setList(dept);
    setOrgList(dept); // 취소하기시 데이터 원복때 사용
  }, [roomTypeList, priceCodeList, sellDateList]);

  const handleCancel = () => {
    setList(orgList);
  };

  useImperativeHandle(ref, () => ({
    handleCancel,
    onFetch,
  }));

  // 전체 데이터로 처리가 필요한 경우
  // useEffect(() => {
  //   if (onChange) onChange(list);
  // }, [list]);

  return (
    <article className="feeSetList">
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
            {/*  className="sun" */}
            <tr>
              <th className="first" colSpan="4">
                전체접기
              </th>
              <th></th>
              {header.map((el, idx) => {
                return <th key={`feeSetList_header_${idx}`}>{el}</th>;
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
                      return (
                        <React.Fragment key={`4Depth_${dept1Idx}_${dept2Idx}_${dept3Idx}_${dept4Idx}`}>
                          <tr>
                            <th rowSpan="3"></th>
                            <th rowSpan="3" className="depthTh">
                              <span className="txt">{dept4.name}</span>
                            </th>
                            <th rowSpan="2">레이트 코드</th>
                            {header.map((el, idx) => {
                              const pIdx = dept4.priceCodeList?.price_code?.findIndex((p) => format(p.sell_date, 'MM.dd') === el);
                              const value = pIdx > -1 ? dept4.priceCodeList?.price_code[pIdx].rate_code_name : '';

                              return <td key={`d4Element_code_${dept1Idx}_${dept2Idx}_${dept3Idx}_${dept4Idx}_${idx}`}>{value}</td>;
                            })}
                          </tr>
                          <tr>
                            {header.map((el, idx) => {
                              const pIdx = dept4.priceCodeList?.price_code?.findIndex((p) => format(p.sell_date, 'MM.dd') === el);
                              const value = pIdx > -1 ? dept4.priceCodeList?.price_code[pIdx].price : '';

                              return <td key={`d4Element_price_${dept1Idx}_${dept2Idx}_${dept3Idx}_${dept4Idx}_${idx}`}>{value}</td>;
                            })}
                          </tr>
                          <tr>
                            <th>요금</th>
                            {header.map((el, idx) => {
                              const pIdx = dept4.priceCodeList?.price_code?.findIndex((p) => format(p.sell_date, 'MM.dd') === el);
                              const value =
                                pIdx > -1
                                  ? dept4.priceCodeList?.price_code[pIdx]
                                  : { package_seq: 0, price: 0, price_code_seq: 0, price_detail: 0, rate_code_name: '', rate_code_seq: 0, room_type_seq: 0, sell_date: el };
                              return (
                                <PriceItem
                                  key={`dept4_price_detail_${dept1Idx}_${dept2Idx}_${dept3Idx}_${dept4Idx}_${idx}`}
                                  date={el}
                                  onChange={(e) => handlePriceChange({ name: 'dept4', e, dept1Idx, dept2Idx, dept3Idx, dept4Idx, pIdx })}
                                  value={value}
                                />
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

                          <th rowSpan="3" colSpan="2" className={`depthTh`}>
                            {dept3.name}{' '}
                            {dept3.dept4.length > 0 && (
                              <button className={`opner ${dept3.visible ? 'on' : ''}`} onClick={() => handleVisible({ dept1Idx, dept2Idx, dept3Idx, name: 'dept3' })}>
                                오프너
                              </button>
                            )}
                          </th>
                          <th rowSpan="2">레이트 코드</th>
                          {header.map((el, idx) => {
                            const pIdx = dept3.priceCodeList?.price_code.findIndex((p) => format(p.sell_date, 'MM.dd') === el);
                            const value = pIdx > -1 ? dept3.priceCodeList?.price_code[pIdx].rate_code_name : '';

                            return <td key={`dept3_rate_code_${dept1Idx}_${dept2Idx}_${dept3Idx}_${idx}`}>{value}</td>;
                          })}
                        </tr>
                        <tr>
                          {header.map((el, idx) => {
                            const pIdx = dept3.priceCodeList?.price_code.findIndex((p) => format(p.sell_date, 'MM.dd') === el);
                            const value = pIdx > -1 ? dept3.priceCodeList?.price_code[pIdx].price : '';

                            return <td key={`dept3_price_${dept1Idx}_${dept2Idx}_${dept3Idx}_${idx}`}>{value}</td>;
                          })}
                        </tr>
                        <tr>
                          <th>요금</th>
                          {header.map((el, idx) => {
                            const pIdx = dept3.priceCodeList?.price_code.findIndex((p) => format(p.sell_date, 'MM.dd') === el);
                            const value =
                              pIdx > -1
                                ? dept3.priceCodeList?.price_code[pIdx]
                                : { package_seq: 0, price: 0, price_code_seq: 0, price_detail: 0, rate_code_name: '', rate_code_seq: 0, room_type_seq: 0, sell_date: el };
                            return (
                              <PriceItem
                                key={`dept3_price_detail_${dept1Idx}_${dept2Idx}_${dept3Idx}_${idx}`}
                                date={el}
                                onChange={(e) => handlePriceChange({ name: 'dept3', e, dept1Idx, dept2Idx, dept3Idx, pIdx })}
                                value={value}
                              />
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
                        <th colSpan="13" className="roomType">
                          {/* 룸 타입 */}
                        </th>
                      </tr>

                      {d3Element && dept2.visible && d3Element}
                    </React.Fragment>
                  );
                });
                // end 2Depth

                return (
                  <React.Fragment key={`dept1_${dept1Idx}`}>
                    <Dept1Item dept={dept1} dept1Idx={dept1Idx} onVisible={handleVisible} onChange={handleSellChange} />

                    {d2Element && dept1.visible && d2Element}
                  </React.Fragment>
                );
              })}
            {/* end 1Depth */}
          </tbody>
        </table>
      </div>
    </article>
  );
});

export default FeeSettingTable;
