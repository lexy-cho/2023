<template lang="html">
  <div>
    <!-- page layout -->
    <div class="lecViewContainer">
      <!---->
      <div class="lecViewContents">
        <!-- 쌤 & 강좌명 -->
        <div class="lecBasicBack">
          <div class="ssam">
            <span><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt="" /></span>
            <strong>김 현</strong>
          </div>
          <div class="lecBasic">
            <span class="kind">
              <span><em class="iApplySet ing">신청중</em></span>
            </span>
            <div class="lecTt">
              <em class="iLocSet idea">이데아</em>
              <em class="iSet">패키지</em>
              <em class="iSet">2021</em>
              <em class="iSet red">신규개설</em>
              <strong class="tt">
                연간쌤팩 베이직
                <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span>
              </strong>
            </div>
          </div>
          <div class="smartPrice">
            <div class="spSet">
              <div class="set">
                <strong class="tt">수강료</strong>
                <span class="price">
                  <del>2,568,000</del><em>10<b>%</b></em><br/>
                  <strong>1,356,600<i>원</i></strong>
                </span>
              </div>
              <div class="set">
                <strong class="tt">교재</strong>
                <span class="price">
                  <del>312,000</del><em>10<b>%</b></em><br/>
                  <strong>196,600<i>원</i></strong>
                </span>
              </div>
            </div>
            <div class="spTxt">※ 해당 패키지는 <em>총 2개의 강좌</em>로 구성된 상품입니다.</div>
          </div>
        </div>
        <!-- //쌤 & 강좌명 -->
        <!-- 강좌 별 상세 내용 -->
        <div class="lecDetail">
          <!-- 수강할인 팁 -->
          <div class="article">
            <div class="subTit">
              <h3>수강할인 팁</h3>
              <span class="right"><button class="btnDiscount" @click="openDetail = !openDetail" v-if="openDetail == false">펼쳐보기</button></span>
              <div class="txt"><em>최근 2년 이내 특정강좌를 수강했다면 보다 높은 할인이 적용됩니다.</em></div>
            </div>
            <div class="lecDiscountBack" :class="{open:openDetail===true}" >
              <TeacherLecDiscount />
              <button class="btnDiscount" @click="openDetail = !openDetail">접기</button>
            </div>
          </div>
          <!-- //수강할인 팁 -->
          <!-- 강의 특징 -->
          <div class="article">
            <div class="subTit"><h3>강의 특징</h3></div>
            <div class="editorArea" style="line-height:1.72;font-size:12px;color:#666666;">
              <!--에디터로 나오는 영역입니다. -->
              <strong style="display:block;padding:0 0 9px;font-size:12px;color:#666;">키워드 중심으로 교육학을 종합 정리하는 강의</strong>
              1. 수업 시간 안내<br/>
              - 1주차 09:30~13:00<br/>
              - 2~8주차 09:00~13:00(09:00~09:50까지 테스트 진행 후 10:00부터 수업 시작)<br/>
              2. 8주 과정, 주당 2일(월, 화)<br/>
              3. 매주 교육학 2문제 OMR을 통한 논술 쓰기 14회(2주~8주)<br/>
              4. 12회 채점 진행(2주~7주)<br/>
              5. 성적 통계표 업로드<br/>
              6. 개별 서면첨삭 1회(인강)<br/>
               7. 현장에서 필요한 교육학 자료 제공
            </div>
          </div>
          <!-- //강의 특징 -->
          <!-- 강의 미리보기 -->
          <div class="article">
            <div class="subTit noLine"><h3>강의 미리보기</h3></div>
            <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_teacherHome02.png`)" alt="" /></span>
          </div>
          <!-- //강의 미리보기 -->
          <!-- 강좌 및 교재 -->
          <div class="article widthData offLineCase">
            <div class="subTit"><h3>강좌 및 교재</h3></div>
            <div class="inPackage">
              <div class="widthList">
                <ol>
                  <!--Loop-->
                  <li>
                    <div class="singleLec"><!-- 상세에서 단과 및 보너스 일 경우 -->
                      <div class="item">
                        <span class="tL">
                          <em class="iPro">강좌 1</em>
                          <strong>
                            그린키위반(기본반)
                            <i class="division">이론강의</i>
                          </strong>
                        </span>
                        <span class="tR">
                          <span class="lecLimit">월, 목 9:30~13:00</span>
                          <span class="lecLimit red">개강 : 2021-05-03</span>
                        </span>
                      </div>
                      <div class="lecBtnSet">
                        <button>교재</button>
                        <button>강좌소개</button>
                      </div>
                    </div>
                  </li>
                  <!--//Loop-->
                  <li>
                    <div class="singleLec">
                      <div class="item">
                        <span class="tL">
                          <em class="iPro bonus">보너스</em>
                          <strong>그린키위반(한국교육사, 서양교육사)</strong>
                        </span>
                        <span class="tR">
                          <span class="lecLimit">월, 목 9:30~13:00</span>
                          <span class="lecLimit red">개강 : 2021-05-03</span>
                        </span>
                      </div>
                      <div class="lecBtnSet">
                        <button>강좌소개</button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="singleLec">
                      <div class="item">
                        <span class="tL">
                          <em class="iPro">강좌 2</em>
                          <strong>골드키위반(심화반)<i class="division">문제풀이</i></strong>
                        </span>
                        <span class="tR">
                          <span class="lecLimit">월, 목 9:30~13:00</span>
                          <span class="lecLimit red">개강 : 2021-05-03</span>
                        </span>
                      </div>
                      <div class="lecBtnSet">
                        <button>강좌소개</button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="singleLec">
                      <div class="item">
                        <span class="tL">
                          <em class="iPro">강좌 3</em>
                          <strong>키위 기출분석반<i class="division">모의고사</i></strong>
                        </span>
                        <span class="tR">
                          <span class="lecLimit">월, 목 9:30~13:00</span>
                          <span class="lecLimit red">개강 : 2021-05-03</span>
                        </span>
                      </div>
                      <div class="lecBtnSet">
                        <button>강좌소개</button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="singleLec">
                      <div class="item">
                        <span class="tL">
                          <em class="iPro">강좌 4</em>
                          <strong>키위 마인드맵반<i class="division">면접실연</i></strong>
                        </span>
                        <span class="tR">
                          <span class="lecLimit">월, 목 9:30~13:00</span>
                          <span class="lecLimit red">개강 : 2021-05-03</span>
                        </span>
                      </div>
                      <div class="lecBtnSet">
                        <button>강좌소개</button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="singleLec">
                      <div class="item">
                        <span class="tL">
                          <em class="iPro">강좌 5</em>
                          <strong>키위 최종 모의고사반<i class="division">기타특강</i></strong>
                        </span>
                        <span class="tR">
                          <span class="lecLimit">월, 목 9:30~13:00</span>
                          <span class="lecLimit red">개강 : 2021-05-03</span>
                        </span>
                      </div>
                      <div class="lecBtnSet">
                        <button>강좌소개</button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="singleLec">
                      <div class="item">
                        <span class="tL">
                          <em class="iPro bonus">보너스</em>
                          <strong>그린키위반(한국교육사, 서양교육사)</strong>
                        </span>
                        <span class="tR">
                          <span class="lecLimit">월, 목 9:30~13:00</span>
                          <span class="lecLimit red">개강 : 2021-05-03</span>
                        </span>
                      </div>
                      <div class="lecBtnSet">
                        <button>강좌소개</button>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <!-- //강좌 및 교재 -->
        </div>
        <!-- //강좌 별 상세 내용 -->
      </div>
    </div>
    <!-- //page layout -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import TeacherLecDetailInfo from '@/views/lecture/TeacherLecDetailInfo.vue';
import TeacherLecSchedule from '@/views/lecture/TeacherLecSchedule.vue';
import TeacherLecDiscount from '@/views/lecture/TeacherLecDiscount.vue';

export default {
  mixins: [Mixin],
  name: 'TeacherOnlineView2',
  components: {
    TeacherLecDetailInfo,
    TeacherLecSchedule,
    TeacherLecDiscount
  },
  data() {
    return {
      openDetail: false,
      currentTab: 0,
      videoPopTrigger01: false,
      lecturePop:false,
      lecturePopTab:0,
      lecturePop2:false,
      lecturePopTab2:0,
    }
  },
  methods: {
  },
  mounted() {
  },
}
</script>
