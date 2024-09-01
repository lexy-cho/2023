<template>
  <div id="pcMyNavi" :class="{off:isNaviToggle==false}">
    <div class="naviBack">
      <button class="toggleNavi" @click="isNaviToggle = !isNaviToggle">여닫기</button>
      <!---->
      <div class="naviBase">
        <span class="naviLogo" v-if="!this.isMyToggle || !this.isLoginToggle">쌤Plus</span>
        <span class="labelToggleSet mode" v-if="this.isMyToggle">
          <input type="checkbox" id="push55" checked>
          <label for="push55">
            <span>전공모드</span>
            <span>일반모드</span>
          </label>
        </span>
        <!-- 로그인 전 -->
        <div class="naviLogin" v-if="!this.isLoginToggle">
          <div class="name">
            <span>교원임용의 강자</span>
            <strong>SSAMPLUS</strong>
          </div>
          <span class="goMy">
              <router-link to="/mkup/login" class="btnM btnLogin">로그인</router-link>
              <router-link to="/mkup/join" class="btnM btnJoin">회원가입</router-link>
          </span>
        </div>
        <!-- 로그인 후 -->
        <div class="naviMyInfo" v-if="this.isLoginToggle">
          <div class="name">
            <span>내일의 중국어</span>
            <strong>홍길동</strong> 선생님
          </div>
          <span class="goMy">
              <router-link to="/mkup/login" class="btnM btnLogout">로그아웃</router-link>
              <router-link to="/mkup/mypage/payment/history" class="btnM btnMypage">마이페이지</router-link>
          </span>
        </div>
        <!-- 기본 -->
        <span class="goBtn">
            <router-link to="/mkup/bbs/notice" class="btnNotice new">공지사항</router-link>
            <router-link to="/mkup/bbs/event" class="btnEvent new">이벤트</router-link>
            <router-link to="/mkup/counsel/index" class="btnCounsel">상담센터</router-link>
            <router-link to="/mkup/mypage/payment/basket" class="btnCart">장바구니</router-link>
        </span>
      </div>
      <!---->
      <div class="my">
        <router-link to="/mkup/smart" class="btnSmartGoNot" v-if="!this.isLoginToggle"><img :src="require(`@/assets/images/btn_smartGo.png`)" alt="SMART 수강신청" /></router-link>
        <!---->
        <div class="loginAfter" v-if="this.isLoginToggle">
          <router-link to="/mkup/smart" class="btnSmartGo">스마트 수강신청</router-link>
          <router-link to="/mkup/mylec/online/my" class="btnMylec">내 강의실</router-link>
          <div class="favoritesLec" v-if="this.isLecToggle">
            <ul class="favoritesList">
              <li>
                <div class="listBack">
                  <div>
                    <span class="back">
                      <router-link to="/mkup/mylec/online/my/player">
                        <span class="thum">
                          <span><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt="" /></span>
                        </span>
                        <span class="info">
                          <span>
                            <em>교육학 김현</em>
                            <strong>키위 기출분석반</strong>
                          </span>
                        </span>
                      </router-link>
                      <button class="btnDelete" @click="naviPopupTrigger01 = true">삭제</button>
                    </span>
                  </div>
                </div>
                <div class="listBack">
                  <div>
                    <span class="back">
                      <router-link to="/mkup/mylec/online/my/player">
                        <span class="thum">
                          <span><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare09.png`)" alt="" /></span>
                        </span>
                        <span class="info">
                          <span>
                            <em>수학 이정훈/안후상팀</em>
                            <strong>선대,미기+수교 이론 총정리</strong>
                          </span>
                        </span>
                      </router-link>
                      <button class="btnDelete" @click="naviPopupTrigger01 = true">삭제</button>
                    </span>
                  </div>
                </div>
                <div class="listBack">
                  <div><button class="btnAdd" @click="favoritesTrigger = true">추가하기</button></div>
                </div>
              </li>
            </ul>
            <button @click="isLoginToggle = false">로그인 안한 경우</button><br/>
            <button @click="isLecToggle = false, fullPageEvent($event)">강의 없는 여부</button><br/>
            <button @click="isMyToggle = !isMyToggle">전공 여부</button><br/><br/><br/>
            <span class="page">
              <button>이전</button>
              <em><i>1</i>/3</em>
              <button class="next">다음</button>
            </span>
          </div>
        </div>
        <!--//-->
      </div>
      <div class="naviFoot">
        <span class="naviCounsel">
          <a href="https://pf.kakao.com/_WPrLl" target="_blank" class="quick">빠른문의</a>
          <a href="https://pf.kakao.com/_qhFuj" target="_blank" class="chatbot">챗봇상담</a>
        </span>
        <button class="naviTop" @click="scrollToTop()">TOP</button>
      </div>

      <button @click="isLoginToggle = true, isMyToggle = false" v-if="!this.isLoginToggle">로그인 한 경우</button>
      <span v-if="this.isLoginToggle">
        <button @click="isLoginToggle = false">로그인 안한 경우</button><br/>
        <button @click="isLecToggle = true, fullPageEvent($event)">강의 있는 경우</button><br/>
        <button @click="isMyToggle = !isMyToggle">전공 여부</button><br/><br/><br/>
      </span>
    </div>

    <!--즐겨찾기 삭제 -->
    <Alert v-if='naviPopupTrigger01' @close="naviPopupTrigger01 = false">
      <template slot="modalbody">
        선택한 수강강좌의 즐겨찾기를 해제 하시겠습니까?
      </template>
      <template slot="modalfooter">
        <button class="btnM line" @click="naviPopupTrigger01 = false">취소</button>
        <button class="btnM" @click="naviPopupTrigger01 = false">확인</button>
      </template>
    </Alert>
    <!-- //즐겨찾기 삭제 -->
		<!-- 즐겨찾기 Popup -->
		<Popup v-if='favoritesTrigger' @close="favoritesTrigger = false" class="favoritesPopup">
      <template slot="modalheader">
        <div><h1><em>내 강의실</em> 즐겨 찾기 설정</h1></div>
        <button @click="favoritesTrigger = false" class="modalClose">close</button>
      </template>
			<template slot="modalbody">
        <favoritesList />
			</template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnM line" @click="favoritesTrigger = false">취소</button>
          <button class="btnM" @click="favoritesTrigger = false">저장</button>
        </div>
      </template>
		</Popup>
		<!-- 즐겨찾기 Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import Popup from '@/views/include/Popup.vue';
import Alert from '@/views/include/Alert.vue';
import FavoritesList from '@/views/include/FavoritesList.vue';

export default {
  name: 'PcMyNavi',
  components: {
      Popup,
      Alert,
      FavoritesList
  },
  data() {
    return {
      isNaviToggle:true,
      naviPopupTrigger01:false,
      favoritesTrigger:false,
      isLecToggle:false,
      isMyToggle:false,
      isLoginToggle:false,
    }
  },
  computed: {
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    fullPageEvent(event) {
      if (event) {
        this.active = !this.active;
        let triggerEl = document.getElementById('fullPage');
        this.active ? triggerEl.classList.add("on") : triggerEl.classList.remove("on");
      }
    },
    // fullPageSize(url){
    //   if (url.includes('/mkup/main/eventview4')) {
    //     this.fullPageEvent();
    //   } else {
    //   }
    // }
  },
  // watch: {
  //   $route(to, from) {
  //     this.fullPageSize(to.path);
  //   }
  // },
  // mounted() {
  //   this.fullPageSize(window.location.pathname);
  // }
};
</script>
