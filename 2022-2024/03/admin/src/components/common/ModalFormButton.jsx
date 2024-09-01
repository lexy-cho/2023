import React, { useState } from 'react';
import { BaseButton } from '@components/common';
const ModalFormButton = ({ onCancel, onSave, saveTitle = '저장 후 닫기', ...props }) => {
  const { isSubmit } = props;
  //const [isSubmit, setIsSubmit] = useState(false);
  return (
    <div className="pBtn" {...props}>
      <span className="fr">
        {onCancel && (
          <button className="btnL sm" onClick={onCancel}>
            취소
          </button>
        )}

        {/* <button className="btnB sm">저장 후 닫기</button> */}
        {onSave && (
          <BaseButton
            className="btnB sm"
            isSubmit={isSubmit}
            onButtonClick={() => {
              onSave();
            }}
            buttonLabel={saveTitle}
          />
        )}
      </span>
    </div>
  );
};

ModalFormButton.defaultProps = {
  isSubmit: false,
};

export default ModalFormButton;
