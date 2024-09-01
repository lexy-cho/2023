import React, { useState } from 'react';
import { BaseButton } from '@components/common';
const FormButton = ({ onCancel, onSave, isSubmit, saveLabel = '저장하기', ...props }) => {
  return (
    <div className="bArea" {...props}>
      {onCancel && (
        <button className="btnL" onClick={onCancel}>
          취소하기
        </button>
      )}
      {onSave && (
        <BaseButton
          className="btnB"
          isSubmit={isSubmit}
          onButtonClick={() => {
            onSave();
          }}
          buttonLabel={saveLabel}
        />
      )}
    </div>
  );
};

FormButton.defaultProps = {
  isSubmit: false,
};

export default FormButton;
