<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- TopBanner -->
    <div class="topArea">
      <!-- 이미지 배너 -->
      <div class="topBannerSingle" style="background:#f8927d;">
        <router-link to="">
          <img :src="require(`@/assets/images/thumbnail/@tmp_bandBanner01.png`)" alt="백퍼후기 이벤트"  v-if="!this.mobile" />
          <img :src="require(`@/assets/images/thumbnail/@m_banner05.png`)" alt="백퍼후기 이벤트"  v-else-if="this.mobile" />
        </router-link>
      </div>
      <!-- //이미지 배너 -->
    </div>
    <!-- //TopBanner -->
    <!-- container -->
    <div id="container" class="snbCase">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="ssammallReview">
          <!-- 백퍼 추천하는 솔직 후기 -->
          <div class="subTit">
            <h3>백퍼 추천하는 솔직 후기</h3>
          </div>
          <div class="sortSet rndCase">
            <router-link to="/mkup/ssammall/review/book" class="on">교재도서</router-link>
            <router-link to="/mkup/ssammall/review/device">학습기기</router-link>
            <router-link to="/mkup/ssammall/review/goods">굿즈</router-link>
          </div>
          <ul class="reviewBoxList">
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/book/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_review01.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iSbjSetMini">중국어</em>
                  <strong>중국현대문학사 이해</strong>
                  <p>중국현대문학사의 개요부터 중국현대시까지 한 권의 교재에 총정리된 알알이 알찬 교재 중국현대문학사의 개요부터 중국현대시까지 한 권의 교재에 총정리된 알알이 알찬 교재</p>
                  <span class="author">jyr******</span>
                </div>
              </router-link>
            </li>
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/book/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_main_img12.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iSbjSetMini">유아</em>
                  <strong>2022 대비 유아 이동건 누리과정</strong>
                  <p>와 진심 알찬 교재네요. 특히 저처럼 학원 안 가고 혼자 공부하시는 분들한테 적극 추천드리고 싶어요! ...</p>
                  <span class="author">ssa*****</span>
                </div>
              </router-link>
            </li>
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/book/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_review01.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iSbjSetMini">교육학</em>
                  <strong>2022 김현 키위주스</strong>
                  <p>실전 연습용으로 필요해서 구매했어요. 김현교수님의 명성답게 잘 만들어진 교재입니다. 출제 가능성이 ...</p>
                  <span class="author">hhe******</span>
                </div>
              </router-link>
            </li>
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/book/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_review02.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iSbjSetMini">중국어</em>
                  <strong>중국현대문학사 이해</strong>
                  <p>중국현대문학사의 개요부터 중국현대시까지 한 권의 교재에 총정리된 알알이 알찬 교재 중국현대문학사의 개요부터 중국현대시까지 한 권의 교재에 총정리된 알알이 알찬 교재</p>
                  <span class="author">jyr******</span>
                </div>
              </router-link>
            </li>
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/book/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_main_img12.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iSbjSetMini">유아</em>
                  <strong>2022 대비 유아 이동건 누리과정</strong>
                  <p>와 진심 알찬 교재네요. 특히 저처럼 학원 안 가고 혼자 공부하시는 분들한테 적극 추천드리고 싶어요! ...</p>
                  <span class="author">ssa*****</span>
                </div>
              </router-link>
            </li>
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/book/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_review01.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iSbjSetMini">교육학</em>
                  <strong>2022 김현 키위주스</strong>
                  <p>실전 연습용으로 필요해서 구매했어요. 김현교수님의 명성답게 잘 만들어진 교재입니다. 출제 가능성이 ...</p>
                  <span class="author">hhe******</span>
                </div>
              </router-link>
            </li>
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/book/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_review01.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iSbjSetMini">중국어</em>
                  <strong>중국현대문학사 이해</strong>
                  <p>중국현대문학사의 개요부터 중국현대시까지 한 권의 교재에 총정리된 알알이 알찬 교재 중국현대문학사의 개요부터 중국현대시까지 한 권의 교재에 총정리된 알알이 알찬 교재</p>
                  <span class="author">jyr******</span>
                </div>
              </router-link>
            </li>
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/book/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_main_img12.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iSbjSetMini">유아</em>
                  <strong>2022 대비 유아 이동건 누리과정</strong>
                  <p>와 진심 알찬 교재네요. 특히 저처럼 학원 안 가고 혼자 공부하시는 분들한테 적극 추천드리고 싶어요! ...</p>
                  <span class="author">ssa*****</span>
                </div>
              </router-link>
            </li>
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/book/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_review01.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iSbjSetMini">교육학</em>
                  <strong>2022 김현 키위주스</strong>
                  <p>실전 연습용으로 필요해서 구매했어요. 김현교수님의 명성답게 잘 만들어진 교재입니다. 출제 가능성이 ...</p>
                  <span class="author">hhe******</span>
                </div>
              </router-link>
            </li>
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/book/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_review02.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iSbjSetMini">중국어</em>
                  <strong>중국현대문학사 이해</strong>
                  <p>중국현대문학사의 개요부터 중국현대시까지 한 권의 교재에 총정리된 알알이 알찬 교재 중국현대문학사의 개요부터 중국현대시까지 한 권의 교재에 총정리된 알알이 알찬 교재</p>
                  <span class="author">jyr******</span>
                </div>
              </router-link>
            </li>
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/book/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_main_img12.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iSbjSetMini">유아</em>
                  <strong>2022 대비 유아 이동건 누리과정</strong>
                  <p>와 진심 알찬 교재네요. 특히 저처럼 학원 안 가고 혼자 공부하시는 분들한테 적극 추천드리고 싶어요! ...</p>
                  <span class="author">ssa*****</span>
                </div>
              </router-link>
            </li>
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/book/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_review01.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iSbjSetMini">교육학</em>
                  <strong>2022 김현 키위주스</strong>
                  <p>실전 연습용으로 필요해서 구매했어요. 김현교수님의 명성답게 잘 만들어진 교재입니다. 출제 가능성이 ...</p>
                  <span class="author">hhe******</span>
                </div>
              </router-link>
            </li>
          </ul>
          <Paginate />
          <!-- //백퍼 추천하는 솔직 후기 -->
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

export default {
  mixins: [Mixin],
  name: 'ReviewBook',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="css" scoped>
#wrapBack.mDevice .ssammallReview .reviewBoxList .reviewBox:nth-child(n+11):nth-child(-n+20) {display:none;}
</style>