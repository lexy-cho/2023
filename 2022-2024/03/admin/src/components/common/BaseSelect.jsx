import { useState } from 'react';

/**
 *
 * list 데이터가 다른 경우가 있어서 id = 'id', title = 'title'  추가.
 * (Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>) 처리를 위해
 *      selected={el[id] === defaultValue} 삭제 <select value={defaultValue}> 처리.
 */
const BaseSelect = ({ list, defaultValue, onSelect, placeholder, id = 'id', title = 'title', spanCalss = 'selectSet' }) => {
  return (
    <span className={spanCalss}>
      <select onChange={(e) => onSelect(e)} value={defaultValue}>
        <option value="no" className="label">
          {placeholder}
        </option>
        {list?.map((el) => {
          return (
            <option value={el[id]} key={`baseSelect-key-${el[id]}`}>
              {el[title]}
            </option>
          );
        })}
      </select>
    </span>
  );
};

export default BaseSelect;
