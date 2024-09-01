import React, { useEffect } from 'react';
import useSmsVerify from '@components/hooks/useSmsVerify';
import { Timer } from '@components/common';
import { BaseInput, BaseButton, BaseSelect, ImageSetting } from '@components/common';
import PropTypes from 'prop-types';

const SmsVerify = ({ seconds, title, sendPlaceholder, sendButtonName, reSendButtonName, verifyPlaceholder, onVerifyClick }) => {
  const { params, secondsLeft, setSecondsLeft, timerEnd, setTimerEnd, handleSendClick, handleVerifyClick, handleChange, isSend } = useSmsVerify({ seconds, onVerifyClick });

  return (
    <dl>
      <dt>
        {title}
        <sup>필수항목</sup>
      </dt>
      <dd className="phoneCertify">
        <span className="certifySet">
          <BaseInput
            type="text"
            placeholder={sendPlaceholder}
            value={params.phone.value}
            error={params.phone.error}
            maxLength={params.phone.maxLength}
            onChange={(e) => handleChange('phone', e.target.value)}
          />
          {isSend && <Timer secondsLeft={secondsLeft} setSecondsLeft={setSecondsLeft} timerEnd={timerEnd} setTimerEnd={setTimerEnd} />}
        </span>
        <BaseButton type="button" className={'btnB sm'} label={isSend ? reSendButtonName : sendButtonName} onClick={handleSendClick} disabled={!params.phone.value} />

        {isSend && (
          <>
            <p className="notiP">인증 번호를 전송하였습니다.</p>
            <BaseInput
              type="text"
              placeholder={verifyPlaceholder}
              value={params.verify.value}
              error={params.verify.error}
              maxLength={params.verify.maxLength}
              onChange={(e) => handleChange('verify', e.target.value)}
            />
            <BaseButton type="button" className={'btnB sm'} label={'인증 확인'} onClick={handleVerifyClick} disabled={!params.verify.value} />

            {params.verify.error && <p className="errorP">인증번호가 일치하지 않습니다.</p>}
          </>
        )}
      </dd>
    </dl>
  );
};

SmsVerify.displayName = 'SmsVerify';

SmsVerify.propTypes = {
  className: PropTypes.string,
  seconds: PropTypes.number,
  title: PropTypes.string,
  sendPlaceholder: PropTypes.string,
  sendButtonName: PropTypes.string,
  reSendButtonName: PropTypes.string,
  verifyPlaceholder: PropTypes.string,
  onVerifyClick: PropTypes.func,
};

SmsVerify.defaultProps = {
  seconds: 300,
  title: '휴대폰 인증',
  sendPlaceholder: '휴대전화번호를 입력하세요.',
  sendButtonName: '인증번호 전송',
  reSendButtonName: '인증번호 재전송',
  verifyPlaceholder: '인증번호를 입력하세요.',
};

export default SmsVerify;
