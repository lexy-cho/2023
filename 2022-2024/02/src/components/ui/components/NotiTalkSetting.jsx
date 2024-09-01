import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BaseInput, BaseButton } from '@components/common';
import { notis, apps } from '@constants/code';
import useNotiTalkSetting from '@components/hooks/useNotiTalkSetting';

const NotiTalkSetting = ({ onChange }) => {
  const { talkOk, params, handleChange } = useNotiTalkSetting({ onChange });
  return (
    <>
      <dl>
        <dt>
          알림톡 설정
          <sup>필수항목</sup>
        </dt>
        <dd className="talkChoice">
          <em>
            거래에서 발생하는 알림은 이메일로 제공됩니다.
            <br />그 외의 알림톡 제공을 원하실 경우 설정해주세요.
          </em>
          <span className="talkSet">
            {notis['ko'].map((el, idx) => (
              <span key={`notis${idx}`}>
                <BaseInput
                  type="radio"
                  defaultChecked={params.memberAlarmAt.value === el.value}
                  name="memberAlarmAt"
                  id={`memberAlarmAt${idx}`}
                  label={el.name}
                  value={el.value}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
              </span>
            ))}
          </span>
        </dd>
      </dl>
      <dl style={{ display: `${params.memberAlarmAt.value === 'Y' ? 'block' : 'none'}` }}>
        <dt>
          알림톡 선택
          <sup>필수항목</sup>
        </dt>
        <dd className="talkChoice">
          <em>알림톡 방식을 선택해 주세요.</em>
          <span className="talkSet short">
            {apps['ko'].map((el, idx) => (
              <span key={`apps${idx}`}>
                <BaseInput
                  type="radio"
                  defaultChecked={params.memberAlarmSe.value === el.value}
                  name="memberAlarmSe"
                  id={`memberAlarmSe${idx}`}
                  label={el.name}
                  value={el.value}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
              </span>
            ))}
          </span>
        </dd>
      </dl>
    </>
  );
};

export default NotiTalkSetting;
