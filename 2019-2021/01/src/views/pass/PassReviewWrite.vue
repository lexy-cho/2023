<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="passReviewWrite">
          <div class="subTit">
            <h3>합격수기 작성</h3>
          </div>
          <div class="reviewPoll">
            <dl class="first">
              <dt class="hidden">과목</dt>
              <dd>
                <span class="selectSet">
                  <select name="" id="">
                    <option value="">응시지역</option>
                    <option value="">Select Option 2</option>
                    <option value="">Select Option 3</option>
                    <option value="">Select Option 4</option>
                  </select>
                </span>
                <span class="selectSet">
                  <select name="" id="">
                    <option value="">응시과목</option>
                    <option value="">Select Option 2</option>
                    <option value="">Select Option 3</option>
                    <option value="">Select Option 4</option>
                  </select>
                </span>
                <input type="number" placeholder="합격연도 (숫자 4자리)"  v-if="!this.mobile" />
              </dd>
            </dl>
            <dl v-if="this.mobile">
              <dt>합격연도 <sup>(필수항목)</sup></dt>
              <dd>
                <input type="number" placeholder="숫자 4자리 입력 가능" />
              </dd>
            </dl>
            <dl class="proofCase">
              <dt>
                <span class="radioSet">
                  <input type="radio" name="radio0" id="rd001" value="proof1" checked @change="onChange($event)" />
                  <label for="rd001"><i></i>수험번호</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio0" id="rd002" value="proof2" @change="onChange($event)" />
                  <label for="rd002"><i></i>합격인증 첨부</label>
                </span>
              </dt>
              <dd v-if="proofTrigger01"><input type="text" /></dd>
              <dd v-if="proofTrigger02">
                <div class="uploadFileSet">
                  <em></em>
                  <span class="uploadFile">
                    <input type="file" id="fileUpload"/>
                    <label for="fileUpload">+ 첨부파일</label>
                  </span>
                </div>
                <p>※10MB까지 첨부 가능하며 jpg, gif 형식을 권장합니다.</p>
              </dd>
            </dl>
            <dl>
              <dt>병행 여부 <sup>(필수항목)</sup></dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio1" id="rd101" />
                  <label for="rd101"><i></i>직장</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio1" id="rd102" />
                  <label for="rd102"><i></i>학업</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio1" id="rd103" />
                  <label for="rd103"><i></i>육아</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio1" id="rd104" />
                  <label for="rd104"><i></i>임용시험</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio1" id="rd105" />
                  <label for="rd105"><i></i>공부만 전념</label>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>시험준비시작 시기 <sup>(필수항목)</sup></dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio2" id="rd201" />
                  <label for="rd201"><i></i>대학교 재학 중</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio2" id="rd202" />
                  <label for="rd202"><i></i>대학교 졸업 이후</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio2" id="rd203" />
                  <label for="rd203"><i></i>대학원 재학 중</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio2" id="rd204" />
                  <label for="rd204"><i></i>대학원 졸업 이후</label>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>1차 합격까지 준비기간 <sup>(필수항목)</sup></dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio3" id="rd301" />
                  <label for="rd301"><i></i>1년 미만</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio3" id="rd302" />
                  <label for="rd302"><i></i>1년</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio3" id="rd303" />
                  <label for="rd303"><i></i>2년</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio3" id="rd304" />
                  <label for="rd304"><i></i>3년</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio3" id="rd305" />
                  <label for="rd305"><i></i>4년 이상</label>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>Q1. 시험 전까지 이론서를 반복한 횟수는?</dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio4" id="rd401" />
                  <label for="rd401"><i></i>1회</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio4" id="rd402" />
                  <label for="rd402"><i></i>2회</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio4" id="rd403" />
                  <label for="rd403"><i></i>3회</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio4" id="rd404" />
                  <label for="rd404"><i></i>4회</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio4" id="rd405" />
                  <label for="rd405"><i></i>5회 이상</label>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>Q2. 기출 문제를 반복한 횟수는?</dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio5" id="rd501" />
                  <label for="rd501"><i></i>1회</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio5" id="rd502" />
                  <label for="rd502"><i></i>2회</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio5" id="rd503" />
                  <label for="rd503"><i></i>3회</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio5" id="rd504" />
                  <label for="rd504"><i></i>4회</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio5" id="rd505" />
                  <label for="rd505"><i></i>5회 이상</label>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>Q3. (1~2월) 기본이론 강의가 합격에 도움이 되었다고 생각하십니까?</dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio6" id="rd601" />
                  <label for="rd601"><i></i>예</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio6" id="rd602" />
                  <label for="rd602"><i></i>아니오</label>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>Q4. (3~4월) 심화이론 강의가 합격에 도움이 되었다고 생각하십니까?</dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio7" id="rd701" />
                  <label for="rd701"><i></i>예</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio7" id="rd702" />
                  <label for="rd702"><i></i>아니오</label>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>Q5. (5~6월) 기출분석 강의가 합격에 도움이 되었다고 생각하십니까?</dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio8" id="rd801" />
                  <label for="rd801"><i></i>예</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio8" id="rd802" />
                  <label for="rd802"><i></i>아니오</label>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>Q6. (7~8월) 문제풀이 강의가 합격에 도움이 되었다고 생각하십니까?</dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio9" id="rd901" />
                  <label for="rd901"><i></i>예</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio9" id="rd902" />
                  <label for="rd902"><i></i>아니오</label>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>Q7. (9~11월) 모의고사 강의가 합격에 도움이 되었다고 생각하십니까?</dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio10" id="rd1001" />
                  <label for="rd1001"><i></i>예</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio10" id="rd1002" />
                  <label for="rd1002"><i></i>아니오</label>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>Q8. 1차 합격을 위해 가장 중요하다고 생각하는 과정은?</dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio11" id="rd1101" />
                  <label for="rd1101"><i></i>1~2월 기본이론</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio11" id="rd1102" />
                  <label for="rd1102"><i></i>3~4월 심화이론</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio11" id="rd1103" />
                  <label for="rd1103"><i></i>5~6월 기출분석</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio11" id="rd1104" />
                  <label for="rd1104"><i></i>7~8월 문제풀이</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio11" id="rd1105" />
                  <label for="rd1105"><i></i>9~11월 모의고사</label>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>Q9. 희소에서 진행하는 행사 중, 합격에 도움이 된 행사는?</dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio12" id="rd1201" />
                  <label for="rd1201"><i></i>12월 합격전략 설명회</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio12" id="rd1202" />
                  <label for="rd1202"><i></i>2월 합격자 사례발표</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio12" id="rd1203" />
                  <label for="rd1203"><i></i>6월 하반기 학습전략 설명회</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio12" id="rd1204" />
                  <label for="rd1204"><i></i>7월 희소 현장 모의고사</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio12" id="rd1205" />
                  <label for="rd1205"><i></i>7월 희소 온라인 모의고사</label>
                </span>
                <div class="etc">
                  <span class="radioSet">
                    <input type="radio" name="radio12" id="rd1206" />
                    <label for="rd1206"><i></i>기타</label>
                  </span>
                  <input type="text" />
                </div>
              </dd>
            </dl>
            <dl>
              <dt class="hidden">합격 수기 제목 입력</dt>
              <dd class="tit"><input type="text" placeholder="합격 수기 제목 입력" /></dd>
            </dl>
            <dl>
              <dt>Q10. 시기별 교직논술/교육학 학습방법
              <p>※시기별 학습방법에 대해 문항 별로 100자 이상 입력해 주세요.</p></dt>
              <dd class="multyTextarea">
                <span>1~2월</span>
                <textarea></textarea>
                <span>3~4월</span>
                <textarea></textarea>
                <span>5~6월</span>
                <textarea></textarea>
                <span>7~8월</span>
                <textarea></textarea>
                <span>9~11월</span>
                <textarea></textarea>
              </dd>
            </dl>
            <dl>
              <dt>Q11. 시기별 교직논술/전공 학습방법
              <p>※시기별 학습방법에 대해 문항 별로 100자 이상 입력해 주세요.</p></dt>
              <dd class="multyTextarea">
                <span>1~2월</span>
                <textarea></textarea>
                <span>3~4월</span>
                <textarea></textarea>
                <span>5~6월</span>
                <textarea></textarea>
                <span>7~8월</span>
                <textarea></textarea>
                <span>9~11월</span>
                <textarea></textarea>
              </dd>
            </dl>
            <dl>
              <dt>Q12. 2차 시험 학습 방법
              <p>※2차 시험 학습 방법에 대해 문항 별로 100자 이상 입력해 주세요.</p></dt>
              <dd class="multyTextarea">
                <span>교직적성 심층면접</span>
                <textarea></textarea>
                <span>교수학습지도안/수업실연</span>
                <textarea></textarea>
                <span>전반적인 학습 방법이나 꿀팁</span>
                <textarea></textarea>
              </dd>
            </dl>
            <dl>
              <dt>Q13. 자신만의 공부방법
              <p>※슬럼프 극복, 체력관리, 학습 팁 등 다양한 공부 방법을 추천해주세요.</p></dt>
              <dd><textarea></textarea></dd>
            </dl>
            <dl class="helpSsam">
              <dt>Q14. 합격에 도움이 된 선생님과 강의 활용 후기는?</dt>
              <dd>
                <!--Loop-->
                <div class="first">
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="">응시지역</option>
                      <option value="">Select Option 2</option>
                      <option value="">Select Option 3</option>
                      <option value="">Select Option 4</option>
                    </select>
                  </span>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="">응시과목</option>
                      <option value="">Select Option 2</option>
                      <option value="">Select Option 3</option>
                      <option value="">Select Option 4</option>
                    </select>
                  </span>
                  <textarea class="mt10"></textarea>
                </div>
                <!--//Loop-->
                <div>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="">응시지역</option>
                      <option value="">Select Option 2</option>
                      <option value="">Select Option 3</option>
                      <option value="">Select Option 4</option>
                    </select>
                  </span>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="">응시과목</option>
                      <option value="">Select Option 2</option>
                      <option value="">Select Option 3</option>
                      <option value="">Select Option 4</option>
                    </select>
                  </span>
                  <textarea class="mt10"></textarea>
                  <button class="btnDelete">삭제</button>
                </div>
                <button class="btnM line">+ 선생님추가</button>

              </dd>
            </dl>
            <dl>
              <dt>Q15. 선생님께 감사의 편지 쓰기</dt>
              <dd><textarea></textarea></dd>
            </dl>
            <dl>
              <dt>Q16. 후배들에게 전하고 싶은 메세지</dt>
              <dd><textarea></textarea></dd>
            </dl>
          </div>
          <!-- 상세 버튼영역 -->
          <div class="boardBtn noLine">
            <router-link to="/mkup/mypage/counsel/bbs" class="btnL line">취소</router-link>
            <router-link to="/mkup/mypage/counsel/bbs" class="btnL">확인</router-link>
          </div>
          <!-- //상세 버튼영역 -->
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
  name: 'PassReviewWrite',
  components: {
  },
  data() {
    return {
      proofTrigger01:true,
      proofTrigger02:false
    }
  },
  methods: {
    onChange(event) {
      let optionText = event.target.value;
        this.proofTrigger01 = true;
        this.proofTrigger02 = false;

      if (optionText == 'proof1') {
        this.proofTrigger01 = true;
        this.proofTrigger02 = false;
      } else {
        this.proofTrigger01 = false;
        this.proofTrigger02 = true;
      }
    },
  },
}
</script>
