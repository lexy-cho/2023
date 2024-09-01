import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const RadioFilter = ({ children }) => {
  return (
    <dl>
      <dt>가철성 보철물</dt>
      <dd>
        <span>
          <input type="radio" id="aa" name="radio1" />
          <label htmlFor="aa">Framework</label>
        </span>
        <span>
          <input type="radio" name="radio1" />
          <label>배열&큐어링</label>
        </span>
        <span>
          <input type="radio" name="radio1" />
          <label>Flexible Denture</label>
        </span>
        <span>
          <input type="radio" name="radio1" />
          <label>BPS</label>
        </span>
        <span>
          <input type="radio" name="radio1" />
          <label>Bar type</label>
        </span>
        <span>
          <input type="radio" name="radio1" />
          <label>Telescopic</label>
        </span>
        <span>
          <input type="radio" name="radio1" />
          <label>Attachment</label>
        </span>
        <span>
          <input type="radio" name="radio1" />
          <label>기타</label>
        </span>
      </dd>
    </dl>
  );
};

export default RadioFilter;
