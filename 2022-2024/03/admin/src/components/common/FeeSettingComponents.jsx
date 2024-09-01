import { BaseInput } from '@components/common';
import React, { useState } from 'react';

export const Dept1Item = ({ dept, dept1Idx, onVisible, onChange }) => {
  return (
    <>
      <tr className="numLine">
        <th className="first" rowSpan={dept.visible ? 2 : 1} colSpan="4">
          {dept.name}
          <button className={`opner ${dept.visible ? 'on' : ''}`} onClick={() => onVisible({ dept1Idx, name: 'dept1' })}>
            오프너
          </button>
        </th>
        <th className="label">
          <span className="num">
            잔여<em>예약</em>
          </span>
        </th>

        {dept?.list.map((el, idx) => {
          const left = Number(el?.total_room_count) - Number(el?.reservation_count);
          return (
            <td key={`reservation_count_${idx}`}>
              <span className="num">
                {left}
                <em>{el?.reservation_count}</em>
              </span>
            </td>
          );
        })}
      </tr>
      {dept.visible && (
        <tr className="stsLine">
          <th className="label">판매상태</th>

          {dept?.list.map((el, idx) => {
            return (
              <td key={`room_sell_status_${idx}`} className={el?.room_sell_status !== 'SELL' ? `closeCol` : ''}>
                <span className="toggleSet">
                  <input type="checkbox" checked={el?.room_sell_status === 'SELL' ? true : false} onChange={(e) => onChange(e, dept1Idx, idx)} />
                  <label htmlFor="">
                    <i>오픈</i>
                    <em>마감</em>
                  </label>
                </span>
              </td>
            );
          })}
        </tr>
      )}
    </>
  );
};

export const PriceItem = ({ value, onChange }) => {
  const [change, setChange] = useState(false);
  return (
    <td className="mCol">
      <span className="mDim" style={{ display: `${change ? 'none' : ''}` }} onClick={() => setChange(true)}>
        수정
      </span>

      <BaseInput type="text" value={value.price_detail} onChange={onChange} />
    </td>
  );
};
