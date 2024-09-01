<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container">
    <section>
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="openLecComment">
          <div class="subTit">
            <h3>다 알려 줄게, 기출해설</h3>
            <span class="right-po openSorting">
              <span class="selectSet">
                <select name="" id="">
                  <option value="">과목</option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option value="">선생님</option>
                </select>
              </span>
            </span>
          </div>
          <div class="openLecList">
            <ul>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
            </ul>
            <Paginate />
          </div>
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->

    <!-- 영상팝업 샘플  -->
    <VideoPopup v-if='videoPopTrigger01' @close="videoPopTrigger01 = false"></VideoPopup>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'Comment',
  components: {
  },
  data() {
    return {
      videoPopTrigger01: false,
    }
  },
}
</script>
<style lang="css" scoped>
#wrapBack.mDevice .openLecComment .openLecList .openLecThumbnail:nth-child(n+11):nth-child(-n+20) {display:none;}
</style>
