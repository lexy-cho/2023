<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container" class="snbCase">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="referencePrevious">
          <div class="subTit">
            <h3>기출문제</h3>
            <span class="right-po">
              <span class="selectSet">
                <select name="" id="">
                  <option value="">연도</option>
                  <option value="">2022</option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option value="">전공 분류</option>
                  <option value="1">교육학</option>
                  <option value="2">유아·초등·특수</option>
                  <option value="3">중등</option>
                  <option value="4">보건</option>
                  <option value="5">중등특수</option>
                  <option value="9">전문상담</option>
                  <option value="8">논술·면접·실기</option>
                  <option value="6">교대편입</option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option value="">전공 상세</option>
                  <option value="">식물자원/조경</option>
                </select>
              </span>
              <span class="listSearch ml10">
                <input type="text" placeholder="제목, 내용으로 검색" />
                <button class="btnSearch">검색</button>
              </span>
            </span>
          </div>
          <!-- 반응형 목록 -->
          <div class="resTls">
            <!-- listTitle -->
            <div class="thead listGrid">
              <span class="lgItem item0">연도</span>
              <span class="lgItem item1">전공</span>
              <span class="lgItem">제목</span>
              <span class="lgItem item2">파일</span>
              <span class="lgItem item3">조회수</span>
              <span class="lgItem item4">작성일</span>
            </div>
            <!-- //listTitle -->
            <!-- //list -->
            <div class="tbody">
              <ul>
                <!--Loop-->
                <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
                  <span class="lgItem item0">2022</span>
                  <span class="lgItem item1">유아·초등·특수</span>
                  <router-link to="/mkup/exam/reference/previous/view" class="lgItem tL">
                    <span class="tit">2021학년도 중등 임용시험 1차 시험 중등특수 문제</span>
                  </router-link>
                  <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <!--//Loop-->
                <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
                  <span class="lgItem item0">2022</span>
                  <span class="lgItem item1">유아·초등·특수</span>
                  <router-link to="/mkup/exam/reference/previous/view" class="lgItem tL">
                    <span class="tit">2021학년도 중등 임용시험 1차 시험 중등특수 문제</span>
                  </router-link>
                  <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid new">
                  <span class="lgItem item0">2022</span>
                  <span class="lgItem item1">유아·초등·특수</span>
                  <router-link to="/mkup/exam/reference/previous/view" class="lgItem tL">
                    <span class="tit">2021학년도 중등 임용시험 1차 시험 중등특수 문제</span>
                  </router-link>
                  <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">2022</span>
                  <span class="lgItem item1">유아·초등·특수</span>
                  <router-link to="/mkup/exam/reference/previous/view" class="lgItem tL">
                    <span class="tit">2021학년도 중등 임용시험 1차 시험 중등특수 문제</span>
                  </router-link>
                  <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">2022</span>
                  <span class="lgItem item1">유아·초등·특수</span>
                  <router-link to="/mkup/exam/reference/previous/view" class="lgItem tL">
                    <span class="tit">2021학년도 중등 임용시험 1차 시험 중등특수 문제</span>
                  </router-link>
                  <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">2022</span>
                  <span class="lgItem item1">유아·초등·특수</span>
                  <router-link to="/mkup/exam/reference/previous/view" class="lgItem tL">
                    <span class="tit">2021학년도 중등 임용시험 1차 시험 중등특수 문제</span>
                  </router-link>
                  <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">2022</span>
                  <span class="lgItem item1">유아·초등·특수</span>
                  <router-link to="/mkup/exam/reference/previous/view" class="lgItem tL">
                    <span class="tit">2021학년도 중등 임용시험 1차 시험 중등특수 문제</span>
                  </router-link>
                  <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid new">
                  <span class="lgItem item0">2022</span>
                  <span class="lgItem item1">유아·초등·특수</span>
                  <router-link to="/mkup/exam/reference/previous/view" class="lgItem tL">
                    <span class="tit">2021학년도 중등 임용시험 1차 시험 중등특수 문제</span>
                  </router-link>
                  <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">2022</span>
                  <span class="lgItem item1">유아·초등·특수</span>
                  <router-link to="/mkup/exam/reference/previous/view" class="lgItem tL">
                    <span class="tit">2021학년도 중등 임용시험 1차 시험 중등특수 문제</span>
                  </router-link>
                  <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid new">
                  <span class="lgItem item0">2022</span>
                  <span class="lgItem item1">유아·초등·특수</span>
                  <router-link to="/mkup/exam/reference/previous/view" class="lgItem tL">
                    <span class="tit">2021학년도 중등 임용시험 1차 시험 중등특수 문제</span>
                  </router-link>
                  <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
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
  name: 'ReferencePrevious',
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
