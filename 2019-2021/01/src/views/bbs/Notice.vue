<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="notice">
          <div class="subTit">
            <h3>공지사항</h3>
            <span class="right-po listSearch">
              <input type="text" placeholder="제목, 내용으로 검색">
              <!-- <button class="btnSearch">검색</button> -->
              <router-link to="/mkup/bbs/notice/search" class="btnSearch">검색</router-link>
            </span>
          </div>
          <!-- 반응형 목록 -->
          <div class="resTls">
            <!-- listTitle -->
            <div class="thead listGrid">
              <span class="lgItem item0">제목</span>
              <span class="lgItem item1">파일</span>
              <span class="lgItem item2">조회수</span>
              <span class="lgItem item3">작성일</span>
            </div>
            <!-- //listTitle -->
            <!-- //list -->
            <div class="tbody">
              <ul>
                <!--Loop-->
                <li class="listGrid notice new"> <!-- 새 글일 경우 new 클래스 추가 -->
                  <router-link to="/mkup/bbs/notice/view" class="lgItem item0 stateCase tL">
                    <span class="tit"><em class="iBbsSet notice">공지</em>[재도전 응원] 연간쌤팩, 3월 신규강의 할인 혜택! </span>
                  </router-link>
                  <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <!--//Loop-->
                <li class="listGrid notice new"> <!-- 새 글일 경우 new 클래스 추가 -->
                  <router-link to="/mkup/bbs/notice/view" class="lgItem item0 stateCase tL">
                    <span class="tit"><em class="iBbsSet notice">공지</em>[전원100%증정] 21학년도 최종합격수기 이벤트 </span>
                  </router-link>
                  <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid new">
                  <router-link to="/mkup/bbs/notice/view2" class="lgItem item0 tL">
                    <span class="tit">[개강 안내] 2021년 3~4월 강의 접수 안내</span>
                  </router-link>
                  <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <router-link to="/mkup/bbs/notice/view2" class="lgItem item0 tL">
                    <span class="tit">[최대 35%할인] 1~2월 강의 연간 쌤팩 지금 전환!</span>
                  </router-link>
                  <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <router-link to="/mkup/bbs/notice/vie2w" class="lgItem item0 tL">
                    <span class="tit">개강일보다 강의가 먼저 시작해요. 어떻게 해야 하나요?</span>
                  </router-link>
                  <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <router-link to="/mkup/bbs/notice/view2" class="lgItem item0 tL">
                    <span class="tit">보너스강의가 무엇인가요? 어떻게 신청하나요?</span>
                  </router-link>
                  <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid new">
                  <router-link to="/mkup/bbs/notice/view2" class="lgItem item0 tL">
                    <span class="tit">[재도전 응원] 연간쌤팩 3월 신규강의 할인 혜택!</span>
                  </router-link>
                  <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <router-link to="/mkup/bbs/notice/view" class="lgItem item0 tL">
                    <span class="tit">공지사항의 제목이 표기됩니다.</span>
                  </router-link>
                  <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <router-link to="/mkup/bbs/notice/view" class="lgItem item0 tL">
                    <span class="tit">공지사항의 제목이 표기됩니다.</span>
                  </router-link>
                  <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <router-link to="/mkup/bbs/notice/view" class="lgItem item0 tL">
                    <span class="tit">공지사항의 제목이 표기됩니다.</span>
                  </router-link>
                  <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <router-link to="/mkup/bbs/notice/view" class="lgItem item0 tL">
                    <span class="tit">공지사항의 제목이 표기됩니다.</span>
                  </router-link>
                  <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <router-link to="/mkup/bbs/notice/view" class="lgItem item0 tL">
                    <span class="tit">공지사항의 제목이 표기됩니다.</span>
                  </router-link>
                  <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <router-link to="/mkup/bbs/notice/view" class="lgItem item0 tL">
                    <span class="tit">공지사항의 제목이 표기됩니다.</span>
                  </router-link>
                  <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <router-link to="/mkup/bbs/notice/view" class="lgItem item0 tL">
                    <span class="tit">공지사항의 제목이 표기됩니다.</span>
                  </router-link>
                  <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <router-link to="/mkup/bbs/notice/view" class="lgItem item0 tL">
                    <span class="tit">공지사항의 제목이 표기됩니다.</span>
                  </router-link>
                  <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <router-link to="/mkup/bbs/notice/view" class="lgItem item0 tL">
                    <span class="tit">공지사항의 제목이 표기됩니다.</span>
                  </router-link>
                  <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <router-link to="/mkup/bbs/notice/view" class="lgItem item0 tL">
                    <span class="tit">공지사항의 제목이 표기됩니다.</span>
                  </router-link>
                  <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <router-link to="/mkup/bbs/notice/view" class="lgItem item0 tL">
                    <span class="tit">공지사항의 제목이 표기됩니다.</span>
                  </router-link>
                  <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <router-link to="/mkup/bbs/notice/view" class="lgItem item0 tL">
                    <span class="tit">공지사항의 제목이 표기됩니다.</span>
                  </router-link>
                  <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <router-link to="/mkup/bbs/notice/view" class="lgItem item0 tL">
                    <span class="tit">공지사항의 내용이 2줄 이상 길어질 경우에는 말줄임 없이 모두 노출하여 이렇게 나오게 됩니다. 공지사항의 내용이 2줄 이상 길어질 경우에는 말줄임 없이 모두 노출하여 이렇게 나오게 됩니다. </span>
                  </router-link>
                  <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
              </ul>
            </div>
            <!-- //list -->
          </div>
          <!-- //반응형 목록 -->
          <Paginate />
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
  name: 'Notice',
  data() {
    return {
      
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
<style lang="css" scoped>
#wrapBack.mDevice .notice .resTls .tbody  li:nth-child(n+11):nth-child(-n+20) {display:none;}
</style>
