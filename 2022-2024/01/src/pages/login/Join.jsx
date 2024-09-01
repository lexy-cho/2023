import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BaseInput, BaseButton, BaseSelect, ImageSetting } from '@components/common';
import { SmsVerify } from '@components/ui';
import AgreeSet from './components/AgreeSet';
import { useClient } from './hooks/useClient';

const JoinPage = () => {
  const { params, agreeSet, handleCheck, handleChange, handleSubmit } = useClient();

  const [imgFileList, setImgFileList] = useState([]);
  useEffect(() => {
    //console.log(imgFileList);
  }, [imgFileList]);

  const [pwVisible, setPwVisible] = useState(false);
  const [pwVisible2, setPwVisible2] = useState(false);

  const emailItems = [{ name: 'gmail.com', value: 0 }, { name: 'naver.com', value: 1 }];
  const kidsItems = [{ name: '0', value: 0 }, { name: '0', value: 1 }];

  return (
    <section className={`memberLayout`}>
      <div className="memberInfo">
        <h2>이메일 회원가입</h2>
        <form>
          <div className="tws">
            <dl>
              <dt>ID</dt>
              <dd>
                <input type="text" placeholder="ID" />
              </dd>
            </dl>
            <dl>
              <dt>Password</dt>
              <dd>
                  <span className={`pwSet ${pwVisible ? 'on' : ''}`}>
                    <BaseInput type={`${pwVisible ? 'text' : 'password'}`} value={params?.memberPassword} placeholder="Password" onChange={(e) => handleChange('memberPassword', e.target.value)} />
                    <input type='button' onClick={() => setPwVisible(!pwVisible)} value='Password View' />
                    {/* input에 커서가 들어가면 input type='button' 활성화 */}
                  </span>
              </dd>
            </dl>
            <dl>
              <dt>Confirm Password</dt>
              <dd>
                  <span className={`pwSet ${pwVisible2 ? 'on' : ''}`}>
                    <BaseInput type={`${pwVisible2 ? 'text' : 'password'}`} value={params?.memberPassword} placeholder="Confirm Password" onChange={(e) => handleChange('memberPassword', e.target.value)} />
                    <input type='button' onClick={() => setPwVisible2(!pwVisible2)} value='Password View' />
                    {/* input에 커서가 들어가면 input type='button' 활성화 */}
                  </span>
              </dd>
            </dl>
            <dl>
              <dt>Email</dt>
              <dd className='emailSet'>
                <BaseInput type="text" placeholder="User name" />
                <em>@</em>
                <BaseSelect items={emailItems} placeholder={'gmail.com'} onChange={(e) => console.log(e)} />
              </dd>
            </dl>
            <dl className='radioRow'>
              <dt>Gender</dt>
              <dd>
                <span className='radioSet'>
                  <input type='radio' name='radio1' id='radio1' defaultChecked />
                  <label htmlFor='radio1'>Male</label>
                </span>
                <span className='radioSet'>
                  <input type='radio' name='radio1' id='radio2' />
                  <label htmlFor='radio2'>Female</label>
                </span>
              </dd>
            </dl>
            <dl className='radioRow'>
              <dt>Occupation</dt>
              <dd>
                <span className='radioSet'>
                  <input type='radio' name='radio2' id='radio21' defaultChecked />
                  <label htmlFor='radio21'>Housewife</label>
                </span>
                <span className='radioSet'>
                  <input type='radio' name='radio2' id='radio22' />
                  <label htmlFor='radio22'>Business</label>
                </span>
                <span className='radioSet'>
                  <input type='radio' name='radio2' id='radio23' />
                  <label htmlFor='radio23'>Student</label>
                </span>
                <span className='radioSet'>
                  <input type='radio' name='radio2' id='radio24' />
                  <label htmlFor='radio24'>Job/Service</label>
                </span>
                <span className='radioSet'>
                  <input type='radio' name='radio2' id='radio25' />
                  <label htmlFor='radio25'>Others</label>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>About me</dt>
              <dd>
                <span className='taSet'>
                  <textarea placeholder='Please enter your details.'></textarea>
                  <em>0/500</em>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>My Business Name</dt>
              <dd>
                <BaseInput type="text" placeholder="My Business Name" />
              </dd>
            </dl>
            <dl>
              <dt>Address</dt>
              <dd>
                <input type='text' placeholder='Address' className="wFull" />
              </dd>
            </dl>
            <div className="division">
              <dl>
                <dt>Date of Birth</dt>
                <dd>
                  <BaseInput type="text" placeholder="YYYYMMDD" />
                </dd>
              </dl>
              <dl className='radioRow'>
                <dt>Marital Status</dt>
                <dd>
                  <span className='radioSet'>
                    <input type='radio' name='radio3' id='radio31' defaultChecked />
                    <label htmlFor='radio31'>Married</label>
                  </span>
                  <span className='radioSet'>
                    <input type='radio' name='radio3' id='radio32' />
                    <label htmlFor='radio32'>Single</label>
                  </span>
                  <span className='radioSet'>
                    <input type='radio' name='radio3' id='radio33' />
                    <label htmlFor='radio33'>Divorced/Seperated/Widowed</label>
                  </span>
                </dd>
              </dl>
              <dl>
                <dt>Number of Kids</dt>
                <dd>
                  <BaseSelect items={kidsItems} placeholder={'0'} onChange={(e) => console.log(e)} />
                </dd>
              </dl>
              <dl className='radioRow'>
                <dt>Education</dt>
                <dd>
                  <span className='radioSet'>
                    <input type='radio' name='radio4' id='radio41' defaultChecked />
                    <label htmlFor='radio41'>Elementary/Middle School</label>
                  </span>
                  <span className='radioSet'>
                    <input type='radio' name='radio4' id='radio42' />
                    <label htmlFor='radio42'>High School</label>
                  </span>
                  <span className='radioSet'>
                    <input type='radio' name='radio4' id='radio43' />
                    <label htmlFor='radio43'>College</label>
                  </span>
                  <span className='radioSet'>
                    <input type='radio' name='radio4' id='radio44' />
                    <label htmlFor='radio44'>Graduate School</label>
                  </span>
                  <span className='radioSet'>
                    <input type='radio' name='radio4' id='radio45' />
                    <label htmlFor='radio45'>Ph.D</label>
                  </span>
                </dd>
              </dl>
              <dl>
                <dt>Monthly Income</dt>
                <dd>
                    <span className='unit'>
                      <input type='text'  />
                      <em>USD</em>
                    </span> 
                </dd>
              </dl>
            </div>
            <div className="division">
              <dl>
                <dt>bank name</dt>
                <dd>
                  <BaseInput type="text" placeholder="bank name" />
                </dd>
              </dl>
              <dl>
                <dt>bank account</dt>
                <dd>
                  <BaseInput type="text" placeholder="bank account" />
                </dd>
              </dl>
              <dl>
                <dt>Confirm Account Number</dt>
                <dd>
                  <BaseInput type="text" placeholder="Confirm Account Number" />
                </dd>
              </dl>
              <dl>
                <dt>Account Holder's Name</dt>
                <dd>
                  <BaseInput type="text" placeholder="Account Holder's Name" />
                </dd>
              </dl>
              <dl>
                <dt>Code</dt>
                <dd>
                  <BaseInput type="text" placeholder="Code" />
                </dd>
              </dl>
            </div>
            <div className="division">
              <AgreeSet items={agreeSet} onChange={handleCheck} />
            </div>
          </div>
          <div className='btnArea'>
            <BaseButton type='submit' className={'btnM'} label={'가입하기'} onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default JoinPage;
