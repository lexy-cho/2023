import React, { useState } from 'react';

const RadioGroup = ({ title, radios, checkValue, onCheck, type, dlClass, add, ddAdd }) => {
  return (
    <dl className={dlClass}>
      <dt>{title}</dt>
      <dd>
        {radios?.map((el, i) => {
          return (
            <span className="radioSet" key={`radio-${type}-key-${i}`}>
              <input value={el.key} type="radio" name={`radio-${type}-${i + 1}`} checked={el.key == checkValue} onChange={(e) => onCheck(e.target.value)} />
              <label htmlFor={`radio-${type}-${i + 1}`}>{el.title}</label>
            </span>
          );
        })}
        {ddAdd && ddAdd}
      </dd>
      {add && add}
    </dl>
  );
};

export default RadioGroup;
