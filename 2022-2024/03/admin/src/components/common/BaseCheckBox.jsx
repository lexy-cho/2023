import { useEffect, useState } from 'react';

const BaseCheckBox = ({ onCheckChange, checked, ...props }) => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCheck(checked);
  }, [checked]);
  return <input type="checkbox" onChange={onCheckChange} checked={check} {...props} />;
};

export default BaseCheckBox;
