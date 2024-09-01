import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BaseButton } from '@components/common';

const TableSorting = ({ className, defaultValue, titleName, valueName, groupName, items = [], onChange }) => {
  return (
    <>
      <div className="right sortingSet">
        <BaseButton label={'모바일소팅'} className={'btnMS'} />
        <span className="sArea">
          <span className={className}>
            {items.map((el, idx) => {
              let func = onChange;
              if (el.onChange) func = el.onChange;
              return (
                <span key={`sort_${idx}`}>
                  <input type="radio" id={`${groupName}_${idx}`} checked={defaultValue === el[valueName]} name={groupName} onChange={() => func(el[valueName])} />
                  <label htmlFor={`${groupName}_${idx}`}>{el[titleName]}</label>
                </span>
              );
            })}
          </span>
        </span>
      </div>
    </>
  );
};

TableSorting.displayName = 'TableSorting';

TableSorting.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.any,
  titleName: PropTypes.string,
  valueName: PropTypes.string,
  name: PropTypes.string,
  items: PropTypes.array,
  onChange: PropTypes.func,
};

TableSorting.defaultProps = {
  className: 'sorting',
  titleName: 'name',
  valueName: 'value',
  groupName: 'sorting',
  items: [],
};

export default TableSorting;
