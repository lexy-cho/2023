<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container" class="snbCase">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="ssammallBookView">
          <div class="mallProductView">
            <!---->
            <div class="productBox">
              <div class="productInfo">
                <div class="imgBox"><span><img :src="require(`@/assets/images//thumbnail/@tmp_book01.png`)" alt="2021 류지원 영어교육학 기출문제집"/></span></div>
                <div class="txtBox">
                  <em class="iSbjSetMini">교육학</em>
                  <em class="inComeDed">소득공제</em>
                  <strong>류지원 영어교육학 기출문제집</strong>
                  <span class="lecLimit red">강좌 수강시에만 구매가능한 교재입니다.</span>
                  <div class="moreInfo">
                    <span><em>저자</em>류지원</span>
                    <span><em>출판사</em>나무 퍼블리셔</span>
                    <span><em>출간일</em>2021-02-06</span>
                  </div>
                  <button class="btnAllSsam" v-if="this.mobile" @click="ssamChoiceTrigger = true">선생님선택</button>
                </div>
              </div>
              <!---->
              <div class="orderInfo">
                <div class="priceArea">
                  <dl v-if="!this.mobile">
                    <dt>주문수량</dt>
                    <dd>
                      <span class="countBox">
                        <button class="minus">-</button>
                        <span class="count">1</span>
                        <button class="plus">+</button>
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>정가</dt>
                    <dd><em class="cost">86,000</em>원</dd>
                  </dl>
                  <dl class="productPrice">
                    <dt>판매가</dt>
                    <dd>
                      <span class="price"><strong>86,000<i>원</i></strong></span>
                    </dd>
                  </dl>
                  <!-- <dl>
                    <dt>배송비</dt>
                    <dd class="deliveryTxt"><em>2,500</em> 원 <button @click="popupTrigger04 = true">?</button></dd>
                  </dl> -->
                  <dl>
                    <dt>배송비</dt>
                    <dd class="deliveryTxt">무료 <button @click="deliveryInfoPopTrigger = true">?</button></dd>
                  </dl>
                </div>
                <div class="btnArea" v-if="!this.mobile">
                  <button class="btnL redline" @click="popupTrigger01 = true">장바구니</button>
                  <button class="btnL red" @click="popupTrigger02 = true">즉시결제</button>
                  <!-- 품목이 품절일 시 -->
                  <button class="btnL line solo" style="display:none;" @click="popupTrigger03 = true">입고 안내문자 신청</button>
                </div>
              </div>
              <!---->
            </div>
            <!--//-->
            <!-- 이 교재와 관련된 강좌 -->
            <div class="relatedLecture">
              <div class="subTit noLine"><h3>이 교재와 관련된 강좌</h3></div>
              <ul>
                <li>
                  <em>영어교육론</em>
                  <strong>기출분석 문제및이론 정리반</strong>
                  <div>
                    <button class="btnSmartDetail">강좌 맛보기</button>
                    <router-link to="" class="btnTcHome">류지원 선생님</router-link>
                  </div>
                </li>
                <li>
                  <em>영어교육론</em>
                  <strong>심화이론 원서응용반</strong>
                  <div>
                    <button class="btnSmartDetail">강좌 맛보기</button>
                    <router-link to="" class="btnTcHome">류지원 선생님</router-link>
                  </div>
                </li>
                <li>
                  <em>영어교육론</em>
                  <strong>핵심이론반</strong>
                  <div>
                    <button class="btnSmartDetail">강좌 맛보기</button>
                    <router-link to="" class="btnTcHome">류지원 선생님</router-link>
                  </div>
                </li>
              </ul>
            </div>
            <!-- //이 교재와 관련된 강좌 -->
            <!-- 퀵무브 -->
            <div class="quickMove">
              <ul>
                <li :class="{on:currentTab===0}"><button @click="gotoMallView('mallViewTrigger01')">교재 상세</button></li>
                <li :class="{on:currentTab===1}"><button @click="gotoMallView('mallViewTrigger02')">목차</button></li>
                <li :class="{on:currentTab===2}"><button @click="gotoMallView('mallViewTrigger03')">선생님의 다른교재</button></li>
                <li class="new" :class="{on:currentTab===3}"><button @click="gotoMallView('mallViewTrigger04')">백퍼후기</button></li>
              </ul>
            </div>
            <!-- //퀵무브 -->
            <div class="mallContents">
              <!-- 소개 -->
              <div class="contentsBox" id="intro" ref="mallViewTrigger01">
                <div class="subTit">
                  <h3>소개</h3>
                  <button class="btnVideo" @click="videoPopTrigger01 = true">영상소개</button>
                </div>
                <p class="fGray">류지원 영어교육학 기출문제집은 기출 문제를 디테일하게 분석하고 시험을 준비할 때 놓치기 쉬운 포인트들을 복습하기 쉽도록 정리한 교재입니다. <br/>
                  또한 기본 이론 강좌를 통해 학습한 많은 팁과 개념을 문제에 빠르게 적용하고 확실하게 답을 찾아내는 기술을 연습할 수 있습니다.</p>
              </div>
              <!-- //소개 -->
              <!-- 서평 -->
              <div class="contentsBox">
                <div class="subTit">
                  <h3>서평</h3>
                </div>
                <p class="fGray">교원임용 시험대비 전공영어 기본서로, 방대한 영어교육론 내용이 일목요연하게 정리되어 있어 영어교육론의 전반적인 지식을 보다 쉽게 습득할 수 있도록 하였다. 또한 영어교육론의 다양한 개념들을 이해한 후, 그 개념들을 응용할 수 있는 힘을 요구하는 현 교원임용시험의 경향에 대비할 수 있도록 다양한 자료를 수록하였다. <br/>
                  특히 영어교육론을 처음 접하는 시점에서부터, 서술/논술에 대비한 최적화된 bilingual text로 구성하였다. <br/>부록으로 2018~2020학년도 기출문제를 수록함으로써 수험생들이 시험 직전 이론 마무리는 물론 실전 시험 감각을 크게 향상시킬 수 있도록 하였다.</p>
              </div>
              <!-- //서평 -->
              <!-- 저자 -->
              <div class="contentsBox">
                <div class="subTit">
                  <h3>저자</h3>
                </div>
                <div class="introTeacher">
                  <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt="" /></span>
                  <div>
                    <dl>
                      <dd>
                        <ul>
                          <li>미시간 대학교(The University of Michigan, Ann Arbor) : 영어교육 전공</li>
                          <li>컬럼비아 대학교(Columbia University) : Teachers College 복수 전공, 응용 언어학 석사(MA) &amp; 언어 평가 분야 석사</li>
                        </ul>
                      </dd>
                    </dl>
                    <dl class="moreData">
                      <dt class="moreTit">주요 경력사항</dt>
                      <dd>
                        <ul>
                          <li>2014년 11월 ~ 2017년 6월 : 박문각 임용고시학원 강사 겸 연구원</li>
                          <li>2017년 9월 ~ 2017년 11월 : 아모르이그잼학원 영어교육론 전임교수</li>
                          <li>2017년 11월 ~ 현재 : KG에듀원 희소고시학원 영어교육론 전임교수</li>
                        </ul>
                      </dd>
                      <dt class="moreTit">주요 저서</dt>
                      <dd>
                        <ul>
                          <li>전공영어 류지원 영어교육론(도서출판 지금, 2020, 2019, 2018)</li>
                          <li>류지원 전공영어 심화 영어교육론(아람출판사, 2020, 2019) 접기</li>
                          <li>2021 전공영어 류지원 영어교육론</li>
                        </ul>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <!-- //저자 -->
              <!-- 목차 -->
              <div class="contentsBox" id="list" ref="mallViewTrigger02">
                <div class="subTit">
                  <h3>목차</h3>
                </div>
                <div class="bookOrgan">
                  <div class="organBox" :class="{open:more===true}">
                    <dl>
                      <dt>제6편 교육심리학</dt>
                      <dd>
                        제1장 교육심리학의 본질
                        <ul>
                          <li>01. 교육의 정의</li>
                          <li>02. 교육의 세 측면</li>
                          <li>03. 교육심리학의 성격</li>
                          <li>04. 교육 심리학 목차</li>
                          <li>05. 교육심리학 목차</li>
                        </ul>
                      </dd>
                    </dl>
                    <dl>
                      <dt>제7편 교육심리학</dt>
                      <dd>
                        제1장 교육심리학의 본질
                        <ul>
                          <li>01. 교육의 정의</li>
                          <li>02. 교육의 세 측면</li>
                        </ul>
                      </dd>
                    </dl>
                  </div>
                  <button class="moreBtn" :class="{open:more===true}" @click="listToggle">
                    {{moreTxt}}
                  </button>
                </div>
              </div>
              <!-- //목차 -->
              <!-- 선생님의 다른 교재 -->
              <div class="contentsBox" id="other" ref="mallViewTrigger03">
                <div class="subTit">
                  <h3>선생님의 다른 교재</h3>
                </div>
                <div class="otherbook">
                  <swiper :options="otherBookOption">
                    <swiper-slide>
                      <router-link to="/mkup/ssammall/book/view">
                        <div class="bookGoods">
                          <div class="goodsImg">
                            <img :src="require(`@/assets/images/thumbnail/@tmp_book01.png`)" alt=""/>
                          </div>
                          <div class="goodsDetail">
                            <em class="iSbjSetMini">교육학</em>
                            <strong>8개년 교육학논술 기출 분석모범답안</strong>
                            <span class="price">
                              <strong>13,500<i>원</i></strong>
                              <del>15,000원</del>
                              <em>10<b>%</b></em>
                            </span>
                          </div>
                        </div>
                      </router-link>
                    </swiper-slide>
                    <swiper-slide>
                      <router-link to="/mkup/ssammall/book/view">
                        <div class="bookGoods">
                          <div class="goodsImg">
                            <img :src="require(`@/assets/images/thumbnail/@tmp_book06.png`)" alt=""/>
                          </div>
                          <div class="goodsDetail">
                            <em class="iSbjSetMini">교육학</em>
                            <strong>2022 키위 교육학 골드편</strong>
                            <span class="price">
                              <strong>13,500<i>원</i></strong>
                            </span>
                          </div>
                        </div>
                      </router-link>
                    </swiper-slide>
                    <swiper-slide>
                      <router-link to="/mkup/ssammall/book/view">
                        <div class="bookGoods">
                          <div class="goodsImg">
                            <img :src="require(`@/assets/images/thumbnail/@tmp_book03.png`)" alt=""/>
                          </div>
                          <div class="goodsDetail">
                            <em class="iSbjSetMini">교육학</em>
                            <strong>키위 교육학 그린편 상권</strong>
                            <span class="price">
                              <strong>13,500<i>원</i></strong>
                            </span>
                          </div>
                        </div>
                      </router-link>
                    </swiper-slide>
                    <swiper-slide>
                      <router-link to="/mkup/ssammall/book/view">
                        <div class="bookGoods">
                          <div class="goodsImg">
                            <img :src="require(`@/assets/images/thumbnail/@tmp_book07.png`)" alt=""/>
                          </div>
                          <div class="goodsDetail">
                            <em class="iSbjSetMini">교육학</em>
                            <strong>키위 교육학 그린편 하권</strong>
                            <span class="price">
                              <strong>13,500<i>원</i></strong>
                              <del>15,000원</del>
                              <em>10<b>%</b></em>
                            </span>
                          </div>
                        </div>
                      </router-link>
                    </swiper-slide>
                    <swiper-slide>
                      <router-link to="/mkup/ssammall/book/view">
                        <div class="bookGoods">
                          <div class="goodsImg">
                            <img :src="require(`@/assets/images/thumbnail/@tmp_book07.png`)" alt=""/>
                          </div>
                          <div class="goodsDetail">
                            <em class="iSbjSetMini">교육학</em>
                            <strong>키위 교육학 그린편 하권</strong>
                            <span class="price">
                              <strong>13,500<i>원</i></strong>
                              <del>15,000원</del>
                              <em>10<b>%</b></em>
                            </span>
                          </div>
                        </div>
                      </router-link>
                    </swiper-slide>
                  </swiper>
                  <div class="swiper-scrollbar"></div>
                </div>
              </div>
              <!-- //선생님의 다른 교재 -->
              <!-- 백퍼후기 -->
              <div class="contentsBox" id="review" ref="mallViewTrigger04">
                <div class="bookReview">
                  <div class="subTit">
                    <h3>백퍼후기</h3>
                  </div>
                  <ul>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p>처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.</p>
                        </span>
                        <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_img01.png`)" @click="imgPopTrigger01 = true" alt=""/></span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p>처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.</p>
                        </span>
                        <span class="imgBox"></span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p :class="{open:reviewMore01===true}">처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.</p>
                        </span>
                        <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_img02.png`)" @click="imgPopTrigger02 = true" alt=""/></span>
                      </div>
                      <button class="moreBtn" :class="{open:reviewMore01===true}" @click="reviewToggle01">
                        {{reviewMoreTxt01}}
                      </button>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p :class="{open:reviewMore02===true}">모두 이 교재를 사도록 하세요. 선생님의 공부 팁이 아주 꽉꽉 담겨져 있습니다. 저는 강의도 같이 듣고 있는데 교재 진짜 필수에요. 류지원 선생님 강의 듣지 않는 분들에게도 강추입니다 꼭 사세요 진짜 둘도 없는 영어 교재에요. 지루하지 않고 핵심 쏙쏙 들어있고, 류지원 선생님만의 특유 방식으로 기억에도 잘 남게 정리되어 있어요. 진짜 핵강추입니다. 모두 이 교재를 사도록 하세요. 선생님의 공부 팁이 아주 꽉꽉 담겨져 있습니다. 저는 강의도 같이 듣고 있는데 교재 진짜 필수에요. 류지원 선생님 강의 듣지 않는 분들에게도 강추입니다 꼭 사세 요. 진짜 둘도 없는 영어 교재에요. 지루하지 않고 핵심 쏙쏙 들어있고, 류지원 선생님만의 특유 방식으로 기억에 도 잘 남게 정리되어 있어요. 진짜 핵강추입니다.</p>
                        </span>
                        <span class="imgBox"></span>
                      </div>
                      <button class="moreBtn" :class="{open:reviewMore02===true}" @click="reviewToggle02">
                        {{reviewMoreTxt02}}
                      </button>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p>처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.</p>
                        </span>
                        <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_img01.png`)" @click="imgPopTrigger01 = true" alt=""/></span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p>처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.</p>
                        </span>
                        <span class="imgBox"></span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p :class="{open:reviewMore03===true}">처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.</p>
                        </span>
                        <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_img02.png`)" @click="imgPopTrigger02 = true" alt=""/></span>
                      </div>
                      <button class="moreBtn" :class="{open:reviewMore03===true}" @click="reviewToggle03">
                        {{reviewMoreTxt03}}
                      </button>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p :class="{open:reviewMore04===true}">모두 이 교재를 사도록 하세요. 선생님의 공부 팁이 아주 꽉꽉 담겨져 있습니다. 저는 강의도 같이 듣고 있는데 교재 진짜 필수에요. 류지원 선생님 강의 듣지 않는 분들에게도 강추입니다 꼭 사세요 진짜 둘도 없는 영어 교재에요. 지루하지 않고 핵심 쏙쏙 들어있고, 류지원 선생님만의 특유 방식으로 기억에도 잘 남게 정리되어 있어요. 진짜 핵강추입니다. 모두 이 교재를 사도록 하세요. 선생님의 공부 팁이 아주 꽉꽉 담겨져 있습니다. 저는 강의도 같이 듣고 있는데 교재 진짜 필수에요. 류지원 선생님 강의 듣지 않는 분들에게도 강추입니다 꼭 사세 요. 진짜 둘도 없는 영어 교재에요. 지루하지 않고 핵심 쏙쏙 들어있고, 류지원 선생님만의 특유 방식으로 기억에 도 잘 남게 정리되어 있어요. 진짜 핵강추입니다.</p>
                        </span>
                        <span class="imgBox"></span>
                      </div>
                      <button class="moreBtn" :class="{open:reviewMore04===true}" @click="reviewToggle04">
                        {{reviewMoreTxt04}}
                      </button>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p>처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.</p>
                        </span>
                        <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_img01.png`)" @click="imgPopTrigger01 = true" alt=""/></span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p>처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.</p>
                        </span>
                        <span class="imgBox"></span>
                      </div>
                    </li>
                  </ul>
                  <Paginate />
                </div>
              </div>
              <!-- //백퍼후기 -->
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

    <!-- Popup -->
    <!-- 쌤 Mall 배송비 안내 -->
    <Popup v-if='deliveryInfoPopTrigger' @close="deliveryInfoPopTrigger = false" class="deliveryInfoPop">
      <template slot="modalheader">
        <div>
          <h1>쌤 Mall 배송비 안내</h1>
          <button @click="deliveryInfoPopTrigger = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <p>
          배송비는 주문 건 당 2,500원이며, 제주/산간/도서 지역의 경우 <br/>
          3,000원의 추가 배송비가 발생됩니다. <br/>
          판매가 30,000원 이상 교재의 경우 무료 배송 되며, <br/>
          일부 교재의 경우 배송료가 차등 설정될 수 있습니다. (별도 표기)
        </p>
      </template>
    </Popup>
    <!-- //쌤 Mall 배송비 안내 -->
    <!-- 장바구니 -->
    <Alert v-if='popupTrigger01' @close="popupTrigger01 = false">
      <template slot="modalbody">
        <div class="basicNoty"><p>선택한 교재를 장바구니에 추가하였습니다.</p></div>
      </template>
      <template slot="modalfooter">
        <router-link class="btnM line" to="/mkup/mypage/payment/basket">장바구니로 이동</router-link>
        <button class="btnM" @click="popupTrigger01 = false">구매를 계속함</button>
      </template>
    </Alert>
    <!-- //장바구니 -->
    <!-- 즉시결제 -->
    <Alert v-if='popupTrigger02' @close="popupTrigger02 = false">
      <template slot="modalbody">
        <div class="basicNoty"><p>즉시결제를 하시겠습니까?</p></div>
      </template>
      <template slot="modalfooter">
        <button class="btnM line" @click="popupTrigger02 = false">취소</button>
        <button class="btnM" @click="popupTrigger02 = false">확인</button>
      </template>
    </Alert>
    <!-- //즉시결제 -->
    <!-- 입고 안내문자 신청 -->
    <Popup v-if='popupTrigger03' @close="popupTrigger03 = false" class="bookWearingrPop">
      <template slot="modalheader">
        <div>
          <h1>입고 안내문자 신청</h1>
          <button @click="popupTrigger03 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <div class="bookGuideContents">
          <span class="txt01">본 교재는 일시품절 상태입니다.</span>
          <span class="number">010-1234-5678</span>
          <span class="txt02">회원님의 연락처로 입고 즉시 SMS를 통해 안내해 드리겠습니다.</span>
        </div>
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnM" @click="popupTrigger03 = false">신청</button>
        </div>
      </template>
    </Popup>
    <!-- //입고 안내문자 신청 -->
    <ImgPopup v-if='imgPopTrigger01' @close="imgPopTrigger01 = false">
      <div slot="modalbody">
        <img :src="require(`@/assets/images/thumbnail/@tmp_img01.png`)" alt=""/>
      </div>
    </ImgPopup>
    <ImgPopup v-if='imgPopTrigger02' @close="imgPopTrigger02 = false">
      <div slot="modalbody">
        <img :src="require(`@/assets/images/thumbnail/@tmp_img02.png`)" alt=""/>
      </div>
    </ImgPopup>
    <!-- 선생님 팝업 -->
    <Popup v-if='ssamChoiceTrigger' @close="ssamChoiceTrigger = false" class="SsamChoicePop">
      <template slot="modalheader">
        <div>
          <h1>선생님 전체보기</h1>
          <button @click="ssamChoiceTrigger = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <BookSsamList />
      </template>
    </Popup>
    <!-- //선생님 팝업 -->
    <!-- 영상팝업 샘플  -->
    <VideoPopup v-if='videoPopTrigger01' @close="videoPopTrigger01 = false"></VideoPopup>
    <!-- //Popup -->

    <!-- 모바일용 결제내역 -->
    <div id="buyFloating" :class="{on:buyFloatingTrigger == true}" v-if="this.mobile">
      <div class="buyOpnerBack"><button class="buyOpner" @click="buyFloatingTrigger = !buyFloatingTrigger">여닫기</button></div>
      <!-- 데이터 영역 -->
      <div class="buyTemplate">
        <!-- 쌤 Mall 도서  -->
        <div class="buySet">
          <dl>
            <dt>주문수량</dt>
            <dd>
              <span class="countBox">
                <button class="minus">-</button>
                <span class="count">1</span>
                <button class="plus">+</button>
              </span>
            </dd>
          </dl>
          <dl>
            <dt>정가</dt>
            <dd>
              <span class="price"><strong>86,000<i>원</i></strong></span>
            </dd>
          </dl>
          <dl>
            <dt>판매가</dt>
            <dd>
              <span class="price"><del>193,000</del><em>10<b>%</b></em><strong>2,712,000<i>원</i></strong></span>
            </dd>
          </dl>
          <dl>
            <dt>배송비</dt>
            <dd><span class="price"><strong>2,500<i>원</i></strong></span><button @click="popupTrigger04 = true">?</button></dd>
          </dl>
          <dl class="total">
            <dt>총 결제 금액</dt>
            <dd>
              <span class="price"><strong>1,542,000<i>원</i></strong></span>
            </dd>
          </dl>
        </div>
        <!-- //쌤 Mall 도서  -->
      </div>
      <!-- //데이터 영역 -->
      <div class="buyBtnSet">
        <!-- <button class="btnL gray" @click="popupTrigger03 = true">입고안내문자신청</button> -->
        <button class="btnL red" v-if="!buyFloatingTrigger" @click="buyFloatingTrigger = !buyFloatingTrigger">구매하기</button>
        <span v-if="buyFloatingTrigger">
          <button class="btnL redline" @click="popupTrigger01 = true">장바구니</button>
          <button class="btnL red" @click="popupTrigger02 = true">즉시결제</button>
        </span>
      </div>
    </div>
    <!-- //데이터 영역 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import BookSsamList from '@/views/ssammall/BookSsamList.vue';

export default {
  mixins: [Mixin],
  name: 'BookView',
  components: {
    BookSsamList
  },
  data() {
    return {
      buyFloatingTrigger:false,
      videoPopTrigger01: false,
      popupTrigger01: false,
      popupTrigger02: false,
      popupTrigger03: false,
      popupTrigger04: false,
      imgPopTrigger01: false,
      imgPopTrigger02: false,
      deliveryInfoPopTrigger : false,
      currentTab: 0,
      more: false,
      reviewMore01: true,
      reviewMore02: true,
      reviewMore03: true,
      reviewMore04: true,
      quickLoc: 0,
      moreTxt: '더보기',
      reviewMoreTxt01: '접기',
      reviewMoreTxt02: '접기',
      reviewMoreTxt03: '접기',
      reviewMoreTxt04: '접기',
      otherBookOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        //loop:true,
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
          draggable: true,
        },
      },
      ssamChoiceTrigger: false,
    }
  },
  methods: {
    listToggle() {
      if (this.more) {
        this.more = false;
        this.moreTxt = '더보기';
      } else {
        this.more = true;
        this.moreTxt = '접기';
      }
    },
    reviewToggle01() {
      if (this.reviewMore01) {
        this.reviewMore01 = false;
        this.reviewMoreTxt01 = '더보기';
      } else {
        this.reviewMore01 = true;
        this.reviewMoreTxt01 = '접기';
      }
    },
    reviewToggle02() {
      if (this.reviewMore02) {
        this.reviewMore02 = false;
        this.reviewMoreTxt02 = '더보기';
      } else {
        this.reviewMore02 = true;
        this.reviewMoreTxt02 = '접기';
      }
    },
    reviewToggle03() {
      if (this.reviewMore03) {
        this.reviewMore03 = false;
        this.reviewMoreTxt03 = '더보기';
      } else {
        this.reviewMore03 = true;
        this.reviewMoreTxt03 = '접기';
      }
    },
    reviewToggle04() {
      if (this.reviewMore04) {
        this.reviewMore04 = false;
        this.reviewMoreTxt04 = '더보기';
      } else {
        this.reviewMore04 = true;
        this.reviewMoreTxt04 = '접기';
      }
    },
    gotoMallView(refName) {
      var element = this.$refs[refName];
      var topPos = element.offsetTop + 100;
      window.scrollTo({
        top: topPos,
        left: 0,
        behavior: 'smooth'
      });
    },
    handleScroll() {
      let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
      let introLoc = document.querySelector("#intro").offsetTop;
      let listLoc = document.querySelector("#list").offsetTop;
      let otherLoc = document.querySelector("#other").offsetTop;
      let reviewLoc = document.querySelector("#review").offsetTop;

      if (introLoc <= scrollLocation && listLoc > scrollLocation) {
        this.currentTab = 0;
      } else if (listLoc <= scrollLocation && otherLoc > scrollLocation) {
        this.currentTab = 1;
      } else if (otherLoc <= scrollLocation && reviewLoc > scrollLocation) {
        this.currentTab = 2;
      } else if (reviewLoc <= scrollLocation) {
        this.currentTab = 3;
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
