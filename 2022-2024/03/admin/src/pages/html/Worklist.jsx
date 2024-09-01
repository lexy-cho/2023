import React, { useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';

const Worklist = () => {
  return (
    <>
      <section>
        <div className="workListwrap">
            <ul>
                <li>문서타입 : HTML5 / CSS3</li>
            </ul>
            <table>
                {/* <caption>
                  <span className="draft"></span>&nbsp; 최초 완료
                  <span className="new"></span>&nbsp; 전달 시 신규
                  <span className="gray"></span>&nbsp; 최초 전달 완료
                  <span className="red"></span>&nbsp; 수정사항
                  <span className="pink"></span>&nbsp; History
                </caption> */}
                <thead>
                    <tr>
                        <th width="4%">ID</th>
                        <th width="100">1 depth</th>
                        <th width="130">2 depth</th>
                        <th width="160">3 depth</th>
                        <th width="200">URL</th>
                        <th>History & Descration</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                      <th colSpan="6" className="title">Admin</th>
                  </tr>
                  <tr>
                      <th></th>
                      <td rowSpan="4">common</td>
                      <td>Component</td>
                      <td></td>
                      <td><Link to="/component">Component</Link></td>
                      <td></td>
                  </tr>
                  <tr>
                      <th></th>
                      <td>Error</td>
                      <td></td>
                      <td>
                        <Link to="/error">Error</Link>
                      </td>
                      <td></td>
                  </tr>
                  <tr>
                      <th></th>
                      <td>Loading</td>
                      <td></td>
                      <td>
                        {/* <Link to="/loading">loading</Link> */}
                      </td>
                      <td></td>
                  </tr>
                  <tr>
                      <th></th>
                      <td>로그인</td>
                      <td></td>
                      <td><Link to="/login">login</Link></td>
                      <td></td>
                  </tr>
                  <tr>
                      <th></th>
                      <td>대시보드</td>
                      <td></td>
                      <td></td>
                      <td>
                        <Link to="/dashboard">Dashboard</Link>
                      </td>
                      <td>그래프 제외</td>
                  </tr>
                  <tr>
                      <th></th>
                      <td rowSpan="2">예약</td>
                      <td>예약</td>
                      <td>예약 내역<br/>취소 규정<br/>미수금 내역</td>
                      <td>
                        <Link to="/reserveHistory" target="_blank">ReserveHistory</Link><br/>
                        <Link to="/reserveCancel" target="_blank">ReserveCancel</Link><br/>
                        <Link to="/resereNotpay" target="_blank">ResereNotpay</Link>
                      </td>
                      <td>Popup Apply<br/>Popup Apply<br/>-<br/></td>
                  </tr>
                  <tr>
                      <th></th>
                      <td>관리</td>
                      <td>잔여 룸<br/>고객 요청사항</td>
                      <td>
                        <Link to="/reserveRemain" target="_blank">ReserveRemain</Link><br/>
                        <Link to="/reserveCR" target="_blank">ReserveCR</Link>
                      </td>
                      <td>-<br/>-<br/></td>
                  </tr>
                  <tr>
                      <th></th>
                      <td rowSpan="3">요금</td>
                      <td>요금코드 관리</td>
                      <td>시즌 코드<br/>시즌 클래스 추가<br/>소스 코드<br/>마켓 코드<br/>마켓 코드 추가<br/>레이트 카테고리<br/>레이트 코드<br/>레이트 코드 추가</td>
                      <td>
                        <Link to="/feeCodeSeason" target="_blank">FeeCodeSeason</Link><br/>
                        <Link to="/feeCodeSeasonWrite" target="_blank">FeeCodeSeasonWrite</Link><br/>
                        <Link to="/feeCodeSource" target="_blank">FeeCodeSource</Link><br/>
                        <Link to="/feeCodemarket" target="_blank">FeeCodemarket</Link><br/>
                        <Link to="/feeCodemarketWrite" target="_blank">FeeCodemarketWrite</Link><br/>
                        <Link to="/feeCodeLateC" target="_blank">FeeCodeLateC</Link><br/>
                        <Link to="/feeCodeLate" target="_blank">FeeCodeLate</Link><br/>
                        <Link to="/feeCodeLateWrite" target="_blank">FeeCodeLateWrite</Link><br/>
                      </td>
                      <td>Popup Apply<br/>Popup Apply<br/>Popup Apply<br/>-<br/>-<br/>Popup Apply<br/>-<br/>Popup Apply<br/></td>
                  </tr>
                  <tr>
                      <th></th>
                      <td>요금</td>
                      <td>요금 설정<br/>인벤토리 설정</td>
                      <td>
                        <Link to="/feeSetting" target="_blank">FeeSetting</Link><br/>
                        <Link to="/feeInventory" target="_blank">FeeInventory</Link>
                      </td>
                      <td>-<br/>Popup Apply<br/></td>
                  </tr>
                  <tr>
                      <th></th>
                      <td>회사</td>
                      <td>회사코드<br/>회사코드 추가<br/>CMS 채널<br/>판매 현황<br/>결제 상세</td>
                      <td>
                        <Link to="/feeCompanyCode" target="_blank">FeeCompanyCode</Link><br/>
                        <Link to="/feeCompanyCodeWrite" target="_blank">FeeCompanyCodeWrite</Link><br/>
                        <Link to="/feeCompanyCMS" target="_blank">FeeCompanyCMS</Link><br/>
                        <Link to="/"></Link><br/>
                        <Link to="/"></Link><br/>
                      </td>
                      <td>-<br/>-<br/>-<br/><br/><br/></td>
                  </tr>
                  <tr>
                      <th></th>
                      <td rowSpan="2">쿠폰</td>
                      <td>쿠폰 관리</td>
                      <td>쿠폰<br/>쿠폰 추가<br/>전체로그</td>
                      <td>
                        <Link to="/couponMgt" target="_blank">CouponMgt</Link><br/>
                        <Link to="/couponMgtWrite" target="_blank">CouponMgtWrite</Link><br/>
                        <Link to="/"></Link><br/>
                      </td>
                      <td>Popup Apply<br/>-<br/><br/></td>
                  </tr>
                  <tr>
                      <th></th>
                      <td>기타</td>
                      <td>푸시 발송</td>
                      <td>
                        <Link to="/couponPush" target="_blank">CouponPush</Link>
                      </td>
                      <td>Popup Apply</td>
                  </tr>
                  <tr>
                      <th></th>
                      <td rowSpan="3">콘텐츠</td>
                      <td>콘텐츠 관리<br/>(브랜드)</td>
                      <td>메인 배경 설정<br/>메인 배경 추가<br/>브랜드 소개<br/>프로모션<br/>프로모션 추가<br/>프로모션 보기<br/>패키지<br/>패키지 보기<br/>리워즈<br/>리워즈 보기<br/>시설<br/>시설 추가</td>
                      <td>
                        <Link to="/contentsMainBg" target="_blank">ContentsMainBg</Link><br/>
                        <Link to="/contentsMainBgWrite" target="_blank">ContentsMainBgWrite</Link><br/>
                        <Link to="/contentsBrand" target="_blank">ContentsBrand</Link><br/>
                        <Link to="/contentsPromotion" target="_blank">ContentsPromotion</Link><br/>
                        <Link to="/contentsPromotionWrite" target="_blank">ContentsPromotionWrite</Link><br/>
                        <Link to="/contentsPromotionView" target="_blank">ContentsPromotionView</Link><br/>
                        <Link to="/ContentsPackage" target="_blank">ContentsPackage</Link><br/>
                        <Link to="/ContentsPackageView" target="_blank">ContentsPackageView</Link><br/>
                        <Link to="/contentsRewards" target="_blank">ContentsRewards</Link><br/>
                        <Link to="/contentsRewardsView" target="_blank">ContentsRewardsView</Link><br/>
                        <Link to="/contentsFacility" target="_blank">ContentsFacility</Link><br/>
                        <Link to="/contentsFacilityWrite" target="_blank">ContentsFacilityWrite</Link><br/>
                      </td>
                      <td>-<br/>-<br/>-<br/>Popup Apply<br/>-<br/>Popup Apply<br/>Popup Apply<br/>Popup Apply<br/>-<br/>-<br/>-<br/>-<br/></td>
                  </tr>
                  <tr>
                      <th></th>
                      <td>콘텐츠 관리<br/>(프로퍼티 별)</td>
                      <td>호텔 소개<br/>객실<br/>객실 추가<br/>시설<br/>시설 추가</td>
                      <td>
                        <Link to="/contentsHotel" target="_blank">ContentsHotel</Link><br/>
                        <Link to="/contentsRoom" target="_blank">ContentsRoom</Link><br/>
                        <Link to="/contentsRoomWrite" target="_blank">ContentsRoomWrite</Link><br/>
                        <Link to="/contentsFacilityP" target="_blank">ContentsFacilityP</Link><br/>
                        <Link to="/contentsFacilityPWrite" target="_blank">ContentsFacilityPWrite</Link><br/>
                      </td>
                      <td>-<br/>Popup Apply<br/>-<br/>-<br/>-<br/></td>
                  </tr>
                  <tr>
                      <th></th>
                      <td>알림</td>
                      <td>VOC<br/>FAQ<br/>공지사항<br/>이벤트 팝업</td>
                      <td>
                        <Link to="/contentsVoc" target="_blank">ContentsVoc</Link><br/>
                        <Link to="/contentsFaq" target="_blank">ContentsFaq</Link><br/>
                        <Link to="/contentsNotice" target="_blank">ContentsNotice</Link><br/>
                        <Link to="/contentsEvent" target="_blank">ContentsEvent</Link>
                      </td>
                      <td>Popup Apply<br/>Popup Apply<br/>Popup Apply<br/>Popup Apply<br/></td>
                  </tr>
                  <tr>
                      <th></th>
                      <td rowSpan="2">리워즈</td>
                      <td>회원관리</td>
                      <td>회원관리</td>
                      <td>
                        <Link to="/"></Link>
                      </td>
                      <td></td>
                  </tr>
                  <tr>
                      <th></th>
                      <td>리워즈</td>
                      <td>리워즈 관리<br/>리워즈 추가<br/>리워즈 내역<br/>마일리지 관리</td>
                      <td>
                        <Link to="/rewardsMgt" target="_blank">RewardsMgt</Link><br/>
                        <Link to="/rewardsMgtWrite" target="_blank">RewardsMgtWrite</Link><br/>
                        <Link to="/"></Link><br/>
                        <Link to="/rewardsMileage" target="_blank">RewardsMileage</Link><br/>
                      </td>
                      <td>Popup Apply<br/>-<br/> <br/>Popup Apply<br/></td>
                  </tr>
                  <tr>
                      <th></th>
                      <td rowSpan="3">통계</td>
                      <td>통계</td>
                      <td></td>
                      <td>
                        <Link to="/summeryBasic" target="_blank">SummeryBasic</Link>
                      </td>
                      <td>- (그래프 제외)</td>
                  </tr>
                  <tr>
                      <th></th>
                      <td>정형화 통계</td>
                      <td></td>
                      <td>
                        <Link to="/summeryFix" target="_blank">SummeryFix</Link>
                      </td>
                      <td>-</td>
                  </tr>
                  <tr>
                      <th></th>
                      <td>비정형 통계</td>
                      <td></td>
                      <td>
                        <Link to="/summeryUnFix" target="_blank">SummeryUnFix</Link>
                      </td>
                      <td></td>
                  </tr>
                  <tr>
                      <th></th>
                      <td rowSpan="2">설정</td>
                      <td>상품관리</td>
                      <td>룸타입 설정<br/>룸타입 설정 추가<br/>패키지<br/>패키지 추가<br/>아이템<br/>아이템 추가<br/>옵션<br/>옵션 추가</td>
                      <td>
                        <Link to="/settingRoomType" target="_blank">SettingRoomType</Link><br/>
                        <Link to="/settingRoomTypeWrite" target="_blank">SettingRoomTypeWrite</Link><br/>
                        <Link to="/settingPackage" target="_blank">SettingPackage</Link><br/>
                        <Link to="/settingPackageWrite" target="_blank">SettingPackageWrite</Link><br/>
                        <Link to="/settingItem" target="_blank">SettingItem</Link><br/>
                        <Link to="/settingItemWrite" target="_blank">SettingItemWrite</Link><br/>
                        <Link to="/settingOption" target="_blank">SettingOption</Link><br/>
                        <Link to="/settingOptionWrite" target="_blank">SettingOptionWrite</Link><br/>
                      </td>
                      <td>
                        Popup Apply<br/>-<br/>-<br/>Popup Apply<br/>-<br/>Popup Apply<br/>Popup Apply<br/>-<br/>
                      </td>
                  </tr>
                  <tr>
                      <th></th>
                      <td>설정</td>
                      <td>호텔관리<br/>호텔관리 추가<br/>호텔정보<br/>약관관리<br/>약관관리 추가<br/>계정 권한 코드<br/>계정관리</td>
                      <td>
                        <Link to="/settingHMgt" target="_blank">SettingHMgt</Link><br/>
                        <Link to="/settingHMgtWrite" target="_blank">SettingHMgtWrite</Link><br/>
                        <Link to="/settingHInfo" target="_blank">SettingHInfo</Link><br/>
                        <Link to="/settingHTerm" target="_blank">SettingHTerm</Link><br/>
                        <Link to="/settingHTermWrite" target="_blank">SettingHTermWrite</Link><br/>
                        <Link to="/settingHACode" target="_blank">SettingHACode</Link><br/>
                        <Link to="/settingHAccount" target="_blank">SettingHAccount</Link>
                      </td>
                      <td>-<br/>-<br/>Popup Apply<br/>-<br/>-<br/>Popup Apply<br/>Popup Apply<br/></td>
                  </tr>
                </tbody>
            </table>
        </div>
	  </section>
    </>


  );
};

export default Worklist;
