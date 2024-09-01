import { BaseInput } from '@components/common';
import React, { useState } from 'react';

export const Dept1Item = ({ dept, dept1Idx, onVisible, onChange }) => {
  return (
    <>
      <tr className="stsLLine">
        <th className="first" rowSpan={dept.visible ? 3 : 2} colSpan="4">
          {dept.name}
          <button className={`opner ${dept.visible ? 'on' : ''}`} onClick={() => onVisible({ dept1Idx, name: 'dept1' })}>
            오프너
          </button>
        </th>
        <th className="label">판매상태</th>

        {dept?.list.map((el, idx) => {
          const txt = el?.room_sell_status === 'SELL' ? '오픈' : '마감';
          return (
            <td key={`inven_room_sell_status_${idx}`} className={el?.room_sell_status !== 'SELL' ? `close` : ''}>
              {txt}
            </td>
          );
        })}
      </tr>

      <tr className="numLine">
        <th className="label">
          <span className="num">
            잔여<em>예약</em>
          </span>
        </th>
        {dept?.list.map((el, idx) => {
          const left = Number(el?.total_room_count) - Number(el?.reservation_count);
          return (
            <td key={`inven_reservation_count_${idx}`}>
              <span className="num">
                {left}
                <em>{el?.reservation_count}</em>
              </span>
            </td>
          );
        })}
      </tr>

      {dept.visible && (
        <tr>
          <th className="label">판매가능 룸</th>
          {dept?.list.map((el, idx) => {
            const left = Number(el?.total_room_count) - Number(el?.reservation_count);
            return <td key={`inven_sell_count_${idx}`}>{left}</td>;
          })}
        </tr>
      )}
    </>
  );
};

export const SellItem = ({ value, onChange }) => {
  const [change, setChange] = useState(false);
  return (
    <td className="mCol">
      <span className="mDim" style={{ display: `${change ? 'none' : ''}` }} onClick={() => setChange(true)}>
        수정
      </span>

      <BaseInput type="text" value={value} placeholder="입력" onChange={onChange} />
    </td>
  );
};
