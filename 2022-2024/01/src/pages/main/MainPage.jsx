import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { BaseButton, SortingSelect } from '@components/common';
import sampleImage from '@assets/images/sample/sample1.png';
import sampleImage2 from '@assets/images/sample/sample18.png';
import sample01 from '@assets/images/sample/sample2.png';
import sample02 from '@assets/images/sample/sample3.png';
import sample03 from '@assets/images/sample/sample4.png';
import sample04 from '@assets/images/sample/sample5.png';

const MainPage = () => {
  const produtItems = [{ name: '인기순', value: 0 }, { name: '판매량순', value: 1 }];
  const [visible, setVisible] = useState(false);

  return (
    <>
      <section className='mainCase'>
        {/* 메인비주얼 */}
        <div className='mainVisual'>
          <div className='back'>
            <div className='txt'>
              <div>
                <span>
                  달콤하게 빛나는,
                  <strong>사랑스러운 핑크 베이스</strong>
                </span>
                <Link to=''>벚꽃 보습템 기획전</Link>
              </div>
            </div>
            <div className='img'>
              <img src={sampleImage} className='pcImg'/>
              <img src={sampleImage2} className='mobileImg'/>
            </div>
            </div>
        </div>
        {/* */}
        <div className='mainSearch'>
          <fieldset>
            <input type='text' placeholder='상품 또는 리셀러를 검색해보세요.' />
            <BaseButton type='button' className={'btn'} label={'SEARCH'} />
          </fieldset>
        </div>
        {/* */}
        <div className='mainCategory'>
          <div className='back'>
            <div className='detailMenu'>
              <button onClick={() => setVisible(!visible)}>카테고리</button>
              <ol style={{display: `${visible ? 'block' : 'none'}`}}>
                <li className='on'>
                  <span>스킨케어</span>
                  <ol>
                    <li className='on'>스킨/토너</li>
                    <li>에센스/세럼/앰플</li>
                    <li>크림</li>
                    <li>로션</li>
                    <li>미스트/오일</li>
                    <li>스킨케어 세트</li>
                    <li>마스크팩</li>
                    <li>클렌징</li>
                    <li>선케어</li>
                  </ol>
                </li>
                <li>
                  <span>메이크업</span>
                  <ol>
                    <li>Submenu</li>
                  </ol>
                </li>
                <li>
                  <span>건강</span>
                  <ol>
                    <li>Submenu</li>
                  </ol>
                </li>
                <li>
                  <span>음식</span>
                  <ol>
                    <li>Submenu</li>
                  </ol>
                </li>
                <li>
                  <span>K-굿즈</span>
                  <ol>
                    <li>Submenu</li>
                  </ol>
                </li>
              </ol>
            </div>
            <ul className='mainMenu'>
              <li>스킨케어</li>
              <li>메이크업</li>
              <li>건강</li>
              <li>음식</li>
              <li>K-굿즈</li>
            </ul>
          </div>
        </div>
        {/* */}
        <div className='mainProduct'>
          <div className='productList'>
            <div className='listSorting'>
              <SortingSelect items={produtItems} placeholder={'인기순'} onChange={(e) => console.log(e)} />
            </div>
            <ul>
              <li>
                <Link to='/product'>
                  <span className='pImg'><img src={sample01} /></span>
                  <em className='brand sm'>오에르</em>
                  <strong>오에르 카밍 릴리프 에멀전</strong>
                  <span className='price'>
                    <span>19,900원</span>
                    <em>~20%</em>
                  </span>
                </Link>
              </li>
              <li>
                <span className='pImg'><img src={sample02} /></span>
                <em className='brand sm'>By Wishtrend</em>
                <strong>바이위시트랜드 순수비타민C 21.5%</strong>
                <span className='price'>
                  <span>233,100원</span>
                  <em>~30%</em>
                </span>
              </li>
              <li>
                <span className='pImg'><img src={sample03} /></span>
                <em className='brand sm'>공후하</em>
                <strong>공후하 인크리즈드 3종 SET</strong>
                <span className='price'>
                  <span>230,500원</span>
                  <em>~10%</em>
                </span>
              </li>
              <li>
                <span className='pImg'><img src={sample04} /></span>
                <em className='brand sm'>스킨앤랩</em>
                <strong>스킨앤랩 베리어덤 인텐시브 크림</strong>
                <span className='price'>
                  <span>53,000원</span>
                  <em>~5%</em>
                </span>
              </li>
              <li>
                <span className='pImg'><img src={sample01} /></span>
                <em className='brand sm'>오에르</em>
                <strong>오에르 카밍 릴리프 에멀전</strong>
                <span className='price'>
                  <span>19,900원</span>
                  <em>~20%</em>
                </span>
              </li>
              <li>
                <span className='pImg'><img src={sample02} /></span>
                <em className='brand sm'>By Wishtrend</em>
                <strong>바이위시트랜드 순수비타민C 21.5%</strong>
                <span className='price'>
                  <span>233,100원</span>
                  <em>~30%</em>
                </span>
              </li>
              <li>
                <span className='pImg'><img src={sample03} /></span>
                <em className='brand sm'>공후하</em>
                <strong>공후하 인크리즈드 3종 SET</strong>
                <span className='price'>
                  <span>230,500원</span>
                  <em>~10%</em>
                </span>
              </li>
              <li>
                <span className='pImg'><img src={sample04} /></span>
                <em className='brand sm'>스킨앤랩</em>
                <strong>스킨앤랩 베리어덤 인텐시브 크림</strong>
                <span className='price'>
                  <span>53,000원</span>
                  <em>~5%</em>
                </span>
              </li>
            </ul>
          </div>
          <p className='lastP'>
            마지막 상품입니다.
          </p>
        </div>
        {/* */}
      </section>
    </>
  );
};

export default MainPage;
