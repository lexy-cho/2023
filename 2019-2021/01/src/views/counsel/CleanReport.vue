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
        <div class="cleanReport">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>불법공유 신고</h3>
          </div>
          <!-- //서브 타이틀 -->
          <p class="info">
            공유 적발자는 강좌 즉시 폐쇄와 수강한 모든 강좌에 대해 벌금이 부과되며, 법적 조치를 취합니다.<br/>
            단체 수강(빔프로젝트)이나 불법녹화 신고 시 적발 처리가 될 경우(최종 적발 시)에는 최대 백만원의 포상금이 지급됩니다.
          </p>
          <!-- 상세 -->
          <div class="boardDetail write">
            <!-- 내용영역 -->
						<div class="sortSet rndCase">
	            <span>
	              <input type="radio" id="radioTab1" name="tadioTab" checked /><label for="radioTab1">개인공유 신고</label>
	            </span>
	            <span>
	              <input type="radio" id="radioTab2" name="tadioTab" /><label for="radioTab2">단체공유 신고</label>
	            </span>
						</div>
            <div class="box columMulty">
              <span class="selectSet">
                <select name="" id="">
                  <option>과목</option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option value="">선생님</option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option>강좌</option>
                </select>
              </span>
            </div>
            <div class="box columMulty">
              <input type="text" placeholder="신고자 연락처">
              <input type="text" placeholder="불법 공유자 이름">
            </div>
            <div class="box">
              <input type="text" placeholder="제목을 입력해 주세요.">
            </div>
            <div class="box">
              <textarea placeholder="신고 내용을 입력해 주세요."></textarea>
            </div>
            <div class="box checkSetArea">
              <span class="checkSet">
                <input type="checkbox" id="chk01" />
                <label for="chk01"><i></i>쌤플러스와 개별 상담을 원하실 경우 체크해주세요.</label>
              </span>
            </div>
            <!-- //내용영역 -->
            <!-- 상세 버튼영역 -->
            <div class="boardBtn">
              <button class="btnL">신고하기</button>
            </div>
            <!-- //상세 버튼영역 -->
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
  name: 'CleanReport',
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
