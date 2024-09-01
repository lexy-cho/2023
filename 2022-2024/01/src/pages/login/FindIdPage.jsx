import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BaseInput, BaseButton, BaseSelect, ImageSetting } from '@components/common';
const FindIdPage = () => {
    const [jStep , setJoinStep] = useState(1);
    const handleJoinStep = (jStep) => {
        setJoinStep(jStep);
    }
  return (
    <>
      <section className='memberLayout'>
        {jStep === 1 && 
        <div className='findBefore'>
            <h2>
              아이디 찾기
            </h2>
            <article>
                <form>
                    <div className='findWrap'>
                        <input type='text' placeholder='이름을 입력해 주세요.' />
                        <span className='ipBtn'>
                            <input type='text' placeholder='휴대폰번호를 입력해 주세요.' />
                            <button type='button' className='btnL'>인증 요청</button>
                            {/* <button type='button' className='btnL'>재전송</button> */}
                        </span> 
                        <span className='ipBtn'>
                            <span>
                                <input type='text' placeholder='인증번호 5자리' />
                                <em>00:55</em>
                            </span>
                            <button type='button' className='btnL'>인증 확인</button>
                            {/* <button type='button' className='btnL' disabled >인증 완료</button> */}
                        </span> 
                        {/* <p className='notiP'>
                            인증 번호를 전송하였습니다.
                        </p>
                        <p className='errorP'>
                            인증번호가 일치하지 않습니다.
                        </p> */}
                    </div>
                    <BaseButton type='button' className={'btnM'} label={'확인'} onClick={() => handleJoinStep(2)} />
                </form>
                <div className="goFindJoin">
                    <Link to="/findPw">비밀번호 찾기</Link>
                    <Link to="/login/join">이메일 회원가입</Link>
                </div>
            </article>
        </div>
        }
        {jStep === 2 && 
        <div className='findEnd'>
            <article>
                <h2>아이디를 찾았습니다</h2>
                <p>로그인 후 서비스를 이용해 주세요.</p>
                <div>
                    <strong>kd.hong</strong>
                    <Link to='/findPw' className='btnL'>비밀번호 찾기</Link>
                </div>
                <Link to='/login' className='btnM'>로그인 하기</Link>
            </article>
            {/* <article>
                <h2>가입한 정보가 없습니다.</h2>
                <p>회원가입 후 서비스를 이용해 주세요.</p>
                <Link to='/login/join' className='btnM'>회원가입</Link>
            </article> */}
        </div>
        }
      </section>
      <Outlet />
    </>
  );
};

export default FindIdPage;
