import React, { useEffect, useState } from 'react';
import { ModalFormButton } from '@components/common';
import { GoogleMapContainer } from '@components/ui/contents';
const GoogleMapModal = ({ geolocation, onClose, onHandleLatLng }) => {
  const handleCallback = (lat, lng) => {
    onHandleLatLng(lat, lng);
  };

  // const [lat, setLat] = useState();
  // const [lng, setLng] = useState();
  // useEffect(() => {
  //   if (geolocation?.lat) {
  //     setLat(geolocation?.lat);
  //     setLng(geolocation?.lng);
  //   }
  // }, [geolocation]);

  console.log(geolocation);
  return (
    <div className="fullPop promotionMainPop" id="promotionMainPop" style={{ display: 'block' }}>
      <button className="btnPClose" onClick={() => onClose()}>
        닫기
      </button>
      <h1 className="pt">메인 설정</h1>
      <div className="pBack">
        <GoogleMapContainer callback={handleCallback} lat={geolocation?.lat} lng={geolocation?.lng} />
      </div>
      {/* <ModalFormButton
        onCancel={() => {
          onClose();
        }}
        onSave={() => {}}
      /> */}
    </div>
  );
};

export default GoogleMapModal;
