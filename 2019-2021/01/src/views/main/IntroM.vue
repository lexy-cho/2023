<template lang="html">
	<div id="introContainer">
		<div class="introTop">
			<div class="introFrame">
				<h1>쌤플러스</h1>
				<span class="right">
					<router-link to="/mkup/login" class="introLogin">로그인</router-link>
					<button class="introNavOpner" :class="{on:introTrigger == true}" @click="introTrigger = !introTrigger">인트로 네비</button>
				</span>
			</div>
		</div>
		<div class="introNavArea" :class="{on:introTrigger == true}" @click="introTrigger = false">
			<ul>
				<li :class="{on:introTab == 0}"><button @click="goto('introGo0'), introTab = 0">홈</button></li>
				<li :class="{on:introTab == 1}"><button @click="goto('introGo1'), introTab = 1">쌤플러스 이벤트</button></li>
				<li :class="{on:introTab == 2}"><button @click="goto('introGo2'), introTab = 2">2021 합격수기</button></li>
				<li :class="{on:introTab == 3}"><button @click="goto('introGo3'), introTab = 3">2022 대비 합격전략 온라인 설명회</button></li>
				<li :class="{on:introTab == 4}"><button @click="goto('introGo4'), introTab = 4">시험 적중! 전공별 선생님</button></li>
				<li :class="{on:introTab == 5}"><button @click="goto('introGo5'), introTab = 5">맞춤 합격전략</button></li>
				<li :class="{on:introTab == 6}"><button @click="goto('introGo6'), introTab = 6">위치 안내</button></li>
			</ul>
		</div>
		<div class="introNoSwiper">
			<!-- 메인 비쥬얼 -->
			<div class="item" ref="introGo0">
				<article>
					<div class="introVisual">
						<swiper :options="swiperOption01">
							<swiper-slide class="visual01">
								<div>
									<p class="introFrame">
										<span>
											중요한 것은 가능성에 관한 <br/>의심이 아닌 확신! <br/><strong>쌤플러스가 같이 고민하고 준비하겠습니다.</strong>
										</span>
									</p>
								</div>
							</swiper-slide>
							<swiper-slide class="visual02">
								<div>
									<p class="introFrame">
										<span>
											할 수 있다고 생각하면 <br/>꿈!이 아니라 내일의 현실! <br/><strong>결승점까지 쌤플러스가 함께 뛰겠습니다.</strong>
										</span>
									</p>
								</div>
							</swiper-slide>
							<swiper-slide class="visual03">
								<div>
									<p class="introFrame">
										<span>
											<strong>당신의 임용 합격을 <br/>축하합니다! <br/>당신의 기쁨이 쌤 플러스의 기쁨입니다.</strong>
										</span>
									</p>
								</div>
							</swiper-slide>
						</swiper>
						<div class="pageSet">
							<div class="area">
								<div class="swiper-pagination" slot="pagination"/>
								<div class="swiper-button-prev" slot="button-prev"/>
								<div class="swiper-button-next" slot="button-next"/>
							</div>
						</div>
						<div class="goLogin">
							<router-link to="/mkup/login" class="btnL line introLogin">로그인</router-link>
							<i>
								아직 쌤플러스 회원이 아니신가요?
								<router-link to="/mkup/join">회원가입하기</router-link>
							</i>
						</div>
					</div>
				</article>
			</div>
			<!-- //메인 비쥬얼 -->
			<!-- 쌤플러스 이벤트 -->
			<div class="item introEventBack" ref="introGo1">
				<article>
			    <div class="introEvent">
						<div class="tit">
							<h2>2022 쌤플러스 이벤트</h2>
							<p>로그인 하시면 더 많은 이벤트를 확인하실 수 있습니다.</p>
							<router-link to="/mkup/login" class="btnAll">로그인 후, <strong>전체보기</strong></router-link>
						</div>
						<div class="iEvent">
							<!--목록-->
							<div class="iEventSwiperList">
								<swiper :options="iEVListOption">
										<swiper-slide>
											<button @click="evevtPopTrigger = true, scrollHiden($event)"><img :src="require(`@/assets/images/thumbnail/@tmp_intro_envet01.png`)" alt="" /></button>
											<button @click="evevtPopTrigger = true, scrollHiden($event)"><img :src="require(`@/assets/images/thumbnail/@tmp_intro_envet02.png`)" alt="" /></button>
										</swiper-slide>
										<swiper-slide>
											<button @click="evevtPopTrigger = true, scrollHiden($event)"><img :src="require(`@/assets/images/thumbnail/@tmp_intro_envet03.png`)" alt="" /></button>
											<button @click="evevtPopTrigger = true, scrollHiden($event)"><img :src="require(`@/assets/images/thumbnail/@tmp_intro_envet04.png`)" alt="" /></button>
										</swiper-slide>
										<swiper-slide>
											<button @click="evevtPopTrigger = true, scrollHiden($event)"><img :src="require(`@/assets/images/thumbnail/@tmp_intro_envet05.png`)" alt="" /></button>
											<button @click="evevtPopTrigger = true, scrollHiden($event)"><img :src="require(`@/assets/images/thumbnail/@tmp_intro_envet06.png`)" alt="" /></button>
										</swiper-slide>
										<swiper-slide>
											<button @click="evevtPopTrigger = true, scrollHiden($event)"><img :src="require(`@/assets/images/thumbnail/@tmp_intro_envet07.png`)" alt="" /></button>
											<button @click="evevtPopTrigger = true, scrollHiden($event)"><img :src="require(`@/assets/images/thumbnail/@tmp_intro_envet08.png`)" alt="" /></button>
										</swiper-slide>
								</swiper>
							</div>
							<!--목록-->
						</div>
					</div>
				</article>
			</div>
			<!--이벤트 상세-->
			<div class="iEventViewPop" v-if='this.evevtPopTrigger'>
				<button @click="evevtPopTrigger = false, scrollHiden($event)" class="modalClose">close</button>
				<div class="iEventDetailBack">
					<div class="iEventDetail">
						<swiper :options="iEVdetailOption" ref="iEventSwiper" @slideChange="slideChange">
							<swiper-slide>
								<router-link to="/mkup/bbs/event/ing"><img :src="require(`@/assets/images/thumbnail/@tmp_intro_envet01Big.png`)" alt="" /></router-link>
							</swiper-slide>
							<swiper-slide>
								<router-link to="/mkup/bbs/event/ing2"><img :src="require(`@/assets/images/thumbnail/@tmp_intro_envet02Big.png`)" alt="" /></router-link>
							</swiper-slide>
							<swiper-slide>
								<router-link to="/mkup/main/eventview4"><img :src="require(`@/assets/images/thumbnail/@tmp_intro_envet03Big.png`)" alt="" /></router-link>
							</swiper-slide>
						</swiper>
					</div>
				</div>
				<div class="pageSet">
					<span class="left">
						<strong v-html="eventTit"></strong>
						<em v-html="eventDate"></em>
					</span>
				</div>
				<div class="swiper-button-prev" slot="button-prev"/>
				<div class="swiper-button-next" slot="button-next"/>
			</div>
			<!--//이벤트 상세-->
			<!-- //쌤플러스 이벤트 -->
			<!-- 2021 합격수기 -->
			<div class="item introPassBack" ref="introGo2">
				<article>
					<IntroPassM />
				</article>
			</div>
			<!-- //2021 합격수기 -->
			<!-- 2022 대비 합격전략 온라인 설명회 -->
			<div class="item" ref="introGo3">
				<article>
					<IntroPresentationM />
				</article>
			</div>
			<!--// 2022 대비 합격전략 온라인 설명회 -->
			<!-- 시험 적중! 전공별 선생님 -->
			<div class="item introRealHitBack" ref="introGo4">
				<article>
			    <div class="introRealHit">
						<!-- 목록 -->
						<div class="iRHitList">
							<div class="tit">
								<h2>시험 적중! 전공별 선생님</h2>
								<router-link to="/mkup/login" class="btnAll">로그인 후, <strong>전체보기</strong></router-link>
							</div>
							<div class="iRHitMobile">
							  <swiper :options="introHitOption1">
							    <swiper-slide>
										<div @click="iRealHitPopTrigger = true, issamHit = 0, scrollHiden($event)">
								      <span>
								        <em>교육학<br/> <strong>김현</strong><i>선생님</i></em>
								        <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice01.png`)" alt="" />
								      </span>
								      <p><strong>적중제보</strong><span>스나이더 충실관점에서 온라인 학습, 의사결정 모든 게 교수님 모고에서 다뤄 주셔서 답안 작성시에 문제가 없었습니다.</span></p>
										</div>
							    </swiper-slide>
							    <swiper-slide>
										<div @click="iRealHitPopTrigger = true, issamHit = 1, scrollHiden($event)">
								      <span>
								        <em>교육학<br/><strong>권구현</strong><i>선생님</i></em>
								        <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice02.png`)" alt="" />
								      </span>
								      <p><strong>적중제보</strong><span>마지막에 주신 기출기반 출제예상 자료를 공부해서 자기결정 교수학습 모델, 어음명료도검사, 키가드, PECS 등등</span></p>
										</div>
									</swiper-slide>
							    <swiper-slide>
										<div @click="iRealHitPopTrigger = true, issamHit = 2, scrollHiden($event)">
								      <span>
								        <em>교육학<br/><strong>윤중샘</strong><i>선생님</i></em>
								        <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice03.png`)" alt="" />
								      </span>
								      <p><strong>적중제보</strong><span>모고에서 나온 문제들 태선화, 안전사고, 최고노출기준, 충수염, 폐렴 등 다 한번씩 봤던 문제들이라 신기했습니다.</span></p>
										</div>
									</swiper-slide>
							    <swiper-slide>
										<div @click="iRealHitPopTrigger = true, issamHit = 0, scrollHiden($event)">
								      <span>
								        <em>유아<br/><strong>배지윤</strong><i>선생님</i></em>
								        <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice04.png`)" alt="" />
								      </span>
								      <p><strong>적중제보</strong><span>의사결정 모든게 모고에서 다뤄주셔서 답안 작성 시 막힘이 없었습니다. 배지윤 선생님의 놀라운 적중률</span></p>
										</div>
									</swiper-slide>
							    <swiper-slide>
										<div @click="iRealHitPopTrigger = true, issamHit = 0, scrollHiden($event)">
								      <span>
								        <em>유아<br/><strong>이동건</strong><i>선생님</i></em>
								        <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice05.png`)" alt="" />
								      </span>
								      <p><strong>적중제보</strong><span>스나이더 충실관점에서 온라인 학습, 의사결정 모든 게 교수님 모고에서 다뤄 주셔서 답안 작성시에 문제가 없었습니다. 스나이더 충실관점에서 온라인 학습, 의사결정 모든 게 교수님 모고에서 다뤄 주셔서 답안 작성시에 문제가 없었습니다.</span></p>
										</div>
									</swiper-slide>
							    <swiper-slide>
										<div @click="iRealHitPopTrigger = true, issamHit = 0, scrollHiden($event)">
								      <span>
								        <em>논술<br/><strong>양재웅</strong><i>선생님</i></em>
								        <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice06.png`)" alt="" />
								      </span>
								      <p><strong>적중제보</strong><span>마지막에 주신 기출기반 출제예상 자료를 공부해서 자기결정 교수학습 모델, 어음명료도검사, 키가드, PECS 등등</span></p>
										</div>
									</swiper-slide>
							    <swiper-slide>
										<div @click="iRealHitPopTrigger = true, issamHit = 0, scrollHiden($event)">
								      <span>
								        <em>국어<br/><strong>박노송</strong><i>선생님</i></em>
								        <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice07.png`)" alt="" />
								      </span>
								      <p><strong>적중제보</strong><span>모고에서 나온 문제들 태선화, 안전사고, 최고노출기준, 충수염, 폐렴 등 다 한번씩 봤던 문제들이라 신기했습니다.</span></p>
										</div>
									</swiper-slide>
							    <swiper-slide>
										<div @click="iRealHitPopTrigger = true, issamHit = 0, scrollHiden($event)">
								      <span>
								        <em>국어<br/><strong>송헌</strong><i>선생님</i></em>
								        <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice08.png`)" alt="" />
								      </span>
								      <p><strong>적중제보</strong><span>의사결정 모든게 모고에서 다뤄주셔서 답안 작성 시 막힘이 없었습니다. 배지윤 선생님의 놀라운 적중률</span></p>
										</div>
									</swiper-slide>
							  </swiper>
							</div>
							<div class="mbPage">
								<span class="swiper-button-prev" slot="button-prev"/>
								<span class="swiper-button-next" slot="button-next"/>
							</div>
						</div>
						<!-- //목록 -->
					</div>
				</article>
			</div>
			<!--시험 적중 상세-->
			<div class="iRealHitViewPop" v-if='this.iRealHitPopTrigger'>
				<button @click="iRealHitPopTrigger = false, scrollHiden($event)" class="modalClose">close</button>
				<div class="iRealHitDetailBack">
					<div class="iRealHitDetail">
						<div class="ssamHit" v-if="issamHit == 0">
							<div>
								<div class="name">교육학 <strong>김현</strong> 선생님</div>
								<swiper :options="introHitOption2">
									<swiper-slide>
										<img :src="require(`@/assets/images/thumbnail/@tmp_introThumb201.png`)" alt="" />
									</swiper-slide>
									<swiper-slide>
										<img :src="require(`@/assets/images/thumbnail/@tmp_introThumb202.png`)" alt="" />
									</swiper-slide>
									<swiper-slide>
										<img :src="require(`@/assets/images/thumbnail/@tmp_introThumb203.png`)" alt="" />
									</swiper-slide>
								</swiper>
								<div class="mbPage">
									<div class="swiper-pagination" slot="pagination"/>
									<div class="swiper-button-prev" slot="button-prev"/>
									<div class="swiper-button-next" slot="button-next"/>
								</div>
							</div>
							<div class="withSsam">
								<p>
									압도적인 명성을 증명하다!
									<strong>2022학년도 교육학은 김현선생님과 함께!</strong>
								</p>
							</div>
							<router-link to="" class="btnTcHomeName">선생님 홈 바로가기</router-link>
						</div>
						<div class="ssamHit" v-if="issamHit == 1">
							<div>
								<div class="name">교육학 <strong>권구현</strong> 선생님</div>
								<swiper :options="introHitOption2">
									<swiper-slide>
										<img :src="require(`@/assets/images/thumbnail/@tmp_introThumb201.png`)" alt="" />
									</swiper-slide>
									<swiper-slide>
										<img :src="require(`@/assets/images/thumbnail/@tmp_introThumb202.png`)" alt="" />
									</swiper-slide>
									<swiper-slide>
										<img :src="require(`@/assets/images/thumbnail/@tmp_introThumb203.png`)" alt="" />
									</swiper-slide>
								</swiper>
								<div class="mbPage">
									<div class="swiper-pagination" slot="pagination"/>
									<div class="swiper-button-prev" slot="button-prev"/>
									<div class="swiper-button-next" slot="button-next"/>
								</div>
							</div>
							<div class="withSsam">
								<p>
									압도적인 명성을 증명하다!
									<strong>2022학년도 교육학은 권구현선생님과 함께!</strong>
								</p>
							</div>
							<router-link to="" class="btnTcHomeName">선생님 홈 바로가기</router-link>
						</div>
						<div class="ssamHit" v-if="issamHit == 2">
							<div>
								<div class="name">교육학 <strong>윤중</strong> 선생님</div>
								<swiper :options="introHitOption2">
									<swiper-slide>
										<img :src="require(`@/assets/images/thumbnail/@tmp_introThumb201.png`)" alt="" />
									</swiper-slide>
									<swiper-slide>
										<img :src="require(`@/assets/images/thumbnail/@tmp_introThumb202.png`)" alt="" />
									</swiper-slide>
									<swiper-slide>
										<img :src="require(`@/assets/images/thumbnail/@tmp_introThumb203.png`)" alt="" />
									</swiper-slide>
								</swiper>
								<div class="mbPage">
									<div class="swiper-pagination" slot="pagination"/>
									<div class="swiper-button-prev" slot="button-prev"/>
									<div class="swiper-button-next" slot="button-next"/>
								</div>
							</div>
							<div class="withSsam">
								<p>
									압도적인 명성을 증명하다!
									<strong>2022학년도 교육학은 윤중샘선생님과 함께!</strong>
								</p>
							</div>
							<router-link to="" class="btnTcHomeName">선생님 홈 바로가기</router-link>
						</div>
						<div class="list">
							<ul>
								<li :class="{active:issamHit===0}" @click="issamHit = 0">
									<span>교육학 <strong>김현</strong></span>
									<img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice01.png`)" alt="" />
								</li>
								<li :class="{active:issamHit===1}" @click="issamHit = 1">
									<span>교육학 <strong>권구현</strong></span>
									<img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice02.png`)" alt="" />
								</li>
								<li :class="{active:issamHit===2}" @click="issamHit = 2">
									<span>교육학 <strong>윤중샘</strong></span>
									<img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice03.png`)" alt="" />
								</li>
								<li>
									<span>유아 <strong>배지윤</strong></span>
									<img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice04.png`)" alt="" />
								</li>
								<li>
									<span>유아 <strong>이동건</strong></span>
									<img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice05.png`)" alt="" />
								</li>
								<li>
									<span>논술 <strong>양재웅</strong></span>
									<img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice06.png`)" alt="" />
								</li>
								<li>
									<span>국어 <strong>박노송</strong></span>
									<img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice07.png`)" alt="" />
								</li>
								<li>
									<span>국어 <strong>송헌</strong></span>
									<img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice08.png`)" alt="" />
								</li>
								<li>
									<button @click="iRealHitPopTrigger = false, scrollHiden($event)">적중내역 더보기</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!--//시험 적중 상세-->
			<!-- 맞춤 합격전략 -->
			<div class="item" ref="introGo5">
				<article>
					<IntroDirection />
				</article>
			</div>
			<!-- 위치 안내 -->
			<div class="item" ref="introGo6">
				<article>
					<IntroLocation />
				</article>
			</div>
		</div>
	</div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import IntroPassM from '@/views/main/IntroPassM.vue';
import IntroPresentationM from '@/views/main/IntroPresentationM.vue';
import IntroDirection from '@/views/main/IntroDirection.vue';
import IntroLocation from '@/views/main/IntroLocation.vue';

export default {
  mixins: [Mixin],
  name: 'IntroM',
  components: {
		IntroPassM,
		IntroPresentationM,
		IntroDirection,
		IntroLocation
  },
  data() {
    return {
			introTrigger:false,
			introTab:0,
			evevtPopTrigger:false,
			swiperOption01: {
				effect: "fade",
				spaceBetween: 0,
				loop:true,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false
        },
				speed: 500,
				pagination: {
					el: ".introVisual .swiper-pagination",
					clickable: true,
				},
				navigation: { nextEl: '.introVisual .swiper-button-next', prevEl: '.introVisual .swiper-button-prev' },
			},
			iEVListOption:{
        slidesPerView: 'auto',
				spaceBetween: 10,
				loop:true
			},
      eventTit:'첫구매 학습지원 이벤트',
      eventDate:'2021-08-31 ~ 2021-09-23',
			iEVdetailOption:{
				spaceBetween: 0,
				loop:true,
				speed: 1500,
				observer: true,	// 추가
				observeParents: true,	// 추가
				navigation: { nextEl: '.iEventViewPop .swiper-button-next', prevEl: '.iEventViewPop .swiper-button-prev' },
			},
			iRHTab:0,
			issamHit:0,
			introHitOption1: {
        slidesPerView: "auto",
				loop:false,
				spaceBetween: 20,
        centeredSlides: true,
				loop:true,
				navigation: { nextEl: '.introRealHit .swiper-button-next', prevEl: '.introRealHit .swiper-button-prev' },
			},
			iRealHitPopTrigger:false,
			introHitOption2: {
        slidesPerView: 1,
				loop:false,
				spaceBetween: 20,
				pagination: {
					el: ".ssamHit .swiper-pagination",
					clickable: true,
				},
				navigation: { nextEl: '.ssamHit .swiper-button-next', prevEl: '.ssamHit .swiper-button-prev' },
			}
    }
  },
	methods: {
    slideChange() {
			let indexNum = this.$refs.iEventSwiper.$swiper.realIndex+1;
			if (indexNum == 1){
				this.eventTit = '첫구매 학습지원 이벤트';
				this.eventDate = '2021-08-31 ~ 2021-09-23';
			} else if (indexNum == 2){
				this.eventTit = '첫구매 학습지원 이벤트2';
				this.eventDate = '2021-09-24 ~ 2021-10-23';
			} else if (indexNum == 3){
				this.eventTit = '첫구매 학습지원 이벤트3';
				this.eventDate = '2021-10-24 ~ 2021-11-23';
			}
    },
    goto(refName) {
      var element = this.$refs[refName];
      var topPos = element.offsetTop - 60;
			this.introTrigger = false;
      window.scrollTo({
        top: topPos,
        left: 0,
        behavior: 'smooth'
      });
    }
		,
		handleScroll() {
			let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치

			let introGo0LocTop = this.$refs.introGo0.offsetTop + 0;
			let introGo1LocTop = this.$refs.introGo1.offsetTop - 60;
			let introGo2LocTop = this.$refs.introGo2.offsetTop - 60;
			let introGo3LocTop = this.$refs.introGo3.offsetTop - 60;
			let introGo4LocTop = this.$refs.introGo4.offsetTop - 60;
			let introGo5LocTop = this.$refs.introGo5.offsetTop - 60;
			let introGo6LocTop = this.$refs.introGo6.offsetTop - 60;
			if (introGo0LocTop <= scrollLocation && introGo1LocTop > scrollLocation) {
				this.introTab = 0;
			} else if (introGo1LocTop <= scrollLocation && introGo2LocTop > scrollLocation) {
				this.introTab = 1;
			} else if (introGo2LocTop <= scrollLocation && introGo3LocTop > scrollLocation) {
				this.introTab = 2;
			} else if (introGo3LocTop <= scrollLocation && introGo4LocTop > scrollLocation) {
				this.introTab = 3;
			} else if (introGo4LocTop <= scrollLocation && introGo5LocTop > scrollLocation) {
				this.introTab = 4;
			} else if (introGo5LocTop <= scrollLocation && introGo6LocTop > scrollLocation) {
				this.introTab = 5;
			} else if (introGo6LocTop <= scrollLocation) {
				this.introTab = 6;
			}
		}
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll, true);
	},
	destroyed() {
		window.removeEventListener('scroll', this.handleScroll, true);
	},
}
</script>
