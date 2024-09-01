import React from 'react';
import { PulseLoader } from 'react-spinners';
const BaseButton = ({ ...props }) => {
  const { buttonLabel, onButtonClick, isSubmit, className } = props;

  return (
    <button onClick={() => !isSubmit && onButtonClick()} className={className}>
      {isSubmit ? <PulseLoader size={10} color={'#ffffff'} /> : `${buttonLabel}`}
    </button>
  );
};

export default BaseButton;
