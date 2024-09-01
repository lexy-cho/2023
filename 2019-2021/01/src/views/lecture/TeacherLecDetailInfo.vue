<template lang="html">
  <div>
    <div class="lecDetailInfo">
      <div class="resTls subCase">
        <div class="tbody">
          <ul>
            <li class="listGrid">
              <div class="lgItem th">강좌 특징</div>
              <span class="lgItem">수강생 선호도 1위, 전타임 조기마감 신화!</span>
            </li>
            <li class="listGrid">
              <div class="lgItem th">강좌 구성</div>
              <span class="lgItem">36회 쓰기, 18회 채점, 1회 첨삭 제공</span>
            </li>
            <li class="listGrid">
              <div class="lgItem th">강좌교재</div>
              <span class="lgItem">
                주교재 : 프린트 <br/>
                참고도서 : 2020 키위 교육학 마인드맵
              </span>
            </li>
            <li class="listGrid">
              <div class="lgItem th">강좌 세부 계획</div>
              <span class="lgItem">
                · 적중 예상 모의고사 진행 <br/>
                · 실전 감각 습득하여 시험에 완전 대비 <br/>
                · 총 18회 채점 진행(홀수차에만 채점 진행) + 18회 자가 채점 <br/>
                · 1~32회 (홀수차 문제 채점)/ 33~34회 채점 · 첨삭 1회 진행
              </span>
            </li>
            <li class="listGrid">
              <div class="lgItem th">첨삭 이용 안내</div>
              <span class="lgItem">
                · 적중 예상 모의고사 진행 <br/>
                · 실전 감각 습득하여 시험에 완전 대비 <br/>
                · 답안지 업로드는 직강 수업일 기준 + 2일까지 업로드 시에만 채점이 가능합니다. <br/>
                (월요일 강의 > 수까지/화요일 강의 > 목까지 업로드)
              </span>
            </li>
            <li class="listGrid" v-if="!this.mobile"> <!-- 데이터가 없는 경우 모바일에서는 안보여지게 해주세요. -->
              <div class="lgItem th">기타사항</div>
              <span class="lgItem"></span>
            </li>
            <li class="listGrid" v-if="!this.mobile"> <!-- 데이터가 없는 경우 모바일에서는 안보여지게 해주세요. -->
              <div class="lgItem th">수강혜택</div>
              <span class="lgItem"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'TeacherLecDetailInfo',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  },
}
</script>
