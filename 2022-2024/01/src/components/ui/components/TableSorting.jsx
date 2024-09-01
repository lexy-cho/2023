import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ItemTag, PostsMore, Pagenation, BaseButton } from '@components/common';

const TableSorting = ({ className = 'sorting', defaultValue, titleName = 'name', valueName = 'value', name = 'sorting', items = [], onHandleChange }) => {
  return (
    <>
      <div className='right sortingSet'>
          <BaseButton label={'모바일소팅'} className={'btnMS'} />
          <span className='sArea'>
            <span className={className}>
              {items.map((el, idx) => {
                return (
                  <span key={`sort_${idx}`}>
                    <input type="radio" id={`${name}_${idx}`} defaultChecked={defaultValue === el[valueName]} name={name} onChange={() => onHandleChange(el[valueName])} />
                    <label htmlFor={`${name}_${idx}`}>{el[titleName]}</label>
                  </span>
                );
              })}
            </span>
          </span>
      </div>
    </>
  );
};

export default TableSorting;
