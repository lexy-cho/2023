import React, { useState } from 'react';
import ModalTabPresent from '@components/common/ModalTabPresent';
import { getImageUrl } from '@utils/Image';
const ImageViewModal = ({ onClose, element }) => {
  return (
    <>
      <ModalTabPresent>
        <div className="tabPop">
          <div className="pt">
            <button className="btnPTClose" onClick={() => onClose()}>
              닫기
            </button>
          </div>
          <div className="pBack">
            <span>
              {element?.type === 'server' ? (
                <img
                  style={{ maxHeight: '100%', maxWidth: '100%', width: 'auto', height: 'auto' }}
                  src={getImageUrl(element?.company_seq, element?.hotel_seq, element?.file_path, element?.file_name)}
                />
              ) : (
                <img style={{ maxHeight: '100%', maxWidth: '100%', width: 'auto', height: 'auto' }} src={element?.source} />
              )}
            </span>
          </div>
        </div>
      </ModalTabPresent>
    </>
  );
};

export default ImageViewModal;
