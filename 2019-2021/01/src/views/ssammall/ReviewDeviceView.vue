<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
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
        <div class="ssammallReviewView">
          <!-- 상세 -->
          <div class="boardDetail reviewCase">
            <!-- 백퍼후기 제목영역 -->
            <div class="boardHead">
              <span class="imgBox"><img :src="require(`@/assets/images//thumbnail/@tmp_device03.png`)" alt=""/></span>
              <div class="hashTag">
                <em>#태블릿</em><em>#아이패드 프로</em>
              </div>
              <strong>영어 공부 하시는 분들은 꼭 사세요!</strong>
              <div class="boardInfo">
                <em>작성자 : <i>gusj758</i></em>
                <em>작성일 : <i>2021-05-29</i></em>
                <em>조회수 : <i>222</i></em>
              </div>
              <router-link to="/mkup/ssammall/device/view" class="btnS line">학습기기 자세히 보기</router-link>
            </div>
            <!-- //백퍼후기 제목영역 -->
            <!-- 본문영역 -->
            <div class="boardView">
              <!-- 에디어 내용 들어갈 자리 -->
              <img :src="require(`@/assets/images//thumbnail/@tmp_book01.png`)" alt="2021 류지원 영어교육학 기출문제집"/>
              <br/><br/><br/>
              여기에 후기 내용 들어갑니다~!!!의 뛰노는 듣는다. 길지 인간이 생의 충분히 없는 앞이 천지는 산야에 쓸쓸하랴? 위하여, 귀는 곳이 품으며, 남는 만물은 살 두기 아름다우냐? 것이 그들은 위하여, 철환하였는가? 귀는 피가 만천하의 목숨을 풍부하게 온갖 청춘의 날카로우나 이것이다. 그러므로 것은 인간은 기관과 쓸쓸하랴? 예가 작고 천고에 크고 밥을 가치를 커다란 거친 맺어, 황금시대다. 설산에서 곳으로 천고에 그들의 바이며, 피어나는 끓는다. 끓는 싸인 피고 아름답고 듣기만 끝에 피부가 사막이다. 이상을 아니더면, 바이며, 튼튼하며, 피다. 이성은 속에서 청춘의 위하여서.
            </div>
            <!-- //본문영역 -->
            <!-- 상세 네비게이션영역 -->
            <div class="boardNavi">
              <a href="#none;" class="prev">
                <strong>PREV</strong>
                <em>영어 기출 문제집 찾는 분들한테 추천해요.</em>
              </a>
              <router-link to="/mkup/ssammall/review/device" class="btnList">목록</router-link>
              <a href="#none;" class="next">
                <strong>NEXT</strong>
                <em>김현 선생님 강의를 안 듣고 있더라도 꼭 사세…</em>
              </a>
            </div>
            <!-- //상세 네비게이션영역 -->
          </div>
          <!-- //상세 -->
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
  name: 'ReviewDeviceView',
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
