<template lang="html">
  <div>
    <swiper :options="swiperOption01" ref="mainSwiper">
      <swiper-slide>
        <ul class="thumbnailList case3">
          <li class="new">
            <router-link to="/mkup/special/event/view1">
              <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent01.png`)" alt=""/></span>
              <strong>
                <span>[유아]</span>
                1~2월 7일 무제한 복습 이벤트
              </strong>
            </router-link>
          </li>
          <li class="new">
            <router-link to="/mkup/special/event/view1">
              <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent02.png`)" alt=""/></span>
              <strong>
                <span>[교육학 김현]</span>
                7~8월 접수 이벤트
              </strong>
            </router-link>
          </li>
          <li>
            <router-link to="/mkup/special/event/view1">
              <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent03.png`)" alt=""/></span>
              <strong>
                <span>[유아 배지윤]</span>
                배쌤과 함께하는 힐링타임 2
              </strong>
            </router-link>
          </li>
          <li>
            <router-link to="/mkup/special/event/view1">
              <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent04.png`)" alt=""/></span>
              <strong>
                <span>[국어 송헌&amp;김준팀]</span>
                신간교재 출간 기념 #해시태그 이벤트
              </strong>
            </router-link>
          </li>
          <li>
            <router-link to="/mkup/special/event/view1">
              <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent05.png`)" alt=""/></span>
              <strong>
                <span>[가정 문영은]</span>
                가정의 달 기념 이벤트
              </strong>
            </router-link>
          </li>
          <li>
            <router-link to="/mkup/special/event/view1">
              <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent06.png`)" alt=""/></span>
              <strong>
                <span>[유아 배지윤]</span>
                배쌤과 함께하는 힐링타임 1
              </strong>
            </router-link>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul class="thumbnailList case3">
          <li class="new">
            <router-link to="/mkup/special/event/view1">
              <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent02.png`)" alt=""/></span>
              <strong>
                <span>[교육학 김현]</span>
                7~8월 접수 이벤트
              </strong>
            </router-link>
          </li>
          <li class="new">
            <router-link to="/mkup/special/event/view1">
              <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent01.png`)" alt=""/></span>
              <strong>
                <span>[유아]</span>
                1~2월 7일 무제한 복습 이벤트
              </strong>
            </router-link>
          </li>
          <li>
            <router-link to="/mkup/special/event/view1">
              <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent03.png`)" alt=""/></span>
              <strong>
                <span>[유아 배지윤]</span>
                배쌤과 함께하는 힐링타임 2
              </strong>
            </router-link>
          </li>
          <li>
            <router-link to="/mkup/special/event/view1">
              <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent06.png`)" alt=""/></span>
              <strong>
                <span>[유아 배지윤]</span>
                배쌤과 함께하는 힐링타임 1
              </strong>
            </router-link>
          </li>
          <li>
            <router-link to="/mkup/special/event/view1">
              <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent04.png`)" alt=""/></span>
              <strong>
                <span>[국어 송헌&amp;김준팀]</span>
                신간교재 출간 기념 #해시태그 이벤트
              </strong>
            </router-link>
          </li>
          <li>
            <router-link to="/mkup/special/event/view1">
              <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent05.png`)" alt=""/></span>
              <strong>
                <span>[가정 문영은]</span>
                가정의 달 기념 이벤트
              </strong>
            </router-link>
          </li>
        </ul>
      </swiper-slide>
    </swiper>
    <!-- <div class="swiperSmallProgressSet">
      <div class="back">
        <div>
          <em><strong>1</strong>/6</em>
          <span class="swiper-pagination" slot="pagination"/></span>
          <span class="miniProgress"><i style="width:50%"></i></span>
        </div>
        <div class="bothArrows page">
          <span class="swiper-pagination" slot="pagination"/></span>
          <span class="swiper-button-prev" slot="button-prev"/></span>
          <span class="swiper-button-next" slot="button-next"/></span>
        </div>
        <span class="swiper-button-prev" slot="button-prev"/></span>
        <span class="swiper-button-next" slot="button-next"/></span>
      </div>
    </div> -->
    <div class="bothArrows page">
      <span class="swiper-pagination" slot="pagination"/></span>
      <span class="swiper-button-prev" slot="button-prev"/></span>
      <span class="swiper-button-next" slot="button-next"/></span>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SpecialIndexEventPc',
  components: {
  },
  data() {
    return {
      swiperOption01: {
        spaceBetween: 24,
        loop:true,
        // pagination: {
        //   el: ".spSsamEvent .swiper-pagination",
        //   type: "progressbar"
        // },
        autoplay:{
          delay: 5000
        },
        pagination: {
          el: ".spSsamEvent .swiper-pagination",
          type: "fraction",
        },
        navigation: { nextEl: '.spSsamEvent .swiper-button-next', prevEl: '.spSsamEvent .swiper-button-prev' },
      },
    }
  },
}
</script>
