import React, { useEffect, useState } from 'react';
const BaseTextArea = ({ onChange, error, ...props }) => {
  const { value } = props;

  return (
    <>
      <textarea {...props} onChange={onChange} />
      {error && <p className="errorP">{error}</p>}
    </>
  );
};

BaseTextArea.defaultProps = {
  maxLength: 120,
};

export default BaseTextArea;
