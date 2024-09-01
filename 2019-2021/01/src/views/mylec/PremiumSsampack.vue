<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container" class="subMainCase">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="premiumSsampack">
          <div class="frameBack">
            <!-- 서브 타이틀 -->
            <div class="subTit noLine">
              <h3>프리미엄 쌤팩</h3>
            </div>
            <!-- //서브 타이틀 -->
            <div v-if='!ingTrigger' class="ssampackNotYet">
              <PremiumSsampackIntro />
              <button class="btnL" @click="ingTrigger = true, notYetTrigger = false, scrollToTop()"><strong>프리미엄 쌤팩</strong>으로 더 많은 서비스 누리기</button>
            </div>
          </div>
          <div class="ssampackOk" v-if='ingTrigger'>
            <div class="frameBack">
              <div class="mainSlogan">
                <p>
                  <strong><i>홍길동</i> 선생님을 위한 완벽한 학습공간</strong>
                  <span>오직 합격을 위해 설계된 1차 시험대비 연간 강좌플랜<br/> 20가지 프리미엄 서비스를 한꺼번에 누리는 특별한 학습지원서비스</span>
                  오직 <em>쌤팩 프리미엄 회원</em>만의 다양한 특권을 누려 보세요.
                </p>
              </div>
              <div class="btnSpecial">
                <button class="set special01"  @click="goodMorningTrigger = true">
                  <span>
                    일찍 일어나는 습관을 만들어 주는
                    <strong>아침기상인증</strong>
                  </span>
                </button>
                <router-link to="" class="set special02">
                  <span>
                    문의사항을 1:1로 해결할 수 있는
                    <strong>프리미엄 전용 카카오톡 채널</strong>
                  </span>
                </router-link>
                <button @click="certificateTrigger = true" class="set special03">
                  <span>
                    나의 목표를 미리 보여주는
                    <strong>합격증 보기</strong>
                  </span>
                </button>
              </div>
            </div>
            <!-- premiumTabwrap -->
            <div class="premiumTabwrap">
              <!-- tab -->
              <div class="tabBack">
                <div class="tabNav">
                  <nav>
                    <span class="mobileTab" v-if="this.mobile" @click="tabListTrigger = !tabListTrigger" :class="{on:tabListTrigger===true}"></span>
                    <ul class="blackLineTab" :class="{on:tabListTrigger===true}">
                      <li :class="{on:currentTab===0}">
                        <span @click="currentTab = 0; tabListTrigger = !tabListTrigger">
                          <em><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt="" /></em>
                          <strong>김현</strong> 선생님
                        </span>
                      </li>
                      <li :class="{on:currentTab===1}">
                        <span @click="currentTab = 1; tabListTrigger = !tabListTrigger">
                          <em><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare10.png`)" alt="" /></em>
                          <strong>희소 중국어 팀</strong>
                        </span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <!--// tab -->
              <div class="tabLayout">
                <div v-if="currentTab == 0" class="tabData" :key="currentTab">
                  <PremiumSsampackLec01 />
                </div>
                <div v-if="currentTab == 1" class="tabData">
                  <PremiumSsampackLec02 />
                </div>
              </div>
            </div>
            <!-- //premiumTabwrap -->
          </div>
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->

    <!-- Layer Popup -->
    <!-- 합격증 미리보기 팝업 -->
    <Popup v-if='certificateTrigger' @close="certificateTrigger = false" class="certificatePop">
      <template slot="modalheader">
        <div>
          <h1>합격증 미리보기</h1>
          <button @click="certificateTrigger = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <img :src="require(`@/assets/images/thumbnail/@passCertificate.png`)" alt="" />
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="certificateTrigger = false">취소</button>
          <button class="btnL">다운로드</button>
        </div>
      </template>
    </Popup>
    <!-- //합격증 미리보기 팝업 -->
    <!-- 아침기상인증 팝업 -->
    <Popup v-if='goodMorningTrigger' @close="goodMorningTrigger = false" class="goodMorningPop">
      <template slot="modalheader">
        <div>
          <span>쌤팩 프리미엄 회원만을 위한</span>
          <h1>Morning Miracle Pick</h1>
          <p>나는 매일 아침 7 시 ~ 9 시 아침 기상 인증을 Pick 합니다. <em><strong>Today’s Miracle Pick (아침 기상 인증하기)</strong> 버튼을 클릭하여 인증 해주세요.</em></p>
          <button class="btnMorning">아침 기상 인증하기</button>
          <button @click="goodMorningTrigger = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody" v-if="!this.mobile">
        <v-calendar
          :attributes="attributes"
          :columns="layout.columns"
          :rows="layout.rows"
          :is-expanded="layout.isExpanded"
          />
      </template>
      <template slot="modalbody" v-if="this.mobile">
        <v-calendar trim-weeks :is-expanded="layout.isExpanded"/>
      </template>
    </Popup>
    <!-- //아침기상인증 팝업 -->
    <!-- //Layer Popup -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import PremiumSsampackLec01 from '@/views/mylec/PremiumSsampackLec01.vue';
import PremiumSsampackLec02 from '@/views/mylec/PremiumSsampackLec02.vue';
import PremiumSsampackIntro from '@/views/mylec/PremiumSsampackIntro.vue';

export default {
  mixins: [Mixin],
  name: 'PremiumSsampack',
  components: {
    PremiumSsampackLec01,
    PremiumSsampackLec02,
    PremiumSsampackIntro
  },
  data() {
    return {
      ingTrigger: false,
      currentTab: 0,
      certificateTrigger: false,
      tabListTrigger : false,
      goodMorningTrigger : false,
      dragValue: null,
      days: [],
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
  },
  mounted() {
  },
  computed: {
    layout() {
      return this.$screens(
        {
          default: {
            columns: 1,
            rows: 1,
            isExpanded: true,
          },
          lg: {
            columns: 2,
            rows: 2,
            isExpanded: true,
          },
        },
      );
    }
  }
}
</script>
