import React, { useEffect, useRef, useState } from 'react';
import { BaseInput, BaseButton, BaseSelect } from '@components/common';
import { Link } from 'react-router-dom';
import MyPageSnb from './MyPageSnb';
import MyPageTabNav from './MyPageTabNav';
import PrivacyAlert from '../../components/ui/modal/PrivacyAlert';
import {ModalAlertPresent} from '@components/common';

const MyInfoPage = ({onLayoutTitleChange}) => {
    const [isModal, setIsModal] = useState(false);
    const emailItems = [{ name: 'gmail.com', value: 0 }, { name: 'naver.com', value: 1 }];
    const phoneItems = [{ name: '010', value: 0 }, { name: '011', value: 1 }];
    const nationalItems = [{ name: '한국', value: 0 }, { name: '미국', value: 1 }];
    useEffect(() => {
        onLayoutTitleChange('개인정보 수정');
    });
  return (
    <>
      <section>
        <div className='mypageWrap'>
          <MyPageTabNav />
          <div className='grid subCase'>
              <div className='aside'>
                <MyPageSnb />
              </div>
              <div className='detail'>
                <article className='myBox'>
                  <div className='listTit'>
                    <h3>개인정보 수정</h3>
                  </div>
                  <div className='myInfo'>
                    <form>
                        <div className="tws">
                            <dl>
                                <dt>아이디</dt>
                                <dd>
                                    <input type="text" placeholder="아이디를 입력해 주세요." defaultValue='wz.ling' />
                                </dd>
                            </dl>
                            <dl>
                                <dt>현재 비밀번호</dt>
                                <dd>
                                    <input type="password" placeholder="비밀번호를 입력해 주세요." defaultValue='' />
                                </dd>
                            </dl>
                            <dl>
                                <dt>새 비밀번호</dt>
                                <dd>
                                    <input type="password" placeholder="새 비밀번호를 입력해 주세요." defaultValue='' />
                                </dd>
                            </dl>
                            <dl>
                                <dt>새 비밀번호 확인</dt>
                                <dd>
                                    <input type="password" placeholder="새 비밀번호를 다시 입력해 주세요." defaultValue='' />
                                </dd>
                            </dl>
                            <dl>
                                <dt>이름</dt>
                                <dd>
                                    <input type="text" placeholder="이름을 입력해 주세요." defaultValue='홍길동' />
                                </dd>
                            </dl>
                            <dl>
                                <dt>이메일</dt>
                                <dd className='emailSet'>
                                    <BaseInput type="text" placeholder="이메일 아이디" value={'kd.hong'} />
                                    <em>@</em>
                                    <BaseSelect items={emailItems} placeholder={'gmail.com'} onChange={(e) => console.log(e)} />
                                </dd>
                            </dl>
                            <dl>
                                <dt>국적</dt>
                                <dd className='national'>
                                    <BaseSelect items={nationalItems} placeholder={'한국'} onChange={(e) => console.log(e)} />
                                </dd>
                            </dl>
                            <dl>
                                <dt>연락처</dt>
                                <dd className='phoneSet'>
                                    <BaseSelect items={phoneItems} placeholder={'010'} onChange={(e) => console.log(e)} />
                                    <input type='text' />
                                </dd>
                            </dl>
                            <dl>
                                <dt>성별</dt>
                                <dd className='sexChoice'>
                                    <span className="radioSet">
                                        <input type="radio" name='sex' id='sex1' />
                                        <label htmlFor='sex1'>남자</label>
                                    </span>
                                    <span className="radioSet">
                                        <input type="radio" name='sex' id='sex2' />
                                        <label htmlFor='sex2'>여자</label>
                                    </span>
                                </dd>
                            </dl>
                            <dl>
                                <dt>생년월일</dt>
                                <dd>
                                    <input type="text" placeholder="생년월일 8자리(YYYYMMDD)" defaultValue='1980.01.01' />
                                </dd>
                            </dl>
                            <dl className='agreeSetLine'>
                                <dt>선택약관동의</dt>
                                <dd className='agreeSet'>
                                    <ul>
                                        <li>
                                            <span className="checkSet">
                                                <input type="checkbox" className='rCheck' />
                                                <label>개인정보 수집·이용 동의 <em>&#40;선택&#41;</em></label>
                                            </span>
                                            <button type='button' onClick={() => setIsModal(true)}>약관 보기</button> {/* PC용 */}
                                            <Link to='/mobileAgree'>약관 보기</Link> {/* 모바일용 */}
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div className='btnArea'>
                            <BaseButton type='button' className={'btnWL'} label={'탈퇴하기'} />
                            <BaseButton type='submit' className={'btnM'} label={'수정하기'} />
                        </div>
                    </form>
                  </div>
                </article>
              </div>
          </div>
        </div>
      </section>
      {isModal && 
          <ModalAlertPresent >
              <PrivacyAlert onClose={() => {setIsModal(false)}}/>
          </ModalAlertPresent>
      }
    </>
  );
};

export default MyInfoPage;
