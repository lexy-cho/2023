import React, { useEffect, useState } from 'react';

const Select = ({ list, onHandleSelect, value, holder, id = 'id', title = 'title' }) => {
  const [selectV, setSelectV] = useState(false);
  const [textValue, setTextValue] = useState({ [id]: undefined, [title]: undefined });
  const [zIndex, setZIndex] = useState();

  const handleBtnClick = (btnSelect) => {
    setSelectV(!selectV);

    const btnSelectElement = document.getElementById('cSelect');
    const newZIndex = btnSelectElement.getAttribute('data-role');
    setZIndex(newZIndex);
  };

  const handleSpanClick = (v) => {
    setTextValue(v);
    setSelectV(false);
    onHandleSelect(v);
  };

  useEffect(() => {
    if (value != undefined && list) setTextValue(list.find((e) => e[id] === value));
  }, [value, list]);

  return (
    <div className="cSelect" id="cSelect" data-role="10" onClick={handleBtnClick}>
      <span className={`sValue ${selectV ? 'on' : 'on'}`}>{textValue ? textValue[title] || holder : holder}</span>
      <div className={`cArea ${selectV ? 'on' : ''}`} style={{ display: selectV ? 'block' : 'none' }}>
        {list?.map((el, i) => {
          return (
            <span
              key={`select-key-${i}`}
              className={el[id] === textValue ? textValue[id] : '' ? 'on' : ''}
              onClick={() => {
                console.log(el);
                handleSpanClick(el);
              }}
            >
              {el[title]}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Select;
