<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="faqIndex">
          <!-- 서브 타이틀 -->
          <div class="subTit noLine">
            <h3>자주 하는 질문</h3>
          </div>
          <!-- //서브 타이틀 -->
          <div class="faqSearch">
            <p>검색을 통해 여러분들의 궁금증을 해결하세요.</p>
            <span class="ipBtn">
              <input type="text" placeholder="검색을 통해 여러분들의 궁금증을 해결하세요."/>
              <!-- <button class="btnL green">검색</button> -->
              <router-link to="/mkup/counsel/faq/search" class="btnL">검색</router-link>
            </span>
          </div>
          <!-- tab-wrap -->
          <div class="faqTabwrap">
            <!-- tab -->
            <div class="tabBack">
              <div class="tabNav">
                <nav>
                  <ul class="blackLineTab">
                    <li :class="{on:currentTab===0}"><button @click="currentTab = 0">초시생</button></li>
                    <li :class="{on:currentTab===1}"><button @click="currentTab = 1">강의 수강/신청</button></li>
                    <li :class="{on:currentTab===2}"><button @click="currentTab = 2">교재/학습자료</button></li>
                    <li :class="{on:currentTab===3}"><button @click="currentTab = 3">결제/환불</button></li>
                    <li :class="{on:currentTab===4}"><button @click="currentTab = 4">사이트 이용/오류</button></li>
                    <li :class="{on:currentTab===5}"><button @click="currentTab = 5">모바일</button></li>
                  </ul>
                </nav>
              </div>
            </div>
            <!--// tab -->
            <div class="tabLayout">
              <div v-if="currentTab == 0" class="tabData" :key="currentTab">
                <FaqFirst /> <!-- 초시생 -->
              </div>
              <div v-if="currentTab == 1" class="tabData">
                <FaqLecture /> <!-- 강의 수강/신청 -->
              </div>
              <div v-if="currentTab == 2" class="tabData">
                <FaqBook /><!-- 교재/학습자료 -->
              </div>
              <div v-if="currentTab == 3" class="tabData">
                <FaqPayment /><!-- 결제/환불 -->
              </div>
              <div v-if="currentTab == 4" class="tabData">
                <FaqError /><!-- 사이트 이용/오류 -->
              </div>
              <div v-if="currentTab == 5" class="tabData">
                <FaqMobile /><!-- 모바일 -->
              </div>
            </div>
          </div>
          <!-- //tab-wrap -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import FaqLecture from '@/views/counsel/FaqLecture.vue';
import FaqBook from '@/views/counsel/FaqBook.vue';
import FaqPayment from '@/views/counsel/FaqPayment.vue';
import FaqError from '@/views/counsel/FaqError.vue';
import FaqMobile from '@/views/counsel/FaqMobile.vue';
import FaqFirst from '@/views/counsel/FaqFirst.vue';

export default {
  mixins: [Mixin],
  name: 'Faq',
  components: {
    FaqLecture,
    FaqBook,
    FaqPayment,
    FaqError,
    FaqMobile,
    FaqFirst
  },
  data() {
    return {
      currentTab: 0,
    }
  },
  mounted() {
  },
}
</script>
