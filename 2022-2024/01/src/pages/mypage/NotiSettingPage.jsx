import React, { useEffect, useRef, useState } from 'react';
import { BaseInput, BaseButton, BaseSelect } from '@components/common';
import { Link } from 'react-router-dom';
import MyPageSnb from './MyPageSnb';
import MyPageTabNav from './MyPageTabNav';
import PrivacyAlert from '../../components/ui/modal/PrivacyAlert';
import {ModalAlertPresent} from '@components/common';

const NotiSettingPage = ({onLayoutTitleChange}) => {
    const [isModal, setIsModal] = useState(false);
    const emailItems = [{ name: 'gmail.com', value: 0 }, { name: 'naver.com', value: 1 }];
    const phoneItems = [{ name: '010', value: 0 }, { name: '011', value: 1 }];
    const nationalItems = [{ name: '한국', value: 0 }, { name: '미국', value: 1 }];
    useEffect(() => {
        onLayoutTitleChange('알림/마케팅 정보 동의 수신 설정');
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
                <article className='myBox notiSettingBack'>
                  <div className='listTit'>
                    <h3>알림/마케팅 정보 동의 수신 설정</h3>
                  </div>
                  <div className='notiSetting'>
                    <form>
                        <div>
                            <h4>알림 수신 동의</h4>
                            <dl>
                                <dt>
                                    <span className="checkSet">
                                        <input type="checkbox" className='rCheck' />
                                        <label>혜택/정보 알림 수신 동의 <em>&#40;선택&#41;</em></label>
                                    </span>
                                </dt>
                                <dd>
                                    <span className="checkSet">
                                        <input type="checkbox" className='rCheck' />
                                        <label>이메일</label>
                                    </span>
                                    <p>혜택/정보 알림 수신 동의를 하시면 the Ippo 상품·서비스 및 이벤트 정보를 받으실 수 있습니다.</p>
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <h4>마케팅 정보 수신 동의</h4>
                            <dl>
                                <dt>
                                    <span className="checkSet">
                                        <input type="checkbox" className='rCheck' />
                                        <label>마케팅 정보 제공을 위한 개인정보 수집 및 이용 동의 <em>&#40;선택&#41;</em></label>
                                    </span>
                                </dt>
                                <dd>
                                    <span className="checkSet">
                                        <input type="checkbox" className='rCheck' />
                                        <label>이메일</label>
                                    </span>
                                    <p>마케팅 정보 수신 동의를 하시면 the Ippo 상품·서비스 및 이벤트 정보를 받으실 수 있습니다.</p>
                                </dd>
                            </dl>
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

export default NotiSettingPage;
