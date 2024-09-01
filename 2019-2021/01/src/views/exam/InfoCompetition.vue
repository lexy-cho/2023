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
        <div class="infoCompetition">
          <div class="subTit noLine">
            <h3>모집인원 및 경쟁률</h3>
          </div>

          <div class="conditionMainKind">
            <!-- tab -->
            <div class="tabBack">
              <div class="tabNav">
                <nav>
                  <ul class="blackLineTab">
                    <li :class="{on:kindTab===0}"><button @click="kindTab = 0">유/초등</button></li>
                    <li :class="{on:kindTab===1}"><button @click="kindTab = 1">중등</button></li>
                  </ul>
                </nav>
              </div>
            </div>
            <!--// tab -->
            <div class="tabLayout">
              <!-- 유/초등 -->
              <div v-if="kindTab == 0" class="tabData" :key="kindTab">
                <div class="kind">
                  <span class="right">
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="">전공</option>
                      </select>
                    </span>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="">학년도</option>
                      </select>
                    </span>
                  </span>
                </div>
                <div v-if="!this.mobile">
                  <div class="conditionTabWrap">
                    <h4><strong>유치원</strong> 몇 명을 모집하고 몇 명이 지원했을까?</h4>
                    <!-- tab -->
                    <div class="tabBack">
                      <div class="tabNav">
                        <nav>
                          <ul>
                            <li :class="{on:currentTab===0}"><button @click="currentTab = 0">사전예고인원 대비 모집인원</button></li>
                            <li :class="{on:currentTab===1}"><button @click="currentTab = 1">모집인원 대비 지원인원</button></li>
                            <li :class="{on:currentTab===2}"><button @click="currentTab = 2">경쟁률</button></li>
                            <li :class="{on:currentTab===3}"><button @click="currentTab = 3">1차, 최종합격선</button></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <!--// tab -->
                    <div class="tabLayout">
                      <div v-if="currentTab == 0" class="tabData case1" :key="currentTab">
                        <InfoGraphRecruitment />
                      </div>
                      <div v-if="currentTab == 1" class="tabData case2">
                        <InfoGraphApplicants />
                      </div>
                      <div v-if="currentTab == 2" class="tabData case3">
                        <InfoGraphCompete />
                      </div>
                      <div v-if="currentTab == 3" class="tabData case4">
                        <InfoGraphPass />
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 모바일 용 -->
                <div v-else-if="this.mobile">
                  <div class="mGraphBack">
                    <h4><strong>유치원</strong> 몇 명을 모집하고 몇 명이 지원했을까?</h4>
                    <div class="mGraph">
                      <strong>사전예고인원 대비 모집인원 (일반기준)</strong>
                      <InfoGraphRecruitment />
                    </div>
                    <div class="mGraph">
                      <strong>모집인원 대비 지원인원 (일반기준)</strong>
                      <InfoGraphApplicants />
                    </div>
                    <div class="mGraph">
                      <strong>경쟁률 (일반기준)</strong>
                      <InfoGraphCompete />
                    </div>
                    <div class="mGraph">
                      <strong>1차, 최종합격선 (일반기준)</strong>
                      <InfoGraphPass />
                    </div>
                  </div>
                </div>
                <!-- //모바일 용 -->
                <InfoFullDataTableKind0 />
              </div>
              <!-- //유/초등 -->
              <!-- 중등 -->
              <div v-if="kindTab == 1" class="tabData">
                <div class="kind">
                  <span class="right">
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="">전공</option>
                      </select>
                    </span>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="">학년도</option>
                      </select>
                    </span>
                  </span>
                </div>
                <div v-if="!this.mobile">
                  <div class="conditionTabWrap">
                    <h4><strong>중등</strong> 몇 명을 모집하고 몇 명이 지원했을까?</h4>
                    <!-- tab -->
                    <div class="tabBack">
                      <div class="tabNav">
                        <nav>
                          <ul>
                            <li :class="{on:currentTab===0}"><button @click="currentTab = 0">사전예고인원 대비 모집인원</button></li>
                            <li :class="{on:currentTab===1}"><button @click="currentTab = 1">모집인원 대비 지원인원</button></li>
                            <li :class="{on:currentTab===2}"><button @click="currentTab = 2">경쟁률</button></li>
                            <li :class="{on:currentTab===3}"><button @click="currentTab = 3">1차, 최종합격선</button></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <!--// tab -->
                    <div class="tabLayout">
                      <div v-if="currentTab == 0" class="tabData case1" :key="currentTab">
                        <InfoGraphRecruitment />
                      </div>
                      <div v-if="currentTab == 1" class="tabData case2">
                        <InfoGraphApplicants />
                      </div>
                      <div v-if="currentTab == 2" class="tabData case3">
                        <InfoGraphCompete />
                      </div>
                      <div v-if="currentTab == 3" class="tabData case4">
                        <InfoGraphPass />
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 모바일 용 -->
                <div v-else-if="this.mobile">
                  <div class="mGraphBack">
                    <h4><strong>중등</strong> 몇 명을 모집하고 몇 명이 지원했을까?</h4>
                    <div class="mGraph">
                      <strong>사전예고인원 대비 모집인원 (일반기준)</strong>
                      <InfoGraphRecruitment />
                    </div>
                    <div class="mGraph">
                      <strong>모집인원 대비 지원인원 (일반기준)</strong>
                      <InfoGraphApplicants />
                    </div>
                    <div class="mGraph">
                      <strong>경쟁률 (일반기준)</strong>
                      <InfoGraphCompete />
                    </div>
                    <div class="mGraph">
                      <strong>1차, 최종합격선 (일반기준)</strong>
                      <InfoGraphPass />
                    </div>
                  </div>
                </div>
                <!-- //모바일 용 -->
                <InfoFullDataTableKind1 />
              </div>
              <!-- //중등 -->
            </div>
          </div>
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
import InfoGraphRecruitment from '@/views/exam/InfoGraphRecruitment.vue';
import InfoGraphApplicants from '@/views/exam/InfoGraphApplicants.vue';
import InfoGraphCompete from '@/views/exam/InfoGraphCompete.vue';
import InfoGraphPass from '@/views/exam/InfoGraphPass.vue';
import InfoFullDataTableKind0 from '@/views/exam/InfoFullDataTableKind0.vue';
import InfoFullDataTableKind1 from '@/views/exam/InfoFullDataTableKind1.vue';

export default {
  mixins: [Mixin],
  name: 'InfoCompetition',
  components: {
    InfoGraphRecruitment,
    InfoGraphApplicants,
    InfoGraphCompete,
    InfoGraphPass,
    InfoFullDataTableKind0,
    InfoFullDataTableKind1,
  },
  data() {
    return {
      currentTab:0,
      kindTab:0
    }
  },
}
</script>
