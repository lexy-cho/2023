<template lang="html">
  <div>
    <div class="faqList">
      <div class="sortSet">
        <span>
          <input type="radio" id="radioTab21" name="tadioTab2" checked /><label for="radioTab21">전체</label>
        </span>
        <span>
          <input type="radio" id="radioTab22" name="tadioTab2" /><label for="radioTab22">회원정보관리</label>
        </span>
        <span>
          <input type="radio" id="radioTab23" name="tadioTab2" /><label for="radioTab23">사이트이용</label>
        </span>
        <span>
          <input type="radio" id="radioTab24" name="tadioTab2" /><label for="radioTab24">부정사용</label>
        </span>
        <span>
          <input type="radio" id="radioTab25" name="tadioTab2" /><label for="radioTab25">PC오류</label>
        </span>
        <span>
          <input type="radio" id="radioTab26" name="tadioTab2" /><label for="radioTab26">모바일오류</label>
        </span>
        <span>
          <input type="radio" id="radioTab27" name="tadioTab2" /><label for="radioTab27">자료오류</label>
        </span>
      </div>
      <!-- 반응형 목록 -->
      <div class="resTls bottomLine">
        <!-- listTitle -->
        <div class="thead listGrid">
          <span class="lgItem item0">분류</span>
          <span class="lgItem">제목</span>
          <span class="lgItem item1">조회수</span>
        </div>
        <!-- //listTitle -->
        <!-- //list -->
        <div class="tbody">
          <ul>
            <!--Loop-->
            <li class="listGrid">
              <span class="lgItem item0">사이트이용</span>
              <router-link to="/mkup/counsel/faq/view" class="lgItem tL">일부 강의를 직강(인강)으로 변경하고 싶어요. </router-link>
              <span class="lgItem item1"><em class="mTit">조회수</em>45</span>
            </li>
            <!--//Loop-->
            <li class="listGrid">
              <span class="lgItem item0">회원정보관리</span>
              <router-link to="/mkup/counsel/faq/view" class="lgItem tL">보충강의 수강기간이 종료되었어요. 연장할 수 있나요?</router-link>
              <span class="lgItem item1"><em class="mTit">조회수</em>132</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">PC오류</span>
              <router-link to="/mkup/counsel/faq/view" class="lgItem tL">패키지 강의가 무엇인가요? 어떻게 신청하나요?</router-link>
              <span class="lgItem item1"><em class="mTit">조회수</em>75</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">사이트이용</span>
              <router-link to="/mkup/counsel/faq/view" class="lgItem tL">강의가 많은데 강의가 한번에 시작되나요?</router-link>
              <span class="lgItem item1"><em class="mTit">조회수</em>90</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">PC오류</span>
              <router-link to="/mkup/counsel/faq/view" class="lgItem tL">강의 무료 제공된다고 했는데 어떻게 신청하나요?</router-link>
              <span class="lgItem item1"><em class="mTit">조회수</em>8</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">사이트이용</span>
              <router-link to="/mkup/counsel/faq/view" class="lgItem tL">사물함 사용은 어떻게 할 수 있나요? </router-link>
              <span class="lgItem item1"><em class="mTit">조회수</em>23</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">회원정보관리</span>
              <router-link to="/mkup/counsel/faq/view" class="lgItem tL">수강확인증은 어떻게 발급 받나요?</router-link>
              <span class="lgItem item1"><em class="mTit">조회수</em>60</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">회원정보관리</span>
              <router-link to="/mkup/counsel/faq/view" class="lgItem tL">PC오류도 연장할 수 있나요?</router-link>
              <span class="lgItem item1"><em class="mTit">조회수</em>22</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">사이트이용</span>
              <router-link to="/mkup/counsel/faq/view" class="lgItem tL">수강증을 받아야 하나요? 어떻게 받나요?</router-link>
              <span class="lgItem item1"><em class="mTit">조회수</em>453</span>
            </li>
          </ul>
        </div>
        <!-- //list -->
      </div>
      <!-- //반응형 목록 -->
      <Paginate />
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'FaqError',
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {
  },
}
</script>
