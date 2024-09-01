import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
// import useBaseSelect from '@components/hooks/useBaseSelect';

const BaseSelect = ({ id, items, titleName, valueName, onChange, placeholder, className, ...props }) => {
  // const { selectRef, visible, setVisible, selected, setSelected } = useBaseSelect({ onChange });
  const selectRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState();

  useEffect(() => {
    if (!selected) return;
    setVisible(false);
    if (onChange) onChange(selected);
  }, [selected]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectRef, setVisible]);

  return (
    <span ref={selectRef} className={`cSelect ${visible ? 'on' : ''}`} id={id}>
      <em className="sValue" onClick={() => setVisible(!visible)}>
        {selected ? selected[titleName] : placeholder || items[0]?.[titleName]}
      </em>
      <span className="cArea">
        {items?.map((el, idx) => {
          return (
            <span key={`${selectRef}_${idx}`} className={selected && el[valueName] === selected[valueName] ? 'on' : ''} onClick={() => setSelected({ ...el, pid: id })}>
              {el[titleName]}
            </span>
          );
        })}
      </span>
    </span>
  );
};

BaseSelect.displayName = 'BaseSelect';

BaseSelect.propTypes = {
  id: PropTypes.string,
  titleName: PropTypes.string,
  valueName: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

BaseSelect.defaultProps = {
  titleName: 'name',
  valueName: 'value',
  onChange: () => {},
  placeholder: '',
  className: '',
};

export default BaseSelect;
