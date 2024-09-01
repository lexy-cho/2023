<template lang="html">
  <div id="morkupExamPaper" :class="{on:baseTrigger===true}">
    <div class="examinee">
      <div class="baseBack">
        <div class="tableBack">
          <div class="resTls subCase">
            <div class="tbody">
              <ul>
                <li class="listGrid ig1" @click="currentTab = 0"> <!-- 샘플 링크 입니다 -->
                  <span class="lgItem th">시험 시작시간</span>
                  <span class="lgItem item0">2021-08-10   오후 5:39:40</span>
                  <span class="lgItem th th2">전공</span>
                  <span class="lgItem item1">국어</span>
                </li>
                <li class="listGrid ig2">
                  <span class="lgItem th">이름(아이디)</span>
                  <span class="lgItem item0">김송민</span>
                  <span class="lgItem th th2">수험번호</span>
                  <span class="lgItem item1">361145</span>
                </li>
                <li class="listGrid ig3">
                  <span class="lgItem">
                    <dl>
                      <dt>시험 응시 현장 중계</dt>
                      <dd>
                        <strong>희소 쌤플러스 모의고사</strong>는 시험 현장의 긴장감을 생생하게 전달해 드립니다.
                        <div>내가 어떤 장소에 있든지 실제 시험장의 현황을 보면서 실전처럼 응시해 보세요.</div>
                      </dd>
                    </dl>
                    <span class="live on"> <!-- 없을 때는  on 을 지워주세요 -->
                      <img :src="require(`@/assets/images/thumbnail/@morkupExam_video.png`)" alt="" />
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button class="baseToggle" @click="baseTrigger = !baseTrigger">시험응시자 정보 여닫기</button>
    </div>
    <div class="examWrap">
      <!-- tab -->
      <div class="examTab">
        <ul>
          <li :class="{on:currentTab===1, off:currentTab!==0&&currentTab!==1}"><span @click="currentTab = 1">1교시 <strong>교육학 (김현)</strong> <em>09:00~10:00</em></span></li>
          <li :class="{on:currentTab===2, off:currentTab!==0&&currentTab!==2}"><span @click="currentTab = 2">2교시 <strong>국어 (박노송)</strong> <em>10:40~11:50</em></span></li>
          <li :class="{on:currentTab===3, off:currentTab!==0&&currentTab!==3}"><span @click="currentTab = 3">3교시 <strong>국어 (박노송)</strong> <em>12:30~13:40</em></span></li>
        </ul>
      </div>
      <!--// tab -->
      <div class="examTabData">
        <div v-if="currentTab == 0" :key="currentTab" class="testSchedule">
          <h2>모의고사 시험일정 안내</h2>
          <MockTestSchedule v-if="!this.mobile" />
          <MockTestScheduleM v-else-if="this.mobile" />
        </div>
        <div v-if="currentTab == 1" class="testPdfviewer"><img :src="require(`@/assets/images/thumbnail/@morkupExam_paper.png`)" alt="" /></div>
        <div v-if="currentTab == 2" class="testPdfviewer"><img :src="require(`@/assets/images/thumbnail/@morkupExam_paper.png`)" alt="" /></div>
        <div v-if="currentTab == 3" class="testPdfviewer"><img :src="require(`@/assets/images/thumbnail/@morkupExam_paper.png`)" alt="" /></div>
      </div>
    </div>
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import MockTestSchedule from '@/views/mylec/MockTestSchedule.vue';
import MockTestScheduleM from '@/views/mylec/MockTestScheduleM.vue';

export default {
  mixins: [Mixin],
  name: 'MorkExamPaper',
  components: {
    MockTestSchedule,
    MockTestScheduleM
  },
  data() {
    return {
      currentTab:0,
      baseTrigger:false
    }
  },
  methods: {
  },
  computed: {
  },
  mounted() {
  }
}
</script>
