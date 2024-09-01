import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ItemTag, BaseButton, ModalPresent } from '@components/common';

const RequestInfo = ({ docCnt, deadlineDate, deadlineTime, expireDate, expireTime, registerDate, registerTime, status, statusName, title, name, cads }) => {
  return (
    <li>
      <div className="stsSum">
        <span>
          <strong className={`iSts ${status === 'C' ? 'ing' : ''} ${status === 'D' ? 'end' : ''}`}>{statusName}</strong>
          <span className="reQNum">
            <i>견적서</i>
            <strong>{docCnt}</strong>
          </span>
        </span>
        <strong className="time">
          {registerDate} <strong>{registerTime}</strong>
        </strong>
      </div>
      <div className="listDt">
        <div className="left">
          <strong>{title}</strong>
          <span>{name}</span>
          <ItemTag items={cads} className="itemTag" />
          <dl className="deadlineSet">
            <dt>
              <em>견적요청 만료일</em>
            </dt>
            <dd>
              <span className="time">
                {expireDate} <span>{expireTime}</span>
              </span>
            </dd>
            <dt>
              <em>납품 마감일</em>
            </dt>
            <dd>
              <span className="time">
                {deadlineDate} <span>{deadlineTime}</span>
              </span>
            </dd>
          </dl>
        </div>
        <div className="right">
          <BaseButton label={'보철종류 보기'} className={'bIT'} onClick={() => setIsModal(true)} />
          <Link className="bMR" to="/requestView">
            더 자세히보기
          </Link>
        </div>
      </div>
    </li>
  );
};

RequestInfo.displayName = 'RequestInfo';

// RequestInfo.propTypes = {
//   wrap: PropTypes.string,
//   ddClassName: PropTypes.string,
//   spanClassName: PropTypes.string,
//   items: PropTypes.array,
//   title: PropTypes.string,
//   groupName: PropTypes.string.isRequired,
//   keyName: PropTypes.string,
//   valueName: PropTypes.string,
//   titleName: PropTypes.string,
//   checkValue: PropTypes.string,
//   onChange: PropTypes.func,
// };

// RequestInfo.defaultProps = {
//   wrap: 'dl',
//   ddClassName: '',
//   spanClassName: '',
//   items: [],
//   titleName: 'title',
//   valueName: 'value',
// };

export default RequestInfo;
