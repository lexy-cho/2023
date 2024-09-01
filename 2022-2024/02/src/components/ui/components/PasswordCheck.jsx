import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BaseInput, BaseButton } from '@components/common';
import usePasswordCheck from '../../hooks/usePasswordCheck';

const PasswordCheck = ({ onPassword, err }) => {
  const { pwVisible, setPwVisible, pwVisible2, setPwVisible2, params, handleChange, error } = usePasswordCheck({ onPassword });
  return (
    <>
      <span className={`pwSet ${pwVisible ? 'on' : ''}`}>
        <BaseInput
          type={`${pwVisible ? 'text' : 'password'}`}
          id="password"
          placeholder={params.password.placeholder}
          value={params.password.value}
          error={err}
          maxLength={params.password.maxLength}
          onChange={(e) => handleChange(e.target.id, e.target.value)}
        />
        <BaseButton type="button" onClick={() => setPwVisible(!pwVisible)} label="Password View" />
      </span>
      <span className={`pwSet ${pwVisible2 ? 'on' : ''}`}>
        <BaseInput
          type={`${pwVisible2 ? 'text' : 'password'}`}
          id="checkPassword"
          placeholder={params.checkPassword.placeholder}
          value={params.checkPassword.value}
          error={err}
          maxLength={params.checkPassword.maxLength}
          onChange={(e) => handleChange(e.target.id, e.target.value)}
        />
        <BaseButton type="button" onClick={() => setPwVisible2(!pwVisible2)} label="Password View" />
        {error && <p className="errorP">비밀번호가 일치하지 않습니다.</p>}
      </span>
    </>
  );
};

export default PasswordCheck;
