<template lang="html">
  <div>

    <div class="sortSet rndCase">
      <span>
        <input type="checkbox" id="radioTab1" checked /><label for="radioTab1">패키지</label>
      </span>
      <span>
        <input type="checkbox" id="radioTab2" checked /><label for="radioTab2">이론강의</label>
      </span>
      <span>
        <input type="checkbox" id="radioTab3" /><label for="radioTab3">문제풀이</label>
      </span>
      <span>
        <input type="checkbox" id="radioTab4" checked /><label for="radioTab4">모의고사</label>
      </span>
      <span>
        <input type="checkbox" id="radioTab5" /><label for="radioTab5">면접실연</label>
      </span>
      <span>
        <input type="checkbox" id="radioTab6" /><label for="radioTab6">기타특강</label>
      </span>
    </div>
    <!--패키지-->
    <div class="ssamLecList">
      <strong class="kindTit">패키지</strong>
      <ul>
        <!--Loop-->
        <li>
          <div class="lecBasic">
            <span class="kind">
              <span><em class="iApplySet ing">신청중</em></span>
            </span>
            <div class="lecTt" @click="smartLecPop = true">
              <em class="iLocSet online">온라인</em>
              <em class="iSet">패키지</em>
              <em class="iSet">2021</em>
              <strong class="tt">연간쌤팩 베이직
              <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span></strong>
            </div>
            <div class="moreInfo">
              <button class="btnSmartDetail" @click="discountTipsPop = true">수강할인 팁</button>
              <button class="btnSmartDetail" @click="benefitsPop = true">수강혜택</button>
              <button class="btnSmartDetail" @click="smartLecPop = true">상세보기</button>
            </div>
            <div class="choice">
              <span class="priceCheck">
                <input type="checkbox" id="price0" />
                <label for="price0">
                  <i></i>
                  <span class="price" v-if="!this.mobile">
                    <del>2,568,000</del><em>10<b>%</b></em>
                    <strong>1,356,600<i>원</i></strong>
                  </span>
                  <span class="price" v-else-if="this.mobile">
                    <strong>1,356,600<i>원</i></strong>
                    <del>2,568,000</del><em>10<b>%</b></em>
                  </span>
                </label>
              </span>
            </div>
          </div>
        </li>
        <!--//Loop-->
        <li class="on">
          <!---->
          <div class="lecBasic">
            <span class="kind">
              <span><em class="iApplySet ing">신청중</em></span>
            </span>
            <div class="lecTt" @click="smartLecPop = true">
              <em class="iLocSet online">온라인</em>
              <em class="iSet">패키지</em>
              <em class="iSet">2021</em>
              <em class="iSet red">신규개설</em>
              <strong class="tt">연간쌤팩 프리미엄
              <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span></strong>
            </div>
            <div class="moreInfo">
              <button class="btnSmartDetail" @click="benefitsPop = true">수강혜택</button>
              <button class="btnSmartDetail" @click="smartLecPop = true">상세보기</button>
            </div>
            <div class="choice">
              <span class="priceCheck">
                <input type="checkbox" id="price01" checked />
                <label for="price01">
                  <i></i>
                  <span class="price" v-if="!this.mobile">
                    <del>2,568,000</del><em>10<b>%</b></em>
                    <strong>1,356,600<i>원</i></strong>
                  </span>
                  <span class="price" v-else-if="this.mobile">
                    <strong>1,356,600<i>원</i></strong>
                    <del>2,568,000</del><em>10<b>%</b></em>
                  </span>
                </label>
              </span>
            </div>
          </div>
          <!---->
        </li>
      </ul>
    </div>
    <!--//패키지-->
    <!--이론강의-->
    <div class="ssamLecList">
      <strong class="kindTit">이론강의</strong>
      <ul>
        <!--Loop-->
        <li class="on">
          <div class="lecBasic">
            <span class="kind">
              <span><em class="iApplySet apply">신청예정</em></span>
            </span>
            <div class="lecTt" @click="smartLecPop = true">
              <em class="iLocSet online">온라인</em>
              <em class="iSet">단과</em>
              <em class="iSet">2021</em>
              <em class="iSet red">신규개설</em>
              <strong class="tt">
                강좌의 타이틀이 길어지면 2~N행으로 확장이 됩니다. <i class="division">이론강의</i>
                <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span>
              </strong>
              <span class="limitNtime"><span class="lecLimit gray"><em>70일간</em><em>1.4배수</em><em>제작중</em><em>신청시작일: 2021-07-01</em></span></span>
              <span class="iSetLine">
                <em>첨삭</em>
                <em>PC+모바일</em>
                <em>인패키지</em>
                <em>제작예정(2021년 09~12월)</em>
              </span>
            </div>
            <div class="moreInfo">
              <button class="btnSmartDetail" @click="discountTipsPop = true">수강할인 팁</button>
              <button class="btnSmartDetail" @click="smartLecPop2 = true">맛보기</button>
              <button class="btnSmartDetail" @click="smartLecPop2 = true">상세보기</button>
            </div>
            <div class="choice">
              <span class="priceCheck">
                <input type="checkbox" id="price11" checked />
                <label for="price11">
                  <i></i>
                  <span class="price" v-if="!this.mobile">
                    <del>2,568,000</del><em>10<b>%</b></em>
                    <strong>1,356,600<i>원</i></strong>
                  </span>
                  <span class="price" v-else-if="this.mobile">
                    <strong>1,356,600<i>원</i></strong>
                    <del>2,568,000</del><em>10<b>%</b></em>
                  </span>
                </label>
              </span>
            </div>
          </div>
        </li>
        <!--//Loop-->
        <li>
          <!---->
          <div class="lecBasic">
            <span class="kind">
              <span><em class="iApplySet ing">신청중</em></span>
            </span>
            <div class="lecTt" @click="smartLecPop = true">
              <em class="iLocSet online">온라인</em>
              <em class="iSet">단과</em>
              <em class="iSet">2021</em>
              <em class="iSet red">신규개설</em>
              <strong class="tt">
                연간쌤팩 베이직 <i class="division">이론강의</i>
                <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span>
              </strong>
              <span class="limitNtime"><span class="lecLimit gray"><em>70일간</em><em>1.4배수</em><em>제작중</em></span></span>
              <span class="iSetLine">
                <em>첨삭</em>
                <em>PC+모바일</em>
                <em>인패키지</em>
                <em>제작예정(2021년 09~12월)</em>
              </span>
            </div>
            <div class="moreInfo">
              <button class="btnSmartDetail" @click="smartLecPop2 = true">맛보기</button>
              <button class="btnSmartDetail" @click="smartLecPop2 = true">상세보기</button>
            </div>
            <div class="choice">
              <span class="priceCheck">
                <input type="checkbox" id="price12" checked />
                <label for="price12">
                  <i></i>
                  <span class="price">
                    <del>2,568,000</del><em>10<b>%</b></em>
                    <strong>1,356,600<i>원</i></strong>
                  </span>
                </label>
              </span>
            </div>
          </div>
          <!---->
        </li>
      </ul>
    </div>

    <!-- 수강할인 팁 Popup -->
    <Popup v-if='discountTipsPop' @close="discountTipsPop = false" class="large discountTipsPop">
      <template slot="modalheader">
        <div>
          <h1>수강할인 팁</h1>
          <span>최근 2년 이내 특정강좌를 수강했다면 보다 높은 할인이 적용됩니다.</span>
        </div>
        <button @click="discountTipsPop = false" class="modalClose">close</button>
      </template>
      <template slot="modalbody">
        <div class="ratePriceTit">
          <span class="left">그린키위반(기본반)</span>
          <span class="price">
            <del>500,000</del><strong>2,712,000<i>원</i></strong>
          </span>
        </div>
        <TeacherLecDiscount />
      </template>
    </Popup>
    <!-- //수강할인 팁 Popup -->

    <!-- 수강혜택 Popup -->
    <Popup v-if='benefitsPop' @close="benefitsPop = false" class="large benefitsPop">
      <template slot="modalheader">
        <div><h1>수강혜택</h1></div>
        <button @click="benefitsPop = false" class="modalClose">close</button>
      </template>
      <template slot="modalbody">
        <div>
          관리자 시스템에서 등록한 패키지 강좌의 특징 및 수강혜택을 표시함. 관리자 시스템에서 등록한 패키지 강좌의 특징 및 수강혜택을 표시함.<br/>
          관리자 시스템에서 등록한 패키지 강좌의 특징 및 수강혜택을 표시함.<br/>
          관리자 시스템에서 등록한 패키지 강좌의 특징 및 수강혜택을 표시함.<br/>
          관리자 시스템에서 등록한 패키지 강좌의 특징 및 수강혜택을 표시함.<br/>
          관리자 시스템에서 등록한 패키지 강좌의 특징 및 수강혜택을 표시함.<br/><br/><br/>
          수강생 선호도 1위, 전타임 조기마감 신화!<br/>
          신체(건강, 안전), 의사, 사회, 예술, 자연, 교육 · 누리과정 해설서, 지침서, 연수자료, 법령 등 · 기출문제, 구조화 자료, 확인 문제
        </div>
      </template>
    </Popup>
    <!-- //수강혜택 Popup -->

    <!-- 상세보기 Popup -->
    <Popup v-if='smartLecPop' @close="smartLecPop = false" class="large smartLecPop">
      <template slot="modalheader">
        <button @click="smartLecPop = false" class="modalClose">close</button>
      </template>
      <template slot="modalbody">
        <div class="gridSet">
          <div class="gridItem viewCase">
            <SmartLectureOnlineView />
          </div>
          <div class="gridItem summeryCase">
            <SmartLectureOnlineSummery />
          </div>
        </div>
      </template>
    </Popup>
    <!-- //상세보기 Popup -->

    <!-- 상세보기(단과) Popup -->
    <Popup v-if='smartLecPop2' @close="smartLecPop2 = false" class="large smartLecPop">
      <template slot="modalheader">
        <button @click="smartLecPop2 = false" class="modalClose">close</button>
      </template>
      <template slot="modalbody">
        <div class="gridSet">
          <div class="gridItem viewCase">
            <SmartLectureOnlineView2 />
          </div>
          <div class="gridItem summeryCase">
            <SmartLectureOnlineSummery2 />
          </div>
        </div>
      </template>
    </Popup>
    <!-- //상세보기(단과) Popup -->

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import SmartLectureOnlineView from '@/views/smart/SmartLectureOnlineView.vue';
import SmartLectureOnlineSummery from '@/views/smart/SmartLectureOnlineSummery.vue';
import SmartLectureOnlineView2 from '@/views/smart/SmartLectureOnlineView2.vue';
import SmartLectureOnlineSummery2 from '@/views/smart/SmartLectureOnlineSummery2.vue';
import TeacherLecDiscount from '@/views/lecture/TeacherLecDiscount.vue';

export default {
  mixins: [Mixin],
  name: 'SmartLectureOnline',
  components: {
    SmartLectureOnlineView,
    SmartLectureOnlineSummery,
    SmartLectureOnlineView2,
    SmartLectureOnlineSummery2,
    TeacherLecDiscount
  },
  data() {
    return {
      benefitsPop:false,
      smartLecPop:false,
      smartLecPop2:false,
      discountTipsPop:false,
    }
  },
}
</script>
