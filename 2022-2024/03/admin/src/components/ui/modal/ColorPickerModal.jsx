import React, { useEffect, useState } from 'react';
import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/css';
import { ModalFormButton } from '@components/common';
const ColorPickerModal = ({ onClose, hotel_color, handleSave }) => {
  const [color, setColor] = useColor(hotel_color || '#000000');
  console.log(color);
  return (
    <div className="fullPop promotionMainPop" id="promotionMainPop" style={{ display: 'block' }}>
      <button className="btnPClose" onClick={() => onClose()}>
        닫기
      </button>
      <h1 className="pt">호텔 컬러 설정</h1>
      <div className="pBack">
        <ColorPicker color={color} onChange={setColor} />
      </div>
      <ModalFormButton onSave={() => handleSave(color)} />
    </div>
  );
};

export default ColorPickerModal;
