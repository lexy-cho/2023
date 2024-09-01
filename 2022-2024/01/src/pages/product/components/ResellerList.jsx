import React, { forwardRef } from 'react';
import { Pagenation, SortingSelect } from '@components/common';
import sample01 from '@assets/images/sample/sample2.png';
import sample02 from '@assets/images/sample/sample3.png';
import sample03 from '@assets/images/sample/sample4.png';
import sample04 from '@assets/images/sample/sample5.png';
import { Link } from 'react-router-dom';

const ResellerList = forwardRef((props, ref) => {
    const produtItems = [{ name: '인기순', value: 0 }, { name: '판매량순', value: 1 }];

    return (
      <article ref={resellerListRef => (ref.current[0] = resellerListRef)}>
        <div className="back rListCase">
          <div className='listTit sm'>
            <h3>총 262개 상품</h3>
            <SortingSelect items={produtItems} placeholder={'인기순'} onChange={(e) => console.log(e)} />
          </div>
          {/*  */}
          <div className='productList'>
            <ul>
              <li>
                <Link to='/product'>
                  <span className='pImg'><img src={sample01} /></span>
                  <strong>오에르 카밍 릴리프 에멀전</strong>
                  <em className='brand'>오에르</em>
                  <span className='price'>
                    <span>19,900원</span>
                    <em>~20%</em>
                  </span>
                </Link>
              </li>
              <li>
                <span className='pImg'><img src={sample02} /></span>
                <strong>바이위시트랜드 순수비타민C 21.5%</strong>
                <em className='brand'>By Wishtrend</em>
                <span className='price'>
                  <span>233,100원</span>
                  <em>~30%</em>
                </span>
              </li>
              <li>
                <span className='pImg'><img src={sample03} /></span>
                <strong>공후하 인크리즈드 3종 SET</strong>
                <em className='brand'>공후하</em>
                <span className='price'>
                  <span>230,500원</span>
                  <em>~10%</em>
                </span>
              </li>
              <li>
                <span className='pImg'><img src={sample04} /></span>
                <strong>스킨앤랩 베리어덤 인텐시브 크림</strong>
                <em className='brand'>스킨앤랩</em>
                <span className='price'>
                  <span>53,000원</span>
                  <em>~5%</em>
                </span>
              </li>
              <li>
                <span className='pImg'><img src={sample01} /></span>
                <strong>오에르 카밍 릴리프 에멀전</strong>
                <em className='brand'>오에르</em>
                <span className='price'>
                  <span>19,900원</span>
                  <em>~20%</em>
                </span>
              </li>
              <li>
                <span className='pImg'><img src={sample02} /></span>
                <strong>바이위시트랜드 순수비타민C 21.5%</strong>
                <em className='brand'>By Wishtrend</em>
                <span className='price'>
                  <span>233,100원</span>
                  <em>~30%</em>
                </span>
              </li>
              <li>
                <span className='pImg'><img src={sample03} /></span>
                <strong>공후하 인크리즈드 3종 SET</strong>
                <em className='brand'>공후하</em>
                <span className='price'>
                  <span>230,500원</span>
                  <em>~10%</em>
                </span>
              </li>
              <li>
                <span className='pImg'><img src={sample04} /></span>
                <strong>스킨앤랩 베리어덤 인텐시브 크림</strong>
                <em className='brand'>스킨앤랩</em>
                <span className='price'>
                  <span>53,000원</span>
                  <em>~5%</em>
                </span>
              </li>
            </ul>
          </div>
          {/*  */}
          <Pagenation />
        </div>
      </article>
    );
  });

export default ResellerList;