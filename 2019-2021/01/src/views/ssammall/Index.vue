<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- TopBanner -->
    <div class="topArea">
      <!-- 메인 배너 -->
      <div class="topVisual">
          <img :src="require(`@/assets/images/img_ssammall_main.png`)" alt="" v-if="!this.mobile" />
          <img :src="require(`@/assets/images/m/img_ssammall_main.png`)" alt="" v-else-if="this.mobile" />
      </div>
      <!-- //메인 배너 -->
      <!-- LeftBanner -->
      <div class="leftAdArea ssammallCase" v-if="!this.mobile">
        <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_leftBanner01.png`)" alt=""/></router-link>
        <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_leftBanner02.png`)" alt=""/></router-link>
        <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_leftBanner07.png`)" alt=""/></router-link>
      </div>
      <!-- //LeftBanner -->
      <!-- Mobile Banner (Pc버전의 LeftBanner 대체) -->
      <div class="slidingBannerCase2" v-if="this.mobile">
        <strong>진행중인 이벤트</strong>
        <swiper :options="slidingBannerOption2">
          <swiper-slide>
            <router-link to=""><img :src="require(`@/assets/images/thumbnail/@m_banner01.png`)" alt=""/></router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to=""><img :src="require(`@/assets/images/thumbnail/@m_banner02.png`)" alt=""/></router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to=""><img :src="require(`@/assets/images/thumbnail/@m_banner03.png`)" alt=""/></router-link>
          </swiper-slide>
        </swiper>
      </div>
      <!-- //Mobile Banner (Pc버전의 LeftBanner 대체) -->
      <!-- 검색 -->
      <div class="topSearchArea">
        <div class="frameBack">
          <input type="text" placeholder="과목명, 저자명, 교재 명, 기기 브랜드, 기기명으로 검색">
          <!-- <button>검색</button> -->
          <router-link to="/mkup/ssammall/search">검색</router-link>
        </div>
      </div>
      <!-- //검색 -->
    </div>
    <!-- //TopBanner -->
    <!-- container -->
    <div id="container" class="subMainCase">
    <section>
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="ssammallIndex">
          <!-- 핵심을 찌르는 신간 교재 -->
          <div class="newBook">
            <div class="frameBack" v-if="!this.mobile">
              <IndexNewBookPc />
            </div>
            <div class="frameBack" v-else-if="this.mobile">
              <IndexNewBookM />
            </div>
          </div>
          <!-- //핵심을 찌르는 신간 교재 -->
          <!-- 백퍼 추천하는 솔직 후기 -->
          <div class="bestReview">
            <div class="frameBack" v-if="!this.mobile">
                <IndexBestReviewPc />
            </div>
            <div class="frameBack" v-else-if="this.mobile">
                <IndexBestReviewM />
            </div>
          </div>
          <!-- //백퍼 추천하는 솔직 후기 -->
          <!-- 서브 중간 배너 -->
          <div class="bandBanner" style="background:#8e659d;">
            <router-link to="/mkup/ssammall/review/book">
              <img :src="require(`@/assets/images/thumbnail/@tmp_bandBanner02.png`)" alt="백퍼후기 이벤트"  v-if="!this.mobile" />
              <img :src="require(`@/assets/images/thumbnail/@m_banner04.png`)" alt="백퍼후기 이벤트"  v-else-if="this.mobile" />
            </router-link>
          </div>
          <!-- //서브 중간 배너 -->
          <!-- 온라인 강의를 위한 추천 기기 -->
          <div class="bestDevice">
            <div class="frameBack">
              <div class="subTit noLine"><h3>온라인 강의를 위한 추천 기기</h3></div>
              <ul class="deviceList">
                <li>
                  <router-link to="/mkup/ssammall/device/view">
                    <div class="deviceGoods">
                      <div class="goodsImg">
                        <span class="saleIcon"><strong>10<em>%</em></strong>할인</span>
                        <span class="img"><img :src="require(`@/assets/images/thumbnail/@tmp_device01.png`)" alt=""/></span>
                      </div>
                      <div class="goodsDetail">
                        <em class="iPro device">노트북</em>
                        <strong class="name">갤럭시북 이온2</strong>
                        <span class="price">
                          <strong>1,729,000<i>원</i></strong>
                          <del>15,000원</del>
                          <em>10<b>%</b></em>
                        </span>
                      </div>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/mkup/ssammall/device/view">
                    <div class="deviceGoods">
                      <div class="goodsImg">
                        <span class="saleIcon"><strong>10<em>%</em></strong>할인</span>
                        <span class="img"><img :src="require(`@/assets/images/thumbnail/@tmp_device06.png`)" alt=""/></span>
                      </div>
                      <div class="goodsDetail">
                        <em class="iPro device">스마트폰</em>
                        <strong class="name">갤럭시북 이온2</strong>
                        <span class="price">
                          <strong>997,000<i>원</i></strong>
                          <del>15,000원</del>
                          <em>10<b>%</b></em>
                        </span>
                      </div>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/mkup/ssammall/device/view">
                    <div class="deviceGoods">
                      <div class="goodsImg">
                        <span class="saleIcon"><strong>10<em>%</em></strong>할인</span>
                        <span class="img"><img :src="require(`@/assets/images/thumbnail/@tmp_device03.png`)" alt=""/></span>
                      </div>
                      <div class="goodsDetail">
                        <em class="iPro device">태블릿</em>
                        <strong class="name">갤럭시 탭A 10.1(2019)</strong>
                        <span class="price">
                          <strong>997,000<i>원</i></strong>
                          <del>15,000원</del>
                          <em>10<b>%</b></em>
                        </span>
                      </div>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/mkup/ssammall/device/view">
                    <div class="deviceGoods">
                      <div class="goodsImg">
                        <span class="saleIcon"><strong>10<em>%</em></strong>할인</span>
                        <span class="img"><img :src="require(`@/assets/images/thumbnail/@tmp_device01.png`)" alt=""/></span>
                      </div>
                      <div class="goodsDetail">
                        <em class="iPro device">노트북</em>
                        <strong class="name">갤럭시북 이온2</strong>
                        <span class="price">
                          <strong>1,729,000<i>원</i></strong>
                          <del>15,000원</del>
                          <em>10<b>%</b></em>
                        </span>
                      </div>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/mkup/ssammall/device/view">
                    <div class="deviceGoods">
                      <div class="goodsImg">
                        <span class="saleIcon"><strong>10<em>%</em></strong>할인</span>
                        <span class="img"><img :src="require(`@/assets/images/thumbnail/@tmp_device06.png`)" alt=""/></span>
                      </div>
                      <div class="goodsDetail">
                        <em class="iPro device">스마트폰</em>
                        <strong class="name">갤럭시북 이온2</strong>
                        <span class="price">
                          <strong>997,000<i>원</i></strong>
                          <del>15,000원</del>
                          <em>10<b>%</b></em>
                        </span>
                      </div>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/mkup/ssammall/device/view">
                    <div class="deviceGoods">
                      <div class="goodsImg">
                        <span class="saleIcon"><strong>10<em>%</em></strong>할인</span>
                        <span class="img"><img :src="require(`@/assets/images/thumbnail/@tmp_device03.png`)" alt=""/></span>
                      </div>
                      <div class="goodsDetail">
                        <em class="iPro device">태블릿</em>
                        <strong class="name">갤럭시 탭A 10.1(2019)</strong>
                        <span class="price">
                          <strong>997,000<i>원</i></strong>
                          <del>15,000원</del>
                          <em>10<b>%</b></em>
                        </span>
                      </div>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <!-- //온라인 강의를 위한 추천 기기 -->
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
import IndexNewBookPc from '@/views/ssammall/IndexNewBookPc.vue';
import IndexNewBookM from '@/views/ssammall/IndexNewBookM.vue';
import IndexBestReviewPc from '@/views/ssammall/IndexBestReviewPc.vue';
import IndexBestReviewM from '@/views/ssammall/IndexBestReviewM.vue';

export default {
  mixins: [Mixin],
  name: 'Index',
  components: {
    IndexNewBookPc,
    IndexNewBookM,
    IndexBestReviewPc,
    IndexBestReviewM
  },
  data() {
    return {
      slidingBannerOption: {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        speed: 2000,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".slidingBanner .swiper-pagination",
          clickable : true
        },
      },
      slidingBannerOption2: {
        slidesPerView: 'auto',
        loop: false,
        spaceBetween: 15,
        // speed: 2000,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        // pagination: {
        //   el: ".slidingBanner .swiper-pagination",
        //   clickable : true
        // },
      },
    }
  },
}
</script>
