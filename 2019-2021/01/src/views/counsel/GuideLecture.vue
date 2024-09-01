<template lang="html">
  <div>
    <div class="guideList">
      <div class="guidData">
          <swiper :options="guideSwiper">
            <swiper-slide>
              <img :src="require(`@/assets/images/thumbnail/img_guide_mockup1.png`)" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img :src="require(`@/assets/images/thumbnail/img_guide_mockup2.png`)" alt="" />
            </swiper-slide>
          </swiper>
          <span class="swiper-button-prev" slot="button-prev"/>
          <span class="swiper-button-next" slot="button-next"/>
      </div>
      <div class="guideSnb">
        <span :class="{on:guideTab===0}"><button @click="guideTab = 0">강좌수강</button></span>
        <span :class="{on:guideTab===1}"><button @click="guideTab = 1">수강시작일 변경/홀딩</button></span>
        <span :class="{on:guideTab===2}"><button @click="guideTab = 2">첨삭게시판</button></span>
        <span :class="{on:guideTab===3}"><button @click="guideTab = 3">무료 보충강의</button></span>
        <span :class="{on:guideTab===4}"><button @click="guideTab = 4">플레이어 창</button></span>
        <p>강의수강 PLAY이 팁을 확인해 보세요!</p>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'GuideLecture',
  components: {
  },
  data() {
    return {
      guideTab: 0,
      guideSwiper: {
        slidesPerView: "auto",
        centeredSlides: true,
        navigation: { nextEl: '.guidData .swiper-button-next', prevEl: '.guidData .swiper-button-prev' },
      },
    }
  },
  mounted() {
  },
}
</script>
